# Degrees live-content integration — session 1028a (owner directive: publish what's mined)

Owner directive (2026-10-28): update the existing content of the four live degrees
(deg-psychdim, deg-wol-daoism, deg-wol-buddhism, deg-wol-pragmatism), push to the
website with what has been mined so far, defer the 100-hour floor, make the result
as logical, qualitative and state-of-the-art as possible.

## What was done

Eight waves of source/assignment integration via the standard pipeline
(`docs/degrees/integration/<degree>-assignments.json` → `scripts/degrees_apply_assignments.py --write`
→ `site/assets/app.js` fcAcademyData block; Vercel deploys from origin/main).

| Wave | Commit | Content |
|---|---|---|
| 1 | 172b76ae5 | psychdim m2/m5, daoism m4, buddhism m6/m7, pragmatism m1/m2/m4 (7 sources) |
| 2 | b4b13caf6 | 9 NPTEL Psychology-of-Emotion lectures (psychdim m2/m3/m7) + Komjathy Lundao 3 (daoism m1) |
| 3 | 0846ac075 | Anālayo OBU "Tranquility and Insight" (buddhism m4), Sartwell "Will to Believe" (pragmatism m3), Komjathy Lundao 7 (daoism m4) |
| 4 | b2ea02506 | 4 UArizona CBS lectures (buddhism m6/m7), OzZEN Nagarjuna PDF (buddhism m7), UB PHI 556 Peirce sessions (pragmatism m1) |
| 5 | 26b9c7031 | SFZC Nagarjuna Middle Way 5-class series (buddhism m7), Heine Dogen classes + Red Pine Bodhidharma (buddhism m6) |
| 6 | beec6dc19 | UB PHI 556 Peirce's Semiotics (pragmatism m2), Komjathy Lundao 2/4/8/9 (daoism m1/m2/m4/m5) |
| 7 | 56dead762 | Daoist Foundation guided practice sessions 1-3 (daoism m4), Fronsdal two talks (buddhism m2), Red Pine Diamond Sutra class (buddhism m6) |
| 8 | 3268f7dc5 | OzZEN "Nagarjuna and the Two Truths" PDF (buddhism m7), Pokorny Five Ranks 1-2 (buddhism m6) |

## Verification status

- `node --check site/assets/app.js`: PASS after every wave.
- `python3 scripts/tests/degrees_learner_audit.py`: 0 defects (scope: the four degrees)
  after every wave. The duplicate-content gate caught and forced the removal of one
  duplicate (Lundao 5 was already assigned as DAO-M4-01) and one canonical-URL
  collision (the two UB PHI 556 sessions initially shared the course-page URL; each
  now carries its own Box share URL).
- Every added URL and duration comes from a source opened this session or from the
  corresponding D2 pool's opened-page evidence (gate_evidence on each record).
- Page-verified but playback-inspected content (SFZC classes, UB PHI 556 recordings)
  is labeled honestly in per-ref notes ("duration page-stated, audio not played" /
  "content uninspected").

## Honest caveats carried forward

- The hours floor remains deferred by owner ruling; the audit's measured-hours
  lines (3.8h psychdim / 2.1h daoism / 11.2h buddhism / 3.1h pragmatism, required
  media only) are unchanged in kind — the new content is mostly optional-track.
- UB PHI 556 recordings: durations from the players' own metadata (pool receipt),
  content uninspected; the Rorty session is off-scope per gate verdict 1a781d335
  and was not mapped.
- psychdim's remaining pool rows are located-candidates or held-open rulings
  (broaden-and-build theory treatment, mental-contrasting family ruling) — nothing
  further was honestly assignable this session.
- Lundao 6 ("Daoist Being"): URL verified on the Daoist Foundation resources page,
  but the watch-page duration could not be verified (crawler failed) — not added.
- Uji: Time Being (SFZC): the direct mp3 was unreachable from this environment —
  not added.
- The deg-gate re-review of the Buddhism pool's post-checkpoint advances
  (BUD-TEACH-8/9/10-20) remains owed; this session's additions to the live degree
  draw on the already-verified rows (BUD-TEACH-17, BUD-TEACH-20, BUD-TEACH-4) and on
  pages opened directly this session.

## Files touched

- `site/assets/app.js` (fcAcademyData: +53 sources and +53 module refs across the
  four degrees this session, 92→145 sources and 123→176 refs)
- `docs/degrees/integration/deg-{psychdim,wol-daoism,wol-buddhism,wol-pragmatism}-assignments.json`
- `scripts/tests/degrees_learner_audit.py` (defensive fix: dict-valued matrix entries
  no longer crash the audit; they fail with a message)
