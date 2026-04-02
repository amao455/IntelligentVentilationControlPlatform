import { Card, Col, List, Row, Space, Steps, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { TopologyPlaceholder } from '../../components/topology/TopologyPlaceholder';
import { createPageDataset } from '../../mock/mockData';
import { PageToolbar } from './PageToolbar';

interface EmergencyPageTemplateProps {
  moduleName: string;
  title: string;
  pageKey: string;
}

interface RouteRow {
  key: string;
  person: string;
  area: string;
  recommendRoute: string;
  backupRoute: string;
  risk: string;
}

export function EmergencyPageTemplate({ moduleName, title, pageKey }: EmergencyPageTemplateProps) {
  const dataset = createPageDataset(pageKey);

  const routeRows: RouteRow[] = [
    {
      key: '1',
      person: '巡检班组A',
      area: '3105综采工作面',
      recommendRoute: '3105 -> 北二联巷 -> 主运输大巷',
      backupRoute: '3105 -> 东翼回风巷 -> 安全硐室',
      risk: '中',
    },
    {
      key: '2',
      person: '掘进班组B',
      area: '东翼回风巷',
      recommendRoute: '东翼回风巷 -> 回风上山 -> 副井口',
      backupRoute: '东翼回风巷 -> 西翼联络巷 -> 主井口',
      risk: '低',
    },
  ];

  const columns: ColumnsType<RouteRow> = [
    { title: '人员/班组', dataIndex: 'person', width: 130 },
    { title: '所在区域', dataIndex: 'area', width: 130 },
    { title: '推荐路线', dataIndex: 'recommendRoute' },
    { title: '备选路线', dataIndex: 'backupRoute' },
    {
      title: '风险',
      dataIndex: 'risk',
      width: 90,
      render: (value: string) => <Tag color={value === '高' ? 'red' : value === '中' ? 'orange' : 'green'}>{value}</Tag>,
    },
  ];

  return (
    <div className="page-wrapper">
      <PageToolbar moduleName={moduleName} title={title} actions={['场景推演', '发布指令']} />

      <Row gutter={[12, 12]}>
        <Col span={8}>
          <Card className="page-card" size="small" title="灾变态势摘要" style={{ height: 320 }}>
            <Space direction="vertical" size={8}>
              <Typography.Text>灾变类型：局部瓦斯异常 + 风流扰动</Typography.Text>
              <Typography.Text>影响区域：东翼回风巷、3105综采工作面</Typography.Text>
              <Typography.Text>风险等级：III（橙色）</Typography.Text>
              <Typography.Text>人员位置：2个班组位于影响圈内</Typography.Text>
              <Tag color="orange">建议执行应急控风策略 E-03</Tag>
            </Space>
          </Card>
        </Col>

        <Col span={9}>
          <Card className="page-card" size="small" title="灾变扩散与风流演化" style={{ height: 320 }}>
            <TopologyPlaceholder title="灾变扩散路径模拟" subtitle="按分钟级演化展示影响范围和扩散方向" height={260} />
          </Card>
        </Col>

        <Col span={7}>
          <Card className="page-card" size="small" title="应急执行步骤" style={{ height: 320 }}>
            <Steps
              direction="vertical"
              size="small"
              current={1}
              items={[
                { title: '态势确认', description: '已完成' },
                { title: '人员疏散', description: '执行中' },
                { title: '控风联动', description: '待执行' },
                { title: '二次复核', description: '待执行' },
              ]}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[12, 12]}>
        <Col span={16}>
          <Card className="page-card" size="small" title="避灾路线与联动设备清单">
            <Table<RouteRow> size="small" pagination={false} columns={columns} dataSource={routeRows} />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="page-card" size="small" title="指挥日志" style={{ height: 350, overflowY: 'auto' }}>
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
