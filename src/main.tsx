import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { AppRouter } from './router/AppRouter';
import './styles/theme.css';
import 'antd/dist/reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        colorPrimary: '#1f5f9f',
        colorInfo: '#1f5f9f',
        colorBgLayout: '#eaf0f7',
        colorBgContainer: '#ffffff',
        colorBgElevated: '#f8fbff',
        colorText: '#16324f',
        colorTextSecondary: '#4e6a86',
        colorBorder: '#c7d6e6',
        borderRadius: 8,
      },
    }}
  >
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ConfigProvider>,
);
