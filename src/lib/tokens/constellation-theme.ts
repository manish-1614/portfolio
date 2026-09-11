export const CONSTELLATION_TOKENS = {
  viewBox: { width: 1000, height: 600 },
  nodeRadius: 8,
  haloRadius: 18,
  pulseRadius: 28,
  categories: {
    input: {
      color: '#38bdf8', // sky-400
      accent: '#0284c7', // sky-600
      glow: 'rgba(56, 189, 248, 0.45)',
    },
    embedding: {
      color: '#818cf8', // indigo-400
      accent: '#4f46e5', // indigo-600
      glow: 'rgba(129, 140, 248, 0.45)',
    },
    retrieval: {
      color: '#a78bfa', // violet-400
      accent: '#7c3aed', // violet-600
      glow: 'rgba(167, 139, 250, 0.45)',
    },
    tone: {
      color: '#f472b6', // pink-400
      accent: '#db2777', // pink-600
      glow: 'rgba(244, 114, 182, 0.45)',
    },
    merge: {
      color: '#fbbf24', // amber-400
      accent: '#d97706', // amber-600
      glow: 'rgba(251, 191, 36, 0.45)',
    },
    resilience: {
      color: '#f87171', // red-400 (error state)
      accent: '#dc2626', // red-600
      recovered: '#34d399', // emerald-400
      glow: 'rgba(248, 113, 113, 0.45)',
    },
    output: {
      color: '#34d399', // emerald-400
      accent: '#059669', // emerald-600
      glow: 'rgba(52, 211, 153, 0.45)',
    },
  },
  strokes: {
    idleEdge: '#334155', // slate-700
    activeEdge: '#38bdf8', // sky-400
    latchedEdge: '#f472b6', // pink-400 (tone branch waiting)
    flickerEdge: '#f87171', // red-400
  },
} as const;
