'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

interface PortraitCompileProps {
  compileProgress: number; // 0 (full photo) to 1 (full matrix/constellation)
}

export const PortraitCompile: React.FC<PortraitCompileProps> = ({ compileProgress }) => {
  // Continuous smooth curve: photo desaturates and fades as progress increases
  const photoOpacity = Math.max(0, 1 - compileProgress * 1.3);
  const matrixOpacity = Math.min(1, Math.max(0, (compileProgress - 0.2) * 1.5));
  const scale = 1 - compileProgress * 0.08;

  return (
    <div
      className="relative w-72 h-72 md:w-96 md:h-96 mx-auto transition-transform duration-150 ease-out"
      style={{ transform: `scale(${scale})` }}
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute inset-0 bg-sky-500/15 rounded-full blur-3xl transition-opacity duration-300 pointer-events-none"
        style={{ opacity: matrixOpacity }}
      />

      {/* Layer 1: Photographic Portrait */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-800 transition-opacity duration-200"
        style={{ opacity: photoOpacity }}
      >
        <Image
          src={getAssetPath('/hero.webp')}
          alt="Manish Prajapati - Senior IC Engineer"
          fill
          priority
          sizes="(max-width: 768px) 288px, 384px"
          className="object-cover grayscale contrast-125 brightness-90"
        />
      </div>

      {/* Layer 2: SVG Halftone Coordinate Decomposition Grid */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-200"
        style={{ opacity: matrixOpacity }}
      >
        <defs>
          <pattern id="compileGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="#38bdf8" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#compileGrid)" />

        {/* Anchored Coalescence Dots */}
        {[
          { cx: 80, cy: 190, r: 4 },
          { cx: 140, cy: 110, r: 5 },
          { cx: 220, cy: 110, r: 4.5 },
          { cx: 170, cy: 280, r: 5 },
          { cx: 280, cy: 190, r: 5 },
          { cx: 330, cy: 190, r: 5 },
          { cx: 370, cy: 190, r: 4 },
        ].map((pt, i) => (
          <circle
            key={i}
            cx={pt.cx}
            cy={pt.cy}
            r={pt.r}
            fill="#38bdf8"
            className="sonar-wave"
            style={{
              animationDelay: `${i * 150}ms`,
              filter: 'drop-shadow(0 0 6px #38bdf8)',
            }}
          />
        ))}
      </svg>
    </div>
  );
};
