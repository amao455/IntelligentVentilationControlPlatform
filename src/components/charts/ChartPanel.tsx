import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

interface ChartPanelProps {
  title: React.ReactNode;
  option: EChartsOption;
  height?: number;
  extra?: React.ReactNode;
  className?: string;
}

export function ChartPanel({ title, option, height = 260, extra, className }: ChartPanelProps) {
  const cardClassName = className ? `page-card ${className}` : 'page-card';

  return (
    <Card size="small" title={title} className={cardClassName} extra={extra}>
      <ReactECharts option={option} style={{ height }} opts={{ renderer: 'canvas' }} />
    </Card>
  );
}
