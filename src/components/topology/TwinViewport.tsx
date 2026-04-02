import { Button, Space, Tag, Typography } from 'antd';
import { PauseCircleOutlined, PlayCircleOutlined, StepForwardOutlined } from '@ant-design/icons';

interface TwinViewportProps {
  title: string;
  subtitle: string;
}

export function TwinViewport({ title, subtitle }: TwinViewportProps) {
  return (
    <div
      className="twin-placeholder"
      style={{
        height: 480,
        padding: 16,
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gap: 12,
      }}
    >
      <div>
        <Typography.Title level={5} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        <Typography.Text type="secondary">{subtitle}</Typography.Text>
      </div>

      <div
        style={{
          borderRadius: 8,
          border: '1px solid #b6c9dd',
          background:
            'radial-gradient(circle at 16% 22%, rgba(47,127,210,.16), transparent 34%), radial-gradient(circle at 78% 30%, rgba(114,164,221,.14), transparent 30%), linear-gradient(180deg, #f8fbff 0%, #edf4fd 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <Space>
            <Tag color="blue">三维在线</Tag>
            <Tag color="geekblue">同步频率 1s</Tag>
          </Space>
        </div>
      </div>

      <Space>
        <Button icon={<PlayCircleOutlined />}>播放</Button>
        <Button icon={<PauseCircleOutlined />}>暂停</Button>
        <Button icon={<StepForwardOutlined />}>逐帧</Button>
      </Space>
    </div>
  );
}
