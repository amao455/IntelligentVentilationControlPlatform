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

const styleMap: Record<StatusLevel, React.CSSProperties> = {
  normal: {
    background: 'linear-gradient(135deg, rgba(82, 196, 26, 0.2) 0%, rgba(82, 196, 26, 0.15) 100%)',
    border: '1px solid rgba(82, 196, 26, 0.6)',
    color: '#95de64',
    boxShadow: '0 0 8px rgba(82, 196, 26, 0.3), inset 0 1px 0 rgba(82, 196, 26, 0.2)',
    fontWeight: 700,
    textShadow: '0 0 6px rgba(82, 196, 26, 0.4)',
  },
  warning: {
    background: 'linear-gradient(135deg, rgba(250, 173, 20, 0.2) 0%, rgba(250, 173, 20, 0.15) 100%)',
    border: '1px solid rgba(250, 173, 20, 0.6)',
    color: '#ffc069',
    boxShadow: '0 0 8px rgba(250, 173, 20, 0.3), inset 0 1px 0 rgba(250, 173, 20, 0.2)',
    fontWeight: 700,
    textShadow: '0 0 6px rgba(250, 173, 20, 0.4)',
  },
  alert: {
    background: 'linear-gradient(135deg, rgba(250, 140, 22, 0.25) 0%, rgba(250, 140, 22, 0.18) 100%)',
    border: '1px solid rgba(250, 140, 22, 0.7)',
    color: '#ff9c6e',
    boxShadow: '0 0 10px rgba(250, 140, 22, 0.4), inset 0 1px 0 rgba(250, 140, 22, 0.25)',
    fontWeight: 700,
    textShadow: '0 0 8px rgba(250, 140, 22, 0.5)',
  },
  critical: {
    background: 'linear-gradient(135deg, rgba(255, 77, 79, 0.3) 0%, rgba(255, 77, 79, 0.2) 100%)',
    border: '1px solid rgba(255, 77, 79, 0.8)',
    color: '#ff7875',
    boxShadow: '0 0 12px rgba(255, 77, 79, 0.5), inset 0 1px 0 rgba(255, 77, 79, 0.3)',
    fontWeight: 700,
    textShadow: '0 0 10px rgba(255, 77, 79, 0.6)',
    animation: 'status-pulse 2s ease-in-out infinite',
  },
  offline: {
    background: 'linear-gradient(135deg, rgba(140, 140, 140, 0.15) 0%, rgba(140, 140, 140, 0.1) 100%)',
    border: '1px solid rgba(140, 140, 140, 0.5)',
    color: '#bfbfbf',
    boxShadow: '0 0 6px rgba(140, 140, 140, 0.2), inset 0 1px 0 rgba(140, 140, 140, 0.15)',
    fontWeight: 600,
  },
  running: {
    background: 'linear-gradient(135deg, rgba(24, 144, 255, 0.2) 0%, rgba(24, 144, 255, 0.15) 100%)',
    border: '1px solid rgba(24, 144, 255, 0.6)',
    color: '#69c0ff',
    boxShadow: '0 0 8px rgba(24, 144, 255, 0.3), inset 0 1px 0 rgba(24, 144, 255, 0.2)',
    fontWeight: 700,
    textShadow: '0 0 6px rgba(24, 144, 255, 0.4)',
  },
};

interface StatusTagProps {
  status: StatusLevel;
}

export function StatusTag({ status }: StatusTagProps) {
  return (
    <>
      <style>{`
        @keyframes status-pulse {
          0%, 100% {
            box-shadow: 0 0 12px rgba(255, 77, 79, 0.5), inset 0 1px 0 rgba(255, 77, 79, 0.3);
          }
          50% {
            box-shadow: 0 0 18px rgba(255, 77, 79, 0.8), inset 0 1px 0 rgba(255, 77, 79, 0.4);
          }
        }
      `}</style>
      <Tag
        style={{
          margin: 0,
          padding: '4px 10px',
          fontSize: 12,
          lineHeight: 1.4,
          whiteSpace: 'nowrap',
          display: 'inline-block',
          borderRadius: '6px',
          transition: 'all 0.3s ease',
          ...styleMap[status],
        }}
      >
        {textMap[status]}
      </Tag>
    </>
  );
}
