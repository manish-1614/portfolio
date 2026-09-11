import React from 'react';
import Link from 'next/link';
import { Mail, Github, Linkedin, ArrowUpRight, CheckCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-slate-800/80">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900/50 dark:to-slate-950 p-8 md:p-14 text-center max-w-4xl mx-auto space-y-8 shadow-md dark:shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          <span>Open to Senior Remote IC Roles</span>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Build Production Systems.
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            I work with engineering teams, tech leads, and founders building distributed backend architectures,
            resilient microservices, and verified agentic AI systems.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:mkprajapati@zohomail.in"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-mono font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg shadow-sky-900/20"
          >
            <Mail className="w-4 h-4" />
            <span>mkprajapati@zohomail.in</span>
          </Link>

          <Link
            href="https://github.com/manish-1614"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mkprajapati1614/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-500 max-w-md mx-auto">
          Location: Remote (IST / Global Cross-Overlap) // Clear asynchronous communication & high technical ownership.
        </div>
      </div>
    </section>
  );
}
