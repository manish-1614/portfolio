'use client';

import { useState } from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { TechIcon } from '../ui/TechIcon';

interface Certificate {
    title: string;
    url: string;
    thumbnail: string;
}

interface Accomplishment {
    type: string;
    title: string;
    author: string | null;
    url: string;
}

interface Badge {
    title: string;
    imageurl: string;
    date: string;
    url?: string;
}

interface AccomplishmentsProps {
    certs: Certificate[];
    accs: Accomplishment[];
    affiliated: Badge[];
    list: Badge[];
}

export function Accomplishments({ certs, accs, affiliated, list }: AccomplishmentsProps) {
    const [activeTab, setActiveTab] = useState<'certs' | 'badges'>('certs');

    return (
        <SectionWrapper id="accomplishments" className="py-24 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <h2 className="text-blue-600 dark:text-blue-500 font-mono font-medium tracking-wider uppercase text-sm">
                            Social Proof
                        </h2>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                            Accomplishments
                        </h3>
                    </div>

                    <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit shadow-inner">
                        <button
                            onClick={() => setActiveTab('certs')}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'certs'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-800/50'
                                }`}
                        >
                            Certifications
                        </button>
                        <button
                            onClick={() => setActiveTab('badges')}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'badges'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-800/50'
                                }`}
                        >
                            Badges
                        </button>
                    </div>
                </div>

                {activeTab === 'certs' ? (
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certs.map((cert, index) => (
                                <a
                                    key={cert.url + index}
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative block p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all overflow-hidden shadow-sm dark:shadow-none"
                                >
                                    <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                        {cert.thumbnail ? (
                                            <img
                                                src={cert.thumbnail}
                                                alt={cert.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-mono text-xs p-4 text-center">
                                                {cert.title.length > 20 ? `${cert.title.substring(0, 20)}...` : cert.title}
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="text-slate-900 dark:text-slate-200 font-semibold group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                                        {cert.title}
                                    </h4>
                                    <div className="mt-2 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-medium">
                                        View Certificate
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {accs.length > 0 && (
                            <div className="space-y-6">
                                <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest border-l-2 border-blue-600 dark:border-blue-500 pl-4">
                                    Additional Recognitions
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {accs.map((acc, idx) => (
                                        <a
                                            key={idx}
                                            href={acc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/20 hover:bg-slate-100 dark:hover:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 transition-all group shadow-sm dark:shadow-none"
                                        >
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold text-blue-700 dark:text-blue-500/80 uppercase tracking-tighter">
                                                    {acc.type}
                                                </span>
                                                <p className="text-slate-900 dark:text-slate-300 text-sm font-bold group-hover:text-blue-600 dark:group-hover:text-white">
                                                    {acc.title}
                                                </p>
                                                {acc.author && (
                                                    <p className="text-xs text-slate-600 dark:text-slate-500 font-medium">by {acc.author}</p>
                                                )}
                                            </div>
                                            <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {[...affiliated, ...list].map((badge, idx) => (
                            <div
                                key={idx}
                                className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 flex flex-col items-center text-center space-y-4 hover:border-amber-500/20 hover:bg-amber-500/5 transition-all shadow-sm dark:shadow-none"
                            >
                                <div className="relative w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform shadow-inner">
                                    {/* Badge Image Icon Placeholder */}
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-slate-600 group-hover:text-amber-500 transition-colors"><path d="M12 15l-2 5l-2-5l-5-2l5-2l2-5l2 5l5 2z"></path></svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-slate-900 dark:text-slate-200 text-sm font-bold leading-tight line-clamp-2">
                                        {badge.title}
                                    </h4>
                                    <p className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-500 uppercase tracking-tighter">
                                        {badge.date}
                                    </p>
                                </div>
                                {badge.url && (
                                    <a
                                        href={badge.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-bold text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors uppercase tracking-widest pt-2"
                                    >
                                        Verify Badge
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </SectionWrapper>
    );
}
