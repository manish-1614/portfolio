export type NodeCategory =
  | 'input'
  | 'embedding'
  | 'retrieval'
  | 'tone'
  | 'merge'
  | 'resilience'
  | 'output';

export interface TraceNode {
  id: string;
  stepNumber: number;
  label: string;
  category: NodeCategory;
  coords: { x: number; y: number };
  verifiedFact: {
    technicalTitle: string;
    description: string;
    sourceFile: string;
    timingProfileMs: { min: number; max: number };
  };
  behavior?: {
    isFork?: boolean;
    isMerge?: boolean;
    isInstantBranch?: boolean;
    hasFailureSimulation?: boolean;
    errorBadge?: string;
    recoveredBadge?: string;
    retryBackoffMs?: number;
  };
}

export interface TraceEdge {
  id: string;
  from: string;
  to: string;
  type: 'serial' | 'parallel-branch' | 'merge-branch';
  durationSeconds: number;
  staggerDelay?: number;
}

export const SMRITI_TRACE_NODES: TraceNode[] = [
  {
    id: 'node-msg-in',
    stepNumber: 1,
    label: 'Message Received',
    category: 'input',
    coords: { x: 12, y: 50 },
    verifiedFact: {
      technicalTitle: 'Client Ingestion & Token Auth',
      description: 'Incoming query validated against Firestore auth token before retrieval or generation logic runs.',
      sourceFile: 'app/api/chat/route.ts',
      timingProfileMs: { min: 10, max: 25 },
    },
    behavior: {
      isFork: true,
    },
  },
  {
    id: 'node-embed',
    stepNumber: 2,
    label: 'Query Embedded',
    category: 'embedding',
    coords: { x: 32, y: 28 },
    verifiedFact: {
      technicalTitle: 'Vector Representation',
      description: 'Embedded with gemini-embedding-2-preview at request time into a 768-dim float array.',
      sourceFile: 'app/api/chat/route.ts',
      timingProfileMs: { min: 60, max: 120 },
    },
  },
  {
    id: 'node-retrieval',
    stepNumber: 3,
    label: 'Memory Retrieval',
    category: 'retrieval',
    coords: { x: 54, y: 28 },
    verifiedFact: {
      technicalTitle: 'In-Process Cosine Similarity',
      description: 'Application-level similarity over memory array; top 5 selected. Keyword fallback if embedding missing.',
      sourceFile: 'app/api/chat/route.ts',
      timingProfileMs: { min: 5, max: 15 },
    },
  },
  {
    id: 'node-tone',
    stepNumber: 4,
    label: 'Tone & Script Detected',
    category: 'tone',
    coords: { x: 42, y: 72 },
    verifiedFact: {
      technicalTitle: 'Deterministic Rule Classifier',
      description: 'Not embedding-based. Regex Unicode script detection and keyword emotion matcher (e.g. "yaad aati" -> Grieving).',
      sourceFile: 'lib/language-analysis.ts',
      timingProfileMs: { min: 1, max: 3 },
    },
    behavior: {
      isInstantBranch: true,
    },
  },
  {
    id: 'node-merge',
    stepNumber: 5,
    label: 'Grounded + Toned Prompt',
    category: 'merge',
    coords: { x: 70, y: 50 },
    verifiedFact: {
      technicalTitle: 'Zero-Fabrication Synthesis',
      description: 'Injects top-5 verified memories and explicit tone directive. Model instructed never to invent memories outside vault.',
      sourceFile: 'app/api/chat/route.ts',
      timingProfileMs: { min: 2, max: 5 },
    },
    behavior: {
      isMerge: true,
    },
  },
  {
    id: 'node-generation',
    stepNumber: 6,
    label: 'Generation & Cascade',
    category: 'resilience',
    coords: { x: 84, y: 50 },
    verifiedFact: {
      technicalTitle: 'Resilience Fallback Cascade',
      description: 'Primary gemini-3.1-flash-lite fails over through 3.6-flash, 3.7-flash, and flash-latest with 600ms backoff.',
      sourceFile: 'lib/gemini.ts',
      timingProfileMs: { min: 400, max: 1200 },
    },
    behavior: {
      hasFailureSimulation: true,
      errorBadge: '503 UNAVAIL (gemini-3.1-flash-lite)',
      recoveredBadge: '200 OK (gemini-3.6-flash)',
      retryBackoffMs: 600,
    },
  },
  {
    id: 'node-response',
    stepNumber: 7,
    label: 'Response Returned',
    category: 'output',
    coords: { x: 96, y: 50 },
    verifiedFact: {
      technicalTitle: 'Non-Generative Fallback Delivery',
      description: 'Delivered to client. Unconfirmed memory updates surfaced as Save/Review cards; zero unconfirmed Firestore writes.',
      sourceFile: 'firestore.rules',
      timingProfileMs: { min: 10, max: 30 },
    },
  },
];

export const SMRITI_TRACE_EDGES: TraceEdge[] = [
  {
    id: 'edge-1-2',
    from: 'node-msg-in',
    to: 'node-embed',
    type: 'parallel-branch',
    durationSeconds: 0.35,
  },
  {
    id: 'edge-1-4',
    from: 'node-msg-in',
    to: 'node-tone',
    type: 'parallel-branch',
    durationSeconds: 0.12,
  },
  {
    id: 'edge-2-3',
    from: 'node-embed',
    to: 'node-retrieval',
    type: 'serial',
    durationSeconds: 0.3,
  },
  {
    id: 'edge-3-5',
    from: 'node-retrieval',
    to: 'node-merge',
    type: 'merge-branch',
    durationSeconds: 0.28,
  },
  {
    id: 'edge-4-5',
    from: 'node-tone',
    to: 'node-merge',
    type: 'merge-branch',
    durationSeconds: 0.28,
  },
  {
    id: 'edge-5-6',
    from: 'node-merge',
    to: 'node-generation',
    type: 'serial',
    durationSeconds: 0.3,
  },
  {
    id: 'edge-6-7',
    from: 'node-generation',
    to: 'node-response',
    type: 'serial',
    durationSeconds: 0.35,
  },
];
