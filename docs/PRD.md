# Portfolio Rebuild — Product Requirements Document

Owner: Manish Prajapati. Live site: manishprajapati.co.in. Rebuilding from a clean
repository (prior repo: github.com/manish-1614/portfolio, reference only — not a
constraint on the new build).

## Positioning (locked)

Core statement: **"I build AI systems the way I build backend systems — for
production, not for demos."**

This frames Manish as a senior IC engineer who applies production-systems rigor —
failure handling, tradeoffs, real load — to agentic AI, not someone chasing demos
or hype. Target audience: hiring managers, engineering leaders, startup
founders/CTOs, for remote senior IC roles.

Desired visitor reaction: *"This developer builds software with incredible
craftsmanship."* Explicitly **not**: "nice portfolio," "cool animations," "he
knows React."

## Non-negotiable guardrails

These override any individual creative or content decision. Do not relitigate
these — they were locked deliberately and enforced throughout content drafting:

- No badge walls.
- No unsupported stats or invented metrics. If a number isn't verified, it doesn't
  appear — informal/qualitative framing is used instead.
- No skill-rating bars.
- No in-progress credentials displayed as if earned (e.g. CCAR-F certification —
  see Pending Items below).
- No positioning grab-bag — one clear identity, not a list of adjectives.
- Every technical claim must be verified against real source (code, not README-
  level description) before it's used in content. Inflated or imprecise technical
  descriptors get corrected immediately when caught — see the Smriti case study's
  "hallucination-prevention" → "zero-fabrication retrieval architecture"
  correction as the standing example of this working method.
- Tradeoffs are named honestly in every case study section, not glossed over as
  wins. This is a feature of the positioning, not a weakness to hide.

## Working method (carry this into every future session)

Act as a multidisciplinary team: creative director, Awwwards-caliber art director,
senior UX/product designer, frontend architect, motion/GSAP/WebGL specialist,
performance engineer, accessibility specialist, hiring-manager reviewer.

Be rigorous and critical — do not flatter. Reject ideas that are technically
impressive but bad UX, hurt performance, or are cliché tropes, and say so
explicitly with a better alternative. When information is missing or a claim is
uncertain, ask or verify against source — do not fabricate plausible-sounding
detail to fill a gap.

## Hero direction (locked)

**Compile + The Trace.** Full technical spec in `docs/TAD.md`. Summary:

- **Compile**: scroll-driven GSAP crossfade — a photo of Manish dissolves into a
  node/dot constellation. This is the site-wide visual grammar for all system
  diagrams, not a one-off hero effect.
- **The Trace**: a toggleable DOM/SVG visualization where the same constellation
  dots are revealed to also represent a real request lifecycle through the Smriti
  case study — literalizing the positioning statement rather than asserting it.
  Depends on real case-study content (satisfied — see
  `content/case-studies/smriti.md`).

## Information architecture (narrative, not template)

Not: About / Skills / Projects / Contact. Confirmed sections:

1. Hero (Compile + The Trace)
2. Case Studies — Smriti (flagship, fully drafted), others TBD
3. Production Systems at Scale (genericized Amdocs/J:COM chapter)
4. Also Built (light mentions only: hotel-shasha-website, dslr-to-webp,
   laxmi-flour-mill)
5. Technical Craft / Arsenal
6. Mentoring & Writing (OAuth2/CQRS/Kafka writing, Smriti dev.to post)
7. Contact ("Open to remote roles")

## Case study format (master blueprint — applies to every project, not just
Smriti)

Opening statement → context/problem → users → constraints → role → discovery →
architecture → decisions → alternatives → tradeoffs → failures → iterations →
implementation → performance → results → lessons → final outcome.

Smriti is the reference implementation of this format — see
`content/case-studies/smriti.md` for a fully worked example of tone, rigor, and
how honesty about limitations is handled.

## Content status

| Section | Status |
|---|---|
| Smriti case study | Fully drafted, all sections, verified against source code |
| Other case studies | Not started |
| Production Systems at Scale | Pending |
| Also Built | Pending (light-touch only) |
| Technical Craft / Arsenal | Pending |
| Mentoring & Writing | Pending |
| Contact | Pending |
| Hero visual assets (Source photo) | Pending — dependency-free, brief already written, can run in parallel |

## Pending items with timing guardrails — do not act on these prematurely

- **CCAR-F certification**: slots into Technical Craft only after the credential
  is actually earned. Do not list as in-progress or implied.
- **Ideathon (H2S) shortlist**: currently unconfirmed — a participant submission
  only. Do not reference anywhere in any content until outcome is confirmed. If
  confirmed later, treat as a single credible line inside the Smriti case study,
  not before.

## Success criteria

The website itself should read as one of the strongest portfolio pieces — the
build quality demonstrates the same rigor the content describes. Performance,
accessibility, and honesty about limitations are floors, not trade-offs against
visual ambition.
