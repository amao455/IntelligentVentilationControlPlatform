import type { EChartsOption } from 'echarts';

export function buildLineOption(labels: string[], values: number[], title = '趋势') : EChartsOption {
  return {
    tooltip: { trigger: 'axis' },
    grid: { left: 38, right: 18, top: 30, bottom: 30 },
    xAxis: {
      type: 'category',
      data: labels,
      axisLine: { lineStyle: { color: '#8ca4be' } },
      axisLabel: { color: '#4e6a86' },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#8ca4be' } },
      splitLine: { lineStyle: { color: '#dce7f3' } },
      axisLabel: { color: '#4e6a86' },
    },
    series: [
      {
        name: title,
        type: 'line',
        smooth: true,
        data: values,
        symbolSize: 6,
        lineStyle: { color: '#2f7fd2', width: 2 },
        itemStyle: { color: '#2f7fd2' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(47,127,210,.26)' },
              { offset: 1, color: 'rgba(47,127,210,.03)' },
            ],
          },
        },
      },
    ],
  };
}

export function buildBarOption(categories: string[], values: number[], title = '指标') : EChartsOption {
  return {
    tooltip: { trigger: 'axis' },
    grid: { left: 38, right: 12, top: 30, bottom: 30 },
    xAxis: {
      type: 'category',
      data: categories,
      axisLine: { lineStyle: { color: '#8ca4be' } },
      axisLabel: { color: '#4e6a86', interval: 0, rotate: 20 },
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#4e6a86' },
      splitLine: { lineStyle: { color: '#dce7f3' } },
    },
    series: [
      {
        name: title,
        type: 'bar',
        data: values,
        barWidth: 18,
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: '#4d8ed4',
        },
      },
    ],
  };
}

export function buildPieOption(data: Array<{ name: string; value: number }>): EChartsOption {
  return {
    tooltip: { trigger: 'item' },
    legend: { bottom: 0, textStyle: { color: '#4e6a86' } },
    series: [
      {
        type: 'pie',
        radius: ['40%', '68%'],
        center: ['50%', '44%'],
        label: { show: false },
        data,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2,
        },
      },
    ],
    color: ['#2f7fd2', '#63a0df', '#8bb8e8', '#b7cde7'],
  };
}
