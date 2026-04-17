import { Suspense, lazy } from "react";

const LazyHomeObjBackground = lazy(async () => {
  const module = await import("../../components/topology/HomeObjBackground3D");
  return { default: module.HomeObjBackground3D };
});

// Keep the same tunnel model baseline as the home platform page.
const PLATFORM_REFERENCE_MODEL_SETTINGS = {
  paused: false,
  rotationSpeed: 0,
  opacity: 0.55,
  brightness: 1.4,
  disableRotation: false,
  viewScale: 4.5,
  viewAzimuthDeg: 90,
} as const;

const ROADWAY_POINT_OBJ_PATH = encodeURI("/models/巷道位置球体.fbx");

const ROADWAY_AIRFLOW_LABELS_FROM_POINTS = [
  {
    id: "roadway-01",
    name: "主进风巷",
    airflow: 31.8,
    pointIndex: 0,
  },
  {
    id: "roadway-02",
    name: "北翼回风联络巷",
    airflow: 24.6,
    pointIndex: 1,
  },
  {
    id: "roadway-03",
    name: "东翼运输巷",
    airflow: 27.3,
    pointIndex: 2,
  },
  {
    id: "roadway-04",
    name: "3105工作面回风巷",
    airflow: 19.4,
    pointIndex: 3,
  },
  {
    id: "roadway-05",
    name: "中央回风上山",
    airflow: 22.1,
    pointIndex: 4,
  },
  {
    id: "roadway-06",
    name: "采区回风大巷",
    airflow: 25.7,
    pointIndex: 5,
  },
  {
    id: "roadway-07",
    name: "东翼进风联巷",
    airflow: 20.9,
    pointIndex: 6,
  },
  {
    id: "roadway-08",
    name: "西翼回风上山",
    airflow: 18.6,
    pointIndex: 7,
  },
] as const;

export default function DemandAirDistributionPage() {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        minHeight: "calc(100vh - 80px)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              height: "100%",
              minHeight: "calc(100vh - 80px)",
              display: "grid",
              placeItems: "center",
              color: "#8ca4be",
              background: "linear-gradient(180deg, #f4f8fc 0%, #eef4fb 100%)",
            }}
          >
            正在加载巷道三维模型...
          </div>
        }
      >
        <LazyHomeObjBackground
          paused={PLATFORM_REFERENCE_MODEL_SETTINGS.paused}
          rotationSpeed={PLATFORM_REFERENCE_MODEL_SETTINGS.rotationSpeed}
          opacity={PLATFORM_REFERENCE_MODEL_SETTINGS.opacity}
          brightness={PLATFORM_REFERENCE_MODEL_SETTINGS.brightness}
          disableRotation={PLATFORM_REFERENCE_MODEL_SETTINGS.disableRotation}
          viewScale={PLATFORM_REFERENCE_MODEL_SETTINGS.viewScale}
          viewAzimuthDeg={PLATFORM_REFERENCE_MODEL_SETTINGS.viewAzimuthDeg}
          roadwayPointObjPath={ROADWAY_POINT_OBJ_PATH}
          roadwayPointLabels={ROADWAY_AIRFLOW_LABELS_FROM_POINTS}
        />
      </Suspense>
    </div>
  );
}
