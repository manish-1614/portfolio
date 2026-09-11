import React from 'react';
import Link from 'next/link';
import { ExternalLink, Code2, Layers } from 'lucide-react';

export function AlsoBuiltSection() {
  const toolsAndProjects = [
    {
      title: 'dslr-to-webp',
      type: 'Developer Utility // CLI & Web',
      description: 'High-efficiency lossless and near-lossless bulk image transcoding engine, optimizing high-resolution DSLR RAW/JPEG assets into modern WebP streams.',
      tech: ['Node.js', 'Sharp / libvips', 'Streams API'],
      github: 'https://github.com/manish-1614/dslr-to-webp',
    },
    {
      title: 'hotel-shasha-website',
      type: 'Production Web App // Client Platform',
      description: 'Full-featured booking and dynamic hospitality portal engineered with static-first rendering, real-time availability checks, and edge asset caching.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/manish-1614',
    },
    {
      title: 'laxmi-flour-mill',
      type: 'Commercial Platform // Logistics & Orders',
      description: 'Localized direct-to-consumer ordering and inventory tracking interface with offline-first form validation and automated order dispatch notifications.',
      tech: ['React', 'REST API', 'PostgreSQL'],
      github: 'https://github.com/manish-1614',
    },
  ];

  return (
    <section id="also-built" className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
          <span>03 // Selected Builds & Utilities</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Also Built
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Targeted production tools, utilities, and client platforms engineered with clean design and pragmatic performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {toolsAndProjects.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-sky-400">{item.type}</span>
                <Link
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label={`View ${item.title} source`}
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
              <h3 className="text-base font-bold text-white font-mono">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
              {item.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-800/60 border border-slate-700/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
