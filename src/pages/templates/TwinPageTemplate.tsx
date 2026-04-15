import { Card, Col, List, Row, Slider, Space, Switch, Tag, Timeline, Typography } from 'antd';
import { TwinViewport } from '../../components/topology/TwinViewport';
import { createPageDataset } from '../../mock/mockData';
import { PageToolbar } from './PageToolbar';

interface TwinPageTemplateProps {
  moduleName: string;
  title: string;
  pageKey: string;
}

export function TwinPageTemplate({ moduleName, title, pageKey }: TwinPageTemplateProps) {
  const dataset = createPageDataset(pageKey);

  return (
    <div className="page-wrapper">
      <PageToolbar moduleName={moduleName} title={title} actions={['图层重置', '场景截图']} />

      <Row gutter={[12, 12]}>
        <Col span={5}>
          <Card className="page-card" size="small" title="图层/对象控制" style={{ height: 560 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                <Typography.Text>巷道结构层</Typography.Text>
                <Switch defaultChecked />
              </Space>
              <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                <Typography.Text>风流向量层</Typography.Text>
                <Switch defaultChecked />
              </Space>
              <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                <Typography.Text>设备状态层</Typography.Text>
                <Switch defaultChecked />
              </Space>
              <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                <Typography.Text>风险热度层</Typography.Text>
                <Switch />
              </Space>

              <Typography.Text strong style={{ marginTop: 12 }}>
                视角缩放
              </Typography.Text>
              <Slider defaultValue={35} />

              <Typography.Text strong style={{ marginTop: 8 }}>
                对象清单
              </Typography.Text>
              <List
                size="small"
                dataSource={dataset.tableRows.slice(0, 6).map((item) => item.name)}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Space>
          </Card>
        </Col>

        <Col span={14}>
          <TwinViewport title={title} subtitle="按秒级同步通风参数与设备工况，支持仿真播放与回放" />
        </Col>

        <Col span={5}>
          <Card className="page-card" size="small" title="对象属性与实时数据" style={{ height: 560 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Typography.Text strong>对象：主扇 F1</Typography.Text>
              <Tag color="processing">实时采集</Tag>
              <Typography.Text>风量：9250 m³/s</Typography.Text>
              <Typography.Text>负压：2086 Pa</Typography.Text>
              <Typography.Text>转速：1180 rpm</Typography.Text>
              <Typography.Text>振动：2.8 mm/s</Typography.Text>

              <Typography.Text strong style={{ marginTop: 12 }}>
                关联告警
              </Typography.Text>
              <List
                size="small"
                dataSource={['东翼回风巷风量波动', 'S-201 测点短时离线']}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Space>
          </Card>
        </Col>
      </Row>

      <Card className="page-card" size="small" title="仿真时间轴与事件轨迹">
        <Timeline
          mode="left"
          items={dataset.logs.map((log) => ({
            label: log.time.slice(11),
            children: `${log.message}（${log.actor}）`,
          }))}
        />
      </Card>
    </div>
  );
}
