import { SectionWrapper } from '../layout/SectionWrapper';
import { TechIcon } from '../ui/TechIcon';
import { CONTACT_CONFIG } from '@/config/contact';

interface Link {
    text: string;
    url: string;
    reacticon: string;
}

interface ContactProps {
    links: Link[];
    email?: string;
    phone?: string;
}

export function Contact({
    links,
    email = CONTACT_CONFIG.email,
    phone = CONTACT_CONFIG.phone
}: ContactProps) {
    return (
        <SectionWrapper id="contact" className="py-24 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-blue-600 dark:text-blue-500 font-mono font-medium tracking-wider uppercase text-sm">
                        Get In Touch
                    </h2>
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Let&#x27;s Build Something Together
                    </h3>
                    <p className="text-slate-800 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                        I&#x27;m always open to discussing distributed systems, AI agents, or mentoring opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Contact Details
                        </h4>
                        <div className="space-y-4">
                            {email && (
                                <a
                                    href={`mailto:${email}`}
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-blue-500/30 transition-all group shadow-sm dark:shadow-none"
                                >
                                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors border border-slate-100 dark:border-transparent">
                                        <TechIcon reacticon="AiOutlineMail" size={24} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">Email</p>
                                        <p className="text-slate-900 dark:text-slate-200 font-bold truncate">{email}</p>
                                    </div>
                                </a>
                            )}

                            {phone && (
                                <a
                                    href={`tel:${phone.replace(/\s+/g, '')}`}
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-blue-500/30 transition-all group shadow-sm dark:shadow-none"
                                >
                                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors border border-slate-100 dark:border-transparent">
                                        <TechIcon reacticon="AiOutlinePhone" size={24} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">Phone</p>
                                        <p className="text-slate-900 dark:text-slate-200 font-bold truncate">{phone}</p>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Social Profiles
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            {links.filter(l => !l.text.toLowerCase().includes('call') && !l.text.toLowerCase().includes('mail')).map((link, index) => (
                                <a
                                    key={`${link.url}-${index}`}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/20 hover:bg-white dark:hover:bg-slate-900/40 hover:border-blue-300 dark:hover:border-slate-700 transition-all group shadow-sm dark:shadow-none"
                                >
                                    <TechIcon reacticon={link.reacticon} size={28} className="text-slate-500 dark:text-slate-500 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors mb-2" />
                                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors uppercase tracking-widest">
                                        {link.text.split(' ')[0]}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Closing statement */}
                <div className="pt-12 text-center border-t border-slate-200 dark:border-slate-900">
                    <p className="text-slate-600 dark:text-slate-500 text-sm italic font-mono font-bold">
                        Designed for performance. Engineered for impact.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
