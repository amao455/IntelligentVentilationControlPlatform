import {
  Alert,
  Button,
  Card,
  Col,
  List,
  Popconfirm,
  Progress,
  Row,
  Space,
  Steps,
  Tag,
  Tree,
  Typography,
  message,
} from 'antd';
import type { DataNode } from 'antd/es/tree';
import { createPageDataset } from '../../mock/mockData';
import { PageToolbar } from './PageToolbar';

interface RemotePageTemplateProps {
  moduleName: string;
  title: string;
  pageKey: string;
}

const treeData: DataNode[] = [
  {
    title: '主扇系统',
    key: 'fan-main',
    children: [
      { title: '主扇 F1', key: 'fan-main-f1' },
      { title: '主扇 F2', key: 'fan-main-f2' },
    ],
  },
  {
    title: '局扇系统',
    key: 'fan-local',
    children: [
      { title: '局扇 J3', key: 'fan-local-j3' },
      { title: '局扇 J7', key: 'fan-local-j7' },
    ],
  },
  {
    title: '风门与风窗',
    key: 'door-window',
    children: [
      { title: '风门 D12', key: 'door-d12' },
      { title: '风窗 W08', key: 'window-w08' },
    ],
  },
];

export function RemotePageTemplate({ moduleName, title, pageKey }: RemotePageTemplateProps) {
  const dataset = createPageDataset(pageKey);
  const [api, contextHolder] = message.useMessage();

  const onControlAction = (action: string) => {
    api.success(`${action} 指令已下发，等待状态回传`);
  };

  return (
    <div className="page-wrapper">
      {contextHolder}
      <PageToolbar moduleName={moduleName} title={title} actions={['联锁检查', '导出执行报告']} />

      <Alert
        type="warning"
        showIcon
        message="高风险操作区域：远程控制命令均需要二次确认，已启用联锁防误操作机制。"
        style={{ borderRadius: 8 }}
      />

      <Row gutter={[12, 12]}>
        <Col span={5}>
          <Card className="page-card" size="small" title="设备树" style={{ height: 500 }}>
            <Tree treeData={treeData} defaultExpandAll selectedKeys={['fan-main-f1']} />
          </Card>
        </Col>

        <Col span={12}>
          <Card className="page-card" size="small" title="控制面板" style={{ height: 500 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Typography.Text>对象：主扇 F1 / 当前模式：远程</Typography.Text>
              <Typography.Text type="secondary">联锁状态：已接入，允许执行调速与开停操作</Typography.Text>

              <Space wrap>
                <Popconfirm
                  title="确认下发“启动”命令？"
                  description="将触发主扇联锁校验"
                  onConfirm={() => onControlAction('启动')}
                >
                  <Button type="primary">启动</Button>
                </Popconfirm>

                <Popconfirm title="确认下发“停止”命令？" onConfirm={() => onControlAction('停止')}>
                  <Button danger>停止</Button>
                </Popconfirm>

                <Popconfirm title="确认执行“风门联动”？" onConfirm={() => onControlAction('风门联动')}>
                  <Button>风门联动</Button>
                </Popconfirm>

                <Popconfirm title="确认执行“应急控风”策略？" onConfirm={() => onControlAction('应急控风')}>
                  <Button type="dashed">应急控风</Button>
                </Popconfirm>
              </Space>

              <Card size="small" title="执行步骤" style={{ marginTop: 8 }}>
                <Steps
                  size="small"
                  current={2}
                  items={[
                    { title: '方案校验' },
                    { title: '联锁检查' },
                    { title: '指令下发' },
                    { title: '状态回传' },
                  ]}
                />
              </Card>

              <Card size="small" title="当前状态反馈">
                <Space wrap>
                  <Tag color="processing">执行中</Tag>
                  <Tag color="success">通信正常</Tag>
                  <Tag color="orange">人工接管可用</Tag>
                </Space>
                <Progress percent={72} status="active" style={{ marginTop: 12 }} />
              </Card>
            </Space>
          </Card>
        </Col>

        <Col span={7}>
          <Card className="page-card" size="small" title="状态与日志" style={{ height: 500 }}>
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
