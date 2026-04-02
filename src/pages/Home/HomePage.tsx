import { lazy, Suspense, useEffect, useState } from "react";
import {
  Card,
  Col,
  List,
  Progress,
  Row,
  Space,
  Table,
  Tag,
  Timeline,
  Typography,
} from "antd";
import type { ColumnsType } from "antd/es/table";
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
    { title: "区域", dataIndex: "area", width: 200 },
    { title: "风险分值", dataIndex: "score", width: 100 },
    {
      title: "状态",
      dataIndex: "level",
      width: 100,
      render: (level) => <StatusTag status={level} />,
    },
    { title: "处置建议", dataIndex: "suggestion" },
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
          style={{ marginTop: 16 }}
          className="home-main-layout-row"
        >
          {/* 左栏 */}
          <Col xs={24} lg={6} className="home-side-column">
            <Space direction="vertical" style={{ width: "100%" }} size={16}>
              {/* 重点区域风险 */}
              <Card
                className="page-card home-transparent-card"
                size="small"
                title="重点区域风险与状态"
                style={{ height: 360 }}
              >
                <List
                  className="home-status-list"
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
                        <Space>
                          <Typography.Text>{item.score}</Typography.Text>
                          <StatusTag status={item.level} />
                        </Space>
                      </Space>
                    </List.Item>
                  )}
                />
                <div style={{ marginTop: 12 }}>
                  <Tag color="gold">重点工作面：3105综采工作面</Tag>
                  <Tag color="processing">巡检任务：待执行 3 条</Tag>
                </div>
              </Card>

              {/* 设备状态占比 */}
              <ChartPanel
                title="设备状态占比"
                option={buildPieOption(dataset.pieSeries)}
                height={280}
                className="home-transparent-card"
              />

              {/* 区域风险排行与处置建议 */}
              <Card
                className="page-card home-transparent-card"
                size="small"
                title="区域风险排行与处置建议"
              >
                <Table<RiskRow>
                  size="small"
                  pagination={false}
                  columns={riskColumns}
                  dataSource={riskRows}
                />
              </Card>
            </Space>
          </Col>

          {/* 中栏 - 上侧留空显示3D模型 */}
          <Col xs={24} lg={12} className="home-model-column">
            <Space direction="vertical" style={{ width: "100%" }} size={16}>
              {/* 上侧留空区域 - 显示3D背景，高度增加到500px */}
              <div
                className="home-model-pass-through"
                style={{ height: 500, position: "relative" }}
              />
            </Space>
          </Col>

          {/* 右栏 */}
          <Col xs={24} lg={6} className="home-side-column">
            <Space direction="vertical" style={{ width: "100%" }} size={16}>
              {/* 设备运行与系统摘要 */}
              <Card
                className="page-card home-transparent-card"
                size="small"
                title="设备运行与系统摘要"
                style={{ height: 360 }}
              >
                <Space direction="vertical" style={{ width: "100%" }} size={12}>
                  <Typography.Text>主扇运行：2/2 正常</Typography.Text>
                  <Typography.Text>局扇运行：6/7 在线</Typography.Text>
                  <Typography.Text>风门联锁：已接入 14 处</Typography.Text>
                  <Typography.Text>风窗调节：执行中 3 处</Typography.Text>
                  <Progress
                    percent={98}
                    status="active"
                    showInfo={false}
                    strokeColor="#52c41a"
                  />
                  <Tag color="processing">系统状态：在线稳定</Tag>

                  <Typography.Text strong style={{ marginTop: 8 }}>
                    最新通知
                  </Typography.Text>
                  <List
                    size="small"
                    dataSource={dataset.logs.slice(0, 4)}
                    renderItem={(item) => (
                      <List.Item style={{ padding: "6px 0" }}>
                        <Typography.Text
                          type="secondary"
                          style={{ fontSize: 12 }}
                        >
                          {item.time.slice(11)} {item.message}
                        </Typography.Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>

              {/* 24h 总风量趋势 */}
              <ChartPanel
                title="24h 总风量趋势"
                option={buildLineOption(
                  dataset.lineLabels,
                  dataset.lineSeries,
                  "总风量",
                )}
                height={280}
                className="home-transparent-card"
              />

              {/* 调控执行动态 */}
              <Card
                className="page-card home-transparent-card home-log-card"
                size="small"
                title="调控执行动态"
                style={{ height: 340 }}
              >
                <Timeline
                  items={dataset.logs.map((item) => ({
                    color:
                      item.level === "alert"
                        ? "red"
                        : item.level === "warning"
                          ? "orange"
                          : "blue",
                    children: (
                      <Typography.Text style={{ fontSize: 13 }}>
                        {item.time.slice(11)} {item.message}
                      </Typography.Text>
                    ),
                  }))}
                />
              </Card>
            </Space>
          </Col>
        </Row>

        {/* 底部区域 */}
      </div>
    </div>
  );
}
