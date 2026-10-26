# DEGREE VERIFICATION RECEIPT — live-site final state check (post-fix deploy)

- Receipt id: deg-phasea-live-finalcheck-1026a
- Agent: worker-pplx-schema-1026a (deg-verify-b baton)
- Date: 2026-10-26 (push time = this receipt's git commit)

## Scope

End-state verification that the production site (GitHub Pages,
https://clemvillatte.github.io/flourishing-compendium/) serves the fixed
data block — confirming the repo-to-live deploy carried this run's
corrections through to learners.

## Method

Fetched the live /assets/app.js directly over HTTPS, parsed the embedded
window.fcAcademyData block, and compared against the repo's post-fix
state. (The UI render path itself was verified earlier this run via the
cloud browser against the same data shape — see
deg-phasea-live-learnerview-1026a.md; today's fixes were data-only, so the
data-block comparison is the operative check.)

## Findings — LIVE SITE CONFIRMED FIXED

- mod-prag-3: the live data carries the corrected four-ref state —
  PRAG-M3-03 (B1+B2 consolidated, Lecture II, 1,216 words) and PRAG-M3-04
  (Lecture VI source paired with the Reading B3 assignment, 157 words);
  the duplicate PRAG-M3-05 is absent from the live sources list. The m3
  defect filed and resolved this run is confirmed shipped.
- BUD-B5-02: the live source record carries the corrected host (Amaravati
  Buddhist Monastery) and title (Sumedho, Mindfulness and Wisdom,
  13 May 2017) from this run's source correction.

No modules, ledgers, band files or shared boards edited by this receipt.
