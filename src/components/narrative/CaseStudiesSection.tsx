import React from 'react';
import Link from 'next/link';
import { SMRITI_CASE_STUDY } from '@/lib/content/smriti';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Database, AlertCircle } from 'lucide-react';

export function CaseStudiesSection() {
  const data = SMRITI_CASE_STUDY;

  return (
    <section id="case-studies" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-slate-800/80">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
          <span>01 // Flagship Engineering Case Study</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Verified Systems Architecture
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Production-grade systems design applied to agentic AI: deterministic execution pipelines,
          zero-fabrication retrieval constraints, and verified failure cascades.
        </p>
      </div>

      {/* Flagship Card: Smriti */}
      <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm overflow-hidden p-6 md:p-10 transition-all hover:border-slate-300 dark:hover:border-slate-700/80 shadow-sm dark:shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{data.title}</span>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-800/50">
                {data.status}
              </span>
            </div>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-2 font-light max-w-2xl">
              {data.subtitle}
            </p>
          </div>

          <Link
            href="/case-studies/smriti"
            className="inline-flex items-center gap-2 self-start md:self-center px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg shadow-sky-900/20 shrink-0"
          >
            <span>Read Architectural Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Technical Descriptor Banner */}
        <div className="my-6 p-4 rounded-xl border border-sky-500/20 dark:border-sky-900/30 bg-sky-500/5 dark:bg-sky-950/20 text-xs font-mono">
          <p className="text-sky-700 dark:text-sky-300 font-medium">
            <strong className="text-slate-900 dark:text-white">Technical Descriptor: </strong>
            "{data.technicalDescriptor.primary}"
          </p>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-[11px]">
            Unlike generic RAG prototypes that patch hallucinations with prompt directives, Smriti closes fabrication
            structurally at the storage and retrieval boundary.
          </p>
        </div>

        {/* 4-Pillar Architectural Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/50 space-y-2">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-mono text-xs">
              <Cpu className="w-4 h-4" />
              <span>In-Process Vector Retrieval</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Bounded Memory & Cosine Similarity</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Computes top-5 cosine similarity over memory embeddings directly in-process (<code className="text-sky-600 dark:text-sky-300">zero network round-trip</code>). Bounded vault design eliminates distributed vector database latency overhead.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/50 space-y-2">
            <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 font-mono text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Deterministic Emotional Gating</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Rule-Based Tone Classifier</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Regex-driven tone categorization evaluates synchronously in-process (<code className="text-pink-600 dark:text-pink-300">zero LLM overhead</code>), bypassing model classification nondeterminism and guaranteeing grief-appropriate conversational warm grounding.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/50 space-y-2">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-mono text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Memory Write Gating</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Zero Unconfirmed Firestore Writes</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              All memory updates require explicit client UI confirmation (Save / Review / Dismiss). Prevents cross-turn hallucination accumulation from entering the permanent database.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/50 space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs">
              <AlertCircle className="w-4 h-4" />
              <span>Resilience & Failover Cascades</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Deterministic 503 Exponential Backoff</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              600ms backoff interval on upstream model unavailability, automatically rerouting to fallback models without dropping conversational state or breaking SSE stream buffers.
            </p>
          </div>
        </div>

        {/* Honest Tradeoffs Footnote */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono gap-4">
          <div>
            <span className="text-slate-900 dark:text-slate-200 font-semibold">Honest Engineering Tradeoff: </span>
            In-process retrieval is bounded to hundreds of memories per vault; order-of-magnitude scaling would require indexing refactoring.
          </div>
          <Link
            href="/case-studies/smriti"
            className="text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors flex items-center gap-1 shrink-0"
          >
            Inspect 7-step verified trace →
          </Link>
        </div>
      </article>
    </section>
  );
}
