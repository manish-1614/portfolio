import { SectionWrapper } from '../layout/SectionWrapper';

interface Deed {
    title: string;
    imageurl: string;
    description: string;
}

interface Recognition {
    topic: string;
    title: string;
    company: string;
    time: string;
    url: string;
    description: string;
}

interface CommunityProps {
    deeds: Deed[];
    recognition: Recognition[];
}

export function Community({ deeds, recognition }: CommunityProps) {
    return (
        <SectionWrapper id="community" className="py-24 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-24">
                {/* Deeds / Impact */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-blue-600 dark:text-blue-500 font-mono font-medium tracking-wider uppercase text-sm">
                            Giving Back
                        </h2>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                            Community Impact
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {deeds.map((deed) => (
                            <div
                                key={deed.title}
                                className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 relative overflow-hidden shadow-sm dark:shadow-none"
                            >
                                <div className="space-y-6 relative z-10">
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                                        {deed.title}
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-400 leading-relaxed text-sm font-medium">
                                        {deed.description}
                                    </p>
                                </div>
                                {/* Background image effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] dark:opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                    <div className="w-full h-full bg-blue-500 blur-3xl rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recognition / Awards */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-blue-600 dark:text-blue-500 font-mono font-medium tracking-wider uppercase text-sm text-right">
                            Honors & Awards
                        </h2>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-right">
                            Recognition
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {recognition.map((item) => (
                            <a
                                key={item.title}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-900 hover:border-blue-300 dark:hover:border-slate-700 transition-all group gap-4 shadow-sm dark:shadow-none"
                            >
                                <div className="space-y-1 flex-1">
                                    <p className="text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-widest leading-none">
                                        {item.topic}
                                    </p>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-400 text-xs mt-1 font-medium">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex flex-col md:items-end shrink-0 gap-1">
                                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                                        {item.company}
                                    </span>
                                    <span className="text-xs font-mono text-slate-600 dark:text-slate-500 font-bold">
                                        {item.time}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
