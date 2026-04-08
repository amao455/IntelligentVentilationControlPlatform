import { useMemo, type ReactNode } from 'react';
import {
  AlertOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  ClusterOutlined,
  LineChartOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { Card, Col, Descriptions, Divider, List, Progress, Row, Space, Table, Tag, Timeline, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { EChartsOption } from 'echarts';
import { KpiCard } from '../../components/cards/KpiCard';
import { ChartPanel } from '../../components/charts/ChartPanel';
import { StatusTag } from '../../components/common/StatusTag';
import type { KpiItem, StatusLevel } from '../../mock/mockData';
import { PageToolbar } from './PageToolbar';

type AirDistributionMode = 'natural' | 'demand';

interface AirDistributionAnalysisTemplateProps {
  title: string;
  mode: AirDistributionMode;
}

interface SolveRow {
  key: string;
  region: string;
  branch: string;
  naturalPressure?: string;
  target: string;
  calculated: string;
  deviation: string;
  action: string;
  status: StatusLevel;
}

interface QueueItem {
  key: string;
  name: string;
  description: string;
  progress: number;
  status: StatusLevel;
}

interface BoundaryCondition {
  label: string;
  value: string;
}

interface OverviewFact {
  label: string;
  value: string;
  remark: string;
  status?: StatusLevel;
}

interface RecommendationItem {
  key: string;
  title: string;
  detail: string;
  expected: string;
  status: StatusLevel;
}

interface SolveStep {
  color: string;
  title: string;
  description: string;
}

interface PageConfig {
  actions: string[];
  kpis: KpiItem[];
  trendTitle: string;
  trendOption: EChartsOption;
  compareTitle: string;
  compareOption: EChartsOption;
  complianceTitle: string;
  complianceOption: EChartsOption;
  overviewDescription?: string;
  overviewTags?: string[];
  overviewFacts?: OverviewFact[];
  recommendationTitle?: string;
  recommendations?: RecommendationItem[];
  summaryLabel: string;
  summaryValue: string;
  summaryUnit: string;
  summaryStatus: StatusLevel;
  summaryDescription: string;
  highlights: string[];
  queueTitle: string;
  queueItems: QueueItem[];
  boundaryConditions: BoundaryCondition[];
  steps: SolveStep[];
  tableTitle: string;
  tableRows: SolveRow[];
}

function buildCardTitle(icon: ReactNode, text: string) {
  return (
    <Space size={8}>
      {icon}
      <span>{text}</span>
    </Space>
  );
}

function buildDualLineOption(input: {
  labels: string[];
  leftName: string;
  leftData: number[];
  rightName: string;
  rightData: number[];
  unitSuffix: string;
}): EChartsOption {
  return {
    tooltip: { trigger: 'axis' },
    legend: {
      top: 0,
      textStyle: { color: '#4e6a86', fontSize: 11 },
    },
    grid: { left: 44, right: 18, top: 42, bottom: 28 },
    xAxis: {
      type: 'category',
      data: input.labels,
      axisLine: { lineStyle: { color: '#8ca4be' } },
      axisLabel: { color: '#4e6a86' },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#8ca4be' } },
      axisLabel: {
        color: '#4e6a86',
        formatter: `{value}${input.unitSuffix}`,
      },
      splitLine: { lineStyle: { color: '#dce7f3' } },
    },
    series: [
      {
        name: input.leftName,
        type: 'line',
        smooth: true,
        data: input.leftData,
        symbolSize: 7,
        lineStyle: { color: '#2f7fd2', width: 3 },
        itemStyle: { color: '#2f7fd2' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(47, 127, 210, 0.24)' },
              { offset: 1, color: 'rgba(47, 127, 210, 0.03)' },
            ],
          },
        },
      },
      {
        name: input.rightName,
        type: 'line',
        smooth: true,
        data: input.rightData,
        symbolSize: 7,
        lineStyle: { color: '#52c41a', width: 3 },
        itemStyle: { color: '#52c41a' },
      },
    ],
  };
}

function buildCompareBarOption(input: {
  categories: string[];
  leftName: string;
  leftData: number[];
  rightName: string;
  rightData: number[];
  unitSuffix: string;
}): EChartsOption {
  return {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: {
      top: 0,
      textStyle: { color: '#4e6a86', fontSize: 11 },
    },
    grid: { left: 44, right: 18, top: 42, bottom: 36 },
    xAxis: {
      type: 'category',
      data: input.categories,
      axisLine: { lineStyle: { color: '#8ca4be' } },
      axisLabel: { color: '#4e6a86', interval: 0, rotate: 18 },
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#4e6a86', formatter: `{value}${input.unitSuffix}` },
      splitLine: { lineStyle: { color: '#dce7f3' } },
    },
    series: [
      {
        name: input.leftName,
        type: 'bar',
        data: input.leftData,
        barWidth: 16,
        itemStyle: {
          color: '#69c0ff',
          borderRadius: [4, 4, 0, 0],
        },
      },
      {
        name: input.rightName,
        type: 'bar',
        data: input.rightData,
        barWidth: 16,
        itemStyle: {
          color: '#95de64',
          borderRadius: [4, 4, 0, 0],
        },
      },
    ],
  };
}

function buildDonutOption(input: {
  centerTitle: string;
  centerValue: string;
  data: Array<{ name: string; value: number }>;
}): EChartsOption {
  return {
    tooltip: { trigger: 'item' },
    legend: {
      bottom: 0,
      textStyle: { color: '#4e6a86', fontSize: 11 },
    },
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: '36%',
        style: {
          text: input.centerTitle,
          fill: '#4e6a86',
          fontSize: 13,
          fontWeight: 500,
        },
      },
      {
        type: 'text',
        left: 'center',
        top: '48%',
        style: {
          text: input.centerValue,
          fill: '#16324f',
          fontSize: 24,
          fontWeight: 700,
        },
      },
    ],
    color: ['#2f7fd2', '#52c41a', '#faad14', '#ff7875'],
    series: [
      {
        type: 'pie',
        radius: ['54%', '74%'],
        center: ['50%', '42%'],
        label: { show: false },
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 2,
        },
        data: input.data,
      },
    ],
  };
}

function buildPageConfig(mode: AirDistributionMode): PageConfig {
  if (mode === 'natural') {
    return {
      actions: ['导出解算结果', '生成调节建议'],
      kpis: [
        { key: 'naturalCoverage', name: '自然分风覆盖率', value: 83.6, unit: '%', trend: 6, status: 'normal' },
        { key: 'loopBalance', name: '风路平衡稳定度', value: 91.2, unit: '%', trend: 4, status: 'normal' },
        { key: 'pressureReuse', name: '可利用自然压差', value: 1860, unit: 'Pa', trend: -3, status: 'running' },
        { key: 'pendingLoops', name: '待调节回路数', value: 2, unit: '条', trend: -1, status: 'warning' },
        { key: 'lowCarbonRate', name: '低耗运行占比', value: 76.4, unit: '%', trend: 5, status: 'running' },
        { key: 'energySaving', name: '预计节能率', value: 18.7, unit: '%', trend: 8, status: 'normal' },
      ],
      trendTitle: '自然压与网络压差趋势',
      trendOption: buildDualLineOption({
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        leftName: '自然压势能',
        leftData: [1680, 1720, 1760, 1810, 1860, 1830, 1790],
        rightName: '主回路压差',
        rightData: [1590, 1620, 1680, 1710, 1730, 1700, 1660],
        unitSuffix: 'Pa',
      }),
      compareTitle: '主要回路自然分风结果对比',
      compareOption: buildCompareBarOption({
        categories: ['东翼回风', '3105工作面', '北二采区', '西翼联络', '主运输巷'],
        leftName: '目标风量',
        leftData: [2100, 1680, 1320, 980, 1560],
        rightName: '自然分风解算',
        rightData: [2160, 1650, 1290, 920, 1510],
        unitSuffix: 'm³/min',
      }),
      complianceTitle: '自然分风适配结果',
      complianceOption: buildDonutOption({
        centerTitle: '自然满足',
        centerValue: '83.6%',
        data: [
          { name: '自然满足', value: 84 },
          { name: '轻度调节', value: 10 },
          { name: '需要干预', value: 4 },
          { name: '风险关注', value: 2 },
        ],
      }),
      summaryLabel: '自然分风覆盖率',
      overviewDescription:
        '本轮自然分风解算以自然压差优先为原则，结合主回路阻力修正、关键支路压差监测和设备当前运行边界，识别可依靠自然分风自平衡满足目标风量的回路，并输出最小干预建议。',
      overviewTags: ['自然压主导', '稳态校核完成', '2 条支路待调节', '无新增设备启停'],
      overviewFacts: [
        {
          label: '解算模式',
          value: '自然压优先',
          remark: '先利用自然压差，再校核最小设备干预。',
          status: 'normal',
        },
        {
          label: '主导驱动源',
          value: '东翼回风温差压',
          remark: '当前为主要正向驱动，贡献最高。',
          status: 'running',
        },
        {
          label: '收敛结果',
          value: '6 轮 / 14.2 s',
          remark: '压差残差 11 Pa，满足稳态收敛要求。',
          status: 'normal',
        },
        {
          label: '建议干预范围',
          value: '1 风门 + 1 风窗',
          remark: '仅对低效支路做微调，不触发主扇增载。',
          status: 'warning',
        },
      ],
      recommendationTitle: '建议动作与联动对象',
      recommendations: [
        {
          key: 'natural-action-1',
          title: '锁定 D-12 风门开度至 68%',
          detail: '优先抑制西翼联络巷回流，先处理当前自然分风薄弱支路。',
          expected: '回流风险降为低，联络支路风量可回升约 40 m³/min。',
          status: 'warning',
        },
        {
          key: 'natural-action-2',
          title: '保持 3105 局扇联锁待命',
          detail: '当前自然分风已基本满足工作面目标，暂不建议启动额外风机。',
          expected: '维持工作面偏差小于 2%，避免不必要能耗增加。',
          status: 'running',
        },
        {
          key: 'natural-action-3',
          title: '预置 W-08 风窗补风策略',
          detail: '若主运输巷自然压回落超过 30 Pa，触发小幅补风预案。',
          expected: '保障主运输回路稳态缓冲能力，减少后续人工介入。',
          status: 'normal',
        },
      ],
      summaryValue: '83.6',
      summaryUnit: '%',
      summaryStatus: 'normal',
      summaryDescription:
        '当前自然压条件下，5 条主回路中 4 条可在不新增通风设备动作的前提下满足稳态分风目标。',
      highlights: [
        '东翼回风巷自然压抬升 62 Pa，可承担主回路增量风量。',
        '3105 工作面偏差控制在 1.8%，满足连续作业稳态要求。',
        '建议锁定 D-12 风门开度至 68%，抑制西翼联络巷回流风险。',
      ],
      queueTitle: '优先调节回路',
      queueItems: [
        {
          key: 'natural-east',
          name: '东翼回风主回路',
          description: '自然压主导，建议维持当前开度并持续跟踪压差。',
          progress: 92,
          status: 'normal',
        },
        {
          key: 'natural-3105',
          name: '3105 综采工作面',
          description: '自然分风已接近目标，保持局扇联锁待命。',
          progress: 87,
          status: 'running',
        },
        {
          key: 'natural-west',
          name: '西翼联络巷',
          description: '存在轻微回流风险，建议优先修正风门角度。',
          progress: 64,
          status: 'warning',
        },
      ],
      boundaryConditions: [
        { label: '解算边界', value: '主扇频率 44.8Hz，外界温差 7.2°C' },
        { label: '参与回路', value: '5 条主回路 / 12 条支路' },
        { label: '阻力修正', value: '依据近 24h 在线风速与压差反演' },
        { label: '收敛阈值', value: '风量偏差 ≤ 3%，压差残差 ≤ 15Pa' },
      ],
      steps: [
        { color: 'blue', title: '边界采集', description: '08:00 完成自然压与温差边界条件采集。' },
        { color: 'green', title: '阻力修正', description: '08:01 结合在线测点修正关键支路阻力系数。' },
        { color: 'orange', title: '主回路迭代', description: '08:02 完成 6 轮自然分风迭代并达到收敛条件。' },
        { color: 'blue', title: '风险校核', description: '08:03 完成回流与低风速风险校核，输出调节建议。' },
      ],
      tableTitle: '自然分风回路清单',
      tableRows: [
        {
          key: 'N-01',
          naturalPressure: '+62 Pa',
          region: '东翼回风巷',
          branch: '主回路 A',
          target: '2100 m³/min',
          calculated: '2160 m³/min',
          deviation: '+2.9%',
          action: '保持当前风门开度',
          status: 'normal',
        },
        {
          key: 'N-02',
          naturalPressure: '+48 Pa',
          region: '3105 工作面',
          branch: '工作面回路',
          target: '1680 m³/min',
          calculated: '1650 m³/min',
          deviation: '-1.8%',
          action: '局扇待命，无需介入',
          status: 'running',
        },
        {
          key: 'N-03',
          naturalPressure: '+36 Pa',
          region: '北二采区',
          branch: '采区回路 B',
          target: '1320 m³/min',
          calculated: '1290 m³/min',
          deviation: '-2.3%',
          action: '建议维持分风状态',
          status: 'normal',
        },
        {
          key: 'N-04',
          naturalPressure: '+18 Pa',
          region: '西翼联络巷',
          branch: '联络支路 C',
          target: '980 m³/min',
          calculated: '920 m³/min',
          deviation: '-6.1%',
          action: '优先调整 D-12 风门',
          status: 'warning',
        },
        {
          key: 'N-05',
          naturalPressure: '+24 Pa',
          region: '主运输大巷',
          branch: '运输回路 D',
          target: '1560 m³/min',
          calculated: '1510 m³/min',
          deviation: '-3.2%',
          action: '观察下一周期自然压变化',
          status: 'warning',
        },
      ],
    };
  }

  return {
    actions: ['生成按需配风方案', '下发设备联动建议'],
    kpis: [
      { key: 'demandCompliance', name: '需风满足率', value: 97.2, unit: '%', trend: 5, status: 'normal' },
      { key: 'coreCoverage', name: '重点区域保障率', value: 99.1, unit: '%', trend: 3, status: 'normal' },
      { key: 'dynamicMargin', name: '动态调节裕度', value: 12.6, unit: '%', trend: 2, status: 'running' },
      { key: 'pendingBranch', name: '待调整支路数', value: 3, unit: '条', trend: -2, status: 'warning' },
      { key: 'executionReady', name: '设备联动就绪度', value: 88.4, unit: '%', trend: 4, status: 'running' },
      { key: 'savingDrop', name: '预计能耗降幅', value: 14.8, unit: '%', trend: 6, status: 'normal' },
    ],
    trendTitle: '需风量与配风量动态匹配',
    trendOption: buildDualLineOption({
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
      leftName: '需风量',
      leftData: [6120, 6480, 6950, 7280, 7420, 7180, 6840],
      rightName: '当前配风量',
      rightData: [5980, 6400, 6880, 7190, 7360, 7100, 6760],
      unitSuffix: 'm³/min',
    }),
    compareTitle: '作业区域需风与配风对比',
    compareOption: buildCompareBarOption({
      categories: ['3105 工作面', '东翼回风', '辅助运输巷', '北二采区', '主运输巷'],
      leftName: '需风量',
      leftData: [1880, 1420, 1160, 1340, 1260],
      rightName: '当前配风量',
      rightData: [1910, 1460, 1080, 1310, 1230],
      unitSuffix: 'm³/min',
    }),
    complianceTitle: '按需分风满足度',
    complianceOption: buildDonutOption({
      centerTitle: '重点满足',
      centerValue: '97.2%',
      data: [
        { name: '完全满足', value: 78 },
        { name: '可接受偏差', value: 19 },
        { name: '待补风', value: 2 },
        { name: '待复核', value: 1 },
      ],
    }),
    summaryLabel: '需风满足率',
    summaryValue: '97.2',
    summaryUnit: '%',
    summaryStatus: 'normal',
    summaryDescription:
      '重点作业区按需配风已基本到位，当前仅辅助运输巷存在小幅补风需求，可通过设备联动快速闭环。',
    highlights: [
      '3105 工作面已形成优先保供风流，满足连续高负荷作业条件。',
      '辅助运输巷存在 80 m³/min 配风缺口，建议联动 W-08 风窗补风。',
      '按需分风模式下预计较稳态配风再降低 14.8% 能耗。',
    ],
    queueTitle: '按需调节任务队列',
    queueItems: [
      {
        key: 'demand-face',
        name: '3105 工作面保供',
        description: '需风满足，继续保持优先级最高的配风策略。',
        progress: 98,
        status: 'normal',
      },
      {
        key: 'demand-aux',
        name: '辅助运输巷补风',
        description: '建议开启 W-08 风窗 12% 角度补偿配风缺口。',
        progress: 72,
        status: 'warning',
      },
      {
        key: 'demand-return',
        name: '东翼回风联动',
        description: '已具备联动条件，可根据下一周期需风变化自动执行。',
        progress: 86,
        status: 'running',
      },
    ],
    boundaryConditions: [
      { label: '需风来源', value: '生产计划 + 人员分布 + 环境监测联合驱动' },
      { label: '控制周期', value: '5 分钟滚动解算 / 15 分钟执行校核' },
      { label: '约束条件', value: '瓦斯、温湿度与设备动作次数三重约束' },
      { label: '调节对象', value: '主扇频率、局扇待命、风门与风窗联动' },
    ],
    steps: [
      { color: 'blue', title: '需风识别', description: '08:00 汇聚作业计划、人员轨迹与环境参数识别需风负荷。' },
      { color: 'green', title: '能力校核', description: '08:01 完成主扇与关键调节设备能力边界校核。' },
      { color: 'orange', title: '按需分配', description: '08:02 根据优先级完成 3 轮按需分风迭代。' },
      { color: 'blue', title: '联动发布', description: '08:03 输出风门、风窗与局扇联动建议并进入执行准备。' },
    ],
    tableTitle: '按需分风区域清单',
    tableRows: [
      {
        key: 'D-01',
        region: '3105 工作面',
        branch: '作业主回路',
        target: '1880 m³/min',
        calculated: '1910 m³/min',
        deviation: '+1.6%',
        action: '保持优先保供',
        status: 'normal',
      },
      {
        key: 'D-02',
        region: '东翼回风巷',
        branch: '回风回路 A',
        target: '1420 m³/min',
        calculated: '1460 m³/min',
        deviation: '+2.8%',
        action: '锁定当前风门策略',
        status: 'running',
      },
      {
        key: 'D-03',
        region: '辅助运输巷',
        branch: '辅助支路 B',
        target: '1160 m³/min',
        calculated: '1080 m³/min',
        deviation: '-6.9%',
        action: '联动 W-08 风窗补风',
        status: 'warning',
      },
      {
        key: 'D-04',
        region: '北二采区',
        branch: '采区回路 C',
        target: '1340 m³/min',
        calculated: '1310 m³/min',
        deviation: '-2.2%',
        action: '维持当前配风',
        status: 'normal',
      },
      {
        key: 'D-05',
        region: '主运输大巷',
        branch: '运输支路 D',
        target: '1260 m³/min',
        calculated: '1230 m³/min',
        deviation: '-2.4%',
        action: '下一周期复核',
        status: 'running',
      },
    ],
  };
}

function getDeviationColor(status: StatusLevel) {
  if (status === 'normal') return '#52c41a';
  if (status === 'running') return '#2f7fd2';
  if (status === 'warning') return '#faad14';
  if (status === 'alert') return '#fa8c16';
  if (status === 'critical') return '#ff4d4f';
  return '#8c8c8c';
}

export function AirDistributionAnalysisTemplate({ title, mode }: AirDistributionAnalysisTemplateProps) {
  const config = useMemo(() => buildPageConfig(mode), [mode]);
  const isNatural = mode === 'natural';

  const columns: ColumnsType<SolveRow> = [
    {
      title: '区域',
      dataIndex: 'region',
      key: 'region',
      width: 160,
    },
    {
      title: '回路/支路',
      dataIndex: 'branch',
      key: 'branch',
      width: 140,
    },
    {
      title: mode === 'natural' ? '目标风量' : '需风量',
      dataIndex: 'target',
      key: 'target',
      width: 130,
    },
    {
      title: mode === 'natural' ? '解算风量' : '当前配风量',
      dataIndex: 'calculated',
      key: 'calculated',
      width: 140,
      render: (value: string) => <Typography.Text strong>{value}</Typography.Text>,
    },
    {
      title: '偏差',
      dataIndex: 'deviation',
      key: 'deviation',
      width: 110,
      render: (value: string, record) => (
        <Typography.Text style={{ color: getDeviationColor(record.status), fontWeight: 700 }}>
          {value}
        </Typography.Text>
      ),
    },
    {
      title: '建议动作',
      dataIndex: 'action',
      key: 'action',
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: StatusLevel) => <StatusTag status={status} />,
    },
  ];

  const displayColumns: ColumnsType<SolveRow> =
    mode === 'natural'
      ? [
          columns[0],
          columns[1],
          {
            title: '自然压贡献',
            dataIndex: 'naturalPressure',
            key: 'naturalPressure',
            width: 120,
            render: (value: string | undefined) => (
              <Typography.Text style={{ color: '#2f7fd2', fontWeight: 700 }}>{value ?? '--'}</Typography.Text>
            ),
          },
          ...columns.slice(2),
        ]
      : columns;

  return (
    <div className={isNatural ? 'page-wrapper natural-empty-cards' : 'page-wrapper'}>
      {!isNatural && <PageToolbar moduleName="解算分析" title={title} actions={config.actions} />}
      {isNatural && (
        <style>{`
          .natural-empty-cards .page-card .ant-card-body {
            min-height: 180px;
          }

          .natural-empty-cards .ant-card-body > * {
            display: none !important;
          }

          .natural-empty-cards .kpi-card .ant-card-body {
            min-height: 126px;
          }
        `}</style>
      )}

      {mode === 'natural' && config.overviewFacts && config.recommendations && (
        <Row gutter={[12, 12]}>
          <Col xs={24} xl={15}>
            <Card className="page-card" size="small" title={buildCardTitle(<CheckCircleOutlined />, '自然分风工况概览')}>
              <Space direction="vertical" size={14} style={{ width: '100%' }}>
                <Typography.Paragraph style={{ marginBottom: 0 }}>
                  {config.overviewDescription}
                </Typography.Paragraph>

                <Space wrap size={[8, 8]}>
                  {config.overviewTags?.map((item) => (
                    <Tag key={item} color="blue">
                      {item}
                    </Tag>
                  ))}
                </Space>

                <Row gutter={[12, 12]}>
                  {config.overviewFacts.map((item) => (
                    <Col key={item.label} xs={24} sm={12}>
                      <div
                        style={{
                          height: '100%',
                          padding: 14,
                          borderRadius: 10,
                          border: '1px solid rgba(31, 95, 159, 0.14)',
                          background: 'linear-gradient(180deg, rgba(248, 251, 255, 0.96) 0%, rgba(235, 243, 251, 0.92) 100%)',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: 8,
                            marginBottom: 10,
                          }}
                        >
                          <Typography.Text type="secondary">{item.label}</Typography.Text>
                          {item.status && <StatusTag status={item.status} />}
                        </div>
                        <Typography.Title level={4} style={{ margin: '0 0 6px', fontSize: 20 }}>
                          {item.value}
                        </Typography.Title>
                        <Typography.Text type="secondary">{item.remark}</Typography.Text>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Space>
            </Card>
          </Col>

          <Col xs={24} xl={9}>
            <Card className="page-card" size="small" title={buildCardTitle(<AlertOutlined />, config.recommendationTitle ?? '建议动作')}>
              <List
                itemLayout="vertical"
                dataSource={config.recommendations}
                renderItem={(item) => (
                  <List.Item key={item.key} style={{ paddingBlock: 12 }}>
                    <Space direction="vertical" size={8} style={{ width: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                        <Typography.Text strong>{item.title}</Typography.Text>
                        <StatusTag status={item.status} />
                      </div>
                      <Typography.Text>{item.detail}</Typography.Text>
                      <Typography.Text type="secondary">预期效果：{item.expected}</Typography.Text>
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      )}

      <Row gutter={[12, 12]}>
        {config.kpis.map((item) => (
          <Col key={item.key} xs={24} sm={12} md={8} lg={8} xl={4}>
            <KpiCard item={item} />
          </Col>
        ))}
      </Row>

      <Row gutter={[12, 12]}>
        <Col xs={24} xl={10}>
          <Card className="page-card" size="small" title={buildCardTitle(<LineChartOutlined />, config.trendTitle)}>
            <ChartPanel option={config.trendOption} height={320} noCard />
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card className="page-card" size="small" title={buildCardTitle(<BarChartOutlined />, config.compareTitle)}>
            <ChartPanel option={config.compareOption} height={320} noCard />
          </Card>
        </Col>
        <Col xs={24} xl={6}>
          <Card className="page-card" size="small" title={buildCardTitle(<ThunderboltOutlined />, config.complianceTitle)}>
            <ChartPanel option={config.complianceOption} height={320} noCard />
          </Card>
        </Col>
      </Row>

      <Row gutter={[12, 12]}>
        <Col xs={24} xl={16}>
          <Card className="page-card" size="small" title={buildCardTitle(<ClusterOutlined />, config.tableTitle)}>
            <Table<SolveRow>
              rowKey="key"
              size="small"
              pagination={false}
              columns={displayColumns}
              dataSource={config.tableRows}
              scroll={{ x: mode === 'natural' ? 1040 : 920 }}
            />
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Space direction="vertical" size={12} style={{ width: '100%' }}>
            <Card className="page-card" size="small" title={buildCardTitle(<CheckCircleOutlined />, '解算结论')}>
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                <Space style={{ width: '100%', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Space direction="vertical" size={2}>
                    <Typography.Text type="secondary">{config.summaryLabel}</Typography.Text>
                    <Typography.Title level={2} style={{ margin: 0 }}>
                      {config.summaryValue}
                      <Typography.Text style={{ fontSize: 18, marginLeft: 4 }}>{config.summaryUnit}</Typography.Text>
                    </Typography.Title>
                  </Space>
                  <StatusTag status={config.summaryStatus} />
                </Space>

                <Typography.Paragraph style={{ marginBottom: 0 }}>{config.summaryDescription}</Typography.Paragraph>

                <List
                  size="small"
                  split={false}
                  dataSource={config.highlights}
                  renderItem={(item) => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Space align="start" size={8}>
                        <CheckCircleOutlined style={{ color: '#52c41a', marginTop: 4 }} />
                        <Typography.Text>{item}</Typography.Text>
                      </Space>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>

            <Card className="page-card" size="small" title={buildCardTitle(<AlertOutlined />, config.queueTitle)}>
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                {config.queueItems.map((item) => (
                  <div key={item.key}>
                    <Space style={{ width: '100%', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Space direction="vertical" size={2}>
                        <Typography.Text strong>{item.name}</Typography.Text>
                        <Typography.Text type="secondary">{item.description}</Typography.Text>
                      </Space>
                      <StatusTag status={item.status} />
                    </Space>
                    <Progress percent={item.progress} size="small" style={{ marginTop: 8 }} />
                  </div>
                ))}
              </Space>
            </Card>

            <Card className="page-card" size="small" title={buildCardTitle(<LineChartOutlined />, '边界条件与流程')}>
              <Descriptions column={1} size="small" labelStyle={{ width: 88 }}>
                {config.boundaryConditions.map((item) => (
                  <Descriptions.Item key={item.label} label={item.label}>
                    {item.value}
                  </Descriptions.Item>
                ))}
              </Descriptions>

              <Divider style={{ margin: '14px 0' }} />

              <Timeline
                items={config.steps.map((item) => ({
                  color: item.color,
                  children: (
                    <Space direction="vertical" size={0}>
                      <Typography.Text strong>{item.title}</Typography.Text>
                      <Typography.Text type="secondary">{item.description}</Typography.Text>
                    </Space>
                  ),
                }))}
              />
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
