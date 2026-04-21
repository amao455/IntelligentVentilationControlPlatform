import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Button,
  Card,
  InputNumber,
  List,
  Select,
  Space,
  Table,
  Tag,
  Upload,
  message,
} from "antd";
import {
  ClusterOutlined,
  CheckCircleOutlined,
  ControlOutlined,
  DashboardOutlined,
  DeleteOutlined,
  ThunderboltOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./DemandAirDistributionPage.css";

type DeviceType = "main-fan" | "aux-fan" | "air-door" | "air-window";
type SuggestionPriority = "high" | "medium" | "low";

interface RoadwayDemandItem {
  id: string;
  name: string;
  branchNo: number;
  pointIndex: number;
  currentAirflow: number;
  minAirflow: number;
  maxAirflow: number;
  resistance: number;
  resistanceAdjustable: boolean;
  minAdjustableResistance?: number;
  deviceId: string;
  deviceName: string;
  deviceType: DeviceType;
}

interface SolveResultRow {
  roadwayId: string;
  branchNo: number;
  roadwayName: string;
  targetSpecified: boolean;
  solveSource: "target" | "network";
  currentAirflow: number;
  targetAirflow: number;
  solvedAirflow: number;
  deviation: number;
}

interface DeviceSuggestion {
  id: string;
  deviceName: string;
  relatedRoadways: string;
  actionText: string;
  expectedImpact: string;
  decisionNote: string;
  priority: SuggestionPriority;
}

interface SuggestionReportRecord {
  id: string;
  reportAt: string;
  decisionLayerLabel: string;
  recipients: string[];
  summary: string;
}

interface MainFanInfo {
  id: string;
  name: string;
  enabled: boolean;
  currentAirflow: number;
  frequencyHz: number;
  ratedFrequencyHz: number;
  airflowCapacity: number;
  pressurePa: number;
}

interface AuxFanInfo {
  id: string;
  name: string;
  enabled: boolean;
  frequencyHz: number;
  ratedFrequencyHz: number;
  maxAssistAirflow: number;
  linkedRoadways: string[];
}

type RoadwayBranchType = "进风" | "回风";

interface RoadwayExcelReferenceItem {
  branchNo: number;
  name: string;
  branchType: RoadwayBranchType;
  airflow: number;
}

interface SolveDeviceContext {
  mainFanResponseFactor: number;
  auxFanResponseByDevice: Record<string, number>;
  networkCapacityLimit: number;
}

const LazyHomeObjBackground = lazy(async () => {
  const module = await import("../../components/topology/HomeObjBackground3D");
  return { default: module.HomeObjBackground3D };
});

const PLATFORM_REFERENCE_MODEL_SETTINGS = {
  paused: false,
  rotationSpeed: 0,
  opacity: 0.55,
  brightness: 1.4,
  disableRotation: false,
  viewScale: 4.5,
  viewAzimuthDeg: 90,
} as const;
const ROADWAY_LABEL_ANCHOR_MODEL_PATH = encodeURI("/models/巷道序号.FBX");
const ROADWAY_SERIAL_NAME_MAP: Readonly<Record<string, number>> = Object.freeze(
  Array.from({ length: 27 }).reduce<Record<string, number>>((acc, _, index) => {
    const serial = index + 1;
    acc[`Text${String(serial).padStart(3, "0")}`] = serial;
    return acc;
  }, {}),
);

const MAIN_FAN_BASELINE: MainFanInfo[] = [
  {
    id: "main-fan-1",
    name: "1#主通风机",
    enabled: true,
    currentAirflow: 93.13,
    frequencyHz: 47.5,
    ratedFrequencyHz: 50,
    airflowCapacity: 128,
    pressurePa: 2860,
  },
  {
    id: "main-fan-2",
    name: "2#主通风机",
    enabled: true,
    currentAirflow: 167.8,
    frequencyHz: 46.8,
    ratedFrequencyHz: 50,
    airflowCapacity: 122,
    pressurePa: 2790,
  },
];

const AUX_FAN_BASELINE: AuxFanInfo[] = [
  {
    id: "aux-fan-3105",
    name: "3105局扇",
    enabled: true,
    frequencyHz: 41.5,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 24,
    linkedRoadways: ["roadway-04", "roadway-08"],
  },
  {
    id: "aux-fan-reserve",
    name: "备用局扇A",
    enabled: false,
    frequencyHz: 40,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 18,
    linkedRoadways: ["roadway-02", "roadway-07"],
  },
  {
    id: "aux-fan-east",
    name: "东翼局扇B",
    enabled: false,
    frequencyHz: 39.5,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 20,
    linkedRoadways: ["roadway-03", "roadway-06"],
  },
  {
    id: "aux-fan-north-1",
    name: "北翼局扇1#",
    enabled: true,
    frequencyHz: 40.8,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 19,
    linkedRoadways: ["roadway-02", "roadway-04"],
  },
  {
    id: "aux-fan-north-2",
    name: "北翼局扇2#",
    enabled: false,
    frequencyHz: 38.6,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 17,
    linkedRoadways: ["roadway-02", "roadway-07"],
  },
  {
    id: "aux-fan-south-1",
    name: "南翼局扇1#",
    enabled: true,
    frequencyHz: 42.1,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 21,
    linkedRoadways: ["roadway-05", "roadway-08"],
  },
  {
    id: "aux-fan-south-2",
    name: "南翼局扇2#",
    enabled: false,
    frequencyHz: 37.9,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 16,
    linkedRoadways: ["roadway-06", "roadway-08"],
  },
  {
    id: "aux-fan-central-1",
    name: "中央局扇1#",
    enabled: true,
    frequencyHz: 41.2,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 22,
    linkedRoadways: ["roadway-01", "roadway-05"],
  },
  {
    id: "aux-fan-central-2",
    name: "中央局扇2#",
    enabled: false,
    frequencyHz: 36.5,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 15,
    linkedRoadways: ["roadway-01", "roadway-03"],
  },
  {
    id: "aux-fan-west-1",
    name: "西翼局扇1#",
    enabled: true,
    frequencyHz: 40.3,
    ratedFrequencyHz: 50,
    maxAssistAirflow: 18,
    linkedRoadways: ["roadway-06", "roadway-07"],
  },
];

const ROADWAY_EXCEL_REFERENCE: RoadwayExcelReferenceItem[] = [
  {
    branchNo: 1,
    name: "北一风井",
    branchType: "回风",
    airflow: 93.13333333333334,
  },
  { branchNo: 2, name: "进风石门", branchType: "进风", airflow: 46 },
  {
    branchNo: 3,
    name: "戊二轨下",
    branchType: "进风",
    airflow: 27.033333333333335,
  },
  {
    branchNo: 4,
    name: "丁组煤柱面联络巷",
    branchType: "回风",
    airflow: 47.333333333333336,
  },
  {
    branchNo: 5,
    name: "戊9-10-22220风巷",
    branchType: "进风",
    airflow: 27.583333333333332,
  },
  {
    branchNo: 6,
    name: "戊9-10-22220机巷",
    branchType: "进风",
    airflow: 26.633333333333333,
  },
  {
    branchNo: 7,
    name: "戊9-10-22240风巷",
    branchType: "进风",
    airflow: 11.833333333333334,
  },
  { branchNo: 8, name: "戊9-1032010风巷", branchType: "进风", airflow: 10.8 },
  {
    branchNo: 9,
    name: "戊8-32010底抽巷",
    branchType: "回风",
    airflow: 10.333333333333334,
  },
  {
    branchNo: 10,
    name: "戊8-32030风巷",
    branchType: "进风",
    airflow: 27.466666666666665,
  },
  {
    branchNo: 11,
    name: "戊9-1032020风巷",
    branchType: "进风",
    airflow: 11.416666666666666,
  },
  {
    branchNo: 12,
    name: "丁5.6-32020风巷",
    branchType: "进风",
    airflow: 37.333333333333336,
  },
  { branchNo: 13, name: "丁5.6-32020机巷", branchType: "进风", airflow: 35.75 },
  {
    branchNo: 14,
    name: "戊8-32030机巷",
    branchType: "进风",
    airflow: 26.333333333333332,
  },
  {
    branchNo: 15,
    name: "戊8-32050辅助措施巷",
    branchType: "进风",
    airflow: 14.416666666666666,
  },
  {
    branchNo: 16,
    name: "三水平戊二轨道上山",
    branchType: "进风",
    airflow: 27.7,
  },
  {
    branchNo: 17,
    name: "三水平戊二皮上下段",
    branchType: "进风",
    airflow: 24.55,
  },
  {
    branchNo: 18,
    name: "三水平戊二行人上山",
    branchType: "进风",
    airflow: 81.86666666666666,
  },
  {
    branchNo: 19,
    name: "戊组东翼总回",
    branchType: "回风",
    airflow: 108.56666666666666,
  },
  {
    branchNo: 20,
    name: "三水平丁二行人巷",
    branchType: "回风",
    airflow: 8.333333333333334,
  },
  { branchNo: 21, name: "三水平丁二轨上", branchType: "回风", airflow: 37.75 },
  {
    branchNo: 22,
    name: "三水平戊二回风下山",
    branchType: "回风",
    airflow: 19.516666666666666,
  },
  { branchNo: 23, name: "三水平丁二皮上", branchType: "回风", airflow: 9.1 },
  {
    branchNo: 24,
    name: "北二副井",
    branchType: "进风",
    airflow: 105.86666666666666,
  },
  { branchNo: 25, name: "北二风井", branchType: "回风", airflow: 167.8 },
  {
    branchNo: 26,
    name: "丁组总回",
    branchType: "回风",
    airflow: 65.08333333333333,
  },
  { branchNo: 27, name: "戊组西翼总回", branchType: "回风", airflow: 117 },
];

type RoadwayDeviceAssignment = Pick<
  RoadwayDemandItem,
  "deviceId" | "deviceName" | "deviceType"
>;

const ROADWAY_ADJUSTABLE_DEVICE_CYCLE: RoadwayDeviceAssignment[] = [
  {
    deviceId: "air-door-d12",
    deviceName: "D-12联络风门",
    deviceType: "air-door",
  },
  {
    deviceId: "air-window-w08",
    deviceName: "W-08调节风窗",
    deviceType: "air-window",
  },
  {
    deviceId: "aux-fan-3105",
    deviceName: "3105局扇联控",
    deviceType: "aux-fan",
  },
  {
    deviceId: "aux-fan-central-1",
    deviceName: "中央局扇1#联控",
    deviceType: "aux-fan",
  },
];

const ADJUSTABLE_BRANCH_NO_SET = new Set<number>([4, 5, 6, 10, 11, 12, 13, 14, 15]);

function isRoadwayAdjustable(
  row: RoadwayExcelReferenceItem,
  _index: number,
): boolean {
  // Narrow adjustable scope to key modulation roadways only,
  // so the "可调" rows are not excessively dense in the target table.
  if (!ADJUSTABLE_BRANCH_NO_SET.has(row.branchNo)) {
    return false;
  }

  if (
    row.name.includes("风井") ||
    row.name.includes("总回") ||
    row.name.includes("副井")
  ) {
    return false;
  }

  return true;
}

function resolveRoadwayDeviceAssignment(
  row: RoadwayExcelReferenceItem,
  index: number,
  adjustable: boolean,
): RoadwayDeviceAssignment {
  if (
    !adjustable ||
    row.name.includes("风井") ||
    row.name.includes("总回") ||
    row.name.includes("副井")
  ) {
    return index % 2 === 0
      ? {
          deviceId: "main-fan-1",
          deviceName: "1#主扇变频器",
          deviceType: "main-fan",
        }
      : {
          deviceId: "main-fan-2",
          deviceName: "2#主扇变频器",
          deviceType: "main-fan",
        };
  }
  return ROADWAY_ADJUSTABLE_DEVICE_CYCLE[
    index % ROADWAY_ADJUSTABLE_DEVICE_CYCLE.length
  ];
}

function resolveRoadwayResistance(airflow: number, index: number): number {
  const estimatedResistance = 0.058 - airflow * 0.00022 + (index % 4) * 0.0015;
  const boundedResistance = Math.min(
    0.065,
    Math.max(0.018, estimatedResistance),
  );
  return Number(boundedResistance.toFixed(3));
}

// Base roadway data references `public/models/巷道信息.xlsx`:
// branchNo / branch name / branch type / airflow come from the table.
// Other fields are derived defaults for demand-solve interaction.
const ROADWAY_DEMAND_BASELINE: RoadwayDemandItem[] =
  ROADWAY_EXCEL_REFERENCE.map((row, index) => {
    const currentAirflow = Number(row.airflow.toFixed(1));
    const minFactor = row.branchType === "进风" ? 0.9 : 0.88;
    const maxFactor = row.branchType === "进风" ? 1.12 : 1.15;
    const minAirflow = Number((currentAirflow * minFactor).toFixed(1));
    const maxAirflow = Number((currentAirflow * maxFactor).toFixed(1));
    const resistance = resolveRoadwayResistance(currentAirflow, index);
    const resistanceAdjustable = isRoadwayAdjustable(row, index);
    const minAdjustableResistance = resistanceAdjustable
      ? Number((resistance * (0.78 + (index % 3) * 0.02)).toFixed(3))
      : undefined;
    const device = resolveRoadwayDeviceAssignment(
      row,
      index,
      resistanceAdjustable,
    );

    return {
      id: `roadway-${String(row.branchNo).padStart(2, "0")}`,
      name: row.name,
      branchNo: row.branchNo,
      pointIndex: row.branchNo - 1,
      currentAirflow,
      minAirflow,
      maxAirflow,
      resistance,
      resistanceAdjustable,
      minAdjustableResistance,
      ...device,
    };
  });

const AIRFLOW_RESPONSE_FACTOR: Record<DeviceType, number> = {
  "main-fan": 0.9,
  "aux-fan": 0.84,
  "air-door": 0.76,
  "air-window": 0.72,
};

const PRIORITY_META: Record<
  SuggestionPriority,
  { color: string; label: string; weight: number }
> = {
  high: { color: "error", label: "高优先", weight: 3 },
  medium: { color: "warning", label: "中优先", weight: 2 },
  low: { color: "processing", label: "低优先", weight: 1 },
};

const DECISION_LAYER_OPTIONS = [
  { value: "dispatch-center", label: "矿调度指挥中心" },
  { value: "ventilation-dept", label: "通风技术科" },
  { value: "safety-command", label: "安全生产指挥组" },
  { value: "chief-engineer", label: "总工决策组" },
] as const;

const DECISION_RECIPIENT_OPTIONS: Record<
  string,
  Array<{ value: string; label: string }>
> = {
  "dispatch-center": [
    { value: "duty-dispatcher", label: "值班调度长" },
    { value: "production-dispatcher", label: "生产调度员" },
    { value: "night-shift-director", label: "夜班值班主任" },
  ],
  "ventilation-dept": [
    { value: "ventilation-chief", label: "通风科科长" },
    { value: "ventilation-engineer", label: "通风工程师" },
    { value: "ventilation-duty", label: "通风值班员" },
  ],
  "safety-command": [
    { value: "safety-director", label: "安全副总" },
    { value: "safety-inspector", label: "安监负责人" },
    { value: "risk-control-lead", label: "风险管控专员" },
  ],
  "chief-engineer": [
    { value: "chief-engineer-main", label: "总工程师" },
    { value: "deputy-chief-engineer", label: "副总工程师" },
    { value: "tech-secretary", label: "技术办秘书" },
  ],
};

const formatAirflow = (value: number) => value.toFixed(1);
const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
const roundToTenth = (value: number) => Number(value.toFixed(1));
const roundToThousandth = (value: number) => Number(value.toFixed(3));

function buildResistanceProjection(
  roadway: RoadwayDemandItem,
  solvedAirflow: number,
  currentAirflow: number,
) {
  const baseResistance = roadway.resistance;
  if (!roadway.resistanceAdjustable) {
    return {
      baseResistance,
      adjustedResistance: baseResistance,
      changed: false,
      adjustmentRatio: 0,
    };
  }

  const airflowDelta = solvedAirflow - currentAirflow;
  if (Math.abs(airflowDelta) < 0.1) {
    return {
      baseResistance,
      adjustedResistance: baseResistance,
      changed: false,
      adjustmentRatio: 0,
    };
  }

  const range = Math.max(roadway.maxAirflow - roadway.minAirflow, 0.1);
  const intensity = clamp(Math.abs(airflowDelta) / range, 0, 1);
  let adjustedResistance = baseResistance;

  if (airflowDelta > 0) {
    const minResistance =
      roadway.minAdjustableResistance ?? baseResistance * 0.82;
    adjustedResistance =
      baseResistance - (baseResistance - minResistance) * intensity;
  } else {
    adjustedResistance = baseResistance * (1 + 0.18 * intensity);
  }

  const roundedResistance = roundToThousandth(adjustedResistance);
  const adjustmentRatio =
    baseResistance <= 0
      ? 0
      : (roundedResistance - baseResistance) / baseResistance;

  return {
    baseResistance,
    adjustedResistance: roundedResistance,
    changed: Math.abs(roundedResistance - baseResistance) >= 0.001,
    adjustmentRatio,
  };
}

function buildSolveResults(
  targetAirflowMap: Partial<Record<string, number>>,
  context: SolveDeviceContext,
): SolveResultRow[] {
  const roadwayById = ROADWAY_DEMAND_BASELINE.reduce<
    Record<string, RoadwayDemandItem>
  >((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

  let preliminary: SolveResultRow[] = ROADWAY_DEMAND_BASELINE.map((roadway) => {
    const specifiedTarget = targetAirflowMap[roadway.id];
    const targetSpecified = specifiedTarget != null;
    const targetAirflow = specifiedTarget ?? roadway.currentAirflow;
    const delta = targetAirflow - roadway.currentAirflow;
    let responseFactor = AIRFLOW_RESPONSE_FACTOR[roadway.deviceType];
    if (roadway.deviceType === "main-fan") {
      responseFactor *= context.mainFanResponseFactor;
    } else if (roadway.deviceType === "aux-fan") {
      responseFactor *=
        context.auxFanResponseByDevice[roadway.deviceId] ?? 0.62;
    } else {
      responseFactor *= 0.92 + context.mainFanResponseFactor * 0.08;
    }
    const solvedAirflow = targetSpecified
      ? clamp(targetAirflow, roadway.minAirflow, roadway.maxAirflow)
      : clamp(
          roadway.currentAirflow +
            delta * responseFactor +
            (Math.abs(delta) > 1.5 ? 0.15 * Math.sign(delta) : 0),
          roadway.minAirflow - 0.8,
          roadway.maxAirflow + 0.8,
        );
    const roundedSolved = roundToTenth(solvedAirflow);
    return {
      roadwayId: roadway.id,
      branchNo: roadway.branchNo,
      roadwayName: roadway.name,
      targetSpecified,
      solveSource: targetSpecified ? ("target" as const) : ("network" as const),
      currentAirflow: roadway.currentAirflow,
      targetAirflow: roundToTenth(targetAirflow),
      solvedAirflow: roundedSolved,
      deviation: roundToTenth(roundedSolved - targetAirflow),
    };
  });

  // When only part of roadways has explicit targets, the remaining roadways still
  // change due to coupled network redistribution.
  const specifiedRows = preliminary.filter((item) => item.targetSpecified);
  const unspecifiedRows = preliminary.filter((item) => !item.targetSpecified);
  if (specifiedRows.length > 0 && unspecifiedRows.length > 0) {
    const netSpecifiedChange = specifiedRows.reduce(
      (sum, item) => sum + (item.solvedAirflow - item.currentAirflow),
      0,
    );
    if (Math.abs(netSpecifiedChange) >= 0.1) {
      const auxResponseValues = Object.values(context.auxFanResponseByDevice);
      const auxAverage =
        auxResponseValues.length > 0
          ? auxResponseValues.reduce((sum, value) => sum + value, 0) /
            auxResponseValues.length
          : 0.7;
      const couplingStrength = clamp(
        0.2 +
          (context.mainFanResponseFactor - 0.9) * 0.18 +
          (auxAverage - 0.7) * 0.1,
        0.12,
        0.42,
      );
      const couplingTotal = -netSpecifiedChange * couplingStrength;
      const weightSum = unspecifiedRows.reduce((sum, row) => {
        const roadway = roadwayById[row.roadwayId];
        const weight = roadway ? 1 / Math.max(roadway.resistance, 0.01) : 1;
        return sum + weight;
      }, 0);

      preliminary = preliminary.map((row) => {
        if (row.targetSpecified) {
          return row;
        }
        const roadway = roadwayById[row.roadwayId];
        if (!roadway || weightSum <= 0) {
          return row;
        }
        const weight = 1 / Math.max(roadway.resistance, 0.01);
        const redistributedDelta = couplingTotal * (weight / weightSum);
        const coupledSolved = clamp(
          row.currentAirflow + redistributedDelta,
          roadway.minAirflow - 0.8,
          roadway.maxAirflow + 0.8,
        );
        const roundedSolved = roundToTenth(coupledSolved);
        return {
          ...row,
          solvedAirflow: roundedSolved,
          deviation: roundToTenth(roundedSolved - row.targetAirflow),
        };
      });
    }
  }

  const solvedTotal = preliminary.reduce(
    (sum, item) => sum + item.solvedAirflow,
    0,
  );
  if (
    solvedTotal <= context.networkCapacityLimit ||
    context.networkCapacityLimit <= 0
  ) {
    return preliminary;
  }

  let remainingExcess = solvedTotal - context.networkCapacityLimit;
  const capacityAdjusted = preliminary.map((row) => ({ ...row }));

  const reduceGroupByCapacity = (
    targetSpecified: boolean,
    strategy: "proportional" | "balanced",
    minBoundResolver: (row: SolveResultRow, roadway: RoadwayDemandItem) => number,
  ) => {
    if (remainingExcess <= 0) return;

    const candidates = capacityAdjusted
      .map((row, index) => {
        if (row.targetSpecified !== targetSpecified) {
          return null;
        }
        const roadway = roadwayById[row.roadwayId];
        if (!roadway) {
          return null;
        }
        const minBound = minBoundResolver(row, roadway);
        const maxBound = roadway.maxAirflow + 0.8;
        const reducible = Math.max(0, row.solvedAirflow - minBound);
        if (reducible <= 0) {
          return null;
        }
        return { index, reducible, minBound, maxBound };
      })
      .filter(
        (
          item,
        ): item is { index: number; reducible: number; minBound: number; maxBound: number } =>
          item != null,
      );

    if (candidates.length === 0) return;

    const totalReducible = candidates.reduce((sum, item) => sum + item.reducible, 0);
    if (totalReducible <= 0) return;

    const reductionBudget = Math.min(remainingExcess, totalReducible);
    let consumedReduction = 0;

    if (strategy === "balanced") {
      // Keep specified-target rows close to target by sharing reduction evenly.
      let active = candidates.map((item) => ({ ...item }));
      let remainingBudget = reductionBudget;
      while (remainingBudget > 1e-6 && active.length > 0) {
        const equalShare = remainingBudget / active.length;
        let roundConsumed = 0;
        const nextActive: typeof active = [];

        active.forEach((item) => {
          const row = capacityAdjusted[item.index];
          const currentReducible = Math.max(0, row.solvedAirflow - item.minBound);
          if (currentReducible <= 1e-6) {
            return;
          }
          const actualReduction = Math.min(equalShare, currentReducible);
          row.solvedAirflow = clamp(
            row.solvedAirflow - actualReduction,
            item.minBound,
            item.maxBound,
          );
          roundConsumed += actualReduction;
          if (currentReducible - actualReduction > 1e-6) {
            nextActive.push(item);
          }
        });

        if (roundConsumed <= 1e-6) {
          break;
        }
        consumedReduction += roundConsumed;
        remainingBudget -= roundConsumed;
        active = nextActive;
      }
    } else {
      candidates.forEach((item) => {
        const row = capacityAdjusted[item.index];
        const reduceAmount = reductionBudget * (item.reducible / totalReducible);
        const before = row.solvedAirflow;
        row.solvedAirflow = clamp(
          row.solvedAirflow - reduceAmount,
          item.minBound,
          item.maxBound,
        );
        consumedReduction += before - row.solvedAirflow;
      });
    }

    remainingExcess = Math.max(0, remainingExcess - consumedReduction);
  };

  // Priority: keep specified-target roadways close to target as much as possible.
  reduceGroupByCapacity(
    false,
    "proportional",
    (_, roadway) => roadway.minAirflow - 0.8,
  );
  reduceGroupByCapacity(
    true,
    "balanced",
    (row, roadway) => Math.max(roadway.minAirflow, row.targetAirflow - 0.3),
  );
  // If still overloaded, release protection band and consume remaining budget.
  reduceGroupByCapacity(
    true,
    "balanced",
    (_, roadway) => roadway.minAirflow - 0.8,
  );

  return capacityAdjusted.map((row) => {
    const roundedSolved = roundToTenth(row.solvedAirflow);
    return {
      ...row,
      solvedAirflow: roundedSolved,
      deviation: roundToTenth(roundedSolved - row.targetAirflow),
    };
  });
}

function buildDeviceSuggestions(results: SolveResultRow[]): DeviceSuggestion[] {
  const roadwayIndex = new Map(
    ROADWAY_DEMAND_BASELINE.map((item) => [item.id, item]),
  );

  const suggestions: DeviceSuggestion[] = [];

  results.forEach((row) => {
    const roadway = roadwayIndex.get(row.roadwayId);
    if (!roadway) {
      return;
    }
    if (
      roadway.deviceType !== "air-door" &&
      roadway.deviceType !== "air-window"
    ) {
      return;
    }

    const projection = buildResistanceProjection(
      roadway,
      row.solvedAirflow,
      row.currentAirflow,
    );
    if (!projection.changed) {
      return;
    }

    const openingIncrease =
      projection.adjustedResistance < projection.baseResistance;
    const openingStep = Math.round(
      clamp(
        Math.abs(projection.adjustmentRatio) *
          100 *
          (roadway.deviceType === "air-window" ? 1.05 : 0.92),
        2,
        18,
      ),
    );
    const absDeviation = Math.abs(row.deviation);
    const resistanceDeltaRate = Math.abs(projection.adjustmentRatio) * 100;
    const priority: SuggestionPriority =
      resistanceDeltaRate >= 10 || absDeviation >= 1.2
        ? "high"
        : resistanceDeltaRate >= 5 || absDeviation >= 0.6
          ? "medium"
          : "low";

    const decisionNote =
      priority === "high"
        ? "需上传决策层审批后执行，并纳入班次调度闭环。"
        : priority === "medium"
          ? "建议上传决策层复核后执行。"
          : "建议随班次调节报告同步至决策层备案。";

    const impactText = row.targetSpecified
      ? `预计修正目标偏差 ${row.deviation > 0 ? "+" : ""}${row.deviation.toFixed(1)} m³/s。`
      : `该巷道未指定目标，联动风量变化 ${(row.solvedAirflow - row.currentAirflow).toFixed(1)} m³/s。`;

    suggestions.push({
      id: `${roadway.deviceId}-${row.roadwayId}`,
      deviceName: roadway.deviceName,
      relatedRoadways: row.roadwayName,
      actionText: `${roadway.deviceType === "air-door" ? "风门" : "风窗"}开度${
        openingIncrease ? "增加" : "减小"
      } ${openingStep}%（风阻 ${projection.baseResistance.toFixed(3)} → ${projection.adjustedResistance.toFixed(3)}）`,
      expectedImpact: `${impactText} 建议下一控制周期复核。`,
      decisionNote,
      priority,
    });
  });

  suggestions.sort(
    (a, b) =>
      PRIORITY_META[b.priority].weight - PRIORITY_META[a.priority].weight,
  );

  if (suggestions.length > 0) {
    return suggestions;
  }

  return [
    {
      id: "stable-suggestion",
      deviceName: "当前设备组合",
      relatedRoadways: "全网",
      actionText: "维持现有设定",
      expectedImpact:
        "当前风阻变化较小，目标与解算结果偏差可接受，无需额外动作。",
      decisionNote: "建议将本次解算结果上传决策层备案。",
      priority: "low",
    },
  ];
}

export default function DemandAirDistributionPage() {
  const initialTargetMap = useMemo<Partial<Record<string, number>>>(
    () => ({}),
    [],
  );

  const [targetAirflowMap, setTargetAirflowMap] =
    useState<Partial<Record<string, number>>>(initialTargetMap);
  const mainFans = MAIN_FAN_BASELINE;
  const auxFans = AUX_FAN_BASELINE;
  const [solving, setSolving] = useState(false);
  const [solveResults, setSolveResults] = useState<SolveResultRow[]>([]);
  const [deviceSuggestions, setDeviceSuggestions] = useState<
    DeviceSuggestion[]
  >([]);
  const [decisionLayer, setDecisionLayer] = useState<string>();
  const [selectedDecisionRecipients, setSelectedDecisionRecipients] = useState<
    string[]
  >([]);
  const [reportSubmitting, setReportSubmitting] = useState(false);
  const [reportRecords, setReportRecords] = useState<SuggestionReportRecord[]>(
    [],
  );
  const solvingTimerRef = useRef<number | null>(null);
  const reportTimerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (solvingTimerRef.current != null) {
        window.clearTimeout(solvingTimerRef.current);
      }
      if (reportTimerRef.current != null) {
        window.clearTimeout(reportTimerRef.current);
      }
    },
    [],
  );

  const roadwayModelLabels = useMemo(
    () =>
      ROADWAY_DEMAND_BASELINE.map((item) => ({
        id: item.id,
        name: item.name,
        serialNo: item.branchNo,
        pointIndex: item.pointIndex,
        airflow: roundToTenth(targetAirflowMap[item.id] ?? item.currentAirflow),
        unit: "m³/s",
      })),
    [targetAirflowMap],
  );

  const roadwayMetaMap = useMemo(
    () =>
      ROADWAY_DEMAND_BASELINE.reduce<Record<string, RoadwayDemandItem>>(
        (acc, item) => {
          acc[item.id] = item;
          return acc;
        },
        {},
      ),
    [],
  );

  const targetAdjustedRoadwayCount = useMemo(
    () =>
      ROADWAY_DEMAND_BASELINE.filter(
        (item) => targetAirflowMap[item.id] != null,
      ).length,
    [targetAirflowMap],
  );

  const enabledMainFans = useMemo(
    () => mainFans.filter((fan) => fan.enabled),
    [mainFans],
  );
  const enabledAuxFans = useMemo(
    () => auxFans.filter((fan) => fan.enabled),
    [auxFans],
  );
  const auxFanTotalCount = auxFans.length;

  const mainFanResponseFactor = useMemo(() => {
    if (enabledMainFans.length === 0) return 0.55;
    const averageRatio =
      enabledMainFans.reduce(
        (sum, fan) => sum + fan.frequencyHz / fan.ratedFrequencyHz,
        0,
      ) / enabledMainFans.length;
    return clamp(0.65 + averageRatio * 0.55, 0.55, 1.2);
  }, [enabledMainFans]);

  const mainFanCapacity = useMemo(
    () =>
      roundToTenth(
        enabledMainFans.reduce(
          (sum, fan) =>
            sum +
            fan.airflowCapacity * (fan.frequencyHz / fan.ratedFrequencyHz),
          0,
        ),
      ),
    [enabledMainFans],
  );

  const mainFanTotalAirflow = useMemo(
    () =>
      roundToTenth(
        enabledMainFans.reduce((sum, fan) => sum + fan.currentAirflow, 0),
      ),
    [enabledMainFans],
  );

  const auxFanAssistCapacity = useMemo(
    () =>
      roundToTenth(
        enabledAuxFans.reduce(
          (sum, fan) =>
            sum +
            fan.maxAssistAirflow * (fan.frequencyHz / fan.ratedFrequencyHz),
          0,
        ),
      ),
    [enabledAuxFans],
  );

  const networkCapacityLimit = useMemo(
    () => roundToTenth(mainFanCapacity + auxFanAssistCapacity * 0.55),
    [mainFanCapacity, auxFanAssistCapacity],
  );

  const averageMainFanPressure = useMemo(() => {
    if (enabledMainFans.length === 0) return 0;
    return roundToTenth(
      enabledMainFans.reduce((sum, fan) => sum + fan.pressurePa, 0) /
        enabledMainFans.length,
    );
  }, [enabledMainFans]);

  const linkedAuxRoadwayCount = useMemo(
    () => new Set(enabledAuxFans.flatMap((fan) => fan.linkedRoadways)).size,
    [enabledAuxFans],
  );

  const auxFanResponseByDevice = useMemo(
    () =>
      auxFans.reduce<Record<string, number>>((acc, fan) => {
        const ratio = fan.enabled ? fan.frequencyHz / fan.ratedFrequencyHz : 0;
        acc[fan.id] = clamp(0.5 + ratio * 0.6, 0.42, 1.16);
        return acc;
      }, {}),
    [auxFans],
  );

  const auxFanDisplayRows = useMemo(
    () =>
      auxFans.map((fan) => ({
        ...fan,
        displayFrequencyHz: fan.enabled ? fan.frequencyHz : null,
        currentAssistAirflow: fan.enabled
          ? roundToTenth(
              fan.maxAssistAirflow * (fan.frequencyHz / fan.ratedFrequencyHz),
            )
          : 0,
      })),
    [auxFans],
  );

  const highPriorityCount = deviceSuggestions.filter(
    (item) => item.priority === "high",
  ).length;
  const decisionReceiverOptions = decisionLayer
    ? (DECISION_RECIPIENT_OPTIONS[decisionLayer] ?? [])
    : [];
  const decisionLayerLabel =
    DECISION_LAYER_OPTIONS.find((item) => item.value === decisionLayer)
      ?.label ?? "未指定决策层";

  const handleTargetChange = (
    roadwayId: string,
    value: number | null,
    fallback: number,
  ) => {
    if (value == null) {
      setTargetAirflowMap((prev) => {
        const next = { ...prev };
        delete next[roadwayId];
        return next;
      });
      return;
    }
    setTargetAirflowMap((prev) => ({
      ...prev,
      [roadwayId]: roundToTenth(value ?? fallback),
    }));
  };

  const handleClearTargets = () => {
    setTargetAirflowMap({});
    message.success("目标风量已恢复为空值");
  };

  const handleSolve = () => {
    if (targetAdjustedRoadwayCount === 0) {
      message.warning("请先为至少一个巷道指定目标风量");
      return;
    }
    if (solvingTimerRef.current != null) {
      window.clearTimeout(solvingTimerRef.current);
    }
    setSolving(true);
    solvingTimerRef.current = window.setTimeout(() => {
      const results = buildSolveResults(targetAirflowMap, {
        mainFanResponseFactor,
        auxFanResponseByDevice,
        networkCapacityLimit,
      });
      const suggestions = buildDeviceSuggestions(results);
      setSolveResults(results);
      setDeviceSuggestions(suggestions);
      setSolving(false);
      message.success("按需分风解算完成，已生成设备调节建议");
    }, 1100);
  };

  const handleDecisionLayerChange = (value: string) => {
    setDecisionLayer(value);
    setSelectedDecisionRecipients([]);
  };

  const handleReportToDecisionLayer = () => {
    if (deviceSuggestions.length === 0) {
      message.warning("当前无可上报的设备调节建议");
      return;
    }
    if (!decisionLayer) {
      message.warning("请先选择决策层");
      return;
    }
    if (selectedDecisionRecipients.length === 0) {
      message.warning("请至少选择一位决策层接收人");
      return;
    }
    if (reportTimerRef.current != null) {
      window.clearTimeout(reportTimerRef.current);
    }
    setReportSubmitting(true);
    reportTimerRef.current = window.setTimeout(() => {
      const recipientNameMap = new Map(
        (DECISION_RECIPIENT_OPTIONS[decisionLayer] ?? []).map((item) => [
          item.value,
          item.label,
        ]),
      );
      const recipientLabels = selectedDecisionRecipients.map(
        (recipient) => recipientNameMap.get(recipient) ?? recipient,
      );
      const summary = `上报${deviceSuggestions.length}条设备建议（高优先${highPriorityCount}条）`;
      const reportAt = new Date().toLocaleString("zh-CN", { hour12: false });
      setReportRecords((prev) => [
        {
          id: `report-${Date.now()}`,
          reportAt,
          decisionLayerLabel,
          recipients: recipientLabels,
          summary,
        },
        ...prev,
      ]);
      setReportSubmitting(false);
      message.success(`已上报至${decisionLayerLabel}`);
    }, 700);
  };

  const importProps: UploadProps = {
    name: "file",
    accept: ".xlsx,.xls,.csv",
    showUploadList: false,
    beforeUpload: (file) => {
      message.success(`已选择导入文件：${file.name}`);
      return false;
    },
  };

  const targetColumns: ColumnsType<RoadwayDemandItem> = [
    {
      title: "编号",
      dataIndex: "branchNo",
      key: "branchNo",
      width: 50,
      align: "center",
      fixed: "left",
      render: (value: number) => (
        <span className="demand-air-branch-no-cell">{String(value)}</span>
      ),
    },
    {
      title: "巷道",
      dataIndex: "name",
      key: "name",
      width: 116,
      ellipsis: true,
    },
    {
      title: "当前风量(m³/s)",
      dataIndex: "currentAirflow",
      key: "currentAirflow",
      width: 90,
      align: "right",
      render: (value: number) => formatAirflow(value),
    },
    {
      title: "风量范围(m³/s)",
      key: "airflowRange",
      width: 118,
      align: "center",
      render: (_, row) =>
        `${formatAirflow(row.minAirflow)} ~ ${formatAirflow(row.maxAirflow)}`,
    },
    {
      title: "风阻",
      dataIndex: "resistance",
      key: "resistance",
      width: 70,
      align: "right",
      render: (value: number) => (
        <span className="demand-air-resistance-value">{value.toFixed(3)}</span>
      ),
    },
    {
      title: "最小风阻",
      key: "minAdjustableResistance",
      width: 80,
      align: "center",
      render: (_, row) =>
        row.resistanceAdjustable && row.minAdjustableResistance != null ? (
          <span className="demand-air-min-resistance">
            {row.minAdjustableResistance.toFixed(3)}
          </span>
        ) : (
          <span className="demand-air-min-resistance--na">--</span>
        ),
    },
    {
      title: "风阻可调",
      dataIndex: "resistanceAdjustable",
      key: "resistanceAdjustable",
      width: 74,
      align: "center",
      render: (value: boolean) =>
        value ? (
          <Tag className="demand-air-adjustable-tag">可调</Tag>
        ) : (
          <Tag className="demand-air-fixed-tag">不可调</Tag>
        ),
    },
    {
      title: "目标风量(m³/s)",
      key: "targetAirflow",
      width: 106,
      fixed: "right",
      align: "center",
      render: (_, row) => (
        <InputNumber
          className="demand-air-target-input"
          value={targetAirflowMap[row.id]}
          min={row.minAirflow}
          max={row.maxAirflow}
          step={0.1}
          placeholder="未指定"
          controls={false}
          onChange={(value) =>
            handleTargetChange(row.id, value, row.currentAirflow)
          }
        />
      ),
    },
  ];

  const resultColumns: ColumnsType<SolveResultRow> = [
    {
      title: "编号",
      dataIndex: "branchNo",
      key: "branchNo",
      width: 52,
      align: "center",
      fixed: "left",
      render: (value: number) => (
        <span className="demand-air-branch-no-cell">{String(value)}</span>
      ),
    },
    {
      title: "巷道",
      dataIndex: "roadwayName",
      key: "roadwayName",
      width: 132,
      ellipsis: true,
    },
    {
      title: "当前风量(m³/s)",
      dataIndex: "currentAirflow",
      key: "currentAirflow",
      width: 102,
      align: "right",
      render: (value: number) => formatAirflow(value),
    },
    {
      title: "风量范围(m³/s)",
      key: "airflowRange",
      width: 128,
      align: "center",
      render: (_, row) => {
        const roadway = roadwayMetaMap[row.roadwayId];
        if (!roadway) return "--";
        return `${formatAirflow(roadway.minAirflow)} ~ ${formatAirflow(roadway.maxAirflow)}`;
      },
    },
    {
      title: "风阻",
      key: "resistance",
      width: 126,
      align: "right",
      render: (_, row) => {
        const roadway = roadwayMetaMap[row.roadwayId];
        if (!roadway) return "--";
        const projection = buildResistanceProjection(
          roadway,
          row.solvedAirflow,
          row.currentAirflow,
        );
        if (!projection.changed) {
          return (
            <span className="demand-air-resistance-value">
              {projection.baseResistance.toFixed(3)}
            </span>
          );
        }

        return (
          <span className="demand-air-resistance-modified">
            {projection.baseResistance.toFixed(3)} →{" "}
            {projection.adjustedResistance.toFixed(3)}
          </span>
        );
      },
    },
    {
      title: "最小风阻",
      key: "minAdjustableResistance",
      width: 86,
      align: "center",
      render: (_, row) => {
        const roadway = roadwayMetaMap[row.roadwayId];
        if (!roadway) return "--";
        return roadway.resistanceAdjustable &&
          roadway.minAdjustableResistance != null ? (
          <span className="demand-air-min-resistance">
            {roadway.minAdjustableResistance.toFixed(3)}
          </span>
        ) : (
          <span className="demand-air-min-resistance--na">--</span>
        );
      },
    },
    {
      title: "目标风量(m³/s)",
      dataIndex: "targetAirflow",
      key: "targetAirflow",
      width: 102,
      align: "right",
      render: (value: number, row) =>
        row.targetSpecified ? formatAirflow(value) : "--",
    },
    {
      title: "解算风量(m³/s)",
      dataIndex: "solvedAirflow",
      key: "solvedAirflow",
      width: 102,
      align: "right",
      render: (value: number, row) => {
        const matched =
          row.targetSpecified && Math.abs(value - row.targetAirflow) <= 0.2;
        const className = matched
          ? "demand-air-solved-airflow demand-air-solved-airflow--matched"
          : row.targetSpecified
            ? "demand-air-solved-airflow demand-air-solved-airflow--target"
            : undefined;
        return <span className={className}>{formatAirflow(value)}</span>;
      },
    },
    {
      title: "偏差(m³/s)",
      dataIndex: "deviation",
      key: "deviation",
      width: 100,
      align: "center",
      render: (value: number, row) => {
        const abs = Math.abs(value);
        if (!row.targetSpecified) {
          if (abs < 0.1) {
            return <span className="demand-air-coupling-static">±0.0</span>;
          }
          return (
            <span className="demand-air-deviation demand-air-deviation--linked">
              {value > 0 ? "+" : ""}
              {formatAirflow(value)}
            </span>
          );
        }
        const className =
          abs <= 0.5
            ? "demand-air-deviation demand-air-deviation--good"
            : abs <= 1
              ? "demand-air-deviation demand-air-deviation--medium"
              : "demand-air-deviation demand-air-deviation--risk";
        return (
          <span className={className}>
            {value > 0 ? "+" : ""}
            {formatAirflow(value)}
          </span>
        );
      },
    },
  ];

  const auxFanColumns: ColumnsType<
    AuxFanInfo & {
      displayFrequencyHz: number | null;
      currentAssistAirflow: number;
    }
  > = [
    {
      title: "局扇",
      dataIndex: "name",
      key: "name",
      width: 116,
      ellipsis: true,
    },
    {
      title: "状态",
      dataIndex: "enabled",
      key: "enabled",
      width: 76,
      align: "center",
      render: (enabled: boolean) =>
        enabled ? <Tag color="success">运行</Tag> : <Tag>待机</Tag>,
    },
    {
      title: "频率(Hz)",
      dataIndex: "displayFrequencyHz",
      key: "displayFrequencyHz",
      width: 84,
      align: "right",
      render: (value: number | null) =>
        value == null ? "--" : value.toFixed(1),
    },
    {
      title: "额定(Hz)",
      dataIndex: "ratedFrequencyHz",
      key: "ratedFrequencyHz",
      width: 80,
      align: "right",
    },
    {
      title: "当前补风(m³/s)",
      dataIndex: "currentAssistAirflow",
      key: "currentAssistAirflow",
      width: 122,
      align: "right",
      render: (value: number) => value.toFixed(1),
    },
  ];

  return (
    <div className="demand-air-page">
      <div className="demand-air-page__background">
        <Suspense
          fallback={
            <div className="demand-air-page__bg-loading">
              正在加载巷道三维模型...
            </div>
          }
        >
          <LazyHomeObjBackground
            paused={PLATFORM_REFERENCE_MODEL_SETTINGS.paused}
            rotationSpeed={PLATFORM_REFERENCE_MODEL_SETTINGS.rotationSpeed}
            opacity={PLATFORM_REFERENCE_MODEL_SETTINGS.opacity}
            brightness={PLATFORM_REFERENCE_MODEL_SETTINGS.brightness}
            disableRotation={PLATFORM_REFERENCE_MODEL_SETTINGS.disableRotation}
            viewScale={PLATFORM_REFERENCE_MODEL_SETTINGS.viewScale}
            viewAzimuthDeg={PLATFORM_REFERENCE_MODEL_SETTINGS.viewAzimuthDeg}
            roadwayPointObjPath={ROADWAY_LABEL_ANCHOR_MODEL_PATH}
            roadwayPointOverlayVisible={false}
            roadwayPointLabels={roadwayModelLabels}
            autoFillRoadwayPointLabels={false}
            roadwayPointSerialNameMap={ROADWAY_SERIAL_NAME_MAP}
            roadwayPointShowSerial={false}
          />
        </Suspense>
      </div>
      <div className="demand-air-page__mask" />

      <div className="demand-air-page__content">
        <div className="demand-air-top-row">
          <div className="demand-air-stack-column demand-air-stack-column--left">
            <Card
              className="demand-air-card"
              title={
                <span>
                  <ClusterOutlined style={{ marginRight: 8 }} />
                  主通风机运行信息
                </span>
              }
            >
              <div className="demand-air-fan-summary">
                <div className="demand-air-fan-summary-item">
                  <span>启用主扇</span>
                  <strong>{enabledMainFans.length} 台</strong>
                </div>
                <div className="demand-air-fan-summary-item">
                  <span>主扇总风量</span>
                  <strong>{mainFanTotalAirflow.toFixed(2)} m³/s</strong>
                </div>
                <div className="demand-air-fan-summary-item">
                  <span>平均风压</span>
                  <strong>{averageMainFanPressure.toFixed(0)} Pa</strong>
                </div>
              </div>

              <div className="demand-air-fan-list">
                {mainFans.map((fan) => (
                  <div key={fan.id} className="demand-air-fan-item">
                    <div className="demand-air-fan-item__head">
                      <strong>{fan.name}</strong>
                      <Tag color={fan.enabled ? "success" : "default"}>
                        {fan.enabled ? "运行" : "待机"}
                      </Tag>
                    </div>
                    <div className="demand-air-fan-item__body demand-air-fan-item__body--main">
                      <span className="demand-air-fan-item__metric">
                        <em>频率</em>
                        <strong>
                          {fan.frequencyHz.toFixed(1)} /{" "}
                          {fan.ratedFrequencyHz.toFixed(0)} Hz
                        </strong>
                      </span>
                      <span className="demand-air-fan-item__metric">
                        <em>风量</em>
                        <strong>{fan.currentAirflow.toFixed(2)} m³/s</strong>
                      </span>
                      <span className="demand-air-fan-item__metric">
                        <em>风压</em>
                        <strong>{fan.pressurePa.toFixed(0)} Pa</strong>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card
              className="demand-air-card"
              title={
                <span>
                  <DashboardOutlined style={{ marginRight: 8 }} />
                  局扇运行信息
                </span>
              }
            >
              <div className="demand-air-fan-summary">
                <div className="demand-air-fan-summary-item">
                  <span>局扇总数</span>
                  <strong>{auxFanTotalCount} 台</strong>
                </div>
                <div className="demand-air-fan-summary-item">
                  <span>并启台数</span>
                  <strong>{enabledAuxFans.length} 台</strong>
                </div>
                <div className="demand-air-fan-summary-item">
                  <span>联动巷道</span>
                  <strong>{linkedAuxRoadwayCount} 条</strong>
                </div>
              </div>

              <Table
                className="demand-air-table demand-air-table--aux"
                columns={auxFanColumns}
                dataSource={auxFanDisplayRows}
                rowKey="id"
                size="small"
                pagination={false}
                tableLayout="fixed"
                scroll={{ x: 620, y: 280 }}
              />
            </Card>
          </div>

          <div className="demand-air-stack-column demand-air-stack-column--right">
            <Card
              className="demand-air-card demand-air-card--target-config"
              title={
                <span>
                  <ControlOutlined style={{ marginRight: 8 }} />
                  巷道目标风量设置
                </span>
              }
              extra={
                <Space size={8} wrap>
                  <Upload {...importProps}>
                    <Button size="small" icon={<UploadOutlined />}>
                      导入
                    </Button>
                  </Upload>
                  <Button
                    size="small"
                    icon={<DeleteOutlined />}
                    disabled={targetAdjustedRoadwayCount === 0}
                    onClick={handleClearTargets}
                  >
                    清空
                  </Button>
                  <Button
                    size="small"
                    type="primary"
                    icon={<ThunderboltOutlined />}
                    loading={solving}
                    disabled={targetAdjustedRoadwayCount === 0}
                    onClick={handleSolve}
                  >
                    解算
                  </Button>
                </Space>
              }
            >
              <Table
                className="demand-air-table demand-air-table--target"
                columns={targetColumns}
                dataSource={ROADWAY_DEMAND_BASELINE}
                rowKey="id"
                size="small"
                pagination={false}
                tableLayout="fixed"
                scroll={{ x: 740, y: 330 }}
              />
            </Card>

            <Card
              className="demand-air-card demand-air-card--suggestion-panel"
              title={
                <span>
                  <ThunderboltOutlined style={{ marginRight: 8 }} />
                  设备调节建议
                </span>
              }
            >
              <div className="demand-air-report-toolbar">
                <div className="demand-air-report-toolbar__fields">
                  <Select
                    size="small"
                    value={decisionLayer}
                    className="demand-air-report-select demand-air-report-select--layer"
                    placeholder="请选择决策层"
                    options={DECISION_LAYER_OPTIONS.map((item) => ({
                      value: item.value,
                      label: item.label,
                    }))}
                    onChange={handleDecisionLayerChange}
                  />
                  <Select
                    mode="multiple"
                    size="small"
                    value={selectedDecisionRecipients}
                    className="demand-air-report-select demand-air-report-select--receiver"
                    placeholder="请选择接收人"
                    options={decisionReceiverOptions}
                    maxTagCount="responsive"
                    onChange={(value) => setSelectedDecisionRecipients(value)}
                  />
                </div>
                <Button
                  size="small"
                  type="primary"
                  loading={reportSubmitting}
                  disabled={deviceSuggestions.length === 0}
                  onClick={handleReportToDecisionLayer}
                >
                  上报至指定决策层
                </Button>
              </div>

              {reportRecords.length > 0 && (
                <div className="demand-air-report-history">
                  {reportRecords.slice(0, 2).map((record) => (
                    <div
                      key={record.id}
                      className="demand-air-report-history__item"
                    >
                      <div className="demand-air-report-history__head">
                        <Tag color="blue">已上报</Tag>
                        <span>{record.reportAt}</span>
                      </div>
                      <div>决策层：{record.decisionLayerLabel}</div>
                      <div>接收人：{record.recipients.join("、")}</div>
                      <div>{record.summary}</div>
                    </div>
                  ))}
                </div>
              )}

              {deviceSuggestions.length === 0 ? (
                <Alert
                  type="info"
                  showIcon
                  message="解算完成后将自动生成设备调节建议。"
                />
              ) : (
                <List
                  className="demand-air-suggestion-list"
                  dataSource={deviceSuggestions}
                  renderItem={(item) => (
                    <List.Item key={item.id}>
                      <div className="demand-air-suggestion-item">
                        <div className="demand-air-suggestion-item__title">
                          <strong>{item.deviceName}</strong>
                          <Tag color={PRIORITY_META[item.priority].color}>
                            {PRIORITY_META[item.priority].label}
                          </Tag>
                        </div>
                        <div className="demand-air-suggestion-item__row">
                          关联巷道：{item.relatedRoadways}
                        </div>
                        <div className="demand-air-suggestion-item__row">
                          建议动作：{item.actionText}
                        </div>
                        <div className="demand-air-suggestion-item__impact">
                          {item.expectedImpact}
                        </div>
                        <div className="demand-air-suggestion-item__decision">
                          决策建议：{item.decisionNote}
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              )}
            </Card>
          </div>
        </div>

        <div className="demand-air-bottom-row">
          <Card
            className="demand-air-card"
            title={
              <span>
                <CheckCircleOutlined style={{ marginRight: 8 }} />
                解算结果校验
              </span>
            }
          >
            {solveResults.length === 0 ? (
              <Alert
                type="info"
                showIcon
                message="请先执行按需分风解算，系统将展示巷道级偏差和状态。"
              />
            ) : (
              <Table
                className="demand-air-table demand-air-table--result"
                columns={resultColumns}
                dataSource={solveResults}
                rowKey="roadwayId"
                size="small"
                pagination={false}
                scroll={{ x: 980, y: 250 }}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
