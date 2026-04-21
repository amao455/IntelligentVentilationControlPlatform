import { useEffect, useState } from 'react';
import {
  Badge,
  Button,
  Dropdown,
  Space,
  Tag,
  Tooltip,
  Typography,
  message,
} from 'antd';
import {
  AlertOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  ApartmentOutlined,
  BarChartOutlined,
  BellOutlined,
  ClockCircleOutlined,
  ControlOutlined,
  DeploymentUnitOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  UserOutlined,
  WifiOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { resolveModuleByPath, topMenuList } from '../../router/menuConfig';

function getTopMenuIcon(key: string) {
  switch (key) {
    case 'monitor':
      return <AreaChartOutlined />;
    case 'twin':
      return <ApartmentOutlined />;
    case 'analysis':
      return <BarChartOutlined />;
    case 'decision':
      return <ControlOutlined />;
    case 'remote':
      return <DeploymentUnitOutlined />;
    case 'emergency':
      return <AlertOutlined />;
    default:
      return null;
  }
}

export function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentModule = resolveModuleByPath(location.pathname);
  const [api, contextHolder] = message.useMessage();
  const [isFullscreen, setIsFullscreen] = useState(Boolean(document.fullscreenElement));
  const [currentTimeText, setCurrentTimeText] = useState(() =>
    new Date().toLocaleTimeString('zh-CN', { hour12: false }),
  );

  const businessMenus = topMenuList.filter((item) => item.key !== 'home');
  const splitIndex = Math.ceil(businessMenus.length / 2);
  const leftMenus = businessMenus.slice(0, splitIndex);
  const rightMenus = businessMenus.slice(splitIndex);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));

    document.addEventListener('fullscreenchange', onChange);

    return () => {
      document.removeEventListener('fullscreenchange', onChange);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTimeText(new Date().toLocaleTimeString('zh-CN', { hour12: false }));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const handleTopMenu = (key: string) => {
    const selected = topMenuList.find((item) => item.key === key);

    if (selected) {
      navigate(selected.entryPath);
    }
  };

  const handleToggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      return;
    }

    await document.exitFullscreen();
  };

  const userMenuItems = [
    { key: 'profile', label: '个人信息' },
    { key: 'password', label: '修改密码' },
    {
      key: 'logout',
      label: '退出登录',
      onClick: () => {
        api.success('已退出登录');
        navigate('/login');
      },
    },
  ];

  return (
    <header
      className="top-nav-shell"
      style={{
        height: 80,
        borderBottom: '1px solid #2b527c',
        background: 'linear-gradient(180deg, var(--header-bg) 0%, var(--header-bg-secondary) 100%)',
        padding: '0 16px',
        zIndex: 200,
      }}
    >
      {contextHolder}

      {/* 扫描线特效 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(120, 180, 240, 0.15) 50%, transparent 100%)',
          height: '100%',
          width: '100%',
          animation: 'scan-line 4s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 左侧光束 */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '200px',
          background: 'linear-gradient(90deg, rgba(100, 170, 240, 0.2) 0%, transparent 100%)',
          animation: 'light-beam-left 3s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 右侧光束 */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '200px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(100, 170, 240, 0.2) 100%)',
          animation: 'light-beam-right 3s ease-in-out infinite 1.5s',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 中央聚焦光效 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(156, 208, 255, 0.15) 0%, transparent 70%)',
          animation: 'center-glow 3s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 顶部科技线条 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(120, 180, 240, 0.6) 50%, transparent 100%)',
          boxShadow: '0 0 8px rgba(120, 180, 240, 0.4)',
          animation: 'tech-line-flow 3s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 数据流效果 - 左 */}
      <div
        style={{
          position: 'absolute',
          left: '15%',
          top: '50%',
          width: '2px',
          height: '30px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(120, 180, 240, 0.8) 50%, transparent 100%)',
          boxShadow: '0 0 10px rgba(120, 180, 240, 0.6)',
          animation: 'data-flow-down 2s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 数据流效果 - 右 */}
      <div
        style={{
          position: 'absolute',
          right: '15%',
          top: '50%',
          width: '2px',
          height: '30px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(120, 180, 240, 0.8) 50%, transparent 100%)',
          boxShadow: '0 0 10px rgba(120, 180, 240, 0.6)',
          animation: 'data-flow-down 2s ease-in-out infinite 1s',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 角落装饰 - 左上 */}
      <div
        style={{
          position: 'absolute',
          left: 8,
          top: 8,
          width: '30px',
          height: '30px',
          borderLeft: '2px solid rgba(120, 180, 240, 0.4)',
          borderTop: '2px solid rgba(120, 180, 240, 0.4)',
          animation: 'corner-fade 3s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 角落装饰 - 右上 */}
      <div
        style={{
          position: 'absolute',
          right: 8,
          top: 8,
          width: '30px',
          height: '30px',
          borderRight: '2px solid rgba(120, 180, 240, 0.4)',
          borderTop: '2px solid rgba(120, 180, 240, 0.4)',
          animation: 'corner-fade 3s ease-in-out infinite 1.5s',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="top-nav-nav-zone">
        <div className="top-nav-side top-nav-side-left">
          {leftMenus.map((item) => (
            <Button
              key={item.key}
              className={`top-nav-link ${currentModule === item.key ? 'is-active' : ''}`}
              type="text"
              icon={getTopMenuIcon(item.key)}
              onClick={() => handleTopMenu(item.key)}
            >
              {item.title}
            </Button>
          ))}
        </div>

        <div className="top-nav-center-wrap">
          <Button
            type="text"
            className={`top-nav-home ${currentModule === 'home' ? 'is-active' : ''}`}
            onClick={() => navigate('/home')}
          >
            <span className="top-nav-home-main">智能通风管控平台</span>
            <span className="top-nav-home-sub">SMART VENTILATION CONTROL</span>
          </Button>
        </div>

        <div className="top-nav-side top-nav-side-right">
          {rightMenus.map((item) => (
            <Button
              key={item.key}
              className={`top-nav-link ${currentModule === item.key ? 'is-active' : ''}`}
              type="text"
              icon={getTopMenuIcon(item.key)}
              onClick={() => handleTopMenu(item.key)}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </div>

      <Space className="top-nav-actions" size={8}>
        <Tooltip title="消息通知">
          <Badge count={3}>
            <Button className="top-nav-action" type="text" icon={<BellOutlined />} />
          </Badge>
        </Tooltip>
        <Tag className="top-nav-status-tag" icon={<WifiOutlined />}>
          系统在线
        </Tag>
        <span className="top-nav-time" aria-label="当前时间">
          <ClockCircleOutlined />
          <span>{currentTimeText}</span>
        </span>
        <Tooltip title="全屏切换">
          <Button
            className="top-nav-action"
            type="text"
            icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
            onClick={() => void handleToggleFullscreen()}
          />
        </Tooltip>
        <Tooltip title="工作台">
          <Button className="top-nav-action" type="text" icon={<AppstoreOutlined />} />
        </Tooltip>

        <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
          <Button className="top-nav-action top-nav-user" type="text" icon={<UserOutlined />}>
            <Typography.Text>李志强</Typography.Text>
          </Button>
        </Dropdown>
      </Space>
    </header>
  );
}
