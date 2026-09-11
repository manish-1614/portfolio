'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SMRITI_TRACE_NODES, TraceNode } from '@/config/hero-trace.config';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { ConstellationCanvas } from '@/components/constellation/ConstellationCanvas';
import { ConstellationFactCard } from '@/components/constellation/ConstellationFactCard';
import { PortraitCompile } from './PortraitCompile';
import { HeroTraceControls } from './HeroTraceControls';
import { HeroScreenReaderList } from './HeroScreenReaderList';

export function CompileHero() {
  const isReducedMotion = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Compile scroll progress: 0.0 (full photo) to 1.0 (full constellation)
  const [compileProgress, setCompileProgress] = useState(0);

  // Execution trace state
  const [isTracing, setIsTracing] = useState(false);
  const [isResolved, setIsResolved] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeEdgeIds, setActiveEdgeIds] = useState<string[]>([]);
  const [isToneLatched, setIsToneLatched] = useState(false);
  const [isGenerationFlicker, setIsGenerationFlicker] = useState(false);
  const [isGenerationRecovered, setIsGenerationRecovered] = useState(false);
  const [inspectedNode, setInspectedNode] = useState<TraceNode | null>(null);

  // Auto-preview tracking and timer management
  const autoPreviewTriggeredRef = useRef(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearAllTimers();
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [clearAllTimers]);

  // Smooth scroll listener tracking the sticky pin track
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const scrollableDistance = trackRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrollInside = -rect.top;
      const rawProgress = Math.min(1, Math.max(0, scrollInside / scrollableDistance));

      // Buffer ranges:
      // 0% - 20%: Photo holds 100% visible (no skipping or premature vanish)
      // 20% - 80%: Continuous smooth morph (0 -> 1)
      // 80% - 100%: Constellation holds 100% active, fully interactive before scroll releases
      let mapped = 0;
      if (rawProgress <= 0.2) {
        mapped = 0;
      } else if (rawProgress >= 0.8) {
        mapped = 1;
      } else {
        mapped = (rawProgress - 0.2) / 0.6;
      }

      setCompileProgress(mapped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hover and selection interaction handlers (decoupled from trace animation)
  const handleNodeHover = useCallback((node: TraceNode | null) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (node) {
      setInspectedNode(node);
    } else {
      // Grace period to allow moving pointer over to the tooltip card
      hoverTimeoutRef.current = setTimeout(() => {
        setInspectedNode(null);
      }, 250);
    }
  }, []);

  const handleCardMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setInspectedNode(null);
    }, 200);
  }, []);

  const handleSelectNode = useCallback((node: TraceNode) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setInspectedNode((prev) => (prev?.id === node.id ? null : node));
  }, []);

  // Paced Execution Trace Sequence Runner (~6.3s total)
  const runTraceSequence = useCallback(() => {
    if (isTracing) return;
    clearAllTimers();
    setIsTracing(true);
    setIsResolved(false);
    setIsToneLatched(false);
    setIsGenerationFlicker(false);
    setIsGenerationRecovered(false);

    // If still in photo state, snap progress to full constellation on trace trigger
    if (compileProgress < 0.9) {
      setCompileProgress(1);
    }

    if (isReducedMotion) {
      setActiveStep(7);
      setIsResolved(true);
      setIsTracing(false);
      return;
    }

    // Step 1: Message Received (t = 0ms)
    setActiveStep(1);

    // Fork branches at t = 1000ms
    const t1 = setTimeout(() => {
      setActiveEdgeIds(['edge-1-2', 'edge-1-4']);

      // Branch B: Tone regex (<1ms) snaps immediately to Node 4 and latches
      const t2 = setTimeout(() => {
        setIsToneLatched(true);
      }, 300);
      timersRef.current.push(t2);

      // Branch A: Query Embedded (Node 2) at t = 2000ms
      const t3 = setTimeout(() => {
        setActiveStep(2);
        setActiveEdgeIds(['edge-2-3']);

        // Step 3: Memory Retrieval (Node 3) at t = 3000ms
        const t4 = setTimeout(() => {
          setActiveStep(3);
          setActiveEdgeIds(['edge-3-5', 'edge-4-5']);

          // Step 5: Merge point (Both A & B converge) at t = 4000ms
          const t5 = setTimeout(() => {
            setActiveStep(5);
            setIsToneLatched(false);
            setActiveEdgeIds(['edge-5-6']);

            // Step 6: Generation attempt with resilience failure cascade at t = 5000ms
            const t6 = setTimeout(() => {
              setActiveStep(6);
              setIsGenerationFlicker(true); // 503 UNAVAIL

              // 700ms backoff per lib/gemini.ts, then recovers to 3.6-flash
              const t7 = setTimeout(() => {
                setIsGenerationFlicker(false);
                setIsGenerationRecovered(true); // 200 OK
                setActiveEdgeIds(['edge-6-7']);

                // Step 7: Response returned at t = 6400ms
                const t8 = setTimeout(() => {
                  setActiveStep(7);
                  setIsTracing(false);
                  setIsResolved(true);
                  setActiveEdgeIds([]);
                }, 700);
                timersRef.current.push(t8);
              }, 700);
              timersRef.current.push(t7);
            }, 1000);
            timersRef.current.push(t6);
          }, 1000);
          timersRef.current.push(t5);
        }, 1000);
        timersRef.current.push(t4);
      }, 700);
      timersRef.current.push(t3);
    }, 1000);
    timersRef.current.push(t1);
  }, [isTracing, isReducedMotion, compileProgress, clearAllTimers]);

  // Guarded Auto-Preview (>= 70% viewport, no reduced motion, untouched idle)
  useEffect(() => {
    if (isReducedMotion || autoPreviewTriggeredRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          const timer = setTimeout(() => {
            if (!autoPreviewTriggeredRef.current) {
              autoPreviewTriggeredRef.current = true;
              runTraceSequence();
            }
          }, 3500);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.7 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [isReducedMotion, runTraceSequence]);

  const handleReset = () => {
    clearAllTimers();
    setActiveStep(null);
    setActiveEdgeIds([]);
    setIsToneLatched(false);
    setIsGenerationFlicker(false);
    setIsGenerationRecovered(false);
    setIsResolved(false);
    setIsTracing(false);
    setInspectedNode(null);
  };

  // Compute effective morph weights: when tracing or resolved, constellation is 100% active
  const effectiveConstellationOpacity = isTracing || isResolved ? 1 : compileProgress;
  const effectivePortraitOpacity = isTracing || isResolved ? 0 : Math.max(0, 1 - compileProgress * 1.2);

  return (
    <div ref={trackRef} className="relative h-[220vh] w-full">
      <section
        ref={heroRef}
        id="hero-compile"
        className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 py-8 text-center overflow-hidden bg-slate-950 text-slate-100"
        aria-label="Hero Section"
      >
        {/* Screen Reader Parity */}
        <HeroScreenReaderList currentActiveStep={activeStep} />

        {/* Main Narrative & Positioning */}
        <header className="max-w-3xl mx-auto space-y-3 mb-4 z-10">
          <p className="text-xs md:text-sm font-mono tracking-widest text-sky-400 uppercase font-semibold">
            Manish Prajapati // Senior IC Engineer
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            I build AI systems the way I build backend systems —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              for production, not for demos.
            </span>
          </h1>
          <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Zero-fabrication retrieval architecture, deterministic emotional gating, and failover cascades.
            Hover over any node or click below to inspect the verified request lifecycle.
          </p>
        </header>

        {/* Unified Layered Morph Container: Zero Layout Jolt */}
        <div className="relative w-full max-w-4xl aspect-[5/3] min-h-[320px] md:min-h-[440px] mx-auto flex items-center justify-center">
          {/* Layer 1: Portrait Compile (Fades out continuously on scroll) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: effectivePortraitOpacity,
              visibility: effectivePortraitOpacity > 0 ? 'visible' : 'hidden',
            }}
          >
            <PortraitCompile compileProgress={compileProgress} />
            <p className="text-[11px] font-mono text-slate-400 mt-3 animate-pulse">
              [ Scroll down to compile portrait into system architecture ]
            </p>
          </div>

          {/* Layer 2: Constellation Canvas (Fades in continuously on scroll) */}
          <div
            className="absolute inset-0 w-full h-full transition-opacity duration-300"
            style={{
              opacity: effectiveConstellationOpacity,
              pointerEvents: effectiveConstellationOpacity > 0.2 ? 'auto' : 'none',
            }}
          >
            <ConstellationCanvas
              activeStep={activeStep}
              activeEdgeIds={activeEdgeIds}
              isToneLatched={isToneLatched}
              isGenerationFlicker={isGenerationFlicker}
              isGenerationRecovered={isGenerationRecovered}
              onSelectNode={handleSelectNode}
              onHoverNode={handleNodeHover}
            />

            {/* Anchor-Aware Floating Telemetry Fact Card (revealed only on hover or select) */}
            <ConstellationFactCard
              activeNode={inspectedNode}
              onClose={() => setInspectedNode(null)}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            />
          </div>
        </div>

        {/* Accessible Interactive Controls */}
        <HeroTraceControls
          isTracing={isTracing}
          isResolved={isResolved}
          onStartTrace={runTraceSequence}
          onReset={handleReset}
          isReducedMotion={isReducedMotion}
        />
      </section>
    </div>
  );
}
