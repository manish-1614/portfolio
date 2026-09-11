'use client';

import React from 'react';
import {
  TraceNode,
  TraceEdge,
  SMRITI_TRACE_NODES,
  SMRITI_TRACE_EDGES,
} from '@/config/hero-trace.config';
import { CONSTELLATION_TOKENS } from '@/lib/tokens/constellation-theme';
import { ConstellationNode } from './ConstellationNode';
import { ConstellationEdge } from './ConstellationEdge';

interface ConstellationCanvasProps {
  activeStep: number | null;
  activeEdgeIds?: string[];
  isToneLatched?: boolean;
  isGenerationFlicker?: boolean;
  isGenerationRecovered?: boolean;
  onSelectNode?: (node: TraceNode) => void;
  onHoverNode?: (node: TraceNode | null) => void;
  className?: string;
}

export const ConstellationCanvas: React.FC<ConstellationCanvasProps> = ({
  activeStep,
  activeEdgeIds = [],
  isToneLatched = false,
  isGenerationFlicker = false,
  isGenerationRecovered = false,
  onSelectNode,
  onHoverNode,
  className = '',
}) => {
  const nodeMap = new Map<string, TraceNode>(
    SMRITI_TRACE_NODES.map((n) => [n.id, n])
  );

  return (
    <div className={`relative w-full aspect-[5/3] max-w-5xl mx-auto overflow-visible ${className}`}>
      <svg
        viewBox={`0 0 ${CONSTELLATION_TOKENS.viewBox.width} ${CONSTELLATION_TOKENS.viewBox.height}`}
        className="w-full h-full filter drop-shadow-[0_0_24px_rgba(15,23,42,0.6)]"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Request lifecycle constellation graph"
      >
        <defs>
          <radialGradient id="nodePulseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Constellation Edges (Inter-node signal tracks) */}
        <g id="constellation-edges-layer">
          {SMRITI_TRACE_EDGES.map((edge) => {
            const from = nodeMap.get(edge.from);
            const to = nodeMap.get(edge.to);
            if (!from || !to) return null;

            const isEdgeActive = activeEdgeIds.includes(edge.id);
            const isLatchedBranch = isToneLatched && edge.id === 'edge-1-4';

            return (
              <ConstellationEdge
                key={edge.id}
                edge={edge}
                fromNode={from}
                toNode={to}
                isActive={isEdgeActive}
                isLatchedBranch={isLatchedBranch}
              />
            );
          })}
        </g>

        {/* Constellation Nodes */}
        <g id="constellation-nodes-layer">
          {SMRITI_TRACE_NODES.map((node) => {
            const isActive = activeStep === node.stepNumber;
            const isLatched = isToneLatched && node.id === 'node-tone';
            const isError = isGenerationFlicker && node.id === 'node-generation';
            const isRecovered = isGenerationRecovered && node.id === 'node-generation';

            return (
              <ConstellationNode
                key={node.id}
                node={node}
                isActive={isActive}
                isLatched={isLatched}
                isError={isError}
                isRecovered={isRecovered}
                onClick={onSelectNode}
                onHover={onHoverNode}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
