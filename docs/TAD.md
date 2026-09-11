# Portfolio Rebuild — Technical Architecture Document

Companion to `docs/PRD.md`. This document is implementation-facing; it does not
relitigate positioning or content decisions, only how they get built.

## Baseline stack context (reference, not mandate)

The prior repo (github.com/manish-1614/portfolio) used: Next.js 16, React 19,
TypeScript, Tailwind CSS 4, shadcn/ui + Radix primitives, Drizzle ORM against
Neon Postgres, deployed via GitHub Actions to a static/CNAME target. This is
**reference only** — the rebuild is explicitly from a clean repository per the
master research brief, not a continuation of this stack. Final stack (Next.js
vs. alternatives, GSAP vs. Framer Motion, MDX vs. headless CMS for case-study
content, whether Drizzle/Postgres survive into the new build) is an **open
decision** to work through in the frontend-architecture phase — do not assume the
old stack carries forward without deliberately re-deciding each piece.

## Motion architecture principles (non-negotiable regardless of final stack)

- No animation spaghetti: each animated component owns its own timeline; no
  global animation state store.
- No duplicated timelines for the same visual element.
- Animations isolated from data-fetching and business logic — a component's
  motion should be testable/removable without touching its data layer.
- Node/dot constellation is a **site-wide visual grammar**, not a hero-only
  effect — build it as a reusable primitive from the start, not a one-off.

## Hero mechanism spec: Compile + The Trace

### State machine

| State | Description |
|---|---|
| Source | Static photo of Manish, full viewport, minimal text overlay |
| Compile | Scroll-driven GSAP halftone luminance dither / coordinate snap: photo decomposes into high-contrast matrix points that coalesce directly into the constellation nodes. |
| Idle | Constellation settles: gentle per-node pulse, occasional faint inter-node flicker. Must look intentional even if the visitor never interacts further. |
| Traced | User-triggered (explicit toggle, e.g. "Trace a request →") or guarded auto-preview. Animated pulses traverse the verified asymmetric architecture. |
| Resolved | Final node lights up as response returned; quiet CTA appears ("See how this actually works →") linking to the Smriti case study; settles back to Idle after a pause. |

Auto-preview policy (locked):
- Gated behind an `IntersectionObserver` requiring `>= 70%` hero visibility in the viewport.
- Strictly disabled if `prefers-reduced-motion` is active.
- If Idle is untouched for 3 seconds while in view, plays the Traced sequence once, then yields completely to manual user control.
- If the visitor scrolls away mid-preview, the animation pauses or cancels without running off-screen.

### Node sequence (7 nodes — real data, verified against Smriti source, not placeholder)

Full facts and verification notes: `content/case-studies/smriti.md`. Sequence & locked timing:

1. **Message received** (start, fork point)
2. **Query embedded** — `gemini-embedding-2-preview` — **branches in parallel with 4**
3. **Memory retrieval** — in-process cosine similarity, top 5 selected.
4. **Tone detected** — deterministic rule-based regex classifier (`lib/language-analysis.ts`).
   - *Locked timing:* **True asymmetric timing**. Branch B (Tone, <1ms) snaps instantly to Node 4 and pulses in a 'ready / latched' state while Branch A (Embedding ~100ms + Retrieval ~10ms) traverses Nodes 2 & 3.
5. **Grounded + toned prompt** — merge point, receives from both 3 and 4 once Branch A arrives.
6. **Generation attempt & Resilience Cascade** — includes the **visible failure-and-reroute flicker**:
   - *Locked visual behavior:* Node 6 flashes amber with an inline `503 UNAVAIL` telemetry chip, stutters for 600ms (matching the exact backoff in `lib/gemini.ts`), then flips green to `200 OK (gemini-3.6-flash)` before routing onward.
7. **Response returned** — delivered to client; unconfirmed memories surfaced via Save/Review UI card (zero unconfirmed Firestore writes).

Data model for implementation: each node needs `id`, `stepNumber`, `label`, `category` (`input`, `embedding`, `retrieval`, `tone`, `merge`, `resilience`, `output`), relative `coords` (`{ x: number, y: number }` in 0-100 viewBox space), `verifiedFact` (with technical title, verified description, source file, and real-world timing profile), and `behavior` flags.

### Accessibility (non-negotiable)

- `prefers-reduced-motion`: Traced state renders as an instantly-final annotated static topological schematic — no traveling pulse, no ambient Idle motion at all.
- Toggle is a real, keyboard-operable, focus-visible `<button>` with high-contrast `:focus-visible` offset rings — never a div with a click handler.
- A visually-hidden ordered list (`<ol className="sr-only">`) with `aria-live="polite"` mirrors the 7 steps in text for screen readers, since the SVG animation carries no accessible semantics on its own.

### Performance (non-negotiable)

- DOM/SVG only for the hero mechanism — no WebGL here.
- Single cached GSAP timeline per state, retriggered rather than rebuilt on each toggle activation.
- Animate `transform` and `opacity` only — no layout-triggering properties mid-animation.

## Locked decisions for the frontend-architecture phase

- **Framework & Deployment:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Deployed as a 100% static build (`output: 'export'` or SSG) to custom domain.
- **Database bloat removed:** Completely purged `@neondatabase/serverless`, `drizzle-orm`, `drizzle-kit`. Zero database runtime latency or operational cost.
- **Content architecture:** Static MDX with strict TypeScript frontmatter schemas for case studies. Case studies (Smriti as flagship) are independently maintainable markdown documents.
- **Constellation data model:** Centralized in a typed configuration (`src/config/hero-trace.config.ts`) that can be consumed by both the hero mechanism and any in-case-study system diagrams across the site.
- **Testing strategy:** Decoupled pure finite state machine hook (`useHeroStateMachine`) tested independently of the GSAP visual animation timeline.

## Performance & accessibility budgets (locked)

- **LCP:** < 1.2s (Hero portrait preloaded in WebP/AVIF, dimensions statically reserved).
- **CLS:** 0.00 (SVG coordinate viewBox prevents layout shifts).
- **FID / INP:** < 50ms (GSAP timeline runs on compositor-only properties).
- **Bundle overhead:** Total motion runtime < 35KB gzipped.
- **Accessibility:** WCAG 2.2 AAA color contrast for telemetry text, 100% keyboard navigable, reduced-motion bypass.
