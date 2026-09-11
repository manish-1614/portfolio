import { CaseStudyData } from './types';

export const SMRITI_CASE_STUDY: CaseStudyData = {
  slug: 'smriti',
  title: 'Smriti',
  subtitle: 'Conversational memorial companion with zero-fabrication retrieval architecture',
  role: 'Creator & Architect',
  status: 'Deployed & functional, informal validation',
  sourceRepoUrl: 'https://github.com/manish-1614/smriti-memorial-companion',
  technicalDescriptor: {
    primary: 'Zero-fabrication retrieval architecture',
    secondary: 'Structurally grounded, non-generative-fallback design',
    forbidden: 'Hallucination-prevention (implies mitigating a model flaw; Smriti makes fabrication structurally impossible)',
  },
  openingStatement:
    "A grounded AI always has an easy way out of a hard moment: it can simply say it doesn't know. That's technically honest and emotionally hollow — the last thing someone wants from a system built to preserve a person they lost. Smriti was constrained to never invent anything outside the memories it was given, and still had to answer grief with something that felt like care, not a lookup failure. That tension — never fabricate, never feel cold — is what shaped the architecture.",
  contextAndProblem: {
    overview:
      "Smriti is a conversational AI trained on a specific person's actual messages and writing, built to let someone continue a form of conversation with them after they're gone.",
    coreRisk:
      "The obvious engineering risk in a product like this is fabrication — an AI inventing memories or words the person never said. Smriti closes that risk structurally rather than mitigating it: it only ever draws from the memory data assigned to it, and when a query falls outside that data, it doesn't guess — it names the gap and offers to add the new information as a memory going forward.",
    underlyingTension:
      "A system that's honest about the limits of what it knows can easily default to sounding like it's hitting those limits — clinical, hedging, a database returning 'no result.' For a person in grief, that reads as coldness at the exact moment they need presence. The real design problem wasn't accuracy. It was building a system with zero tolerance for invention that still had to recognize sadness and respond with warmth, not caveats.",
  },
  groundingAndRetrieval: {
    embeddingModel: 'gemini-embedding-2-preview',
    storage: 'Vector arrays in Firestore',
    retrievalType: 'Application-level cosine similarity computed in-process over memory array',
    topK: 5,
    fallback: 'Keyword-overlap fallback for memories missing precomputed embeddings',
    decisions: [
      {
        title: 'In-Process Cosine Similarity vs. Managed Vector Index',
        choice: 'In-process cosine similarity over bounded array in app/api/chat/route.ts',
        rejectedAlternative: 'Managed vector index (Pinecone, Weaviate, or Firestore native vector search)',
        rationale:
          'A single memorial memory vault is bounded (dozens to a few hundred entries) — not the volume a distributed vector index earns its keep on.',
        tradeoff:
          "Doesn't scale indefinitely; would require redesign if memory vault size grew by orders of magnitude.",
      },
      {
        title: 'Top-5 Retrieval vs. Full-Context Stuffing',
        choice: 'Top-5 vector retrieval with keyword fallback',
        rejectedAlternative: 'Stuffing entire memory vault into context window on every prompt',
        rationale:
          'Avoided latency/token costs and known instruction-following degradation in long contexts — exactly where anti-fabrication and tone directives live.',
        tradeoff:
          "Top-5 can under-retrieve if query wording diverges significantly from memory phrasing.",
      },
    ],
  },
  memoryWriteGating: {
    policy: 'Zero unconfirmed writes to Firestore. Gating writes is where anti-fabrication actually starts.',
    uiCards: ['Save', 'Review-Edit', 'Dismiss'],
    crossTurnRule:
      "Model instructed never to treat its own earlier, unverified conversational warm acknowledgments as confirmed memories in subsequent turns.",
    decisions: [
      {
        title: 'Explicit UI Action Cards vs. Conversational Auto-Saving',
        choice: 'Explicit interactive card approval (Save / Review-Edit / Dismiss)',
        rejectedAlternative: 'Silently auto-saving details surfaced conversationally',
        rationale:
          "Anything saved becomes authoritative for all future retrieval. A silently saved mistake isn't just wrong once; it becomes 'true' in every later conversation.",
        tradeoff:
          "Introduces friction — sacrifices some 'it just knows me' magic for absolute data integrity.",
      },
    ],
  },
  toneAndLanguage: {
    type: 'Deterministic, rule-based classifier (pre-generation)',
    sourceFile: 'lib/language-analysis.ts',
    components: [
      'Regex Unicode-range script detection (Devanagari, Bengali, Tamil, Telugu)',
      'Hardcoded Hinglish token dictionary',
      'Keyword-list emotional state matcher (e.g. "yaad aati" -> Grieving & Longing; "purane din" -> Nostalgic & Reminiscing)',
    ],
    codeSwitching:
      'Per-turn dynamic re-evaluation with an explicit prompt directive against dropping into English mid-Hinglish conversation.',
    decisions: [
      {
        title: 'Rule-Based Regex Classifier vs. Embedding Sentiment Similarity',
        choice: 'Deterministic regex script and keyword matching',
        rejectedAlternative: 'Embedding similarity against labeled emotional exemplars',
        rationale:
          'Interpretability and debuggability. In grief-adjacent interactions, a verifiable rule is auditable and instantly correctable. Also bypasses the lack of labeled training datasets for code-switched Hinglish grief dialogue.',
        tradeoff:
          "Brittle outside keyword coverage — lacks generalization to unanticipated phrasing.",
      },
    ],
  },
  resilienceEngineering: {
    primaryModel: 'gemini-3.1-flash-lite',
    cascade: [
      'gemini-3.1-flash-lite',
      'gemini-3.6-flash',
      'gemini-3.7-flash',
      'gemini-flash-latest',
    ],
    maxAttempts: 8,
    backoffMs: 600,
    retryableErrors: ['503', '429', 'RESOURCE_EXHAUSTED'],
    tradeoff:
      "Fallback models aren't guaranteed to match primary model voice and pacing under identical prompts, risking subtle tonal shifts mid-session. Also introduces real latency in worst-case cascades.",
  },
  trustSequencing: {
    phasing: 'Phase 1: Text-only launch. Phase 2: Real-time voice synthesis.',
    rationale:
      'Risk staging. Text allows reflection and pause; synthesized voice happens in real-time with near-zero tolerance for discordant notes. Core anti-fabrication had to be proven before voice expansion.',
    tradeoff:
      'Text-only appeared incomplete to outside observers unaware of the trust-staging architecture.',
  },
  isolationAndSecurity: {
    rulesPolicy: 'Default-deny on every unmatched path (annotated as "Zero Insecure Defaults")',
    nestedOwnership: [
      '/users/{userId}/memorials/{memorialId}/memories/{memoryId}',
      '/conversations/{conversationId}/messages/{messageId}',
    ],
    serverVerification:
      '/api/chat calls verifyAuthToken against Firebase ID token before request parsing or retrieval logic executes.',
    tradeoff:
      'Greater rule surface area; forgotten rules fail safe (deny access), which can look like bugs during development.',
  },
  resultsAndState: {
    currentStatus: 'Deployed and functional, informal feedback from external users',
    metricPolicy:
      'No invented metrics or unvalidated scale claims. Stated plainly as an engineered prototype evaluated on architecture integrity.',
  },
  lessons: [
    {
      id: 1,
      title: 'Baseline Viability',
      observation:
        'The conversational companion holds up in real testing as an experience users are willing to interact with honestly.',
    },
    {
      id: 2,
      title: 'The Emotional Trust Tension',
      observation:
        'A concern surfaced that making the companion feel too faithful makes it harder to serve grief recovery — users relate to continuity rather than memory.',
      unresolvedTension:
        'The zero-fabrication architecture protects factual trust, but leaves open the question of emotional trust — whether fidelity helps someone move through grief or suspends them within it.',
    },
    {
      id: 3,
      title: 'Product Maturity Focus',
      observation:
        'Memory-grounding and gated save mechanics are unusually visible; surrounding UI is sparse compared to modern chat platforms. Reflects deliberate investment in retrieval integrity over superficial polish.',
    },
  ],
  finalOutcome:
    'Smriti proves out its specific architectural claim: a conversational system can be architected to never fabricate, maintain warmth, degrade gracefully across LLM failure modes, and enforce least-privilege security by default. It does not claim product-market fit or resolved emotional-safety boundaries — solving the human dilemma remains the true frontier.',
  forwardLook: {
    openDirection:
      'Typing-behavior mimicry (matching punctuation rhythm, message pacing, and typing cadence).',
    governingConstraint:
      'Must resolve the emotional-safety dilemma first: higher imitation precision amplifies the risk of unhealthy attachment.',
  },
};
