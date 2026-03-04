import { SectionWrapper } from '../layout/SectionWrapper';

interface EducationItem {
    name: string;
    course: string;
    duration: string;
    score: string;
    work: string[];
}

interface EducationProps {
    education: EducationItem[];
}

export function Education({ education }: EducationProps) {
    return (
        <SectionWrapper id="education" className="py-24 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-16">
                <div className="space-y-4">
                    <h2 className="text-blue-600 dark:text-blue-500 font-mono font-medium tracking-wider uppercase text-sm">
                        Academic Background
                    </h2>
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Education
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((item) => (
                        <div
                            key={item.name + item.course}
                            className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 backdrop-blur-sm hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                                            {item.course}
                                        </h4>
                                        <p className="text-blue-700 dark:text-blue-400 text-sm font-semibold">
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold whitespace-nowrap">
                                        {item.score}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                                        Major Coursework / Highlights
                                    </p>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {item.work.map((w, idx) => (
                                            <li key={idx} className="text-slate-700 dark:text-slate-400 text-sm flex items-start gap-2 leading-relaxed">
                                                <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0"></span>
                                                {w}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                                <p className="text-xs font-mono text-slate-600 dark:text-slate-500 flex items-center gap-2 font-semibold">
                                    <span className="w-4 h-px bg-slate-300 dark:bg-slate-700"></span>
                                    {item.duration}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
