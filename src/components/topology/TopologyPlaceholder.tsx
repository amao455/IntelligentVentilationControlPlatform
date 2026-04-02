import { Space, Tag, Typography } from 'antd';

interface TopologyPlaceholderProps {
  title?: string;
  subtitle?: string;
  height?: number;
}

export function TopologyPlaceholder({
  title = '矿井通风拓扑总览',
  subtitle = '显示巷道、分区、关键设备点位与告警高亮',
  height = 320,
}: TopologyPlaceholderProps) {
  return (
    <div
      className="topology-placeholder"
      style={{ height, padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <div>
        <Typography.Title level={5} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        <Typography.Text type="secondary">{subtitle}</Typography.Text>
      </div>
      <Space wrap>
        <Tag color="blue">主进风路径</Tag>
        <Tag color="geekblue">运行设备</Tag>
        <Tag color="gold">风险区</Tag>
        <Tag color="red">告警点位</Tag>
      </Space>
      <div
        style={{
          flex: 1,
          marginTop: 12,
          borderRadius: 6,
          border: '1px solid #b7c9dc',
          background:
            'repeating-linear-gradient(90deg, rgba(125,150,176,.16), rgba(125,150,176,.16) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(0deg, rgba(125,150,176,.12), rgba(125,150,176,.12) 1px, transparent 1px, transparent 24px)',
        }}
      />
    </div>
  );
}
