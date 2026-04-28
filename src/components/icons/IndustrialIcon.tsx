type IndustrialIconName =
  | 'airflow-in'
  | 'airflow-return'
  | 'airflow-point'
  | 'airflow-trend'
  | 'anemometer'
  | 'battery-charger'
  | 'coal-fire'
  | 'dispatch-radio'
  | 'emergency-siren'
  | 'equipment-rack'
  | 'fan-main'
  | 'fan-local'
  | 'gas-sensor'
  | 'louver'
  | 'monitor-grid'
  | 'personnel-beacon'
  | 'pressure-gauge'
  | 'resistance-duct'
  | 'roadway-warning'
  | 'safety-helmet'
  | 'sensor-node'
  | 'vent-door';

interface IndustrialIconProps {
  name: IndustrialIconName;
  size?: number;
  title?: string;
  className?: string;
}

const commonStroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function FanGlyph({ reverse = false }: { reverse?: boolean }) {
  return (
    <>
      <circle cx="12" cy="12" r="8.2" {...commonStroke} />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" opacity={0.9} />
      <path d="M12 10.2c.4-3.1 2.1-5.1 4.7-5.4 1.1 2.1.2 4.6-2.4 6.2" fill="currentColor" opacity={0.36} />
      <path d="M13.5 12.8c2.9 1.3 4.1 3.5 3.4 6-2.4.2-4.3-1.6-4.4-4.5" fill="currentColor" opacity={0.36} />
      <path d="M10.6 12.8c-2.9 1.2-5.3.6-6.6-1.6 1.3-2 3.9-2.4 6.4-.8" fill="currentColor" opacity={0.36} />
      <path d={reverse ? 'M4.4 6.9h5.4M6.2 4.9 4.4 6.9l1.8 2' : 'M14.2 6.9h5.4M17.8 4.9l1.8 2-1.8 2'} {...commonStroke} strokeWidth={1.5} />
    </>
  );
}

function renderIcon(name: IndustrialIconName) {
  switch (name) {
    case 'airflow-in':
      return <FanGlyph />;
    case 'airflow-return':
      return <FanGlyph reverse />;
    case 'fan-main':
      return (
        <>
          <rect x="3" y="5" width="18" height="14" rx="3" {...commonStroke} />
          <FanGlyph />
          <path d="M6 21h12M8 19v2M16 19v2" {...commonStroke} />
        </>
      );
    case 'fan-local':
      return (
        <>
          <path d="M3 8h4l3-2h4l3 2h4v8h-4l-3 2h-4l-3-2H3z" {...commonStroke} />
          <circle cx="12" cy="12" r="3.1" {...commonStroke} />
          <path d="M12 9.2c1.7.5 2.6 1.5 2.7 2.8M14.1 13.7c-1.2 1.2-2.6 1.5-4 .8M9.6 11.8c.3-1.6 1.1-2.6 2.4-3" {...commonStroke} strokeWidth={1.3} />
        </>
      );
    case 'pressure-gauge':
      return (
        <>
          <path d="M4 14a8 8 0 1 1 16 0" {...commonStroke} />
          <path d="M6.2 14h11.6M7.2 10.4l1.5 1M16.8 10.4l-1.5 1M12 7.8v2" {...commonStroke} strokeWidth={1.4} />
          <path d="m12 14 4-4" {...commonStroke} />
          <rect x="8" y="16" width="8" height="3" rx="1.5" fill="currentColor" opacity={0.28} />
        </>
      );
    case 'resistance-duct':
      return (
        <>
          <path d="M3 8h18v8H3z" {...commonStroke} />
          <path d="M6 8v8M10 8l-2 8M14 8l-2 8M18 8v8" {...commonStroke} strokeWidth={1.45} />
          <path d="M4 12h3M17 12h3" {...commonStroke} />
        </>
      );
    case 'roadway-warning':
      return (
        <>
          <path d="M4 18v-5.3a8 8 0 0 1 16 0V18" {...commonStroke} />
          <path d="M7 18v-5.1a5 5 0 0 1 10 0V18M3 18h18" {...commonStroke} strokeWidth={1.45} />
          <path d="M12 6.8 15.6 14H8.4z" fill="currentColor" opacity={0.28} />
          <path d="M12 9.4v2.2M12 13.2h.01" {...commonStroke} strokeWidth={1.5} />
        </>
      );
    case 'sensor-node':
      return (
        <>
          <rect x="7" y="7" width="10" height="10" rx="2.2" {...commonStroke} />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" opacity={0.35} />
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5 5l2.8 2.8M16.2 16.2 19 19M19 5l-2.8 2.8M7.8 16.2 5 19" {...commonStroke} strokeWidth={1.35} />
        </>
      );
    case 'gas-sensor':
      return (
        <>
          <rect x="7" y="5" width="10" height="14" rx="2" {...commonStroke} />
          <path d="M10 9h4M10 12h4M9 16h6" {...commonStroke} strokeWidth={1.35} />
          <path d="M17.5 8.5c2 1.3 2.6 3.3 1.7 5.6M6.5 8.5c-2 1.3-2.6 3.3-1.7 5.6" {...commonStroke} strokeWidth={1.3} />
        </>
      );
    case 'emergency-siren':
      return (
        <>
          <path d="M7 19h10M8 17v-5a4 4 0 0 1 8 0v5z" {...commonStroke} />
          <path d="M10 12a2 2 0 0 1 4 0v3h-4z" fill="currentColor" opacity={0.32} />
          <path d="M4 9l2-1M20 9l-2-1M6 4l1.4 1.6M18 4l-1.4 1.6M12 2v2" {...commonStroke} strokeWidth={1.4} />
        </>
      );
    case 'equipment-rack':
      return (
        <>
          <rect x="5" y="4" width="14" height="16" rx="2" {...commonStroke} />
          <path d="M8 8h8M8 12h8M8 16h8" {...commonStroke} strokeWidth={1.35} />
          <circle cx="9" cy="8" r=".8" fill="currentColor" />
          <circle cx="9" cy="12" r=".8" fill="currentColor" />
          <circle cx="9" cy="16" r=".8" fill="currentColor" />
        </>
      );
    case 'vent-door':
      return (
        <>
          <path d="M5 5h14v14H5z" {...commonStroke} />
          <path d="M12 5v14M8 8h2M14 16h2" {...commonStroke} strokeWidth={1.45} />
          <path d="M5 12h3M16 12h3" {...commonStroke} />
        </>
      );
    case 'louver':
      return (
        <>
          <rect x="5" y="5" width="14" height="14" rx="1.8" {...commonStroke} />
          <path d="M8 9h8M8 12h8M8 15h8" {...commonStroke} />
          <path d="m8 9 8-2M8 12l8-2M8 15l8-2" {...commonStroke} strokeWidth={1.2} opacity={0.75} />
        </>
      );
    case 'airflow-point':
      return (
        <>
          <path d="M4 16c3.2-4.8 12.8-4.8 16 0" {...commonStroke} />
          <path d="M6 16h12M8 19h8M12 5v6M9.8 8.8 12 11l2.2-2.2" {...commonStroke} />
          <circle cx="12" cy="5" r="2" fill="currentColor" opacity={0.28} />
        </>
      );
    case 'monitor-grid':
      return (
        <>
          <rect x="3.5" y="5" width="17" height="12" rx="2" {...commonStroke} />
          <path d="M8 20h8M12 17v3M7 9h3v3H7zM14 9h3v3h-3z" {...commonStroke} strokeWidth={1.35} />
        </>
      );
    case 'safety-helmet':
      return (
        <>
          <path d="M5 14a7 7 0 0 1 14 0v2H5z" {...commonStroke} />
          <path d="M8 14V9.5M16 14V9.5M4 16h16" {...commonStroke} strokeWidth={1.4} />
          <path d="M8 18h8" {...commonStroke} />
        </>
      );
    case 'coal-fire':
      return (
        <>
          <path d="M8 19h8l2-3H6z" {...commonStroke} />
          <path d="M12 4c3.2 3 .8 4.4 2.6 6.4.8.9 1.4 1.8 1.4 3.1a4 4 0 0 1-8 0c0-1.6.8-2.7 2-3.8 1.6-1.5 1.9-3.2 2-5.7z" fill="currentColor" opacity={0.34} />
          <path d="M12 4c3.2 3 .8 4.4 2.6 6.4.8.9 1.4 1.8 1.4 3.1a4 4 0 0 1-8 0c0-1.6.8-2.7 2-3.8 1.6-1.5 1.9-3.2 2-5.7z" {...commonStroke} />
        </>
      );
    case 'battery-charger':
      return (
        <>
          <rect x="5" y="7" width="13" height="10" rx="2" {...commonStroke} />
          <path d="M18 10h1.5v4H18M11.5 8.8 9.8 12h2.6l-1.9 3.2" {...commonStroke} />
          <path d="M4 20h8c2.2 0 3-1 3-3" {...commonStroke} strokeWidth={1.35} />
        </>
      );
    case 'anemometer':
      return (
        <>
          <circle cx="12" cy="12" r="2" {...commonStroke} />
          <path d="M12 10V4M13.7 13l5.2 3M10.3 13 5.1 16" {...commonStroke} />
          <circle cx="12" cy="4" r="2" fill="currentColor" opacity={0.28} />
          <circle cx="18.9" cy="16" r="2" fill="currentColor" opacity={0.28} />
          <circle cx="5.1" cy="16" r="2" fill="currentColor" opacity={0.28} />
        </>
      );
    case 'personnel-beacon':
      return (
        <>
          <circle cx="12" cy="8" r="2.4" {...commonStroke} />
          <path d="M7.5 19a4.5 4.5 0 0 1 9 0" {...commonStroke} />
          <path d="M5.5 10.5a7 7 0 0 0 0 6M18.5 10.5a7 7 0 0 1 0 6" {...commonStroke} strokeWidth={1.35} />
          <path d="M3.5 8a10 10 0 0 0 0 11M20.5 8a10 10 0 0 1 0 11" {...commonStroke} strokeWidth={1.2} />
        </>
      );
    case 'dispatch-radio':
      return (
        <>
          <rect x="6" y="7" width="12" height="13" rx="2" {...commonStroke} />
          <path d="M9 7V4h6v3M9 11h6M9 14h3" {...commonStroke} strokeWidth={1.35} />
          <circle cx="15" cy="16.5" r="1.4" fill="currentColor" opacity={0.34} />
          <path d="M17.5 4.5c1.6 1 2.5 2.5 2.7 4.2" {...commonStroke} strokeWidth={1.25} />
        </>
      );
    case 'airflow-trend':
      return (
        <>
          <path d="M4 19V5M4 19h16" {...commonStroke} />
          <path d="M6.5 15.5c2.2-.2 3.2-4 5.4-4.1 2-.1 2.8 2.7 5.6-3.2" {...commonStroke} />
          <path d="M17.6 8.2h-3M17.6 8.2v3" {...commonStroke} />
        </>
      );
    default:
      return null;
  }
}

export function IndustrialIcon({ name, size = 18, title, className }: IndustrialIconProps) {
  return (
    <svg
      className={className ? `industrial-icon ${className}` : 'industrial-icon'}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {renderIcon(name)}
    </svg>
  );
}
