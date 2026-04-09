import { useMemo, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Divider,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Space,
  Statistic,
  Table,
  Tag,
  Typography,
  Upload,
  message,
} from 'antd';
import {
  BranchesOutlined,
  CheckCircleOutlined,
  DashboardOutlined,
  DownloadOutlined,
  FileExcelOutlined,
  LineChartOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  ReloadOutlined,
  SearchOutlined,
  ThunderboltOutlined,
  UploadOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { UploadProps } from 'antd';
import type { EChartsOption } from 'echarts';
import { ChartPanel } from '../../components/charts/ChartPanel';
import './NaturalAirDistributionPage.css';

interface RoadwayStatus {
  id: string;
  name: string;
  type: string;
  resistance: number;
  naturalPressure: number;
  currentAirflow?: number;
  minRequiredAirflow: number;
  maxRequiredAirflow?: number;
  hasMeasurement: boolean;
  status: 'sufficient' | 'insufficient' | 'excessive' | 'unknown';
}

interface CalculationResult {
  roadwayId: string;
  roadwayName: string;
  calculatedAirflow: number;
  airflowDirection: 'forward' | 'backward';
  airVelocity: number;
  resistance: number;
  pressureDrop: number;
  status: 'normal' | 'warning' | 'danger';
}

interface WarningInfo {
  id: string;
  level: 'high' | 'medium' | 'low';
  location: string;
  description: string;
  value: number;
  threshold: number;
}

interface AdjustmentPlan {
  id: string;
  location: string;
  currentValue: number;
  targetValue: number;
  adjustmentType: string;
  priority: number;
}

interface MainFanPerformance {
  key: string;
  fanName: string;
  station: string;
  model: string;
  solveRole: string;
  frequency: number;
  airflow: number;
  pressure: number;
  efficiency: number;
  bladeAngle: number;
  motorPower: number;
  loadRate: number;
  curveColor: string;
  curvePoints: Array<[number, number]>;
}

const roadwayStatusData: RoadwayStatus[] = [
  {
    id: 'R001',
    name: '主进风井',
    type: '进风井',
    resistance: 0.025,
    naturalPressure: 85.3,
    currentAirflow: 1850.5,
    minRequiredAirflow: 1800,
    maxRequiredAirflow: 2200,
    hasMeasurement: true,
    status: 'sufficient',
  },
  {
    id: 'R002',
    name: '副进风井',
    type: '进风井',
    resistance: 0.028,
    naturalPressure: 112.5,
    currentAirflow: 1420.3,
    minRequiredAirflow: 1500,
    maxRequiredAirflow: 1800,
    hasMeasurement: true,
    status: 'insufficient',
  },
  {
    id: 'R003',
    name: '东翼总进风巷',
    type: '进风巷',
    resistance: 0.032,
    naturalPressure: 45.2,
    currentAirflow: 680.2,
    minRequiredAirflow: 650,
    maxRequiredAirflow: 850,
    hasMeasurement: true,
    status: 'sufficient',
  },
  {
    id: 'R004',
    name: '西翼总进风巷',
    type: '进风巷',
    resistance: 0.035,
    naturalPressure: 38.7,
    minRequiredAirflow: 650,
    maxRequiredAirflow: 850,
    hasMeasurement: false,
    status: 'unknown',
  },
  {
    id: 'R005',
    name: '1301工作面进风巷',
    type: '采面进风',
    resistance: 0.042,
    naturalPressure: 12.5,
    currentAirflow: 285.5,
    minRequiredAirflow: 300,
    maxRequiredAirflow: 400,
    hasMeasurement: true,
    status: 'insufficient',
  },
  {
    id: 'R006',
    name: '1301工作面回风巷',
    type: '采面回风',
    resistance: 0.045,
    naturalPressure: -15.8,
    currentAirflow: 292.4,
    minRequiredAirflow: 300,
    maxRequiredAirflow: 400,
    hasMeasurement: true,
    status: 'insufficient',
  },
  {
    id: 'R007',
    name: '中央运输石门',
    type: '运输巷',
    resistance: 0.045,
    naturalPressure: 22.3,
    currentAirflow: 180.5,
    minRequiredAirflow: 180,
    maxRequiredAirflow: 250,
    hasMeasurement: true,
    status: 'sufficient',
  },
  {
    id: 'R008',
    name: '主回风井',
    type: '回风井',
    resistance: 0.022,
    naturalPressure: -95.8,
    currentAirflow: 1880.2,
    minRequiredAirflow: 1850,
    maxRequiredAirflow: 2300,
    hasMeasurement: true,
    status: 'sufficient',
  },
];

const calculationResultsData: CalculationResult[] = [
  {
    roadwayId: 'R001',
    roadwayName: '主进风井',
    calculatedAirflow: 1850.5,
    airflowDirection: 'forward',
    airVelocity: 6.2,
    resistance: 0.025,
    pressureDrop: 85.3,
    status: 'normal',
  },
  {
    roadwayId: 'R002',
    roadwayName: '副进风井',
    calculatedAirflow: 1420.3,
    airflowDirection: 'forward',
    airVelocity: 5.8,
    resistance: 0.028,
    pressureDrop: 112.5,
    status: 'warning',
  },
  {
    roadwayId: 'R005',
    roadwayName: '1301工作面进风巷',
    calculatedAirflow: 285.5,
    airflowDirection: 'forward',
    airVelocity: 3.8,
    resistance: 0.042,
    pressureDrop: 34.2,
    status: 'warning',
  },
  {
    roadwayId: 'R006',
    roadwayName: '1301工作面回风巷',
    calculatedAirflow: 292.4,
    airflowDirection: 'backward',
    airVelocity: 3.7,
    resistance: 0.045,
    pressureDrop: 35.6,
    status: 'warning',
  },
  {
    roadwayId: 'R007',
    roadwayName: '中央运输石门',
    calculatedAirflow: 180.5,
    airflowDirection: 'forward',
    airVelocity: 3.2,
    resistance: 0.045,
    pressureDrop: 14.7,
    status: 'normal',
  },
  {
    roadwayId: 'R008',
    roadwayName: '主回风井',
    calculatedAirflow: 1880.2,
    airflowDirection: 'backward',
    airVelocity: 6.3,
    resistance: 0.022,
    pressureDrop: 77.8,
    status: 'normal',
  },
];

const warningData: WarningInfo[] = [
  {
    id: 'W001',
    level: 'high',
    location: '副进风井',
    description: '风量不足',
    value: 1420.3,
    threshold: 1500,
  },
  {
    id: 'W002',
    level: 'medium',
    location: '1301工作面进风巷',
    description: '局部阻力偏高',
    value: 0.042,
    threshold: 0.038,
  },
  {
    id: 'W003',
    level: 'low',
    location: '1301工作面回风巷',
    description: '自然压差偏低',
    value: -15.8,
    threshold: -18,
  },
];

const adjustmentPlanData: AdjustmentPlan[] = [
  {
    id: 'A001',
    location: '副进风井风门',
    currentValue: 45,
    targetValue: 60,
    adjustmentType: '开度调整',
    priority: 1,
  },
  {
    id: 'A002',
    location: '1301工作面调节风窗',
    currentValue: 52,
    targetValue: 66,
    adjustmentType: '开度调整',
    priority: 2,
  },
  {
    id: 'A003',
    location: '1#主通风机频率',
    currentValue: 47.5,
    targetValue: 48.3,
    adjustmentType: '频率微调',
    priority: 3,
  },
];

const mainFanPerformanceData: MainFanPerformance[] = [
  {
    key: 'MF-01',
    fanName: '1#主通风机',
    station: '东翼主扇房',
    model: 'FBCDZ-8-No32',
    solveRole: '解算主机',
    frequency: 47.5,
    airflow: 19180,
    pressure: 2575,
    efficiency: 86.4,
    bladeAngle: 32,
    motorPower: 1380,
    loadRate: 81,
    curveColor: '#4da3ff',
    curvePoints: [
      [12000, 3260],
      [14000, 3135],
      [16000, 2988],
      [18000, 2788],
      [20000, 2480],
      [22000, 2145],
    ],
  },
  {
    key: 'MF-02',
    fanName: '2#主通风机',
    station: '西翼主扇房',
    model: 'FBCDZ-8-No30',
    solveRole: '联调备用机',
    frequency: 45.8,
    airflow: 17640,
    pressure: 2410,
    efficiency: 84.9,
    bladeAngle: 30,
    motorPower: 1265,
    loadRate: 76,
    curveColor: '#7b61ff',
    curvePoints: [
      [12000, 3020],
      [14000, 2910],
      [16000, 2745],
      [18000, 2520],
      [20000, 2240],
      [22000, 1970],
    ],
  },
];

function renderRoadwayStatus(status: RoadwayStatus['status']) {
  const map = {
    sufficient: { color: 'success', label: '充足' },
    insufficient: { color: 'error', label: '不足' },
    excessive: { color: 'warning', label: '过量' },
    unknown: { color: 'default', label: '待解算' },
  } as const;

  return <Tag color={map[status].color}>{map[status].label}</Tag>;
}

function renderResultStatus(status: CalculationResult['status']) {
  const map = {
    normal: { color: 'success', label: '正常' },
    warning: { color: 'warning', label: '预警' },
    danger: { color: 'error', label: '异常' },
  } as const;

  return <Tag color={map[status].color}>{map[status].label}</Tag>;
}

export default function NaturalAirDistributionPage() {
  const [calculating, setCalculating] = useState(false);
  const [calculationMethod, setCalculationMethod] = useState('hardy-cross');
  const [convergenceCriteria, setConvergenceCriteria] = useState(0.001);
  const [maxIterations, setMaxIterations] = useState(100);
  const [roadwayFilter, setRoadwayFilter] = useState<'all' | 'sufficient' | 'insufficient'>('all');
  const [searchText, setSearchText] = useState('');
  const [dataImported, setDataImported] = useState(false);
  const [importedFileName, setImportedFileName] = useState('');

  const uploadProps: UploadProps = {
    name: 'file',
    accept: '.xlsx,.xls',
    beforeUpload: (file) => {
      const isExcel =
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'application/vnd.ms-excel';

      if (!isExcel) {
        message.error('只能上传 Excel 文件');
        return false;
      }

      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        message.error('文件大小不能超过 10MB');
        return false;
      }

      setDataImported(true);
      setImportedFileName(file.name);
      message.success(`${file.name} 导入成功`);
      return false;
    },
    showUploadList: false,
  };

  const handleDownloadTemplate = () => {
    message.info('正在下载解算数据模板...');
  };

  const handleStartCalculation = () => {
    setCalculating(true);
    window.setTimeout(() => setCalculating(false), 2400);
  };

  const totalCurrentAirflow = roadwayStatusData.reduce((sum, item) => sum + (item.currentAirflow || 0), 0);
  const totalRequiredAirflow = roadwayStatusData.reduce((sum, item) => sum + item.minRequiredAirflow, 0);
  const measuredCount = roadwayStatusData.filter((item) => item.hasMeasurement).length;

  const filteredRoadways = useMemo(
    () =>
      roadwayStatusData.filter((item) => {
        const matchFilter = roadwayFilter === 'all' || item.status === roadwayFilter;
        const matchSearch =
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.id.toLowerCase().includes(searchText.toLowerCase());

        return matchFilter && matchSearch;
      }),
    [roadwayFilter, searchText],
  );

  const mainFanCurveOption = useMemo<EChartsOption>(
    () => ({
      backgroundColor: 'transparent',
      legend: {
        top: 4,
        itemWidth: 20,
        itemHeight: 10,
        textStyle: { color: '#d7ebff', fontSize: 12 },
        data: ['1#主通风机性能曲线', '2#主通风机性能曲线', '1#主通风机工况点', '2#主通风机工况点'],
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(9, 27, 47, 0.92)',
        borderColor: 'rgba(120, 190, 255, 0.45)',
        textStyle: { color: '#e8f4ff' },
        formatter: (params: any) => {
          const [flow, pressure] = Array.isArray(params.data) ? params.data : [0, 0];
          return `${params.seriesName}<br/>风量: ${flow} m3/min<br/>风压: ${pressure} Pa`;
        },
      },
      grid: { left: 60, right: 24, top: 56, bottom: 48 },
      xAxis: {
        type: 'value',
        name: '风量 (m3/min)',
        min: 11500,
        max: 22500,
        axisLine: { lineStyle: { color: 'rgba(145, 213, 255, 0.5)' } },
        splitLine: { lineStyle: { color: 'rgba(145, 213, 255, 0.12)' } },
        axisLabel: { color: '#b8d9ff' },
        nameTextStyle: { color: '#b8d9ff' },
      },
      yAxis: {
        type: 'value',
        name: '风压 (Pa)',
        min: 1850,
        max: 3400,
        axisLine: { lineStyle: { color: 'rgba(145, 213, 255, 0.5)' } },
        splitLine: { lineStyle: { color: 'rgba(145, 213, 255, 0.12)' } },
        axisLabel: { color: '#b8d9ff' },
        nameTextStyle: { color: '#b8d9ff' },
      },
      series: [
        {
          name: '1#主通风机性能曲线',
          type: 'line',
          smooth: true,
          symbol: 'none',
          data: mainFanPerformanceData[0].curvePoints,
          lineStyle: { width: 3, color: mainFanPerformanceData[0].curveColor },
          areaStyle: { color: 'rgba(77, 163, 255, 0.10)' },
        },
        {
          name: '2#主通风机性能曲线',
          type: 'line',
          smooth: true,
          symbol: 'none',
          data: mainFanPerformanceData[1].curvePoints,
          lineStyle: { width: 3, color: mainFanPerformanceData[1].curveColor },
          areaStyle: { color: 'rgba(123, 97, 255, 0.08)' },
        },
        {
          name: '1#主通风机工况点',
          type: 'scatter',
          data: [[mainFanPerformanceData[0].airflow, mainFanPerformanceData[0].pressure]],
          symbolSize: 15,
          itemStyle: {
            color: mainFanPerformanceData[0].curveColor,
            borderColor: '#ffffff',
            borderWidth: 2,
            shadowBlur: 18,
            shadowColor: 'rgba(77, 163, 255, 0.45)',
          },
          label: { show: true, position: 'top', color: '#d7ebff', formatter: '1#工况点' },
        },
        {
          name: '2#主通风机工况点',
          type: 'scatter',
          data: [[mainFanPerformanceData[1].airflow, mainFanPerformanceData[1].pressure]],
          symbolSize: 15,
          itemStyle: {
            color: mainFanPerformanceData[1].curveColor,
            borderColor: '#ffffff',
            borderWidth: 2,
            shadowBlur: 18,
            shadowColor: 'rgba(123, 97, 255, 0.45)',
          },
          label: { show: true, position: 'top', color: '#d7ebff', formatter: '2#工况点' },
        },
      ],
    }),
    [],
  );

  const roadwayColumns: ColumnsType<RoadwayStatus> = [
    { title: '巷道编号', dataIndex: 'id', key: 'id', width: 100 },
    { title: '巷道名称', dataIndex: 'name', key: 'name', width: 180 },
    { title: '类型', dataIndex: 'type', key: 'type', width: 110 },
    {
      title: '风阻',
      dataIndex: 'resistance',
      key: 'resistance',
      width: 100,
      render: (value) => <span style={{ color: '#69c0ff', fontWeight: 600 }}>{value.toFixed(3)}</span>,
    },
    {
      title: '自然风压(Pa)',
      dataIndex: 'naturalPressure',
      key: 'naturalPressure',
      width: 120,
      render: (value) => <span style={{ color: value >= 0 ? '#52c41a' : '#ff7875' }}>{value > 0 ? '+' : ''}{value.toFixed(1)}</span>,
    },
    {
      title: '实测风量(m3/min)',
      dataIndex: 'currentAirflow',
      key: 'currentAirflow',
      width: 140,
      render: (value, record) => (record.hasMeasurement ? value?.toFixed(1) : <span style={{ color: '#8ca4be' }}>无测点</span>),
    },
    { title: '最小需风量(m3/min)', dataIndex: 'minRequiredAirflow', key: 'minRequiredAirflow', width: 150 },
    {
      title: '最大需风量(m3/min)',
      dataIndex: 'maxRequiredAirflow',
      key: 'maxRequiredAirflow',
      width: 150,
      render: (value) => value ?? '-',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: renderRoadwayStatus,
    },
  ];

  const resultColumns: ColumnsType<CalculationResult> = [
    { title: '巷道编号', dataIndex: 'roadwayId', key: 'roadwayId', width: 100 },
    { title: '巷道名称', dataIndex: 'roadwayName', key: 'roadwayName', width: 180 },
    { title: '解算风量(m3/min)', dataIndex: 'calculatedAirflow', key: 'calculatedAirflow', width: 140 },
    {
      title: '风流方向',
      dataIndex: 'airflowDirection',
      key: 'airflowDirection',
      width: 100,
      render: (value) => <Tag color={value === 'forward' ? 'blue' : 'green'}>{value === 'forward' ? '正向' : '反向'}</Tag>,
    },
    { title: '风速(m/s)', dataIndex: 'airVelocity', key: 'airVelocity', width: 100 },
    { title: '风阻', dataIndex: 'resistance', key: 'resistance', width: 90 },
    { title: '压降(Pa)', dataIndex: 'pressureDrop', key: 'pressureDrop', width: 100 },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: renderResultStatus,
    },
  ];

  const warningColumns: ColumnsType<WarningInfo> = [
    {
      title: '级别',
      dataIndex: 'level',
      key: 'level',
      width: 90,
      render: (value) => (
        <Tag color={value === 'high' ? 'red' : value === 'medium' ? 'orange' : 'blue'}>
          {value === 'high' ? '高' : value === 'medium' ? '中' : '低'}
        </Tag>
      ),
    },
    { title: '位置', dataIndex: 'location', key: 'location', width: 180 },
    { title: '描述', dataIndex: 'description', key: 'description', width: 140 },
    { title: '当前值', dataIndex: 'value', key: 'value', width: 100 },
    { title: '阈值', dataIndex: 'threshold', key: 'threshold', width: 100 },
  ];

  const planColumns: ColumnsType<AdjustmentPlan> = [
    { title: '优先级', dataIndex: 'priority', key: 'priority', width: 90, render: (value) => `P${value}` },
    { title: '调整位置', dataIndex: 'location', key: 'location', width: 180 },
    { title: '当前值', dataIndex: 'currentValue', key: 'currentValue', width: 100 },
    { title: '目标值', dataIndex: 'targetValue', key: 'targetValue', width: 100 },
    { title: '调整类型', dataIndex: 'adjustmentType', key: 'adjustmentType', width: 120 },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: () => (
        <Space>
          <Button type="link" size="small">
            应用
          </Button>
          <Button type="link" size="small" danger>
            忽略
          </Button>
        </Space>
      ),
    },
  ];

  const mainFanColumns: ColumnsType<MainFanPerformance> = [
    {
      title: '主通风机',
      dataIndex: 'fanName',
      key: 'fanName',
      width: 130,
      render: (value, record) => (
        <Space size={8}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: record.curveColor,
              boxShadow: `0 0 10px ${record.curveColor}`,
              display: 'inline-block',
            }}
          />
          <Typography.Text strong>{value}</Typography.Text>
        </Space>
      ),
    },
    { title: '解算角色', dataIndex: 'solveRole', key: 'solveRole', width: 110 },
    { title: '频率(Hz)', dataIndex: 'frequency', key: 'frequency', width: 90, align: 'right' },
    { title: '风量(m3/min)', dataIndex: 'airflow', key: 'airflow', width: 120, align: 'right' },
    { title: '风压(Pa)', dataIndex: 'pressure', key: 'pressure', width: 100, align: 'right' },
    { title: '效率(%)', dataIndex: 'efficiency', key: 'efficiency', width: 90, align: 'right' },
    { title: '叶片角度(deg)', dataIndex: 'bladeAngle', key: 'bladeAngle', width: 110, align: 'right' },
    { title: '电机功率(kW)', dataIndex: 'motorPower', key: 'motorPower', width: 110, align: 'right' },
    { title: '负载率(%)', dataIndex: 'loadRate', key: 'loadRate', width: 90, align: 'right' },
  ];

  return (
    <div className="natural-air-distribution-page">
      <Card
        title={
          <span>
            <DashboardOutlined style={{ marginRight: 8 }} />
            通风状态
          </span>
        }
        className="status-card"
        extra={<Tag color="blue">解算前状态</Tag>}
      >
        <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
          <Col span={6}>
            <Statistic title="总巷道数" value={roadwayStatusData.length} suffix="条" valueStyle={{ color: '#ffffff' }} />
          </Col>
          <Col span={6}>
            <Statistic title="当前总风量" value={Number(totalCurrentAirflow.toFixed(1))} suffix="m3/min" valueStyle={{ color: '#52c41a' }} />
          </Col>
          <Col span={6}>
            <Statistic title="需求总风量" value={totalRequiredAirflow} suffix="m3/min" valueStyle={{ color: '#1890ff' }} />
          </Col>
          <Col span={6}>
            <Statistic title="有实测风量巷道" value={measuredCount} suffix="条" valueStyle={{ color: '#faad14' }} />
          </Col>
        </Row>

        <div style={{ marginTop: 16 }}>
          <div
            style={{
              marginBottom: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <BranchesOutlined />
              巷道通风现状
              <Tag color="blue">共 {filteredRoadways.length} 条</Tag>
            </div>
            <Space wrap>
              <Input
                placeholder="搜索巷道名称或编号"
                prefix={<SearchOutlined />}
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                style={{ width: 220 }}
                allowClear
              />
              <Radio.Group value={roadwayFilter} onChange={(event) => setRoadwayFilter(event.target.value)} buttonStyle="solid">
                <Radio.Button value="all">全部</Radio.Button>
                <Radio.Button value="sufficient">充足</Radio.Button>
                <Radio.Button value="insufficient">不足</Radio.Button>
              </Radio.Group>
            </Space>
          </div>

          <Table
            columns={roadwayColumns}
            dataSource={filteredRoadways}
            rowKey="id"
            pagination={{
              pageSize: 6,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total) => `共 ${total} 条巷道`,
              pageSizeOptions: ['6', '10', '20'],
            }}
            size="small"
            scroll={{ y: 360 }}
          />
        </div>
      </Card>

      <Card
        title={
          <span>
            <LineChartOutlined style={{ marginRight: 8 }} />
            主风机性能曲线
          </span>
        }
        className="performance-card"
        extra={
          <Space size={8}>
            <Tag color="success">双机联算</Tag>
            <Tag color="processing">实时刷新 30s</Tag>
          </Space>
        }
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} xl={15}>
            <div className="fan-curve-panel">
              <ChartPanel option={mainFanCurveOption} height={360} noCard />
            </div>
          </Col>
          <Col xs={24} xl={9}>
            <Space direction="vertical" size={12} style={{ width: '100%' }}>
              {mainFanPerformanceData.map((fan) => (
                <div key={fan.key} className="fan-parameter-card">
                  <div className="fan-parameter-header">
                    <Space size={10}>
                      <span
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          background: fan.curveColor,
                          boxShadow: `0 0 14px ${fan.curveColor}`,
                          display: 'inline-block',
                        }}
                      />
                      <div>
                        <Typography.Text strong style={{ display: 'block', color: '#ffffff' }}>
                          {fan.fanName}
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          {fan.station} / {fan.model}
                        </Typography.Text>
                      </div>
                    </Space>
                    <Tag color={fan.solveRole === '解算主机' ? 'blue' : 'purple'}>{fan.solveRole}</Tag>
                  </div>
                  <div className="fan-metric-grid">
                    <div className="fan-metric-item">
                      <span className="fan-metric-label">频率</span>
                      <span className="fan-metric-value">{fan.frequency.toFixed(1)} Hz</span>
                    </div>
                    <div className="fan-metric-item">
                      <span className="fan-metric-label">风量</span>
                      <span className="fan-metric-value">{fan.airflow} m3/min</span>
                    </div>
                    <div className="fan-metric-item">
                      <span className="fan-metric-label">风压</span>
                      <span className="fan-metric-value">{fan.pressure} Pa</span>
                    </div>
                    <div className="fan-metric-item">
                      <span className="fan-metric-label">效率</span>
                      <span className="fan-metric-value">{fan.efficiency.toFixed(1)} %</span>
                    </div>
                    <div className="fan-metric-item">
                      <span className="fan-metric-label">叶片角度</span>
                      <span className="fan-metric-value">{fan.bladeAngle} deg</span>
                    </div>
                    <div className="fan-metric-item">
                      <span className="fan-metric-label">电机功率</span>
                      <span className="fan-metric-value">{fan.motorPower} kW</span>
                    </div>
                  </div>
                </div>
              ))}
            </Space>
          </Col>
          <Col span={24}>
            <div className="fan-parameter-table-shell">
              <div className="fan-parameter-table-title">
                <ThunderboltOutlined />
                <span>参加解算的关键参数</span>
              </div>
              <Table
                className="fan-parameter-table"
                columns={mainFanColumns}
                dataSource={mainFanPerformanceData}
                rowKey="key"
                pagination={false}
                size="small"
                scroll={{ x: 980 }}
              />
            </div>
          </Col>
        </Row>
      </Card>

      <Card title="解算控制" className="control-card">
        <div className="control-content">
          <div className="data-import-section">
            <div
              style={{
                marginBottom: 16,
                fontSize: 14,
                fontWeight: 600,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <FileExcelOutlined />
              解算数据导入
            </div>
            <Space size="large" wrap>
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />} size="large">
                  导入 Excel 数据
                </Button>
              </Upload>
              <Button icon={<DownloadOutlined />} size="large" onClick={handleDownloadTemplate}>
                下载数据模板
              </Button>
              {dataImported && (
                <Tag color="success" icon={<CheckCircleOutlined />}>
                  已导入 {importedFileName}
                </Tag>
              )}
            </Space>
            <Alert
              message="数据导入说明"
              description="解算数据通过 Excel 表格导入，包含风网拓扑、风阻参数、边界条件和设备工况。导入后可直接参与实时分风解算。"
              type="info"
              showIcon
              style={{ marginTop: 16 }}
            />
          </div>

          <Divider style={{ borderColor: 'rgba(150, 205, 255, 0.3)', margin: '24px 0' }} />

          <div className="calculation-params-section">
            <div
              style={{
                marginBottom: 16,
                fontSize: 14,
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              解算参数配置
            </div>
            <div className="control-params">
              <div className="param-item">
                <label>解算方法:</label>
                <Select
                  value={calculationMethod}
                  onChange={setCalculationMethod}
                  style={{ width: 220 }}
                  options={[
                    { label: 'Hardy-Cross 法', value: 'hardy-cross' },
                    { label: '节点压力法', value: 'node-pressure' },
                    { label: '回路风量法', value: 'loop-airflow' },
                  ]}
                />
              </div>
              <div className="param-item">
                <label>收敛精度:</label>
                <InputNumber
                  value={convergenceCriteria}
                  onChange={(value) => setConvergenceCriteria(value || 0.001)}
                  min={0.0001}
                  max={0.01}
                  step={0.0001}
                  style={{ width: 150 }}
                />
              </div>
              <div className="param-item">
                <label>最大迭代次数:</label>
                <InputNumber
                  value={maxIterations}
                  onChange={(value) => setMaxIterations(value || 100)}
                  min={10}
                  max={1000}
                  step={10}
                  style={{ width: 150 }}
                />
              </div>
            </div>
          </div>

          <div className="control-actions">
            <Button
              type="primary"
              icon={calculating ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              onClick={handleStartCalculation}
              loading={calculating}
              size="large"
              disabled={!dataImported}
            >
              {calculating ? '解算中...' : '开始解算'}
            </Button>
            <Button icon={<ReloadOutlined />} size="large">
              重置参数
            </Button>
          </div>
        </div>
      </Card>

      <Card title="解算结果" className="result-card" extra={<Tag color="blue">共 {calculationResultsData.length} 条巷道</Tag>}>
        <Table
          columns={resultColumns}
          dataSource={calculationResultsData}
          rowKey="roadwayId"
          pagination={false}
          size="small"
          scroll={{ y: 320 }}
        />
      </Card>

      <Card
        title={
          <span>
            <WarningOutlined style={{ color: '#ff7875', marginRight: 8 }} />
            预警信息
          </span>
        }
        className="warning-card"
        extra={<Tag color="red">{warningData.length} 条预警</Tag>}
      >
        {warningData.length > 0 ? (
          <Table columns={warningColumns} dataSource={warningData} rowKey="id" pagination={false} size="small" />
        ) : (
          <Alert message="当前无预警信息" type="success" showIcon />
        )}
      </Card>

      <Card
        title="调风方案"
        className="adjustment-card"
        extra={
          <Space>
            <Button type="primary" size="small">
              应用全部
            </Button>
            <Button size="small">导出方案</Button>
          </Space>
        }
      >
        <Table columns={planColumns} dataSource={adjustmentPlanData} rowKey="id" pagination={false} size="small" />
      </Card>
    </div>
  );
}
