import { Tag } from 'antd';
import type { StatusLevel } from '../../mock/mockData';

const colorMap: Record<StatusLevel, string> = {
  normal: 'success',
  warning: 'warning',
  alert: 'orange',
  critical: 'error',
  offline: 'default',
  running: 'processing',
};

const textMap: Record<StatusLevel, string> = {
  normal: '正常',
  warning: '预警',
  alert: '告警',
  critical: '危急',
  offline: '离线',
  running: '执行中',
};

interface StatusTagProps {
  status: StatusLevel;
}

export function StatusTag({ status }: StatusTagProps) {
  return (
    <Tag
      color={colorMap[status]}
      style={{
        margin: 0,
        padding: '2px 8px',
        fontSize: 12,
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
        display: 'inline-block'
      }}
    >
      {textMap[status]}
    </Tag>
  );
}
