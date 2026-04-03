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

// 气体监测专用：各区域气体浓度对比
export function buildGasBarOption(): EChartsOption {
  const categories = ['东翼回风', '3105工作面', '北二采区', '主运输', '西翼联络'];
  const ch4Data = [0.35, 0.52, 0.28, 0.41, 0.33];
  const coData = [12, 18, 9, 15, 11];

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    legend: {
      data: ['甲烷 (CH₄)', '一氧化碳 (CO)'],
      top: 0,
      textStyle: { color: '#4e6a86', fontSize: 11 },
    },
    grid: { left: 45, right: 18, top: 35, bottom: 30 },
    xAxis: {
      type: 'category',
      data: categories,
      axisLine: { lineStyle: { color: '#8ca4be' } },
      axisLabel: { color: '#4e6a86', interval: 0, rotate: 15, fontSize: 11 },
    },
    yAxis: [
      {
        type: 'value',
        name: 'CH₄ (%)',
        position: 'left',
        axisLabel: { color: '#4e6a86', fontSize: 10 },
        splitLine: { lineStyle: { color: '#dce7f3' } },
        nameTextStyle: { color: '#4e6a86', fontSize: 11 },
      },
      {
        type: 'value',
        name: 'CO (ppm)',
        position: 'right',
        axisLabel: { color: '#4e6a86', fontSize: 10 },
        splitLine: { show: false },
        nameTextStyle: { color: '#4e6a86', fontSize: 11 },
      },
    ],
    series: [
      {
        name: '甲烷 (CH₄)',
        type: 'bar',
        data: ch4Data,
        barWidth: 14,
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: '#ffc069',
        },
      },
      {
        name: '一氧化碳 (CO)',
        type: 'bar',
        data: coData,
        yAxisIndex: 1,
        barWidth: 14,
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: '#69c0ff',
        },
      },
    ],
  };
}

// 气体监测专用：环境参数达标率
export function buildEnvironmentPieOption(): EChartsOption {
  const categories = ['温度', '湿度', '粉尘', '气体'];
  const data = [68, 72, 65, 85];

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: '{b}: {c}%',
    },
    grid: { left: 45, right: 18, top: 25, bottom: 30 },
    xAxis: {
      type: 'category',
      data: categories,
      axisLine: { lineStyle: { color: '#8ca4be' } },
      axisLabel: { color: '#4e6a86', fontSize: 12 },
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        color: '#4e6a86',
        fontSize: 11,
        formatter: '{value}%',
      },
      splitLine: { lineStyle: { color: '#dce7f3' } },
    },
    series: [
      {
        type: 'bar',
        data: data.map((value, index) => ({
          value,
          itemStyle: {
            borderRadius: [4, 4, 0, 0],
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: ['#52c41a', '#69c0ff', '#ffc069', '#95de64'][index] },
                { offset: 1, color: ['#73d13d', '#91d5ff', '#ffd591', '#b7eb8f'][index] },
              ],
            },
          },
        })),
        barWidth: 28,
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%',
          color: '#4e6a86',
          fontSize: 12,
          fontWeight: 'bold',
        },
      },
    ],
  };
}
