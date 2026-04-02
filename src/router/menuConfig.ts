export type ModuleKey =
  | 'home'
  | 'monitor'
  | 'twin'
  | 'analysis'
  | 'decision'
  | 'remote'
  | 'emergency';

export type PageVariant = 'home' | 'standard' | 'twin' | 'analysis' | 'decision' | 'remote' | 'emergency';

export interface SecondaryMenuItem {
  key: string;
  title: string;
  path: string;
  variant?: PageVariant;
}

export interface TopMenuItem {
  key: ModuleKey;
  title: string;
  entryPath: string;
}

export const topMenuList: TopMenuItem[] = [
  { key: 'home', title: '首页', entryPath: '/home' },
  { key: 'monitor', title: '实时监测', entryPath: '/monitor/realtime-overview' },
  { key: 'twin', title: '三维孪生', entryPath: '/twin/overview' },
  { key: 'analysis', title: '解算分析', entryPath: '/analysis/network-solving' },
  { key: 'decision', title: '调控决策', entryPath: '/decision/target-config' },
  { key: 'remote', title: '远程控制', entryPath: '/remote/scheme-execution' },
  { key: 'emergency', title: '应急指挥', entryPath: '/emergency/overview' },
];

export const secondaryMenuMap: Record<ModuleKey, SecondaryMenuItem[]> = {
  home: [{ key: 'home-dashboard', title: '综合驾驶舱', path: '/home', variant: 'home' }],
  monitor: [
    { key: 'monitor-realtime-overview', title: '通风参数实时监测', path: '/monitor/realtime-overview' },
    { key: 'monitor-key-area', title: '重点区域实时监控', path: '/monitor/key-area' },
    { key: 'monitor-device-status', title: '关键设备工况监测', path: '/monitor/device-status' },
    { key: 'monitor-history-trend', title: '历史监测趋势分析', path: '/monitor/history-trend' },
    { key: 'monitor-point-map', title: '监测点空间分布', path: '/monitor/point-map' },
    { key: 'monitor-sensor-health', title: '传感器健康状态', path: '/monitor/sensor-health' },
  ],
  twin: [
    { key: 'twin-overview', title: '三维巷道与设施总览', path: '/twin/overview', variant: 'twin' },
    { key: 'twin-realtime-mapping', title: '三维工况实时映射', path: '/twin/realtime-mapping', variant: 'twin' },
    { key: 'twin-airflow-simulation', title: '风流孪生与动态仿真', path: '/twin/airflow-simulation', variant: 'twin' },
    { key: 'twin-disaster-evolution', title: '灾变演化三维推演', path: '/twin/disaster-evolution', variant: 'twin' },
  ],
  analysis: [
    { key: 'analysis-network-solving', title: '通风网络实时解算', path: '/analysis/network-solving', variant: 'analysis' },
    { key: 'analysis-parameter-correction', title: '动态反向解算与参数修正', path: '/analysis/parameter-correction', variant: 'analysis' },
    { key: 'analysis-quality-evaluation', title: '解算校核与质量评估', path: '/analysis/quality-evaluation', variant: 'analysis' },
    { key: 'analysis-demand-resistance', title: '需风匹配与阻力风量分析', path: '/analysis/demand-resistance', variant: 'analysis' },
    { key: 'analysis-bottleneck-diagnosis', title: '异常诊断与瓶颈识别', path: '/analysis/bottleneck-diagnosis', variant: 'analysis' },
    { key: 'analysis-sensitivity-stability', title: '灵敏度与稳定性分析', path: '/analysis/sensitivity-stability', variant: 'analysis' },
  ],
  decision: [
    { key: 'decision-target-config', title: '调控目标配置', path: '/decision/target-config', variant: 'decision' },
    { key: 'decision-scheme-generate', title: '调控方案生成', path: '/decision/scheme-generate', variant: 'decision' },
    { key: 'decision-scheme-compare', title: '调控方案比选', path: '/decision/scheme-compare', variant: 'decision' },
    { key: 'decision-safety-check', title: '安全校核分析', path: '/decision/safety-check', variant: 'decision' },
    { key: 'decision-strategy-recommend', title: '最优策略推荐', path: '/decision/strategy-recommend', variant: 'decision' },
    { key: 'decision-effect-evaluation', title: '执行效果评估', path: '/decision/effect-evaluation', variant: 'decision' },
  ],
  remote: [
    { key: 'remote-scheme-execution', title: '调控方案执行', path: '/remote/scheme-execution', variant: 'remote' },
    { key: 'remote-device-control', title: '设备远程集控', path: '/remote/device-control', variant: 'remote' },
    { key: 'remote-emergency-execution', title: '应急控风执行', path: '/remote/emergency-execution', variant: 'remote' },
    { key: 'remote-execution-monitor', title: '执行状态监控', path: '/remote/execution-monitor', variant: 'remote' },
  ],
  emergency: [
    { key: 'emergency-overview', title: '灾变态势总览', path: '/emergency/overview', variant: 'emergency' },
    { key: 'emergency-simulation', title: '灾变场景模拟分析', path: '/emergency/simulation', variant: 'emergency' },
    { key: 'emergency-evacuation', title: '避灾路线智能规划', path: '/emergency/evacuation', variant: 'emergency' },
    { key: 'emergency-air-control', title: '应急控风辅助决策', path: '/emergency/air-control', variant: 'emergency' },
    { key: 'emergency-execution-tracking', title: '应急执行过程跟踪', path: '/emergency/execution-tracking', variant: 'emergency' },
  ],
};

export const modulePathPrefix: Record<ModuleKey, string> = {
  home: '/home',
  monitor: '/monitor',
  twin: '/twin',
  analysis: '/analysis',
  decision: '/decision',
  remote: '/remote',
  emergency: '/emergency',
};

export const allPages = Object.values(secondaryMenuMap).flat();

export const pageMetaByPath = new Map(allPages.map((item) => [item.path, item]));

export function resolveModuleByPath(pathname: string): ModuleKey {
  if (pathname === '/home') {
    return 'home';
  }

  const matched = (Object.entries(modulePathPrefix) as Array<[ModuleKey, string]>).find(([, prefix]) =>
    pathname.startsWith(prefix),
  );

  return matched?.[0] ?? 'home';
}

export function getPageMeta(pathname: string): SecondaryMenuItem | undefined {
  return pageMetaByPath.get(pathname);
}
