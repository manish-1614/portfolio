import React from 'react';
import { SMRITI_TRACE_NODES } from '@/config/hero-trace.config';

interface HeroScreenReaderListProps {
  currentActiveStep: number | null;
}

export const HeroScreenReaderList: React.FC<HeroScreenReaderListProps> = ({
  currentActiveStep,
}) => {
  return (
    <div className="sr-only">
      <h2>Interactive Architecture Trace: Smriti Request Lifecycle</h2>
      <p>
        The following 7 steps illustrate the verified request lifecycle through the
        zero-fabrication conversational architecture.
      </p>

      {currentActiveStep && (
        <div role="status" aria-live="polite">
          Currently inspecting Step {currentActiveStep}:{' '}
          {SMRITI_TRACE_NODES.find((n) => n.stepNumber === currentActiveStep)?.label}
        </div>
      )}

      <ol>
        {SMRITI_TRACE_NODES.map((node) => (
          <li key={node.id}>
            <strong>
              Step {node.stepNumber}: {node.label}
            </strong>
            <span> — {node.verifiedFact.technicalTitle}: </span>
            <span>{node.verifiedFact.description} </span>
            <small>(Verified in source: {node.verifiedFact.sourceFile})</small>
          </li>
        ))}
      </ol>
    </div>
  );
};
