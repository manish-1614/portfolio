# Smriti — Case Study Content (Flagship)

Status: Fully drafted through Results/Lessons/Final Outcome. This is the authoritative
version — supersedes any earlier drafts, README-derived descriptions, or infographic
labels. All technical facts below were verified directly against source files in
https://github.com/manish-1614/smriti-memorial-companion, not inferred from the README.

Ideathon status: unconfirmed. Do not reference anywhere in the case study until H2S
outcome is known. Treat as a single, brief, credible line if and when confirmed —
never before.

---

## Opening Statement

A grounded AI always has an easy way out of a hard moment: it can simply say it
doesn't know. That's technically honest and emotionally hollow — the last thing
someone wants from a system built to preserve a person they lost. Smriti was
constrained to never invent anything outside the memories it was given, and still
had to answer grief with something that felt like care, not a lookup failure. That
tension — never fabricate, never feel cold — is what shaped the architecture.

## Context & Problem

Smriti is a conversational AI trained on a specific person's actual messages and
writing, built to let someone continue a form of conversation with them after
they're gone. The obvious engineering risk in a product like this is fabrication —
an AI inventing memories or words the person never said. Smriti closes that risk
structurally rather than mitigating it: it only ever draws from the memory data
assigned to it, and when a query falls outside that data, it doesn't guess — it
names the gap and offers to add the new information as a memory going forward.

That decision removes fabrication as a risk entirely, but it surfaces a harder
problem underneath it. A system that's honest about the limits of what it knows can
easily default to *sounding* like it's hitting those limits — clinical, hedging, a
database returning "no result." For a person in grief, that reads as coldness at
the exact moment they need presence. The real design problem wasn't accuracy. It
was building a system with zero tolerance for invention that still had to
recognize sadness and respond with warmth, not caveats.

## Technical Descriptor (correct wording — use exactly this)

"Zero-fabrication retrieval architecture" / "structurally grounded, non-generative-
fallback design." **Never** "hallucination-prevention" — that phrasing implies
mitigating a risk that exists in the base model; this system is architected so
fabrication is structurally impossible, not merely reduced.

## Architecture — Grounding & Retrieval

- Memories are embedded with `gemini-embedding-2-preview` and stored as vector
  arrays in Firestore.
- The live user query is embedded with the same model at request time
  (`app/api/chat/route.ts`).
- Retrieval is **application-level cosine similarity**, computed in-process over
  the memory array — not a managed vector database or Firestore native vector
  search. Top 5 memories selected. Keyword-overlap fallback for any memory missing
  a precomputed embedding.
- Rejected alternative: a managed vector index. Rejected because a single memory
  vault is bounded (dozens to a few hundred entries) — not the scale a vector
  index earns its keep on. Tradeoff: doesn't scale indefinitely; would need
  revisiting if vault size grew by orders of magnitude.
- Rejected alternative: full-context stuffing (pass the whole vault into every
  request) instead of top-5 retrieval. Rejected on cost/latency scaling and on
  known degradation of instruction-following in long contexts — exactly where the
  anti-fabrication and tone rules live in the system prompt. Tradeoff: top-5 can
  under-retrieve if a query is phrased very differently from how a memory was
  worded.

## Architecture — Memory-Write Gating

- New information surfaced in conversation is **never** auto-saved. It's proposed
  via an explicit UI action card: **Save / Review-Edit / Dismiss**. Zero
  unconfirmed writes to Firestore.
- Rejected alternative: auto-saving new info conversationally. Rejected because
  anything written to the vault becomes authoritative for all future retrieval —
  a silently-saved, unverified detail doesn't just risk being wrong once, it
  becomes "true" in every later conversation. Gating memory-writes is where the
  anti-fabrication guarantee actually starts, not a UX nicety layered on top.
  Tradeoff: real friction — costs some "it just knows me" magic for integrity of
  what's stored.
- Cross-turn consistency: the system prompt explicitly instructs the model not to
  treat its own earlier, unverified warm acknowledgments as confirmed memories in
  later turns — the same class of problem as preventing stale-cache reads in a
  distributed system, applied to conversational state.

## Architecture — Tone & Language Detection (corrected)

**Not embedding-based.** Verified directly in `lib/language-analysis.ts`:
a deterministic, rule-based classifier — regex Unicode-range script detection
(Devanagari, Bengali, Tamil, Telugu), a hardcoded Hinglish token dictionary, and
keyword-list matching for emotional state (e.g. "miss" / "yaad aati" → Grieving &
Longing; "remember" / "purane din" → Nostalgic & Reminiscing). Runs
**pre-generation**, injected into the system prompt as an explicit tone directive.

Multilingual code-switching is handled per-turn, independently — the system
re-evaluates language mode on every message rather than sticking to whatever
language a conversation started in, with an explicit directive against dropping
into English mid-Hinglish-conversation.

- Rejected alternative: embedding similarity against labeled emotional exemplars.
  Rejected for interpretability and auditability — in a product this emotionally
  sensitive, a debuggable rule beats a black-box classifier that's hard to correct
  when it misfires on a grieving message. Also more tractable given the lack of
  labeled training data for grief-specific, code-switched Hindi/Hinglish emotional
  language. Tradeoff: brittle outside its keyword coverage — doesn't generalize to
  unanticipated phrasing the way an embedding classifier would.

## Architecture — Resilience Engineering (`lib/gemini.ts`)

Standout evidence for "production-systems rigor applied to agentic AI" — deserves
its own named subsection, not a passing mention.

- Primary generation model: `gemini-3.1-flash-lite`.
- Fallback cascade, in order: `gemini-3.1-flash-lite → gemini-3.6-flash →
  gemini-3.7-flash → gemini-flash-latest`.
- Each model gets up to 2 attempts with a 600ms backoff on retryable errors
  (503, 429, RESOURCE_EXHAUSTED), then cascades to the next model.
- Worst case: 8 total attempts before surfacing an error. Success at any step
  returns the response immediately — the cascade is the worst-case path, not the
  common one.
- Framing: this is the same shape as a retry-with-backoff-and-failover pattern for
  any critical external dependency in a distributed backend — infrastructure
  thinking applied to an LLM API instead of a REST endpoint.
- Tradeoff named honestly: fallback models aren't guaranteed to match the primary
  model's voice/pacing under the same system prompt — a full cascade could
  produce a subtle, noticeable shift in "how the person sounds" mid-conversation.
  Also a real latency cost in the worst case, not just an availability win.

## Trust Sequencing — Why Text-Only Launched First

Voice was never off the table — it was sequenced deliberately, launched second,
once the core constraint (never fabricate, never go hollow) had been proven out in
a medium where a mistake is survivable. Text can be reread and sat with; a
synthesized voice happens in real time with far less room for a wrong note.

This was risk staging, not a scope cut or technical limitation: the system's most
important property needed to be trustworthy before extending it into a channel
with almost no tolerance for getting it wrong.

Tradeoff named honestly: shipping text-only meant shipping something that looked
incomplete to anyone who didn't know the reasoning — a real cost, not hypothetical.
The bet was that earning trust in the system's honesty first was worth the upfront
disappointment.

## Isolation by Design — Firestore Security Model (verified against
`firestore.rules` and `app/api/chat/route.ts`)

- Default-deny on every unmatched path, annotated in the rules file itself as
  upholding **"Zero Insecure Defaults."**
- Nested ownership chain, checked independently at every level — not just at the
  top: `/users/{userId}/memorials/{memorialId}/memories/{memoryId}`, and
  separately `/conversations/{conversationId}/messages/{messageId}`. Each level
  requires `request.auth.uid == userId`.
- Backed by an independent server-side check: `/api/chat` calls `verifyAuthToken`
  against the Firebase ID token before any other logic runs — before the request
  body is even parsed. Failure returns 401 before touching retrieval, generation,
  or memory data.
- Framing: same instinct as least-privilege IAM policy design in any backend
  system, applied to Firestore instead of AWS/GCP roles.
- Tradeoff named honestly: more rule-writing surface to maintain — every new
  collection needs its own explicit rule — and a forgotten rule fails safe (denies
  access) rather than fails open, which can look like a bug in development before
  it's understood as the intended default.

## Results & Current State

Deployed and functional, not yet validated at scale. Mainly self-tested, with a
small amount of informal reaction from people outside the build. Stated plainly —
no usage data, no user base, no invented metrics.

## Lessons (three real, informal reactions)

1. Baseline validation: it holds up as something people are willing to talk to.
2. The important one: a concern that making the companion feel *too much* like the
   real person makes it harder to serve what the person actually needs later —
   they end up relating to something that feels like continuity rather than
   memory. This is a genuine, unresolved tension the architecture doesn't yet
   account for: the zero-fabrication design protects *factual* trust, but says
   nothing about *emotional* trust — whether a system faithful enough to feel
   present helps someone move through grief, or keeps them suspended in it.
   Treat this as an open design question in the case study, not a solved one.
3. Product-maturity observation: the memory-grounding and save/review mechanics
   are unusually visible for a chat product, but the surrounding experience is
   sparse next to a modern chat interface. Accurate read of where effort went —
   concentrated in retrieval integrity and trust mechanics, not interface polish.

## Final Outcome

Smriti proves out a specific, narrow claim well: a conversational system can be
architected to never fabricate, hold genuine warmth without inventing anything,
degrade gracefully across model failures, and isolate user data by default. It
does not yet prove out product-market fit, emotional-safety design at the depth
lesson #2 demands, or feature parity with mature chat products — and isn't
claiming to. The hard engineering constraint was solved well; the harder human
question is the actual frontier of this project going forward.

## What's Next (forward-look — mention briefly, do not overstate)

Typing-behavior mimicry: matching not just what someone said but how they typed —
punctuation habits, message length, pacing. Named as an open direction, not a
shipped feature. Sits directly inside the same unresolved tension from lesson #2:
more precise imitation of someone's voice raises the emotional-safety question
further, not less. Any future work here has to answer that question first.

**Not included and not to be added without explicit confirmation:** social-media-
based learning, location/lifestyle inference (both flagged by Manish as unsolved,
lower-priority future directions — deliberately excluded from the case study for
now).
