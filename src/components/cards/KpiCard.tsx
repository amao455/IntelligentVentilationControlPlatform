import { Card, Progress, Space, Typography } from 'antd';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DashboardOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  ApiOutlined,
  DesktopOutlined,
  AlertOutlined,
  SafetyOutlined
} from '@ant-design/icons';
import type { KpiItem } from '../../mock/mockData';
import { StatusTag } from '../common/StatusTag';

interface KpiCardProps {
  item: KpiItem;
}

// 根据KPI类型返回对应的图标
const getKpiIcon = (key: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    inlet: <DashboardOutlined />,
    return: <DashboardOutlined />,
    pressure: <ThunderboltOutlined />,
    targetRate: <CheckCircleOutlined />,
    onlinePoints: <ApiOutlined />,
    availability: <DesktopOutlined />,
    exceptions: <WarningOutlined />,
    emergencyState: <AlertOutlined />
  };
  return iconMap[key] || <SafetyOutlined />;
};

export function KpiCard({ item }: KpiCardProps) {
  const up = item.trend >= 0;

  // 根据不同的KPI类型计算合理的进度条百分比
  const getProgressPercent = () => {
    // 对于风量类指标（总进风量、总回风量），使用实际值的百分比
    if (item.key === 'inlet' || item.key === 'return') {
      // 假设最大风量为10000 m³/min
      const maxValue = 10000;
      return Math.min(100, Math.max(0, (item.value / maxValue) * 100));
    }

    // 对于百分比类指标（风量达标率等），直接使用值
    if (item.unit === '%') {
      return Math.min(100, Math.max(0, item.value));
    }

    // 对于负压类指标
    if (item.key === 'pressure') {
      // 假设正常负压范围 0-5000 Pa
      const maxPressure = 5000;
      return Math.min(100, Math.max(0, (item.value / maxPressure) * 100));
    }

    // 对于在线测点数等计数类指标
    if (item.key === 'onlinePoints' || item.key === 'devices') {
      // 假设最大测点数为200
      const maxPoints = 200;
      return Math.min(100, Math.max(0, (item.value / maxPoints) * 100));
    }

    // 默认根据状态返回固定值
    return item.status === 'critical' ? 25 : item.status === 'alert' ? 50 : item.status === 'warning' ? 75 : 90;
  };

  const progressPercent = getProgressPercent();

  // 根据进度百分比动态确定颜色
  const getProgressColor = () => {
    if (item.status === 'critical') return '#ff4d4f';
    if (item.status === 'alert') return '#fa8c16';
    if (item.status === 'warning') return '#faad14';

    // 对于正常状态，根据进度值使用渐变色
    if (progressPercent >= 80) return '#52c41a';
    if (progressPercent >= 60) return '#2f7fd2';
    return '#69c0ff';
  };

  return (
    <Card
      size="small"
      className="page-card kpi-card"
      styles={{ body: { padding: 16 } }}
      style={{
        background: 'linear-gradient(135deg, rgba(17, 54, 94, 0.75) 0%, rgba(15, 47, 83, 0.85) 100%)',
        border: '2px solid rgba(150, 205, 255, 0.65)',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 4px 18px rgba(11, 35, 62, 0.55), 0 0 25px rgba(74, 157, 232, 0.25), inset 0 1px 0 rgba(196, 225, 255, 0.18)',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Space direction="vertical" size={8} style={{ width: '100%' }}>
        <Space style={{ justifyContent: 'space-between', width: '100%', alignItems: 'flex-start' }}>
          <Space size={6} style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(74, 157, 232, 0.3) 0%, rgba(107, 181, 240, 0.2) 100%)',
                border: '1.5px solid rgba(150, 205, 255, 0.5)',
                boxShadow: '0 0 15px rgba(74, 157, 232, 0.4), inset 0 1px 0 rgba(196, 225, 255, 0.2)',
                fontSize: 14,
                color: '#9cd0ff',
                flexShrink: 0
              }}
            >
              {getKpiIcon(item.key)}
            </div>
            <Typography.Text
              style={{
                color: '#b8d9ff',
                fontSize: 12,
                fontWeight: 500,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1
              }}
            >
              {item.name}
            </Typography.Text>
          </Space>
          <div style={{ flexShrink: 0 }}>
            <StatusTag status={item.status} />
          </div>
        </Space>

        <Typography.Title
          level={4}
          style={{
            margin: 0,
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 700,
            textShadow: '0 0 12px rgba(156, 208, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)',
            lineHeight: 1.3,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {item.value.toLocaleString()}{' '}
          <Typography.Text
            style={{
              color: '#b8d9ff',
              fontSize: 11,
              fontWeight: 500
            }}
          >
            {item.unit}
          </Typography.Text>
        </Typography.Title>

        <Space style={{ justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <Space size={5} style={{ flexShrink: 0 }}>
            <Typography.Text
              style={{
                color: up ? '#52c41a' : '#ff7875',
                fontSize: 12,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 3
              }}
            >
              {up ? <ArrowUpOutlined style={{ fontSize: 11 }} /> : <ArrowDownOutlined style={{ fontSize: 11 }} />}
              {Math.abs(item.trend)}%
            </Typography.Text>
          </Space>

          <div style={{ flex: 1, maxWidth: 110, minWidth: 0 }}>
            <Progress
              percent={progressPercent}
              size="small"
              showInfo={false}
              strokeColor={{
                '0%': getProgressColor(),
                '100%': progressPercent >= 80 ? '#73d13d' : progressPercent >= 60 ? '#69c0ff' : '#91d5ff'
              }}
              trailColor="rgba(150, 205, 255, 0.2)"
              strokeWidth={7}
              style={{ width: '100%' }}
            />
          </div>
        </Space>
      </Space>
    </Card>
  );
}
