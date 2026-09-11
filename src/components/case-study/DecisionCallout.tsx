import React from 'react';
import { ArchitectureDecision } from '@/lib/content/types';

interface DecisionCalloutProps {
  decision: ArchitectureDecision;
}

export const DecisionCallout: React.FC<DecisionCalloutProps> = ({ decision }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 my-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <h4 className="text-sm font-mono font-semibold text-sky-400 tracking-wide">
          DECISION // {decision.title}
        </h4>
        <span className="text-[10px] font-mono uppercase bg-sky-950/80 text-sky-300 border border-sky-800/50 px-2 py-0.5 rounded">
          Verified Architecture
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="space-y-1.5 p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
          <p className="font-mono text-emerald-400 uppercase text-[11px] font-semibold">
            Chosen Implementation
          </p>
          <p className="text-slate-200 leading-relaxed">{decision.choice}</p>
        </div>

        <div className="space-y-1.5 p-3 rounded-lg bg-rose-950/20 border border-rose-900/40">
          <p className="font-mono text-rose-400 uppercase text-[11px] font-semibold">
            Rejected Alternative
          </p>
          <p className="text-slate-300 leading-relaxed">{decision.rejectedAlternative}</p>
        </div>
      </div>

      <div className="space-y-2 text-xs pt-1">
        <p className="text-slate-300 leading-relaxed">
          <strong className="text-white font-medium">Why: </strong>
          {decision.rationale}
        </p>

        <p className="text-amber-300/90 leading-relaxed border-l-2 border-amber-500/50 pl-3 italic">
          <strong className="text-amber-400 not-italic font-medium">Tradeoff: </strong>
          {decision.tradeoff}
        </p>
      </div>
    </div>
  );
};
