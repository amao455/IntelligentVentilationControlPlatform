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
    <Layout className="app-layout">
      <Header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          padding: 0,
          zIndex: 100,
          background: 'var(--header-bg)',
        }}
      >
        <TopNav />
      </Header>

      <Layout style={{ marginTop: 64, minHeight: 'calc(100vh - 64px)' }}>
        {!isHomePage && (
          <Sider width={240} theme="light" style={{ background: 'var(--bg-sider)' }}>
            <SideMenu />
          </Sider>
        )}

        <Content style={{ padding: 0, overflow: 'auto' }}>
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
          style={{ position: 'fixed', right: 14, bottom: 18, zIndex: 1200 }}
        >
          信息侧栏
        </Button>
      )}
    </Layout>
  );
}
