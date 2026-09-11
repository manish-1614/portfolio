export interface ArchitectureDecision {
  title: string;
  choice: string;
  rejectedAlternative: string;
  rationale: string;
  tradeoff: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  status: string;
  sourceRepoUrl: string;
  technicalDescriptor: {
    primary: string;
    secondary: string;
    forbidden: string;
  };
  openingStatement: string;
  contextAndProblem: {
    overview: string;
    coreRisk: string;
    underlyingTension: string;
  };
  groundingAndRetrieval: {
    embeddingModel: string;
    storage: string;
    retrievalType: string;
    topK: number;
    fallback: string;
    decisions: ArchitectureDecision[];
  };
  memoryWriteGating: {
    policy: string;
    uiCards: string[];
    crossTurnRule: string;
    decisions: ArchitectureDecision[];
  };
  toneAndLanguage: {
    type: string;
    sourceFile: string;
    components: string[];
    codeSwitching: string;
    decisions: ArchitectureDecision[];
  };
  resilienceEngineering: {
    primaryModel: string;
    cascade: string[];
    maxAttempts: number;
    backoffMs: number;
    retryableErrors: string[];
    tradeoff: string;
  };
  trustSequencing: {
    phasing: string;
    rationale: string;
    tradeoff: string;
  };
  isolationAndSecurity: {
    rulesPolicy: string;
    nestedOwnership: string[];
    serverVerification: string;
    tradeoff: string;
  };
  resultsAndState: {
    currentStatus: string;
    metricPolicy: string;
  };
  lessons: {
    id: number;
    title: string;
    observation: string;
    unresolvedTension?: string;
  }[];
  finalOutcome: string;
  forwardLook: {
    openDirection: string;
    governingConstraint: string;
  };
}
