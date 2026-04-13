import { useCallback, useEffect, useMemo, useState, lazy, Suspense } from "react";
import {
  Button,
  Card,
  Col,
  InputNumber,
  Modal,
  Row,
  Select,
  Space,
  Statistic,
  Table,
  Tag,
  Typography,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import {
  CopyOutlined,
  DownloadOutlined,
  FileTextOutlined,
  ReloadOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import "./GasDisasterSimulationPage.css";

type WarningLevel = "正常" | "关注" | "预警" | "严重";
type DisasterType = "瓦斯突出" | "火灾" | "水灾" | "煤尘";

interface BackgroundSettings {
  paused: boolean;
  rotationSpeed: number;
  opacity: number;
  brightness: number;
}

interface RegionMeta {
  id: string;
  name: string;
  center: [number, number];
  roadwayIds: string[];
}

interface RoadwayMeta {
  id: string;
  name: string;
  from: string;
  to: string;
  regionId: string;
}

interface PersonBase {
  id: string;
  team: string;
  regionId: string;
}

interface PersonRow extends PersonBase {
  key: string;
  locatedArea: string;
  primaryRoute: string;
  backupRoute: string;
  riskLevel: WarningLevel;
}

interface SuggestionItem {
  id: string;
  title: string;
  riskLevel: WarningLevel;
  detail: string;
  nextAction: string;
}

const WARNING_LEVELS: WarningLevel[] = ["正常", "关注", "预警", "严重"];

const WARNING_COLOR: Record<WarningLevel, string> = {
  正常: "#3f8f6a",
  关注: "#4f79a8",
  预警: "#d58a3f",
  严重: "#c55656",
};

const WARNING_TAG: Record<
  WarningLevel,
  "success" | "processing" | "warning" | "error"
> = {
  正常: "success",
  关注: "processing",
  预警: "warning",
  严重: "error",
};

const REGIONS: RegionMeta[] = [
  {
    id: "north-intake",
    name: "北翼进风区",
    center: [20, 58],
    roadwayIds: ["R01", "R02", "R10"],
  },
  {
    id: "east-return",
    name: "东翼回风区",
    center: [62, 46],
    roadwayIds: ["R03", "R12"],
  },
  {
    id: "face-3105",
    name: "3105工作面",
    center: [82, 36],
    roadwayIds: ["R04", "R05"],
  },
  {
    id: "west-return",
    name: "西翼回风区",
    center: [30, 30],
    roadwayIds: ["R06", "R09"],
  },
  {
    id: "south-link",
    name: "南翼联络区",
    center: [52, 24],
    roadwayIds: ["R07", "R11"],
  },
  {
    id: "safe-chamber",
    name: "安全硐室区",
    center: [86, 14],
    roadwayIds: ["R08"],
  },
];

const ROADWAYS: RoadwayMeta[] = [
  {
    id: "R01",
    name: "北翼主进风巷",
    from: "N1",
    to: "N2",
    regionId: "north-intake",
  },
  {
    id: "R02",
    name: "北翼联络巷",
    from: "N2",
    to: "N3",
    regionId: "north-intake",
  },
  {
    id: "R03",
    name: "东翼运输巷",
    from: "N3",
    to: "N4",
    regionId: "east-return",
  },
  {
    id: "R04",
    name: "3105进风巷",
    from: "N4",
    to: "N5",
    regionId: "face-3105",
  },
  {
    id: "R05",
    name: "3105回风巷",
    from: "N5",
    to: "N8",
    regionId: "face-3105",
  },
  {
    id: "R06",
    name: "西翼回风上山",
    from: "N6",
    to: "N3",
    regionId: "west-return",
  },
  {
    id: "R07",
    name: "南翼联络巷",
    from: "N7",
    to: "N8",
    regionId: "south-link",
  },
  {
    id: "R08",
    name: "安全硐室通道",
    from: "N8",
    to: "N9",
    regionId: "safe-chamber",
  },
  {
    id: "R09",
    name: "西翼联络巷",
    from: "N6",
    to: "N7",
    regionId: "west-return",
  },
  {
    id: "R10",
    name: "北翼回风联巷",
    from: "N2",
    to: "N6",
    regionId: "north-intake",
  },
  {
    id: "R11",
    name: "南翼回风巷",
    from: "N7",
    to: "N4",
    regionId: "south-link",
  },
  {
    id: "R12",
    name: "东翼回风联络巷",
    from: "N4",
    to: "N8",
    regionId: "east-return",
  },
];

const PERSONS: PersonBase[] = [
  { id: "P-101", team: "掘进一班", regionId: "north-intake" },
  { id: "P-102", team: "掘进一班", regionId: "north-intake" },
  { id: "P-203", team: "综采二班", regionId: "face-3105" },
  { id: "P-204", team: "综采二班", regionId: "face-3105" },
  { id: "P-205", team: "机电保障", regionId: "east-return" },
  { id: "P-206", team: "机电保障", regionId: "east-return" },
  { id: "P-307", team: "通风队", regionId: "south-link" },
  { id: "P-308", team: "通风队", regionId: "west-return" },
  { id: "P-401", team: "救护中队", regionId: "safe-chamber" },
  { id: "P-402", team: "救护中队", regionId: "safe-chamber" },
];

const PRIMARY_EVAC_ROUTE: Record<string, string> = {
  "north-intake": "北翼主进风巷 → 主井口",
  "east-return": "东翼运输巷 → 安全硐室通道",
  "face-3105": "3105回风巷 → 回风上山节点",
  "west-return": "西翼联络巷 → 副井联络点",
  "south-link": "南翼联络巷 → 安全硐室入口",
  "safe-chamber": "原地待命",
};

const BACKUP_EVAC_ROUTE: Record<string, string> = {
  "north-intake": "北翼联络巷 → 东翼运输节点",
  "east-return": "东翼回风联络巷 → 回风上山节点",
  "face-3105": "3105进风巷 → 东翼回风节点",
  "west-return": "西翼回风上山 → 东翼运输节点",
  "south-link": "南翼回风巷 → 东翼回风节点",
  "safe-chamber": "保持避险等待调度指令",
};

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));
const warningRank = (level: WarningLevel): number =>
  WARNING_LEVELS.indexOf(level);
const rankToWarning = (rank: number): WarningLevel =>
  WARNING_LEVELS[clamp(Math.round(rank), 0, WARNING_LEVELS.length - 1)];

const distanceOf = (a: [number, number], b: [number, number]): number => {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
};

const DEFAULT_BG_SETTINGS: BackgroundSettings = {
  paused: false,
  rotationSpeed: 0.06,
  opacity: 0.55,
  brightness: 1.4,
};

const LazyHomeObjBackground = lazy(async () => {
  const module = await import("../../components/topology/HomeObjBackground3D");
  return { default: module.HomeObjBackground3D };
});

export default function GasDisasterSimulationPage() {
  const [disasterType, setDisasterType] = useState<DisasterType>("瓦斯突出");
  const [sourceRoadwayId, setSourceRoadwayId] = useState<string>(
    ROADWAYS[2].id,
  );
  const [simulationDurationMinutes, setSimulationDurationMinutes] =
    useState<number>(60);
  const [selectedRiskLevel, setSelectedRiskLevel] =
    useState<WarningLevel>("关注");

  const [simulationTaskName, setSimulationTaskName] =
    useState<string>("灾害场景模拟任务");
  const [simulationStartTime, setSimulationStartTime] = useState<string>(
    dayjs().format("YYYY-MM-DD HH:mm:ss"),
  );
  const [lastUpdated, setLastUpdated] = useState<string>(
    dayjs().format("YYYY-MM-DD HH:mm:ss"),
  );

  const [timeIndex, setTimeIndex] = useState<number>(0);
  const [monitorRoadwayId, setMonitorRoadwayId] =
    useState<string>("affected-all");
  const [highlightPersonId, setHighlightPersonId] = useState<string | null>(
    null,
  );
  const [detailSuggestion, setDetailSuggestion] =
    useState<SuggestionItem | null>(null);

  const [bgSettings] = useState<BackgroundSettings>(DEFAULT_BG_SETTINGS);
  const [backgroundReady, setBackgroundReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setBackgroundReady(true);
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);
    useState<SuggestionItem | null>(null);

  const regionMap = useMemo(
    () => new Map(REGIONS.map((item) => [item.id, item])),
    [],
  );
  const roadwayMap = useMemo(
    () => new Map(ROADWAYS.map((item) => [item.id, item])),
    [],
  );
  const sourceRoadway = useMemo(
    () => roadwayMap.get(sourceRoadwayId) ?? ROADWAYS[0],
    [roadwayMap, sourceRoadwayId],
  );

  const sourceRegion = useMemo(
    () => regionMap.get(sourceRoadway.regionId) ?? REGIONS[0],
    [regionMap, sourceRoadway.regionId],
  );

  const timeline = useMemo(() => {
    const stepMinutes = 5;
    const points = clamp(
      Math.floor(simulationDurationMinutes / stepMinutes) + 1,
      6,
      48,
    );
    return Array.from(
      { length: points },
      (_, index) => `${index * stepMinutes} 分钟`,
    );
  }, [simulationDurationMinutes]);

  useEffect(() => {
    setTimeIndex((prev) => Math.min(prev, timeline.length - 1));
  }, [timeline.length]);

  const progress = timeline.length > 1 ? timeIndex / (timeline.length - 1) : 0;

  const regionRiskMap = useMemo<Record<string, WarningLevel>>(() => {
    const baseRank = warningRank(selectedRiskLevel);
    const spreadRadius = 15 + progress * 58;

    return REGIONS.reduce<Record<string, WarningLevel>>((acc, region) => {
      if (region.id === sourceRegion.id) {
        acc[region.id] = rankToWarning(Math.max(baseRank + 1, 2));
        return acc;
      }

      const distance = distanceOf(region.center, sourceRegion.center);
      const impact = clamp((spreadRadius - distance) / spreadRadius, 0, 1);
      const impactRank =
        impact > 0.78 ? 3 : impact > 0.52 ? 2 : impact > 0.24 ? 1 : 0;
      const combinedRank = Math.max(impactRank, baseRank - 1);
      acc[region.id] = rankToWarning(combinedRank);
      return acc;
    }, {});
  }, [progress, selectedRiskLevel, sourceRegion.center, sourceRegion.id]);

  const warningCounts = useMemo(() => {
    const affectedRegions = REGIONS.filter(
      (region) => warningRank(regionRiskMap[region.id]) >= 1,
    ).length;
    const affectedRoadways = ROADWAYS.filter((roadway) => {
      if (roadway.id === sourceRoadway.id) {
        return true;
      }
      return warningRank(regionRiskMap[roadway.regionId]) >= 1;
    }).length;

    return { affectedRegions, affectedRoadways };
  }, [regionRiskMap, sourceRoadway.id]);

  const affectedRoadways = useMemo(
    () =>
      ROADWAYS.filter(
        (roadway) =>
          roadway.id === sourceRoadway.id ||
          warningRank(regionRiskMap[roadway.regionId]) >= 1,
      ),
    [regionRiskMap, sourceRoadway.id],
  );

  useEffect(() => {
    if (
      monitorRoadwayId !== "affected-all" &&
      !affectedRoadways.some((roadway) => roadway.id === monitorRoadwayId)
    ) {
      setMonitorRoadwayId(affectedRoadways[0]?.id ?? "affected-all");
    }
  }, [affectedRoadways, monitorRoadwayId]);

  const overallWarningLevel = useMemo<WarningLevel>(() => {
    const maxRank = REGIONS.reduce((max, region) => {
      const current = warningRank(regionRiskMap[region.id]);
      return Math.max(max, current);
    }, 0);
    return rankToWarning(maxRank);
  }, [regionRiskMap]);

  const personRows = useMemo<PersonRow[]>(() => {
    return PERSONS.map((person) => {
      const regionRisk = regionRiskMap[person.regionId];
      return {
        ...person,
        key: person.id,
        locatedArea: regionMap.get(person.regionId)?.name ?? "未知区域",
        primaryRoute: PRIMARY_EVAC_ROUTE[person.regionId] ?? "就近撤离",
        backupRoute: BACKUP_EVAC_ROUTE[person.regionId] ?? "等待调度指令",
        riskLevel: regionRisk,
      };
    });
  }, [regionMap, regionRiskMap]);

  const peopleStats = useMemo(() => {
    const affectedTotal = personRows.filter(
      (item) => warningRank(item.riskLevel) >= 1,
    ).length;
    const highRisk = personRows.filter(
      (item) => warningRank(item.riskLevel) >= 2,
    ).length;
    const safeCount = personRows.filter(
      (item) => item.riskLevel === "正常",
    ).length;
    const passable = Math.max(
      0,
      ROADWAYS.length - warningCounts.affectedRoadways,
    );
    const blocked = warningCounts.affectedRoadways;
    return {
      affectedTotal,
      highRisk,
      safeCount,
      passable,
      blocked,
    };
  }, [personRows, regionRiskMap, warningCounts.affectedRoadways]);
  const suggestionSummary = useMemo(() => {
    const highRiskRegions = REGIONS.filter(
      (region) => warningRank(regionRiskMap[region.id]) >= 2,
    )
      .map((region) => region.name)
      .join("、");

    const isHighRisk = warningRank(overallWarningLevel) >= 2;
    const affectedPeople = peopleStats.affectedTotal;
    const highRiskPeople = peopleStats.highRisk;

    // 根据灾害类型和风险等级生成具体的设施控制建议
    let closeFacilitiesList: string[] = [];
    let openFacilitiesList: string[] = [];

    if (disasterType === "瓦斯突出") {
      closeFacilitiesList = isHighRisk
        ? [`${sourceRoadway.name}电气设备`, "采掘设备", "相邻巷道电源"]
        : [`${sourceRoadway.name}非防爆设备`];
      openFacilitiesList = isHighRisk
        ? ["主通风机", "局部通风机", "瓦斯监测系统"]
        : ["局部通风机", "瓦斯抽放系统"];
    } else if (disasterType === "火灾") {
      closeFacilitiesList = isHighRisk
        ? [`${sourceRoadway.name}所有电源`, "皮带运输", "局部通风机"]
        : [`${sourceRoadway.name}电气开关`, "皮带运输"];
      openFacilitiesList = isHighRisk
        ? ["主通风机反风", "消防洒水", "应急照明"]
        : ["消防洒水", "应急照明", "CO监测"];
    } else if (disasterType === "水灾") {
      closeFacilitiesList = isHighRisk
        ? [`${sourceRoadway.name}低洼电气`, "运输设备"]
        : [`${sourceRoadway.name}非防水设备`];
      openFacilitiesList = isHighRisk
        ? ["所有排水泵组", "应急照明", "水位监测"]
        : ["主排水泵", "备用水泵", "水位监测"];
    } else if (disasterType === "煤尘") {
      closeFacilitiesList = isHighRisk
        ? [`${sourceRoadway.name}采掘设备`, "运输设备", "非防爆电气"]
        : [`${sourceRoadway.name}产尘设备`];
      openFacilitiesList = isHighRisk
        ? ["局部通风机", "洒水降尘", "粉尘监测"]
        : ["洒水降尘", "局部通风机"];
    }

    return {
      level: overallWarningLevel,
      isolateRegions: highRiskRegions || "暂无",
      closeFacilitiesList,
      openFacilitiesList,
      emergencyAirControl: isHighRisk ? "立即启动" : "待命准备",
      restrictEntry: isHighRisk ? "立即封锁" : "限制进入",
      affectedPeopleCount: affectedPeople,
      highRiskPeopleCount: highRiskPeople,
      evacuationTime: isHighRisk ? "10分钟内" : "待命",
      monitorInterval: isHighRisk ? "1分钟" : "5分钟",
    };
  }, [disasterType, overallWarningLevel, regionRiskMap, peopleStats, sourceRoadway.name]);

  const visibleSuggestions = useMemo<SuggestionItem[]>(() => {
    const isHighRisk = warningRank(overallWarningLevel) >= 2;

    const base: SuggestionItem[] = [
      {
        id: "s1",
        title: "人员撤离",
        riskLevel: overallWarningLevel,
        detail: isHighRisk
          ? `${peopleStats.highRisk}名高风险人员`
          : `${peopleStats.affectedTotal}名受影响人员`,
        nextAction: isHighRisk
          ? "5分钟清点，10分钟撤离完毕"
          : "清点人数，确认路线，待命",
      },
      {
        id: "s2",
        title: "通风调整",
        riskLevel: warningRank(overallWarningLevel) >= 2 ? "预警" : "关注",
        detail: isHighRisk
          ? disasterType === "火灾" ? "启动反风系统" : "增大通风量"
          : "准备调整方案",
        nextAction: isHighRisk
          ? "5分钟内完成，确认风流方向"
          : "每3分钟监测通风参数",
      },
      {
        id: "s3",
        title: "设施控制",
        riskLevel: warningRank(overallWarningLevel) >= 2 ? "严重" : "预警",
        detail: `关闭${suggestionSummary.closeFacilitiesList.length}项，开启${suggestionSummary.openFacilitiesList.length}项`,
        nextAction: isHighRisk
          ? "立即执行断电，确认设备状态"
          : "准备控制方案，确认系统可用",
      },
      {
        id: "s4",
        title: "应急队伍",
        riskLevel: warningRank(overallWarningLevel) >= 2 ? "严重" : "关注",
        detail: isHighRisk
          ? `救护队、通风队、机电队`
          : "应急队伍集结待命",
        nextAction: isHighRisk
          ? "15-20分钟到位，报告状态"
          : "10分钟集结，确认装备",
      },
      {
        id: "s5",
        title: "监测上报",
        riskLevel: warningRank(overallWarningLevel) >= 1 ? "预警" : "关注",
        detail: `每${suggestionSummary.monitorInterval}监测`,
        nextAction: isHighRisk
          ? "向调度室、安监部门报告"
          : "向调度室报告态势",
      },
    ];

    return base;
  }, [
    overallWarningLevel,
    suggestionSummary.closeFacilitiesList.length,
    suggestionSummary.openFacilitiesList.length,
    suggestionSummary.monitorInterval,
    peopleStats.affectedTotal,
    peopleStats.highRisk,
    disasterType,
  ]);

  const personColumns: ColumnsType<PersonRow> = [
    { title: "人员编号", dataIndex: "id", width: 110 },
    { title: "所属班组", dataIndex: "team", width: 120 },
    { title: "所在区域", dataIndex: "locatedArea", width: 140 },
    { title: "推荐路线", dataIndex: "primaryRoute", width: 220 },
    { title: "备选路线", dataIndex: "backupRoute", width: 220 },
    {
      title: "风险等级",
      dataIndex: "riskLevel",
      width: 100,
      render: (value: WarningLevel) => (
        <Tag color={WARNING_TAG[value]}>{value}</Tag>
      ),
    },
  ];

  const handleStartSimulation = useCallback(() => {
    const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
    setSimulationStartTime(now);
    setLastUpdated(now);
    setTimeIndex(0);
    setMonitorRoadwayId(sourceRoadwayId);
    setHighlightPersonId(null);

    const taskName = `${dayjs(now).format("MMDD-HHmm")}-${disasterType}-${sourceRoadway.name}推演`;
    setSimulationTaskName(taskName);

    message.success("模拟已启动，正在根据当前条件进行推演。");
  }, [disasterType, roadwayMap, sourceRoadway.name, sourceRoadwayId]);

  const handleResetConditions = useCallback(() => {
    setDisasterType("瓦斯突出");
    setSourceRoadwayId(ROADWAYS[2].id);
    setSimulationDurationMinutes(60);
    setSelectedRiskLevel("关注");
    setMonitorRoadwayId("affected-all");
    message.success("模拟条件已恢复默认配置。");
  }, []);

  const handleRefresh = useCallback(() => {
    setLastUpdated(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    message.success("模拟结果已刷新。");
  }, []);
  const handleExportResult = useCallback(() => {
    const payload = {
      taskName: simulationTaskName,
      disasterType,
      sourceRoadway: sourceRoadway.name,
      sourceRoadwayId,
      durationMinutes: simulationDurationMinutes,
      riskLevel: selectedRiskLevel,
      simulationStartTime,
      currentDuration: timeline[timeIndex],
      warningLevel: overallWarningLevel,
      affectedRegions: warningCounts.affectedRegions,
      affectedRoadways: warningCounts.affectedRoadways,
      updatedAt: lastUpdated,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `disaster-simulation-${dayjs().format("YYYYMMDD-HHmmss")}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }, [
    disasterType,
    lastUpdated,
    overallWarningLevel,
    selectedRiskLevel,
    simulationDurationMinutes,
    simulationStartTime,
    simulationTaskName,
    sourceRoadway.name,
    sourceRoadwayId,
    timeIndex,
    timeline,
    warningCounts.affectedRegions,
    warningCounts.affectedRoadways,
  ]);

  const handleCopySuggestion = useCallback(async () => {
    const content = [
      `【${disasterType}应急处置建议】`,
      ``,
      `一、态势概况`,
      `处置等级：${suggestionSummary.level}`,
      `灾源位置：${sourceRoadway.name}`,
      `封锁区域：${suggestionSummary.isolateRegions}`,
      `受影响人员：${suggestionSummary.affectedPeopleCount}人（高风险${suggestionSummary.highRiskPeopleCount}人）`,
      `撤离时限：${suggestionSummary.evacuationTime}`,
      ``,
      `二、设施控制`,
      `关闭设施：${suggestionSummary.closeFacilitiesList.join("、")}`,
      `开启设施：${suggestionSummary.openFacilitiesList.join("、")}`,
      `应急通风：${suggestionSummary.emergencyAirControl}`,
      `人员管控：${suggestionSummary.restrictEntry}`,
      `监测频率：每${suggestionSummary.monitorInterval}`,
      ``,
      `三、处置行动`,
      ...visibleSuggestions.map(
        (item, index) =>
          `${index + 1}. ${item.title}（${item.riskLevel}）\n   ${item.detail}\n   ${item.nextAction}`,
      ),
      ``,
      `生成时间：${lastUpdated}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(content);
      message.success("处置建议已复制到剪贴板。");
    } catch {
      message.error("复制失败，请检查浏览器剪贴板权限。");
    }
  }, [
    suggestionSummary,
    visibleSuggestions,
    disasterType,
    sourceRoadway.name,
    lastUpdated,
  ]);

  return (
    <div className="gas-disaster-page page-container">
      {/* 3D背景层 */}
      <div className="gas-background-layer">
        {backgroundReady ? (
          <Suspense
            fallback={
              <div className="gas-background-placeholder">3D背景载入中</div>
            }
          >
            <LazyHomeObjBackground
              paused
              rotationSpeed={0}
              opacity={bgSettings.opacity}
              brightness={bgSettings.brightness}
              disableRotation={false}
              viewScale={4.5}
              viewAzimuthDeg={90}
            />
          </Suspense>
        ) : (
          <div className="gas-background-placeholder">
            正在准备巷道模型背景
          </div>
        )}
      </div>

      {/* 内容层 */}
      <div className="gas-content-layer">
      {/* 上栏 */}
      <Row gutter={[12, 12]} className="gas-top-row">
        {/* 左侧：模拟条件设置 + 灾害总览 */}
        <Col xs={24} xl={5} className="gas-left-column">
          <Space direction="vertical" style={{ width: "100%", height: "100%" }} size={12}>
            <Card className="page-card" size="small" title="模拟条件设置">
              <div className="gas-filter-column">
                <div className="gas-filter-item gas-filter-item--vertical">
                  <span className="gas-field-inline-label">灾害类型</span>
                  <Select<DisasterType>
                    value={disasterType}
                    onChange={setDisasterType}
                    options={[
                      { label: "瓦斯突出", value: "瓦斯突出" },
                      { label: "火灾", value: "火灾" },
                      { label: "水灾", value: "水灾" },
                      { label: "煤尘", value: "煤尘" },
                    ]}
                  />
                </div>

                <div className="gas-filter-item gas-filter-item--vertical">
                  <span className="gas-field-inline-label">灾源巷道</span>
                  <Select<string>
                    value={sourceRoadwayId}
                    onChange={setSourceRoadwayId}
                    options={ROADWAYS.map((roadway) => ({
                      label: `${roadway.id} ${roadway.name}`,
                      value: roadway.id,
                    }))}
                    showSearch
                    optionFilterProp="label"
                  />
                </div>

                <div className="gas-filter-item gas-filter-item--vertical">
                  <span className="gas-field-inline-label">模拟时长（分钟）</span>
                  <InputNumber
                    style={{ width: "100%" }}
                    min={30}
                    max={240}
                    step={5}
                    value={simulationDurationMinutes}
                    onChange={(value) => setSimulationDurationMinutes(value ?? 60)}
                  />
                </div>

                <div className="gas-filter-item gas-filter-item--vertical">
                  <span className="gas-field-inline-label">风险等级</span>
                  <Select<WarningLevel>
                    value={selectedRiskLevel}
                    onChange={setSelectedRiskLevel}
                    options={WARNING_LEVELS.map((level) => ({
                      label: level,
                      value: level,
                    }))}
                  />
                </div>

                <div className="gas-filter-item">
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Button type="primary" onClick={handleStartSimulation} block>
                      发起模拟
                    </Button>
                    <Button onClick={handleResetConditions} block>重置条件</Button>
                  </Space>
                </div>
              </div>
            </Card>

            <Card
              className="page-card"
              size="small"
              title="灾害总览"
              extra={
                <Space size={4}>
                  <Button size="small" icon={<ReloadOutlined />} onClick={handleRefresh} />
                  <Button
                    size="small"
                    type="primary"
                    icon={<DownloadOutlined />}
                    onClick={handleExportResult}
                  />
                </Space>
              }
            >
              <div className="gas-overview-compact">
                <div className="gas-overview-head">
                  <div>
                    <Typography.Title level={5} style={{ margin: 0, fontSize: 13 }}>
                      {simulationTaskName}
                    </Typography.Title>
                    <Typography.Text type="secondary" style={{ fontSize: 11 }}>
                      {disasterType} / {sourceRoadway.name}
                    </Typography.Text>
                  </div>
                  <Tag color={WARNING_TAG[overallWarningLevel]}>
                    {overallWarningLevel}
                  </Tag>
                </div>

                <div className="gas-overview-grid-compact">
                  <Statistic title="模拟开始" value={simulationStartTime} valueStyle={{ fontSize: 12 }} />
                  <Statistic title="推演时长" value={timeline[timeIndex]} valueStyle={{ fontSize: 12 }} />
                  <Statistic
                    title="预警等级"
                    value={overallWarningLevel}
                    valueStyle={{
                      color: WARNING_COLOR[overallWarningLevel],
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  />
                  <Statistic
                    title="受影响区域"
                    value={warningCounts.affectedRegions}
                    valueStyle={{ fontSize: 14, fontWeight: 700 }}
                  />
                  <Statistic
                    title="受影响巷道"
                    value={warningCounts.affectedRoadways}
                    valueStyle={{ fontSize: 14, fontWeight: 700 }}
                  />
                  <Statistic title="更新时间" value={lastUpdated} valueStyle={{ fontSize: 12 }} />
                </div>
              </div>
            </Card>
          </Space>
        </Col>

        {/* 中间：预留空白区域 */}
        <Col xs={24} xl={14} className="gas-center-column">
          <div className="gas-center-placeholder">
            <Typography.Text type="secondary">
              中间区域预留（可放置3D模型、地图等可视化内容）
            </Typography.Text>
          </div>
        </Col>

        {/* 右侧：应急处置建议 */}
        <Col xs={24} xl={5} className="gas-right-column">
          <Card
            className="page-card gas-suggestion-card"
            size="small"
            title="应急处置建议"
            extra={
              <Typography.Text type="secondary" style={{ fontSize: 11 }}>
                {lastUpdated}
              </Typography.Text>
            }
          >
            <div className="gas-suggestion-summary">
              <div className="gas-suggestion-row">
                <span>处置等级</span>
                <Tag color={WARNING_TAG[suggestionSummary.level]}>
                  {suggestionSummary.level}
                </Tag>
              </div>
              <div className="gas-suggestion-row">
                <span>封锁区域</span>
                <strong>{suggestionSummary.isolateRegions}</strong>
              </div>
              <div className="gas-suggestion-row">
                <span>受影响人员</span>
                <strong>
                  {suggestionSummary.affectedPeopleCount}人
                  {suggestionSummary.highRiskPeopleCount > 0 && (
                    <Tag color="error" style={{ marginLeft: 8 }}>
                      高风险{suggestionSummary.highRiskPeopleCount}人
                    </Tag>
                  )}
                </strong>
              </div>
              <div className="gas-suggestion-row">
                <span>撤离时限</span>
                <Tag color={warningRank(suggestionSummary.level) >= 2 ? "error" : "warning"}>
                  {suggestionSummary.evacuationTime}
                </Tag>
              </div>
              <div className="gas-suggestion-row">
                <span>关闭设施</span>
                <Space size={4} wrap>
                  {suggestionSummary.closeFacilitiesList.map((item, index) => (
                    <Tag key={index} color="red">
                      {item}
                    </Tag>
                  ))}
                </Space>
              </div>
              <div className="gas-suggestion-row">
                <span>开启设施</span>
                <Space size={4} wrap>
                  {suggestionSummary.openFacilitiesList.map((item, index) => (
                    <Tag key={index} color="green">
                      {item}
                    </Tag>
                  ))}
                </Space>
              </div>
              <div className="gas-suggestion-row">
                <span>应急通风</span>
                <Tag color={warningRank(suggestionSummary.level) >= 2 ? "error" : "warning"}>
                  {suggestionSummary.emergencyAirControl}
                </Tag>
              </div>
              <div className="gas-suggestion-row">
                <span>人员管控</span>
                <Tag color={warningRank(suggestionSummary.level) >= 2 ? "error" : "warning"}>
                  {suggestionSummary.restrictEntry}
                </Tag>
              </div>
              <div className="gas-suggestion-row">
                <span>监测频率</span>
                <Tag color={warningRank(suggestionSummary.level) >= 2 ? "error" : "processing"}>
                  每{suggestionSummary.monitorInterval}
                </Tag>
              </div>
            </div>

            <div className="gas-suggestion-list">
              {visibleSuggestions.map((item) => (
                <button
                  key={item.id}
                  className="gas-suggestion-item"
                  onClick={() => setDetailSuggestion(item)}
                >
                  <div className="gas-suggestion-item-title">
                    <Tag color={WARNING_TAG[item.riskLevel]}>
                      {item.riskLevel}
                    </Tag>
                    <span>{item.title}</span>
                  </div>
                  <Typography.Text type="secondary">
                    {item.nextAction}
                  </Typography.Text>
                </button>
              ))}
            </div>

            <div className="gas-suggestion-actions">
              <Button icon={<CopyOutlined />} onClick={handleCopySuggestion} size="small">
                复制
              </Button>
              <Button
                size="small"
                type="primary"
                icon={<FileTextOutlined />}
                onClick={() =>
                  message.success("处置单已生成并进入待确认队列。")
                }
              >
                生成处置单
              </Button>
            </div>
          </Card>
        </Col>
      </Row>

      {/* 下栏：人员影响与避灾 */}
      <Card
        className="page-card"
        size="small"
        title="人员影响与避灾"
        extra={
          <Button
            type="primary"
            icon={<ApiOutlined />}
            onClick={() => message.info("逃生路线规划功能开发中")}
          >
            逃生路线
          </Button>
        }
      >
        <div className="gas-person-stats">
          <Statistic
            title="受影响区域内人员总数"
            value={peopleStats.affectedTotal}
          />
          <Statistic
            title="高风险区域人员数"
            value={peopleStats.highRisk}
            valueStyle={{ color: WARNING_COLOR.预警, fontWeight: 700 }}
          />
          <Statistic title="已识别安全区域人数" value={peopleStats.safeCount} />
          <Statistic title="当前可通行巷道数" value={peopleStats.passable} />
          <Statistic title="当前不可通行巷道数" value={peopleStats.blocked} />
          <Statistic title="推荐避灾路线数量" value={3} />
        </div>

        <Table<PersonRow>
          size="small"
          rowKey="id"
          columns={personColumns}
          dataSource={personRows}
          pagination={{ pageSize: 5 }}
          rowClassName={(record) =>
            record.id === highlightPersonId ? "gas-person-row-active" : ""
          }
          onRow={(record) => ({
            onClick: () => {
              setHighlightPersonId(record.id);
              const relatedRoadway =
                affectedRoadways.find(
                  (roadway) => roadway.regionId === record.regionId,
                ) ?? affectedRoadways[0];
              setMonitorRoadwayId(relatedRoadway?.id ?? "affected-all");
            },
          })}
        />
      </Card>

      <Modal
        title="处置建议详情"
        open={Boolean(detailSuggestion)}
        onCancel={() => setDetailSuggestion(null)}
        onOk={() => setDetailSuggestion(null)}
        okText="已知悉"
        cancelText="关闭"
      >
        {detailSuggestion ? (
          <Space direction="vertical" size={10}>
            <Tag color={WARNING_TAG[detailSuggestion.riskLevel]}>
              {detailSuggestion.riskLevel}
            </Tag>
            <Typography.Text strong>{detailSuggestion.title}</Typography.Text>
            <Typography.Text>{detailSuggestion.detail}</Typography.Text>
            <Typography.Text type="secondary">
              下一步建议动作：{detailSuggestion.nextAction}
            </Typography.Text>
          </Space>
        ) : null}
      </Modal>
      </div>
    </div>
  );
}
