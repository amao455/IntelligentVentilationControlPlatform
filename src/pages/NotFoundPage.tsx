import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="未找到对应页面"
      extra={
        <Button type="primary" onClick={() => navigate('/home')}>
          返回首页
        </Button>
      }
    />
  );
}
