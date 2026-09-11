# Manish Prajapati — Senior IC Engineering Portfolio

> **Core Positioning:** *"I build AI systems the way I build backend systems — for production, not for demos."*

Production engineering portfolio of Manish Prajapati, senior full-stack and systems engineer specializing in high-throughput distributed backends, CRM platforms, and production-grade agentic AI systems.

- **Live URL:** [manishprajapati.co.in](https://manishprajapati.co.in)
- **Primary Source Case Study:** [Smriti — Digital Memorial Companion](https://github.com/manish-1614/smriti-memorial-companion)

---

## 🏛️ Architecture & Craft Standards

This site is built to reflect the craftsmanship of a senior individual contributor (IC) backend and systems engineer:

- **Topological System Visualization:** Interactive request-lifecycle signal graphs rendered using stateful SVG coordinate viewports and deterministic component state — avoiding gratuitous visual gimmickry in favor of transparent architectural communication.
- **Layout Stability:** Fixed-ratio SVG viewports and structured layout containers guaranteeing sub-0.01 Cumulative Layout Shift (CLS).
- **Accessibility & Contrast:** WCAG 2.2 AA compliance across all UI components, with 7:1+ AAA contrast ratios on all core reading copy and strict keyboard navigation.
- **Honest Engineering Tradeoffs:** Every featured system documents real-world constraints, fallback mechanics, and architectural compromises rather than asserted perfection.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Components)
- **UI & Runtime:** [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/), Radix UI Primitives, Lucide Icons
- **Database & ORM:** [Neon Postgres](https://neon.tech/) Serverless, [Drizzle ORM](https://orm.drizzle.team/)
- **Motion & Visualization:** Inline SVG graph engines, CSS keyframe topological pulses, and composited transitions

---

## 🧭 Narrative Sections

1. **Hero (Compile + The Trace):** Interactive request lifecycle through an in-process vector retrieval and prompt-gating pipeline.
2. **Case Studies (Smriti):** Production memorial companion built on zero-fabrication retrieval architecture, in-process cosine similarity, and multi-tier model fallover cascades.
3. **Production Systems at Scale:** High-throughput transactional CRM systems, partition-tolerant event streams (Kafka), and outbox-pattern deduplication.
4. **Technical Craft & Disciplines:** Working principles and architectural standards across AI systems, distributed backends, frontend stability, and reliability engineering.
5. **Writing & Architecture Notes:** Published deep-dives on Command Query Responsibility Segregation (CQRS), event sourcing, and grounded AI retrieval.
6. **Direct Contact:** Channels for remote senior IC engineering roles.

---

## 💻 Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

### Setup

```bash
# 1. Clone repository
git clone https://github.com/manish-1614/portfolio.git
cd portfolio

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production Verification

```bash
# Typecheck and production bundle
pnpm build

# Run production server
pnpm start
```
