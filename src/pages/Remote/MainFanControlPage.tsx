import {
  CSSProperties,
  ReactNode,
  Suspense,
  lazy,
  useEffect,
  useState,
} from "react";
import {
  Button,
  Card,
  Col,
  InputNumber,
  List,
  Modal,
  Popconfirm,
  Row,
  Slider,
  Space,
  Tag,
  Typography,
  message,
} from "antd";
import {
  AlertOutlined,
  ApiOutlined,
  AppstoreOutlined,
  BellOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloudOutlined,
  ControlOutlined,
  DashboardOutlined,
  FileTextOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  PlayCircleOutlined,
  PoweroffOutlined,
  ReloadOutlined,
  RocketOutlined,
  SafetyOutlined,
  SettingOutlined,
  SwapOutlined,
  ThunderboltFilled,
  WarningOutlined,
} from "@ant-design/icons";

type FanRole = "主机" | "备机";
type FanStatus = "运行" | "待机" | "停止" | "检修";
type InterlockStatus = "pass" | "warning" | "lock";
type FeedbackStatus = "success" | "processing" | "warning";
type AlertLevel = "critical" | "warning" | "info";

interface BackgroundSettings {
  paused: boolean;
  rotationSpeed: number;
  opacity: number;
  brightness: number;
}

interface MainFan {
  id: string;
  name: string;
  role: FanRole;
  status: FanStatus;
  station: string;
  driveMode: string;
  power: number;
  current: number;
  speed: number;
  frequency: number;
  airflow: number;
  pressure: number;
  vibration: number;
  bearingTemp: number;
  load: number;
  runtime: string;
  lastUpdate: string;
}

interface MainFanUnit {
  id: string;
  name: string;
  area: string;
  controlMode: string;
  activeFanId?: string;
  fans: MainFan[];
}

interface InterlockCondition {
  name: string;
  value: string;
  detail: string;
  status: InterlockStatus;
}

interface FeedbackItem {
  key: number;
  target: string;
  action: string;
  status: FeedbackStatus;
  message: string;
  time: string;
  duration: string;
}

interface AlertItem {
  key: number;
  source: string;
  title: string;
  detail: string;
  level: AlertLevel;
  time: string;
}

interface OperationRecord {
  key: number;
  user: string;
  action: string;
  target: string;
  result: string;
  time: string;
}

const DEFAULT_BG_SETTINGS: BackgroundSettings = {
  paused: false,
  rotationSpeed: 0,
  opacity: 0.55,
  brightness: 1.4,
};

const LazyHomeObjBackground = lazy(async () => {
  const module = await import("../../components/topology/HomeObjBackground3D");
  return { default: module.HomeObjBackground3D };
});

const INITIAL_FAN_UNITS: MainFanUnit[] = [
  {
    id: "unit-1",
    name: "1号主通风机组",
    area: "东翼回风立井",
    controlMode: "变频双机",
    activeFanId: "MF-1A",
    fans: [
      {
        id: "MF-1A",
        name: "1号主通风机组主机",
        role: "主机",
        status: "运行",
        station: "东翼主扇站",
        driveMode: "变频控制",
        power: 1420,
        current: 208,
        speed: 960,
        frequency: 42,
        airflow: 12400,
        pressure: 2860,
        vibration: 3.2,
        bearingTemp: 61,
        load: 78,
        runtime: "126h",
        lastUpdate: "14:32:18",
      },
      {
        id: "MF-1B",
        name: "1号主通风机组备机",
        role: "备机",
        status: "待机",
        station: "东翼主扇站",
        driveMode: "变频控制",
        power: 0,
        current: 0,
        speed: 0,
        frequency: 0,
        airflow: 0,
        pressure: 0,
        vibration: 0.8,
        bearingTemp: 34,
        load: 0,
        runtime: "0h",
        lastUpdate: "14:31:56",
      },
    ],
  },
  {
    id: "unit-2",
    name: "2号主通风机组",
    area: "西翼回风立井",
    controlMode: "变频双机",
    activeFanId: "MF-2A",
    fans: [
      {
        id: "MF-2A",
        name: "2号主通风机组主机",
        role: "主机",
        status: "运行",
        station: "西翼主扇站",
        driveMode: "变频控制",
        power: 1365,
        current: 194,
        speed: 915,
        frequency: 39.5,
        airflow: 11760,
        pressure: 2745,
        vibration: 3.8,
        bearingTemp: 64,
        load: 73,
        runtime: "93h",
        lastUpdate: "14:32:05",
      },
      {
        id: "MF-2B",
        name: "2号主通风机组备机",
        role: "备机",
        status: "检修",
        station: "西翼主扇站",
        driveMode: "变频控制",
        power: 0,
        current: 0,
        speed: 0,
        frequency: 0,
        airflow: 0,
        pressure: 0,
        vibration: 0.6,
        bearingTemp: 31,
        load: 0,
        runtime: "0h",
        lastUpdate: "13:58:44",
      },
    ],
  },
];

const INITIAL_FEEDBACK: FeedbackItem[] = [
  {
    key: 1,
    target: "MF-1A",
    action: "状态刷新",
    status: "success",
    message: "设备状态已回传，风量与压差参数正常。",
    time: "14:32:18",
    duration: "1.2s",
  },
  {
    key: 2,
    target: "MF-2A",
    action: "主机运行监测",
    status: "processing",
    message: "西翼机组振动趋势分析中，等待最新采样包。",
    time: "14:31:52",
    duration: "-",
  },
  {
    key: 3,
    target: "MF-2B",
    action: "检修闭锁",
    status: "warning",
    message: "设备处于检修状态，远程切换指令已被预拦截。",
    time: "14:28:09",
    duration: "0.6s",
  },
];

const INITIAL_ALERTS: AlertItem[] = [
  {
    key: 1,
    source: "2号主通风机组",
    title: "备机检修闭锁投入",
    detail: "MF-2B 检修票据有效，主备切换前需完成现场复归。",
    level: "warning",
    time: "14:28:09",
  },
  {
    key: 2,
    source: "1号主通风机组",
    title: "轴承温度稳定",
    detail: "MF-1A 轴承温度 61℃，处于正常控制区间。",
    level: "info",
    time: "14:26:33",
  },
  {
    key: 3,
    source: "2号主通风机组",
    title: "振动接近关注阈值",
    detail: "MF-2A 振动 3.8 mm/s，建议持续观察。",
    level: "warning",
    time: "14:25:47",
  },
];

const INITIAL_RECORDS: OperationRecord[] = [
  {
    key: 1,
    user: "调度员-周工",
    action: "状态刷新",
    target: "MF-1A",
    result: "成功",
    time: "14:32:18",
  },
  {
    key: 2,
    user: "值班员-李工",
    action: "运行确认",
    target: "MF-2A",
    result: "成功",
    time: "14:29:06",
  },
  {
    key: 3,
    user: "调度员-周工",
    action: "主备切换预检",
    target: "MF-2B",
    result: "拦截",
    time: "14:28:10",
  },
];

const hiddenScrollbarStyle = `
  .main-fan-scroll {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .page-card .ant-card-body {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .main-fan-scroll::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  .page-card .ant-card-body::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;

const textGlow: CSSProperties = {
  color: "#ffffff",
  textShadow: "0 0 15px rgba(156, 208, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)",
};

function nowTime() {
  return new Date().toLocaleTimeString("zh-CN", { hour12: false });
}

function getCardChrome(
  borderColor: string,
  glowColor: string,
  headerStart: string,
  headerEnd: string,
) {
  return {
    style: {
      background: "transparent",
      border: `2px solid ${borderColor}`,
      boxShadow: `0 4px 20px rgba(11, 35, 62, 0.6), 0 0 30px ${glowColor}, inset 0 1px 0 rgba(196, 225, 255, 0.2)`,
      backdropFilter: "blur(16px)",
    } as CSSProperties,
    headStyle: {
      background: `linear-gradient(180deg, ${headerStart} 0%, ${headerEnd} 100%)`,
      borderBottom: `2px solid ${borderColor}`,
      padding: "8px 12px",
      minHeight: "auto",
      flexShrink: 0,
    } as CSSProperties,
  };
}

function renderCardTitle(icon: ReactNode, title: string) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {icon}
      <span style={{ fontSize: 13, fontWeight: 700, ...textGlow }}>
        {title}
      </span>
    </div>
  );
}

function getFanStatusTagColor(status: FanStatus) {
  if (status === "运行") return "success";
  if (status === "检修") return "warning";
  if (status === "待机") return "processing";
  return "default";
}

function getFeedbackTagColor(status: FeedbackStatus) {
  if (status === "success") return "success";
  if (status === "processing") return "processing";
  return "warning";
}

function getAlertTagColor(level: AlertLevel) {
  if (level === "critical") return "error";
  if (level === "warning") return "warning";
  return "blue";
}

function getInterlockTagColor(status: InterlockStatus) {
  if (status === "pass") return "success";
  if (status === "warning") return "warning";
  return "error";
}

function getActionButtonStyle(
  background: string,
  border: string,
  glow: string,
) {
  return {
    height: 40,
    fontWeight: 600,
    background,
    border: `1px solid ${border}`,
    color: "#ffffff",
    boxShadow: `0 4px 12px ${glow}`,
  } as CSSProperties;
}

function buildRunningMetrics(speed: number) {
  const normalized = Math.max(0, Math.min(1, (speed - 650) / 600));

  return {
    frequency: Number((30 + normalized * 20).toFixed(1)),
    load: Math.max(48, Math.min(96, Math.round(55 + normalized * 35))),
    power: Math.round(1100 + normalized * 580),
    current: Math.round(150 + normalized * 90),
    airflow: Math.round(9800 + normalized * 3600),
    pressure: Math.round(2350 + normalized * 800),
    bearingTemp: Math.round(55 + normalized * 22),
    vibration: Number((2.8 + normalized * 2.2).toFixed(1)),
  };
}

function renderMetricBox(
  label: string,
  value: string,
  icon: ReactNode,
  background: string,
  border: string,
  valueColor: string,
) {
  return (
    <div
      style={{
        padding: "8px 10px",
        borderRadius: 6,
        background,
        border: `1px solid ${border}`,
        boxShadow: `0 2px 8px ${border}`,
        minHeight: 72,
      }}
    >
      <Typography.Text
        style={{
          fontSize: 11,
          color: "#b8d9ff",
          display: "block",
          marginBottom: 8,
        }}
      >
        {icon}
        <span style={{ marginLeft: 4 }}>{label}</span>
      </Typography.Text>
      <Typography.Text
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: valueColor,
          display: "block",
        }}
      >
        {value}
      </Typography.Text>
    </div>
  );
}

function renderSectionLabel(icon: ReactNode, title: string, color: string) {
  return (
    <Typography.Text
      style={{
        fontSize: 13,
        color: "#ffffff",
        fontWeight: 700,
        display: "block",
        marginBottom: 10,
        textShadow: `0 0 10px ${color}`,
      }}
    >
      <span style={{ color, marginRight: 6 }}>{icon}</span>
      {title}
    </Typography.Text>
  );
}

function getFeedbackItemStyle(status: FeedbackStatus) {
  if (status === "success") {
    return {
      background: "linear-gradient(135deg, rgba(82, 196, 26, 0.14) 0%, rgba(82, 196, 26, 0.06) 100%)",
      border: "1px solid rgba(82, 196, 26, 0.28)",
      boxShadow: "0 2px 8px rgba(82, 196, 26, 0.12)",
    } as CSSProperties;
  }

  if (status === "warning") {
    return {
      background: "linear-gradient(135deg, rgba(250, 173, 20, 0.16) 0%, rgba(250, 173, 20, 0.06) 100%)",
      border: "1px solid rgba(250, 173, 20, 0.3)",
      boxShadow: "0 2px 8px rgba(250, 173, 20, 0.12)",
    } as CSSProperties;
  }

  return {
    background: "linear-gradient(135deg, rgba(24, 144, 255, 0.12) 0%, rgba(24, 144, 255, 0.06) 100%)",
    border: "1px solid rgba(145, 213, 255, 0.28)",
    boxShadow: "0 2px 8px rgba(24, 144, 255, 0.12)",
  } as CSSProperties;
}

function getInterlockConditions(
  unit: MainFanUnit,
  currentFan: MainFan,
  pairedFan?: MainFan,
): InterlockCondition[] {
  return [
    {
      name: "高压柜状态",
      value: "合闸就绪",
      detail: `${unit.name} 高压馈线远方控制已授权。`,
      status: "pass",
    },
    {
      name: "润滑站油压",
      value: unit.id === "unit-1" ? "0.32 MPa" : "0.27 MPa",
      detail:
        unit.id === "unit-1"
          ? "油压正常，满足启动与调速要求。"
          : "油压偏低但仍在关注区，请观察油站状态。",
      status: unit.id === "unit-1" ? "pass" : "warning",
    },
    {
      name: "风门到位",
      value: "100% 全开",
      detail: "主扇联动风门已反馈到位信号。",
      status: "pass",
    },
    {
      name: "瓦斯浓度",
      value: unit.id === "unit-1" ? "0.34%" : "0.41%",
      detail: "抽采区域浓度低于远控闭锁阈值。",
      status: "pass",
    },
    {
      name: "检修闭锁",
      value: currentFan.status === "检修" ? "检修中" : "已解除",
      detail:
        currentFan.status === "检修"
          ? "当前所选风机仍处于检修票据生效期。"
          : "当前设备可接收远程控制指令。",
      status: currentFan.status === "检修" ? "lock" : "pass",
    },
    {
      name: "主备切换条件",
      value: pairedFan && pairedFan.status !== "检修" ? "满足" : "备机不可用",
      detail:
        pairedFan && pairedFan.status !== "检修"
          ? "备用机状态正常，可执行主备切换。"
          : "备用机检修或不可投运，切换指令将被拦截。",
      status: pairedFan && pairedFan.status !== "检修" ? "pass" : "warning",
    },
  ];
}

export default function MainFanControlPage() {
  const [api, contextHolder] = message.useMessage();
  const [bgSettings] = useState<BackgroundSettings>(DEFAULT_BG_SETTINGS);
  const [backgroundReady, setBackgroundReady] = useState(false);
  const [fanUnits, setFanUnits] = useState<MainFanUnit[]>(INITIAL_FAN_UNITS);
  const [selectedFanId, setSelectedFanId] = useState("MF-1A");
  const [feedbackItems, setFeedbackItems] =
    useState<FeedbackItem[]>(INITIAL_FEEDBACK);
  const [alertItems, setAlertItems] = useState<AlertItem[]>(INITIAL_ALERTS);
  const [operationRecords, setOperationRecords] =
    useState<OperationRecord[]>(INITIAL_RECORDS);
  const [speedModalOpen, setSpeedModalOpen] = useState(false);
  const [speedValue, setSpeedValue] = useState(960);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setBackgroundReady(true);
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const currentUnit =
    fanUnits.find((unit) =>
      unit.fans.some((fan) => fan.id === selectedFanId),
    ) ?? fanUnits[0];
  const currentFan =
    currentUnit.fans.find((fan) => fan.id === selectedFanId) ??
    currentUnit.fans[0];
  const pairedFan = currentUnit.fans.find((fan) => fan.id !== currentFan.id);
  const interlockConditions = getInterlockConditions(
    currentUnit,
    currentFan,
    pairedFan,
  );
  const hasLockCondition = interlockConditions.some(
    (item) => item.status === "lock",
  );
  const hasWarningCondition = interlockConditions.some(
    (item) => item.status === "warning",
  );
  const flatFans = fanUnits.flatMap((unit) => unit.fans);

  useEffect(() => {
    setSpeedValue(currentFan.speed > 0 ? currentFan.speed : 900);
  }, [currentFan.id, currentFan.speed]);

  const feedbackSummary = {
    success: feedbackItems.filter((item) => item.status === "success").length,
    processing: feedbackItems.filter((item) => item.status === "processing")
      .length,
    warning: feedbackItems.filter((item) => item.status === "warning").length,
  };

  const pushFeedback = (item: Omit<FeedbackItem, "key">) => {
    setFeedbackItems((prev) =>
      [{ key: Date.now(), ...item }, ...prev].slice(0, 6),
    );
  };

  const pushRecord = (record: Omit<OperationRecord, "key">) => {
    setOperationRecords((prev) =>
      [{ key: Date.now() + 1, ...record }, ...prev].slice(0, 8),
    );
  };

  const pushAlert = (alert: Omit<AlertItem, "key">) => {
    setAlertItems((prev) => {
      const filtered = prev.filter(
        (item) => !(item.source === alert.source && item.title === alert.title),
      );
      return [{ key: Date.now() + 2, ...alert }, ...filtered].slice(0, 6);
    });
  };

  const removeAlert = (title: string, source: string) => {
    setAlertItems((prev) =>
      prev.filter((item) => !(item.title === title && item.source === source)),
    );
  };

  const updateSelectedUnit = (updater: (unit: MainFanUnit) => MainFanUnit) => {
    setFanUnits((prev) =>
      prev.map((unit) =>
        unit.fans.some((fan) => fan.id === selectedFanId)
          ? updater(unit)
          : unit,
      ),
    );
  };

  const onFanSelect = (fanId: string) => {
    setSelectedFanId(fanId);
    api.info(`已切换到 ${fanId}`);
  };

  const onRefresh = () => {
    const time = nowTime();

    updateSelectedUnit((unit) => ({
      ...unit,
      fans: unit.fans.map((fan) =>
        fan.id === currentFan.id ? { ...fan, lastUpdate: time } : fan,
      ),
    }));

    pushFeedback({
      target: currentFan.id,
      action: "状态刷新",
      status: "success",
      message: "设备状态已重新拉取，现场遥测数据同步完成。",
      time,
      duration: "1.1s",
    });
    pushRecord({
      user: "调度员-周工",
      action: "状态刷新",
      target: currentFan.id,
      result: "成功",
      time,
    });
    api.success(`${currentFan.id} 状态已刷新`);
  };

  const onStart = () => {
    const time = nowTime();

    if (currentFan.status === "检修" || hasLockCondition) {
      pushFeedback({
        target: currentFan.id,
        action: "启动指令",
        status: "warning",
        message: "存在检修闭锁或安全联锁未满足，启动已被拦截。",
        time,
        duration: "0.5s",
      });
      pushRecord({
        user: "调度员-周工",
        action: "启动",
        target: currentFan.id,
        result: "拦截",
        time,
      });
      api.warning("安全联锁未满足，启动指令已拦截");
      return;
    }

    const metrics = buildRunningMetrics(
      currentFan.speed > 0 ? currentFan.speed : 920,
    );

    updateSelectedUnit((unit) => ({
      ...unit,
      activeFanId: currentFan.id,
      fans: unit.fans.map((fan) => {
        if (fan.id === currentFan.id) {
          return {
            ...fan,
            status: "运行",
            power: metrics.power,
            current: metrics.current,
            speed: currentFan.speed > 0 ? currentFan.speed : 920,
            frequency: metrics.frequency,
            airflow: metrics.airflow,
            pressure: metrics.pressure,
            vibration: metrics.vibration,
            bearingTemp: metrics.bearingTemp,
            load: metrics.load,
            runtime: fan.runtime === "0h" ? "0.3h" : fan.runtime,
            lastUpdate: time,
          };
        }

        if (fan.id !== currentFan.id && fan.status === "运行") {
          return { ...fan, status: "待机", lastUpdate: time };
        }

        return fan;
      }),
    }));

    pushFeedback({
      target: currentFan.id,
      action: "启动指令",
      status: "success",
      message: "远程启动执行成功，设备已进入稳定运行状态。",
      time,
      duration: "2.4s",
    });
    pushRecord({
      user: "调度员-周工",
      action: "启动",
      target: currentFan.id,
      result: "成功",
      time,
    });
    api.success(`${currentFan.id} 已启动`);
  };

  const onStop = () => {
    const time = nowTime();

    if (currentFan.status !== "运行") {
      api.info(`${currentFan.id} 当前未运行`);
      return;
    }

    updateSelectedUnit((unit) => ({
      ...unit,
      activeFanId:
        unit.activeFanId === currentFan.id ? undefined : unit.activeFanId,
      fans: unit.fans.map((fan) =>
        fan.id === currentFan.id
          ? {
              ...fan,
              status: "停止",
              power: 0,
              current: 0,
              speed: 0,
              frequency: 0,
              airflow: 0,
              pressure: 0,
              load: 0,
              lastUpdate: time,
            }
          : fan,
      ),
    }));

    pushFeedback({
      target: currentFan.id,
      action: "停机指令",
      status: "success",
      message: "停机完成，相关联锁已恢复至待命状态。",
      time,
      duration: "2.1s",
    });
    pushRecord({
      user: "调度员-周工",
      action: "停机",
      target: currentFan.id,
      result: "成功",
      time,
    });
    api.success(`${currentFan.id} 已停止`);
  };

  const onSwitch = () => {
    const time = nowTime();

    if (!pairedFan || pairedFan.status === "检修") {
      pushFeedback({
        target: currentUnit.name,
        action: "主备切换",
        status: "warning",
        message: "备用机处于检修或不可投运状态，切换指令已拦截。",
        time,
        duration: "0.6s",
      });
      pushRecord({
        user: "调度员-周工",
        action: "主备切换",
        target: currentUnit.name,
        result: "拦截",
        time,
      });
      api.warning("备用机不可用，无法执行主备切换");
      return;
    }

    const nextSpeed =
      pairedFan.speed > 0 ? pairedFan.speed : Math.max(currentFan.speed, 900);
    const metrics = buildRunningMetrics(nextSpeed);

    updateSelectedUnit((unit) => ({
      ...unit,
      activeFanId: pairedFan.id,
      fans: unit.fans.map((fan) => {
        if (fan.id === currentFan.id) {
          return {
            ...fan,
            status: "待机",
            power: 0,
            current: 0,
            load: 0,
            lastUpdate: time,
          };
        }

        if (fan.id === pairedFan.id) {
          return {
            ...fan,
            status: "运行",
            speed: nextSpeed,
            frequency: metrics.frequency,
            load: metrics.load,
            power: metrics.power,
            current: metrics.current,
            airflow: metrics.airflow,
            pressure: metrics.pressure,
            vibration: metrics.vibration,
            bearingTemp: metrics.bearingTemp,
            runtime: fan.runtime === "0h" ? "0.2h" : fan.runtime,
            lastUpdate: time,
          };
        }

        return fan;
      }),
    }));

    setSelectedFanId(pairedFan.id);
    pushFeedback({
      target: currentUnit.name,
      action: "主备切换",
      status: "success",
      message: `切换完成，当前投运设备为 ${pairedFan.id}。`,
      time,
      duration: "3.2s",
    });
    pushRecord({
      user: "调度员-周工",
      action: "主备切换",
      target: currentUnit.name,
      result: "成功",
      time,
    });
    api.success(`${currentUnit.name} 已切换至 ${pairedFan.id}`);
  };

  const onConfirmSpeed = () => {
    const time = nowTime();
    const metrics = buildRunningMetrics(speedValue);

    updateSelectedUnit((unit) => ({
      ...unit,
      fans: unit.fans.map((fan) =>
        fan.id === currentFan.id
          ? {
              ...fan,
              speed: speedValue,
              frequency: metrics.frequency,
              load: currentFan.status === "运行" ? metrics.load : fan.load,
              power: currentFan.status === "运行" ? metrics.power : fan.power,
              current:
                currentFan.status === "运行" ? metrics.current : fan.current,
              airflow:
                currentFan.status === "运行" ? metrics.airflow : fan.airflow,
              pressure:
                currentFan.status === "运行" ? metrics.pressure : fan.pressure,
              vibration:
                currentFan.status === "运行"
                  ? metrics.vibration
                  : fan.vibration,
              bearingTemp:
                currentFan.status === "运行"
                  ? metrics.bearingTemp
                  : fan.bearingTemp,
              lastUpdate: time,
            }
          : fan,
      ),
    }));

    if (speedValue >= 1150) {
      pushAlert({
        source: currentUnit.name,
        title: "高转速运行关注",
        detail: `${currentFan.id} 已调速至 ${speedValue} rpm，请关注轴承温升与振动变化。`,
        level: "warning",
        time,
      });
    } else {
      removeAlert("高转速运行关注", currentUnit.name);
    }

    pushFeedback({
      target: currentFan.id,
      action: "转速调节",
      status: "success",
      message: `目标转速已设为 ${speedValue} rpm，参数整定完成。`,
      time,
      duration: "1.8s",
    });
    pushRecord({
      user: "调度员-周工",
      action: "转速调节",
      target: currentFan.id,
      result: "成功",
      time,
    });
    setSpeedModalOpen(false);
    api.success(`${currentFan.id} 转速已调整为 ${speedValue} rpm`);
  };

  const overviewCardChrome = getCardChrome(
    "rgba(150, 205, 255, 0.5)",
    "rgba(74, 157, 232, 0.15)",
    "rgba(89, 154, 221, 0.2)",
    "rgba(89, 154, 221, 0.1)",
  );
  const controlCardChrome = getCardChrome(
    "rgba(255, 193, 7, 0.55)",
    "rgba(255, 193, 7, 0.18)",
    "rgba(255, 193, 7, 0.25)",
    "rgba(255, 193, 7, 0.12)",
  );
  const safetyCardChrome = getCardChrome(
    "rgba(82, 196, 26, 0.55)",
    "rgba(82, 196, 26, 0.18)",
    "rgba(82, 196, 26, 0.22)",
    "rgba(82, 196, 26, 0.12)",
  );
  const feedbackCardChrome = getCardChrome(
    "rgba(145, 213, 255, 0.55)",
    "rgba(145, 213, 255, 0.18)",
    "rgba(145, 213, 255, 0.22)",
    "rgba(145, 213, 255, 0.12)",
  );
  const alertCardChrome = getCardChrome(
    "rgba(255, 163, 77, 0.55)",
    "rgba(255, 163, 77, 0.18)",
    "rgba(255, 163, 77, 0.22)",
    "rgba(255, 163, 77, 0.12)",
  );

  const startDisabled =
    currentFan.status === "运行" ||
    currentFan.status === "检修" ||
    hasLockCondition;
  const stopDisabled = currentFan.status !== "运行";
  const switchDisabled =
    !pairedFan || pairedFan.status === "检修" || hasLockCondition;
  const speedDisabled = currentFan.status !== "运行";
  return (
    <div
      style={{
        position: "relative",
        height: "calc(100vh - 120px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {contextHolder}
      <style>{hiddenScrollbarStyle}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          borderRadius: 8,
          overflow: "hidden",
          pointerEvents: "auto",
        }}
      >
        {backgroundReady ? (
          <Suspense
            fallback={
              <div style={{ padding: 20, color: "#999" }}>3D背景载入中</div>
            }
          >
            <LazyHomeObjBackground
              paused={bgSettings.paused}
              rotationSpeed={bgSettings.rotationSpeed}
              opacity={bgSettings.opacity}
              brightness={bgSettings.brightness}
              disableRotation={false}
              viewScale={4.5}
              viewAzimuthDeg={90}
            />
          </Suspense>
        ) : (
          <div style={{ padding: 20, color: "#999" }}>
            正在准备主通风机 3D 背景模型
          </div>
        )}
      </div>

      <div
        className="page-wrapper"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: 12,
          pointerEvents: "none",
        }}
      >
        <Row
          gutter={[12, 12]}
          style={{
            flex: 3,
            minHeight: 0,
            marginBottom: 10,
            pointerEvents: "none",
          }}
        >
          <Col
            span={5}
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              pointerEvents: "auto",
            }}
          >
            <Card
              className="page-card"
              size="small"
              title={renderCardTitle(
                <AppstoreOutlined style={{ fontSize: 15, color: "#69c0ff" }} />,
                "主风机选择",
              )}
              style={{
                ...overviewCardChrome.style,
                flex: "0 0 auto",
              }}
              headStyle={overviewCardChrome.headStyle}
              bodyStyle={{
                padding: "10px 12px",
                background: "transparent",
              }}
            >
              <Row gutter={[8, 8]}>
                {flatFans.map((fan) => {
                  const selected = fan.id === currentFan.id;
                  const unit = fanUnits.find((u) =>
                    u.fans.some((f) => f.id === fan.id)
                  );
                  const active = unit?.activeFanId === fan.id;

                  return (
                    <Col span={6} key={fan.id}>
                      <div
                        onClick={() => onFanSelect(fan.id)}
                        style={{
                          padding: "8px 10px",
                          background: selected
                            ? "linear-gradient(90deg, rgba(24, 144, 255, 0.35) 0%, rgba(24, 144, 255, 0.2) 100%)"
                            : "rgba(89, 154, 221, 0.1)",
                          borderRadius: 6,
                          border: selected
                            ? "2px solid rgba(24, 144, 255, 0.8)"
                            : "1px solid rgba(150, 205, 255, 0.3)",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          boxShadow: selected
                            ? "0 0 12px rgba(24, 144, 255, 0.4), inset 0 0 6px rgba(24, 144, 255, 0.2)"
                            : "none",
                        }}
                        onMouseEnter={(e) => {
                          if (!selected) {
                            e.currentTarget.style.background =
                              "rgba(89, 154, 221, 0.2)";
                            e.currentTarget.style.borderColor =
                              "rgba(150, 205, 255, 0.5)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!selected) {
                            e.currentTarget.style.background =
                              "rgba(89, 154, 221, 0.1)";
                            e.currentTarget.style.borderColor =
                              "rgba(150, 205, 255, 0.3)";
                          }
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            marginBottom: 6,
                          }}
                        >
                          <RocketOutlined
                            style={{
                              fontSize: 16,
                              color: selected ? "#1890ff" : "#69c0ff",
                              filter: selected
                                ? "drop-shadow(0 0 4px rgba(24, 144, 255, 0.8))"
                                : "none",
                            }}
                          />
                          <Typography.Text
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: selected ? "#ffffff" : "#e8f4ff",
                              textShadow: selected
                                ? "0 0 6px rgba(24, 144, 255, 0.6)"
                                : "none",
                            }}
                          >
                            {fan.id}
                          </Typography.Text>
                        </div>
                        <Typography.Text
                          style={{
                            fontSize: 10,
                            color: "#b8d9ff",
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          {fan.role} · {fan.station}
                        </Typography.Text>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography.Text
                            style={{
                              fontSize: 10,
                              color: "#91caff",
                              fontWeight: 600,
                            }}
                          >
                            {fan.power}kW
                          </Typography.Text>
                          <Tag
                            color={
                              selected
                                ? "processing"
                                : active
                                  ? "success"
                                  : getFanStatusTagColor(fan.status)
                            }
                            style={{
                              fontSize: 10,
                              fontWeight: 600,
                              padding: "0px 6px",
                              margin: 0,
                              lineHeight: "18px",
                            }}
                          >
                            {selected ? "已选" : active ? "投运" : fan.status}
                          </Tag>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Card>
          </Col>

          <Col
            span={6}
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              gap: 10,
              marginLeft: "auto",
              pointerEvents: "auto",
            }}
          >
            <Card
              className="page-card"
              size="small"
              title={renderCardTitle(
                <DashboardOutlined
                  style={{ fontSize: 15, color: "#69c0ff" }}
                />,
                "主风机运行总览",
              )}
              style={{
                ...overviewCardChrome.style,
                flex: "0 0 auto",
              }}
              headStyle={overviewCardChrome.headStyle}
              bodyStyle={{ padding: "10px 12px", background: "transparent" }}
            >
              <Space direction="vertical" size={8} style={{ width: "100%" }}>
                {/* 设备名称与状态 */}
                <div
                  style={{
                    padding: "8px 10px",
                    background:
                      "linear-gradient(135deg, rgba(24, 144, 255, 0.2) 0%, rgba(24, 144, 255, 0.1) 100%)",
                    borderRadius: 6,
                    border: "1px solid rgba(24, 144, 255, 0.5)",
                    boxShadow: "0 2px 8px rgba(24, 144, 255, 0.2)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Typography.Text
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#ffffff",
                        display: "block",
                      }}
                    >
                      {currentFan.id}
                    </Typography.Text>
                    <Typography.Text style={{ fontSize: 11, color: "#b8d9ff" }}>
                      <ApiOutlined style={{ fontSize: 11, marginRight: 4 }} />
                      {currentFan.station}
                    </Typography.Text>
                  </div>
                  <Space size={6}>
                    <Tag color="blue" style={{ margin: 0, fontSize: 11, padding: "2px 8px" }}>
                      {currentFan.role}
                    </Tag>
                    <Tag
                      color={
                        currentFan.status === "运行"
                          ? "success"
                          : currentFan.status === "停止"
                            ? "default"
                            : currentFan.status === "待机"
                              ? "processing"
                              : "warning"
                      }
                      style={{ fontSize: 11, padding: "2px 8px", margin: 0 }}
                    >
                      <PlayCircleOutlined style={{ marginRight: 4 }} />
                      {currentFan.status === "运行"
                        ? "运行中"
                        : currentFan.status === "停止"
                          ? "已停止"
                          : currentFan.status === "待机"
                            ? "待机中"
                            : "检修中"}
                    </Tag>
                  </Space>
                </div>

                {/* 关键运行参数 */}
                <Row gutter={8}>
                  <Col span={8}>
                    <div
                      style={{
                        padding: "6px 8px",
                        background: "rgba(82, 196, 26, 0.15)",
                        borderRadius: 4,
                        border: "1px solid rgba(82, 196, 26, 0.4)",
                        textAlign: "center",
                      }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: 10,
                          color: "#b8d9ff",
                          display: "block",
                        }}
                      >
                        <ThunderboltFilled
                          style={{ fontSize: 10, marginRight: 2 }}
                        />
                        功率
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#52c41a",
                        }}
                      >
                        {currentFan.power}kW
                      </Typography.Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      style={{
                        padding: "6px 8px",
                        background: "rgba(24, 144, 255, 0.15)",
                        borderRadius: 4,
                        border: "1px solid rgba(24, 144, 255, 0.4)",
                        textAlign: "center",
                      }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: 10,
                          color: "#b8d9ff",
                          display: "block",
                        }}
                      >
                        <DashboardOutlined
                          style={{ fontSize: 10, marginRight: 2 }}
                        />
                        负载
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#69c0ff",
                        }}
                      >
                        {currentFan.load}%
                      </Typography.Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      style={{
                        padding: "6px 8px",
                        background: "rgba(135, 208, 104, 0.15)",
                        borderRadius: 4,
                        border: "1px solid rgba(135, 208, 104, 0.4)",
                        textAlign: "center",
                      }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: 10,
                          color: "#b8d9ff",
                          display: "block",
                        }}
                      >
                        <CloudOutlined
                          style={{ fontSize: 10, marginRight: 2 }}
                        />
                        风量
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#95de64",
                        }}
                      >
                        {currentFan.airflow}
                      </Typography.Text>
                    </div>
                  </Col>
                </Row>

                {/* 次要参数 */}
                <Row gutter={8}>
                  <Col span={8}>
                    <div
                      style={{
                        padding: "6px 8px",
                        background: "rgba(250, 173, 20, 0.15)",
                        borderRadius: 4,
                        border: "1px solid rgba(250, 173, 20, 0.4)",
                        textAlign: "center",
                      }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: 10,
                          color: "#b8d9ff",
                          display: "block",
                        }}
                      >
                        转速
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#ffd666",
                        }}
                      >
                        {currentFan.speed}rpm
                      </Typography.Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      style={{
                        padding: "6px 8px",
                        background: "rgba(255, 77, 79, 0.15)",
                        borderRadius: 4,
                        border: "1px solid rgba(255, 77, 79, 0.35)",
                        textAlign: "center",
                      }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: 10,
                          color: "#b8d9ff",
                          display: "block",
                        }}
                      >
                        轴温
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#ff7875",
                        }}
                      >
                        {currentFan.bearingTemp}℃
                      </Typography.Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      style={{
                        padding: "6px 8px",
                        background: "rgba(135, 208, 104, 0.15)",
                        borderRadius: 4,
                        border: "1px solid rgba(135, 208, 104, 0.4)",
                        textAlign: "center",
                      }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: 10,
                          color: "#b8d9ff",
                          display: "block",
                        }}
                      >
                        静压
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#95de64",
                        }}
                      >
                        {currentFan.pressure}Pa
                      </Typography.Text>
                    </div>
                  </Col>
                </Row>

                {/* 运行时长与更新时间 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 4,
                  }}
                >
                  <Typography.Text style={{ fontSize: 11, color: "#b8d9ff" }}>
                    <ClockCircleOutlined
                      style={{ fontSize: 11, marginRight: 4 }}
                    />
                    运行时长：{currentFan.runtime}
                  </Typography.Text>
                  <Typography.Text style={{ fontSize: 11, color: "#b8d9ff" }}>
                    <ReloadOutlined style={{ fontSize: 11, marginRight: 4 }} />
                    {currentFan.lastUpdate}
                  </Typography.Text>
                </div>
              </Space>
            </Card>

            <Card
              className="page-card"
              size="small"
              title={renderCardTitle(
                <ControlOutlined style={{ fontSize: 15, color: "#ffd666" }} />,
                "设备控制操作",
              )}
              style={{
                ...controlCardChrome.style,
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
              }}
              headStyle={controlCardChrome.headStyle}
              bodyStyle={{
                padding: "10px 12px",
                background: "transparent",
              }}
            >
              <Space direction="vertical" size={12} style={{ width: "100%" }}>
                <div
                  style={{
                    padding: "10px 12px",
                    background:
                      "linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 193, 7, 0.1) 100%)",
                    borderRadius: 6,
                    border: "1px solid rgba(255, 193, 7, 0.5)",
                    boxShadow: "0 2px 8px rgba(255, 193, 7, 0.2)",
                  }}
                >
                  <Row gutter={[8, 8]}>
                    <Col span={12}>
                      <div
                        style={{
                          padding: "6px 8px",
                          background: "rgba(24, 144, 255, 0.15)",
                          borderRadius: 4,
                          border: "1px solid rgba(24, 144, 255, 0.3)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography.Text style={{ fontSize: 11, color: "#e8f4ff" }}>
                          <ApiOutlined style={{ marginRight: 4 }} />
                          控制模式
                        </Typography.Text>
                        <Tag color="blue" style={{ fontSize: 11, margin: 0 }}>
                          远程
                        </Tag>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div
                        style={{
                          padding: "6px 8px",
                          background: hasLockCondition ? "rgba(255, 77, 79, 0.14)" : "rgba(82, 196, 26, 0.15)",
                          borderRadius: 4,
                          border: hasLockCondition ? "1px solid rgba(255, 77, 79, 0.3)" : "1px solid rgba(82, 196, 26, 0.3)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography.Text style={{ fontSize: 11, color: "#e8f4ff" }}>
                          <SafetyOutlined style={{ marginRight: 4 }} />
                          安全联锁
                        </Typography.Text>
                        <Tag color={hasLockCondition ? "error" : "success"} style={{ fontSize: 11, margin: 0 }}>
                          {hasLockCondition ? "闭锁" : "启用"}
                        </Tag>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div
                        style={{
                          padding: "6px 8px",
                          background: "rgba(145, 213, 255, 0.12)",
                          borderRadius: 4,
                          border: "1px solid rgba(145, 213, 255, 0.3)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography.Text style={{ fontSize: 11, color: "#e8f4ff" }}>
                          <PlayCircleOutlined style={{ marginRight: 4 }} />
                          当前设备
                        </Typography.Text>
                        <Typography.Text style={{ fontSize: 11, fontWeight: 700, color: "#ffffff" }}>
                          {currentFan.id}
                        </Typography.Text>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div
                        style={{
                          padding: "6px 8px",
                          background: "rgba(250, 173, 20, 0.12)",
                          borderRadius: 4,
                          border: "1px solid rgba(250, 173, 20, 0.3)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography.Text style={{ fontSize: 11, color: "#e8f4ff" }}>
                          <ClockCircleOutlined style={{ marginRight: 4 }} />
                          切换窗口
                        </Typography.Text>
                        <Tag color={switchDisabled ? "warning" : "success"} style={{ fontSize: 11, margin: 0 }}>
                          {switchDisabled ? "受限" : "可切换"}
                        </Tag>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div>
                  {renderSectionLabel(<ThunderboltFilled />, "基础控制", "rgba(255, 193, 7, 0.45)")}
                  <Row gutter={[10, 10]}>
                    <Col span={12}>
                      <Popconfirm
                        title={`确认启动 ${currentFan.id} ?`}
                        description={
                          <div style={{ fontSize: 12 }}>
                            <div>• 所属机组：{currentUnit.name}</div>
                            <div>• 预计启动耗时：25-40 秒</div>
                            <div>• 请确认现场风门与高压柜状态正常</div>
                          </div>
                        }
                        onConfirm={onStart}
                        okText="确认启动"
                        cancelText="取消"
                        disabled={startDisabled}
                      >
                        <Button
                          block
                          icon={<PlayCircleOutlined />}
                          disabled={startDisabled}
                          style={{
                            ...getActionButtonStyle(
                              "linear-gradient(135deg, rgba(82, 196, 26, 0.95) 0%, rgba(115, 209, 61, 0.95) 100%)",
                              "rgba(82, 196, 26, 0.55)",
                              "rgba(82, 196, 26, 0.28)",
                            ),
                            height: 46,
                            fontSize: 14,
                          }}
                        >
                          启动风机
                        </Button>
                      </Popconfirm>
                    </Col>
                    <Col span={12}>
                      <Popconfirm
                        title={`确认停止 ${currentFan.id} ?`}
                        description={
                          <div style={{ fontSize: 12, color: "#ffccc7" }}>
                            <div>• 停机将解除当前运行回路</div>
                            <div>• 若未完成切换，请确认备用机状态</div>
                            <div>• 停机过程约需 15-20 秒</div>
                          </div>
                        }
                        onConfirm={onStop}
                        okText="确认停机"
                        cancelText="取消"
                        disabled={stopDisabled}
                      >
                        <Button
                          block
                          icon={<PoweroffOutlined />}
                          disabled={stopDisabled}
                          style={{
                            ...getActionButtonStyle(
                              "linear-gradient(135deg, rgba(255, 77, 79, 0.95) 0%, rgba(255, 120, 117, 0.95) 100%)",
                              "rgba(255, 77, 79, 0.5)",
                              "rgba(255, 77, 79, 0.28)",
                            ),
                            height: 46,
                            fontSize: 14,
                          }}
                        >
                          停止风机
                        </Button>
                      </Popconfirm>
                    </Col>
                    <Col span={24}>
                      <Popconfirm
                        title={`确认执行 ${currentUnit.name} 主备切换?`}
                        description={
                          <div style={{ fontSize: 12 }}>
                            <div>• 当前运行设备：{currentUnit.activeFanId || "无"}</div>
                            <div>• 目标切换设备：{pairedFan?.id || "无可用备机"}</div>
                            <div>• 切换前将再次校验备机状态与联锁条件</div>
                          </div>
                        }
                        onConfirm={onSwitch}
                        okText="确认切换"
                        cancelText="取消"
                        disabled={switchDisabled}
                      >
                        <Button
                          block
                          icon={<SwapOutlined />}
                          disabled={switchDisabled}
                          style={getActionButtonStyle(
                            "linear-gradient(135deg, rgba(24, 144, 255, 0.95) 0%, rgba(105, 192, 255, 0.95) 100%)",
                            "rgba(24, 144, 255, 0.55)",
                            "rgba(24, 144, 255, 0.28)",
                          )}
                        >
                          主备切换
                        </Button>
                      </Popconfirm>
                    </Col>
                  </Row>
                </div>

                <div>
                  {renderSectionLabel(<SettingOutlined />, "调节设定", "rgba(255, 193, 7, 0.45)")}
                  <Row gutter={[10, 10]}>
                    <Col span={12}>
                      <Button
                        block
                        icon={<SettingOutlined />}
                        disabled={speedDisabled}
                        onClick={() => setSpeedModalOpen(true)}
                        style={getActionButtonStyle(
                          "linear-gradient(135deg, rgba(250, 173, 20, 0.95) 0%, rgba(255, 214, 102, 0.95) 100%)",
                          "rgba(250, 173, 20, 0.45)",
                          "rgba(250, 173, 20, 0.26)",
                        )}
                      >
                        转速调节
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button
                        block
                        icon={<ReloadOutlined />}
                        onClick={onRefresh}
                        style={getActionButtonStyle(
                          "rgba(89, 154, 221, 0.18)",
                          "rgba(150, 205, 255, 0.4)",
                          "rgba(74, 157, 232, 0.18)",
                        )}
                      >
                        刷新状态
                      </Button>
                    </Col>
                  </Row>
                </div>

              </Space>
            </Card>

            <Card
              className="page-card"
              size="small"
              title={renderCardTitle(
                <SafetyOutlined style={{ fontSize: 15, color: "#73d13d" }} />,
                "安全联锁与控制条件",
              )}
              style={{
                ...safetyCardChrome.style,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
              }}
              headStyle={safetyCardChrome.headStyle}
              bodyStyle={{
                padding: "10px 12px",
                background: "transparent",
                flex: 1,
                minHeight: 0,
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
                  .page-card .ant-card-body::-webkit-scrollbar {
                    display: none !important;
                  }
                `}
              </style>
              <Space direction="vertical" size={8} style={{ width: "100%" }}>
                <div
                  style={{
                    padding: "8px 10px",
                    borderRadius: 6,
                    background: hasLockCondition
                      ? "linear-gradient(135deg, rgba(255, 77, 79, 0.18) 0%, rgba(255, 77, 79, 0.08) 100%)"
                      : hasWarningCondition
                        ? "linear-gradient(135deg, rgba(250, 173, 20, 0.18) 0%, rgba(250, 173, 20, 0.08) 100%)"
                        : "linear-gradient(135deg, rgba(82, 196, 26, 0.18) 0%, rgba(82, 196, 26, 0.08) 100%)",
                    border: hasLockCondition
                      ? "1px solid rgba(255, 77, 79, 0.35)"
                      : hasWarningCondition
                        ? "1px solid rgba(250, 173, 20, 0.35)"
                        : "1px solid rgba(82, 196, 26, 0.35)",
                  }}
                >
                  <Typography.Text
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {hasLockCondition
                      ? "存在闭锁条件，禁止远程控制"
                      : hasWarningCondition
                        ? "具备远控条件，请关注预警项"
                        : "联锁条件满足，可执行远程控制"}
                  </Typography.Text>
                </div>

                <Space
                  direction="vertical"
                  size={6}
                  style={{ width: "100%" }}
                >
                  {interlockConditions.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        padding: "6px 10px",
                        borderRadius: 6,
                        background: "rgba(12, 31, 52, 0.62)",
                        border: "1px solid rgba(145, 213, 255, 0.16)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography.Text
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#e8f4ff",
                          }}
                        >
                          {item.name}
                        </Typography.Text>
                        <Tag
                          color={getInterlockTagColor(item.status)}
                          style={{ margin: 0, fontSize: 10 }}
                        >
                          {item.value}
                        </Tag>
                      </div>
                    </div>
                  ))}
                </Space>
              </Space>
            </Card>
          </Col>
        </Row>

        <Row
          gutter={[12, 12]}
          style={{
            flex: 1,
            minHeight: 0,
            pointerEvents: "none",
          }}
        >
          <Col
            span={9}
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              pointerEvents: "auto",
            }}
          >
            <Card
              className="page-card"
              size="small"
              title={renderCardTitle(
                <FileTextOutlined style={{ fontSize: 15, color: "#91d5ff" }} />,
                "指令反馈状态",
              )}
              style={{
                ...feedbackCardChrome.style,
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
              }}
              headStyle={feedbackCardChrome.headStyle}
              bodyStyle={{
                padding: "10px 12px",
                background: "transparent",
                flex: 1,
                minHeight: 0,
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
                  .page-card .ant-card-body::-webkit-scrollbar {
                    display: none !important;
                  }
                `}
              </style>
              <Space
                direction="vertical"
                size={10}
                style={{ width: "100%", flex: 1, minHeight: 0 }}
              >
                <Row gutter={8}>
                  <Col span={8}>
                    {renderMetricBox(
                      "成功",
                      `${feedbackSummary.success}`,
                      <CheckCircleOutlined />,
                      "rgba(82, 196, 26, 0.15)",
                      "rgba(82, 196, 26, 0.35)",
                      "#73d13d",
                    )}
                  </Col>
                  <Col span={8}>
                    {renderMetricBox(
                      "执行中",
                      `${feedbackSummary.processing}`,
                      <ClockCircleOutlined />,
                      "rgba(24, 144, 255, 0.15)",
                      "rgba(24, 144, 255, 0.35)",
                      "#69c0ff",
                    )}
                  </Col>
                  <Col span={8}>
                    {renderMetricBox(
                      "预警",
                      `${feedbackSummary.warning}`,
                      <WarningOutlined />,
                      "rgba(250, 173, 20, 0.15)",
                      "rgba(250, 173, 20, 0.4)",
                      "#ffd666",
                    )}
                  </Col>
                </Row>

                <div
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    background: "linear-gradient(135deg, rgba(145, 213, 255, 0.16) 0%, rgba(145, 213, 255, 0.08) 100%)",
                    border: "1px solid rgba(145, 213, 255, 0.32)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Typography.Text style={{ fontSize: 11, color: "#e8f4ff", lineHeight: 1.7 }}>
                    最近 6 条控制结果集中展示，成功、执行中与预警状态会实时分色回显。
                  </Typography.Text>
                  <Tag color="processing" style={{ margin: 0, whiteSpace: "nowrap" }}>
                    实时更新
                  </Tag>
                </div>

                <div
                  className="main-fan-scroll"
                  style={{ flex: 1, minHeight: 0, overflowY: "auto" }}
                >
                  <List
                    split={false}
                    dataSource={feedbackItems}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          padding: "10px 12px",
                          marginBottom: 8,
                          borderRadius: 8,
                          ...getFeedbackItemStyle(item.status),
                        }}
                      >
                        <div style={{ width: "100%" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: 6,
                            }}
                          >
                            <Space size={6}>
                              <Typography.Text
                                style={{
                                  fontSize: 13,
                                  fontWeight: 700,
                                  color: "#ffffff",
                                }}
                              >
                                {item.target}
                              </Typography.Text>
                              <Tag
                                color={getFeedbackTagColor(item.status)}
                                style={{ margin: 0 }}
                              >
                                {item.status === "success"
                                  ? "成功"
                                  : item.status === "processing"
                                    ? "执行中"
                                    : "预警"}
                              </Tag>
                            </Space>
                            <Typography.Text
                              style={{ fontSize: 11, color: "#91d5ff" }}
                            >
                              {item.time}
                            </Typography.Text>
                          </div>
                          <Typography.Text
                            style={{
                              display: "block",
                              fontSize: 12,
                              color: "#e8f4ff",
                              marginBottom: 6,
                            }}
                          >
                            {item.action}
                          </Typography.Text>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: 10,
                            }}
                          >
                            <Typography.Text
                              style={{
                                fontSize: 11,
                                color: "#b8d9ff",
                                lineHeight: 1.7,
                              }}
                            >
                              {item.message}
                            </Typography.Text>
                            <Typography.Text
                              style={{
                                fontSize: 11,
                                color: "#b8d9ff",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {item.duration}
                            </Typography.Text>
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
              </Space>
            </Card>
          </Col>

          <Col
            span={15}
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              pointerEvents: "auto",
            }}
          >
            <Card
              className="page-card"
              size="small"
              title={renderCardTitle(
                <BellOutlined style={{ fontSize: 15, color: "#ffc069" }} />,
                "运行告警与操作记录",
              )}
              style={{
                ...alertCardChrome.style,
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
              }}
              headStyle={alertCardChrome.headStyle}
              bodyStyle={{
                padding: "10px 12px",
                background: "transparent",
                flex: 1,
                minHeight: 0,
              }}
            >
              <Row gutter={12} style={{ height: "100%" }}>
                <Col
                  span={10}
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      padding: "8px 10px",
                      marginBottom: 8,
                      borderRadius: 8,
                      background: "rgba(255, 163, 77, 0.12)",
                      border: "1px solid rgba(255, 163, 77, 0.24)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>
                      <AlertOutlined style={{ color: "#ffd666", marginRight: 6 }} />
                      运行告警
                    </Typography.Text>
                    <Tag color="warning" style={{ margin: 0 }}>
                      {alertItems.length} 条
                    </Tag>
                  </div>
                  <div
                    className="main-fan-scroll"
                    style={{
                      flex: 1,
                      minHeight: 0,
                      overflowY: "auto",
                      paddingRight: 2,
                    }}
                  >
                    <List
                      split={false}
                      dataSource={alertItems}
                      renderItem={(item) => (
                        <List.Item
                          style={{
                            padding: "10px 12px",
                            marginBottom: 8,
                            borderRadius: 8,
                            background:
                              "linear-gradient(135deg, rgba(255, 163, 77, 0.12) 0%, rgba(255, 163, 77, 0.05) 100%)",
                            border: "1px solid rgba(255, 163, 77, 0.28)",
                          }}
                        >
                          <div style={{ width: "100%" }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 6,
                              }}
                            >
                              <Typography.Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: 700,
                                  color: "#ffffff",
                                }}
                              >
                                {item.title}
                              </Typography.Text>
                              <Tag
                                color={getAlertTagColor(item.level)}
                                style={{ margin: 0 }}
                              >
                                {item.level === "critical"
                                  ? "严重"
                                  : item.level === "warning"
                                    ? "告警"
                                    : "信息"}
                              </Tag>
                            </div>
                            <Typography.Text
                              style={{
                                display: "block",
                                fontSize: 11,
                                color: "#e8f4ff",
                                lineHeight: 1.7,
                                marginBottom: 6,
                              }}
                            >
                              {item.detail}
                            </Typography.Text>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography.Text
                                style={{ fontSize: 11, color: "#b8d9ff" }}
                              >
                                {item.source}
                              </Typography.Text>
                              <Typography.Text
                                style={{ fontSize: 11, color: "#b8d9ff" }}
                              >
                                {item.time}
                              </Typography.Text>
                            </div>
                          </div>
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>

                <Col
                  span={14}
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      padding: "8px 10px",
                      marginBottom: 8,
                      borderRadius: 8,
                      background: "rgba(145, 213, 255, 0.12)",
                      border: "1px solid rgba(145, 213, 255, 0.24)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>
                      <HistoryOutlined style={{ color: "#91d5ff", marginRight: 6 }} />
                      操作记录
                    </Typography.Text>
                    <Tag color="blue" style={{ margin: 0 }}>
                      {operationRecords.length} 条
                    </Tag>
                  </div>
                  <div
                    className="main-fan-scroll"
                    style={{
                      flex: 1,
                      minHeight: 0,
                      overflowY: "auto",
                      paddingRight: 2,
                    }}
                  >
                    <List
                      split={false}
                      dataSource={operationRecords}
                      renderItem={(item) => (
                        <List.Item
                          style={{
                            padding: "10px 12px",
                            marginBottom: 8,
                            borderRadius: 8,
                            background:
                              "linear-gradient(135deg, rgba(145, 213, 255, 0.12) 0%, rgba(145, 213, 255, 0.05) 100%)",
                            border: "1px solid rgba(145, 213, 255, 0.25)",
                          }}
                        >
                          <div style={{ width: "100%" }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 6,
                              }}
                            >
                              <Space size={6}>
                                <Typography.Text
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    color: "#ffffff",
                                  }}
                                >
                                  {item.action}
                                </Typography.Text>
                                <Tag
                                  color={
                                    item.result === "成功"
                                      ? "success"
                                      : "warning"
                                  }
                                  style={{ margin: 0 }}
                                >
                                  {item.result}
                                </Tag>
                              </Space>
                              <Typography.Text
                                style={{ fontSize: 11, color: "#b8d9ff" }}
                              >
                                {item.time}
                              </Typography.Text>
                            </div>
                            <Typography.Text
                              style={{
                                display: "block",
                                fontSize: 11,
                                color: "#e8f4ff",
                                marginBottom: 6,
                              }}
                            >
                              目标设备：{item.target}
                            </Typography.Text>
                            <Typography.Text
                              style={{ fontSize: 11, color: "#b8d9ff" }}
                            >
                              操作人：{item.user}
                            </Typography.Text>
                          </div>
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>

      <Modal
        title={
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "linear-gradient(135deg, #1890ff 0%, #69c0ff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 10px rgba(24, 144, 255, 0.45)",
              }}
            >
              <ThunderboltFilled style={{ color: "#ffffff", fontSize: 18 }} />
            </div>
            <div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#ffffff",
                  textShadow: "0 0 10px rgba(156, 208, 255, 0.6)",
                }}
              >
                转速调节
              </div>
              <div style={{ fontSize: 12, color: "#b8d9ff" }}>
                {currentFan.id} · {currentUnit.name}
              </div>
            </div>
          </div>
        }
        open={speedModalOpen}
        onOk={onConfirmSpeed}
        onCancel={() => setSpeedModalOpen(false)}
        okText="确认下发"
        cancelText="取消"
        width={580}
        centered
        styles={{
          header: {
            background:
              "linear-gradient(180deg, rgba(89, 154, 221, 0.3) 0%, rgba(89, 154, 221, 0.2) 100%)",
            borderBottom: "2px solid rgba(150, 205, 255, 0.5)",
            padding: "16px 24px",
          },
          body: {
            background: "linear-gradient(180deg, #0d2847 0%, #11365e 100%)",
            padding: 24,
          },
          footer: {
            background:
              "linear-gradient(180deg, rgba(89, 154, 221, 0.2) 0%, rgba(89, 154, 221, 0.1) 100%)",
            borderTop: "2px solid rgba(150, 205, 255, 0.5)",
            padding: "12px 24px",
          },
          content: {
            background: "transparent",
            border: "2px solid rgba(150, 205, 255, 0.5)",
            boxShadow:
              "0 4px 30px rgba(11, 35, 62, 0.8), 0 0 40px rgba(74, 157, 232, 0.25)",
            backdropFilter: "blur(20px)",
          },
        }}
        okButtonProps={{
          disabled: currentFan.status !== "运行",
          style: {
            background: "linear-gradient(135deg, #1890ff 0%, #69c0ff 100%)",
            border: "none",
            height: 40,
            fontSize: 14,
            fontWeight: 600,
            boxShadow: "0 2px 12px rgba(24, 144, 255, 0.45)",
          },
        }}
        cancelButtonProps={{
          style: {
            height: 40,
            fontSize: 14,
            background: "rgba(89, 154, 221, 0.15)",
            border: "1px solid rgba(150, 205, 255, 0.4)",
            color: "#e8f4ff",
          },
        }}
      >
        <Space direction="vertical" size={20} style={{ width: "100%" }}>
          <div
            style={{
              padding: 16,
              borderRadius: 10,
              background:
                "linear-gradient(135deg, rgba(24, 144, 255, 0.18) 0%, rgba(24, 144, 255, 0.08) 100%)",
              border: "1px solid rgba(24, 144, 255, 0.4)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            <div>
              <Typography.Text
                style={{
                  display: "block",
                  fontSize: 11,
                  color: "#b8d9ff",
                  marginBottom: 6,
                }}
              >
                当前状态
              </Typography.Text>
              <Tag
                color={getFanStatusTagColor(currentFan.status)}
                style={{ margin: 0 }}
              >
                {currentFan.status}
              </Tag>
            </div>
            <div>
              <Typography.Text
                style={{
                  display: "block",
                  fontSize: 11,
                  color: "#b8d9ff",
                  marginBottom: 6,
                }}
              >
                当前转速
              </Typography.Text>
              <Typography.Text
                style={{ fontSize: 20, fontWeight: 700, color: "#ffffff" }}
              >
                {currentFan.speed} rpm
              </Typography.Text>
            </div>
            <div>
              <Typography.Text
                style={{
                  display: "block",
                  fontSize: 11,
                  color: "#b8d9ff",
                  marginBottom: 6,
                }}
              >
                当前频率
              </Typography.Text>
              <Typography.Text
                style={{ fontSize: 20, fontWeight: 700, color: "#69c0ff" }}
              >
                {currentFan.frequency} Hz
              </Typography.Text>
            </div>
          </div>

          <div>
            <Typography.Text
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 16,
              }}
            >
              <RocketOutlined style={{ marginRight: 6, color: "#69c0ff" }} />
              目标转速设定
            </Typography.Text>

            <div
              style={{
                textAlign: "center",
                padding: 24,
                borderRadius: 10,
                marginBottom: 20,
                background:
                  "linear-gradient(135deg, rgba(24, 144, 255, 0.22) 0%, rgba(24, 144, 255, 0.12) 100%)",
                border: "2px solid rgba(24, 144, 255, 0.45)",
                boxShadow: "0 2px 12px rgba(24, 144, 255, 0.2)",
              }}
            >
              <Typography.Text
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "#b8d9ff",
                  marginBottom: 10,
                }}
              >
                目标转速
              </Typography.Text>
              <Typography.Text
                style={{
                  fontSize: 46,
                  fontWeight: 700,
                  color: "#69c0ff",
                  lineHeight: 1,
                }}
              >
                {speedValue}
                <span style={{ fontSize: 24, fontWeight: 400, marginLeft: 8 }}>
                  rpm
                </span>
              </Typography.Text>
            </div>

            <Row gutter={16} align="middle">
              <Col span={17}>
                <Slider
                  min={650}
                  max={1250}
                  step={10}
                  value={speedValue}
                  onChange={(value) =>
                    setSpeedValue(Array.isArray(value) ? value[0] : value)
                  }
                  marks={{
                    650: {
                      style: { fontSize: 11, color: "#b8d9ff" },
                      label: "650",
                    },
                    800: {
                      style: { fontSize: 11, color: "#b8d9ff" },
                      label: "800",
                    },
                    950: {
                      style: { fontSize: 11, color: "#b8d9ff" },
                      label: "950",
                    },
                    1100: {
                      style: { fontSize: 11, color: "#b8d9ff" },
                      label: "1100",
                    },
                    1250: {
                      style: { fontSize: 11, color: "#b8d9ff" },
                      label: "1250",
                    },
                  }}
                  tooltip={{
                    formatter: (value) => `${value} rpm`,
                    placement: "top",
                  }}
                  trackStyle={{
                    background:
                      "linear-gradient(90deg, #1890ff 0%, #69c0ff 100%)",
                    height: 6,
                  }}
                  handleStyle={{
                    width: 20,
                    height: 20,
                    marginTop: -7,
                    border: "3px solid #69c0ff",
                    boxShadow: "0 2px 8px rgba(24, 144, 255, 0.45)",
                  }}
                  railStyle={{
                    height: 6,
                    background: "rgba(89, 154, 221, 0.2)",
                  }}
                />
              </Col>
              <Col span={7}>
                <InputNumber
                  min={650}
                  max={1250}
                  step={10}
                  value={speedValue}
                  onChange={(value) => setSpeedValue(value ?? 900)}
                  suffix="rpm"
                  style={{
                    width: "100%",
                    height: 40,
                    fontSize: 16,
                    fontWeight: 600,
                    background: "rgba(89, 154, 221, 0.15)",
                    border: "1px solid rgba(150, 205, 255, 0.4)",
                    color: "#ffffff",
                  }}
                />
              </Col>
            </Row>
          </div>

          <div
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              background:
                "linear-gradient(135deg, rgba(255, 193, 7, 0.16) 0%, rgba(255, 193, 7, 0.08) 100%)",
              border: "1px solid rgba(255, 193, 7, 0.35)",
              display: "flex",
              gap: 10,
            }}
          >
            <InfoCircleOutlined
              style={{ fontSize: 16, color: "#ffd666", marginTop: 2 }}
            />
            <div>
              <Typography.Text
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 6,
                }}
              >
                调节说明
              </Typography.Text>
              <Typography.Text
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "#e8f4ff",
                  lineHeight: 1.7,
                }}
              >
                1. 转速调节范围为 650-1250 rpm，对应变频器 30-50 Hz 控制区间。
              </Typography.Text>
              <Typography.Text
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "#e8f4ff",
                  lineHeight: 1.7,
                }}
              >
                2. 当目标转速高于 1150 rpm 时，系统将自动增加运行关注告警。
              </Typography.Text>
              <Typography.Text
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "#e8f4ff",
                  lineHeight: 1.7,
                }}
              >
                3.
                仅运行中的主风机允许直接下发调速指令，待机设备仅可查看当前设定。
              </Typography.Text>
            </div>
          </div>
        </Space>
      </Modal>
    </div>
  );
}
