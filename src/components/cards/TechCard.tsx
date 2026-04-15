import { Card } from 'antd';
import type { CardProps } from 'antd';
import React from 'react';

interface TechCardProps extends CardProps {
  children?: React.ReactNode;
  enableScanLine?: boolean;
  enableCorners?: boolean;
  enableDataStream?: boolean;
}

export function TechCard({
  children,
  className = '',
  enableScanLine = true,
  enableCorners = true,
  enableDataStream = false,
  ...props
}: TechCardProps) {
  return (
    <Card
      {...props}
      className={`${className} home-transparent-card`}
    >
      {/* 扫描线 */}
      {enableScanLine && <div className="scan-line" />}

      {/* 四角装饰 */}
      {enableCorners && (
        <>
          <div className="corner-deco top-left" />
          <div className="corner-deco top-right" />
          <div className="corner-deco bottom-left" />
          <div className="corner-deco bottom-right" />
        </>
      )}

      {/* 数据流线条 */}
      {enableDataStream && (
        <>
          <div className="data-stream stream-1" />
          <div className="data-stream stream-2" />
          <div className="data-stream stream-3" />
        </>
      )}

      {children}
    </Card>
  );
}
