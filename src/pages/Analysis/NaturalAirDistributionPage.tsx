import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  InputNumber,
  Select,
  Table,
  Tag,
  Upload,
  message,
} from "antd";
import {
  DashboardOutlined,
  DownloadOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  ReloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { EChartsOption } from "echarts";
import * as XLSX from "xlsx";
import { ChartPanel } from "../../components/charts/ChartPanel";
import "./NaturalAirDistributionPage.css";

interface RoadwayStatus {
  id: string;
  name: string;
  resistance: number;
  minAirflow: number;
  maxAirflow: number;
  measuredAirflow?: number;
  hasMeasurement: boolean;
  status: "sufficient" | "insufficient" | "unknown";
}

interface ResultRow {
  roadwayId: string;
  roadwayName: string;
  hasMeasurement: boolean;
  measuredAirflow?: number;
  solvedAirflow: number;
}

interface MainFanInfo {
  key: string;
  fanName: string;
  frequency: number;
  airflow: number;
  pressure: number;
  curveColor: string;
  curvePoints: Array<[number, number]>;
}

const roadwayStatusData: RoadwayStatus[] = [
  { id: "R001", name: "主进风井", resistance: 0.025, minAirflow: 1800, maxAirflow: 2200, measuredAirflow: 1850.5, hasMeasurement: true, status: "sufficient" },
  { id: "R002", name: "副进风井", resistance: 0.028, minAirflow: 1500, maxAirflow: 1800, measuredAirflow: 1420.3, hasMeasurement: true, status: "insufficient" },
  { id: "R003", name: "东翼总进风巷", resistance: 0.032, minAirflow: 650, maxAirflow: 850, measuredAirflow: 680.2, hasMeasurement: true, status: "sufficient" },
  { id: "R004", name: "西翼总进风巷", resistance: 0.035, minAirflow: 650, maxAirflow: 850, hasMeasurement: false, status: "unknown" },
  { id: "R005", name: "1301工作面进风巷", resistance: 0.042, minAirflow: 300, maxAirflow: 400, measuredAirflow: 285.5, hasMeasurement: true, status: "insufficient" },
  { id: "R006", name: "1301工作面回风巷", resistance: 0.045, minAirflow: 300, maxAirflow: 400, measuredAirflow: 292.4, hasMeasurement: true, status: "insufficient" },
  { id: "R007", name: "中央运输石门", resistance: 0.045, minAirflow: 180, maxAirflow: 250, measuredAirflow: 180.5, hasMeasurement: true, status: "sufficient" },
  { id: "R008", name: "主回风井", resistance: 0.022, minAirflow: 1850, maxAirflow: 2300, measuredAirflow: 1880.2, hasMeasurement: true, status: "sufficient" },
  { id: "R009", name: "北翼进风联络巷", resistance: 0.037, minAirflow: 420, maxAirflow: 560, measuredAirflow: 415.6, hasMeasurement: true, status: "insufficient" },
  { id: "R010", name: "北翼回风联络巷", resistance: 0.039, minAirflow: 420, maxAirflow: 560, measuredAirflow: 438.4, hasMeasurement: true, status: "sufficient" },
  { id: "R011", name: "2203工作面进风巷", resistance: 0.041, minAirflow: 320, maxAirflow: 430, hasMeasurement: false, status: "unknown" },
  { id: "R012", name: "2203工作面回风巷", resistance: 0.044, minAirflow: 320, maxAirflow: 430, measuredAirflow: 335.8, hasMeasurement: true, status: "sufficient" },
];

const solvedPreset: Record<string, number> = {
  R001: 1862.4,
  R002: 1512.8,
  R003: 690.3,
  R004: 724.1,
  R005: 304.6,
  R006: 309.2,
  R007: 183.7,
  R008: 1892.5,
  R009: 426.4,
  R010: 441.9,
  R011: 338.5,
  R012: 339.6,
};

const mainFanData: MainFanInfo[] = [
  {
    key: "fan-1",
    fanName: "1#主通风机",
    frequency: 48.5,
    airflow: 18450,
    pressure: 2860,
    curveColor: "#4da3ff",
    curvePoints: [
      [12000, 3340],
      [14000, 3180],
      [16000, 3010],
      [18000, 2870],
      [20000, 2690],
      [22000, 2500],
    ],
  },
  {
    key: "fan-2",
    fanName: "2#主通风机",
    frequency: 47.8,
    airflow: 17820,
    pressure: 2795,
    curveColor: "#7b61ff",
    curvePoints: [
      [12000, 3260],
      [14000, 3110],
      [16000, 2960],
      [18000, 2810],
      [20000, 2630],
      [22000, 2450],
    ],
  },
];

const LazyHomeObjBackground = lazy(async () => {
  const module = await import("../../components/topology/HomeObjBackground3D");
  return { default: module.HomeObjBackground3D };
});

// 与“智能通风管控平台”主页保持一致的巷道三维模型参考参数
const PLATFORM_REFERENCE_MODEL_SETTINGS = {
  // 保持可交互（OrbitControls 生效），但模型不自行旋转
  paused: false,
  rotationSpeed: 0,
  opacity: 0.55,
  brightness: 1.4,
  disableRotation: false,
  viewScale: 4.5,
  viewAzimuthDeg: 90,
} as const;

function renderRoadwayStatus(status: RoadwayStatus["status"]) {
  const map = {
    sufficient: { color: "success", label: "充足" },
    insufficient: { color: "error", label: "不足" },
    unknown: { color: "default", label: "待核定" },
  } as const;
  return <Tag color={map[status].color}>{map[status].label}</Tag>;
}

export default function NaturalAirDistributionPage() {
  const [calculating, setCalculating] = useState(false);
  const [calculationMethod, setCalculationMethod] = useState("hardy-cross");
  const [convergenceCriteria, setConvergenceCriteria] = useState(0.001);
  const [maxIterations, setMaxIterations] = useState(100);
  const [dataImported, setDataImported] = useState(false);
  const [backgroundReady, setBackgroundReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setBackgroundReady(true), 240);
    return () => window.clearTimeout(timer);
  }, []);

  const uploadProps: UploadProps = {
    name: "file",
    accept: ".xlsx,.xls",
    beforeUpload: (file) => {
      const isExcel =
        file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel";
      if (!isExcel) {
        message.error("只支持 Excel 文件");
        return false;
      }
      setDataImported(true);
      message.success(`${file.name} 导入成功`);
      return false;
    },
    showUploadList: false,
  };

  const resultData: ResultRow[] = useMemo(
    () =>
      roadwayStatusData.map((item) => ({
        roadwayId: item.id,
        roadwayName: item.name,
        hasMeasurement: item.hasMeasurement,
        measuredAirflow: item.measuredAirflow,
        solvedAirflow: solvedPreset[item.id] ?? item.measuredAirflow ?? item.minAirflow,
      })),
    [],
  );

  const measuredCount = roadwayStatusData.filter((item) => item.hasMeasurement).length;
  const missingMeasurementCount = roadwayStatusData.length - measuredCount;
  const boundaryCoverageRate = (measuredCount / roadwayStatusData.length) * 100;
  const totalCurrentAirflow = roadwayStatusData.reduce((sum, item) => sum + (item.measuredAirflow ?? 0), 0);
  const totalRequiredAirflow = roadwayStatusData.reduce((sum, item) => sum + item.minAirflow, 0);
  const airflowBalanceDeviation = totalCurrentAirflow - totalRequiredAirflow;
  const naturalVentilationPressure = Number(
    ((((mainFanData[0].pressure + mainFanData[1].pressure) / 2) * 0.012) * (airflowBalanceDeviation >= 0 ? 1 : -1)).toFixed(1),
  );
  const airflowDeviationColor =
    Math.abs(airflowBalanceDeviation) <= 200 ? "#6de3aa" : airflowBalanceDeviation < 0 ? "#ff9f7f" : "#ffd86b";

  const controlStatusMeta = calculating
    ? { label: "解算中", color: "processing" as const }
    : !dataImported
      ? { label: "待导入", color: "default" as const }
      : { label: "可解算", color: "success" as const };

  const handleStartCalculation = () => {
    setCalculating(true);
    window.setTimeout(() => setCalculating(false), 2200);
  };

  const handleReset = () => {
    setCalculationMethod("hardy-cross");
    setConvergenceCriteria(0.001);
    setMaxIterations(100);
    message.success("参数已恢复默认");
  };

  const handleExport = () => {
    const workbook = XLSX.utils.book_new();
    const statusRows = roadwayStatusData.map((item) => ({
      巷道编号: item.id,
      巷道名称: item.name,
      最小风量: item.minAirflow,
      最大风量: item.maxAirflow,
      实测风量: item.measuredAirflow ?? "",
      风阻: item.resistance,
      状态: item.status,
    }));
    const resultRows = resultData.map((item) => ({
      巷道编号: item.roadwayId,
      巷道名称: item.roadwayName,
      实测风量: item.measuredAirflow ?? "",
      解算风量: Number(item.solvedAirflow.toFixed(1)),
      差值: item.hasMeasurement ? Number((item.solvedAirflow - (item.measuredAirflow ?? 0)).toFixed(1)) : "",
    }));
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(statusRows), "通风状态");
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(resultRows), "解算结果");
    XLSX.writeFile(workbook, `实时分风解算_${Date.now()}.xlsx`);
    message.success("已导出 Excel");
  };

  const fanCurveOption = useMemo<EChartsOption>(
    () => ({
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(9, 27, 47, 0.92)",
        borderColor: "rgba(120, 190, 255, 0.45)",
        textStyle: { color: "#e8f4ff" },
      },
      legend: {
        top: 6,
        textStyle: { color: "#d7ebff", fontSize: 12 },
        data: ["1#主通风机性能曲线", "2#主通风机性能曲线"],
      },
      grid: { left: 56, right: 20, top: 52, bottom: 42 },
      xAxis: {
        type: "value",
        name: "风量 (m3/min)",
        axisLine: { lineStyle: { color: "rgba(145, 213, 255, 0.5)" } },
        splitLine: { lineStyle: { color: "rgba(145, 213, 255, 0.12)" } },
        axisLabel: { color: "#b8d9ff" },
        nameTextStyle: { color: "#b8d9ff" },
      },
      yAxis: {
        type: "value",
        name: "风压 (Pa)",
        axisLine: { lineStyle: { color: "rgba(145, 213, 255, 0.5)" } },
        splitLine: { lineStyle: { color: "rgba(145, 213, 255, 0.12)" } },
        axisLabel: { color: "#b8d9ff" },
        nameTextStyle: { color: "#b8d9ff" },
      },
      series: [
        {
          name: "1#主通风机性能曲线",
          type: "line",
          smooth: true,
          symbol: "none",
          data: mainFanData[0].curvePoints,
          lineStyle: { width: 3, color: mainFanData[0].curveColor },
        },
        {
          name: "2#主通风机性能曲线",
          type: "line",
          smooth: true,
          symbol: "none",
          data: mainFanData[1].curvePoints,
          lineStyle: { width: 3, color: mainFanData[1].curveColor },
        },
      ],
    }),
    [],
  );

  const statusColumns: ColumnsType<RoadwayStatus> = [
    { title: "巷道", dataIndex: "id", key: "id", width: 72, align: "center" },
    { title: "巷道名称", dataIndex: "name", key: "name", width: 132, ellipsis: true },
    {
      title: "实测风量",
      dataIndex: "measuredAirflow",
      key: "measuredAirflow",
      width: 98,
      align: "right",
      render: (value: number | undefined, record) =>
        record.hasMeasurement ? <span className="status-roadway-value">{value?.toFixed(1)}</span> : <span className="status-roadway-empty">--</span>,
    },
    { title: "最小风量", dataIndex: "minAirflow", key: "minAirflow", width: 92, align: "right" },
    { title: "最大风量", dataIndex: "maxAirflow", key: "maxAirflow", width: 92, align: "right" },
    { title: "风阻", dataIndex: "resistance", key: "resistance", width: 82, align: "right", render: (value) => value.toFixed(3) },
    { title: "状态", dataIndex: "status", key: "status", width: 76, align: "center", render: renderRoadwayStatus },
  ];

  const calculationMethodOptions = [
    { label: "Hardy-Cross 法", value: "hardy-cross", shortLabel: "H-C" },
    { label: "节点压力法", value: "node-pressure", shortLabel: "节点" },
    { label: "回路风量法", value: "loop-airflow", shortLabel: "回路" },
  ] as const;

  const currentCalculationMethod =
    calculationMethodOptions.find((item) => item.value === calculationMethod) ?? calculationMethodOptions[0];

  const controlProcessData = [
    {
      key: "p1",
      step: "01",
      label: "数据导入",
      value: dataImported ? "已导入" : "待导入",
      status: dataImported ? "done" : "pending",
    },
    {
      key: "p2",
      step: "02",
      label: "边界校核",
      value: `${boundaryCoverageRate.toFixed(1)}%`,
      status: !dataImported ? "pending" : boundaryCoverageRate >= 75 ? "done" : "warn",
    },
    {
      key: "p3",
      step: "03",
      label: "参数设定",
      value: currentCalculationMethod.shortLabel,
      status: "done",
    },
    {
      key: "p4",
      step: "04",
      label: "执行求解",
      value: calculating ? "进行中" : dataImported ? "可启动" : "待启动",
      status: calculating ? "active" : dataImported ? "ready" : "pending",
    },
  ] as const;

  const controlPanelColumns: ColumnsType<{ key: string; item: string; value: string }> = [
    { title: "控制项", dataIndex: "item", key: "item", width: 90 },
    { title: "当前值", dataIndex: "value", key: "value", render: (value) => <span className="control-side-value">{value}</span> },
  ];

  const controlPanelData = [
    { key: "c1", item: "测点覆盖", value: `${boundaryCoverageRate.toFixed(1)}%` },
    { key: "c2", item: "缺测巷道", value: `${missingMeasurementCount} 条` },
    { key: "c3", item: "自然风压", value: `${naturalVentilationPressure} Pa` },
    { key: "c4", item: "风量偏差", value: `${airflowBalanceDeviation.toFixed(1)} m3/min` },
    { key: "c5", item: "主扇边界", value: `${mainFanData.length} 台` },
  ];

  const readinessText = !dataImported ? "待导入" : boundaryCoverageRate >= 75 ? "可解算" : "待校核";
  const readinessClass = !dataImported ? "pending" : boundaryCoverageRate >= 75 ? "ready" : "warn";

  const resultColumns: ColumnsType<ResultRow> = [
    { title: "巷道编号", dataIndex: "roadwayId", key: "roadwayId", width: 90 },
    { title: "巷道名称", dataIndex: "roadwayName", key: "roadwayName", width: 200 },
    {
      title: "测点",
      dataIndex: "hasMeasurement",
      key: "hasMeasurement",
      width: 80,
      render: (value: boolean) => (
        <span className={value ? "result-source-tag result-source-tag--measured" : "result-source-tag result-source-tag--estimated"}>
          {value ? "有" : "无"}
        </span>
      ),
    },
    {
      title: "实测风量",
      dataIndex: "measuredAirflow",
      key: "measuredAirflow",
      width: 120,
      render: (value: number | undefined, record) =>
        record.hasMeasurement ? <span className="result-airflow-value">{value?.toFixed(1)}</span> : <span className="result-airflow-empty">--</span>,
    },
    {
      title: "解算风量",
      dataIndex: "solvedAirflow",
      key: "solvedAirflow",
      width: 130,
      render: (value: number) => value.toFixed(1),
    },
    {
      title: "差值",
      key: "delta",
      width: 110,
      render: (_, record) => {
        if (!record.hasMeasurement) return <span className="result-airflow-empty">补全输出</span>;
        const delta = record.solvedAirflow - (record.measuredAirflow ?? 0);
        return (
          <span className={Math.abs(delta) <= 20 ? "result-airflow-delta result-airflow-delta--ok" : "result-airflow-delta result-airflow-delta--warn"}>
            {delta >= 0 ? "+" : ""}
            {delta.toFixed(1)}
          </span>
        );
      },
    },
  ];

  return (
    <div className="natural-air-distribution-page natural-air-layout">
      <div className="natural-air-bg-layer">
        {backgroundReady ? (
          <Suspense fallback={<div className="natural-air-bg-loading">3D背景加载中...</div>}>
            <LazyHomeObjBackground
              paused={PLATFORM_REFERENCE_MODEL_SETTINGS.paused}
              rotationSpeed={PLATFORM_REFERENCE_MODEL_SETTINGS.rotationSpeed}
              opacity={PLATFORM_REFERENCE_MODEL_SETTINGS.opacity}
              brightness={PLATFORM_REFERENCE_MODEL_SETTINGS.brightness}
              disableRotation={PLATFORM_REFERENCE_MODEL_SETTINGS.disableRotation}
              viewScale={PLATFORM_REFERENCE_MODEL_SETTINGS.viewScale}
              viewAzimuthDeg={PLATFORM_REFERENCE_MODEL_SETTINGS.viewAzimuthDeg}
            />
          </Suspense>
        ) : (
          <div className="natural-air-bg-loading">正在准备巷道三维模型...</div>
        )}
      </div>
      <div className="natural-air-bg-mask" />

      <div className="natural-air-content-shell natural-air-content-shell--tri">
        <div className="natural-air-top-row">
          <div className="status-stack-column">
            <Card
              title={
                <span>
                  <DashboardOutlined style={{ marginRight: 8 }} />
                  通风状态
                </span>
              }
              className="status-card status-card--compact natural-panel-card status-card--integrated"
              extra={
                <Button className="status-export-btn" size="small" icon={<DownloadOutlined />} onClick={handleExport}>
                  导出Excel
                </Button>
              }
            >
              <div className="center-summary-grid center-summary-grid--inside">
                <div className="center-summary-item">
                  <span>边界完整率</span>
                  <strong>{boundaryCoverageRate.toFixed(1)}%</strong>
                </div>
                <div className="center-summary-item">
                  <span>风量平衡偏差</span>
                  <strong style={{ color: airflowDeviationColor }}>{airflowBalanceDeviation.toFixed(1)} m3/min</strong>
                </div>
                <div className="center-summary-item">
                  <span>自然风压</span>
                  <strong>{naturalVentilationPressure} Pa</strong>
                </div>
              </div>

              <div className="status-integrated-body">
                <div className="status-table-shell status-roadway-table-shell status-roadway-table-shell--integrated">
                  <div className="status-roadway-table-title">巷道信息表</div>
                  <div className="status-roadway-table-wrap">
                    <Table
                      className="status-roadway-table status-roadway-table--integrated"
                      columns={statusColumns}
                      dataSource={roadwayStatusData}
                      rowKey="id"
                      pagination={false}
                      size="small"
                      tableLayout="fixed"
                      scroll={{ x: 660, y: 320 }}
                      rowClassName={(record) => `status-roadway-row status-roadway-row--${record.status}`}
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card title="通风机性能曲线" className="fan-curve-card natural-panel-card fan-curve-card--side">
              <div className="fan-curve-card-body">
                <div className="status-curve-chart">
                  <ChartPanel option={fanCurveOption} height="100%" noCard />
                </div>
                <div className="status-curve-brief">
                  {mainFanData.map((fan) => (
                    <div key={fan.key} className="status-curve-brief-item">
                      <span className="status-curve-brief-name" style={{ color: fan.curveColor }}>
                        {fan.fanName}
                      </span>
                      <span>频率 {fan.frequency.toFixed(1)} Hz</span>
                      <span>风量 {fan.airflow} m3/min</span>
                      <span>风压 {fan.pressure} Pa</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <Card title="解算控制" className="control-card natural-panel-card control-card--side" extra={<Tag color={controlStatusMeta.color}>{controlStatusMeta.label}</Tag>}>
            <div className="control-side-shell">
              <div className="control-toolbar">
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />} size="small" className="control-toolbar-btn">导入</Button>
                </Upload>
                <Button icon={<DownloadOutlined />} size="small" className="control-toolbar-btn" onClick={handleExport}>导出</Button>
                <Button icon={<ReloadOutlined />} size="small" className="control-toolbar-btn" onClick={handleReset}>复位</Button>
              </div>

              <div className="control-kpi-grid">
                <div className={`control-kpi-item control-kpi-item--${readinessClass}`}>
                  <span>运行准备</span>
                  <strong>{readinessText}</strong>
                </div>
                <div className="control-kpi-item">
                  <span>测点覆盖</span>
                  <strong>{boundaryCoverageRate.toFixed(1)}%</strong>
                </div>
                <div className="control-kpi-item">
                  <span>缺测巷道</span>
                  <strong>{missingMeasurementCount} 条</strong>
                </div>
              </div>

              <div className="control-section-title">解算流程</div>
              <div className="control-process-grid">
                {controlProcessData.map((item) => (
                  <div key={item.key} className={`control-process-item control-process-item--${item.status}`}>
                    <div className="control-process-head">
                      <span className="control-process-step">{item.step}</span>
                      <span className="control-process-dot" />
                    </div>
                    <span className="control-process-label">{item.label}</span>
                    <strong className="control-process-value">{item.value}</strong>
                  </div>
                ))}
              </div>

              <div className="control-section-title">边界关键量</div>
              <Table
                className="control-side-table"
                columns={controlPanelColumns}
                dataSource={controlPanelData}
                rowKey="key"
                pagination={false}
                size="small"
                tableLayout="fixed"
              />

              <div className="control-section-title">求解参数</div>
              <div className="control-form-grid control-form-grid--side">
                <div className="control-field">
                  <span className="control-field-label">求解模型</span>
                  <Select
                    value={calculationMethod}
                    onChange={setCalculationMethod}
                    size="small"
                    options={calculationMethodOptions.map(({ label, value }) => ({ label, value }))}
                  />
                </div>

                <div className="control-field">
                  <span className="control-field-label">收敛阈值</span>
                  <InputNumber value={convergenceCriteria} onChange={(v) => setConvergenceCriteria(v || 0.001)} min={0.0001} max={0.01} step={0.0001} size="small" />
                </div>

                <div className="control-field">
                  <span className="control-field-label">迭代上限</span>
                  <InputNumber value={maxIterations} onChange={(v) => setMaxIterations(v || 100)} min={10} max={1000} step={10} size="small" />
                </div>
              </div>

              <div className="control-actions control-actions--compact control-actions--side control-actions--solver">
                <Button
                  type="primary"
                  icon={calculating ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                  onClick={handleStartCalculation}
                  loading={calculating}
                  disabled={!dataImported}
                  block
                >
                  {calculating ? "解算中..." : "启动解算"}
                </Button>
                {!dataImported && <span className="control-action-tip">请先导入边界与测风数据</span>}
              </div>
            </div>
          </Card>

          <Card title="解算结果表格" className="result-card result-card--focused natural-panel-card result-card--bottom" extra={<Tag color="cyan">下栏</Tag>}>
            <div className="result-focus-grid">
              <div className="result-focus-item"><span>补全巷道数</span><strong>{missingMeasurementCount} 条</strong></div>
              <div className="result-focus-item"><span>总巷道数</span><strong>{roadwayStatusData.length} 条</strong></div>
              <div className="result-focus-item"><span>主扇边界</span><strong>{mainFanData.length} 台</strong></div>
              <div className="result-focus-item"><span>风网偏差</span><strong>{airflowBalanceDeviation.toFixed(1)} m3/min</strong></div>
            </div>

            <Table
              className="result-focus-table"
              columns={resultColumns}
              dataSource={resultData}
              rowKey="roadwayId"
              pagination={false}
              size="small"
              scroll={{ x: 860, y: 220 }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
