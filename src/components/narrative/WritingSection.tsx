import React from 'react';
import Link from 'next/link';
import { BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';

export function WritingSection() {
  const articles = [
    {
      title: 'Smriti: What If You Could Talk to Them, Just One More Time?',
      publication: 'dev.to // Architecture & Retrospective',
      date: 'Sep 2024',
      description: 'An architectural deep dive into why generic RAG fails memorial requirements, and how in-process vector retrieval and regex emotional classifiers eliminate fabrication structurally.',
      url: 'https://dev.to/manish_prajapati_cfaed027/smriti-what-if-you-could-talk-to-them-just-one-more-time-449p',
    },
    {
      title: "CQRS: The Design Pattern That's Changing the Game (and How You Can Use It Too)",
      publication: 'dev.to // Distributed Architecture',
      date: 'Aug 2024',
      description: 'Practical guide to balancing load between read and write models, optimizing independent scalability, and decoupling domain operations from query projections.',
      url: 'https://dev.to/manish-1614/cqrs-the-design-pattern-thats-changing-the-game-and-how-you-can-use-it-too-jp8',
    },
    {
      title: 'Authentication Failure for IMAP and POP3 Using Client Credential Flow for OAuth2',
      publication: 'Microsoft Tech Community // Security & Auth',
      date: '2022',
      description: 'Technical deep dive into OAuth2 client credential flow token lifecycles, service principal permissions, and protocol scope handling for headless authentication.',
      url: 'https://techcommunity.microsoft.com/discussions/microsoft-365/authentication-failure-for-imap-and-pop3-using-client-credential-flow-for-oauth2/3576825',
    },
  ];

  return (
    <section id="writing" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-slate-800/80">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <span>05 // Technical Writing & Mentorship</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Writing & Architecture Notes
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Deep-dive technical guides on distributed systems, event-driven backends, and reliable AI architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((post, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/30 p-6 flex flex-col justify-between space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-600 dark:text-emerald-400">{post.publication}</span>
                <span className="text-slate-500 dark:text-slate-400">{post.date}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {post.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              {post.url ? (
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-500">
                  <span>Draft in Peer Review</span>
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
