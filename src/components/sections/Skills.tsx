import { SectionWrapper } from '../layout/SectionWrapper';
import { TechIcon } from '../ui/TechIcon';

interface RatedSkill {
    name: string;
    rating: string | number;
}

interface SkillChip {
    name: string;
}

interface TechStackIcon {
    reacticon: string;
    label: string | null;
}

interface SkillsProps {
    rated: RatedSkill[];
    chips: SkillChip[];
    icons: TechStackIcon[];
}

export function Skills({ rated, chips, icons }: SkillsProps) {
    return (
        <SectionWrapper id="skills" className="py-24 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-16">
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-blue-600 dark:text-blue-500 font-mono font-medium tracking-wider uppercase text-sm">
                        Technical Arsenal
                    </h2>
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Skills & Expertise
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Rated Skills */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            <span className="w-8 h-px bg-blue-500"></span>
                            Core Proficiency
                        </h4>
                        <div className="space-y-6">
                            {rated.map((skill) => {
                                const rawScore = typeof skill.rating === 'string' ? parseFloat(skill.rating) : Number(skill.rating);
                                const score = Number.isFinite(rawScore) ? Math.max(0, Math.min(5, rawScore)) : 0;
                                const percentage = (score / 5) * 100;
                                return (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-medium text-slate-800 dark:text-slate-300">{skill.name}</span>
                                            <span className="text-xs font-mono text-slate-600 dark:text-slate-500">{score.toFixed(1)} / 5</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-linear-to-r from-blue-600 to-blue-400 rounded-full"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Skill Chips & Tech Icons */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <span className="w-8 h-px bg-blue-500"></span>
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {chips.map((chip) => (
                                    <span
                                        key={chip.name}
                                        className="px-3 py-1 rounded-md bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-400 text-sm hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm dark:shadow-none cursor-default font-medium"
                                    >
                                        {chip.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">
                                Tools & Libraries
                            </h4>
                            <div className="grid grid-cols-4 sm:grid-cols-6 gap-6">
                                {icons.map((icon) => {
                                    const label = icon.label
                                        ?? icon.reacticon.split('/').pop()?.replace(/^(Fa|Si|Tb|Ai)/, '').replace(/^Brand/, '')
                                        ?? icon.reacticon;
                                    return (
                                        <div
                                            key={icon.reacticon}
                                            className="group relative flex flex-col items-center gap-2"
                                        >
                                            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all shadow-sm dark:shadow-none">
                                                <TechIcon reacticon={icon.reacticon} size={28} className="text-slate-500 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-300 text-center truncate w-full uppercase tracking-tighter">
                                                {label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
