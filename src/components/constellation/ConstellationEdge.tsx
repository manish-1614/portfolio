import React from 'react';
import { TraceEdge, TraceNode } from '@/config/hero-trace.config';
import { CONSTELLATION_TOKENS } from '@/lib/tokens/constellation-theme';

interface ConstellationEdgeProps {
  edge: TraceEdge;
  fromNode: TraceNode;
  toNode: TraceNode;
  isActive: boolean;
  isLatchedBranch?: boolean;
}

export const ConstellationEdge: React.FC<ConstellationEdgeProps> = ({
  edge,
  fromNode,
  toNode,
  isActive,
  isLatchedBranch,
}) => {
  const x1 = (fromNode.coords.x / 100) * CONSTELLATION_TOKENS.viewBox.width;
  const y1 = (fromNode.coords.y / 100) * CONSTELLATION_TOKENS.viewBox.height;
  const x2 = (toNode.coords.x / 100) * CONSTELLATION_TOKENS.viewBox.width;
  const y2 = (toNode.coords.y / 100) * CONSTELLATION_TOKENS.viewBox.height;

  // Gentle curved spline for parallel and merge paths, straight for serial
  const isCurved = edge.type === 'parallel-branch' || edge.type === 'merge-branch';
  const dx = x2 - x1;
  const pathD = isCurved
    ? `M ${x1} ${y1} C ${x1 + dx * 0.5} ${y1}, ${x1 + dx * 0.5} ${y2}, ${x2} ${y2}`
    : `M ${x1} ${y1} L ${x2} ${y2}`;

  const strokeColor = isLatchedBranch
    ? CONSTELLATION_TOKENS.strokes.latchedEdge
    : isActive
    ? CONSTELLATION_TOKENS.strokes.activeEdge
    : CONSTELLATION_TOKENS.strokes.idleEdge;

  return (
    <g id={`edge-${edge.id}`}>
      {/* Background track line */}
      <path
        d={pathD}
        fill="none"
        stroke={strokeColor}
        strokeWidth={isActive || isLatchedBranch ? 2.5 : 1.5}
        strokeDasharray={isCurved ? '4 3' : undefined}
        className="transition-colors duration-300"
        opacity={isActive || isLatchedBranch ? 0.9 : 0.4}
      />

      {/* Traveling energy pulse overlay (active state) */}
      {isActive && (
        <path
          d={pathD}
          fill="none"
          stroke="#38bdf8"
          strokeWidth={3.5}
          strokeLinecap="round"
          className="pulse-path"
          strokeDasharray="16 120"
          style={{
            animation: `travelingPulse ${edge.durationSeconds}s linear infinite`,
          }}
        />
      )}
    </g>
  );
};
