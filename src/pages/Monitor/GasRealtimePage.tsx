import { lazy, Suspense, useEffect, useState } from 'react';
import { StandardIndustrialPage } from '../templates/StandardIndustrialPage';
import '../Home/home.css';

const LazyHomeObjBackground = lazy(() =>
  import('../../components/topology/HomeObjBackground3D').then((module) => ({
    default: module.HomeObjBackground3D,
  })),
);

export default function GasRealtimePage() {
  const [backgroundReady, setBackgroundReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      position: 'relative',
      height: 'calc(100vh - 80px)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* 背景三维模型 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {backgroundReady ? (
          <Suspense fallback={<div style={{ padding: '20px', color: '#999' }}>3D背景载入中</div>}>
            <LazyHomeObjBackground
              paused={false}
              rotationSpeed={0.06}
              opacity={0.55}
              brightness={1.4}
              disableRotation={false}
              viewScale={1}
              viewAzimuthDeg={0}
            />
          </Suspense>
        ) : (
          <div style={{ padding: '20px', color: '#999' }}>正在准备巷道模型背景</div>
        )}
      </div>

      {/* 内容层 */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1, overflow: 'hidden' }}>
        <StandardIndustrialPage moduleName="实时监测" title="气体实时监测" pageKey="/monitor/gas-realtime" />
      </div>
    </div>
  );
}
