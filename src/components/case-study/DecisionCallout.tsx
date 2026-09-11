import React from 'react';
import { ArchitectureDecision } from '@/lib/content/types';

interface DecisionCalloutProps {
  decision: ArchitectureDecision;
}

export const DecisionCallout: React.FC<DecisionCalloutProps> = ({ decision }) => {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 my-6 space-y-4 shadow-sm dark:shadow-none">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-3">
        <h4 className="text-sm font-mono font-semibold text-sky-600 dark:text-sky-400 tracking-wide">
          DECISION // {decision.title}
        </h4>
        <span className="text-[10px] font-mono uppercase bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800/50 px-2 py-0.5 rounded">
          Verified Architecture
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="space-y-1.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
          <p className="font-mono text-emerald-700 dark:text-emerald-400 uppercase text-[11px] font-semibold">
            Chosen Implementation
          </p>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed">{decision.choice}</p>
        </div>

        <div className="space-y-1.5 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
          <p className="font-mono text-rose-700 dark:text-rose-400 uppercase text-[11px] font-semibold">
            Rejected Alternative
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{decision.rejectedAlternative}</p>
        </div>
      </div>

      <div className="space-y-2 text-xs pt-1">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong className="text-slate-900 dark:text-white font-medium">Why: </strong>
          {decision.rationale}
        </p>

        <p className="text-amber-700 dark:text-amber-300/90 leading-relaxed border-l-2 border-amber-500/50 pl-3 italic">
          <strong className="text-amber-600 dark:text-amber-400 not-italic font-medium">Tradeoff: </strong>
          {decision.tradeoff}
        </p>
      </div>
    </div>
  );
};
