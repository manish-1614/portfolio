# Project context — read this first, every session

Portfolio rebuild for Manish Prajapati (manishprajapati.co.in), targeting senior
remote IC engineering roles. Rebuilding from a clean repository — the prior repo
is reference only, not a constraint.

**Core positioning:** "I build AI systems the way I build backend systems — for
production, not for demos." Every content and design decision serves this. The
desired reaction is "this developer builds software with incredible
craftsmanship" — not "nice portfolio" or "cool animations."

## Non-negotiable guardrails

- No badge walls. No skill-rating bars. No unsupported stats or invented metrics.
- No in-progress credentials shown as earned.
- No positioning grab-bag — one clear identity.
- Every technical claim about a real project must be verified against actual
  source code before use — never inferred from a README or written from
  plausible-sounding assumption. This project has a track record of catching and
  correcting inflated technical claims (e.g. "hallucination-prevention" was
  corrected to "zero-fabrication retrieval architecture" after checking the real
  code); maintain that standard going forward.
- Tradeoffs get named honestly in all content — they're evidence of judgment, not
  weaknesses to hide.
- Two items are explicitly blocked until confirmed — do not reference either:
  an unconfirmed hackathon/ideathon mention, and a certification that hasn't been
  earned yet.

## Working method

Be rigorous and critical. Do not flatter. Reject bad ideas explicitly and propose
better ones. Ask before assuming when a real fact is missing — do not fill gaps
with invented plausible detail, especially in case-study content.

## Where the real detail lives

- `docs/PRD.md` — positioning, information architecture, content status, pending
  items.
- `docs/TAD.md` — hero mechanism spec (Compile + The Trace), motion architecture
  principles, open technical decisions.
- `content/case-studies/smriti.md` — verified, source-checked case study content.
  This is the flagship project and the data dependency for the hero mechanism.

## Current phase

Frontend architecture: folder structure, component boundaries, design tokens,
motion primitives, resolving the stack/content-architecture decisions listed at
the end of `docs/TAD.md`.
