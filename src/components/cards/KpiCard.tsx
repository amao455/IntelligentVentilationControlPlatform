import { Card, Progress, Space, Typography } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import type { KpiItem } from '../../mock/mockData';
import { StatusTag } from '../common/StatusTag';

interface KpiCardProps {
  item: KpiItem;
}

export function KpiCard({ item }: KpiCardProps) {
  const up = item.trend >= 0;

  return (
    <Card size="small" className="page-card" styles={{ body: { padding: 12 } }}>
      <Space direction="vertical" size={4} style={{ width: '100%' }}>
        <Space style={{ justifyContent: 'space-between', width: '100%' }}>
          <Typography.Text type="secondary">{item.name}</Typography.Text>
          <StatusTag status={item.status} />
        </Space>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {item.value.toLocaleString()} <Typography.Text type="secondary">{item.unit}</Typography.Text>
        </Typography.Title>
        <Space style={{ justifyContent: 'space-between', width: '100%' }}>
          <Typography.Text style={{ color: up ? '#2f7fd2' : '#ff4d4f' }}>
            {up ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {Math.abs(item.trend)}%
          </Typography.Text>
          <Progress
            percent={Math.min(100, Math.max(0, item.status === 'critical' ? 18 : item.status === 'alert' ? 42 : 82))}
            size="small"
            showInfo={false}
            strokeColor={item.status === 'critical' ? '#ff4d4f' : item.status === 'alert' ? '#fa8c16' : '#2f7fd2'}
            style={{ width: 90 }}
          />
        </Space>
      </Space>
    </Card>
  );
}
