import React from 'react';
import { Layers, Network, Activity, Server, ArrowUpRight } from 'lucide-react';

export function ProductionSystemsSection() {
  const architecturalPillars = [
    {
      title: 'High-Throughput Event Streaming',
      tech: 'Apache Kafka // Distributed Consumers',
      problem: 'Handling millions of asynchronous billing and network event transactions across telecom accounts without message loss or latency spikes.',
      solution: 'Designed partitioned consumer topologies with strict key-hashing for partition-affinity, idempotent record processors, and dead-letter queue (DLQ) replay mechanics.',
      metric: 'Guaranteed at-least-once delivery with end-to-end deduplication',
    },
    {
      title: 'CQRS & Transactional Outbox',
      tech: 'Spring Boot // PostgreSQL // CDC',
      problem: 'Maintaining relational consistency across independent service boundaries during high-concurrency order placement and provisioning.',
      solution: 'Decoupled write and read models via Transactional Outbox pattern and change data capture (CDC), preventing distributed 2PC bottlenecks and ensuring immediate local commit durability.',
      metric: 'Zero dual-write inconsistency across distributed state machines',
    },
    {
      title: 'High-Availability Failover & Resiliency',
      tech: 'Circuit Breakers // Graceful Degradation',
      problem: 'Downstream dependency brownouts cascading into core transaction processing and blocking ingest pipelines.',
      solution: 'Engineered bounded thread pools with backpressure propagation, dynamic circuit breakers, and rate-limiting fallbacks that preserve essential operations under 10x traffic spikes.',
      metric: 'Graceful degradation preserving core transactional pathways',
    },
  ];

  return (
    <section id="systems" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-slate-800/80">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
          <span>02 // Enterprise Scale Architecture</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Production Systems at Scale
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Mission-critical backend engineering across distributed telecom ecosystems (genericized from large-scale billing & OSS/BSS implementations).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {architecturalPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/30 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all shadow-sm dark:shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>0{idx + 1} // ARCHITECTURE</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{pillar.tech.split('//')[0]}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-xs font-mono text-indigo-600 dark:text-indigo-300">
                {pillar.tech}
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <strong className="text-slate-800 dark:text-slate-200">The Problem: </strong>
                  {pillar.problem}
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white">Engineering: </strong>
                  {pillar.solution}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                <Activity className="w-3.5 h-3.5 shrink-0" />
                <span>{pillar.metric}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
