'use client';

import React from 'react';
import { TraceNode } from '@/config/hero-trace.config';
import { CONSTELLATION_TOKENS } from '@/lib/tokens/constellation-theme';

interface ConstellationNodeProps {
  node: TraceNode;
  isActive: boolean;
  isLatched?: boolean;
  isError?: boolean;
  isRecovered?: boolean;
  onClick?: (node: TraceNode) => void;
  onHover?: (node: TraceNode | null) => void;
}

export const ConstellationNode: React.FC<ConstellationNodeProps> = ({
  node,
  isActive,
  isLatched,
  isError,
  isRecovered,
  onClick,
  onHover,
}) => {
  const categoryConfig = CONSTELLATION_TOKENS.categories[node.category];
  const { x, y } = node.coords;
  const cx = (x / 100) * CONSTELLATION_TOKENS.viewBox.width;
  const cy = (y / 100) * CONSTELLATION_TOKENS.viewBox.height;

  let fillColor = categoryConfig.color;
  let glowColor = categoryConfig.glow;

  if (isError && 'accent' in categoryConfig) {
    fillColor = CONSTELLATION_TOKENS.categories.resilience.color;
    glowColor = CONSTELLATION_TOKENS.categories.resilience.glow;
  } else if (isRecovered && 'recovered' in categoryConfig) {
    fillColor = CONSTELLATION_TOKENS.categories.resilience.recovered;
    glowColor = 'rgba(52, 211, 153, 0.45)';
  } else if (isLatched) {
    fillColor = CONSTELLATION_TOKENS.categories.tone.color;
    glowColor = CONSTELLATION_TOKENS.categories.tone.glow;
  }

  return (
    <g
      id={`constellation-node-${node.id}`}
      className="cursor-pointer transition-transform duration-300 select-none"
      onClick={() => onClick?.(node)}
      onMouseEnter={() => onHover?.(node)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(node)}
      onBlur={() => onHover?.(null)}
      role="button"
      tabIndex={0}
      aria-label={`Step ${node.stepNumber}: ${node.label}. ${node.verifiedFact.description}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(node);
        }
      }}
    >
      {/* Dynamic Sonar Wave Ring on Active Arrival */}
      {isActive && (
        <circle
          cx={cx}
          cy={cy}
          r={CONSTELLATION_TOKENS.nodeRadius}
          fill="none"
          stroke={fillColor}
          strokeWidth={2}
          className="sonar-wave"
          pointerEvents="none"
        />
      )}

      {/* Outer ambient glow halo */}
      <circle
        cx={cx}
        cy={cy}
        r={CONSTELLATION_TOKENS.haloRadius}
        fill={glowColor}
        className={isActive || isLatched ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}
      />

      {/* Core Node Dot with Smooth Scale Interpolation */}
      <circle
        cx={cx}
        cy={cy}
        r={CONSTELLATION_TOKENS.nodeRadius}
        fill={fillColor}
        stroke="#020617"
        strokeWidth={3}
        className="transition-all duration-300 ease-out"
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          transform: isActive ? 'scale(1.4)' : 'scale(1)',
          filter: isActive ? `drop-shadow(0 0 10px ${fillColor})` : undefined,
        }}
      />

      {/* Step Number & Label Tag */}
      <text
        x={cx}
        y={cy + 22}
        textAnchor="middle"
        className={`text-[11px] font-mono font-semibold tracking-wider pointer-events-none transition-colors duration-300 ${
          isActive ? 'fill-sky-300 font-bold' : 'fill-slate-400'
        }`}
      >
        {node.stepNumber}. {node.label}
      </text>

      {/* Terminal-Grade Status Badges (Resilience 503 / 200 OK or Latched Tone) */}
      {isError && (
        <g transform={`translate(${cx - 42}, ${cy - 30})`} className="terminal-jitter">
          <rect
            width={84}
            height={18}
            rx={4}
            fill="#b91c1c"
            stroke="#f87171"
            strokeWidth={1}
          />
          <text
            x={42}
            y={12}
            textAnchor="middle"
            className="text-[9px] font-mono font-bold fill-white uppercase tracking-tight"
          >
            ! 503 UNAVAIL
          </text>
        </g>
      )}

      {isRecovered && (
        <g transform={`translate(${cx - 50}, ${cy - 30})`}>
          <rect
            width={100}
            height={18}
            rx={4}
            fill="#065f46"
            stroke="#34d399"
            strokeWidth={1}
          />
          <text
            x={50}
            y={12}
            textAnchor="middle"
            className="text-[9px] font-mono font-bold fill-emerald-200 uppercase tracking-tight"
          >
            ✓ 200 OK (3.6)
          </text>
        </g>
      )}

      {isLatched && (
        <g transform={`translate(${cx - 40}, ${cy - 28})`}>
          <rect
            width={80}
            height={16}
            rx={3}
            fill="#831843"
            stroke="#f472b6"
            strokeWidth={1}
          />
          <text
            x={40}
            y={11}
            textAnchor="middle"
            className="text-[8px] font-mono font-bold fill-pink-200 tracking-wider uppercase"
          >
            LATCHED &lt;1ms
          </text>
        </g>
      )}
    </g>
  );
};
