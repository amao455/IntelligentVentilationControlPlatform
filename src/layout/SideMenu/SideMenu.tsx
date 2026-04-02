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
      borderRight: '1px solid rgba(43, 82, 124, 0.5)',
      background: 'linear-gradient(180deg, var(--header-bg) 0%, var(--header-bg-secondary) 100%)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'inset 0 1px 0 rgba(196, 225, 255, 0.15), 2px 0 10px rgba(11, 35, 62, 0.3)',
    }}>
      {/* 背景装饰效果 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(0deg, rgba(182, 220, 255, 0.03), rgba(182, 220, 255, 0.03) 1px, transparent 1px, transparent 30px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* 顶部光效 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(180deg, rgba(100, 170, 240, 0.15) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0,
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
          overflow: 'auto',
          background: 'transparent',
          position: 'relative',
          zIndex: 1,
        }}
        items={menus.map((item, index) => ({
          key: item.path,
          icon: iconMap[index % iconMap.length],
          label: item.title,
          style: {
            margin: '4px 8px',
            borderRadius: '8px',
            height: '44px',
            lineHeight: '44px',
            color: 'var(--header-text-muted)',
            fontWeight: 600,
            border: '1px solid rgba(150, 205, 255, 0.25)',
            background: 'linear-gradient(180deg, rgba(89, 154, 221, 0.15) 0%, rgba(49, 108, 168, 0.1) 100%)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'inset 0 1px 0 rgba(161, 211, 255, 0.1), 0 2px 6px rgba(11, 35, 62, 0.15)',
          },
        }))}
        onClick={({ key }) => navigate(key)}
      />

      {/* 底部装饰线 */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(120, 180, 240, 0.5) 50%, transparent 100%)',
          boxShadow: '0 0 10px rgba(120, 180, 240, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
}
