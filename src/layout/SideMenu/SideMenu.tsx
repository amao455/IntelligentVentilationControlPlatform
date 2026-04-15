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
    <div style={{
      height: '100%',
      borderRight: '2px solid rgba(150, 205, 255, 0.4)',
      background: 'linear-gradient(180deg, rgba(17, 54, 94, 0.95) 0%, rgba(15, 47, 83, 0.98) 100%)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'inset 0 1px 0 rgba(196, 225, 255, 0.2), 2px 0 15px rgba(11, 35, 62, 0.5), inset -1px 0 20px rgba(74, 157, 232, 0.1)',
    }}>
      {/* 动态网格背景 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(156, 208, 255, 0.05) 0px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, rgba(156, 208, 255, 0.05) 0px, transparent 1px, transparent 20px)
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
          background: 'radial-gradient(ellipse at 50% 0%, rgba(156, 208, 255, 0.25) 0%, transparent 70%)',
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
          background: 'linear-gradient(90deg, transparent 0%, rgba(156, 208, 255, 0.8) 50%, transparent 100%)',
          boxShadow: '0 0 20px rgba(156, 208, 255, 0.8)',
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
          background: 'linear-gradient(180deg, transparent 0%, rgba(156, 208, 255, 0.6) 50%, transparent 100%)',
          boxShadow: '0 0 15px rgba(156, 208, 255, 0.5)',
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
          background: 'linear-gradient(180deg, transparent 0%, rgba(156, 208, 255, 0.6) 50%, transparent 100%)',
          boxShadow: '0 0 15px rgba(156, 208, 255, 0.5)',
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
            borderRadius: '10px',
            height: '48px',
            lineHeight: '48px',
            color: 'var(--header-text-muted)',
            fontWeight: 600,
            fontSize: '14px',
            border: '2px solid rgba(150, 205, 255, 0.35)',
            background: 'linear-gradient(135deg, rgba(89, 154, 221, 0.2) 0%, rgba(49, 108, 168, 0.15) 100%)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'inset 0 1px 0 rgba(161, 211, 255, 0.15), 0 3px 10px rgba(11, 35, 62, 0.2), 0 0 20px rgba(74, 157, 232, 0.1)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            position: 'relative',
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
          background: 'linear-gradient(90deg, transparent 0%, rgba(156, 208, 255, 0.6) 20%, rgba(156, 208, 255, 0.8) 50%, rgba(156, 208, 255, 0.6) 80%, transparent 100%)',
          boxShadow: '0 0 20px rgba(156, 208, 255, 0.6), 0 -2px 30px rgba(74, 157, 232, 0.3)',
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
          borderLeft: '2px solid rgba(156, 208, 255, 0.7)',
          borderBottom: '2px solid rgba(156, 208, 255, 0.7)',
          boxShadow: '-2px 2px 15px rgba(156, 208, 255, 0.5)',
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
          borderRight: '2px solid rgba(156, 208, 255, 0.7)',
          borderBottom: '2px solid rgba(156, 208, 255, 0.7)',
          boxShadow: '2px 2px 15px rgba(156, 208, 255, 0.5)',
          pointerEvents: 'none',
          zIndex: 1,
          animation: 'corner-pulse-br 2s ease-in-out infinite 0.5s',
        }}
      />
    </div>
  );
}
