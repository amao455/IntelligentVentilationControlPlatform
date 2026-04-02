import { useMemo, useState } from 'react';
import {
  Button,
  Card,
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
} from 'antd';
import { KpiCard } from '../../components/cards/KpiCard';
import { ChartPanel } from '../../components/charts/ChartPanel';
import { StatusTag } from '../../components/common/StatusTag';
import { IndustrialTable } from '../../components/tables/IndustrialTable';
import { TopologyPlaceholder } from '../../components/topology/TopologyPlaceholder';
import { createPageDataset } from '../../mock/mockData';
import { buildBarOption, buildLineOption, buildPieOption } from './chartOptions';
import { PageToolbar } from './PageToolbar';

interface StandardIndustrialPageProps {
  moduleName: string;
  title: string;
  pageKey: string;
}

export function StandardIndustrialPage({ moduleName, title, pageKey }: StandardIndustrialPageProps) {
  const dataset = useMemo(() => createPageDataset(pageKey), [pageKey]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState('airflow');

  const showPointMap = pageKey.includes('point-map') || pageKey.includes('network-solving');
  const showDeviceTabs = pageKey.includes('device-status');
  const showSensorStats = pageKey.includes('sensor-health');
  const showRealtimeNav = pageKey.includes('realtime-overview');
  const showAirflowRealtime = pageKey.includes('airflow-realtime');
  const showGasRealtime = pageKey.includes('gas-realtime');
  const showPersonnelRealtime = pageKey.includes('personnel-realtime');

  return (
    <div className="page-wrapper">
      <PageToolbar moduleName={moduleName} title={title} actions={dataset.actions} />

      <Row gutter={[12, 12]}>
        {dataset.kpis.slice(0, 6).map((item) => (
          <Col key={item.key} xs={24} sm={12} md={8} lg={8} xl={4}>
            <KpiCard item={item} />
          </Col>
        ))}
      </Row>

      {showAirflowRealtime ? (
        <Row gutter={[12, 12]}>
          <Col xs={24} lg={12}>
            <ChartPanel title="风流实时趋势" option={buildLineOption(dataset.lineLabels, dataset.lineSeries, '风量')} />
          </Col>
          <Col xs={24} lg={12}>
            <ChartPanel title="各区域风速分布" option={buildBarOption(dataset.barCategories, dataset.barSeries, '风速')} />
          </Col>
          <Col xs={24} lg={12}>
            <ChartPanel title="风压分布" option={buildPieOption(dataset.pieSeries)} height={260} />
          </Col>
          <Col xs={24} lg={12}>
            <Card className="page-card" size="small" title="风流监测统计">
              <Space direction="vertical" style={{ width: '100%' }} size={12}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography.Text>主风道风速</Typography.Text>
                  <Typography.Text strong style={{ color: '#1890ff' }}>3.8 m/s</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography.Text>总风量</Typography.Text>
                  <Typography.Text strong style={{ color: '#52c41a' }}>9250 m³/min</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography.Text>负压值</Typography.Text>
                  <Typography.Text strong style={{ color: '#faad14' }}>2086 Pa</Typography.Text>
                </div>
                <Progress percent={92} size="small" showInfo={false} />
                <Typography.Text type="secondary">风流稳定性: 92%</Typography.Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24}>
            <Card className="page-card" size="small" title="风流监测点详情">
              <IndustrialTable rows={dataset.tableRows} title="风流监测数据" />
            </Card>
          </Col>
        </Row>
      ) : showGasRealtime ? (
        <Row gutter={[12, 12]}>
          <Col xs={24} lg={12}>
            <ChartPanel title="瓦斯浓度趋势" option={buildLineOption(dataset.lineLabels, dataset.lineSeries, '瓦斯浓度')} />
          </Col>
          <Col xs={24} lg={12}>
            <ChartPanel title="气体成分占比" option={buildPieOption(dataset.pieSeries)} height={260} />
          </Col>
          <Col xs={24} lg={12}>
            <Card className="page-card" size="small" title="气体监测统计">
              <Space direction="vertical" style={{ width: '100%' }} size={12}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography.Text>瓦斯浓度</Typography.Text>
                  <Typography.Text strong style={{ color: '#52c41a' }}>0.42%</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography.Text>二氧化碳</Typography.Text>
                  <Typography.Text strong style={{ color: '#1890ff' }}>0.18%</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography.Text>一氧化碳</Typography.Text>
                  <Typography.Text strong style={{ color: '#52c41a' }}>0.00%</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography.Text>温度</Typography.Text>
                  <Typography.Text strong style={{ color: '#faad14' }}>24.5°C</Typography.Text>
                </div>
                <Tag color="green">安全</Tag>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card className="page-card" size="small" title="告警历史">
              <Timeline
                items={[
                  { children: <Typography.Text>2026-04-02 14:22 - 瓦斯浓度超限告警</Typography.Text> },
                  { children: <Typography.Text>2026-04-02 13:15 - 二氧化碳浓度升高</Typography.Text> },
                  { children: <Typography.Text>2026-04-02 12:08 - 温度异常</Typography.Text> },
                ]}
              />
            </Card>
          </Col>
          <Col xs={24}>
            <Card className="page-card" size="small" title="气体监测点详情">
              <IndustrialTable rows={dataset.tableRows} title="气体监测数据" />
            </Card>
          </Col>
        </Row>
      ) : showPersonnelRealtime ? (
        <Row gutter={[12, 12]}>
          <Col xs={24} lg={8}>
            <Card className="page-card" size="small" title="人员分布统计">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Statistic title="总人数" value={24} suffix="人" />
                <Statistic title="在线率" value={95.8} suffix="%" />
                <Statistic title="异常人数" value={0} suffix="人" />
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card className="page-card" size="small" title="设备状态">
              <Space direction="vertical" style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography.Text>在线</Typography.Text>
                  <Tag color="green">23</Tag>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography.Text>离线</Typography.Text>
                  <Tag color="red">1</Tag>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                  { children: <Typography.Text>2026-04-02 14:22 - 人员 P-012 离线</Typography.Text> },
                  { children: <Typography.Text>2026-04-02 13:15 - 人员 P-008 进入禁区</Typography.Text> },
                  { children: <Typography.Text>2026-04-02 12:08 - 人员 P-015 心率异常</Typography.Text> },
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
            <Space direction="vertical" style={{ width: '100%' }} size={12}>
              {/* 风流实时监测 */}
              <Card
                className="page-card"
                size="small"
                title={
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>风流实时监测</span>
                  </div>
                }
                style={{
                  cursor: 'pointer',
                  border: activeNavTab === 'airflow' ? '2px solid #1890ff' : undefined,
                  background: activeNavTab === 'airflow' ? 'rgba(24, 144, 255, 0.05)' : undefined,
                }}
                onClick={() => setActiveNavTab('airflow')}
              >
                <Space direction="vertical" size={8} style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>主风道风速</Typography.Text>
                    <Typography.Text strong style={{ color: '#1890ff' }}>3.8 m/s</Typography.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>总风量</Typography.Text>
                    <Typography.Text strong style={{ color: '#52c41a' }}>9250 m³/min</Typography.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>负压值</Typography.Text>
                    <Typography.Text strong style={{ color: '#faad14' }}>2086 Pa</Typography.Text>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>气体实时监测</span>
                  </div>
                }
                style={{
                  cursor: 'pointer',
                  border: activeNavTab === 'gas' ? '2px solid #1890ff' : undefined,
                  background: activeNavTab === 'gas' ? 'rgba(24, 144, 255, 0.05)' : undefined,
                }}
                onClick={() => setActiveNavTab('gas')}
              >
                <Space direction="vertical" size={8} style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>瓦斯浓度</Typography.Text>
                    <Typography.Text strong style={{ color: '#52c41a' }}>0.42%</Typography.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>二氧化碳</Typography.Text>
                    <Typography.Text strong style={{ color: '#1890ff' }}>0.18%</Typography.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>一氧化碳</Typography.Text>
                    <Typography.Text strong style={{ color: '#52c41a' }}>0.00%</Typography.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>温度</Typography.Text>
                    <Typography.Text strong style={{ color: '#faad14' }}>24.5°C</Typography.Text>
                  </div>
                  <Tag color="green">安全</Tag>
                </Space>
              </Card>

              {/* 人员实时监测 */}
              <Card
                className="page-card"
                size="small"
                title={
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>人员实时监测</span>
                  </div>
                }
                style={{
                  cursor: 'pointer',
                  border: activeNavTab === 'personnel' ? '2px solid #1890ff' : undefined,
                  background: activeNavTab === 'personnel' ? 'rgba(24, 144, 255, 0.05)' : undefined,
                }}
                onClick={() => setActiveNavTab('personnel')}
              >
                <Space direction="vertical" size={8} style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>井下人数</Typography.Text>
                    <Typography.Text strong style={{ color: '#1890ff' }}>24 人</Typography.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>在线设备</Typography.Text>
                    <Typography.Text strong style={{ color: '#52c41a' }}>23 个</Typography.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>离线设备</Typography.Text>
                    <Typography.Text strong style={{ color: '#ff7875' }}>1 个</Typography.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography.Text>异常告警</Typography.Text>
                    <Typography.Text strong style={{ color: '#faad14' }}>0 条</Typography.Text>
                  </div>
                  <Tag color="blue">正常</Tag>
                </Space>
              </Card>
            </Space>
          </Col>

          {/* 主要内容区域 */}
          <Col xs={24} lg={19}>
            {activeNavTab === 'airflow' && (
              <Row gutter={[12, 12]}>
                <Col xs={24} lg={12}>
                  <ChartPanel title="风流实时趋势" option={buildLineOption(dataset.lineLabels, dataset.lineSeries, '风量')} />
                </Col>
                <Col xs={24} lg={12}>
                  <ChartPanel title="各区域风速分布" option={buildBarOption(dataset.barCategories, dataset.barSeries, '风速')} />
                </Col>
                <Col xs={24}>
                  <Card className="page-card" size="small" title="风流监测点详情">
                    <IndustrialTable rows={dataset.tableRows} title="风流监测数据" />
                  </Card>
                </Col>
              </Row>
            )}

            {activeNavTab === 'gas' && (
              <Row gutter={[12, 12]}>
                <Col xs={24} lg={12}>
                  <ChartPanel title="瓦斯浓度趋势" option={buildLineOption(dataset.lineLabels, dataset.lineSeries, '瓦斯浓度')} />
                </Col>
                <Col xs={24} lg={12}>
                  <ChartPanel title="气体成分占比" option={buildPieOption(dataset.pieSeries)} height={260} />
                </Col>
                <Col xs={24}>
                  <Card className="page-card" size="small" title="气体监测点详情">
                    <IndustrialTable rows={dataset.tableRows} title="气体监测数据" />
                  </Card>
                </Col>
              </Row>
            )}

            {activeNavTab === 'personnel' && (
              <Row gutter={[12, 12]}>
                <Col xs={24} lg={8}>
                  <Card className="page-card" size="small" title="人员分布统计">
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Statistic title="总人数" value={24} suffix="人" />
                      <Statistic title="在线率" value={95.8} suffix="%" />
                      <Statistic title="异常人数" value={0} suffix="人" />
                    </Space>
                  </Card>
                </Col>
                <Col xs={24} lg={8}>
                  <Card className="page-card" size="small" title="设备状态">
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography.Text>在线</Typography.Text>
                        <Tag color="green">23</Tag>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography.Text>离线</Typography.Text>
                        <Tag color="red">1</Tag>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                        { children: <Typography.Text>2026-04-02 14:22 - 人员 P-012 离线</Typography.Text> },
                        { children: <Typography.Text>2026-04-02 13:15 - 人员 P-008 进入禁区</Typography.Text> },
                        { children: <Typography.Text>2026-04-02 12:08 - 人员 P-015 心率异常</Typography.Text> },
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
            )}
          </Col>
        </Row>
      ) : (
        <>
          {showDeviceTabs && (
            <Card className="page-card" size="small" title="设备类别与工况">
              <Tabs
                items={[
                  { key: 'main-fan', label: '主扇', children: <Typography.Text>主扇 F1/F2 当前负压稳定，转速波动 ≤ 2.1%</Typography.Text> },
                  { key: 'local-fan', label: '局扇', children: <Typography.Text>局扇 J3 处于运行状态，J7 处于待命状态</Typography.Text> },
                  { key: 'door', label: '风门', children: <Typography.Text>风门 D12 执行完毕，D18 联锁待解锁</Typography.Text> },
                  { key: 'window', label: '风窗', children: <Typography.Text>风窗 W08 开度 62%，W14 开度 48%</Typography.Text> },
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
                <Card className="page-card" size="small" title="筛选区" style={{ height: 360 }}>
                  <List
                    size="small"
                    dataSource={dataset.riskRanking}
                    renderItem={(item) => (
                      <List.Item>
                        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                          <Typography.Text>{item.area}</Typography.Text>
                          <StatusTag status={item.level} />
                        </Space>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
              <Col span={13}>
                <Card className="page-card" size="small" title="监测点平面分布 / 风网拓扑">
                  <TopologyPlaceholder
                    title="监测点空间分布"
                    subtitle="展示测点位置、风流方向与关键告警点位"
                    height={320}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card className="page-card" size="small" title="点位详情" style={{ height: 360 }}>
                  <Descriptions size="small" column={1}>
                    <Descriptions.Item label="点位">S-201</Descriptions.Item>
                    <Descriptions.Item label="区域">东翼回风巷</Descriptions.Item>
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
                <ChartPanel title="实时趋势" option={buildLineOption(dataset.lineLabels, dataset.lineSeries, '风量')} />
              </Col>
              <Col xs={24} lg={8}>
                <ChartPanel title="区域达标率" option={buildBarOption(dataset.barCategories, dataset.barSeries, '达标率')} />
              </Col>
              <Col xs={24} lg={6}>
                <ChartPanel title="状态占比" option={buildPieOption(dataset.pieSeries)} height={260} />
              </Col>
            </Row>
          )}

          {showSensorStats && (
            <Row gutter={[12, 12]}>
              <Col span={8}>
                <Card className="page-card" size="small" title="在线率统计">
                  <Progress percent={96} status="active" />
                  <Typography.Text type="secondary">离线 4 个，异常 3 个，通信时延均值 112ms</Typography.Text>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="page-card" size="small" title="最近异常时间">
                  <Typography.Title level={5}>2026-04-01 14:22</Typography.Title>
                  <Typography.Text type="secondary">传感器 S-086 通信抖动，已自动恢复</Typography.Text>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="page-card" size="small" title="维护建议">
                  <List
                    size="small"
                    dataSource={['优先巡检东翼回风巷传感器', '复核 S-201 标定系数', '检查北二采区交换机链路']}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Card>
              </Col>
            </Row>
          )}

          <Row gutter={[12, 12]}>
            <Col xs={24} lg={16}>
              <Card className="page-card" size="small" title="明细数据表">
                <IndustrialTable rows={dataset.tableRows} title="设备/测点状态明细" />
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card className="page-card" size="small" title="执行与告警时间轴" style={{ height: 360, overflowY: 'auto' }}>
                <Timeline
                  items={dataset.logs.map((log) => ({
                    color: log.level === 'alert' || log.level === 'critical' ? 'red' : log.level === 'warning' ? 'orange' : 'blue',
                    children: (
                      <Space direction="vertical" size={0}>
                        <Typography.Text>{log.message}</Typography.Text>
                        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
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

      <Drawer open={drawerOpen} width={420} onClose={() => setDrawerOpen(false)} title="设备详情 - 主扇 F1">
        <Descriptions column={1} size="small" bordered>
          <Descriptions.Item label="设备编号">F1-001</Descriptions.Item>
          <Descriptions.Item label="设备类型">主扇</Descriptions.Item>
          <Descriptions.Item label="运行状态">
            <StatusTag status="running" />
          </Descriptions.Item>
          <Descriptions.Item label="当前负压">2086 Pa</Descriptions.Item>
          <Descriptions.Item label="风量">9250 m³/min</Descriptions.Item>
          <Descriptions.Item label="联锁状态">已接入联锁</Descriptions.Item>
          <Descriptions.Item label="最近维护">2026-03-29</Descriptions.Item>
        </Descriptions>
      </Drawer>
    </div>
  );
}
