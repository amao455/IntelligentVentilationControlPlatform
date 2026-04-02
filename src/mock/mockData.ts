export type StatusLevel = 'normal' | 'warning' | 'alert' | 'critical' | 'offline' | 'running';

export interface KpiItem {
  key: string;
  name: string;
  value: number;
  unit: string;
  trend: number;
  status: StatusLevel;
}

export interface OptionItem {
  label: string;
  value: string;
}

export interface TableRow {
  id: string;
  name: string;
  area: string;
  status: StatusLevel;
  value: string;
  updatedAt: string;
}

export interface LogItem {
  time: string;
  level: StatusLevel;
  message: string;
  actor: string;
}

export interface PageDataset {
  kpis: KpiItem[];
  lineLabels: string[];
  lineSeries: number[];
  barCategories: string[];
  barSeries: number[];
  pieSeries: Array<{ name: string; value: number }>;
  tableRows: TableRow[];
  logs: LogItem[];
  riskRanking: Array<{ area: string; score: number; level: StatusLevel }>;
  actions: string[];
}

export const mineOptions: OptionItem[] = [
  { label: '东翼矿井', value: 'east-mine' },
  { label: '北二采区', value: 'north-sector' },
  { label: '主运输系统', value: 'main-haulage' },
];

export const areaPool = [
  '东翼回风巷',
  '3105综采工作面',
  '北二采区',
  '主运输大巷',
  '西翼联络巷',
  '二水平皮带巷',
  '回风上山',
];

export const devicePool = [
  '主扇 F1',
  '主扇 F2',
  '局扇 J3',
  '局扇 J7',
  '风门 D12',
  '风门 D18',
  '风窗 W08',
  '风窗 W14',
  '甲烷传感器 S-201',
  'CO传感器 S-086',
];

const kpiTemplates = [
  { key: 'inlet', name: '总进风量', unit: 'm³/min' },
  { key: 'return', name: '总回风量', unit: 'm³/min' },
  { key: 'pressure', name: '主扇运行负压', unit: 'Pa' },
  { key: 'targetRate', name: '风量达标率', unit: '%' },
  { key: 'onlinePoints', name: '在线测点数', unit: '个' },
  { key: 'availability', name: '设备可用率', unit: '%' },
  { key: 'exceptions', name: '当前异常数', unit: '条' },
  { key: 'emergencyState', name: '应急等级', unit: '级' },
];

const logTemplates = [
  '方案已下发至主扇控制站',
  '设备已联锁，等待人工复核',
  '风门执行完成，状态回传成功',
  '通信异常恢复，链路质量正常',
  '应急演练任务进入步骤三',
  '区域风量已恢复至目标阈值',
  '监测点瓦斯浓度触发预警阈值',
];

function hashCode(input: string): number {
  return input.split('').reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) % 1000000, 17);
}

function seeded(seed: number, min: number, max: number, offset = 0): number {
  const next = Math.abs(Math.sin(seed + offset) * 10000);
  return Math.floor(min + (next - Math.floor(next)) * (max - min + 1));
}

function statusByValue(value: number): StatusLevel {
  if (value < 10) return 'critical';
  if (value < 30) return 'alert';
  if (value < 55) return 'warning';
  if (value < 80) return 'running';
  return 'normal';
}

function formatHourLabel(): string[] {
  return ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'];
}

export function createPageDataset(pageKey: string): PageDataset {
  const seed = hashCode(pageKey);

  const kpis: KpiItem[] = kpiTemplates.map((item, index) => {
    const base = seeded(seed, 20, 99, index);

    if (item.key === 'inlet') {
      return {
        ...item,
        value: seeded(seed, 8500, 12500, index),
        trend: seeded(seed, -6, 8, index + 100),
        status: statusByValue(base),
      };
    }

    if (item.key === 'return') {
      return {
        ...item,
        value: seeded(seed, 7600, 11300, index),
        trend: seeded(seed, -5, 7, index + 110),
        status: statusByValue(base),
      };
    }

    if (item.key === 'pressure') {
      return {
        ...item,
        value: seeded(seed, 1580, 2320, index),
        trend: seeded(seed, -4, 5, index + 120),
        status: statusByValue(base + 15),
      };
    }

    if (item.key === 'exceptions') {
      return {
        ...item,
        value: seeded(seed, 1, 12, index),
        trend: seeded(seed, -3, 3, index + 130),
        status: seeded(seed, 1, 100, index) > 70 ? 'alert' : 'warning',
      };
    }

    if (item.key === 'emergencyState') {
      return {
        ...item,
        value: seeded(seed, 0, 2, index),
        trend: 0,
        status: 'running',
      };
    }

    return {
      ...item,
      value: base,
      trend: seeded(seed, -5, 6, index + 140),
      status: statusByValue(base),
    };
  });

  const lineLabels = formatHourLabel();
  const lineSeries = lineLabels.map((_, index) => seeded(seed, 3200, 9800, index + 200));

  const barCategories = ['东翼回风', '北二采区', '主运输', '3105工作面', '西翼联络'];
  const barSeries = barCategories.map((_, index) => seeded(seed, 45, 96, index + 300));

  const pieSeries = [
    { name: '正常', value: seeded(seed, 52, 78, 401) },
    { name: '预警', value: seeded(seed, 8, 22, 402) },
    { name: '告警', value: seeded(seed, 4, 14, 403) },
    { name: '离线', value: seeded(seed, 1, 9, 404) },
  ];

  const tableRows: TableRow[] = new Array(8).fill(0).map((_, index) => {
    const statusSeed = seeded(seed, 1, 100, index + 500);
    const status: StatusLevel = statusSeed > 88 ? 'critical' : statusSeed > 72 ? 'alert' : statusSeed > 55 ? 'warning' : 'normal';

    return {
      id: `R-${seeded(seed, 1000, 9999, index + 600)}`,
      name: devicePool[(index + seed) % devicePool.length],
      area: areaPool[(index + seed + 1) % areaPool.length],
      status,
      value: `${seeded(seed, 2, 45, index + 610)} ${index % 2 === 0 ? 'm/s' : 'Pa'}`,
      updatedAt: `2026-04-01 ${String(seeded(seed, 0, 23, index + 620)).padStart(2, '0')}:${String(
        seeded(seed, 0, 59, index + 630),
      ).padStart(2, '0')}`,
    };
  });

  const logs: LogItem[] = new Array(6).fill(0).map((_, index) => ({
    time: `2026-04-01 ${String(8 + index).padStart(2, '0')}:${String(seeded(seed, 5, 55, index + 700)).padStart(2, '0')}`,
    level: (['running', 'normal', 'warning', 'alert'] as StatusLevel[])[(index + seed) % 4],
    message: logTemplates[(index + seed) % logTemplates.length],
    actor: ['系统调度', '值班员', '自动策略引擎'][(index + seed) % 3],
  }));

  const riskRanking = areaPool.slice(0, 5).map((area, index) => {
    const score = seeded(seed, 45, 98, index + 800);

    return {
      area,
      score,
      level: statusByValue(score),
    };
  });

  const actions = [
    '刷新数据',
    '导出报表',
    '联动分析',
    '下发策略',
    '查看日志',
  ];

  return {
    kpis,
    lineLabels,
    lineSeries,
    barCategories,
    barSeries,
    pieSeries,
    tableRows,
    logs,
    riskRanking,
    actions,
  };
}
