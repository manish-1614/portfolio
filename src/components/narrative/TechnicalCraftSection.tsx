import React from 'react';
import { Terminal, Database, Server, Compass, Shield, GitBranch } from 'lucide-react';

export function TechnicalCraftSection() {
  const domains = [
    {
      domain: 'AI & Retrieval Systems',
      description: 'Zero-fabrication architecture, deterministic pipeline design, and resilience routing.',
      principles: [
        'In-process cosine vector retrieval over bounded memory vaults',
        'Deterministic rule-based regex classifiers (<1ms latency snap)',
        'Explicit UI memory-write gating (zero unconfirmed state writes)',
        'Model fallover cascades with exponential backoff handlers',
      ],
      stack: ['Google Gemini APIs', 'Vector Embeddings', 'Firestore', 'Prompt Engineering'],
    },
    {
      domain: 'Distributed Systems & Backend',
      description: 'High-throughput transactional systems designed for resilience and partition tolerance.',
      principles: [
        'Partitioned event streaming with consumer group affinity',
        'Transactional Outbox pattern preventing dual-write inconsistency',
        'Idempotent event processing and Dead Letter Queue re-drive mechanics',
        'Strict schema evolution and backward compatibility standards',
      ],
      stack: ['Java', 'C++', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Docker'],
    },
    {
      domain: 'Frontend Architecture & Motion',
      description: 'Performant, accessible interfaces that communicate system state without gimmicks.',
      principles: [
        'Layered morph containers with zero layout jolt (CLS: 0.00)',
        'Strict reduced-motion parity with instant static topological schemas',
        'DOM/SVG stateful signal graph rendering over compositor properties',
        'Full keyboard operability and WCAG 2.2 AAA contrast compliance',
      ],
      stack: ['TypeScript', 'React 19', 'Next.js App Router', 'Tailwind CSS 4', 'GSAP / SVG'],
    },
    {
      domain: 'Reliability & Engineering Rigor',
      description: 'Production-readiness measured by how software behaves when dependencies fail.',
      principles: [
        'Explicit tradeoff documentation for all architectural decisions',
        'Telemetry-driven error boundaries and graceful degradation',
        'Zero database bloat in static and client-side distribution bundles',
        'Rigorous automated type-safety and contract verification',
      ],
      stack: ['CI/CD Pipelines', 'Structured Logging', 'OpenTelemetry', 'Load Testing'],
    },
  ];

  return (
    <section id="craft" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <span>04 // Technical Craft & Disciplines</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Technical Craft
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          No badge walls or arbitrary skill percentage bars. Software craftsmanship defined by architectural principles, engineering tradeoffs, and verified production capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {domains.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700/80 transition-all shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>0{idx + 1} // DOMAIN</span>
                <span className="text-sky-400 font-semibold">{item.domain}</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {item.domain}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <p className="text-xs font-mono text-slate-300 font-medium">Core Working Principles:</p>
                <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                  {item.principles.map((principle, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">
                      <span className="text-slate-300">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
              {item.stack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-800/60 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
