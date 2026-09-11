import React from 'react';
import Link from 'next/link';
import { BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';

export function WritingSection() {
  const articles = [
    {
      title: 'Architecting Smriti: Zero-Fabrication Retrieval and Resilience Cascades',
      publication: 'dev.to // Technical Breakdown',
      date: '2024',
      description: 'An architectural deep dive into why generic RAG fails memorial requirements, and how in-process vector retrieval and regex emotional classifiers eliminate fabrication structurally.',
      url: 'https://dev.to',
    },
    {
      title: 'Distributed Transaction Patterns: CQRS and Event Sourcing with Kafka',
      publication: 'Engineering Notes // Backend Architecture',
      date: '2023',
      description: 'Practical guide to eliminating distributed two-phase commit bottlenecks using the Transactional Outbox pattern and consumer-side idempotent deduplication.',
      url: 'https://dev.to',
    },
    {
      title: 'OAuth2 & JWT Implementation for Zero-Trust Microservices',
      publication: 'System Design // Security & Auth',
      date: '2023',
      description: 'End-to-end walkthrough of token lifecycle validation, asymmetric public-key rotation, and secure stateless authorization across federated microservices.',
      url: 'https://dev.to',
    },
  ];

  return (
    <section id="writing" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span>05 // Technical Writing & Mentorship</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Writing & Architecture Notes
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Deep-dive technical guides on distributed systems, event-driven backends, and reliable AI architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((post, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400">{post.publication}</span>
                <span className="text-slate-500">{post.date}</span>
              </div>
              <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {post.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <Link
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
