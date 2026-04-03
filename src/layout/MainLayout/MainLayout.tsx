import { Button, Layout } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Outlet, useLocation } from 'react-router-dom';
import { TopNav } from '../TopNav/TopNav';
import { SideMenu } from '../SideMenu/SideMenu';
import { RightPanel } from '../RightPanel/RightPanel';
import { useAppStore } from '../../store/appStore';

const { Header, Sider, Content } = Layout;

export function MainLayout() {
  const location = useLocation();
  const { rightPanelVisible, toggleRightPanel } = useAppStore();
  const isHomePage = location.pathname === '/home';
  const hideRightPanelByPage = location.pathname.startsWith('/twin/');
  const shouldShowRightPanel = rightPanelVisible && !hideRightPanelByPage && !isHomePage;

  return (
    <Layout className="app-layout" style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          padding: 0,
          zIndex: 100,
          background: 'var(--header-bg)',
        }}
      >
        <TopNav />
      </Header>

      <Layout style={{ marginTop: 80, minHeight: 'calc(100vh - 80px)' }}>
        {!isHomePage && (
          <Sider width={240} theme="light" style={{ background: 'var(--bg-sider)' }}>
            <SideMenu />
          </Sider>
        )}

        <Content style={{ padding: 0, overflow: 'auto', background: 'transparent', minHeight: 'calc(100vh - 80px)' }}>
          <Outlet />
        </Content>

        {shouldShowRightPanel && (
          <Sider width={336} theme="light" style={{ background: 'var(--bg-panel)' }}>
            <RightPanel />
          </Sider>
        )}
      </Layout>

      {!isHomePage && (
        <Button
          type="primary"
          ghost
          icon={rightPanelVisible ? <RightOutlined /> : <LeftOutlined />}
          onClick={toggleRightPanel}
          style={{
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            zIndex: 1200,
            height: '48px',
            padding: '0 20px',
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: '24px',
            border: '2px solid rgba(150, 205, 255, 0.6)',
            background: 'linear-gradient(135deg, rgba(17, 54, 94, 0.85) 0%, rgba(15, 47, 83, 0.9) 100%)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 20px rgba(11, 35, 62, 0.6), 0 0 30px rgba(74, 157, 232, 0.2), inset 0 1px 0 rgba(196, 225, 255, 0.2)',
            color: '#e8f4ff',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.borderColor = 'rgba(156, 208, 255, 0.9)';
            e.currentTarget.style.boxShadow = '0 6px 30px rgba(11, 35, 62, 0.7), 0 0 40px rgba(156, 208, 255, 0.4), inset 0 1px 0 rgba(196, 225, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.borderColor = 'rgba(150, 205, 255, 0.6)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(11, 35, 62, 0.6), 0 0 30px rgba(74, 157, 232, 0.2), inset 0 1px 0 rgba(196, 225, 255, 0.2)';
          }}
        >
          信息侧栏
        </Button>
      )}
    </Layout>
  );
}
