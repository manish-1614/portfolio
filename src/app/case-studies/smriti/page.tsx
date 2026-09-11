import React from 'react';
import Link from 'next/link';
import { SMRITI_CASE_STUDY } from '@/lib/content/smriti';
import { DecisionCallout } from '@/components/case-study/DecisionCallout';
import { ConstellationCanvas } from '@/components/constellation/ConstellationCanvas';

export const metadata = {
  title: 'Smriti Case Study // Zero-Fabrication Retrieval Architecture',
  description:
    'Deep architectural breakdown of Smriti: deterministic emotional gating, in-process cosine similarity, and distributed resilience cascades.',
};

export default function SmritiCaseStudyPage() {
  const data = SMRITI_CASE_STUDY;

  return (
    <article className="min-h-screen bg-[#fdfbf7] dark:bg-slate-950 text-slate-800 dark:text-slate-200 py-16 px-4 md:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-3 text-xs font-mono text-slate-500">
          <Link href="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            ← Back to System Architecture
          </Link>
          <span>/</span>
          <span className="text-slate-500 dark:text-slate-400">Case Studies</span>
          <span>/</span>
          <span className="text-sky-600 dark:text-sky-400">Smriti</span>
        </nav>

        {/* Case Study Header */}
        <header className="space-y-6 border-b border-slate-200 dark:border-slate-800 pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
              Flagship Project
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Status: {data.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            {data.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            {data.subtitle}
          </p>

          <div className="p-4 rounded-xl border border-sky-200 dark:border-sky-900/40 bg-sky-50 dark:bg-sky-950/20 text-xs font-mono space-y-1">
            <p className="text-sky-800 dark:text-sky-300">
              <strong className="text-slate-900 dark:text-white">Technical Descriptor: </strong>
              "{data.technicalDescriptor.primary}" / "{data.technicalDescriptor.secondary}"
            </p>
            <p className="text-rose-600 dark:text-rose-400/90 italic">
              <strong>Forbidden framing: </strong>
              {data.technicalDescriptor.forbidden}
            </p>
          </div>
        </header>

        {/* Section 1: Opening Statement */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            01 // Opening Statement
          </h2>
          <blockquote className="text-lg md:text-xl font-serif italic text-slate-200 border-l-2 border-sky-500/60 pl-6 py-2 leading-relaxed">
            "{data.openingStatement}"
          </blockquote>
        </section>

        {/* Section 2: Context & Problem */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            02 // Context & Problem
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-300">
            {data.contextAndProblem.overview}
          </p>
          <div className="space-y-3 p-5 rounded-xl border border-slate-800 bg-slate-900/40 text-sm">
            <h3 className="font-semibold text-white">The Structural Risk</h3>
            <p className="text-slate-300 leading-relaxed">
              {data.contextAndProblem.coreRisk}
            </p>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-slate-300">
            {data.contextAndProblem.underlyingTension}
          </p>
        </section>

        {/* Section 3: System Topology Architecture */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
              03 // Request Execution Topology
            </h2>
            <span className="text-[11px] font-mono text-slate-500">
              7-Node Verified Lifecycle
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Interactive system graph: Verified branch fork at Node 1, asymmetric tone latching at Node 4, and 600ms resilience backoff at Node 6.
          </p>

          <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/40">
            <ConstellationCanvas
              activeStep={null}
              activeEdgeIds={[]}
              className="max-w-4xl"
            />
          </div>
        </section>

        {/* Section 4: Grounding & Retrieval */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            04 // Grounding & Retrieval
          </h2>
          <ul className="space-y-3 text-sm text-slate-300 list-disc list-inside">
            <li>
              Memories embedded with <code className="text-sky-400 font-mono">{data.groundingAndRetrieval.embeddingModel}</code> and persisted as vector arrays in Firestore.
            </li>
            <li>
              User queries embedded at request time via <code className="text-sky-400 font-mono">app/api/chat/route.ts</code>.
            </li>
            <li>
              Retrieval uses <strong>{data.groundingAndRetrieval.retrievalType}</strong> (top {data.groundingAndRetrieval.topK} selected).
            </li>
            <li>
              Fallback mechanism: {data.groundingAndRetrieval.fallback}.
            </li>
          </ul>

          {data.groundingAndRetrieval.decisions.map((dec) => (
            <DecisionCallout key={dec.title} decision={dec} />
          ))}
        </section>

        {/* Section 5: Memory-Write Gating */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            05 // Memory-Write Gating & State Isolation
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-300">
            {data.memoryWriteGating.policy}
          </p>

          <div className="flex items-center gap-3 py-2">
            <span className="text-xs font-mono text-slate-400">UI Action Cards:</span>
            {data.memoryWriteGating.uiCards.map((card) => (
              <span
                key={card}
                className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200"
              >
                {card}
              </span>
            ))}
          </div>

          <p className="text-xs md:text-sm text-slate-400 leading-relaxed italic border-l-2 border-slate-700 pl-4">
            Cross-turn integrity: {data.memoryWriteGating.crossTurnRule}
          </p>

          {data.memoryWriteGating.decisions.map((dec) => (
            <DecisionCallout key={dec.title} decision={dec} />
          ))}
        </section>

        {/* Section 6: Tone & Language Classification */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            06 // Deterministic Tone & Language Analysis
          </h2>
          <p className="text-sm text-slate-300">
            Engineered in <code className="text-sky-400 font-mono">{data.toneAndLanguage.sourceFile}</code> — <strong>not embedding-based</strong>.
          </p>

          <div className="space-y-2 p-4 rounded-xl border border-slate-800 bg-slate-900/30 text-xs font-mono">
            {data.toneAndLanguage.components.map((comp, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-sky-400">▸</span>
                <span className="text-slate-300">{comp}</span>
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            {data.toneAndLanguage.codeSwitching}
          </p>

          {data.toneAndLanguage.decisions.map((dec) => (
            <DecisionCallout key={dec.title} decision={dec} />
          ))}
        </section>

        {/* Section 7: Resilience Engineering */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            07 // Resilience Engineering (lib/gemini.ts)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Applying distributed systems failover rigor to LLM API dependencies:
          </p>

          <div className="p-5 rounded-xl border border-rose-900/30 bg-rose-950/10 space-y-4">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-slate-400">Cascade Chain:</span>
              {data.resilienceEngineering.cascade.map((m, i) => (
                <React.Fragment key={m}>
                  <span className="px-2 py-1 rounded bg-slate-800 text-sky-300 border border-slate-700">
                    {m}
                  </span>
                  {i < data.resilienceEngineering.cascade.length - 1 && (
                    <span className="text-slate-500">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Up to 2 attempts per model with a <strong className="text-white">{data.resilienceEngineering.backoffMs}ms backoff</strong> on retryable errors ({data.resilienceEngineering.retryableErrors.join(', ')}). Maximum worst-case execution: {data.resilienceEngineering.maxAttempts} attempts before terminating.
            </p>

            <p className="text-xs text-amber-300/90 italic border-t border-rose-900/40 pt-3">
              <strong>Tradeoff: </strong>
              {data.resilienceEngineering.tradeoff}
            </p>
          </div>
        </section>

        {/* Section 8: Trust Sequencing */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            08 // Trust Sequencing
          </h2>
          <p className="text-sm font-semibold text-white">
            {data.trustSequencing.phasing}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {data.trustSequencing.rationale}
          </p>
          <p className="text-xs text-amber-300/90 italic border-l-2 border-amber-500/50 pl-3">
            <strong>Tradeoff: </strong>
            {data.trustSequencing.tradeoff}
          </p>
        </section>

        {/* Section 9: Security & Isolation */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            09 // Isolation by Design
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Rules policy: <strong className="text-white">{data.isolationAndSecurity.rulesPolicy}</strong>.
          </p>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 text-xs font-mono space-y-2">
            <p className="text-slate-400 font-semibold uppercase">Nested Ownership Chains:</p>
            {data.isolationAndSecurity.nestedOwnership.map((chain) => (
              <p key={chain} className="text-sky-300">
                {chain} (request.auth.uid == userId)
              </p>
            ))}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {data.isolationAndSecurity.serverVerification}
          </p>
        </section>

        {/* Section 10: Lessons & Unresolved Dilemmas */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            10 // Lessons & Engineering Realities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Lesson 0{lesson.id}
                  </span>
                  <h3 className="text-sm font-semibold text-white mt-1">
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {lesson.observation}
                  </p>
                </div>
                {lesson.unresolvedTension && (
                  <p className="text-[11px] text-amber-300/90 italic border-t border-slate-800 pt-2">
                    <strong>Tension: </strong>
                    {lesson.unresolvedTension}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: Final Outcome & Forward Look */}
        <section className="space-y-6 border-t border-slate-800 pt-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400">
            11 // Final Outcome
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-300">
            {data.finalOutcome}
          </p>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-2 text-xs">
            <h3 className="font-mono font-semibold text-sky-400 uppercase">
              Forward Look: {data.forwardLook.openDirection}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {data.forwardLook.governingConstraint}
            </p>
          </div>

          <div className="pt-6 flex justify-between items-center text-xs font-mono">
            <a
              href={data.sourceRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-sky-500 text-sky-400 transition-colors"
            >
              <span>Inspect Source Repository</span>
              <span>↗</span>
            </a>

            <Link
              href="/"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Back to Hero Architecture ↑
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
