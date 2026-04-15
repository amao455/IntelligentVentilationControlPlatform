import { Card, Col, List, Progress, Row, Space, Steps, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { createPageDataset } from '../../mock/mockData';
import { PageToolbar } from './PageToolbar';

interface DecisionPageTemplateProps {
  moduleName: string;
  title: string;
  pageKey: string;
}

interface SchemeRow {
  key: string;
  scheme: string;
  targetRate: string;
  energyCost: string;
  risk: string;
  recommendation: string;
}

export function DecisionPageTemplate({ moduleName, title, pageKey }: DecisionPageTemplateProps) {
  const dataset = createPageDataset(pageKey);

  const schemeRows: SchemeRow[] = [
    { key: 'A', scheme: '方案A-稳态优先', targetRate: '96.2%', energyCost: '中', risk: '低', recommendation: '推荐' },
    { key: 'B', scheme: '方案B-能耗优化', targetRate: '92.8%', energyCost: '低', risk: '中', recommendation: '候选' },
    { key: 'C', scheme: '方案C-快速响应', targetRate: '95.1%', energyCost: '高', risk: '中', recommendation: '备选' },
  ];

  const columns: ColumnsType<SchemeRow> = [
    { title: '方案', dataIndex: 'scheme' },
    { title: '达标率', dataIndex: 'targetRate', width: 100 },
    { title: '能耗', dataIndex: 'energyCost', width: 90 },
    { title: '风险', dataIndex: 'risk', width: 90 },
    {
      title: '结论',
      dataIndex: 'recommendation',
      width: 100,
      render: (value: string) => (value === '推荐' ? <Tag color="success">推荐</Tag> : <Tag>{value}</Tag>),
    },
  ];

  return (
    <div className="page-wrapper">
      <PageToolbar moduleName={moduleName} title={title} actions={['生成候选方案', '发起审批']} />

      <Row gutter={[12, 12]}>
        <Col span={8}>
          <Card className="page-card" size="small" title="调控目标与约束">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Typography.Text>目标区域：东翼回风巷 / 3105综采工作面</Typography.Text>
              <Typography.Text>目标风量：9200 m³/s（允差 ±3%）</Typography.Text>
              <Typography.Text>安全边界：瓦斯浓度 ≤ 0.5%，CO ≤ 24ppm</Typography.Text>
              <Typography.Text>优先级：安全达标 &gt; 稳定性 &gt; 能耗</Typography.Text>
              <Progress percent={88} status="active" />
            </Space>
          </Card>
        </Col>

        <Col span={9}>
          <Card className="page-card" size="small" title="候选方案工作台">
            <List
              dataSource={schemeRows}
              renderItem={(item) => (
                <List.Item>
                  <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Space direction="vertical" size={0}>
                      <Typography.Text strong>{item.scheme}</Typography.Text>
                      <Typography.Text type="secondary">
                        达标 {item.targetRate} / 能耗 {item.energyCost} / 风险 {item.risk}
                      </Typography.Text>
                    </Space>
                    <Tag color={item.recommendation === '推荐' ? 'success' : 'default'}>{item.recommendation}</Tag>
                  </Space>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col span={7}>
          <Card className="page-card" size="small" title="安全校核结论">
            <Steps
              direction="vertical"
              size="small"
              current={2}
              items={[
                { title: '越限检查', description: '无越限' },
                { title: '联锁冲突检查', description: '检测通过' },
                { title: '区域耦合影响', description: '可控影响' },
                { title: '审批建议', description: '建议提交审批' },
              ]}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[12, 12]}>
        <Col span={15}>
          <Card className="page-card" size="small" title="多方案对比">
            <Table<SchemeRow> size="small" pagination={false} columns={columns} dataSource={schemeRows} />
          </Card>
        </Col>

        <Col span={9}>
          <Card className="page-card" size="small" title="执行后评估摘要">
            <List
              size="small"
              dataSource={dataset.logs}
              renderItem={(item) => (
                <List.Item>
                  <Space direction="vertical" size={0}>
                    <Typography.Text>{item.message}</Typography.Text>
                    <Typography.Text type="secondary">{item.time}</Typography.Text>
                  </Space>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
