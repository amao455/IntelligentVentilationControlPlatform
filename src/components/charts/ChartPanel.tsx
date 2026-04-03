import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

interface ChartPanelProps {
  title?: React.ReactNode;
  option: EChartsOption;
  height?: number | string;
  extra?: React.ReactNode;
  className?: string;
  noCard?: boolean;
}

export function ChartPanel({ title, option, height = 260, extra, className, noCard = false }: ChartPanelProps) {
  const chartElement = <ReactECharts option={option} style={{ height, width: '100%' }} opts={{ renderer: 'canvas' }} />;

  if (noCard) {
    return chartElement;
  }

  const cardClassName = className ? `page-card ${className}` : 'page-card';

  return (
    <Card size="small" title={title} className={cardClassName} extra={extra}>
      {chartElement}
    </Card>
  );
}
