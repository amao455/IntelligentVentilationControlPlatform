import { lazy, Suspense, useEffect, useState } from "react";
import {
  Card,
  Col,
  List,
  Progress,
  Row,
  Space,
  Table,
  Tabs,
  Tag,
  Timeline,
  Typography,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  ThunderboltOutlined,
  CheckCircleOutlined,
  PieChartOutlined,
  WarningOutlined,
  LineChartOutlined,
  ClockCircleOutlined,
  DesktopOutlined,
  DashboardOutlined,
  ApiOutlined,
  GatewayOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import { KpiCard } from "../../components/cards/KpiCard";
import { ChartPanel } from "../../components/charts/ChartPanel";
import { StatusTag } from "../../components/common/StatusTag";
import { createPageDataset } from "../../mock/mockData";
import { buildLineOption, buildPieOption } from "../templates/chartOptions";
import "./home.css";

interface RiskRow {
  key: string;
  area: string;
  score: number;
  level: string;
  suggestion: string;
}

interface BackgroundSettings {
  paused: boolean;
  rotationSpeed: number;
  opacity: number;
  brightness: number;
}

const actionSuggestions = [
  "加强局扇联动",
  "提高测点采样频率",
  "复核风门开度",
  "安排现场巡检",
  "启用备用回风路径",
];

const DEFAULT_BG_SETTINGS: BackgroundSettings = {
  paused: false,
  rotationSpeed: 0.06,
  opacity: 0.55, // 从0.35增加到0.55，模型更清晰
  brightness: 1.4, // 从1.2增加到1.4，更亮
};

const LazyHomeObjBackground = lazy(async () => {
  const module = await import("../../components/topology/HomeObjBackground3D");

  return { default: module.HomeObjBackground3D };
});

export default function HomePage() {
  const dataset = createPageDataset("/home");
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

  const riskRows: RiskRow[] = dataset.riskRanking.map((item, index) => ({
    key: String(index),
    area: item.area,
    score: item.score,
    level: item.level,
    suggestion: actionSuggestions[index % actionSuggestions.length],
  }));

  const riskColumns: ColumnsType<RiskRow> = [
    {
      title: "排名",
      width: 65,
      align: "center",
      render: (_, __, index) => (
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            background:
              index === 0
                ? "linear-gradient(135deg, #ff7875 0%, #ff4d4f 100%)"
                : index === 1
                  ? "linear-gradient(135deg, #ffc069 0%, #faad14 100%)"
                  : index === 2
                    ? "linear-gradient(135deg, #95de64 0%, #73d13d 100%)"
                    : "linear-gradient(135deg, rgba(89, 154, 221, 0.4) 0%, rgba(89, 154, 221, 0.3) 100%)",
            border: `2px solid ${index === 0 ? "#ff4d4f" : index === 1 ? "#faad14" : index === 2 ? "#73d13d" : "rgba(150, 205, 255, 0.5)"}`,
            boxShadow:
              index < 3
                ? `0 0 12px ${index === 0 ? "rgba(255, 77, 79, 0.5)" : index === 1 ? "rgba(250, 173, 20, 0.5)" : "rgba(115, 209, 61, 0.5)"}`
                : "none",
            fontWeight: 700,
            fontSize: 13,
            color: "#ffffff",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          {index + 1}
        </div>
      ),
    },
    {
      title: "区域",
      dataIndex: "area",
      width: 140,
      render: (text) => (
        <Typography.Text
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#e8f4ff",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
          }}
        >
          {text}
        </Typography.Text>
      ),
    },
    {
      title: "分值",
      dataIndex: "score",
      width: 85,
      align: "center",
      render: (score) => (
        <div
          style={{
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: 6,
            background:
              score >= 80
                ? "linear-gradient(135deg, rgba(255, 77, 79, 0.2) 0%, rgba(255, 77, 79, 0.1) 100%)"
                : score >= 60
                  ? "linear-gradient(135deg, rgba(250, 173, 20, 0.2) 0%, rgba(250, 173, 20, 0.1) 100%)"
                  : "linear-gradient(135deg, rgba(82, 196, 26, 0.2) 0%, rgba(82, 196, 26, 0.1) 100%)",
            border: `1px solid ${score >= 80 ? "rgba(255, 77, 79, 0.4)" : score >= 60 ? "rgba(250, 173, 20, 0.4)" : "rgba(82, 196, 26, 0.4)"}`,
            fontWeight: 700,
            fontSize: 13,
            color:
              score >= 80 ? "#ff7875" : score >= 60 ? "#ffc069" : "#95de64",
            textShadow: `0 0 8px ${score >= 80 ? "rgba(255, 77, 79, 0.5)" : score >= 60 ? "rgba(250, 173, 20, 0.5)" : "rgba(82, 196, 26, 0.5)"}`,
            whiteSpace: "nowrap",
          }}
        >
          {score}
        </div>
      ),
    },
    {
      title: "状态",
      dataIndex: "level",
      width: 75,
      align: "center",
      render: (level) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            whiteSpace: "nowrap",
          }}
        >
          <StatusTag status={level} />
        </div>
      ),
    },
    {
      title: "处置建议",
      dataIndex: "suggestion",
      ellipsis: true,
      render: (text) => (
        <Typography.Text
          style={{
            fontSize: 12,
            color: "#b8d9ff",
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {text}
        </Typography.Text>
      ),
    },
  ];

  return (
    <div className="home-cockpit">
      <div className="home-background-layer">
        {backgroundReady ? (
          <Suspense
            fallback={
              <div className="home-background-placeholder">3D背景载入中</div>
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
          <div className="home-background-placeholder">
            正在准备巷道模型背景
          </div>
        )}
      </div>

      <div className="home-content-layer">
        {/* KPI 指标卡片 */}
        <Row gutter={[16, 16]} className="home-kpi-row">
          {dataset.kpis.slice(0, 8).map((item) => (
            <Col key={item.key} xs={24} sm={12} md={8} lg={6} xl={3}>
              <KpiCard item={item} />
            </Col>
          ))}
        </Row>

        {/* 主要内容区域 - 三栏布局 */}
        <Row
          gutter={[16, 16]}
          style={{ flex: 1, minHeight: 0, marginTop: 14 }}
          className="home-main-layout-row"
        >
          {/* 左栏 */}
          <Col xs={24} lg={{ flex: "0 0 18.75%" }} className="home-side-column">
            <Space
              direction="vertical"
              style={{ width: "100%", height: "100%" }}
              size={12}
            >
              {/* 主通风机运行状态 */}
              <Card
                className="page-card home-transparent-card fan-status-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <ThunderboltOutlined
                      style={{ fontSize: 15, color: "#ffc069" }}
                    />
                    <span>主通风机运行状态</span>
                  </div>
                }
                style={{ flex: "0 0 auto", height: 340 }}
              >
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
                                  运行中
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
                                    m³/min
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
                                  运行中
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
                                    m³/min
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

              {/* 设备状态占比 */}
              <ChartPanel
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <PieChartOutlined
                      style={{ fontSize: 15, color: "#69c0ff" }}
                    />
                    <span>设备状态占比</span>
                  </div>
                }
                option={buildPieOption(dataset.pieSeries)}
                height={280}
                className="home-transparent-card"
                style={{ flex: "0 0 auto" }}
              />

              {/* 区域风险排行与处置建议 */}
              <Card
                className="page-card home-transparent-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <WarningOutlined
                      style={{ fontSize: 15, color: "#ff7875" }}
                    />
                    <span>区域风险排行与处置建议</span>
                  </div>
                }
                style={{ flex: "1 1 auto", minHeight: 0 }}
              >
                <Table<RiskRow>
                  size="small"
                  pagination={false}
                  scroll={{ y: 240 }}
                  columns={riskColumns}
                  dataSource={riskRows}
                />
              </Card>
            </Space>
          </Col>

          {/* 中栏 - 上侧留空显示3D模型 */}
          <Col
            xs={24}
            lg={{ flex: "1 1 auto" }}
            className="home-model-column"
          ></Col>

          {/* 右栏 */}
          <Col xs={24} lg={{ flex: "0 0 18.75%" }} className="home-side-column">
            <Space
              direction="vertical"
              style={{ width: "100%", height: "100%" }}
              size={12}
            >
              {/* 设备运行状态 */}
              <Card
                className="page-card home-transparent-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <DesktopOutlined
                      style={{ fontSize: 15, color: "#95de64" }}
                    />
                    <span>设备运行状态</span>
                  </div>
                }
                style={{ flex: "0 0 auto", height: 340 }}
              >
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
                      <DashboardOutlined
                        style={{
                          fontSize: 16,
                          color: "#52c41a",
                          filter: "drop-shadow(0 0 6px rgba(82, 196, 26, 0.8))",
                        }}
                      />
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
                        2/2 在线
                      </Typography.Text>
                    </div>
                  </div>

                  {/* 局扇运行 */}
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
                      <ApiOutlined
                        style={{
                          fontSize: 16,
                          color: "#faad14",
                          filter:
                            "drop-shadow(0 0 6px rgba(250, 173, 20, 0.8))",
                        }}
                      />
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
                        6/7 在线
                      </Typography.Text>
                    </div>
                  </div>

                  {/* 风门联锁 */}
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
                      <GatewayOutlined
                        style={{
                          fontSize: 16,
                          color: "#69c0ff",
                          filter:
                            "drop-shadow(0 0 6px rgba(105, 192, 255, 0.8))",
                        }}
                      />
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
                          风门联锁
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
                          运行中
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
                        14 处
                      </Typography.Text>
                    </div>
                  </div>

                  {/* 风窗调节 */}
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
                      <ControlOutlined
                        style={{
                          fontSize: 16,
                          color: "#69c0ff",
                          filter:
                            "drop-shadow(0 0 6px rgba(105, 192, 255, 0.8))",
                        }}
                      />
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
                          风窗调节
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
                          执行中
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
                        3 处
                      </Typography.Text>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 24h 总风量趋势 */}
              <ChartPanel
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <LineChartOutlined
                      style={{ fontSize: 15, color: "#91d5ff" }}
                    />
                    <span>24h 总风量趋势</span>
                  </div>
                }
                option={buildLineOption(
                  dataset.lineLabels,
                  dataset.lineSeries,
                  "总风量",
                )}
                height={280}
                className="home-transparent-card"
                style={{ flex: "0 0 auto" }}
              />

              {/* 调控执行动态 */}
              <Card
                className="page-card home-transparent-card home-log-card"
                size="small"
                title={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <ClockCircleOutlined
                      style={{ fontSize: 15, color: "#ffd666" }}
                    />
                    <span>调控执行动态</span>
                  </div>
                }
                style={{ flex: "1 1 auto", minHeight: 0, overflow: "hidden" }}
              >
                <div style={{ maxHeight: 240, overflowY: "auto" }}>
                  <Timeline
                    items={dataset.logs.map((item) => ({
                      color:
                        item.level === "alert"
                          ? "red"
                          : item.level === "warning"
                            ? "orange"
                            : "blue",
                      children: (
                        <Typography.Text
                          style={{ fontSize: 13, color: "#e8f4ff" }}
                        >
                          {item.time.slice(11)} {item.message}
                        </Typography.Text>
                      ),
                    }))}
                  />
                </div>
              </Card>
            </Space>
          </Col>
        </Row>

        {/* 底部区域 */}
      </div>
    </div>
  );
}
