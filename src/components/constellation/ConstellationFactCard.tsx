'use client';

import React from 'react';
import { TraceNode } from '@/config/hero-trace.config';
import { CONSTELLATION_TOKENS } from '@/lib/tokens/constellation-theme';

interface ConstellationFactCardProps {
  activeNode: TraceNode | null;
  onClose?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ConstellationFactCard: React.FC<ConstellationFactCardProps> = ({
  activeNode,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (!activeNode) return null;

  const categoryColor = CONSTELLATION_TOKENS.categories[activeNode.category].color;
  const { x, y } = activeNode.coords;

  // Calculate dynamic floating position relative to the node on desktop
  // If node is on the right half (x > 50%), flip HUD to the left of the node
  const isRightSide = x > 52;
  const isBottomHalf = y > 60;

  return (
    <aside
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        z-30 transition-all duration-300 ease-out text-left select-text
        /* Mobile: anchored cleanly at bottom of canvas */
        absolute bottom-2 left-2 right-2 md:bottom-auto md:left-auto md:right-auto
        /* Desktop: floating anchor-aware HUD */
        md:w-84 lg:w-96 rounded-xl border border-slate-700/70 bg-slate-950/90 backdrop-blur-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]
      `}
      style={{
        // On desktop (md), compute direct percentage offset relative to parent canvas
        // This ensures the tooltip tracks the active node across all screen sizes
        ['--desktop-top' as string]: isBottomHalf ? `${Math.max(10, y - 28)}%` : `${Math.max(5, y - 10)}%`,
        ['--desktop-left' as string]: isRightSide ? `${Math.max(4, x - 38)}%` : `${Math.min(62, x + 8)}%`,
      }}
      aria-label="Verified Architecture Detail"
    >
      {/* Inline responsive style hook for desktop floating */}
      <style jsx>{`
        @media (min-width: 768px) {
          aside {
            top: var(--desktop-top);
            left: var(--desktop-left);
            right: auto;
            bottom: auto;
          }
        }
      `}</style>

      <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
            style={{ backgroundColor: categoryColor, color: categoryColor }}
          />
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-300">
            Step {activeNode.stepNumber} // {activeNode.category}
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          ~{activeNode.verifiedFact.timingProfileMs.min}-{activeNode.verifiedFact.timingProfileMs.max}ms
        </span>
      </div>

      <div className="mt-2.5">
        <h3 className="text-sm font-semibold text-white tracking-tight">
          {activeNode.verifiedFact.technicalTitle}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-300 line-clamp-3 md:line-clamp-none">
          {activeNode.verifiedFact.description}
        </p>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
        <span className="text-slate-400 truncate max-w-[200px]">
          Source: <code className="text-sky-400">{activeNode.verifiedFact.sourceFile}</code>
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors px-1 py-0.5"
            aria-label="Close fact card"
          >
            [Close]
          </button>
        )}
      </div>
    </aside>
  );
};
