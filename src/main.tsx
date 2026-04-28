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
        colorPrimary: '#21d6c6',
        colorInfo: '#35b9ff',
        colorBgLayout: '#07100f',
        colorBgContainer: '#0d1a1b',
        colorBgElevated: '#122427',
        colorText: '#e9fbf8',
        colorTextSecondary: '#9bbfbd',
        colorBorder: 'rgba(83, 135, 137, 0.46)',
        borderRadius: 8,
      },
    }}
  >
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ConfigProvider>,
);
