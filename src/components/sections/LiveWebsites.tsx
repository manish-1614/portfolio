import Image from 'next/image';
import { SectionWrapper } from '../layout/SectionWrapper';

export function LiveWebsites() {
    const websites = [
        {
            title: "Laxmi Flour Mill - Multigrain Atta",
            url: "https://manish-1614.github.io/laxmi-flour-mill",
            description: "A specialized website for authentic multigrain flour products.",
            thumbnail: "/lfm.webp" 
        },
        {
            title: "Hotel Shasha - Jibhi, Himachal",
            url: "https://manish-1614.github.io/hotel-shasha-website/",
            description: "A cozy homestay experience in the heart of Jibhi.",
            thumbnail: "/ShashaLogo.webp" 
        }
    ];

    return (
        <SectionWrapper id="live-websites" className="py-12 bg-slate-50 dark:bg-slate-900/10">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Live Websites</h2>
                    <p className="text-slate-500 dark:text-slate-400">Recent web projects currently live and serving users.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {websites.map((site) => (
                        <a 
                            key={site.url} 
                            href={site.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <Image
                                    src={site.thumbnail}
                                    alt={site.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="p-6 space-y-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {site.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    {site.description}
                                </p>
                                <div className="pt-2 flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold">
                                    Visit Site 
                                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}

