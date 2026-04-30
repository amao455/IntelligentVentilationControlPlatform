import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Card, Checkbox, Col, Progress, Row, Tabs, Typography } from "antd";
import {
  CheckCircleOutlined,
} from "@ant-design/icons";
import { KpiCard } from "../../components/cards/KpiCard";
import { ChartPanel } from "../../components/charts/ChartPanel";
import { StatusTag } from "../../components/common/StatusTag";
import { IndustrialIcon } from "../../components/icons/IndustrialIcon";
import { createPageDataset } from "../../mock/mockData";
import "./home.css";

interface BackgroundSettings {
  paused: boolean;
  rotationSpeed: number;
  opacity: number;
  brightness: number;
}

const DEFAULT_BG_SETTINGS: BackgroundSettings = {
  paused: false,
  rotationSpeed: 0.06,
  opacity: 0.74,
  brightness: 1.22,
};

const LazyHomeObjBackground = lazy(async () => {
  const module = await import("../../components/topology/HomeObjBackground3D");
  return { default: module.HomeObjBackground3D };
});

export default function HomePage() {
  const dataset = createPageDataset("/home");
  const homeKpis = dataset.kpis.map((item) => {
    if (item.key === "inlet") {
      return { ...item, value: 513, trend: 2, status: "normal" as const };
    }
    if (item.key === "return") {
      return { ...item, value: 487, trend: 1, status: "normal" as const };
    }
    return item;
  });
  const [bgSettings] = useState<BackgroundSettings>(DEFAULT_BG_SETTINGS);
  const [backgroundReady, setBackgroundReady] = useState(false);
  const sensorTypeOptions = useMemo(
    () => [
      { key: "ch4", label: "甲烷", count: 24, color: "#ff6b6b" },
      { key: "co", label: "一氧化碳", count: 16, color: "#ffb84d" },
      { key: "co2", label: "二氧化碳", count: 12, color: "#7cdbff" },
      { key: "o2", label: "氧气", count: 14, color: "#52c41a" },
      { key: "temp", label: "温度", count: 19, color: "#ff7a45" },
      { key: "humidity", label: "湿度", count: 19, color: "#2dd4bf" },
      { key: "windSpeed", label: "风速", count: 22, color: "#69c0ff" },
      { key: "dust", label: "粉尘", count: 15, color: "#ffd666" },
      { key: "smoke", label: "烟雾", count: 10, color: "#b37feb" },
      { key: "h2", label: "氢气", count: 8, color: "#91d5ff" },
    ],
    [],
  );
  const sensorStationAnchors = useMemo(
    () => [
      { x: 0.16, y: 0.49, z: 0.68 },
      { x: 0.22, y: 0.57, z: 0.3 },
      { x: 0.3, y: 0.5, z: 0.45 },
      { x: 0.36, y: 0.55, z: 0.64 },
      { x: 0.42, y: 0.61, z: 0.73 },
      { x: 0.48, y: 0.48, z: 0.34 },
      { x: 0.52, y: 0.56, z: 0.52 },
      { x: 0.58, y: 0.54, z: 0.56 },
      { x: 0.62, y: 0.5, z: 0.22 },
      { x: 0.67, y: 0.59, z: 0.43 },
      { x: 0.72, y: 0.5, z: 0.61 },
      { x: 0.78, y: 0.46, z: 0.36 },
      { x: 0.82, y: 0.47, z: 0.28 },
      { x: 0.38, y: 0.47, z: 0.25 },
      { x: 0.56, y: 0.45, z: 0.72 },
      { x: 0.74, y: 0.58, z: 0.48 },
      { x: 0.28, y: 0.6, z: 0.56 },
      { x: 0.64, y: 0.62, z: 0.67 },
    ],
    [],
  );
  const [selectedSensorTypes, setSelectedSensorTypes] = useState<string[]>(
    sensorTypeOptions.map((item) => item.key),
  );
  const allSensorTypeKeys = sensorTypeOptions.map((item) => item.key);
  const toggleSensorType = (key: string) => {
    setSelectedSensorTypes((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };
  const allSensorsChecked = selectedSensorTypes.length === sensorTypeOptions.length;
  const sensorIndeterminate =
    selectedSensorTypes.length > 0 && selectedSensorTypes.length < sensorTypeOptions.length;
  const handleSelectAllSensors = (checked: boolean) => {
    setSelectedSensorTypes(checked ? allSensorTypeKeys : []);
  };
  const selectedSensorCount = sensorTypeOptions
    .filter((item) => selectedSensorTypes.includes(item.key))
    .reduce((sum, item) => sum + item.count, 0);
  const sensorMarkers = useMemo(
    () =>
      sensorTypeOptions
        .flatMap((item, typeIndex) =>
          Array.from({ length: item.count }, (_, index) => {
            const sequence = index + 1;
            const station = sensorStationAnchors[index % sensorStationAnchors.length];
            const repeatIndex = Math.floor(index / sensorStationAnchors.length);
            const typeAngle = (typeIndex / sensorTypeOptions.length) * Math.PI * 2;
            const repeatAngle = ((repeatIndex * 5 + typeIndex) / 12) * Math.PI * 2;
            const typeRadius = 0.009 + (typeIndex % 3) * 0.002;
            const repeatRadius = repeatIndex * 0.006;
            const clampAnchor = (value: number) =>
              Math.min(0.92, Math.max(0.08, value));

            return {
              id: `${item.key}-${sequence}`,
              typeKey: item.key,
              label: `${item.label}-${String(sequence).padStart(2, "0")}`,
              anchor: {
                x: clampAnchor(
                  station.x +
                    Math.cos(typeAngle) * typeRadius +
                    Math.cos(repeatAngle) * repeatRadius,
                ),
                y: clampAnchor(station.y + ((typeIndex % 4) - 1.5) * 0.006),
                z: clampAnchor(
                  station.z +
                    Math.sin(typeAngle) * typeRadius +
                    Math.sin(repeatAngle) * repeatRadius,
                ),
              },
              color: item.color,
            };
          }),
        ),
    [sensorStationAnchors, sensorTypeOptions],
  );
  const visibleSensorMarkerIds = useMemo(
    () =>
      sensorMarkers
        .filter((item) => selectedSensorTypes.includes(item.typeKey))
        .map((item) => item.id),
    [selectedSensorTypes, sensorMarkers],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setBackgroundReady(true);
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const keyAirflowPointData = [
    { name: "3105工作面", airflow: 86, lowerLimit: 78 },
    { name: "东翼回风巷", airflow: 74, lowerLimit: 72 },
    { name: "主运输大巷", airflow: 68, lowerLimit: 70 },
    { name: "西翼联络巷", airflow: 77, lowerLimit: 73 },
    { name: "北二采区", airflow: 64, lowerLimit: 66 },
    { name: "二水平皮带巷", airflow: 72, lowerLimit: 69 },
  ];
  const keyAirflowPassCount = keyAirflowPointData.filter(
    (item) => item.airflow >= item.lowerLimit,
  ).length;
  const keyAirflowInsufficientCount =
    keyAirflowPointData.length - keyAirflowPassCount;
  const airflowCurrentSeriesName = "当前风量";
  const airflowLimitSeriesName = "最低要求";
  const keyAirflowMax = Math.max(
    ...keyAirflowPointData.map((item) => Math.max(item.airflow, item.lowerLimit)),
  );
  const keyAirflowOption: any = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      triggerOn: "mousemove|click",
      backgroundColor: "rgba(8, 24, 43, 0.92)",
      borderColor: "rgba(145, 213, 255, 0.45)",
      borderWidth: 1,
      padding: 0,
      textStyle: { color: "#e9f6ff", fontSize: 12 },
      extraCssText:
        "box-shadow:0 8px 22px rgba(3,14,29,0.55),0 0 18px rgba(105,192,255,0.18);border-radius:10px;backdrop-filter:blur(6px);",
      axisPointer: { type: "shadow" },
      formatter: (params: any[]) => {
        const current = params?.find((p) => p.seriesName === airflowCurrentSeriesName);
        const limit = params?.find((p) => p.seriesName === airflowLimitSeriesName);
        if (!current || !limit) return "";
        const isPass = current.value >= limit.value;
        const statusText = isPass ? "达标" : "不足";
        const statusBg = isPass
          ? "linear-gradient(135deg, rgba(82,196,26,.26) 0%, rgba(115,209,61,.12) 100%)"
          : "linear-gradient(135deg, rgba(250,173,20,.28) 0%, rgba(250,140,22,.14) 100%)";
        const statusBorder = isPass ? "rgba(115,209,61,.45)" : "rgba(250,173,20,.5)";
        const statusColor = isPass ? "#ebffe4" : "#ffeccb";
        return `
          <div style="width:188px;">
            <div style="padding:6px 8px;border-bottom:1px solid rgba(145,213,255,.24);background:linear-gradient(180deg, rgba(89,154,221,.2) 0%, rgba(89,154,221,.08) 100%);">
              <span style="font-size:12px;font-weight:700;color:#dff2ff;letter-spacing:.15px;line-height:1.25;">${current.axisValue}</span>
            </div>
            <div style="padding:7px 8px 8px;display:grid;grid-template-columns:1fr auto;column-gap:8px;row-gap:5px;align-items:center;">
              <div style="color:rgba(191,220,247,.85);font-size:11px;line-height:1.3;">当前风量</div>
              <div style="color:#f2fbff;font-weight:700;font-size:12px;line-height:1.3;text-align:right;">${current.value} m³/s</div>
              <div style="color:rgba(191,220,247,.85);font-size:11px;line-height:1.3;">最低要求</div>
              <div style="color:#d7ecff;font-weight:600;font-size:12px;line-height:1.3;text-align:right;">${limit.value} m³/s</div>
              <div style="color:rgba(191,220,247,.85);font-size:11px;line-height:1.3;">状态</div>
              <div style="text-align:right;">
                <span style="display:inline-block;padding:1px 7px;border-radius:999px;border:1px solid ${statusBorder};background:${statusBg};color:${statusColor};font-weight:700;font-size:11px;line-height:1.45;">${statusText}</span>
              </div>
            </div>
          </div>
        `;
      },
    },
    legend: {
      top: 0,
      right: 8,
      icon: "roundRect",
      itemWidth: 10,
      itemHeight: 8,
      itemGap: 12,
      textStyle: {
        color: "rgba(219, 239, 255, 0.9)",
        fontSize: 10,
        fontWeight: 600,
      },
      formatter: (name: string) => `${name}（m³/s）`,
      data: [airflowCurrentSeriesName, airflowLimitSeriesName],
    },
    grid: { left: 76, right: 12, top: 28, bottom: 10 },
    xAxis: {
      type: "value",
      max: Math.ceil((keyAirflowMax + 6) / 5) * 5,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "rgba(150, 205, 255, 0.14)" } },
      axisLabel: { color: "rgba(189, 219, 245, 0.72)", fontSize: 10 },
    },
    yAxis: {
      type: "category",
      data: keyAirflowPointData.map((item) => item.name),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#dceeff", fontSize: 11 },
    },
    series: [
      {
        name: airflowLimitSeriesName,
        type: "bar",
        data: keyAirflowPointData.map((item) => item.lowerLimit),
        barWidth: 12,
        itemStyle: {
          color: "rgba(24, 144, 255, 0.2)",
          borderRadius: 8,
        },
        z: 1,
      },
      {
        name: airflowCurrentSeriesName,
        type: "bar",
        data: keyAirflowPointData.map((item) => item.airflow),
        barWidth: 12,
        barGap: "-100%",
        itemStyle: {
          borderRadius: 8,
          color: (params: any) => {
            const row = keyAirflowPointData[params.dataIndex];
            return row.airflow >= row.lowerLimit ? "#52c41a" : "#faad14";
          },
        },
        label: {
          show: true,
          position: "right",
          color: "#e9f6ff",
          fontSize: 10,
          formatter: "{c}",
        },
        z: 2,
      },
    ],
  };
  // 24h风量趋势采用与KPI一致的矿井风量量级（总进风量当前值=513m³/s）
  const inletAirSeries = [498, 503, 507, 510, 516, 514, 513];
  const returnAirSeries = [472, 476, 481, 485, 490, 488, 487];
  const latestInletAir = inletAirSeries[inletAirSeries.length - 1] ?? 0;
  const latestReturnAir = returnAirSeries[returnAirSeries.length - 1] ?? 0;
  const latestAirDiff = latestInletAir - latestReturnAir;

  const inletReturnTrendOption: any = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: { color: "rgba(145, 213, 255, 0.45)", width: 1 },
      },
      formatter: (params: any[]) => {
        if (!params?.length) return "";
        const inlet = params.find((p) => p.seriesName === "总进风量");
        const ret = params.find((p) => p.seriesName === "总回风量");
        const time = params[0]?.axisValue ?? "";
        const inletValue = inlet?.value ?? 0;
        const returnValue = ret?.value ?? 0;
        const diff = inletValue - returnValue;
        return [
          `${time}`,
          `总进风量：${Number(inletValue).toLocaleString()} m³/s`,
          `总回风量：${Number(returnValue).toLocaleString()} m³/s`,
          `风量差值：${Number(diff).toLocaleString()} m³/s`,
        ].join("<br/>");
      },
    },
    legend: {
      data: ["总进风量", "总回风量"],
      top: 2,
      right: 8,
      itemWidth: 10,
      itemHeight: 6,
      textStyle: {
        color: "rgba(210, 233, 255, 0.86)",
        fontSize: 11,
      },
    },
    grid: { left: 44, right: 14, top: 34, bottom: 24 },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: dataset.lineLabels,
      axisLine: { lineStyle: { color: "rgba(133, 165, 255, 0.42)" } },
      axisTick: { show: false },
      axisLabel: { color: "rgba(191, 220, 247, 0.78)", fontSize: 11 },
    },
    yAxis: {
      type: "value",
      name: "m³/s",
      nameTextStyle: { color: "rgba(184, 217, 255, 0.68)", fontSize: 10, padding: [0, 0, 0, 8] },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "rgba(191, 220, 247, 0.78)", fontSize: 11 },
      splitLine: {
        lineStyle: { color: "rgba(150, 205, 255, 0.18)", type: "dashed" },
      },
    },
    series: [
      {
        name: "总进风量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        data: inletAirSeries,
        lineStyle: { width: 2, color: "#69c0ff" },
        itemStyle: { color: "#69c0ff" },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(105,192,255,.28)" },
              { offset: 1, color: "rgba(105,192,255,.04)" },
            ],
          },
        },
      },
      {
        name: "总回风量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        data: returnAirSeries,
        lineStyle: { width: 2, color: "#95de64" },
        itemStyle: { color: "#95de64" },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(149,222,100,.22)" },
              { offset: 1, color: "rgba(149,222,100,.03)" },
            ],
          },
        },
      },
    ],
  };

  const alertPriority: Record<string, number> = {
    critical: 4,
    alert: 3,
    warning: 2,
    offline: 1,
    normal: 0,
    running: 0,
  };
  const alertLabelMap: Record<string, string> = {
    critical: "严重",
    alert: "告警",
    warning: "预警",
    offline: "离线",
    normal: "正常",
    running: "运行",
  };
  const levelClassMap: Record<string, string> = {
    critical: "critical",
    alert: "alert",
    warning: "warning",
    offline: "offline",
    normal: "normal",
    running: "normal",
  };
  const rowAlerts = dataset.tableRows
    .filter((item) => alertPriority[item.status] > 0)
    .sort((a, b) => alertPriority[b.status] - alertPriority[a.status]);
  const logAlerts = dataset.logs
    .filter((item) => alertPriority[item.level] > 0)
    .sort((a, b) => alertPriority[b.level] - alertPriority[a.level]);
  const mergedAlerts = [
    ...rowAlerts.map((item, index) => ({
      key: `${item.id}-${index}`,
      level: item.status,
      title: `${item.name}${alertLabelMap[item.status] ? `（${alertLabelMap[item.status]}）` : ""}`,
      area: item.area,
      detail: item.value,
      time: item.updatedAt.slice(11, 16),
    })),
    ...logAlerts.map((item, index) => ({
      key: `log-${index}`,
      level: item.level,
      title: item.message,
      area: item.actor,
      detail: "系统事件",
      time: item.time.slice(11, 16),
    })),
  ].slice(0, 8);
  const alertSummary = {
    total: rowAlerts.length + logAlerts.length,
    critical: rowAlerts.filter((item) => item.status === "critical").length,
    alert: rowAlerts.filter((item) => item.status === "alert").length,
    warning: rowAlerts.filter((item) => item.status === "warning").length,
  };

  return (
    <div className="home-cockpit">
      <div className="home-background-layer">
        {backgroundReady ? (
          <Suspense
            fallback={
              <div className="home-background-placeholder">3D背景载入中...</div>
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
              sensorMarkers={sensorMarkers}
              visibleSensorMarkerIds={visibleSensorMarkerIds}
            />
          </Suspense>
        ) : (
          <div className="home-background-placeholder">
            正在准备巷道模型背景
          </div>
        )}
      </div>

      <div className="home-content-layer">
        {/* KPI 指标卡片 */}
        <Row gutter={[16, 16]} className="home-kpi-row">
          {homeKpis.slice(0, 8).map((item) => (
            <Col key={item.key} xs={24} sm={12} md={8} lg={6} xl={3}>
              <KpiCard item={item} />
            </Col>
          ))}
        </Row>

        {/* 主要内容区域 - 三栏布局 */}
        <Row
          gutter={[16, 16]}
          style={{ flex: 1, minHeight: 0 }}
          className="home-main-layout-row"
        >
          {/* 左栏 */}
          <Col xs={24} lg={{ flex: "0 0 18.75%" }} className="home-side-column">
            <div className="home-left-column-stack">
              {/* 主通风机运行状态*/}
              <Card
                className="page-card home-transparent-card fan-status-card home-left-fan-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <IndustrialIcon name="fan-main" size={18} />
                    <span>主通风机运行状态</span>
                  </div>
                }
                style={{ minHeight: 0 }}
              >
                {/* 扫描线*/}
                <div className="scan-line" />

                {/* 四角装饰 */}
                <div className="corner-deco top-left" />
                <div className="corner-deco top-right" />
                <div className="corner-deco bottom-left" />
                <div className="corner-deco bottom-right" />
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <Tabs
                    defaultActiveKey="1"
                    size="small"
                    items={[
                      {
                        key: "1",
                        label: (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              justifyContent: "center",
                            }}
                          >
                            <CheckCircleOutlined
                              style={{ color: "#52c41a", fontSize: 11 }}
                            />
                            <span style={{ fontSize: 12 }}>1号机</span>
                          </div>
                        ),
                        children: (
                          <div
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(89, 154, 221, 0.25) 0%, rgba(49, 108, 168, 0.15) 100%)",
                              border: "2px solid rgba(150, 205, 255, 0.5)",
                              borderRadius: 8,
                              padding: "5px",
                              boxShadow:
                                "0 4px 16px rgba(11, 35, 62, 0.4), inset 0 1px 0 rgba(196, 225, 255, 0.15)",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 3,
                                paddingBottom: 2,
                                borderBottom:
                                  "1px solid rgba(150, 205, 255, 0.3)",
                                minHeight: 0,
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                  minWidth: 0,
                                }}
                              >
                                <div
                                  style={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: "50%",
                                    background: "#52c41a",
                                    boxShadow: "0 0 8px rgba(82, 196, 26, 0.8)",
                                    animation: "pulse 2s ease-in-out infinite",
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography.Text
                                  style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    textShadow:
                                      "0 0 8px rgba(156, 208, 255, 0.5)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  运行中{" "}
                                </Typography.Text>
                              </div>
                              <div style={{ flexShrink: 0 }}>
                                <StatusTag status="normal" />
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                flex: 1,
                                minHeight: 0,
                                overflow: "auto",
                              }}
                            >
                              <div
                                style={{
                                  background: "rgba(9, 37, 67, 0.3)",
                                  borderRadius: 4,
                                  padding: "2px 5px",
                                  border: "1px solid rgba(150, 205, 255, 0.2)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  minHeight: 0,
                                }}
                              >
                                <Typography.Text
                                  style={{
                                    fontSize: 12,
                                    color: "#b8d9ff",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  风量
                                </Typography.Text>
                                <Typography.Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#69c0ff",
                                    textShadow:
                                      "0 0 10px rgba(105, 192, 255, 0.6)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  3850{" "}
                                  <span
                                    style={{ fontSize: 11, color: "#b8d9ff" }}
                                  >
                                    m3/s
                                  </span>
                                </Typography.Text>
                              </div>
                              <div
                                style={{
                                  background: "rgba(9, 37, 67, 0.3)",
                                  borderRadius: 4,
                                  padding: "2px 5px",
                                  border: "1px solid rgba(150, 205, 255, 0.2)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  minHeight: 0,
                                }}
                              >
                                <Typography.Text
                                  style={{
                                    fontSize: 12,
                                    color: "#b8d9ff",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  负压
                                </Typography.Text>
                                <Typography.Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#69c0ff",
                                    textShadow:
                                      "0 0 10px rgba(105, 192, 255, 0.6)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  2.85{" "}
                                  <span
                                    style={{ fontSize: 11, color: "#b8d9ff" }}
                                  >
                                    kPa
                                  </span>
                                </Typography.Text>
                              </div>
                              <div
                                style={{
                                  background: "rgba(9, 37, 67, 0.3)",
                                  borderRadius: 4,
                                  padding: "2px 5px",
                                  border: "1px solid rgba(150, 205, 255, 0.2)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  minHeight: 0,
                                }}
                              >
                                <Typography.Text
                                  style={{
                                    fontSize: 12,
                                    color: "#b8d9ff",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  电机功率
                                </Typography.Text>
                                <Typography.Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#69c0ff",
                                    textShadow:
                                      "0 0 10px rgba(105, 192, 255, 0.6)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  520{" "}
                                  <span
                                    style={{ fontSize: 11, color: "#b8d9ff" }}
                                  >
                                    kW
                                  </span>
                                </Typography.Text>
                              </div>
                              <div
                                style={{
                                  background: "rgba(9, 37, 67, 0.3)",
                                  borderRadius: 4,
                                  padding: "2px 5px",
                                  border: "1px solid rgba(150, 205, 255, 0.2)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  minHeight: 0,
                                }}
                              >
                                <Typography.Text
                                  style={{
                                    fontSize: 12,
                                    color: "#b8d9ff",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  运行时长
                                </Typography.Text>
                                <Typography.Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#69c0ff",
                                    textShadow:
                                      "0 0 10px rgba(105, 192, 255, 0.6)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  72{" "}
                                  <span
                                    style={{ fontSize: 11, color: "#b8d9ff" }}
                                  >
                                    小时
                                  </span>
                                </Typography.Text>
                              </div>
                              <div
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(82, 196, 26, 0.15) 0%, rgba(82, 196, 26, 0.05) 100%)",
                                  borderRadius: 4,
                                  padding: "3px 5px",
                                  border: "1px solid rgba(82, 196, 26, 0.3)",
                                  minHeight: 0,
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: 1,
                                  }}
                                >
                                  <Typography.Text
                                    style={{
                                      fontSize: 12,
                                      color: "#b8d9ff",
                                      fontWeight: 500,
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    运行效率
                                  </Typography.Text>
                                  <Typography.Text
                                    style={{
                                      fontSize: 14,
                                      fontWeight: 700,
                                      color: "#52c41a",
                                      textShadow:
                                        "0 0 10px rgba(82, 196, 26, 0.6)",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    95%
                                  </Typography.Text>
                                </div>
                                <Progress
                                  percent={95}
                                  size="small"
                                  showInfo={false}
                                  strokeColor={{
                                    "0%": "#52c41a",
                                    "100%": "#73d13d",
                                  }}
                                  strokeWidth={3}
                                  trailColor="rgba(150, 205, 255, 0.2)"
                                />
                              </div>
                            </div>
                          </div>
                        ),
                      },
                      {
                        key: "2",
                        label: (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              justifyContent: "center",
                            }}
                          >
                            <CheckCircleOutlined
                              style={{ color: "#52c41a", fontSize: 11 }}
                            />
                            <span style={{ fontSize: 12 }}>2号机</span>
                          </div>
                        ),
                        children: (
                          <div
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(89, 154, 221, 0.25) 0%, rgba(49, 108, 168, 0.15) 100%)",
                              border: "2px solid rgba(150, 205, 255, 0.5)",
                              borderRadius: 8,
                              padding: "5px",
                              boxShadow:
                                "0 4px 16px rgba(11, 35, 62, 0.4), inset 0 1px 0 rgba(196, 225, 255, 0.15)",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 3,
                                paddingBottom: 2,
                                borderBottom:
                                  "1px solid rgba(150, 205, 255, 0.3)",
                                minHeight: 0,
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                  minWidth: 0,
                                }}
                              >
                                <div
                                  style={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: "50%",
                                    background: "#52c41a",
                                    boxShadow: "0 0 8px rgba(82, 196, 26, 0.8)",
                                    animation: "pulse 2s ease-in-out infinite",
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography.Text
                                  style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    textShadow:
                                      "0 0 8px rgba(156, 208, 255, 0.5)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  运行中{" "}
                                </Typography.Text>
                              </div>
                              <div style={{ flexShrink: 0 }}>
                                <StatusTag status="normal" />
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                flex: 1,
                                minHeight: 0,
                                overflow: "auto",
                              }}
                            >
                              <div
                                style={{
                                  background: "rgba(9, 37, 67, 0.3)",
                                  borderRadius: 4,
                                  padding: "2px 5px",
                                  border: "1px solid rgba(150, 205, 255, 0.2)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  minHeight: 0,
                                }}
                              >
                                <Typography.Text
                                  style={{
                                    fontSize: 12,
                                    color: "#b8d9ff",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  风量
                                </Typography.Text>
                                <Typography.Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#69c0ff",
                                    textShadow:
                                      "0 0 10px rgba(105, 192, 255, 0.6)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  3920{" "}
                                  <span
                                    style={{ fontSize: 11, color: "#b8d9ff" }}
                                  >
                                    m3/s
                                  </span>
                                </Typography.Text>
                              </div>
                              <div
                                style={{
                                  background: "rgba(9, 37, 67, 0.3)",
                                  borderRadius: 4,
                                  padding: "2px 5px",
                                  border: "1px solid rgba(150, 205, 255, 0.2)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  minHeight: 0,
                                }}
                              >
                                <Typography.Text
                                  style={{
                                    fontSize: 12,
                                    color: "#b8d9ff",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  负压
                                </Typography.Text>
                                <Typography.Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#69c0ff",
                                    textShadow:
                                      "0 0 10px rgba(105, 192, 255, 0.6)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  2.92{" "}
                                  <span
                                    style={{ fontSize: 11, color: "#b8d9ff" }}
                                  >
                                    kPa
                                  </span>
                                </Typography.Text>
                              </div>
                              <div
                                style={{
                                  background: "rgba(9, 37, 67, 0.3)",
                                  borderRadius: 4,
                                  padding: "2px 5px",
                                  border: "1px solid rgba(150, 205, 255, 0.2)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  minHeight: 0,
                                }}
                              >
                                <Typography.Text
                                  style={{
                                    fontSize: 12,
                                    color: "#b8d9ff",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  电机功率
                                </Typography.Text>
                                <Typography.Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#69c0ff",
                                    textShadow:
                                      "0 0 10px rgba(105, 192, 255, 0.6)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  530{" "}
                                  <span
                                    style={{ fontSize: 11, color: "#b8d9ff" }}
                                  >
                                    kW
                                  </span>
                                </Typography.Text>
                              </div>
                              <div
                                style={{
                                  background: "rgba(9, 37, 67, 0.3)",
                                  borderRadius: 4,
                                  padding: "2px 5px",
                                  border: "1px solid rgba(150, 205, 255, 0.2)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  minHeight: 0,
                                }}
                              >
                                <Typography.Text
                                  style={{
                                    fontSize: 12,
                                    color: "#b8d9ff",
                                    fontWeight: 500,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  运行时长
                                </Typography.Text>
                                <Typography.Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#69c0ff",
                                    textShadow:
                                      "0 0 10px rgba(105, 192, 255, 0.6)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  68{" "}
                                  <span
                                    style={{ fontSize: 11, color: "#b8d9ff" }}
                                  >
                                    小时
                                  </span>
                                </Typography.Text>
                              </div>
                              <div
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(82, 196, 26, 0.15) 0%, rgba(82, 196, 26, 0.05) 100%)",
                                  borderRadius: 4,
                                  padding: "3px 5px",
                                  border: "1px solid rgba(82, 196, 26, 0.3)",
                                  minHeight: 0,
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: 1,
                                  }}
                                >
                                  <Typography.Text
                                    style={{
                                      fontSize: 12,
                                      color: "#b8d9ff",
                                      fontWeight: 500,
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    运行效率
                                  </Typography.Text>
                                  <Typography.Text
                                    style={{
                                      fontSize: 14,
                                      fontWeight: 700,
                                      color: "#52c41a",
                                      textShadow:
                                        "0 0 10px rgba(82, 196, 26, 0.6)",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    98%
                                  </Typography.Text>
                                </div>
                                <Progress
                                  percent={98}
                                  size="small"
                                  showInfo={false}
                                  strokeColor={{
                                    "0%": "#52c41a",
                                    "100%": "#73d13d",
                                  }}
                                  strokeWidth={3}
                                  trailColor="rgba(150, 205, 255, 0.2)"
                                />
                              </div>
                            </div>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
              </Card>

              {/* 关键用风点风量*/}
              <ChartPanel
                title={
                  <div className="home-sensor-card-title">
                    <IndustrialIcon name="airflow-point" size={18} />
                    <span>关键用风点风量</span>
                  </div>
                }
                option={keyAirflowOption}
                height="100%"
                className="home-transparent-card home-sensor-ratio-card home-left-sensor-card"
                extra={
                  <div className="home-airflow-legend">
                    <span className="home-airflow-chip home-airflow-chip--focus">
                      <span className="home-airflow-chip__label">指定巷道</span>
                      <span className="home-airflow-chip__value">
                        {keyAirflowPointData.length}
                      </span>
                    </span>
                    <span className="home-airflow-chip home-airflow-chip--pass">
                      达标 {keyAirflowPassCount}
                    </span>
                    <span className="home-airflow-chip home-airflow-chip--warn">
                      不足 {keyAirflowInsufficientCount}
                    </span>
                  </div>
                }
              />

              {/* 综合监测 */}
              <Card
                className="page-card home-transparent-card home-monitor-card home-left-monitor-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <IndustrialIcon name="monitor-grid" size={18} />
                    <span>综合监测</span>
                  </div>
                }
                style={{ minHeight: 0 }}
              >
                {/* 扫描线*/}
                <div className="scan-line" />

                {/* 四角装饰 */}
                <div className="corner-deco top-left" />
                <div className="corner-deco top-right" />
                <div className="corner-deco bottom-left" />
                <div className="corner-deco bottom-right" />

                {/* 数据流线条*/}
                <div className="data-stream stream-1" />
                <div className="data-stream stream-2" />
                <div className="data-stream stream-3" />

                <div className="home-monitor-grid">
                  <div className="home-monitor-item is-normal">
                    <div className="home-monitor-item__icon">
                      <IndustrialIcon name="safety-helmet" size={20} />
                    </div>
                    <div className="home-monitor-item__content">
                      <Typography.Text className="home-monitor-item__name">
                        安全监测
                      </Typography.Text>
                      <div className="home-monitor-item__value">
                        <strong>28</strong>
                        <span>/ 30</span>
                      </div>
                    </div>
                  </div>

                  <div className="home-monitor-item is-warn">
                    <div className="home-monitor-item__icon">
                      <IndustrialIcon name="coal-fire" size={20} />
                    </div>
                    <div className="home-monitor-item__content">
                      <Typography.Text className="home-monitor-item__name">
                        煤层自燃发火
                      </Typography.Text>
                      <div className="home-monitor-item__value">
                        <strong>15</strong>
                        <span>/ 16</span>
                      </div>
                    </div>
                  </div>

                  <div className="home-monitor-item is-info">
                    <div className="home-monitor-item__icon">
                      <IndustrialIcon name="battery-charger" size={20} />
                    </div>
                    <div className="home-monitor-item__content">
                      <Typography.Text className="home-monitor-item__name">
                        仪器充电管理
                      </Typography.Text>
                      <div className="home-monitor-item__value">
                        <strong>42</strong>
                        <span>/ 45</span>
                      </div>
                    </div>
                  </div>

                  <div className="home-monitor-item is-normal">
                    <div className="home-monitor-item__icon">
                      <IndustrialIcon name="anemometer" size={20} />
                    </div>
                    <div className="home-monitor-item__content">
                      <Typography.Text className="home-monitor-item__name">
                        精准测风
                      </Typography.Text>
                      <div className="home-monitor-item__value">
                        <strong>18</strong>
                        <span>/ 20</span>
                      </div>
                    </div>
                  </div>

                  <div className="home-monitor-item is-info">
                    <div className="home-monitor-item__icon">
                      <IndustrialIcon name="personnel-beacon" size={20} />
                    </div>
                    <div className="home-monitor-item__content">
                      <Typography.Text className="home-monitor-item__name">
                        人员定位
                      </Typography.Text>
                      <div className="home-monitor-item__value">
                        <strong>35</strong>
                        <span>/ 38</span>
                      </div>
                    </div>
                  </div>

                  <div className="home-monitor-item is-normal">
                    <div className="home-monitor-item__icon">
                      <IndustrialIcon name="dispatch-radio" size={20} />
                    </div>
                    <div className="home-monitor-item__content">
                      <Typography.Text className="home-monitor-item__name">
                        调度通信
                      </Typography.Text>
                      <div className="home-monitor-item__value">
                        <strong>22</strong>
                        <span>/ 24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Col>

          {/* 中栏 - 上侧留空显示3D模型 */}
          <Col
            xs={24}
            lg={{ flex: "1 1 auto" }}
            className="home-model-column"
          ></Col>

          {/* 右栏 */}
          <Col
            xs={24}
            lg={{ flex: "0 0 18.75%" }}
            className="home-side-column home-right-side-column"
          >
            <div className="home-right-column-stack">
              <div className="home-right-top-row">
                {/* 传感器 */}
                <Card
                  className="page-card home-transparent-card home-right-sensor-card"
                  size="small"
                  title={
                    <div className="home-right-sensor-card__title">
                      <IndustrialIcon name="sensor-node" size={18} />
                      <span>传感器</span>
                    </div>
                  }
                  extra={
                    <Typography.Text className="home-right-sensor-card__extra">
                      已选 {selectedSensorTypes.length} 类 / {selectedSensorCount} 台
                    </Typography.Text>
                  }
                  style={{ minHeight: 0, overflow: "hidden" }}
                >
                  {/* 扫描线*/}
                  <div className="scan-line" />

                  {/* 四角装饰 */}
                  <div className="corner-deco top-left" />
                  <div className="corner-deco top-right" />
                  <div className="corner-deco bottom-left" />
                  <div className="corner-deco bottom-right" />

                  <div className="home-right-sensor-select-all">
                    <Checkbox
                      checked={allSensorsChecked}
                      indeterminate={sensorIndeterminate}
                      onChange={(e) => handleSelectAllSensors(e.target.checked)}
                    >
                      全选
                    </Checkbox>
                  </div>

                  <div className="home-right-sensor-list">
                    {sensorTypeOptions.map((item) => {
                      const checked = selectedSensorTypes.includes(item.key);
                      return (
                        <div
                          key={item.key}
                          className={`home-right-sensor-item${checked ? " is-checked" : ""}`}
                        >
                          <Checkbox
                            checked={checked}
                            onChange={() => toggleSensorType(item.key)}
                          >
                            <span className="home-right-sensor-item__label">
                              {item.label}
                            </span>
                          </Checkbox>
                          <span className="home-right-sensor-item__count">
                            {item.count} 台
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Card>

              {/* 设备运行状态*/}
              <Card
                className="page-card home-transparent-card home-right-status-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <IndustrialIcon name="equipment-rack" size={18} />
                    <span>设备运行状态</span>
                  </div>
                }
                style={{ minHeight: 0, overflow: "hidden" }}
              >
                {/* 扫描线*/}
                <div className="scan-line" />

                {/* 四角装饰 */}
                <div className="corner-deco top-left" />
                <div className="corner-deco top-right" />
                <div className="corner-deco bottom-left" />
                <div className="corner-deco bottom-right" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    height: "100%",
                    overflow: "auto",
                  }}
                >
                  {/* 主扇运行 */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(82, 196, 26, 0.15) 0%, rgba(82, 196, 26, 0.08) 100%)",
                      border: "2px solid rgba(82, 196, 26, 0.4)",
                      borderRadius: 8,
                      padding: "3px 3px",
                      boxShadow:
                        "0 2px 12px rgba(82, 196, 26, 0.2), inset 0 1px 0 rgba(82, 196, 26, 0.1)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(82, 196, 26, 0.3), inset 0 1px 0 rgba(82, 196, 26, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 12px rgba(82, 196, 26, 0.2), inset 0 1px 0 rgba(82, 196, 26, 0.1)";
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(82, 196, 26, 0.25)",
                        border: "2px solid rgba(82, 196, 26, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 0 15px rgba(82, 196, 26, 0.4)",
                      }}
                    >
                      <IndustrialIcon name="fan-main" size={20} className="home-status-device-icon--normal" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 1,
                          gap: 4,
                        }}
                      >
                        <Typography.Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#e8f4ff",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          主通风机
                        </Typography.Text>
                        <div
                          style={{
                            padding: "2px 7px",
                            borderRadius: 4,
                            background: "rgba(82, 196, 26, 0.2)",
                            border: "1px solid rgba(82, 196, 26, 0.5)",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "#95de64",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          正常
                        </div>
                      </div>
                      <Typography.Text
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#52c41a",
                          textShadow: "0 0 10px rgba(82, 196, 26, 0.6)",
                          whiteSpace: "nowrap",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        2/2 在位（1运1备）
                      </Typography.Text>
                    </div>
                  </div>

                  {/* 局扇运行*/}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(250, 173, 20, 0.15) 0%, rgba(250, 173, 20, 0.08) 100%)",
                      border: "2px solid rgba(250, 173, 20, 0.4)",
                      borderRadius: 8,
                      padding: "8px 10px",
                      boxShadow:
                        "0 2px 12px rgba(250, 173, 20, 0.2), inset 0 1px 0 rgba(250, 173, 20, 0.1)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(250, 173, 20, 0.3), inset 0 1px 0 rgba(250, 173, 20, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 12px rgba(250, 173, 20, 0.2), inset 0 1px 0 rgba(250, 173, 20, 0.1)";
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(250, 173, 20, 0.25)",
                        border: "2px solid rgba(250, 173, 20, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 0 15px rgba(250, 173, 20, 0.4)",
                      }}
                    >
                      <IndustrialIcon name="fan-local" size={20} className="home-status-device-icon--warn" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 1,
                          gap: 4,
                        }}
                      >
                        <Typography.Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#e8f4ff",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          局部通风机
                        </Typography.Text>
                        <div
                          style={{
                            padding: "2px 7px",
                            borderRadius: 4,
                            background: "rgba(250, 173, 20, 0.2)",
                            border: "1px solid rgba(250, 173, 20, 0.5)",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "#ffc069",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          预警
                        </div>
                      </div>
                      <Typography.Text
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#faad14",
                          textShadow: "0 0 10px rgba(250, 173, 20, 0.6)",
                          whiteSpace: "nowrap",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        6/7 在线（1检修）
                      </Typography.Text>
                    </div>
                  </div>

                  {/* 风门 */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(89, 154, 221, 0.15) 0%, rgba(89, 154, 221, 0.08) 100%)",
                      border: "2px solid rgba(150, 205, 255, 0.4)",
                      borderRadius: 8,
                      padding: "8px 10px",
                      boxShadow:
                        "0 2px 12px rgba(89, 154, 221, 0.2), inset 0 1px 0 rgba(150, 205, 255, 0.1)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(89, 154, 221, 0.3), inset 0 1px 0 rgba(150, 205, 255, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 12px rgba(89, 154, 221, 0.2), inset 0 1px 0 rgba(150, 205, 255, 0.1)";
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(89, 154, 221, 0.25)",
                        border: "2px solid rgba(150, 205, 255, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 0 15px rgba(89, 154, 221, 0.4)",
                      }}
                    >
                      <IndustrialIcon name="vent-door" size={20} className="home-status-device-icon--info" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 1,
                          gap: 4,
                        }}
                      >
                        <Typography.Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#e8f4ff",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          风门
                        </Typography.Text>
                        <div
                          style={{
                            padding: "2px 7px",
                            borderRadius: 4,
                            background: "rgba(89, 154, 221, 0.2)",
                            border: "1px solid rgba(150, 205, 255, 0.5)",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "#69c0ff",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          正常
                        </div>
                      </div>
                      <Typography.Text
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#69c0ff",
                          textShadow: "0 0 10px rgba(105, 192, 255, 0.6)",
                          whiteSpace: "nowrap",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        14/14 可控
                      </Typography.Text>
                    </div>
                  </div>

                  {/* 风窗 */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(89, 154, 221, 0.15) 0%, rgba(89, 154, 221, 0.08) 100%)",
                      border: "2px solid rgba(150, 205, 255, 0.4)",
                      borderRadius: 8,
                      padding: "8px 10px",
                      boxShadow:
                        "0 2px 12px rgba(89, 154, 221, 0.2), inset 0 1px 0 rgba(150, 205, 255, 0.1)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(89, 154, 221, 0.3), inset 0 1px 0 rgba(150, 205, 255, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 12px rgba(89, 154, 221, 0.2), inset 0 1px 0 rgba(150, 205, 255, 0.1)";
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(89, 154, 221, 0.25)",
                        border: "2px solid rgba(150, 205, 255, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 0 15px rgba(89, 154, 221, 0.4)",
                      }}
                    >
                      <IndustrialIcon name="louver" size={20} className="home-status-device-icon--info" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 1,
                          gap: 4,
                        }}
                      >
                        <Typography.Text
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#e8f4ff",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          风窗
                        </Typography.Text>
                        <div
                          style={{
                            padding: "2px 7px",
                            borderRadius: 4,
                            background: "rgba(89, 154, 221, 0.2)",
                            border: "1px solid rgba(150, 205, 255, 0.5)",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "#69c0ff",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          正常
                        </div>
                      </div>
                      <Typography.Text
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#69c0ff",
                          textShadow: "0 0 10px rgba(105, 192, 255, 0.6)",
                          whiteSpace: "nowrap",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        3/3 可调
                      </Typography.Text>
                    </div>
                  </div>
                </div>
              </Card>
              </div>

              {/* 24h 总进/回风量趋势*/}
              <ChartPanel
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <IndustrialIcon name="airflow-trend" size={18} />
                    <span>24h 总进/回风量趋势</span>
                  </div>
                }
                option={inletReturnTrendOption}
                height="100%"
                className="home-transparent-card home-right-trend-card"
                extra={
                  <Typography.Text style={{ fontSize: 10, color: "rgba(173, 208, 239, 0.9)" }}>
                    差值 {latestAirDiff.toLocaleString()} m³/s
                  </Typography.Text>
                }
              />

              {/* 预警报警 */}
              <Card
                className="page-card home-transparent-card home-alert-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <IndustrialIcon name="emergency-siren" size={18} />
                    <span>预警报警</span>
                  </div>
                }
                extra={
                  <Typography.Text className="home-alert-extra">
                    当前 {alertSummary.total} 条
                  </Typography.Text>
                }
                style={{ minHeight: 0, overflow: "hidden" }}
              >
                {/* 扫描线*/}
                <div className="scan-line" />

                {/* 四角装饰 */}
                <div className="corner-deco top-left" />
                <div className="corner-deco top-right" />
                <div className="corner-deco bottom-left" />
                <div className="corner-deco bottom-right" />
                <div className="home-alert-summary">
                  <div className="home-alert-summary-item critical">
                    <span>严重</span>
                    <strong>{alertSummary.critical}</strong>
                  </div>
                  <div className="home-alert-summary-item alert">
                    <span>告警</span>
                    <strong>{alertSummary.alert}</strong>
                  </div>
                  <div className="home-alert-summary-item warning">
                    <span>预警</span>
                    <strong>{alertSummary.warning}</strong>
                  </div>
                </div>
                <div className="home-alert-list">
                  {mergedAlerts.length > 0 ? (
                    mergedAlerts.map((item) => (
                      <div
                        key={item.key}
                        className={`home-alert-item ${levelClassMap[item.level] ?? "normal"}`}
                      >
                        <div className="home-alert-item__head">
                          <span
                            className={`home-alert-dot ${levelClassMap[item.level] ?? "normal"}`}
                          />
                          <Typography.Text className="home-alert-item__title">
                            {item.title}
                          </Typography.Text>
                          <span
                            className={`home-alert-level ${levelClassMap[item.level] ?? "normal"}`}
                          >
                            {alertLabelMap[item.level] ?? "信息"}
                          </span>
                          <span className="home-alert-item__time">
                            {item.time}
                          </span>
                        </div>
                        <Typography.Text className="home-alert-item__meta">
                          {item.area} · {item.detail}
                        </Typography.Text>
                      </div>
                    ))
                  ) : (
                    <Typography.Text className="home-alert-empty">
                      当前无预警报警信息
                    </Typography.Text>
                  )}
                </div>
              </Card>
            </div>
          </Col>
        </Row>

        {/* 底部区域 */}
      </div>
    </div>
  );
}
