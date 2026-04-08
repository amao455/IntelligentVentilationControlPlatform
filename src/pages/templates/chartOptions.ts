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

// 人员监测专用：人员总览
export function buildPersonnelOverviewOption(): EChartsOption {
  return {
    tooltip: {
      show: false,
    },
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      containLabel: false,
    },
    graphic: [
      // 背景装饰圆环
      {
        type: 'circle',
        left: 'center',
        top: '40%',
        shape: {
          cx: 0,
          cy: 0,
          r: 65,
        },
        style: {
          fill: 'transparent',
          stroke: 'rgba(105, 192, 255, 0.15)',
          lineWidth: 2,
        },
      },
      {
        type: 'circle',
        left: 'center',
        top: '40%',
        shape: {
          cx: 0,
          cy: 0,
          r: 75,
        },
        style: {
          fill: 'transparent',
          stroke: 'rgba(105, 192, 255, 0.1)',
          lineWidth: 1,
        },
      },
      // 标题
      {
        type: 'group',
        left: 'center',
        top: '12%',
        children: [
          {
            type: 'text',
            style: {
              text: '井下总人数',
              fontSize: 15,
              fontWeight: 700,
              fill: '#4e6a86',
              textShadow: '0 0 8px rgba(78, 106, 134, 0.3)',
            } as any,
          },
        ],
      },
      // 中心大数字背景光晕
      {
        type: 'circle',
        left: 'center',
        top: '40%',
        shape: {
          cx: 0,
          cy: 0,
          r: 50,
        },
        style: {
          fill: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              { offset: 0, color: 'rgba(105, 192, 255, 0.2)' },
              { offset: 1, color: 'rgba(105, 192, 255, 0)' },
            ],
          },
        },
      },
      // 中心大数字
      {
        type: 'group',
        left: 'center',
        top: '35%',
        children: [
          {
            type: 'text',
            style: {
              text: '26',
              fontSize: 56,
              fontWeight: 900,
              fill: '#69c0ff',
              textShadow: '0 0 20px rgba(105, 192, 255, 0.8), 0 0 40px rgba(105, 192, 255, 0.4)',
            } as any,
          },
        ],
      },
      // 单位
      {
        type: 'group',
        left: 'center',
        top: '58%',
        children: [
          {
            type: 'text',
            style: {
              text: '人',
              fontSize: 18,
              fontWeight: 600,
              fill: '#8ca4be',
            },
          },
        ],
      },
      // 分隔线
      {
        type: 'line',
        left: '15%',
        top: '70%',
        shape: {
          x1: 0,
          y1: 0,
          x2: 150,
          y2: 0,
        },
        style: {
          stroke: 'rgba(150, 205, 255, 0.3)',
          lineWidth: 1,
        },
      },
      // 左下 - 在线
      {
        type: 'group',
        left: '15%',
        top: '76%',
        children: [
          {
            type: 'circle',
            shape: {
              cx: 4,
              cy: 4,
              r: 5,
            },
            style: {
              fill: '#52c41a',
              shadowBlur: 12,
              shadowColor: 'rgba(82, 196, 26, 0.8)',
            },
          },
          {
            type: 'text',
            left: 18,
            top: -2,
            style: {
              text: '在线',
              fontSize: 12,
              fontWeight: 600,
              fill: '#4e6a86',
            },
          },
          {
            type: 'text',
            left: 50,
            top: -2,
            style: {
              text: '23人',
              fontSize: 13,
              fontWeight: 700,
              fill: '#52c41a',
              textShadow: '0 0 8px rgba(82, 196, 26, 0.5)',
            } as any,
          },
        ],
      },
      // 左下 - 离线
      {
        type: 'group',
        left: '15%',
        top: '87%',
        children: [
          {
            type: 'circle',
            shape: {
              cx: 4,
              cy: 4,
              r: 5,
            },
            style: {
              fill: '#ff7875',
              shadowBlur: 12,
              shadowColor: 'rgba(255, 120, 117, 0.8)',
            },
          },
          {
            type: 'text',
            left: 18,
            top: -2,
            style: {
              text: '离线',
              fontSize: 12,
              fontWeight: 600,
              fill: '#4e6a86',
            },
          },
          {
            type: 'text',
            left: 50,
            top: -2,
            style: {
              text: '1人',
              fontSize: 13,
              fontWeight: 700,
              fill: '#ff7875',
              textShadow: '0 0 8px rgba(255, 120, 117, 0.5)',
            } as any,
          },
        ],
      },
      // 右下 - 告警
      {
        type: 'group',
        right: '15%',
        top: '76%',
        children: [
          {
            type: 'circle',
            shape: {
              cx: 4,
              cy: 4,
              r: 5,
            },
            style: {
              fill: '#ffc069',
              shadowBlur: 12,
              shadowColor: 'rgba(255, 192, 105, 0.8)',
            },
          },
          {
            type: 'text',
            left: 18,
            top: -2,
            style: {
              text: '告警',
              fontSize: 12,
              fontWeight: 600,
              fill: '#4e6a86',
            },
          },
          {
            type: 'text',
            left: 50,
            top: -2,
            style: {
              text: '2人',
              fontSize: 13,
              fontWeight: 700,
              fill: '#ffc069',
              textShadow: '0 0 8px rgba(255, 192, 105, 0.5)',
            } as any,
          },
        ],
      },
      // 右下 - 在线率
      {
        type: 'group',
        right: '15%',
        top: '87%',
        children: [
          {
            type: 'circle',
            shape: {
              cx: 4,
              cy: 4,
              r: 5,
            },
            style: {
              fill: '#69c0ff',
              shadowBlur: 12,
              shadowColor: 'rgba(105, 192, 255, 0.8)',
            },
          },
          {
            type: 'text',
            left: 18,
            top: -2,
            style: {
              text: '在线率',
              fontSize: 12,
              fontWeight: 600,
              fill: '#4e6a86',
            },
          },
          {
            type: 'text',
            left: 62,
            top: -2,
            style: {
              text: '88.5%',
              fontSize: 13,
              fontWeight: 700,
              fill: '#69c0ff',
              textShadow: '0 0 8px rgba(105, 192, 255, 0.5)',
            } as any,
          },
        ],
      },
    ],
  };
}

// 人员监测专用：区域人员分布
export function buildPersonnelBarOption(): EChartsOption {
  const categories = ['东翼回风', '3105工作面', '北二采区', '主运输', '西翼联络'];
  const personnelData = [5, 8, 4, 6, 3];

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: '{b}: {c}人',
    },
    grid: { left: 45, right: 18, top: 25, bottom: 30 },
    xAxis: {
      type: 'category',
      data: categories,
      axisLine: { lineStyle: { color: '#8ca4be' } },
      axisLabel: { color: '#4e6a86', interval: 0, rotate: 15, fontSize: 11 },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#4e6a86',
        fontSize: 11,
        formatter: '{value}人',
      },
      splitLine: { lineStyle: { color: '#dce7f3' } },
    },
    series: [
      {
        type: 'bar',
        data: personnelData.map((value) => ({
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
                { offset: 0, color: '#69c0ff' },
                { offset: 1, color: '#91d5ff' },
              ],
            },
          },
        })),
        barWidth: 28,
        label: {
          show: true,
          position: 'top',
          formatter: '{c}人',
          color: '#4e6a86',
          fontSize: 12,
          fontWeight: 'bold',
        },
      },
    ],
  };
}

