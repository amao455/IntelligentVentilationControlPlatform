import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Space, Tag, Typography } from 'antd';
import { LockOutlined, LoginOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import './login.css';

interface LoginFormValue {
  username: string;
  password: string;
  captcha?: string;
  remember?: boolean;
}

export default function LoginPage() {
  const navigate = useNavigate();

  const onFinish = (_: LoginFormValue) => {
    navigate('/home');
  };

  return (
    <div className="login-page">
      <section className="login-brand">
        <div className="login-brand-content">
          <Tag className="login-brand-chip">矿井通风数字中枢</Tag>

          <Typography.Title className="login-brand-title" level={2}>
            智能通风管控平台
          </Typography.Title>
          <Typography.Paragraph className="login-brand-subtitle">
            面向矿井通风监测、风网解算、智能调控与应急指挥的一体化业务平台。基于实时监测数据与策略引擎，
            支撑调度中心进行安全、高效、可追溯的联动控制。
          </Typography.Paragraph>

          <Space className="login-capability-tags" wrap size={10}>
            <Tag color="blue">实时监测</Tag>
            <Tag color="geekblue">三维孪生</Tag>
            <Tag color="cyan">解算分析</Tag>
            <Tag color="processing">智能调控</Tag>
            <Tag color="gold">应急指挥</Tag>
          </Space>

          <div className="login-metric-grid">
            <div className="login-metric-card">
              <span className="login-metric-name">在线测点</span>
              <strong className="login-metric-value">842</strong>
            </div>
            <div className="login-metric-card">
              <span className="login-metric-name">设备可用率</span>
              <strong className="login-metric-value">98.6%</strong>
            </div>
            <div className="login-metric-card">
              <span className="login-metric-name">实时刷新</span>
              <strong className="login-metric-value">1s</strong>
            </div>
          </div>
        </div>

        <div className="login-brand-footer">
          <Typography.Text className="login-footer-title">系统能力概览</Typography.Text>
          <Typography.Text className="login-footer-item">• 风网实时解算与参数修正</Typography.Text>
          <Typography.Text className="login-footer-item">• 关键设备联锁控制与状态回传</Typography.Text>
          <Typography.Text className="login-footer-item">• 灾变场景推演与避灾路径规划</Typography.Text>
        </div>
      </section>

      <section className="login-form-zone">
        <div className="login-form-shell">
          <span className="login-shell-corner left-top" />
          <span className="login-shell-corner right-top" />
          <span className="login-shell-corner left-bottom" />
          <span className="login-shell-corner right-bottom" />

          <Space direction="vertical" style={{ width: '100%' }} size={18}>
            <div className="login-form-head">
              <Typography.Title level={4} className="login-form-title">
                安全登录
              </Typography.Title>
              <Typography.Text className="login-form-desc">请输入调度账号以访问系统控制台</Typography.Text>
            </div>

            <Form<LoginFormValue>
              layout="vertical"
              onFinish={onFinish}
              initialValues={{ username: 'dispatcher', remember: true }}
              className="login-form"
            >
              <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input className="login-input" prefix={<UserOutlined />} placeholder="请输入用户名" />
              </Form.Item>

              <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password className="login-input" prefix={<LockOutlined />} placeholder="请输入密码" />
              </Form.Item>

              <Form.Item label="验证码" name="captcha">
                <Input
                  className="login-input"
                  prefix={<SafetyCertificateOutlined />}
                  placeholder="可选，用于高风险登录验证"
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <Form.Item style={{ marginBottom: 10 }}>
                <Button className="login-submit-btn" type="primary" htmlType="submit" block icon={<LoginOutlined />}>
                  登录系统
                </Button>
              </Form.Item>
            </Form>

            <Typography.Text className="login-version-text">
              版本 v1.0.0 | 技术支持：矿井智能通风研发中心
            </Typography.Text>
          </Space>
        </div>
      </section>
    </div>
  );
}
