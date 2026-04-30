# 智能通风管控平台

智能通风管控平台是一个面向矿井通风场景的前台展示与管控界面项目。系统以综合驾驶舱、实时监测、三维孪生、解算分析、调控决策、远程控制和应急指挥为主线，展示矿井通风网络、关键设备、传感器测点、风量风压、告警事件和应急处置流程。

## 技术栈

- React 18
- TypeScript
- Vite
- Ant Design
- ECharts / echarts-for-react
- Three.js
- React Router
- Zustand
- XLSX

## 环境要求

- Node.js：建议使用当前 LTS 版本
- npm：随 Node.js 安装

## 快速开始

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

## 页面入口

默认路由：

- `/login`：登录页
- `/home`：综合驾驶舱

主要模块：

- 实时监测：`/monitor/*`
- 三维孪生：`/twin/*`
- 解算分析：`/analysis/*`
- 调控决策：`/decision/*`
- 远程控制：`/remote/*`
- 应急指挥：`/emergency/*`

路由配置位于 `src/router/AppRouter.tsx`，菜单配置位于 `src/router/menuConfig.ts`。

## 功能模块

### 综合驾驶舱

综合驾驶舱位于 `src/pages/Home/HomePage.tsx`，用于集中展示：

- 总进风量、总回风量、总风阻、总风压等 KPI
- 风量不足巷道、在线测点、当前异常、应急等级
- 主通风机运行状态
- 关键用风点风量
- 传感器类型筛选
- 设备运行状态
- 24 小时总进风/回风量趋势
- 预警报警列表
- 三维巷道模型背景

### 实时监测

实时监测模块覆盖风流、气体、人员、重点区域、设备状态和历史趋势等页面。相关页面位于 `src/pages/Monitor`。

### 三维孪生

三维孪生模块用于承载巷道结构、设施总览、实时工况映射、风流仿真和灾变推演。相关页面位于 `src/pages/Twin`。

### 解算分析

解算分析模块包含实时分风解算、按需分风解算、通风网络解算、质量评估、需风匹配和瓶颈诊断。相关页面位于 `src/pages/Analysis`。

### 调控决策

调控决策模块包含目标配置、方案生成、方案比选、安全校核、策略推荐和效果评估。相关页面位于 `src/pages/Decision`。

### 远程控制

远程控制模块覆盖主通风机、局部风机、风门、风窗、调控方案执行、设备集控、应急控风执行和执行状态监控。相关页面位于 `src/pages/Remote`。

### 应急指挥

应急指挥模块包含灾害场景模拟、灾变态势总览、避灾路线规划、应急控风决策和执行跟踪。相关页面位于 `src/pages/Emergency`。

## 三维巷道模型

三维巷道模型核心组件位于：

```text
src/components/topology/HomeObjBackground3D.tsx
```

模型文件主要从 `public/models` 加载，例如：

```text
public/models/IntegralTunnel.obj
```

当前三维能力包括：

- 加载 OBJ / FBX 巷道及叠加模型
- Three.js 材质、边线和工业风光照
- 轨道控制器交互
- 巷道标签和测点标签投影
- 风流/路线等叠加层显示
- 传感器三维节点显示
- 传感器按类型筛选显示
- 传感器点位吸附到巷道模型表面
- 传感器标签避让、引线指向和可见性控制
- 传感器图标按类型区分

### 传感器三维显示规则

首页右侧传感器列表仍按类型进行筛选，但三维模型中展示的是展开后的单台传感器设备。

当前传感器类型包括：

- 甲烷
- 一氧化碳
- 二氧化碳
- 氧气
- 温度
- 湿度
- 风速
- 粉尘
- 烟雾
- 氢气

点位分布遵循监测站逻辑：多个传感器类型会在同一小范围测点区域内组合出现，同一类型传感器会分散到多个监测站，避免按类型形成不合理聚簇。

图标映射：

- 甲烷：火焰形
- 一氧化碳：警示菱形
- 二氧化碳 / 氧气 / 氢气：分子结构
- 温度：温度计
- 湿度：水滴
- 风速：风向箭头
- 粉尘：颗粒群
- 烟雾：烟环

## 目录结构

```text
.
├── public/
│   └── models/                 # 三维模型资源
├── src/
│   ├── assets/                 # 静态图片资源
│   ├── components/             # 通用组件
│   │   ├── cards/              # KPI 和信息卡片
│   │   ├── charts/             # 图表组件
│   │   ├── common/             # 通用状态组件
│   │   ├── icons/              # 工业图标
│   │   ├── tables/             # 工业表格
│   │   └── topology/           # 三维模型与拓扑组件
│   ├── layout/                 # 主布局、顶部导航、侧边菜单
│   ├── mock/                   # 模拟数据
│   ├── pages/                  # 业务页面
│   ├── router/                 # 路由与菜单配置
│   ├── store/                  # 状态管理
│   ├── styles/                 # 全局主题样式
│   └── main.tsx                # 应用入口
├── package.json
├── vite.config.ts
└── README.md
```

## 数据说明

当前前台主要使用模拟数据驱动，数据定义位于：

```text
src/mock/mockData.ts
```

其中包含：

- KPI 模板
- 区域/测点列表
- 气体监测点
- 人员列表
- 设备列表
- 告警与日志模板
- 页面数据生成函数

## 开发约定

- 新增页面时同步维护 `src/router/AppRouter.tsx` 和 `src/router/menuConfig.ts`。
- 首页三维背景相关逻辑优先集中在 `HomeObjBackground3D.tsx`。
- 全局主题和通用背景样式优先放入 `src/styles/theme.css`。
- 页面专属样式放在页面目录下的 CSS 文件中。
- 构建产物 `dist` 不应作为源码修改提交。
- 修改三维模型显示逻辑后，至少执行一次 `npm run build` 验证类型和打包。

## 常见问题

### 构建时提示 chunk 过大

当前项目构建后可能出现 Vite 的 chunk size 警告。这是打包体积提示，不代表构建失败。后续如需优化，可考虑对 Three.js、ECharts 和业务页面做更细粒度的动态导入拆包。

### 三维模型未显示

优先检查：

- `public/models/IntegralTunnel.obj` 是否存在
- 浏览器控制台是否有模型加载错误
- 当前页面是否已挂载 `HomeObjBackground3D`
- Vite 服务是否能访问 `public/models` 下的资源

### 传感器筛选卡顿

传感器点位应保持全量缓存，筛选时只切换可见性，不应重新创建 Three.js 节点或重新计算吸附位置。

## 相关文档

仓库中还包含部分专题说明文档：

- `智能通风管控平台界面布局.md`
- `智能通风管控平台前台展示端功能清单.md`
- `MODEL_LOADING_SOLUTION.md`
- `MODEL_FINAL_OPTIMIZATION.md`
- `3D_MODEL_DEBUG.md`
- `3D_INTERACTION_SUMMARY.md`

