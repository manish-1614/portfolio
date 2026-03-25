import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '../layout/SectionWrapper';
import { TechIcon } from '../ui/TechIcon';

export function Hero() {
    const stats = [
        { label: 'Years Experience', value: '8+' },
        { label: 'AI Agents Built', value: '15+' },
        { label: 'Developers Mentored', value: '50+' },
        { label: 'Technical Talks', value: '10+' },
    ];

    const personas = ['Distributed Systems Engineer', 'AI Agent Builder', 'Technical Mentor'];

    return (
        <SectionWrapper id="home" className="py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h2 className="text-blue-600 dark:text-blue-500 font-mono font-medium tracking-wider uppercase text-sm">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Manish Kumar <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
                                Prajapati
                            </span>
                        </h1>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                            {personas.map((persona) => (
                                <span
                                    key={persona}
                                    className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 text-sm font-medium"
                                >
                                    {persona}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-lg text-slate-700 dark:text-slate-400 max-w-2xl leading-relaxed">
                        I specialize in building scalable distributed systems and autonomous AI agents.
                        Currently at Amdocs, focused on Japan's J:COM CRM transformation.
                        Passionate about technical mentorship and clean architecture.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="space-y-1">
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                                <p className="text-xs text-slate-600 dark:text-slate-500 uppercase tracking-widest font-semibold">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                        <Link
                            href="/experience"
                            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/25"
                        >
                            View Experience
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold transition-all"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                <div className="relative w-64 h-64 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-3xl rotate-6 blur-2xl"></div>
                    <div className="absolute inset-0 border border-slate-200 dark:border-slate-800 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm -rotate-3"></div>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center">
                        <Image
                            src="/hero.webp"
                            alt="Manish Kumar Prajapati profile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
