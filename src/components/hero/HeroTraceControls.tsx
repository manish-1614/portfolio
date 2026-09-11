import React from 'react';

interface HeroTraceControlsProps {
  isTracing: boolean;
  isResolved: boolean;
  onStartTrace: () => void;
  onReset: () => void;
  isReducedMotion: boolean;
}

export const HeroTraceControls: React.FC<HeroTraceControlsProps> = ({
  isTracing,
  isResolved,
  onStartTrace,
  onReset,
  isReducedMotion,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6 z-10">
      {!isTracing && !isResolved && (
        <button
          type="button"
          onClick={onStartTrace}
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-medium text-sm transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <span>Trace a request</span>
          <span className="group-hover:translate-x-1 transition-transform font-mono">→</span>
        </button>
      )}

      {isTracing && (
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg border border-sky-500/40 bg-slate-900/80 text-sky-300 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span>Tracing request execution in real time...</span>
        </div>
      )}

      {isResolved && (
        <div className="flex items-center gap-3">
          <a
            href="/case-studies/smriti"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-medium text-xs transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)]"
          >
            <span>See how this actually works</span>
            <span>→</span>
          </a>

          <button
            type="button"
            onClick={onReset}
            className="px-4 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 font-mono text-xs transition-colors"
          >
            Replay Trace
          </button>
        </div>
      )}

      {isReducedMotion && (
        <span className="text-[11px] font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded border border-slate-800">
          Reduced motion active: schematic view
        </span>
      )}
    </div>
  );
};
