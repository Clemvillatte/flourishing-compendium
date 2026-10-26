# deg-wol-buddhism b3 + deg-wol-daoism m1 live-render CONFIRMATION (deg-integrate)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26).
Follow-up to verify/deg-wol-buddhism-learner-view-1026a.md and
verify/deg-wol-daoism-learner-view-1026a.md (both deploy-lag findings).

## Method

The earlier per-degree receipts were written when the live Pages deploy
was one push behind origin/main. After the Pages workflow completed the
reconciliation run, the live app.js (sha256 e7d9ae19, traced to commit
ecbbd23) was fetched FRESH and the module pages were re-rendered with a
hard reload (location.reload(true)) — the first post-deploy re-reads
without the hard reload showed the OLD state, which was a STALE CLIENT
CACHE in the QA browser tab, not a deploy problem (the same fetched
app.js URL returns the fixed data block; verified by parsing the JSON).
QA lesson recorded in the pragmatism m3 receipt: hard-reload before
concluding a defect when a render contradicts a fresh data-block fetch.

## Confirmed on the LIVE site (clemvillatte.github.io, desktop)

### deg-wol-daoism m1 (`#module=mod-dao-1`)

- TITLE: "Entering the Daoist Walk of Life" — clean.
- DESCRIPTION: learner prose ("The orientation names the tradition you
  are entering, gives you the vocabulary the whole walk uses, walks you
  through your first guided reading of one Daodejing chapter, and tells
  you what this walk covers and excludes. No prerequisites.") — the
  level code "L1 Orientation. Entry module…" is GONE.
- VIEWING LIST with explicit assignments:
  - Komjathy Lundao 1: "Watch 1:17–10:35 · 20:02–24:06" ("13:22 of
    1:13:54");
  - Van Norden documentary: "Watch 0:00–17:17 · 29:44–34:20" ("21:53 of
    0:50:09");
  - Ziporyn Why This Text Matters: "Watch 0:00–12:13 · 15:20–17:00 ·
    26:15–33:56" ("21:34 of 0:53:36") — the triple-full-listing the
    owner flagged is now three DISTINCT assignments with the exact
    windows the module docs assign;
  - Eno Daodejing: "Read: Chapters 1, 8 and 76 in full (288 words in
    all); chapter 8 is read with you first as the guided example";
  - Eno Zhuangzi: "Read: Passage 2.20, the Butterfly Dream, which closes
    chapter 2 of the Inner Chapters (about 67 words)".
- "Reflect as you go" card present with the module's reflection
  question.

### deg-wol-buddhism b3 (`#module=mod-bud-3`)

- TITLE: "Sila in Practice, The Precepts as Training" — the "b3:" band
  prefix is GONE.
- DESCRIPTION: learner prose ("You deepen the precepts from an ethical
  floor into a training: how a working Buddhist ethics decides cases…")
  — the level code "L2 Guided application…" is GONE.
- PREREQUISITES: "Module I — Ethics First, Orientation to the Buddhist
  Walk" / "Module II — The Four Noble Truths" — human titles, no raw
  band ids.
- VIEWING LIST, 4 essential items, each with its assignment:
  - Brahm, What the Buddha Taught: "Watch 25:46–37:33. The remainder of
    the talk is not assigned" ("11:47 of 49:44");
  - Brahm, What Is Buddhism? booklet: "Read: The sections on the five
    precepts, the Middle Way and Eightfold Path, and the practice of the
    path; the rebirth and karma sections are not assigned";
  - Five Mindfulness Trainings: "Read: The five trainings, read
    alongside your Module I precept statements";
  - AN 5.179 Gihisutta (Sujato): "REVISIT Read: Reapply the discourse
    you read in Module I to two hard cases of your own choosing" — one
    of the audit's three DROPPED REVISIT assignments is now restored
    with the role=revisit label rendered as REVISIT.
- "Reflect as you go" card present.

## Verdict

The owner-flagged defect set for daoism m1 and buddhism b3 is CONFIRMED
FIXED ON THE LIVE SITE, matching the data-block state on origin/main.
Together with the pragmatism m3 confirmation, the four priority degrees
are now learner-renderable with correct titles, prose descriptions,
segment windows, reading locators, revisit labels, human-titled
prerequisites and reflection prompts. The only remaining learner-audit
FAILs are the four `wiki_readings` lines — the owner-routed
Phase C.5 decision, not a repair-lane defect.

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26
