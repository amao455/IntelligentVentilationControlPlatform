import { useMemo, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Descriptions,
  Drawer,
  List,
  Progress,
  Row,
  Space,
  Tabs,
  Timeline,
  Typography,
  Statistic,
  Tag,
  Tree,
} from "antd";
import {
  LineChartOutlined,
  BarChartOutlined,
  PieChartOutlined,
  UnorderedListOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import { KpiCard } from "../../components/cards/KpiCard";
import { ChartPanel } from "../../components/charts/ChartPanel";
import { StatusTag } from "../../components/common/StatusTag";
import { IndustrialTable } from "../../components/tables/IndustrialTable";
import { TopologyPlaceholder } from "../../components/topology/TopologyPlaceholder";
import { createPageDataset } from "../../mock/mockData";
import {
  buildBarOption,
  buildLineOption,
  buildPieOption,
  buildGasBarOption,
  buildPersonnelBarOption,
  buildPersonnelOverviewOption,
} from "./chartOptions";
import { PageToolbar } from "./PageToolbar";

interface StandardIndustrialPageProps {
  moduleName: string;
  title: string;
  pageKey: string;
}

export function StandardIndustrialPage({
  moduleName,
  title,
  pageKey,
}: StandardIndustrialPageProps) {
  const dataset = useMemo(() => createPageDataset(pageKey), [pageKey]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState("airflow");
  const airflowSensorDeviceMap: Record<
    string,
    Array<{
      id: string;
      area: string;
      value: number;
      status: "normal" | "warning";
    }>
  > = {
    "wind-speed": [
      { id: "FS-01", area: "东翼回风巷", value: 3.8, status: "normal" },
      { id: "FS-03", area: "3105工作面进风口", value: 3.4, status: "normal" },
      { id: "FS-08", area: "主运输大巷", value: 2.9, status: "warning" },
      { id: "FS-11", area: "西翼联络巷", value: 3.2, status: "normal" },
      { id: "FS-16", area: "北二采区主巷", value: 2.7, status: "warning" },
      { id: "FS-21", area: "二水平皮带巷", value: 3.1, status: "normal" },
    ],
    "wind-pressure": [
      { id: "FP-02", area: "主扇进风口", value: 2056, status: "normal" },
      { id: "FP-04", area: "主扇出风口", value: 2148, status: "normal" },
      { id: "FP-07", area: "东翼回风巷", value: 1985, status: "warning" },
      { id: "FP-10", area: "3105工作面回风口", value: 2068, status: "normal" },
      { id: "FP-13", area: "西翼联络巷", value: 2012, status: "normal" },
      { id: "FP-17", area: "回风上山", value: 1960, status: "warning" },
    ],
  };
  const airflowSensorOptions = [
    { key: "wind-speed", label: "风速传感器", count: 26, unit: "m/s" },
    { key: "wind-pressure", label: "风压传感器", count: 18, unit: "Pa" },
  ];
  const allAirflowSensorDeviceKeys = airflowSensorOptions.flatMap((option) =>
    (airflowSensorDeviceMap[option.key] ?? []).map(
      (device) => `${option.key}|${device.id}`,
    ),
  );
  const [checkedAirflowTreeKeys, setCheckedAirflowTreeKeys] = useState<
    string[]
  >(allAirflowSensorDeviceKeys);
  const [expandedAirflowKeys, setExpandedAirflowKeys] = useState<string[]>([]);
  const checkedAirflowDeviceCount = checkedAirflowTreeKeys.filter((key) =>
    key.includes("|"),
  ).length;
  const airflowTreeAllChecked =
    checkedAirflowDeviceCount === allAirflowSensorDeviceKeys.length;
  const airflowTreeIndeterminate =
    checkedAirflowDeviceCount > 0 &&
    checkedAirflowDeviceCount < allAirflowSensorDeviceKeys.length;
  const airflowSensorTreeData = airflowSensorOptions.map((option) => ({
    title: (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: "#eaf5ff", fontSize: 12, fontWeight: 700 }}>
          {option.label}
        </span>
        <Tag
          color="processing"
          style={{ marginInlineEnd: 0, lineHeight: "16px", fontSize: 10 }}
        >
          {option.count} 台
        </Tag>
      </span>
    ),
    key: option.key,
    children: (airflowSensorDeviceMap[option.key] ?? []).map((device) => ({
      title: (
        <span style={{ fontSize: 11, color: "#d7ecff", fontWeight: 700 }}>
          {device.id}
        </span>
      ),
      key: `${option.key}|${device.id}`,
    })),
  }));
  const gasSensorDeviceMap: Record<string, Array<{ id: string }>> = {
    methane: [{ id: "CH4-01" }, { id: "CH4-03" }, { id: "CH4-08" }],
    co: [{ id: "CO-02" }, { id: "CO-07" }, { id: "CO-11" }],
    co2: [{ id: "CO2-04" }, { id: "CO2-09" }],
    o2: [{ id: "O2-05" }, { id: "O2-10" }],
    temperature: [{ id: "TMP-06" }, { id: "TMP-12" }, { id: "TMP-15" }],
    dust: [{ id: "DUST-13" }, { id: "DUST-18" }],
    smoke: [{ id: "SMK-14" }, { id: "SMK-19" }],
    h2: [{ id: "H2-16" }, { id: "H2-21" }],
  };
  const gasSensorOptions = [
    { key: "methane", label: "甲烷传感器" },
    { key: "co", label: "一氧化碳传感器" },
    { key: "co2", label: "二氧化碳传感器" },
    { key: "o2", label: "氧气传感器" },
    { key: "temperature", label: "温度传感器" },
    { key: "dust", label: "粉尘传感器" },
    { key: "smoke", label: "烟雾传感器" },
    { key: "h2", label: "氢气传感器" },
  ];
  const allGasSensorDeviceKeys = gasSensorOptions.flatMap((option) =>
    (gasSensorDeviceMap[option.key] ?? []).map(
      (device) => `${option.key}|${device.id}`,
    ),
  );
  const [checkedGasTreeKeys, setCheckedGasTreeKeys] = useState<string[]>(
    allGasSensorDeviceKeys,
  );
  const [expandedGasKeys, setExpandedGasKeys] = useState<string[]>([]);
  const checkedGasDeviceCount = checkedGasTreeKeys.filter((key) =>
    key.includes("|"),
  ).length;
  const gasTreeAllChecked =
    checkedGasDeviceCount === allGasSensorDeviceKeys.length;
  const gasTreeIndeterminate =
    checkedGasDeviceCount > 0 &&
    checkedGasDeviceCount < allGasSensorDeviceKeys.length;
  const gasSensorTreeData = gasSensorOptions.map((option) => ({
    title: (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: "#eaf5ff", fontSize: 12, fontWeight: 700 }}>
          {option.label}
        </span>
        <Tag
          color="processing"
          style={{ marginInlineEnd: 0, lineHeight: "16px", fontSize: 10 }}
        >
          {(gasSensorDeviceMap[option.key] ?? []).length} 台
        </Tag>
      </span>
    ),
    key: option.key,
    children: (gasSensorDeviceMap[option.key] ?? []).map((device) => ({
      title: (
        <span style={{ fontSize: 11, color: "#d7ecff", fontWeight: 700 }}>
          {device.id}
        </span>
      ),
      key: `${option.key}|${device.id}`,
    })),
  }));

  const showPointMap =
    pageKey.includes("point-map") || pageKey.includes("network-solving");
  const showDeviceTabs = pageKey.includes("device-status");
  const showSensorStats = pageKey.includes("sensor-health");
  const showRealtimeNav = pageKey.includes("realtime-overview");
  const showAirflowRealtime = pageKey.includes("airflow-realtime");
  const showGasRealtime = pageKey.includes("gas-realtime");
  const showPersonnelRealtime = pageKey.includes("personnel-realtime");

  return (
    <div
      className="page-wrapper"
      style={
        showAirflowRealtime || showGasRealtime || showPersonnelRealtime
          ? { padding: 0, height: "calc(100vh - 80px)", overflow: "hidden" }
          : {}
      }
    >
      {!showAirflowRealtime && !showGasRealtime && !showPersonnelRealtime && (
        <PageToolbar
          moduleName={moduleName}
          title={title}
          actions={dataset.actions}
        />
      )}

      {!showAirflowRealtime && !showGasRealtime && !showPersonnelRealtime && (
        <Row gutter={[12, 12]}>
          {dataset.kpis.slice(0, 6).map((item) => (
            <Col key={item.key} xs={24} sm={12} md={8} lg={8} xl={4}>
              <KpiCard item={item} />
            </Col>
          ))}
        </Row>
      )}

      {showAirflowRealtime || showGasRealtime || showPersonnelRealtime ? (
        <div
          style={{
            padding: "0",
            height: "calc(100vh - 80px)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {showPersonnelRealtime && (
            <style>{`
              @keyframes border-glow {
                0%, 100% {
                  box-shadow:
                    0 0 10px rgba(105, 192, 255, 0.3),
                    0 0 20px rgba(105, 192, 255, 0.2),
                    inset 0 0 10px rgba(105, 192, 255, 0.1);
                }
                50% {
                  box-shadow:
                    0 0 15px rgba(105, 192, 255, 0.5),
                    0 0 30px rgba(105, 192, 255, 0.3),
                    inset 0 0 15px rgba(105, 192, 255, 0.15);
                }
              }

              @keyframes corner-pulse {
                0%, 100% {
                  opacity: 0.6;
                }
                50% {
                  opacity: 1;
                }
              }

              .personnel-card {
                position: relative;
                border: 1px solid rgba(105, 192, 255, 0.3) !important;
                animation: border-glow 3s ease-in-out infinite;
                overflow: visible !important;
              }

              .personnel-card::before,
              .personnel-card::after {
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                border: 2px solid #69c0ff;
                animation: corner-pulse 2s ease-in-out infinite;
              }

              .personnel-card::before {
                top: -1px;
                left: -1px;
                border-right: none;
                border-bottom: none;
                box-shadow: -2px -2px 8px rgba(105, 192, 255, 0.4);
              }

              .personnel-card::after {
                bottom: -1px;
                right: -1px;
                border-left: none;
                border-top: none;
                box-shadow: 2px 2px 8px rgba(105, 192, 255, 0.4);
              }

              .personnel-card .ant-card-head {
                position: relative;
                border-bottom: 1px solid rgba(105, 192, 255, 0.2) !important;
                background: linear-gradient(90deg,
                  rgba(105, 192, 255, 0.05) 0%,
                  rgba(105, 192, 255, 0.1) 50%,
                  rgba(105, 192, 255, 0.05) 100%) !important;
              }

              .personnel-card .ant-card-head::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(90deg,
                  transparent 0%,
                  #69c0ff 50%,
                  transparent 100%);
                opacity: 0.6;
              }

              .personnel-detail-card {
                position: relative;
                border: 1px solid rgba(105, 192, 255, 0.25) !important;
                box-shadow:
                  0 0 8px rgba(105, 192, 255, 0.2),
                  inset 0 0 8px rgba(105, 192, 255, 0.08);
              }

              .personnel-detail-card::before {
                content: '';
                position: absolute;
                top: -1px;
                right: -1px;
                width: 20px;
                height: 20px;
                border-top: 2px solid #69c0ff;
                border-right: 2px solid #69c0ff;
                box-shadow: 2px -2px 8px rgba(105, 192, 255, 0.4);
                animation: corner-pulse 2s ease-in-out infinite 0.5s;
              }

              .personnel-detail-card::after {
                content: '';
                position: absolute;
                bottom: -1px;
                left: -1px;
                width: 20px;
                height: 20px;
                border-bottom: 2px solid #69c0ff;
                border-left: 2px solid #69c0ff;
                box-shadow: -2px 2px 8px rgba(105, 192, 255, 0.4);
                animation: corner-pulse 2s ease-in-out infinite 0.5s;
              }

              .personnel-detail-card .ant-card-head {
                border-bottom: 1px solid rgba(105, 192, 255, 0.2) !important;
                background: linear-gradient(90deg,
                  rgba(105, 192, 255, 0.05) 0%,
                  rgba(105, 192, 255, 0.08) 100%) !important;
              }
            `}</style>
          )}
          {/* 上栏 - 占 3/4 */}
          <div
            style={{
              flex: "3",
              minHeight: 0,
              display: "flex",
              gap: "16px",
              overflow: "hidden",
              padding: "12px",
            }}
          >
            {/* 左侧空白区域 - 显示三维模型 */}
            <div
              className="realtime-monitor-model-hit-area"
              style={{ flex: "1", minWidth: 0, position: "relative", pointerEvents: "none" }}
            >
              {showAirflowRealtime && (
                <Card
                  className="page-card home-transparent-card"
                  size="small"
                  title={
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <ControlOutlined
                        style={{ fontSize: 15, color: "#69c0ff" }}
                      />
                      <span>风流传感器选择</span>
                    </div>
                  }
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "min(260px, 100%)",
                    zIndex: 2,
                    pointerEvents: "auto",
                    overflow: "hidden",
                  }}
                  styles={{
                    body: {
                      padding: "7px 7px 6px",
                      maxHeight: "58vh",
                      overflow: "hidden",
                    },
                  }}
                >
                  <style>{`
                    .airflow-tree-select-all {
                      margin-bottom: 6px;
                      padding: 4px 6px;
                      border-radius: 6px;
                      border: 1px solid rgba(150, 205, 255, 0.24);
                      background: rgba(12, 35, 59, 0.48);
                    }
                    .airflow-tree-select-all .ant-checkbox-wrapper {
                      color: #dceeff !important;
                      font-size: 11px;
                      font-weight: 700;
                    }
                    .airflow-sensor-tree-wrap .ant-tree {
                      background: transparent !important;
                      color: #d7ecff !important;
                    }
                    .airflow-sensor-tree-wrap .ant-tree-node-content-wrapper {
                      border-radius: 6px;
                      padding: 1px 6px;
                      transition: all .2s ease;
                    }
                    .airflow-sensor-tree-wrap .ant-tree-node-content-wrapper:hover {
                      background: rgba(105, 192, 255, 0.16) !important;
                    }
                    .airflow-sensor-tree-wrap .ant-tree-node-selected {
                      background: rgba(64, 156, 255, 0.2) !important;
                      box-shadow: inset 0 0 0 1px rgba(145, 213, 255, 0.38);
                    }
                    .airflow-sensor-tree-wrap .ant-tree-title {
                      color: #dceeff !important;
                    }
                    .airflow-sensor-tree-wrap .ant-tree-switcher {
                      color: rgba(173, 221, 255, 0.78) !important;
                    }
                    .airflow-sensor-tree-wrap .ant-tree-checkbox-inner {
                      background: rgba(8, 28, 49, 0.88) !important;
                      border-color: rgba(133, 197, 255, 0.74) !important;
                      border-radius: 3px;
                    }
                    .airflow-sensor-tree-wrap .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
                      background: #52c41a !important;
                      border-color: #73d13d !important;
                      box-shadow: 0 0 8px rgba(115, 209, 61, 0.42);
                    }
                    .airflow-sensor-tree-wrap .ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after {
                      background: #95de64 !important;
                    }
                    .airflow-sensor-tree-wrap .ant-tree-list-holder::-webkit-scrollbar {
                      width: 6px;
                    }
                    .airflow-sensor-tree-wrap .ant-tree-list-holder::-webkit-scrollbar-thumb {
                      background: rgba(133, 197, 255, 0.35);
                      border-radius: 999px;
                    }
                  `}</style>
                  <div
                    className="airflow-sensor-tree-wrap"
                    style={{
                      height: "100%",
                      maxHeight: "calc(58vh - 62px)",
                      overflow: "auto",
                      borderRadius: 6,
                      border: "1px solid rgba(150, 205, 255, 0.24)",
                      padding: "6px 4px",
                    }}
                  >
                    <div className="airflow-tree-select-all">
                      <Checkbox
                        checked={airflowTreeAllChecked}
                        indeterminate={airflowTreeIndeterminate}
                        onChange={(e) => {
                          setCheckedAirflowTreeKeys(
                            e.target.checked ? allAirflowSensorDeviceKeys : [],
                          );
                        }}
                      >
                        全选
                      </Checkbox>
                    </div>
                    <Tree
                      className="airflow-sensor-tree"
                      showLine
                      blockNode
                      checkable
                      treeData={airflowSensorTreeData as any}
                      expandedKeys={expandedAirflowKeys}
                      checkedKeys={checkedAirflowTreeKeys}
                      onExpand={(keys) =>
                        setExpandedAirflowKeys(keys as string[])
                      }
                      onCheck={(checkedKeys) => {
                        const keys = Array.isArray(checkedKeys)
                          ? checkedKeys
                          : checkedKeys.checked;
                        setCheckedAirflowTreeKeys(keys as string[]);
                      }}
                    />
                  </div>
                </Card>
              )}

              {showGasRealtime && (
                <Card
                  className="page-card home-transparent-card"
                  size="small"
                  title={
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <ControlOutlined
                        style={{ fontSize: 15, color: "#69c0ff" }}
                      />
                      <span>气体传感器选择</span>
                    </div>
                  }
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "min(260px, 100%)",
                    zIndex: 2,
                    pointerEvents: "auto",
                    overflow: "hidden",
                  }}
                  styles={{
                    body: {
                      padding: "7px 7px 6px",
                      maxHeight: "58vh",
                      overflow: "hidden",
                    },
                  }}
                >
                  <style>{`
                    .gas-tree-select-all {
                      margin-bottom: 6px;
                      padding: 4px 6px;
                      border-radius: 6px;
                      border: 1px solid rgba(150, 205, 255, 0.24);
                      background: rgba(12, 35, 59, 0.48);
                    }
                    .gas-tree-select-all .ant-checkbox-wrapper {
                      color: #dceeff !important;
                      font-size: 11px;
                      font-weight: 700;
                    }
                    .gas-sensor-tree-wrap .ant-tree {
                      background: transparent !important;
                      color: #d7ecff !important;
                    }
                    .gas-sensor-tree-wrap .ant-tree-node-content-wrapper {
                      border-radius: 6px;
                      padding: 1px 6px;
                      transition: all .2s ease;
                    }
                    .gas-sensor-tree-wrap .ant-tree-node-content-wrapper:hover {
                      background: rgba(105, 192, 255, 0.16) !important;
                    }
                    .gas-sensor-tree-wrap .ant-tree-node-selected {
                      background: rgba(64, 156, 255, 0.2) !important;
                      box-shadow: inset 0 0 0 1px rgba(145, 213, 255, 0.38);
                    }
                    .gas-sensor-tree-wrap .ant-tree-title {
                      color: #dceeff !important;
                    }
                    .gas-sensor-tree-wrap .ant-tree-switcher {
                      color: rgba(173, 221, 255, 0.78) !important;
                    }
                    .gas-sensor-tree-wrap .ant-tree-checkbox-inner {
                      background: rgba(8, 28, 49, 0.88) !important;
                      border-color: rgba(133, 197, 255, 0.74) !important;
                      border-radius: 3px;
                    }
                    .gas-sensor-tree-wrap .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
                      background: #52c41a !important;
                      border-color: #73d13d !important;
                      box-shadow: 0 0 8px rgba(115, 209, 61, 0.42);
                    }
                    .gas-sensor-tree-wrap .ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after {
                      background: #95de64 !important;
                    }
                    .gas-sensor-tree-wrap .ant-tree-list-holder::-webkit-scrollbar {
                      width: 6px;
                    }
                    .gas-sensor-tree-wrap .ant-tree-list-holder::-webkit-scrollbar-thumb {
                      background: rgba(133, 197, 255, 0.35);
                      border-radius: 999px;
                    }
                  `}</style>
                  <div
                    className="gas-sensor-tree-wrap"
                    style={{
                      height: "100%",
                      maxHeight: "calc(58vh - 62px)",
                      overflow: "auto",
                      borderRadius: 6,
                      border: "1px solid rgba(150, 205, 255, 0.24)",
                      padding: "6px 4px",
                    }}
                  >
                    <div className="gas-tree-select-all">
                      <Checkbox
                        checked={gasTreeAllChecked}
                        indeterminate={gasTreeIndeterminate}
                        onChange={(e) => {
                          setCheckedGasTreeKeys(
                            e.target.checked ? allGasSensorDeviceKeys : [],
                          );
                        }}
                      >
                        全选
                      </Checkbox>
                    </div>
                    <Tree
                      className="gas-sensor-tree"
                      showLine
                      blockNode
                      checkable
                      treeData={gasSensorTreeData as any}
                      expandedKeys={expandedGasKeys}
                      checkedKeys={checkedGasTreeKeys}
                      onExpand={(keys) => setExpandedGasKeys(keys as string[])}
                      onCheck={(checkedKeys) => {
                        const keys = Array.isArray(checkedKeys)
                          ? checkedKeys
                          : checkedKeys.checked;
                        setCheckedGasTreeKeys(keys as string[]);
                      }}
                    />
                  </div>
                </Card>
              )}
            </div>

            {/* 右侧图表区域 */}
            <div
              style={{
                flex: "0 0 18.75%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minHeight: 0,
                overflow: "hidden",
              }}
            >
              <Card
                className={`page-card home-transparent-card${showPersonnelRealtime ? " personnel-card" : ""}`}
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <LineChartOutlined
                      style={{ fontSize: 15, color: "#69c0ff" }}
                    />
                    <span>
                      {showAirflowRealtime
                        ? "风流实时趋势"
                        : showGasRealtime
                          ? "瓦斯浓度趋势"
                          : "人员总览"}
                    </span>
                  </div>
                }
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
                styles={{
                  body: {
                    flex: 1,
                    minHeight: 0,
                    overflow: "hidden",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <div style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
                  <ChartPanel
                    option={
                      showPersonnelRealtime
                        ? buildPersonnelOverviewOption()
                        : buildLineOption(
                            dataset.lineLabels,
                            dataset.lineSeries,
                            showAirflowRealtime ? "风量" : "瓦斯浓度",
                          )
                    }
                    height="100%"
                    noCard
                  />
                </div>
              </Card>
              <Card
                className={`page-card home-transparent-card${showPersonnelRealtime ? " personnel-card" : ""}`}
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <BarChartOutlined
                      style={{ fontSize: 15, color: "#95de64" }}
                    />
                    <span>
                      {showAirflowRealtime
                        ? "各区域风速分布"
                        : showGasRealtime
                          ? "各区域气体浓度"
                          : "区域人员分布"}
                    </span>
                  </div>
                }
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
                styles={{
                  body: {
                    flex: 1,
                    minHeight: 0,
                    overflow: "hidden",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <div style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
                  <ChartPanel
                    option={
                      showGasRealtime
                        ? buildGasBarOption()
                        : showPersonnelRealtime
                          ? buildPersonnelBarOption()
                          : buildBarOption(
                              dataset.barCategories,
                              dataset.barSeries,
                              "风速",
                            )
                    }
                    height="100%"
                    noCard
                  />
                </div>
              </Card>
              <Card
                className={`page-card home-transparent-card${showPersonnelRealtime ? " personnel-card" : ""}`}
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <PieChartOutlined
                      style={{ fontSize: 15, color: "#ffc069" }}
                    />
                    <span>
                      {showAirflowRealtime
                        ? "风压分布"
                        : showGasRealtime
                          ? "环境参数达标率"
                          : "最近告警"}
                    </span>
                  </div>
                }
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
                styles={{
                  body: {
                    flex: 1,
                    minHeight: 0,
                    overflow: "auto",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  },
                }}
              >
                <style>{`
                  .alert-timeline .ant-timeline-item-tail {
                    border-left-width: 2px;
                  }
                  .alert-timeline .ant-timeline-item-head {
                    width: 10px;
                    height: 10px;
                  }
                  .page-card.home-transparent-card .ant-card-body::-webkit-scrollbar {
                    display: none;
                  }
                  .alert-card-item {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
                    border-radius: 8px;
                    padding: 10px 12px;
                    border: 1px solid rgba(140, 164, 190, 0.15);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                  }
                  .alert-card-item::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    transition: all 0.3s ease;
                  }
                  .alert-card-item.critical::before {
                    background: linear-gradient(180deg, #ff4d4f 0%, #ff7875 100%);
                    box-shadow: 0 0 8px rgba(255, 77, 79, 0.6);
                  }
                  .alert-card-item.warning::before {
                    background: linear-gradient(180deg, #fa8c16 0%, #ffc069 100%);
                    box-shadow: 0 0 8px rgba(250, 140, 22, 0.6);
                  }
                  .alert-card-item:hover {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%);
                    border-color: rgba(140, 164, 190, 0.25);
                    transform: translateX(2px);
                  }
                  .alert-badge {
                    display: inline-block;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 600;
                    margin-left: 8px;
                  }
                  .alert-badge.critical {
                    background: linear-gradient(135deg, rgba(255, 77, 79, 0.25) 0%, rgba(255, 77, 79, 0.15) 100%);
                    border: 1px solid rgba(255, 77, 79, 0.5);
                    color: #ff7875;
                    box-shadow: 0 0 6px rgba(255, 77, 79, 0.3);
                  }
                  .alert-badge.warning {
                    background: linear-gradient(135deg, rgba(250, 140, 22, 0.2) 0%, rgba(250, 140, 22, 0.12) 100%);
                    border: 1px solid rgba(250, 140, 22, 0.5);
                    color: #ffc069;
                    box-shadow: 0 0 6px rgba(250, 140, 22, 0.3);
                  }
                `}</style>
                {showAirflowRealtime ? (
                  <div className="realtime-context-panel realtime-context-panel--pressure">
                    {[
                      { area: "东翼回风巷", point: "FP-07", pressure: "1,985 Pa", diff: "-7 Pa", status: "低压预警", level: "warning" },
                      { area: "主运输大巷", point: "FP-11", pressure: "2,016 Pa", diff: "+4 Pa", status: "稳定", level: "normal" },
                      { area: "3105工作面", point: "FP-16", pressure: "2,068 Pa", diff: "+12 Pa", status: "稳定", level: "normal" },
                      { area: "回风上山", point: "FP-22", pressure: "1,960 Pa", diff: "-18 Pa", status: "需复核", level: "warning" },
                    ].map((item) => (
                      <div key={item.point} className={`realtime-context-item ${item.level}`}>
                        <div className="realtime-context-item__head">
                          <Typography.Text className="realtime-context-item__area">{item.area}</Typography.Text>
                          <span className={`realtime-context-badge ${item.level}`}>{item.status}</span>
                        </div>
                        <div className="realtime-context-metrics">
                          <span><b>{item.pressure}</b><em>当前风压</em></span>
                          <span><b>{item.diff}</b><em>较均值偏差</em></span>
                          <span><b>{item.point}</b><em>监测点</em></span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : showGasRealtime ? (
                  <div className="realtime-context-panel realtime-context-panel--gas">
                    {[
                      { name: "甲烷 CH4", value: 96, current: "0.42%", limit: "< 1.00%", status: "达标", level: "normal" },
                      { name: "一氧化碳 CO", value: 92, current: "18 ppm", limit: "< 24 ppm", status: "达标", level: "normal" },
                      { name: "氧气 O2", value: 88, current: "20.1%", limit: "≥ 19.5%", status: "达标", level: "normal" },
                      { name: "粉尘浓度", value: 76, current: "8.6 mg/m³", limit: "< 10 mg/m³", status: "临界", level: "warning" },
                    ].map((item) => (
                      <div key={item.name} className={`realtime-context-item ${item.level}`}>
                        <div className="realtime-context-item__head">
                          <Typography.Text className="realtime-context-item__area">{item.name}</Typography.Text>
                          <span className={`realtime-context-badge ${item.level}`}>{item.status}</span>
                        </div>
                        <Progress
                          percent={item.value}
                          size="small"
                          showInfo={false}
                          strokeColor={item.level === "warning" ? "#ffb84d" : "#21d6c6"}
                          trailColor="rgba(83, 135, 137, 0.24)"
                        />
                        <div className="realtime-context-metrics">
                          <span><b>{item.current}</b><em>当前值</em></span>
                          <span><b>{item.limit}</b><em>控制限</em></span>
                          <span><b>{item.value}%</b><em>达标率</em></span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Timeline
                    className="alert-timeline"
                    style={{ padding: "12px 0" }}
                    items={[
                      {
                        color: "red",
                        dot: (
                          <div
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              background: "#ff4d4f",
                              boxShadow:
                                "0 0 0 3px rgba(255, 77, 79, 0.2), 0 0 8px rgba(255, 77, 79, 0.6)",
                            }}
                          />
                        ),
                        children: (
                          <div className="alert-card-item critical">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: 6,
                              }}
                            >
                              <Typography.Text
                                style={{ fontSize: 12, color: "#8ca4be" }}
                              >
                                2026-04-07 14:22
                              </Typography.Text>
                              <span className="alert-badge critical">危急</span>
                            </div>
                            <Typography.Text
                              strong
                              style={{
                                fontSize: 14,
                                color: "#ff7875",
                                display: "block",
                                marginBottom: 6,
                              }}
                            >
                              人员 P-012 离线超时
                            </Typography.Text>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                              }}
                            >
                              <Typography.Text
                                style={{ fontSize: 12, color: "#6b8199" }}
                              >
                                位置：3105工作面
                              </Typography.Text>
                              <Typography.Text
                                style={{ fontSize: 12, color: "#6b8199" }}
                              >
                                离线 15 分钟
                              </Typography.Text>
                            </div>
                          </div>
                        ),
                      },
                      {
                        color: "orange",
                        dot: (
                          <div
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              background: "#fa8c16",
                              boxShadow:
                                "0 0 0 3px rgba(250, 140, 22, 0.2), 0 0 8px rgba(250, 140, 22, 0.6)",
                            }}
                          />
                        ),
                        children: (
                          <div className="alert-card-item warning">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: 6,
                              }}
                            >
                              <Typography.Text
                                style={{ fontSize: 12, color: "#8ca4be" }}
                              >
                                2026-04-07 13:15
                              </Typography.Text>
                              <span className="alert-badge warning">警告</span>
                            </div>
                            <Typography.Text
                              strong
                              style={{
                                fontSize: 14,
                                color: "#ffc069",
                                display: "block",
                                marginBottom: 6,
                              }}
                            >
                              人员 P-008 进入禁区
                            </Typography.Text>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                              }}
                            >
                              <Typography.Text
                                style={{ fontSize: 12, color: "#6b8199" }}
                              >
                                位置：西翼联络巷
                              </Typography.Text>
                              <Typography.Text
                                style={{ fontSize: 12, color: "#6b8199" }}
                              >
                                未授权区域
                              </Typography.Text>
                            </div>
                          </div>
                        ),
                      },
                      {
                        color: "orange",
                        dot: (
                          <div
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              background: "#fa8c16",
                              boxShadow:
                                "0 0 0 3px rgba(250, 140, 22, 0.2), 0 0 8px rgba(250, 140, 22, 0.6)",
                            }}
                          />
                        ),
                        children: (
                          <div className="alert-card-item warning">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: 6,
                              }}
                            >
                              <Typography.Text
                                style={{ fontSize: 12, color: "#8ca4be" }}
                              >
                                2026-04-07 12:08
                              </Typography.Text>
                              <span className="alert-badge warning">警告</span>
                            </div>
                            <Typography.Text
                              strong
                              style={{
                                fontSize: 14,
                                color: "#ffc069",
                                display: "block",
                                marginBottom: 6,
                              }}
                            >
                              人员 P-015 心率异常
                            </Typography.Text>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                              }}
                            >
                              <Typography.Text
                                style={{ fontSize: 12, color: "#6b8199" }}
                              >
                                心率 128 bpm
                              </Typography.Text>
                              <Typography.Text
                                style={{ fontSize: 12, color: "#6b8199" }}
                              >
                                超出正常范围
                              </Typography.Text>
                            </div>
                          </div>
                        ),
                      },
                    ]}
                  />
                )}
              </Card>
            </div>
          </div>

          {/* 下栏 - 占 1/4 */}
          <div
            style={{
              flex: "1",
              minHeight: 0,
              overflow: "hidden",
              padding: "0 12px 12px 12px",
            }}
          >
            <Card
              className={`page-card home-transparent-card airflow-detail-card${showPersonnelRealtime ? " personnel-detail-card" : ""}`}
              size="small"
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <UnorderedListOutlined
                    style={{ fontSize: 15, color: "#9cd0ff" }}
                  />
                  <span>
                    {showAirflowRealtime
                      ? "风流监测点详情"
                      : showGasRealtime
                        ? "气体监测点详情"
                        : "人员位置与状态"}
                  </span>
                </div>
              }
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                maxHeight: "100%",
              }}
              styles={{
                header: {
                  flexShrink: 0,
                  minHeight: 0,
                  padding: "8px 12px",
                },
                body: {
                  flex: 1,
                  minHeight: 0,
                  overflow: "hidden",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            >
              <style>{`
                .airflow-detail-card {
                  overflow: hidden !important;
                  max-height: 100% !important;
                }
                .airflow-detail-card .ant-card-head {
                  flex-shrink: 0 !important;
                  min-height: 0 !important;
                  padding: 8px 12px !important;
                }
                .airflow-detail-card .ant-card-body {
                  scrollbar-width: none;
                  -ms-overflow-style: none;
                  overflow: hidden !important;
                  flex: 1 !important;
                  min-height: 0 !important;
                  padding: 8px !important;
                  display: flex;
                  flex-direction: column;
                }
                .airflow-detail-card .ant-card-body::-webkit-scrollbar {
                  display: none;
                }
                .airflow-detail-card .ant-table-wrapper {
                  flex: 1;
                  min-height: 0;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                }
                .airflow-detail-card .ant-table {
                  flex: 1;
                  min-height: 0;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                }
                .airflow-detail-card .ant-table-container {
                  flex: 1;
                  min-height: 0;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                }
                .airflow-detail-card .ant-table-header {
                  flex-shrink: 0;
                  overflow: hidden;
                }
                .airflow-detail-card .ant-table-body {
                  flex: 1;
                  min-height: 0;
                  overflow-y: auto;
                  overflow-x: hidden;
                  scrollbar-width: none;
                  -ms-overflow-style: none;
                }
                .airflow-detail-card .ant-table-body::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <IndustrialTable rows={dataset.tableRows} title="" />
            </Card>
          </div>
        </div>
      ) : showPersonnelRealtime ? (
        <Row gutter={[16, 16]}>
          <Col xs={24} xl={8}>
            <Card
              className="page-card"
              size="small"
              title="人员分布统计"
              style={{ height: "100%" }}
            >
              <Space direction="vertical" style={{ width: "100%" }} size={16}>
                <Statistic title="总人数" value={24} suffix="人" />
                <Statistic title="在线率" value={95.8} suffix="%" />
                <Statistic title="异常人数" value={0} suffix="人" />
              </Space>
            </Card>
          </Col>
          <Col xs={24} xl={8}>
            <Card
              className="page-card"
              size="small"
              title="设备状态"
              style={{ height: "100%" }}
            >
              <Space direction="vertical" style={{ width: "100%" }} size={12}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography.Text>在线</Typography.Text>
                  <Tag color="green">23</Tag>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography.Text>离线</Typography.Text>
                  <Tag color="red">1</Tag>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography.Text>异常</Typography.Text>
                  <Tag color="orange">0</Tag>
                </div>
              </Space>
            </Card>
          </Col>
          <Col xs={24} xl={8}>
            <Card
              className="page-card"
              size="small"
              title="最近告警"
              style={{ height: "100%" }}
            >
              <Timeline
                items={[
                  {
                    children: (
                      <Typography.Text>
                        2026-04-02 14:22 - 人员 P-012 离线
                      </Typography.Text>
                    ),
                  },
                  {
                    children: (
                      <Typography.Text>
                        2026-04-02 13:15 - 人员 P-008 进入禁区
                      </Typography.Text>
                    ),
                  },
                  {
                    children: (
                      <Typography.Text>
                        2026-04-02 12:08 - 人员 P-015 心率异常
                      </Typography.Text>
                    ),
                  },
                ]}
              />
            </Card>
          </Col>
          <Col xs={24}>
            <Card className="page-card" size="small" title="人员位置与状态">
              <IndustrialTable rows={dataset.tableRows} title="人员监测数据" />
            </Card>
          </Col>
        </Row>
      ) : showRealtimeNav ? (
        <Row gutter={[12, 12]}>
          {/* 左侧导航栏 */}
          <Col xs={24} lg={5}>
            <Space direction="vertical" style={{ width: "100%" }} size={12}>
              {/* 风流实时监测 */}
              <Card
                className="page-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <span>风流实时监测</span>
                  </div>
                }
                style={{
                  cursor: "pointer",
                  border:
                    activeNavTab === "airflow"
                      ? "2px solid #1890ff"
                      : undefined,
                  background:
                    activeNavTab === "airflow"
                      ? "rgba(24, 144, 255, 0.05)"
                      : undefined,
                }}
                onClick={() => setActiveNavTab("airflow")}
              >
                <Space direction="vertical" size={8} style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>主风道风速</Typography.Text>
                    <Typography.Text strong style={{ color: "#1890ff" }}>
                      3.8 m/s
                    </Typography.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>总风量</Typography.Text>
                    <Typography.Text strong style={{ color: "#52c41a" }}>
                      9250 m³/s
                    </Typography.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>负压值</Typography.Text>
                    <Typography.Text strong style={{ color: "#faad14" }}>
                      2086 Pa
                    </Typography.Text>
                  </div>
                  <Progress percent={92} size="small" showInfo={false} />
                  <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                    风流稳定性: 92%
                  </Typography.Text>
                </Space>
              </Card>

              {/* 气体实时监测 */}
              <Card
                className="page-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <span>气体实时监测</span>
                  </div>
                }
                style={{
                  cursor: "pointer",
                  border:
                    activeNavTab === "gas" ? "2px solid #1890ff" : undefined,
                  background:
                    activeNavTab === "gas"
                      ? "rgba(24, 144, 255, 0.05)"
                      : undefined,
                }}
                onClick={() => setActiveNavTab("gas")}
              >
                <Space direction="vertical" size={8} style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>瓦斯浓度</Typography.Text>
                    <Typography.Text strong style={{ color: "#52c41a" }}>
                      0.42%
                    </Typography.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>二氧化碳</Typography.Text>
                    <Typography.Text strong style={{ color: "#1890ff" }}>
                      0.18%
                    </Typography.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>一氧化碳</Typography.Text>
                    <Typography.Text strong style={{ color: "#52c41a" }}>
                      0.00%
                    </Typography.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>温度</Typography.Text>
                    <Typography.Text strong style={{ color: "#faad14" }}>
                      24.5°C
                    </Typography.Text>
                  </div>
                  <Tag color="green">安全</Tag>
                </Space>
              </Card>

              {/* 人员实时监测 */}
              <Card
                className="page-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <span>人员实时监测</span>
                  </div>
                }
                style={{
                  cursor: "pointer",
                  border:
                    activeNavTab === "personnel"
                      ? "2px solid #1890ff"
                      : undefined,
                  background:
                    activeNavTab === "personnel"
                      ? "rgba(24, 144, 255, 0.05)"
                      : undefined,
                }}
                onClick={() => setActiveNavTab("personnel")}
              >
                <Space direction="vertical" size={8} style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>井下人数</Typography.Text>
                    <Typography.Text strong style={{ color: "#1890ff" }}>
                      24 人
                    </Typography.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>在线设备</Typography.Text>
                    <Typography.Text strong style={{ color: "#52c41a" }}>
                      23 个
                    </Typography.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>离线设备</Typography.Text>
                    <Typography.Text strong style={{ color: "#ff7875" }}>
                      1 个
                    </Typography.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text>异常告警</Typography.Text>
                    <Typography.Text strong style={{ color: "#faad14" }}>
                      0 条
                    </Typography.Text>
                  </div>
                  <Tag color="blue">正常</Tag>
                </Space>
              </Card>
            </Space>
          </Col>

          {/* 主要内容区域 */}
          <Col xs={24} lg={19}>
            {activeNavTab === "airflow" && (
              <Row gutter={[12, 12]}>
                <Col xs={24} lg={12}>
                  <ChartPanel
                    title="风流实时趋势"
                    option={buildLineOption(
                      dataset.lineLabels,
                      dataset.lineSeries,
                      "风量",
                    )}
                  />
                </Col>
                <Col xs={24} lg={12}>
                  <ChartPanel
                    title="各区域风速分布"
                    option={buildBarOption(
                      dataset.barCategories,
                      dataset.barSeries,
                      "风速",
                    )}
                  />
                </Col>
                <Col xs={24}>
                  <Card
                    className="page-card"
                    size="small"
                    title="风流监测点详情"
                  >
                    <IndustrialTable
                      rows={dataset.tableRows}
                      title="风流监测数据"
                    />
                  </Card>
                </Col>
              </Row>
            )}

            {activeNavTab === "gas" && (
              <Row gutter={[12, 12]}>
                <Col xs={24} lg={12}>
                  <ChartPanel
                    title="瓦斯浓度趋势"
                    option={buildLineOption(
                      dataset.lineLabels,
                      dataset.lineSeries,
                      "瓦斯浓度",
                    )}
                  />
                </Col>
                <Col xs={24} lg={12}>
                  <ChartPanel
                    title="气体成分占比"
                    option={buildPieOption(dataset.pieSeries)}
                    height={260}
                  />
                </Col>
                <Col xs={24}>
                  <Card
                    className="page-card"
                    size="small"
                    title="气体监测点详情"
                  >
                    <IndustrialTable
                      rows={dataset.tableRows}
                      title="气体监测数据"
                    />
                  </Card>
                </Col>
              </Row>
            )}

            {activeNavTab === "personnel" && (
              <Row gutter={[12, 12]}>
                <Col xs={24} lg={8}>
                  <Card className="page-card" size="small" title="人员分布统计">
                    <Space direction="vertical" style={{ width: "100%" }}>
                      <Statistic title="总人数" value={24} suffix="人" />
                      <Statistic title="在线率" value={95.8} suffix="%" />
                      <Statistic title="异常人数" value={0} suffix="人" />
                    </Space>
                  </Card>
                </Col>
                <Col xs={24} lg={8}>
                  <Card className="page-card" size="small" title="设备状态">
                    <Space direction="vertical" style={{ width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography.Text>在线</Typography.Text>
                        <Tag color="green">23</Tag>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography.Text>离线</Typography.Text>
                        <Tag color="red">1</Tag>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography.Text>异常</Typography.Text>
                        <Tag color="orange">0</Tag>
                      </div>
                    </Space>
                  </Card>
                </Col>
                <Col xs={24} lg={8}>
                  <Card className="page-card" size="small" title="最近告警">
                    <Timeline
                      items={[
                        {
                          children: (
                            <Typography.Text>
                              2026-04-02 14:22 - 人员 P-012 离线
                            </Typography.Text>
                          ),
                        },
                        {
                          children: (
                            <Typography.Text>
                              2026-04-02 13:15 - 人员 P-008 进入禁区
                            </Typography.Text>
                          ),
                        },
                        {
                          children: (
                            <Typography.Text>
                              2026-04-02 12:08 - 人员 P-015 心率异常
                            </Typography.Text>
                          ),
                        },
                      ]}
                    />
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card
                    className="page-card"
                    size="small"
                    title="人员位置与状态"
                  >
                    <IndustrialTable
                      rows={dataset.tableRows}
                      title="人员监测数据"
                    />
                  </Card>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      ) : (
        <>
          {showDeviceTabs && (
            <Card className="page-card" size="small" title="设备类别与工况">
              <Tabs
                items={[
                  {
                    key: "main-fan",
                    label: "主扇",
                    children: (
                      <Typography.Text>
                        主扇 F1/F2 当前负压稳定，转速波动 ≤ 2.1%
                      </Typography.Text>
                    ),
                  },
                  {
                    key: "local-fan",
                    label: "局扇",
                    children: (
                      <Typography.Text>
                        局扇 J3 处于运行状态，J7 处于待命状态
                      </Typography.Text>
                    ),
                  },
                  {
                    key: "door",
                    label: "风门",
                    children: (
                      <Typography.Text>
                        风门 D12 执行完毕，D18 联锁待解锁
                      </Typography.Text>
                    ),
                  },
                  {
                    key: "window",
                    label: "风窗",
                    children: (
                      <Typography.Text>
                        风窗 W08 开度 62%，W14 开度 48%
                      </Typography.Text>
                    ),
                  },
                ]}
              />
              <Button type="primary" onClick={() => setDrawerOpen(true)}>
                单设备详情
              </Button>
            </Card>
          )}

          {showPointMap ? (
            <Row gutter={[12, 12]}>
              <Col span={5}>
                <Card
                  className="page-card"
                  size="small"
                  title="筛选区"
                  style={{ height: 360 }}
                >
                  <List
                    size="small"
                    dataSource={dataset.riskRanking}
                    renderItem={(item) => (
                      <List.Item>
                        <Space
                          style={{
                            width: "100%",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography.Text>{item.area}</Typography.Text>
                          <StatusTag status={item.level} />
                        </Space>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
              <Col span={13}>
                <Card
                  className="page-card"
                  size="small"
                  title="监测点平面分布 / 风网拓扑"
                >
                  <TopologyPlaceholder
                    title="监测点空间分布"
                    subtitle="展示测点位置、风流方向与关键告警点位"
                    height={320}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  className="page-card"
                  size="small"
                  title="点位详情"
                  style={{ height: 360 }}
                >
                  <Descriptions size="small" column={1}>
                    <Descriptions.Item label="点位">S-201</Descriptions.Item>
                    <Descriptions.Item label="区域">
                      东翼回风巷
                    </Descriptions.Item>
                    <Descriptions.Item label="风速">3.8 m/s</Descriptions.Item>
                    <Descriptions.Item label="瓦斯">0.42 %</Descriptions.Item>
                    <Descriptions.Item label="状态">
                      <StatusTag status="warning" />
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </Col>
            </Row>
          ) : (
            <Row gutter={[12, 12]}>
              <Col xs={24} lg={10}>
                <ChartPanel
                  title="实时趋势"
                  option={buildLineOption(
                    dataset.lineLabels,
                    dataset.lineSeries,
                    "风量",
                  )}
                />
              </Col>
              <Col xs={24} lg={8}>
                <ChartPanel
                  title="区域达标率"
                  option={buildBarOption(
                    dataset.barCategories,
                    dataset.barSeries,
                    "达标率",
                  )}
                />
              </Col>
              <Col xs={24} lg={6}>
                <ChartPanel
                  title="状态占比"
                  option={buildPieOption(dataset.pieSeries)}
                  height={260}
                />
              </Col>
            </Row>
          )}

          {showSensorStats && (
            <Row gutter={[12, 12]}>
              <Col span={8}>
                <Card className="page-card" size="small" title="在线率统计">
                  <Progress percent={96} status="active" />
                  <Typography.Text type="secondary">
                    离线 4 个，异常 3 个，通信时延均值 112ms
                  </Typography.Text>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="page-card" size="small" title="最近异常时间">
                  <Typography.Title level={5}>
                    2026-04-01 14:22
                  </Typography.Title>
                  <Typography.Text type="secondary">
                    传感器 S-086 通信抖动，已自动恢复
                  </Typography.Text>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="page-card" size="small" title="维护建议">
                  <List
                    size="small"
                    dataSource={[
                      "优先巡检东翼回风巷传感器",
                      "复核 S-201 标定系数",
                      "检查北二采区交换机链路",
                    ]}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Card>
              </Col>
            </Row>
          )}

          <Row gutter={[12, 12]}>
            <Col xs={24} lg={16}>
              <Card className="page-card" size="small" title="明细数据表">
                <IndustrialTable
                  rows={dataset.tableRows}
                  title="设备/测点状态明细"
                />
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card
                className="page-card"
                size="small"
                title="执行与告警时间轴"
                style={{ height: 360, overflowY: "auto" }}
              >
                <Timeline
                  items={dataset.logs.map((log) => ({
                    color:
                      log.level === "alert" || log.level === "critical"
                        ? "red"
                        : log.level === "warning"
                          ? "orange"
                          : "blue",
                    children: (
                      <Space direction="vertical" size={0}>
                        <Typography.Text>{log.message}</Typography.Text>
                        <Typography.Text
                          type="secondary"
                          style={{ fontSize: 12 }}
                        >
                          {log.time} / {log.actor}
                        </Typography.Text>
                      </Space>
                    ),
                  }))}
                />
              </Card>
            </Col>
          </Row>
        </>
      )}

      <Drawer
        open={drawerOpen}
        width={420}
        onClose={() => setDrawerOpen(false)}
        title="设备详情 - 主扇 F1"
      >
        <Descriptions column={1} size="small" bordered>
          <Descriptions.Item label="设备编号">F1-001</Descriptions.Item>
          <Descriptions.Item label="设备类型">主扇</Descriptions.Item>
          <Descriptions.Item label="运行状态">
            <StatusTag status="running" />
          </Descriptions.Item>
          <Descriptions.Item label="当前负压">2086 Pa</Descriptions.Item>
          <Descriptions.Item label="风量">9250 m³/s</Descriptions.Item>
          <Descriptions.Item label="联锁状态">已接入联锁</Descriptions.Item>
          <Descriptions.Item label="最近维护">2026-03-29</Descriptions.Item>
        </Descriptions>
      </Drawer>
    </div>
  );
}
