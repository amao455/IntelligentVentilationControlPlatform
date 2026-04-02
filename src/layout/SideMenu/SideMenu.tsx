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
import { Menu, Typography } from 'antd';
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
    <div style={{ height: '100%', borderRight: '1px solid var(--border-color)', background: 'var(--bg-sider)' }}>
      <div
        style={{
          height: 46,
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          borderBottom: '1px solid var(--border-color)',
          background: 'linear-gradient(180deg, #f7fbff 0%, #edf5fd 100%)',
        }}
      >
        <Typography.Text strong>{menus.length > 1 ? '二级功能导航' : '快捷入口'}</Typography.Text>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{ borderRight: 'none', paddingTop: 8 }}
        items={menus.map((item, index) => ({
          key: item.path,
          icon: iconMap[index % iconMap.length],
          label: item.title,
        }))}
        onClick={({ key }) => navigate(key)}
      />
    </div>
  );
}
