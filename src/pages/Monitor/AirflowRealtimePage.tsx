import { lazy, Suspense, useEffect, useState } from 'react';
import { StandardIndustrialPage } from '../templates/StandardIndustrialPage';
import '../Home/home.css';

interface BackgroundSettings {
  paused: boolean;
  rotationSpeed: number;
  opacity: number;
  brightness: number;
}

const DEFAULT_BG_SETTINGS: BackgroundSettings = {
  paused: true,
  rotationSpeed: 0,
  opacity: 0.74,
  brightness: 1.22,
};

const LazyHomeObjBackground = lazy(async () => {
  const module = await import('../../components/topology/HomeObjBackground3D');
  return { default: module.HomeObjBackground3D };
});

export default function AirflowRealtimePage() {
  const [bgSettings] = useState<BackgroundSettings>(DEFAULT_BG_SETTINGS);
  const [backgroundReady, setBackgroundReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setBackgroundReady(true);
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="platform-tunnel-bg-page" style={{
      position: 'relative',
      height: 'calc(100vh - 80px)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* 背景三维模型 */}
      <div
        className="platform-tunnel-bg-layer"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {backgroundReady ? (
          <Suspense
            fallback={
              <div className="platform-tunnel-bg-loading">3D背景载入中</div>
            }
          >
            <LazyHomeObjBackground
              paused={bgSettings.paused}
              rotationSpeed={bgSettings.rotationSpeed}
              opacity={bgSettings.opacity}
              brightness={bgSettings.brightness}
              disableRotation={false}
              viewScale={4.5}
              viewAzimuthDeg={90}
            />
          </Suspense>
        ) : (
          <div className="platform-tunnel-bg-loading">正在准备巷道模型背景</div>
        )}
      </div>

      {/* 内容层 */}
      <div className="platform-tunnel-bg-content realtime-monitor-content" style={{ flex: 1, overflow: 'hidden' }}>
        <StandardIndustrialPage
          moduleName="实时监测"
          title="风流实时监测"
          pageKey="/monitor/airflow-realtime"
        />
      </div>
    </div>
  );
}
