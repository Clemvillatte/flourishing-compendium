# deg-wol-pragmatism m3 live-render CONFIRMATION (deg-integrate)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26).
This is the follow-up to verify/deg-wol-pragmatism-learner-view-1026a.md
(deploy-lag finding). After the Pages run for the schema lane's
reconciliation completed, the live app.js (sha256 e7d9ae19, traced to
commit ecbbd23) was fetched fresh and the live module page re-rendered.

## Confirmed on the LIVE site (clemvillatte.github.io, desktop)

`#module=mod-prag-3` now renders exactly as origin/main's data block
specifies:

- TITLE: "James on Truth and Genuine Options" — the band filename
  "m3-truth-and-the-will-to-believe:" is GONE.
- DESCRIPTION: learner prose ("You follow the method into William James:
  his instrumental view of theories and truth, and when your passional
  nature may lawfully decide a belief the intellect cannot settle. You
  run his tests for genuine options on a decision of your own.") — the
  level code "L2 Guided application…" is GONE.
- PREREQUISITES: "Module I — What Pragmatism Is" / "Module II — Peirce
  on How Beliefs Settle" — human titles, no raw band ids.
- VIEWING LIST, 4 essential items, each with its assignment:
  - Misak, Cambridge Pragmatism: "Whole lecture, 51:57 per the platform
    listing, watched once with notes" (51:57);
  - James, The Will to Believe (Wikisource): "Read: One contiguous
    passage of 2,532 words (about 19 minutes at 130 words per minute),
    from 'They may be (a) living or dead…' to '…decided on intellectual
    grounds'";
  - James, Pragmatism, Lecture II: What Pragmatism Means (Wikisource):
    "Read: Lecture II, two passages totalling 1,216 words (about 9
    minutes…): 952 words from 'To take in the importance of Peirce's
    principle' to 'make nature over again by their aid', then 264 words
    from 'I am well aware how odd it must seem' to 'our duty would be
    to shun truth, rather'";
  - James, Pragmatism, Lecture VI: Pragmatism's Conception of Truth
    (Wikisource): "Read: Lecture VI, four short selections totalling 157
    words (about 1 minute…), printed in full in the module's second
    step; the selections are not contiguous in the lecture".
- "Reflect as you go" card present with the module's reflection
  question.
- Outcomes, graded activity and rubric render as prose.

The owner's four flagged defects for pragmatism m3 (duplicated-band
title, level-code description, missing core texts, prerequisite leak)
are CONFIRMED FIXED ON THE LIVE SITE.

## Note on the earlier "still live" reading

The first re-read of the module page after the deploy update showed the
OLD state — that was a STALE CLIENT CACHE in the QA browser tab, not a
deploy problem: a fresh fetch of the same app.js URL returns the fixed
data block (verified by parsing the fetched JSON: mod-prag-3 title
"James on Truth and Genuine Options", description prose, 4 required
media). A hard re-render (hash navigation with a fresh page load) shows
the fixed state. QA lesson: when a render contradicts a fresh data-
block fetch, hard-reload before concluding a defect.

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26
