import { SectionWrapper } from '../layout/SectionWrapper';
import { TechIcon } from '../ui/TechIcon';

interface BlogPost {
    title: string;
    page: string;
    time: string;
    url: string;
    description: string;
    iconname: string;
}

interface BlogProps {
    blogs: BlogPost[];
}

export function Blog({ blogs }: BlogProps) {
    return (
        <SectionWrapper id="blog" className="py-24 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-blue-600 dark:text-blue-500 font-mono font-medium tracking-wider uppercase text-sm">
                        Insights & Writing
                    </h2>
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Latest Publications
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post, index) => (
                        <a
                            key={`${post.title}-${index}`}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-blue-600/30 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all h-full shadow-sm dark:shadow-none"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600/10 dark:group-hover:bg-blue-500/10 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                    <TechIcon reacticon={post.iconname} size={24} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-black text-slate-600 dark:text-slate-500 uppercase tracking-widest leading-none">
                                        {post.page}
                                    </p>
                                    <p className="text-xs font-mono text-blue-700 dark:text-blue-500/80 font-bold">
                                        {post.time}
                                    </p>
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                {post.title}
                            </h4>

                            <p className="text-slate-800 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                                {post.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-500 group-hover:text-slate-950 dark:group-hover:text-slate-300 uppercase tracking-tighter">
                                    Read Publication
                                </span>
                                <span className="text-blue-700 dark:text-blue-500 transition-transform group-hover:translate-x-1 font-bold">→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
