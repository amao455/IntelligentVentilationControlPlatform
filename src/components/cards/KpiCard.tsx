import { Card, Progress, Space, Typography } from 'antd';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DashboardOutlined,
  CompressOutlined,
  WarningOutlined,
  ApiOutlined,
  AlertOutlined,
  SafetyOutlined,
  ControlOutlined
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
    lowAirflowRoadways: <WarningOutlined />,
    totalResistance: <ControlOutlined />,
    totalPressure: <CompressOutlined />,
    onlinePoints: <ApiOutlined />,
    exceptions: <WarningOutlined />,
    emergencyState: <AlertOutlined />
  };
  return iconMap[key] || <SafetyOutlined />;
};

export function KpiCard({ item }: KpiCardProps) {
  const up = item.trend >= 0;
  const isRiskRiseNegative =
    item.key === 'exceptions' ||
    item.key === 'lowAirflowRoadways' ||
    item.key === 'totalResistance';
  const trendPositive = isRiskRiseNegative ? !up : up;

  // 根据不同的KPI类型计算合理的进度条百分比
  const getProgressPercent = () => {
    // 对于风量类指标（总进风量、总回风量），使用实际值的百分比
    if (item.key === 'inlet' || item.key === 'return') {
      // 假设最大风量为10000 m³/s
      const maxValue = 10000;
      return Math.min(100, Math.max(0, (item.value / maxValue) * 100));
    }

    // 对于百分比类指标，直接使用值
    if (item.unit === '%') {
      return Math.min(100, Math.max(0, item.value));
    }

    // 对于风量不足巷道数
    if (item.key === 'lowAirflowRoadways') {
      // 假设需要重点管控的上限为10条
      const maxRoadways = 10;
      return Math.min(100, Math.max(0, (item.value / maxRoadways) * 100));
    }

    // 对于总风阻
    if (item.key === 'totalResistance') {
      // 按 0-3600 区间归一化
      const maxResistance = 3600;
      return Math.min(100, Math.max(0, (item.value / maxResistance) * 100));
    }

    // 对于总风压
    if (item.key === 'totalPressure') {
      // 按 0-3000 区间归一化
      const maxPressure = 3000;
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
  const isLowAirflowCard = item.key === 'lowAirflowRoadways';
  const isResistanceCard = item.key === 'totalResistance';
  const isPressureCard = item.key === 'totalPressure';
  const iconBg = isLowAirflowCard
    ? 'linear-gradient(135deg, rgba(250, 173, 20, 0.35) 0%, rgba(255, 120, 117, 0.22) 100%)'
    : isResistanceCard
      ? 'linear-gradient(135deg, rgba(64, 156, 255, 0.3) 0%, rgba(250, 173, 20, 0.2) 100%)'
      : isPressureCard
        ? 'linear-gradient(135deg, rgba(24, 144, 255, 0.34) 0%, rgba(82, 196, 26, 0.18) 100%)'
      : 'linear-gradient(135deg, rgba(74, 157, 232, 0.3) 0%, rgba(107, 181, 240, 0.2) 100%)';
  const iconBorder = isLowAirflowCard
    ? '1.5px solid rgba(255, 169, 64, 0.62)'
    : isResistanceCard
      ? '1.5px solid rgba(145, 213, 255, 0.62)'
      : isPressureCard
        ? '1.5px solid rgba(145, 213, 255, 0.68)'
      : '1.5px solid rgba(150, 205, 255, 0.5)';
  const iconShadow = isLowAirflowCard
    ? '0 0 15px rgba(255, 169, 64, 0.4), 0 0 25px rgba(255, 120, 117, 0.22), inset 0 1px 0 rgba(255, 236, 214, 0.2)'
    : isResistanceCard
      ? '0 0 15px rgba(100, 181, 246, 0.38), 0 0 25px rgba(250, 173, 20, 0.2), inset 0 1px 0 rgba(220, 238, 255, 0.2)'
      : isPressureCard
        ? '0 0 15px rgba(24, 144, 255, 0.38), 0 0 25px rgba(82, 196, 26, 0.2), inset 0 1px 0 rgba(220, 238, 255, 0.2)'
      : '0 0 15px rgba(74, 157, 232, 0.4), 0 0 25px rgba(74, 157, 232, 0.2), inset 0 1px 0 rgba(196, 225, 255, 0.2)';
  const iconColor = isLowAirflowCard
    ? '#ffc069'
    : isResistanceCard
      ? '#91d5ff'
      : isPressureCard
        ? '#69c0ff'
        : '#9cd0ff';

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
        boxShadow: '0 4px 18px rgba(11, 35, 62, 0.55), 0 0 25px rgba(74, 157, 232, 0.3), 0 0 40px rgba(74, 157, 232, 0.15), inset 0 1px 0 rgba(196, 225, 255, 0.18), inset 0 0 30px rgba(74, 157, 232, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* 网格背景 */}
      <div className="grid-bg" />

      {/* 粒子效果 */}
      <div className="particle p1" />
      <div className="particle p2" />
      <div className="particle p3" />

      <Space direction="vertical" size={8} style={{ width: '100%', position: 'relative', zIndex: 3 }}>
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
                background: iconBg,
                border: iconBorder,
                boxShadow: iconShadow,
                fontSize: 14,
                color: iconColor,
                flexShrink: 0,
                animation: 'icon-glow-pulse 2s ease-in-out infinite'
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
                color: trendPositive ? '#52c41a' : '#ff7875',
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
