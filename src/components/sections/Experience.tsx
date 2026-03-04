import { SectionWrapper } from '../layout/SectionWrapper';

interface WorkExperience {
    title: string;
    company: string;
    duration: string;
    details: string[];
}

interface ExperienceProps {
    experiences: WorkExperience[];
}

export function Experience({ experiences }: ExperienceProps) {
    return (
        <SectionWrapper id="experience" className="py-24 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-16">
                <div className="space-y-4">
                    <h2 className="text-blue-600 dark:text-blue-500 font-mono font-medium tracking-wider uppercase text-sm">
                        Professional Path
                    </h2>
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Work Experience
                    </h3>
                </div>

                <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <div key={`${exp.company}-${exp.title}-${index}`} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            {/* Timeline marker */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-500 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 top-0 md:top-1/2 -ml-5 md:ml-0 -translate-y-1/2 md:-translate-y-1/2">
                                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                            </div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors ml-auto md:ml-0 shadow-sm dark:shadow-none">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{exp.title}</h4>
                                        <p className="text-blue-700 dark:text-blue-400 font-semibold">{exp.company}</p>
                                    </div>
                                    <time className="text-sm font-mono text-slate-700 dark:text-slate-300 whitespace-nowrap bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700 font-semibold">
                                        {exp.duration}
                                    </time>
                                </div>

                                <ul className="space-y-3">
                                    {exp.details.map((detail, i) => (
                                        <li key={i} className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                                            <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0"></span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
