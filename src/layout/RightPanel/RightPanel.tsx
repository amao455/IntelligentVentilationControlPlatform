import { Card, List, Space, Tabs, Tag, Timeline, Typography } from 'antd';
import { getPageMeta } from '../../router/menuConfig';
import { createPageDataset } from '../../mock/mockData';
import { StatusTag } from '../../components/common/StatusTag';
import { useLocation } from 'react-router-dom';

export function RightPanel() {
  const location = useLocation();
  const pageMeta = getPageMeta(location.pathname);
  const dataset = createPageDataset(location.pathname);

  return (
    <div
      style={{
        height: '100%',
        borderLeft: '1px solid var(--border-color)',
        background: 'var(--bg-panel)',
        padding: 12,
        overflowY: 'auto',
      }}
    >
      <Space direction="vertical" size={10} style={{ width: '100%' }}>
        <Card size="small" className="page-card" styles={{ body: { padding: 10 } }}>
          <Typography.Text strong>{pageMeta?.title ?? '系统信息'}</Typography.Text>
          <div style={{ marginTop: 8 }}>
            <Tag color="blue">在线测点 {dataset.kpis[4]?.value ?? 0}</Tag>
            <Tag color="cyan">设备可用率 {dataset.kpis[5]?.value ?? 0}%</Tag>
            <Tag color="orange">当前告警 {dataset.kpis[6]?.value ?? 0}</Tag>
          </div>
        </Card>

        <Tabs
          className="right-panel-tabs"
          size="small"
          items={[
            {
              key: 'summary',
              label: '系统摘要',
              children: (
                <List
                  size="small"
                  dataSource={dataset.riskRanking}
                  renderItem={(item) => (
                    <List.Item>
                      <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                        <Typography.Text>{item.area}</Typography.Text>
                        <Space>
                          <Typography.Text>{item.score}</Typography.Text>
                          <StatusTag status={item.level} />
                        </Space>
                      </Space>
                    </List.Item>
                  )}
                />
              ),
            },
            {
              key: 'logs',
              label: '实时日志',
              children: (
                <Timeline
                  items={dataset.logs.map((log) => ({
                    color: log.level === 'alert' ? 'orange' : log.level === 'warning' ? 'yellow' : 'blue',
                    children: (
                      <Space direction="vertical" size={0}>
                        <Typography.Text>{log.message}</Typography.Text>
                        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                          {log.time}
                        </Typography.Text>
                      </Space>
                    ),
                  }))}
                />
              ),
            },
            {
              key: 'notice',
              label: '消息通知',
              children: (
                <List
                  size="small"
                  dataSource={[
                    '今日 14:20 进行风门联锁策略维护',
                    '模型版本 v2.4.1 已同步完成',
                    '夜班巡检任务待确认',
                  ]}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              ),
            },
          ]}
        />
      </Space>
    </div>
  );
}
