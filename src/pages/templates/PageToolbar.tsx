import { Button, Breadcrumb, Card, DatePicker, Select, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import { ReloadOutlined } from '@ant-design/icons';
import { mineOptions } from '../../mock/mockData';
import { useAppStore } from '../../store/appStore';

const { RangePicker } = DatePicker;

interface PageToolbarProps {
  moduleName: string;
  title: string;
  actions?: string[];
}

export function PageToolbar({ moduleName, title, actions = [] }: PageToolbarProps) {
  const { selectedMine, setSelectedMine, lastRefreshTime, touchRefresh } = useAppStore();

  return (
    <Card size="small" className="page-card" styles={{ body: { padding: 12 } }}>
      <Space direction="vertical" size={8} style={{ width: '100%' }}>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Space direction="vertical" size={0}>
            <Typography.Title level={5} style={{ margin: 0 }}>
              {title}
            </Typography.Title>
            <Breadcrumb items={[{ title: '智能通风管控平台' }, { title: moduleName }, { title }]} />
          </Space>

          <Space>
            <Select
              style={{ width: 150 }}
              value={selectedMine}
              options={mineOptions}
              onChange={setSelectedMine}
              placeholder="矿井/区域"
            />
            <RangePicker value={[dayjs().subtract(1, 'day'), dayjs()]} showTime />
            <Button icon={<ReloadOutlined />} onClick={touchRefresh}>
              刷新
            </Button>
            {actions.slice(0, 2).map((action) => (
              <Button key={action}>{action}</Button>
            ))}
          </Space>
        </Space>

        <Typography.Text type="secondary">最近刷新时间：{lastRefreshTime}</Typography.Text>
      </Space>
    </Card>
  );
}
