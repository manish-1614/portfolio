# Portfolio Integrity & Trust-Signal Repair Pass

## Context

This portfolio's entire thesis is: "I build AI systems the way I build backend
systems — for production, not for demos." Every claim on the site is supposed
to be verifiable against real source, not asserted. A recent audit found
several places where the site's own standards aren't being met yet. Fix them
precisely — do not introduce new unverified claims while fixing old ones.

Repos involved:
- Main portfolio site (this repo)
- `smriti-memorial-companion` (linked from the case study as the source of
  truth — clone/inspect it directly, don't infer from its README)

## Non-negotiable constraints (do not violate these while doing the work below)

- Do not invent, estimate, or round any performance/accessibility number.
  If you cannot measure it, rewrite the claim as qualitative language instead.
- Do not add badge walls, skill-percentage bars, or any new unverifiable stat.
- Do not reintroduce hackathon/ideathon/challenge framing anywhere in new or
  edited copy.
- Do not soften or remove the existing honest tradeoffs / open-question
  sections (e.g. the emotional-trust tension in the Smriti case study).
- Preserve the "zero-fabrication retrieval architecture / structurally
  impossible, not mitigated" framing exactly as-is — do not rephrase it into
  "hallucination prevention" or similar softer language anywhere.

## Tasks

### 1. Remove ideathon/hackathon framing from the smriti-memorial-companion repo
Search the entire repo (README.md, package.json `description`, metadata.json,
firebase-applet-config.json, any gcloud/deploy commands, code comments) for:
`ideathon`, `hackathon`, `challenge`, `accelerateai`, `dev-tutorial`,
`cloud-run-ai-challenge`. Rewrite each occurrence to describe the project on
its own technical merits, with no competition/event framing. Do not delete
functionality (e.g. keep the deploy commands, just drop the challenge label).
Flag anything you find that lives *outside* the repo's files and can't be
fixed by editing code — specifically: the GitHub repo description/topics
field, and the live Cloud Run service label (`dev-tutorial=cloud-run-ai-challenge`)
which requires a separate `gcloud run services update --update-labels` call.
List these as manual follow-ups in your final summary; don't attempt to run
gcloud commands yourself.

### 2. Remove the hardcoded Firebase API key from the README
Replace the literal `NEXT_PUBLIC_FIREBASE_API_KEY=AIza...` value in the deploy
command with a placeholder (`<YOUR_FIREBASE_API_KEY>`). Note in your summary
that this is a client-side key (not a secret in the traditional sense, since
Firestore rules enforce access) — this is a polish/optics fix, not a security
patch, and should be described that way.

### 3. Fix the portfolio repo itself
- Replace the current README (still default `create-next-app` boilerplate)
  with a real one: what the project is, the stack actually used, how to run
  it locally, and a link to the live site.
- Find and fix the two dead "Read Article" links in the Writing section
  (currently pointing to the bare `dev.to` domain instead of the actual
  article URLs) — point them at the real published URLs.
- Flag (don't attempt to change yourself) that the GitHub repo's "About"
  homepage field still points to an old `vercel.app` URL instead of
  manishprajapati.co.in — this is a repo-settings change, not a file change.

### 4. Verify-or-soften pass on specific numeric claims
For each of the following, either (a) produce a real measurement and cite
how it was obtained, or (b) rewrite the claim as qualitative, non-falsifiable
language. Do not leave any of them as an unverified specific number.

- "WCAG 2.2 AAA contrast compliance" — run an actual contrast audit (e.g.
  axe-core, Lighthouse, or a contrast-ratio check) against every text/background
  color pair used in the shipped copy. AAA requires 7:1 for normal text and
  4.5:1 for large text — check against the real thresholds, not AA's lower
  bar. If the site doesn't actually clear AAA everywhere, either fix the
  colors or downgrade the claim to what's actually true (e.g. "WCAG 2.2 AA,
  with several AAA-level contrast pairs").
- "CLS: 0.00" — run Lighthouse (or pull real field data if available) and
  report the actual figure.
- "<10ms" retrieval and "<1ms" tone-classifier latency — inspect the actual
  code paths in `smriti-memorial-companion` (cosine similarity loop, regex
  classifier) and either add real instrumentation/benchmarks to produce a
  defensible number, or replace with qualitative phrasing (e.g. "in-process,
  no network round-trip" instead of a specific millisecond figure).

### 5. Cross-reference consistency check
Compare every technical claim that appears in more than one place — portfolio
homepage, case study page, smriti-memorial-companion README, and any
dev.to/Medium posts you have local copies of — against the actual source
code. Produce a short diff report listing any remaining mismatches (model
names, file/module names, endpoint names) rather than guessing which version
is correct.

## Deliverable

At the end, output:
1. A list of every change made, file by file.
2. A list of manual follow-ups you could not do yourself (GitHub repo
   settings, live Cloud Run label, external blog post edits) with exact
   instructions for each.
3. For every numeric/compliance claim in task 4: whether it was verified
   with a real measurement (and what that measurement was) or downgraded to
   qualitative language (and the new wording).
