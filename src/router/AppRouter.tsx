import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout/MainLayout';
import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/Home/HomePage';
import RealtimeOverviewPage from '../pages/Monitor/RealtimeOverviewPage';
import AirflowRealtimePage from '../pages/Monitor/AirflowRealtimePage';
import GasRealtimePage from '../pages/Monitor/GasRealtimePage';
import PersonnelRealtimePage from '../pages/Monitor/PersonnelRealtimePage';
import KeyAreaPage from '../pages/Monitor/KeyAreaPage';
import DeviceStatusPage from '../pages/Monitor/DeviceStatusPage';
import HistoryTrendPage from '../pages/Monitor/HistoryTrendPage';
import PointMapPage from '../pages/Monitor/PointMapPage';
import SensorHealthPage from '../pages/Monitor/SensorHealthPage';
import TwinOverviewPage from '../pages/Twin/OverviewPage';
import TwinRealtimeMappingPage from '../pages/Twin/RealtimeMappingPage';
import TwinAirflowSimulationPage from '../pages/Twin/AirflowSimulationPage';
import TwinDisasterEvolutionPage from '../pages/Twin/DisasterEvolutionPage';
import NetworkSolvingPage from '../pages/Analysis/NetworkSolvingPage';
import ParameterCorrectionPage from '../pages/Analysis/ParameterCorrectionPage';
import QualityEvaluationPage from '../pages/Analysis/QualityEvaluationPage';
import DemandResistancePage from '../pages/Analysis/DemandResistancePage';
import BottleneckDiagnosisPage from '../pages/Analysis/BottleneckDiagnosisPage';
import SensitivityStabilityPage from '../pages/Analysis/SensitivityStabilityPage';
import TargetConfigPage from '../pages/Decision/TargetConfigPage';
import SchemeGeneratePage from '../pages/Decision/SchemeGeneratePage';
import SchemeComparePage from '../pages/Decision/SchemeComparePage';
import SafetyCheckPage from '../pages/Decision/SafetyCheckPage';
import StrategyRecommendPage from '../pages/Decision/StrategyRecommendPage';
import EffectEvaluationPage from '../pages/Decision/EffectEvaluationPage';
import SchemeExecutionPage from '../pages/Remote/SchemeExecutionPage';
import DeviceControlPage from '../pages/Remote/DeviceControlPage';
import EmergencyExecutionPage from '../pages/Remote/EmergencyExecutionPage';
import ExecutionMonitorPage from '../pages/Remote/ExecutionMonitorPage';
import EmergencyOverviewPage from '../pages/Emergency/OverviewPage';
import EmergencySimulationPage from '../pages/Emergency/SimulationPage';
import EmergencyEvacuationPage from '../pages/Emergency/EvacuationPage';
import EmergencyAirControlPage from '../pages/Emergency/AirControlPage';
import EmergencyExecutionTrackingPage from '../pages/Emergency/ExecutionTrackingPage';
import NotFoundPage from '../pages/NotFoundPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />

        <Route path="/monitor/realtime-overview" element={<RealtimeOverviewPage />} />
        <Route path="/monitor/airflow-realtime" element={<AirflowRealtimePage />} />
        <Route path="/monitor/gas-realtime" element={<GasRealtimePage />} />
        <Route path="/monitor/personnel-realtime" element={<PersonnelRealtimePage />} />
        <Route path="/monitor/key-area" element={<KeyAreaPage />} />
        <Route path="/monitor/device-status" element={<DeviceStatusPage />} />
        <Route path="/monitor/history-trend" element={<HistoryTrendPage />} />
        <Route path="/monitor/point-map" element={<PointMapPage />} />
        <Route path="/monitor/sensor-health" element={<SensorHealthPage />} />

        <Route path="/twin/overview" element={<TwinOverviewPage />} />
        <Route path="/twin/realtime-mapping" element={<TwinRealtimeMappingPage />} />
        <Route path="/twin/airflow-simulation" element={<TwinAirflowSimulationPage />} />
        <Route path="/twin/disaster-evolution" element={<TwinDisasterEvolutionPage />} />

        <Route path="/analysis/network-solving" element={<NetworkSolvingPage />} />
        <Route path="/analysis/parameter-correction" element={<ParameterCorrectionPage />} />
        <Route path="/analysis/quality-evaluation" element={<QualityEvaluationPage />} />
        <Route path="/analysis/demand-resistance" element={<DemandResistancePage />} />
        <Route path="/analysis/bottleneck-diagnosis" element={<BottleneckDiagnosisPage />} />
        <Route path="/analysis/sensitivity-stability" element={<SensitivityStabilityPage />} />

        <Route path="/decision/target-config" element={<TargetConfigPage />} />
        <Route path="/decision/scheme-generate" element={<SchemeGeneratePage />} />
        <Route path="/decision/scheme-compare" element={<SchemeComparePage />} />
        <Route path="/decision/safety-check" element={<SafetyCheckPage />} />
        <Route path="/decision/strategy-recommend" element={<StrategyRecommendPage />} />
        <Route path="/decision/effect-evaluation" element={<EffectEvaluationPage />} />

        <Route path="/remote/scheme-execution" element={<SchemeExecutionPage />} />
        <Route path="/remote/device-control" element={<DeviceControlPage />} />
        <Route path="/remote/emergency-execution" element={<EmergencyExecutionPage />} />
        <Route path="/remote/execution-monitor" element={<ExecutionMonitorPage />} />

        <Route path="/emergency/overview" element={<EmergencyOverviewPage />} />
        <Route path="/emergency/simulation" element={<EmergencySimulationPage />} />
        <Route path="/emergency/evacuation" element={<EmergencyEvacuationPage />} />
        <Route path="/emergency/air-control" element={<EmergencyAirControlPage />} />
        <Route path="/emergency/execution-tracking" element={<EmergencyExecutionTrackingPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
