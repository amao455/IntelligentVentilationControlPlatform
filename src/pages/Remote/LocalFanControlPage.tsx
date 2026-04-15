import { lazy, Suspense, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  List,
  Popconfirm,
  Row,
  Space,
  Tag,
  Typography,
  message,
  Modal,
  Slider,
  InputNumber,
} from "antd";
import {
  DashboardOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  PlayCircleOutlined,
  PoweroffOutlined,
  ReloadOutlined,
  ControlOutlined,
  ApiOutlined,
  FileTextOutlined,
  BellOutlined,
  ThunderboltFilled,
  FireOutlined,
  CloudOutlined,
  SettingOutlined,
  HistoryOutlined,
  UserOutlined,
  AlertOutlined,
  InfoCircleOutlined,
  LineChartOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

interface BackgroundSettings {
  paused: boolean;
  rotationSpeed: number;
  opacity: number;
  brightness: number;
}

const DEFAULT_BG_SETTINGS: BackgroundSettings = {
  paused: false,
  rotationSpeed: 0.0,
  opacity: 0.55,
  brightness: 1.4,
};

const LazyHomeObjBackground = lazy(async () => {
  const module = await import("../../components/topology/HomeObjBackground3D");
  return { default: module.HomeObjBackground3D };
});

export default function LocalFanControlPage() {
  const [api, contextHolder] = message.useMessage();
  const [bgSettings] = useState<BackgroundSettings>(DEFAULT_BG_SETTINGS);
  const [backgroundReady, setBackgroundReady] = useState(false);
  const [selectedFan, setSelectedFan] = useState<string>('局扇-08');
  const [powerModalVisible, setPowerModalVisible] = useState(false);
  const [powerValue, setPowerValue] = useState(55);
  const [windModalVisible, setWindModalVisible] = useState(false);
  const [windValue, setWindValue] = useState(420);

  // 局部风机数据
  const fanData = [
    { id: "局扇-08", location: "1号进风巷", status: "运行", power: "55kW", current: "12.8A", load: "85%", windVolume: "420m³/s" },
    { id: "局扇-15", location: "2号进风巷", status: "运行", power: "55kW", current: "11.5A", load: "78%", windVolume: "395m³/s" },
    { id: "局扇-23", location: "3号进风巷", status: "停止", power: "45kW", current: "0A", load: "0%", windVolume: "0m³/s" },
    { id: "局扇-05", location: "回风巷", status: "运行", power: "75kW", current: "16.2A", load: "92%", windVolume: "580m³/s" },
    { id: "局扇-12", location: "辅助巷道", status: "维护", power: "55kW", current: "0A", load: "0%", windVolume: "0m³/s" },
    { id: "局扇-18", location: "4号进风巷", status: "运行", power: "55kW", current: "13.1A", load: "88%", windVolume: "430m³/s" },
    { id: "局扇-27", location: "5号进风巷", status: "运行", power: "45kW", current: "10.2A", load: "75%", windVolume: "360m³/s" },
    { id: "局扇-31", location: "6号进风巷", status: "停止", power: "55kW", current: "0A", load: "0%", windVolume: "0m³/s" },
    { id: "局扇-42", location: "7号进风巷", status: "运行", power: "75kW", current: "17.5A", load: "95%", windVolume: "610m³/s" },
    { id: "局扇-56", location: "8号进风巷", status: "运行", power: "55kW", current: "12.3A", load: "82%", windVolume: "410m³/s" },
  ];

  // 获取当前选中的风机数据
  const currentFan = fanData.find(fan => fan.id === selectedFan) || fanData[0];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setBackgroundReady(true);
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const onControlAction = (action: string) => {
    api.success(`${action} 指令已下发，等待状态回传`);
  };

  const onFanSelect = (fanId: string) => {
    setSelectedFan(fanId);
    api.info(`已切换到 ${fanId}`);
  };

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

      {/* 背景三维模型 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          borderRadius: "8px",
          overflow: "hidden",
          pointerEvents: "auto",
        }}
      >
        {backgroundReady ? (
          <Suspense
            fallback={
              <div style={{ padding: "20px", color: "#999" }}>3D背景载入中</div>
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
          <div style={{ padding: "20px", color: "#999" }}>
            正在准备巷道模型背景
          </div>
        )}
      </div>

      {/* 内容层 */}
      <div
        className="page-wrapper"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: "12px",
          pointerEvents: "none",
        }}
      >
        {/* 上半部分 - 占 3/4 */}
        <Row
          gutter={[12, 12]}
          style={{
            flex: 3,
            minHeight: 0,
            marginBottom: 10,
            pointerEvents: "none",
          }}
        >
          {/* 左侧：局部风机选择 */}
          <Col
            span={4}
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
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <AppstoreOutlined
                    style={{ fontSize: 15, color: "#69c0ff" }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#ffffff",
                      textShadow:
                        "0 0 15px rgba(156, 208, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    局部风机选择
                  </span>
                </div>
              }
              style={{
                position: "relative",
                zIndex: 1,
                background: "transparent",
                border: "2px solid rgba(150, 205, 255, 0.5)",
                boxShadow:
                  "0 4px 20px rgba(11, 35, 62, 0.6), 0 0 30px rgba(74, 157, 232, 0.15), inset 0 1px 0 rgba(196, 225, 255, 0.2)",
                backdropFilter: "blur(16px)",
                flex: "0 0 auto",
                height: "400px",
                display: "flex",
                flexDirection: "column",
              }}
              headStyle={{
                background:
                  "linear-gradient(180deg, rgba(89, 154, 221, 0.2) 0%, rgba(89, 154, 221, 0.1) 100%)",
                borderBottom: "2px solid rgba(150, 205, 255, 0.5)",
                padding: "8px 12px",
                minHeight: "auto",
                flexShrink: 0,
              }}
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
                  .local-fan-list::-webkit-scrollbar {
                    display: none !important;
                    width: 0 !important;
                    height: 0 !important;
                  }
                `}
              </style>
              <div
                className="local-fan-list"
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                {fanData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onFanSelect(item.id)}
                    style={{
                      padding: "6px 10px",
                      background: selectedFan === item.id
                        ? "linear-gradient(90deg, rgba(24, 144, 255, 0.35) 0%, rgba(24, 144, 255, 0.2) 100%)"
                        : "rgba(89, 154, 221, 0.1)",
                      borderRadius: 4,
                      border: selectedFan === item.id
                        ? "2px solid rgba(24, 144, 255, 0.8)"
                        : "1px solid rgba(150, 205, 255, 0.3)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: selectedFan === item.id
                        ? "0 0 12px rgba(24, 144, 255, 0.4), inset 0 0 6px rgba(24, 144, 255, 0.2)"
                        : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      if (selectedFan !== item.id) {
                        e.currentTarget.style.background =
                          "rgba(89, 154, 221, 0.2)";
                        e.currentTarget.style.borderColor =
                          "rgba(150, 205, 255, 0.5)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedFan !== item.id) {
                        e.currentTarget.style.background =
                          "rgba(89, 154, 221, 0.1)";
                        e.currentTarget.style.borderColor =
                          "rgba(150, 205, 255, 0.3)";
                      }
                    }}
                  >
                    {/* 左侧：图标 + 设备信息 */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <ThunderboltFilled
                        style={{
                          fontSize: 16,
                          color: selectedFan === item.id ? "#1890ff" : "#69c0ff",
                          flexShrink: 0,
                          filter: selectedFan === item.id
                            ? "drop-shadow(0 0 4px rgba(24, 144, 255, 0.8))"
                            : "none",
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Typography.Text
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: selectedFan === item.id ? "#ffffff" : "#e8f4ff",
                            display: "block",
                            textShadow: selectedFan === item.id
                              ? "0 0 6px rgba(24, 144, 255, 0.6)"
                              : "none",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            lineHeight: "16px",
                          }}
                        >
                          {item.id}
                        </Typography.Text>
                        <Typography.Text
                          style={{
                            fontSize: 10,
                            color: "#b8d9ff",
                            display: "block",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            lineHeight: "14px",
                          }}
                        >
                          {item.location}
                        </Typography.Text>
                      </div>
                    </div>

                    {/* 右侧：功率 + 状态 */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        flexShrink: 0,
                      }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: 10,
                          color: "#91caff",
                          fontWeight: 600,
                        }}
                      >
                        {item.power}
                      </Typography.Text>
                      <Tag
                        color={
                          selectedFan === item.id
                            ? "processing"
                            : item.status === "运行"
                              ? "success"
                              : item.status === "停止"
                                ? "default"
                                : "warning"
                        }
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          padding: "0px 6px",
                          margin: 0,
                          lineHeight: "18px",
                        }}
                      >
                        {selectedFan === item.id ? "已选" : item.status}
                      </Tag>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Col>

          {/* 右侧：运行总览与控制操作 */}
          <Col
            span={6}
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              gap: "10px",
              marginLeft: "auto",
              pointerEvents: "auto",
            }}
          >
            {/* 1. 局部风机运行总览卡片 - 占比约30% */}
            <Card
              className="page-card"
              size="small"
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <DashboardOutlined
                    style={{ fontSize: 15, color: "#69c0ff" }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#ffffff",
                      textShadow:
                        "0 0 15px rgba(156, 208, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    局部风机运行总览
                  </span>
                </div>
              }
              style={{
                flex: "0 0 auto",
                background: "transparent",
                border: "2px solid rgba(150, 205, 255, 0.5)",
                boxShadow:
                  "0 4px 20px rgba(11, 35, 62, 0.6), 0 0 30px rgba(74, 157, 232, 0.15), inset 0 1px 0 rgba(196, 225, 255, 0.2)",
                backdropFilter: "blur(16px)",
                pointerEvents: "auto",
              }}
              headStyle={{
                background:
                  "linear-gradient(180deg, rgba(89, 154, 221, 0.2) 0%, rgba(89, 154, 221, 0.1) 100%)",
                borderBottom: "2px solid rgba(150, 205, 255, 0.5)",
                padding: "8px 12px",
                minHeight: "auto",
              }}
              bodyStyle={{ padding: "8px 12px", background: "transparent" }}
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
                      {currentFan.location}
                    </Typography.Text>
                  </div>
                  <Tag
                    color={currentFan.status === "运行" ? "success" : currentFan.status === "停止" ? "default" : "warning"}
                    style={{ fontSize: 12, padding: "2px 10px", margin: 0 }}
                  >
                    <PlayCircleOutlined style={{ marginRight: 4 }} />
                    {currentFan.status === "运行" ? "运行中" : currentFan.status === "停止" ? "已停止" : "维护中"}
                  </Tag>
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
                        {currentFan.power}
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
                        <FireOutlined
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
                        {currentFan.load}
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
                        {currentFan.windVolume}
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
                    运行时长：18.5h
                  </Typography.Text>
                  <Typography.Text style={{ fontSize: 11, color: "#b8d9ff" }}>
                    <ReloadOutlined style={{ fontSize: 11, marginRight: 4 }} />
                    14:32:15
                  </Typography.Text>
                </div>
              </Space>
            </Card>

            {/* 2. 局部风机控制操作卡片 - 占比约45% */}
            <Card
              className="page-card"
              size="small"
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ControlOutlined style={{ fontSize: 15, color: "#ffc069" }} />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#ffffff",
                      textShadow:
                        "0 0 15px rgba(156, 208, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    设备控制操作
                  </span>
                </div>
              }
              style={{
                flex: "0 0 45%",
                display: "flex",
                flexDirection: "column",
                background: "transparent",
                border: "2px solid rgba(255, 193, 7, 0.6)",
                boxShadow:
                  "0 4px 20px rgba(11, 35, 62, 0.6), 0 0 30px rgba(255, 193, 7, 0.2), inset 0 1px 0 rgba(255, 224, 130, 0.2)",
                backdropFilter: "blur(16px)",
                pointerEvents: "auto",
              }}
              headStyle={{
                background:
                  "linear-gradient(180deg, rgba(255, 193, 7, 0.25) 0%, rgba(255, 193, 7, 0.15) 100%)",
                borderBottom: "2px solid rgba(255, 193, 7, 0.5)",
                padding: "8px 12px",
                minHeight: "auto",
                flexShrink: 0,
              }}
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
                    display: none;
                  }
                `}
              </style>
              <Space direction="vertical" style={{ width: "100%" }} size={12}>
                {/* 控制状态面板 */}
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
                        <Typography.Text
                          style={{ fontSize: 11, color: "#e8f4ff" }}
                        >
                          <ApiOutlined
                            style={{ fontSize: 11, marginRight: 4 }}
                          />
                          控制模式
                        </Typography.Text>
                        <Tag color="blue" style={{ fontSize: 11, margin: 0 }}>
                          手动
                        </Tag>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div
                        style={{
                          padding: "6px 8px",
                          background: "rgba(82, 196, 26, 0.15)",
                          borderRadius: 4,
                          border: "1px solid rgba(82, 196, 26, 0.3)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography.Text
                          style={{ fontSize: 11, color: "#e8f4ff" }}
                        >
                          <SafetyOutlined
                            style={{ fontSize: 11, marginRight: 4 }}
                          />
                          安全联锁
                        </Typography.Text>
                        <Tag
                          color="success"
                          style={{ fontSize: 11, margin: 0 }}
                        >
                          启用
                        </Tag>
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* 基础控制操作 */}
                <div>
                  <Typography.Text
                    style={{
                      fontSize: 13,
                      color: "#ffffff",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: 10,
                      textShadow: "0 0 10px rgba(255, 193, 7, 0.3)",
                    }}
                  >
                    <ThunderboltFilled
                      style={{ fontSize: 13, marginRight: 6 }}
                    />
                    基础控制
                  </Typography.Text>
                  <Row gutter={[10, 10]}>
                    <Col span={12}>
                      <Popconfirm
                        title="确认启动局扇-08？"
                        description={
                          <div style={{ fontSize: 12 }}>
                            <div>• 设备位置：1号进风巷</div>
                            <div>• 启动过程约需 30-45 秒</div>
                            <div>• 请确保现场安全</div>
                          </div>
                        }
                        onConfirm={() => onControlAction("启动局扇-08")}
                        okText="确认启动"
                        cancelText="取消"
                      >
                        <Button
                          type="primary"
                          icon={<PlayCircleOutlined />}
                          block
                          style={{
                            height: 46,
                            fontWeight: 700,
                            fontSize: 14,
                            background:
                              "linear-gradient(135deg, #52c41a 0%, #73d13d 100%)",
                            border: "none",
                            boxShadow: "0 3px 12px rgba(82, 196, 26, 0.5)",
                          }}
                        >
                          启动风机
                        </Button>
                      </Popconfirm>
                    </Col>
                    <Col span={12}>
                      <Popconfirm
                        title="确认停止局扇-08？"
                        description={
                          <div style={{ fontSize: 12, color: "#ff4d4f" }}>
                            <div>⚠️ 停止后将影响局部通风</div>
                            <div>• 停止过程约需 15-20 秒</div>
                            <div>• 请确认现场无人作业</div>
                          </div>
                        }
                        onConfirm={() => onControlAction("停止局扇-08")}
                        okText="确认停止"
                        cancelText="取消"
                        okButtonProps={{ danger: true }}
                      >
                        <Button
                          danger
                          icon={<PoweroffOutlined />}
                          block
                          style={{
                            height: 46,
                            fontWeight: 700,
                            fontSize: 14,
                            boxShadow: "0 3px 12px rgba(255, 77, 79, 0.5)",
                          }}
                        >
                          停止风机
                        </Button>
                      </Popconfirm>
                    </Col>
                    <Col span={24}>
                      <Button
                        icon={<ReloadOutlined />}
                        block
                        onClick={() => onControlAction("重启局扇-08")}
                        style={{
                          height: 40,
                          fontWeight: 600,
                          fontSize: 13,
                          background:
                            "linear-gradient(135deg, rgba(24, 144, 255, 0.2) 0%, rgba(24, 144, 255, 0.1) 100%)",
                          border: "1px solid rgba(24, 144, 255, 0.5)",
                          color: "#69c0ff",
                          boxShadow: "0 2px 8px rgba(24, 144, 255, 0.3)",
                        }}
                      >
                        重启风机
                      </Button>
                    </Col>
                  </Row>
                </div>

                {/* 参数调整 */}
                <div>
                  <Typography.Text
                    style={{
                      fontSize: 13,
                      color: "#ffffff",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: 10,
                      textShadow: "0 0 10px rgba(255, 193, 7, 0.3)",
                    }}
                  >
                    <SettingOutlined style={{ fontSize: 13, marginRight: 6 }} />
                    参数调整
                  </Typography.Text>
                  <Row gutter={[10, 10]}>
                    <Col span={12}>
                      <Button
                        icon={<ThunderboltOutlined />}
                        block
                        onClick={() => setPowerModalVisible(true)}
                        style={{
                          height: 38,
                          fontWeight: 600,
                          fontSize: 12,
                          background:
                            "linear-gradient(135deg, rgba(82, 196, 26, 0.2) 0%, rgba(82, 196, 26, 0.1) 100%)",
                          border: "1px solid rgba(82, 196, 26, 0.5)",
                          color: "#95de64",
                          boxShadow: "0 2px 8px rgba(82, 196, 26, 0.3)",
                        }}
                      >
                        功率调整
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button
                        icon={<CloudOutlined />}
                        block
                        onClick={() => setWindModalVisible(true)}
                        style={{
                          height: 38,
                          fontWeight: 600,
                          fontSize: 12,
                          background:
                            "linear-gradient(135deg, rgba(135, 208, 104, 0.2) 0%, rgba(135, 208, 104, 0.1) 100%)",
                          border: "1px solid rgba(135, 208, 104, 0.5)",
                          color: "#95de64",
                          boxShadow: "0 2px 8px rgba(135, 208, 104, 0.3)",
                        }}
                      >
                        风量调整
                      </Button>
                    </Col>
                  </Row>
                </div>

                {/* 操作提示 */}
                <div
                  style={{
                    padding: "10px 12px",
                    background:
                      "linear-gradient(135deg, rgba(24, 144, 255, 0.15) 0%, rgba(24, 144, 255, 0.08) 100%)",
                    borderRadius: 6,
                    border: "1px solid rgba(24, 144, 255, 0.4)",
                    boxShadow: "0 2px 8px rgba(24, 144, 255, 0.15)",
                  }}
                >
                  <Typography.Text
                    style={{
                      fontSize: 12,
                      color: "#e8f4ff",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    <InfoCircleOutlined
                      style={{ fontSize: 12, marginRight: 4 }}
                    />
                    当前控制设备：局扇-08
                  </Typography.Text>
                  <Typography.Text
                    style={{
                      fontSize: 11,
                      color: "#b8d9ff",
                    }}
                  >
                    <ApiOutlined style={{ fontSize: 11, marginRight: 4 }} />
                    设备位置：1号进风巷
                  </Typography.Text>
                </div>
              </Space>
            </Card>

            {/* 3. 局部风机设备统计卡片 - 占比约25% */}
            <Card
              className="page-card device-stats-card"
              size="small"
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <AppstoreOutlined
                    style={{ fontSize: 15, color: "#95de64" }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#ffffff",
                      textShadow:
                        "0 0 15px rgba(156, 208, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    设备统计
                  </span>
                </div>
              }
              style={{
                flex: "1 1 auto",
                display: "flex",
                flexDirection: "column",
                background: "transparent",
                border: "2px solid rgba(149, 222, 100, 0.6)",
                boxShadow:
                  "0 4px 20px rgba(11, 35, 62, 0.6), 0 0 30px rgba(149, 222, 100, 0.2), inset 0 1px 0 rgba(149, 222, 100, 0.2)",
                backdropFilter: "blur(16px)",
                pointerEvents: "auto",
              }}
              headStyle={{
                background:
                  "linear-gradient(180deg, rgba(149, 222, 100, 0.25) 0%, rgba(149, 222, 100, 0.15) 100%)",
                borderBottom: "2px solid rgba(149, 222, 100, 0.5)",
                padding: "8px 12px",
                minHeight: "auto",
                flexShrink: 0,
              }}
              bodyStyle={{
                padding: "8px 12px",
                background: "transparent",
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                {/* 核心统计数据 - 横向布局 */}
                <div
                  style={{
                    padding: "8px 10px",
                    background:
                      "linear-gradient(135deg, rgba(24, 144, 255, 0.2) 0%, rgba(24, 144, 255, 0.1) 100%)",
                    borderRadius: 4,
                    border: "1px solid rgba(24, 144, 255, 0.5)",
                    boxShadow: "0 2px 8px rgba(24, 144, 255, 0.2)",
                  }}
                >
                  <Row gutter={10}>
                    <Col span={12}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <LineChartOutlined
                          style={{ fontSize: 16, color: "#69c0ff" }}
                        />
                        <div>
                          <Typography.Text
                            style={{
                              fontSize: 10,
                              color: "#b8d9ff",
                              display: "block",
                              lineHeight: 1.2,
                            }}
                          >
                            总设备
                          </Typography.Text>
                          <Typography.Text
                            style={{
                              fontSize: 17,
                              fontWeight: 700,
                              color: "#69c0ff",
                              textShadow: "0 0 10px rgba(105, 192, 255, 0.8)",
                            }}
                          >
                            30
                            <span style={{ fontSize: 11, fontWeight: 400 }}>
                              台
                            </span>
                          </Typography.Text>
                        </div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <CheckCircleOutlined
                          style={{ fontSize: 16, color: "#52c41a" }}
                        />
                        <div>
                          <Typography.Text
                            style={{
                              fontSize: 10,
                              color: "#b8d9ff",
                              display: "block",
                              lineHeight: 1.2,
                            }}
                          >
                            在线率
                          </Typography.Text>
                          <Typography.Text
                            style={{
                              fontSize: 17,
                              fontWeight: 700,
                              color: "#52c41a",
                              textShadow: "0 0 10px rgba(82, 196, 26, 0.8)",
                            }}
                          >
                            93
                            <span style={{ fontSize: 11, fontWeight: 400 }}>
                              %
                            </span>
                          </Typography.Text>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* 设备健康度 - 横向布局 */}
                <div
                  style={{
                    padding: "7px 10px",
                    background:
                      "linear-gradient(135deg, rgba(149, 222, 100, 0.15) 0%, rgba(149, 222, 100, 0.08) 100%)",
                    borderRadius: 4,
                    border: "1px solid rgba(149, 222, 100, 0.4)",
                    boxShadow: "0 2px 8px rgba(149, 222, 100, 0.15)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography.Text
                      style={{
                        fontSize: 11,
                        color: "#ffffff",
                        fontWeight: 600,
                      }}
                    >
                      <SafetyOutlined
                        style={{
                          fontSize: 11,
                          marginRight: 4,
                          color: "#95de64",
                        }}
                      />
                      健康度
                    </Typography.Text>
                    <div style={{ display: "flex", gap: "14px" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography.Text
                          style={{
                            fontSize: 10,
                            color: "#b8d9ff",
                            display: "block",
                            lineHeight: 1.2,
                          }}
                        >
                          优秀
                        </Typography.Text>
                        <Typography.Text
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#52c41a",
                          }}
                        >
                          22
                        </Typography.Text>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Typography.Text
                          style={{
                            fontSize: 10,
                            color: "#b8d9ff",
                            display: "block",
                            lineHeight: 1.2,
                          }}
                        >
                          良好
                        </Typography.Text>
                        <Typography.Text
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#1890ff",
                          }}
                        >
                          6
                        </Typography.Text>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Typography.Text
                          style={{
                            fontSize: 10,
                            color: "#b8d9ff",
                            display: "block",
                            lineHeight: 1.2,
                          }}
                        >
                          异常
                        </Typography.Text>
                        <Typography.Text
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#faad14",
                          }}
                        >
                          2
                        </Typography.Text>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 运行时长统计 - 横向布局 */}
                <div
                  style={{
                    padding: "7px 10px",
                    background: "rgba(89, 154, 221, 0.08)",
                    borderRadius: 4,
                    border: "1px solid rgba(150, 205, 255, 0.25)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography.Text
                      style={{
                        fontSize: 11,
                        color: "#ffffff",
                        fontWeight: 600,
                      }}
                    >
                      <ClockCircleOutlined
                        style={{
                          fontSize: 11,
                          marginRight: 4,
                          color: "#69c0ff",
                        }}
                      />
                      运行时长
                    </Typography.Text>
                    <div style={{ display: "flex", gap: "18px" }}>
                      <div>
                        <Typography.Text
                          style={{
                            fontSize: 10,
                            color: "#b8d9ff",
                            marginRight: 6,
                          }}
                        >
                          平均
                        </Typography.Text>
                        <Typography.Text
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#69c0ff",
                          }}
                        >
                          1245
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 400,
                              color: "#b8d9ff",
                            }}
                          >
                            h
                          </span>
                        </Typography.Text>
                      </div>
                      <div>
                        <Typography.Text
                          style={{
                            fontSize: 10,
                            color: "#b8d9ff",
                            marginRight: 6,
                          }}
                        >
                          今日
                        </Typography.Text>
                        <Typography.Text
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#69c0ff",
                          }}
                        >
                          18.5
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 400,
                              color: "#b8d9ff",
                            }}
                          >
                            h
                          </span>
                        </Typography.Text>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 维护提醒 */}
                <div
                  style={{
                    padding: "6px 10px",
                    background:
                      "linear-gradient(135deg, rgba(250, 173, 20, 0.15) 0%, rgba(250, 173, 20, 0.08) 100%)",
                    borderRadius: 4,
                    border: "1px solid rgba(250, 173, 20, 0.4)",
                    boxShadow: "0 2px 8px rgba(250, 173, 20, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <AlertOutlined
                    style={{ fontSize: 11, color: "#faad14", flexShrink: 0 }}
                  />
                  <Typography.Text
                    style={{
                      fontSize: 11,
                      color: "#ffc069",
                      lineHeight: "1.4",
                    }}
                  >
                    3台设备即将维护
                  </Typography.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* 下半部分 - 占 1/4 */}
        <Row
          gutter={[12, 12]}
          style={{
            flex: 1,
            minHeight: 0,
            pointerEvents: "none",
          }}
        >
          {/* 指令反馈状态卡片 */}
          <Col
            span={12}
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
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FileTextOutlined
                    style={{ fontSize: 15, color: "#91d5ff" }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#ffffff",
                      textShadow:
                        "0 0 15px rgba(156, 208, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    指令反馈状态
                  </span>
                </div>
              }
              style={{
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                background: "transparent",
                border: "2px solid rgba(145, 213, 255, 0.6)",
                boxShadow:
                  "0 4px 20px rgba(11, 35, 62, 0.6), 0 0 30px rgba(145, 213, 255, 0.2), inset 0 1px 0 rgba(145, 213, 255, 0.2)",
                backdropFilter: "blur(16px)",
              }}
              headStyle={{
                background:
                  "linear-gradient(180deg, rgba(145, 213, 255, 0.25) 0%, rgba(145, 213, 255, 0.15) 100%)",
                borderBottom: "2px solid rgba(145, 213, 255, 0.5)",
                padding: "8px 12px",
                minHeight: "auto",
                flexShrink: 0,
              }}
              bodyStyle={{
                padding: "10px 12px",
                background: "transparent",
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style>
                  {`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                </style>
                <List
                  size="small"
                  dataSource={[
                    {
                      device: "局扇-01",
                      status: "success",
                      message: "启动成功",
                      time: "14:30",
                      duration: "2.5s",
                    },
                    {
                      device: "局扇-05",
                      status: "success",
                      message: "停止成功",
                      time: "14:28",
                      duration: "1.8s",
                    },
                    {
                      device: "局扇-12",
                      status: "processing",
                      message: "正在启动...",
                      time: "14:32",
                      duration: "-",
                    },
                  ]}
                  renderItem={(item) => (
                    <List.Item
                      style={{
                        padding: "10px 12px",
                        marginBottom: 8,
                        background:
                          "linear-gradient(135deg, rgba(24, 144, 255, 0.12) 0%, rgba(24, 144, 255, 0.06) 100%)",
                        borderRadius: 6,
                        border: "1px solid rgba(145, 213, 255, 0.3)",
                        boxShadow: "0 2px 8px rgba(24, 144, 255, 0.15)",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <Row
                          justify="space-between"
                          align="middle"
                          style={{ marginBottom: 6 }}
                        >
                          <Col>
                            <Space size={6}>
                              <Typography.Text
                                style={{
                                  fontSize: 13,
                                  fontWeight: 700,
                                  color: "#ffffff",
                                  textShadow:
                                    "0 0 8px rgba(255, 255, 255, 0.3)",
                                }}
                              >
                                {item.device}
                              </Typography.Text>
                              <Tag
                                color={
                                  item.status === "success"
                                    ? "success"
                                    : "processing"
                                }
                                style={{
                                  fontSize: 11,
                                  padding: "2px 10px",
                                  margin: 0,
                                  fontWeight: 600,
                                }}
                              >
                                {item.status === "success"
                                  ? "✓ 成功"
                                  : "⟳ 执行中"}
                              </Tag>
                            </Space>
                          </Col>
                          <Col>
                            <Typography.Text
                              style={{
                                fontSize: 11,
                                color: "#91d5ff",
                                fontWeight: 600,
                              }}
                            >
                              {item.time}
                            </Typography.Text>
                          </Col>
                        </Row>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography.Text
                            style={{
                              fontSize: 12,
                              color: "#e8f4ff",
                            }}
                          >
                            {item.message}
                          </Typography.Text>
                          <Typography.Text
                            style={{
                              fontSize: 11,
                              color: "#b8d9ff",
                            }}
                          >
                            耗时: {item.duration}
                          </Typography.Text>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            </Card>
          </Col>

          {/* 运行告警与操作记录卡片 */}
          <Col
            span={12}
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
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <BellOutlined style={{ fontSize: 15, color: "#ffa940" }} />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#ffffff",
                      textShadow:
                        "0 0 15px rgba(156, 208, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    运行告警与操作记录
                  </span>
                </div>
              }
              style={{
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                background: "transparent",
                border: "2px solid rgba(255, 169, 64, 0.6)",
                boxShadow:
                  "0 4px 20px rgba(11, 35, 62, 0.6), 0 0 30px rgba(255, 169, 64, 0.2), inset 0 1px 0 rgba(255, 169, 64, 0.2)",
                backdropFilter: "blur(16px)",
              }}
              headStyle={{
                background:
                  "linear-gradient(180deg, rgba(255, 169, 64, 0.25) 0%, rgba(255, 169, 64, 0.15) 100%)",
                borderBottom: "2px solid rgba(255, 169, 64, 0.5)",
                padding: "8px 12px",
                minHeight: "auto",
                flexShrink: 0,
              }}
              bodyStyle={{
                padding: "10px 12px",
                background: "transparent",
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* 运行告警 */}
                <div
                  style={{
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  <Typography.Text
                    style={{
                      fontSize: 12,
                      color: "#ffffff",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    <WarningOutlined style={{ fontSize: 12, marginRight: 6 }} />
                    运行告警
                  </Typography.Text>
                  <List
                    size="small"
                    dataSource={[
                      {
                        level: "warning",
                        message: "局扇-08 电流偏高",
                        value: "15.2A",
                        threshold: "≤12A",
                        time: "14:25",
                      },
                      {
                        level: "info",
                        message: "局扇-15 已自动启动",
                        value: "正常",
                        threshold: "标准",
                        time: "14:20",
                      },
                    ]}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          padding: "10px 12px",
                          marginBottom: 8,
                          background:
                            item.level === "warning"
                              ? "linear-gradient(135deg, rgba(250, 173, 20, 0.2) 0%, rgba(255, 169, 64, 0.15) 100%)"
                              : "linear-gradient(135deg, rgba(89, 154, 221, 0.2) 0%, rgba(102, 174, 244, 0.15) 100%)",
                          borderRadius: 6,
                          border:
                            item.level === "warning"
                              ? "1px solid rgba(250, 173, 20, 0.4)"
                              : "1px solid rgba(150, 205, 255, 0.35)",
                          boxShadow:
                            item.level === "warning"
                              ? "0 2px 8px rgba(250, 173, 20, 0.2)"
                              : "0 2px 8px rgba(89, 154, 221, 0.2)",
                          display: "block",
                        }}
                      >
                        <Row
                          justify="space-between"
                          align="middle"
                          style={{ marginBottom: 4 }}
                        >
                          <Col>
                            <Space size={6}>
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 600,
                                  color:
                                    item.level === "warning"
                                      ? "#ffa940"
                                      : "#69b1ff",
                                }}
                              >
                                {item.level === "warning" ? "⚠ 告警" : "ℹ 信息"}
                              </span>
                              <Typography.Text
                                style={{
                                  fontSize: 11,
                                  color: "#b8d9ff",
                                }}
                              >
                                {item.time}
                              </Typography.Text>
                            </Space>
                          </Col>
                        </Row>
                        <Typography.Text
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#ffffff",
                            display: "block",
                            textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          {item.message}
                        </Typography.Text>
                        <Row justify="space-between" style={{ marginTop: 4 }}>
                          <Col>
                            <Typography.Text
                              style={{
                                fontSize: 11,
                                color:
                                  item.level === "warning"
                                    ? "#ffc53d"
                                    : "#95de64",
                                fontWeight: 500,
                              }}
                            >
                              当前值：{item.value}
                            </Typography.Text>
                          </Col>
                          <Col>
                            <Typography.Text
                              style={{
                                fontSize: 11,
                                color: "#91caff",
                                fontWeight: 500,
                              }}
                            >
                              阈值：{item.threshold}
                            </Typography.Text>
                          </Col>
                        </Row>
                      </List.Item>
                    )}
                  />
                </div>

                {/* 操作记录 */}
                <div
                  style={{
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  <Typography.Text
                    style={{
                      fontSize: 12,
                      color: "#ffffff",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    <HistoryOutlined style={{ fontSize: 12, marginRight: 6 }} />
                    操作记录
                  </Typography.Text>
                  <List
                    size="small"
                    dataSource={[
                      {
                        operator: "张工",
                        action: "批量启动局部风机",
                        result: "成功",
                        time: "14:30",
                        duration: "2分15秒",
                        deviceCount: 8,
                      },
                      {
                        operator: "李工",
                        action: "停止局扇-05",
                        result: "成功",
                        time: "14:28",
                        duration: "35秒",
                        deviceCount: 1,
                      },
                    ]}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          padding: "10px 12px",
                          marginBottom: 8,
                          background:
                            item.result === "成功"
                              ? "linear-gradient(135deg, rgba(82, 196, 26, 0.2) 0%, rgba(115, 209, 61, 0.15) 100%)"
                              : "linear-gradient(135deg, rgba(255, 77, 79, 0.2) 0%, rgba(255, 120, 117, 0.15) 100%)",
                          borderRadius: 6,
                          border:
                            item.result === "成功"
                              ? "1px solid rgba(82, 196, 26, 0.4)"
                              : "1px solid rgba(255, 77, 79, 0.4)",
                          boxShadow:
                            item.result === "成功"
                              ? "0 2px 8px rgba(82, 196, 26, 0.2)"
                              : "0 2px 8px rgba(255, 77, 79, 0.2)",
                          display: "block",
                        }}
                      >
                        <Row
                          justify="space-between"
                          align="middle"
                          style={{ marginBottom: 4 }}
                        >
                          <Col>
                            <Space size={6}>
                              <Typography.Text
                                style={{
                                  fontSize: 13,
                                  fontWeight: 700,
                                  color: "#ffffff",
                                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
                                }}
                              >
                                <UserOutlined
                                  style={{ fontSize: 12, marginRight: 4 }}
                                />
                                {item.operator}
                              </Typography.Text>
                              <span
                                style={{
                                  fontSize: 12,
                                  fontWeight: 600,
                                  color:
                                    item.result === "成功"
                                      ? "#95de64"
                                      : "#ff7875",
                                }}
                              >
                                {item.result === "成功" ? "✓ 成功" : "✗ 失败"}
                              </span>
                            </Space>
                          </Col>
                          <Col>
                            <Typography.Text
                              style={{ fontSize: 11, color: "#b8d9ff" }}
                            >
                              {item.time}
                            </Typography.Text>
                          </Col>
                        </Row>
                        <Typography.Text
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#ffffff",
                            display: "block",
                            textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          {item.action}
                        </Typography.Text>
                        <Row justify="space-between" style={{ marginTop: 4 }}>
                          <Col>
                            <Typography.Text
                              style={{
                                fontSize: 11,
                                color: "#91caff",
                                fontWeight: 500,
                              }}
                            >
                              设备数：{item.deviceCount}台
                            </Typography.Text>
                          </Col>
                          <Col>
                            <Typography.Text
                              style={{
                                fontSize: 11,
                                color: "#b8d9ff",
                                fontWeight: 500,
                              }}
                            >
                              耗时：{item.duration}
                            </Typography.Text>
                          </Col>
                        </Row>
                      </List.Item>
                    )}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* 功率调整弹窗 */}
      <Modal
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(82, 196, 26, 0.5), 0 0 20px rgba(82, 196, 26, 0.3)'
            }}>
              <ThunderboltOutlined style={{ fontSize: 18, color: '#fff' }} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', textShadow: '0 0 10px rgba(156, 208, 255, 0.6)' }}>功率调整</div>
              <div style={{ fontSize: 12, color: '#b8d9ff', fontWeight: 400 }}>{currentFan.id} · {currentFan.location}</div>
            </div>
          </div>
        }
        open={powerModalVisible}
        onOk={() => {
          api.success(`${currentFan.id} 功率已调整为 ${powerValue}kW`);
          setPowerModalVisible(false);
        }}
        onCancel={() => setPowerModalVisible(false)}
        okText="确认调整"
        cancelText="取消"
        width={560}
        centered
        styles={{
          header: {
            background: 'linear-gradient(180deg, rgba(89, 154, 221, 0.3) 0%, rgba(89, 154, 221, 0.2) 100%)',
            borderBottom: '2px solid rgba(150, 205, 255, 0.5)',
            padding: '16px 24px'
          },
          body: {
            background: 'linear-gradient(180deg, #0d2847 0%, #11365e 100%)',
            padding: '24px'
          },
          footer: {
            background: 'linear-gradient(180deg, rgba(89, 154, 221, 0.2) 0%, rgba(89, 154, 221, 0.1) 100%)',
            borderTop: '2px solid rgba(150, 205, 255, 0.5)',
            padding: '12px 24px'
          },
          content: {
            background: 'transparent',
            border: '2px solid rgba(150, 205, 255, 0.5)',
            boxShadow: '0 4px 30px rgba(11, 35, 62, 0.8), 0 0 40px rgba(74, 157, 232, 0.3)',
            backdropFilter: 'blur(20px)'
          }
        }}
        okButtonProps={{
          style: {
            background: 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)',
            border: 'none',
            height: 40,
            fontSize: 14,
            fontWeight: 600,
            boxShadow: '0 2px 12px rgba(82, 196, 26, 0.6), 0 0 20px rgba(82, 196, 26, 0.4)'
          }
        }}
        cancelButtonProps={{
          style: {
            height: 40,
            fontSize: 14,
            background: 'rgba(89, 154, 221, 0.15)',
            border: '1px solid rgba(150, 205, 255, 0.4)',
            color: '#e8f4ff'
          }
        }}
      >
        <div style={{ padding: '0' }}>
          {/* 当前设备信息 */}
          <div style={{ marginBottom: 24 }}>
            <Typography.Text style={{
              fontSize: 13,
              fontWeight: 600,
              display: 'block',
              marginBottom: 12,
              color: '#ffffff',
              textShadow: '0 0 10px rgba(156, 208, 255, 0.6)'
            }}>
              <DashboardOutlined style={{ marginRight: 6, color: '#69c0ff' }} />
              当前运行状态
            </Typography.Text>
            <div style={{
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(24, 144, 255, 0.2) 0%, rgba(24, 144, 255, 0.1) 100%)',
              borderRadius: 8,
              border: '1px solid rgba(24, 144, 255, 0.5)',
              boxShadow: '0 2px 12px rgba(24, 144, 255, 0.3), inset 0 1px 0 rgba(24, 144, 255, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              gap: 16
            }}>
              <div style={{ flex: 1 }}>
                <Typography.Text style={{ fontSize: 11, color: '#b8d9ff', display: 'block', marginBottom: 6 }}>
                  当前功率
                </Typography.Text>
                <Typography.Text style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#52c41a',
                  display: 'block',
                  textShadow: '0 0 10px rgba(82, 196, 26, 0.6)'
                }}>
                  {currentFan.power}
                </Typography.Text>
              </div>
              <div style={{ flex: 1 }}>
                <Typography.Text style={{ fontSize: 11, color: '#b8d9ff', display: 'block', marginBottom: 6 }}>
                  负载率
                </Typography.Text>
                <Typography.Text style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#69c0ff',
                  display: 'block',
                  textShadow: '0 0 10px rgba(105, 192, 255, 0.6)'
                }}>
                  {currentFan.load}
                </Typography.Text>
              </div>
              <div style={{ flex: 1 }}>
                <Typography.Text style={{ fontSize: 11, color: '#b8d9ff', display: 'block', marginBottom: 6 }}>
                  运行状态
                </Typography.Text>
                <Tag
                  color={currentFan.status === "运行" ? "success" : "default"}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: '4px 12px',
                    marginTop: 4,
                    boxShadow: currentFan.status === "运行" ? '0 0 10px rgba(82, 196, 26, 0.5)' : 'none'
                  }}
                >
                  {currentFan.status === "运行" ? "运行中" : currentFan.status}
                </Tag>
              </div>
            </div>
          </div>

          {/* 功率调整区域 */}
          <div style={{ marginBottom: 24 }}>
            <Typography.Text style={{
              fontSize: 13,
              fontWeight: 600,
              display: 'block',
              marginBottom: 16,
              color: '#ffffff',
              textShadow: '0 0 10px rgba(156, 208, 255, 0.6)'
            }}>
              <SettingOutlined style={{ marginRight: 6, color: '#52c41a' }} />
              目标功率设置
            </Typography.Text>

            {/* 功率值显示 */}
            <div style={{
              textAlign: 'center',
              padding: '24px',
              background: 'linear-gradient(135deg, rgba(82, 196, 26, 0.25) 0%, rgba(82, 196, 26, 0.15) 100%)',
              borderRadius: 8,
              marginBottom: 20,
              border: '2px solid rgba(82, 196, 26, 0.6)',
              boxShadow: '0 2px 12px rgba(82, 196, 26, 0.3), inset 0 1px 0 rgba(82, 196, 26, 0.3)'
            }}>
              <Typography.Text style={{ fontSize: 13, color: '#b8d9ff', display: 'block', marginBottom: 10 }}>
                目标功率
              </Typography.Text>
              <Typography.Text style={{
                fontSize: 48,
                fontWeight: 700,
                color: '#52c41a',
                display: 'block',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(82, 196, 26, 0.8), 0 2px 8px rgba(82, 196, 26, 0.4)'
              }}>
                {powerValue}
                <span style={{ fontSize: 24, fontWeight: 400, marginLeft: 8 }}>kW</span>
              </Typography.Text>
            </div>

            {/* 滑块和输入框 */}
            <Row gutter={16} align="middle">
              <Col span={17}>
                <Slider
                  min={30}
                  max={90}
                  value={powerValue}
                  onChange={(value) => setPowerValue(value)}
                  marks={{
                    30: { style: { fontSize: 11, color: '#b8d9ff' }, label: '30' },
                    45: { style: { fontSize: 11, color: '#b8d9ff' }, label: '45' },
                    55: { style: { fontSize: 11, color: '#b8d9ff' }, label: '55' },
                    75: { style: { fontSize: 11, color: '#b8d9ff' }, label: '75' },
                    90: { style: { fontSize: 11, color: '#b8d9ff' }, label: '90' },
                  }}
                  tooltip={{
                    formatter: (value) => `${value}kW`,
                    placement: 'top'
                  }}
                  trackStyle={{ background: 'linear-gradient(90deg, #52c41a 0%, #73d13d 100%)', height: 6 }}
                  handleStyle={{
                    width: 20,
                    height: 20,
                    marginTop: -7,
                    border: '3px solid #52c41a',
                    boxShadow: '0 2px 8px rgba(82, 196, 26, 0.6), 0 0 15px rgba(82, 196, 26, 0.4)'
                  }}
                  railStyle={{ height: 6, background: 'rgba(89, 154, 221, 0.2)' }}
                />
              </Col>
              <Col span={7}>
                <InputNumber
                  min={30}
                  max={90}
                  value={powerValue}
                  onChange={(value) => setPowerValue(value || 55)}
                  suffix="kW"
                  style={{
                    width: '100%',
                    height: 40,
                    fontSize: 16,
                    fontWeight: 600,
                    background: 'rgba(89, 154, 221, 0.15)',
                    border: '1px solid rgba(150, 205, 255, 0.4)',
                    color: '#ffffff'
                  }}
                />
              </Col>
            </Row>
          </div>

          {/* 提示信息 */}
          <div style={{
            padding: '14px 16px',
            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 193, 7, 0.1) 100%)',
            borderRadius: 8,
            border: '1px solid rgba(255, 193, 7, 0.5)',
            boxShadow: '0 2px 8px rgba(255, 193, 7, 0.2)',
            display: 'flex',
            gap: 10
          }}>
            <InfoCircleOutlined style={{ fontSize: 16, color: '#ffc53d', marginTop: 2 }} />
            <div style={{ flex: 1 }}>
              <Typography.Text style={{ fontSize: 13, color: '#ffffff', display: 'block', marginBottom: 6, fontWeight: 600 }}>
                调整说明：
              </Typography.Text>
              <Typography.Text style={{ fontSize: 12, color: '#e8f4ff', display: 'block', lineHeight: 1.6 }}>
                • 功率调整范围：30-90kW
              </Typography.Text>
              <Typography.Text style={{ fontSize: 12, color: '#e8f4ff', display: 'block', lineHeight: 1.6 }}>
                • 调整后设备将在 3-5 秒内响应
              </Typography.Text>
              <Typography.Text style={{ fontSize: 12, color: '#e8f4ff', display: 'block', lineHeight: 1.6 }}>
                • 请确保调整过程中现场安全
              </Typography.Text>
            </div>
          </div>
        </div>
      </Modal>

      {/* 风量调整弹窗 */}
      <Modal
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #87d068 0%, #95de64 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(135, 208, 104, 0.5), 0 0 20px rgba(135, 208, 104, 0.3)'
            }}>
              <CloudOutlined style={{ fontSize: 18, color: '#fff' }} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', textShadow: '0 0 10px rgba(156, 208, 255, 0.6)' }}>风量调整</div>
              <div style={{ fontSize: 12, color: '#b8d9ff', fontWeight: 400 }}>{currentFan.id} · {currentFan.location}</div>
            </div>
          </div>
        }
        open={windModalVisible}
        onOk={() => {
          api.success(`${currentFan.id} 风量已调整为 ${windValue}m³/s`);
          setWindModalVisible(false);
        }}
        onCancel={() => setWindModalVisible(false)}
        okText="确认调整"
        cancelText="取消"
        width={560}
        centered
        styles={{
          header: {
            background: 'linear-gradient(180deg, rgba(89, 154, 221, 0.3) 0%, rgba(89, 154, 221, 0.2) 100%)',
            borderBottom: '2px solid rgba(150, 205, 255, 0.5)',
            padding: '16px 24px'
          },
          body: {
            background: 'linear-gradient(180deg, #0d2847 0%, #11365e 100%)',
            padding: '24px'
          },
          footer: {
            background: 'linear-gradient(180deg, rgba(89, 154, 221, 0.2) 0%, rgba(89, 154, 221, 0.1) 100%)',
            borderTop: '2px solid rgba(150, 205, 255, 0.5)',
            padding: '12px 24px'
          },
          content: {
            background: 'transparent',
            border: '2px solid rgba(150, 205, 255, 0.5)',
            boxShadow: '0 4px 30px rgba(11, 35, 62, 0.8), 0 0 40px rgba(74, 157, 232, 0.3)',
            backdropFilter: 'blur(20px)'
          }
        }}
        okButtonProps={{
          style: {
            background: 'linear-gradient(135deg, #87d068 0%, #95de64 100%)',
            border: 'none',
            height: 40,
            fontSize: 14,
            fontWeight: 600,
            boxShadow: '0 2px 12px rgba(135, 208, 104, 0.6), 0 0 20px rgba(135, 208, 104, 0.4)'
          }
        }}
        cancelButtonProps={{
          style: {
            height: 40,
            fontSize: 14,
            background: 'rgba(89, 154, 221, 0.15)',
            border: '1px solid rgba(150, 205, 255, 0.4)',
            color: '#e8f4ff'
          }
        }}
      >
        <div style={{ padding: '0' }}>
          <div style={{ marginBottom: 24 }}>
            <Typography.Text style={{
              fontSize: 13,
              fontWeight: 600,
              display: 'block',
              marginBottom: 12,
              color: '#ffffff',
              textShadow: '0 0 10px rgba(156, 208, 255, 0.6)'
            }}>
              <DashboardOutlined style={{ marginRight: 6, color: '#69c0ff' }} />
              当前运行状态
            </Typography.Text>
            <div style={{
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(24, 144, 255, 0.2) 0%, rgba(24, 144, 255, 0.1) 100%)',
              borderRadius: 8,
              border: '1px solid rgba(24, 144, 255, 0.5)',
              boxShadow: '0 2px 12px rgba(24, 144, 255, 0.3), inset 0 1px 0 rgba(24, 144, 255, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              gap: 16
            }}>
              <div style={{ flex: 1 }}>
                <Typography.Text style={{ fontSize: 11, color: '#b8d9ff', display: 'block', marginBottom: 6 }}>
                  当前风量
                </Typography.Text>
                <Typography.Text style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#87d068',
                  display: 'block',
                  textShadow: '0 0 10px rgba(135, 208, 104, 0.6)'
                }}>
                  {currentFan.windVolume}
                </Typography.Text>
              </div>
              <div style={{ flex: 1 }}>
                <Typography.Text style={{ fontSize: 11, color: '#b8d9ff', display: 'block', marginBottom: 6 }}>
                  功率
                </Typography.Text>
                <Typography.Text style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#69c0ff',
                  display: 'block',
                  textShadow: '0 0 10px rgba(105, 192, 255, 0.6)'
                }}>
                  {currentFan.power}
                </Typography.Text>
              </div>
              <div style={{ flex: 1 }}>
                <Typography.Text style={{ fontSize: 11, color: '#b8d9ff', display: 'block', marginBottom: 6 }}>
                  运行状态
                </Typography.Text>
                <Tag
                  color={currentFan.status === "运行" ? "success" : "default"}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: '4px 12px',
                    marginTop: 4,
                    boxShadow: currentFan.status === "运行" ? '0 0 10px rgba(82, 196, 26, 0.5)' : 'none'
                  }}
                >
                  {currentFan.status === "运行" ? "运行中" : currentFan.status}
                </Tag>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <Typography.Text style={{
              fontSize: 13,
              fontWeight: 600,
              display: 'block',
              marginBottom: 16,
              color: '#ffffff',
              textShadow: '0 0 10px rgba(156, 208, 255, 0.6)'
            }}>
              <SettingOutlined style={{ marginRight: 6, color: '#87d068' }} />
              目标风量设置
            </Typography.Text>

            <div style={{
              textAlign: 'center',
              padding: '24px',
              background: 'linear-gradient(135deg, rgba(135, 208, 104, 0.25) 0%, rgba(135, 208, 104, 0.15) 100%)',
              borderRadius: 8,
              marginBottom: 20,
              border: '2px solid rgba(135, 208, 104, 0.6)',
              boxShadow: '0 2px 12px rgba(135, 208, 104, 0.3), inset 0 1px 0 rgba(135, 208, 104, 0.3)'
            }}>
              <Typography.Text style={{ fontSize: 13, color: '#b8d9ff', display: 'block', marginBottom: 10 }}>
                目标风量
              </Typography.Text>
              <Typography.Text style={{
                fontSize: 48,
                fontWeight: 700,
                color: '#87d068',
                display: 'block',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(135, 208, 104, 0.8), 0 2px 8px rgba(135, 208, 104, 0.4)'
              }}>
                {windValue}
                <span style={{ fontSize: 20, fontWeight: 400, marginLeft: 8 }}>m³/s</span>
              </Typography.Text>
            </div>

            <Row gutter={16} align="middle">
              <Col span={17}>
                <Slider
                  min={200}
                  max={700}
                  value={windValue}
                  onChange={(value) => setWindValue(value)}
                  marks={{
                    200: { style: { fontSize: 11, color: '#b8d9ff' }, label: '200' },
                    350: { style: { fontSize: 11, color: '#b8d9ff' }, label: '350' },
                    450: { style: { fontSize: 11, color: '#b8d9ff' }, label: '450' },
                    550: { style: { fontSize: 11, color: '#b8d9ff' }, label: '550' },
                    700: { style: { fontSize: 11, color: '#b8d9ff' }, label: '700' },
                  }}
                  tooltip={{
                    formatter: (value) => `${value}m³/s`,
                    placement: 'top'
                  }}
                  trackStyle={{ background: 'linear-gradient(90deg, #87d068 0%, #95de64 100%)', height: 6 }}
                  handleStyle={{
                    width: 20,
                    height: 20,
                    marginTop: -7,
                    border: '3px solid #87d068',
                    boxShadow: '0 2px 8px rgba(135, 208, 104, 0.6), 0 0 15px rgba(135, 208, 104, 0.4)'
                  }}
                  railStyle={{ height: 6, background: 'rgba(89, 154, 221, 0.2)' }}
                />
              </Col>
              <Col span={7}>
                <InputNumber
                  min={200}
                  max={700}
                  value={windValue}
                  onChange={(value) => setWindValue(value || 420)}
                  suffix="m³/s"
                  style={{
                    width: '100%',
                    height: 40,
                    fontSize: 14,
                    fontWeight: 600,
                    background: 'rgba(89, 154, 221, 0.15)',
                    border: '1px solid rgba(150, 205, 255, 0.4)',
                    color: '#ffffff'
                  }}
                />
              </Col>
            </Row>
          </div>

          <div style={{
            padding: '14px 16px',
            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 193, 7, 0.1) 100%)',
            borderRadius: 8,
            border: '1px solid rgba(255, 193, 7, 0.5)',
            boxShadow: '0 2px 8px rgba(255, 193, 7, 0.2)',
            display: 'flex',
            gap: 10
          }}>
            <InfoCircleOutlined style={{ fontSize: 16, color: '#ffc53d', marginTop: 2 }} />
            <div style={{ flex: 1 }}>
              <Typography.Text style={{ fontSize: 13, color: '#ffffff', display: 'block', marginBottom: 6, fontWeight: 600 }}>
                调整说明：
              </Typography.Text>
              <Typography.Text style={{ fontSize: 12, color: '#e8f4ff', display: 'block', lineHeight: 1.6 }}>
                • 风量调整范围：200-700m³/s
              </Typography.Text>
              <Typography.Text style={{ fontSize: 12, color: '#e8f4ff', display: 'block', lineHeight: 1.6 }}>
                • 调整后设备将在 3-5 秒内响应
              </Typography.Text>
              <Typography.Text style={{ fontSize: 12, color: '#e8f4ff', display: 'block', lineHeight: 1.6 }}>
                • 请确保调整过程中现场安全
              </Typography.Text>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
