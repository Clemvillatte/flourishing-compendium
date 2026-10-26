# deg-wol-daoism integration receipt

- Integrator: worker-pplx-sup-1026o (deg-integrate baton + supervisor
  baton), 2026-10-26, following the handoff spec at
  docs/degrees/integration/deg-wol-daoism-handoff.md.
- Pre-attached this session: deg-wol-daoism m1-m2 STATUS comment
  repair (comment-only, verify/deg-wol-daoism-m1-m2-status-repair-1026o.md;
  new hashes m1 25e3e7d0, m2 cc6b024b), so the canonical hashes this
  receipt attaches to are the post-repair ones; m3 (4e9b0bf2),
  m4-yangsheng-neiye (f6552c8d) and m5 (fbdc0fcc) unchanged.

## What was attached

- `fcAcademyData.degrees[deg-wol-daoism].modules` set to
  `["mod-dao-1", "mod-dao-2", "mod-dao-3", "mod-dao-4", "mod-dao-5"]`;
  `status` left `"in-development"` per the handoff (the supervisor
  publication flip is a separate step).
- Five module entries in `fcAcademyData.modules`:
  `mod-dao-1` (L1 Foundations, 3.75 h, 230 labelled min),
  `mod-dao-2` (L2 Intermediate, 2.50 h, 149 labelled min),
  `mod-dao-3` (L2 Intermediate, 2.50 h, 155 labelled min),
  `mod-dao-4` (L3 Intermediate, 2.75 h, 168 labelled min),
  `mod-dao-5` (L4 Advanced, 3.50 h, 208 labelled min). Every field
  (outcomes, question, description, prerequisites, required/optional
  media, activity, rubric) is taken from the QC-passed module markdown
  under `docs/degrees/modules/deg-wol-daoism/` — the script asserts
  the five file hashes match the band record before the splice.
  `durationHours` is `round(minutes/60 × 4) / 4` (quarter-hour
  rounding; psychdim precedent: 249 min → 4.25). Packet arithmetic
  910 min = 15.17 h raw vs 15.00 h attached sum (rounding).
- Seven source entries in `fcAcademyData.sources`:
  `DAO-M1-01` Komjathy Lundao 1 (`_12aeIvlHhM`, verified-video),
  `DAO-M1-02` Van Norden Wisdom of China: Laozi (`lvglQJDrgJI`,
  verified-video), `DAO-M1-03` Ziporyn Why This Text Matters:
  Daodejing (`EJ1bB2w2gBk`, verified-video), `DAO-M1-04` Eno
  Daodejing (verified-text), `DAO-M1-05` Eno Zhuangzi Inner
  Chapters (verified-text), `DAO-M4-01` Komjathy Lundao 5
  (`WDwPln1CczI`, verified-video; the 1026e whole-talk ruling puts
  only 0:00-26:22 in requiredMedia and 26:22-53:43 in
  optionalMedia), `DAO-M4-02` Linnell Study of Inner Cultivation
  (Gutenberg, verified-text). Verification labels reflect the
  ledger receipts at `docs/degrees/ledgers/deg-wol-daoism.md` and
  `docs/degrees/verify/deg-wol-daoism-m1-m4-delta-confirm-1026e.md`,
  plus the m4 whole-talk ruling
  (`reviews/deg-wol-daoism-m4-whole-talk-ruling-1026e.md`) and the
  whole-degree gate PASS
  (`reviews/deg-wol-daoism-whole-degree-gate-1026h.md`).

## What was checked

1. Hash chain: script asserts each of the five canonical files
   hashes to the band record before the splice.
2. No dangling references: every `requiredMedia.source_id` and every
   `optionalMedia.source_id` on the five new module entries resolves
   in `fcAcademyData.sources`.
3. Optional-material placement: the m4 optional remainder
   (26:22-53:43) is in `optionalMedia` only, never `requiredMedia`,
   per the 1026e whole-talk ruling; the m1/m2/m3 optional remainder
   (unassigned chapters of Lundao 1, the Van Norden documentary, the
   Ziporyn lecture) also lives only in `optionalMedia`.
4. `node --check site/assets/app.js` PASS.
5. `python3 scripts/build.py` PASS (5,964 entries; fcAuthored 979).
6. `python3 scripts/check_conflict_markers.py` exit 0.
7. The `m4-yangsheng-nourishing-life.md` file remains noncanonical
   (per the gate review's routed item) and is not attached.

## Attachment sum

5 modules + 7 sources attached; daoism is now integrated but not yet
published (status remains `in-development` for the supervisor's
owner-decision-7 flip).

— worker-pplx-sup-1026o, deg-integrate + supervisor, 2026-10-26
