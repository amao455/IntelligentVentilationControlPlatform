import {
  AlertOutlined,
  ApartmentOutlined,
  AreaChartOutlined,
  ControlOutlined,
  DeploymentUnitOutlined,
  DesktopOutlined,
  EnvironmentOutlined,
  ExperimentOutlined,
  FundOutlined,
  SafetyOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { resolveModuleByPath, secondaryMenuMap } from '../../router/menuConfig';

const iconMap = [
  <DesktopOutlined key="desktop" />,
  <AreaChartOutlined key="chart" />,
  <ControlOutlined key="control" />,
  <FundOutlined key="fund" />,
  <EnvironmentOutlined key="env" />,
  <ExperimentOutlined key="exp" />,
  <DeploymentUnitOutlined key="deploy" />,
  <ApartmentOutlined key="apt" />,
  <SafetyOutlined key="safe" />,
  <AlertOutlined key="alert" />,
];

export function SideMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentModule = resolveModuleByPath(location.pathname);
  const menus = secondaryMenuMap[currentModule] ?? [];

  return (
    <div className="industrial-side-menu-shell" style={{
      height: '100%',
      borderRight: '1px solid rgba(33, 214, 198, 0.45)',
      background: 'linear-gradient(180deg, rgba(7, 18, 19, 0.96) 0%, rgba(9, 28, 29, 0.98) 48%, rgba(5, 13, 13, 0.98) 100%)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'inset 0 1px 0 rgba(202, 255, 248, 0.08), 8px 0 24px rgba(0, 0, 0, 0.32), inset -1px 0 20px rgba(33, 214, 198, 0.08)',
    }}>
      {/* 动态网格背景 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(33, 214, 198, 0.045) 0px, transparent 1px, transparent 22px),
            repeating-linear-gradient(90deg, rgba(33, 214, 198, 0.04) 0px, transparent 1px, transparent 22px)
          `,
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'grid-drift 30s linear infinite',
        }}
      />

      {/* 顶部光效增强 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '150px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(33, 214, 198, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'glow-pulse 3s ease-in-out infinite',
        }}
      />

      {/* 扫描线效果 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(33, 214, 198, 0.9) 50%, transparent 100%)',
          boxShadow: '0 0 20px rgba(33, 214, 198, 0.72)',
          animation: 'scan-vertical 4s linear infinite',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* 左侧边框光效 */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: 0,
          width: '2px',
          height: '60%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(33, 214, 198, 0.65) 50%, transparent 100%)',
          boxShadow: '0 0 15px rgba(33, 214, 198, 0.48)',
          animation: 'glow-pulse 2s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 右侧边框光效 */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: 0,
          width: '2px',
          height: '40%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(255, 184, 77, 0.55) 50%, transparent 100%)',
          boxShadow: '0 0 15px rgba(255, 184, 77, 0.32)',
          animation: 'glow-pulse 2s ease-in-out infinite 1s',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{
          borderRight: 'none',
          paddingTop: 16,
          paddingBottom: 16,
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          background: 'transparent',
          position: 'relative',
          zIndex: 1,
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(150, 205, 255, 0.3) transparent',
        }}
        items={menus.map((item, index) => ({
          key: item.path,
          icon: iconMap[index % iconMap.length],
          label: item.title,
          style: {
            margin: '6px 10px',
            borderRadius: '4px',
            height: '48px',
            lineHeight: '48px',
            color: 'var(--text-secondary)',
            fontWeight: 600,
            fontSize: '14px',
            border: '1px solid rgba(83, 135, 137, 0.46)',
            background: 'linear-gradient(135deg, rgba(15, 39, 41, 0.84) 0%, rgba(8, 20, 21, 0.72) 100%)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'inset 0 1px 0 rgba(202, 255, 248, 0.06), 0 6px 14px rgba(0, 0, 0, 0.22)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            position: 'relative',
            clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
          },
        }))}
        onClick={({ key }) => navigate(key)}
      />

      {/* 底部装饰线增强 */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(33, 214, 198, 0.56) 20%, rgba(255, 184, 77, 0.55) 50%, rgba(33, 214, 198, 0.56) 80%, transparent 100%)',
          boxShadow: '0 0 20px rgba(33, 214, 198, 0.46), 0 -2px 30px rgba(255, 184, 77, 0.16)',
          pointerEvents: 'none',
          zIndex: 1,
          animation: 'glow-pulse 2s ease-in-out infinite',
        }}
      />

      {/* 底部角落装饰 */}
      <div
        style={{
          position: 'absolute',
          bottom: 8,
          left: 8,
          width: '20px',
          height: '20px',
          borderLeft: '2px solid rgba(33, 214, 198, 0.72)',
          borderBottom: '2px solid rgba(33, 214, 198, 0.72)',
          boxShadow: '-2px 2px 15px rgba(33, 214, 198, 0.46)',
          pointerEvents: 'none',
          zIndex: 1,
          animation: 'corner-pulse-bl 2s ease-in-out infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 8,
          right: 8,
          width: '20px',
          height: '20px',
          borderRight: '2px solid rgba(33, 214, 198, 0.72)',
          borderBottom: '2px solid rgba(33, 214, 198, 0.72)',
          boxShadow: '2px 2px 15px rgba(33, 214, 198, 0.46)',
          pointerEvents: 'none',
          zIndex: 1,
          animation: 'corner-pulse-br 2s ease-in-out infinite 0.5s',
        }}
      />
    </div>
  );
}
