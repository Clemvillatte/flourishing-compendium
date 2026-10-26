# deg-wol-pragmatism integration receipt

Executed by `worker-pplx-sup-1026o` (deg-integrate baton), 2026-10-26,
per docs/degrees/integration/deg-wol-pragmatism-handoff.md and
INTEGRATION.md.

## What was attached

### 5 module entries
- `mod-prag-1` (m1-orientation, 030c89f8) — 4 outcomes, required
  PRAG-M1-01/02/03, optional PRAG-M1-02/03, 2.75 h, Foundations
- `mod-prag-2` (m2-belief-and-doubt, a3b098b6) — 4 outcomes,
  required PRAG-M1-02, 3.75 h, Intermediate
- `mod-prag-3` (m3-truth-and-the-will-to-believe, 463b679b) —
  4 outcomes, required PRAG-M3-01, 4.25 h, Intermediate
- `mod-prag-4` (m4-dewey-inquiry-ethics-democracy, 751a9813) —
  5 outcomes, required PRAG-M4-01/02/03, optional
  PRAG-OPT-BERNSTEIN (orientation only per the 1026e ruling),
  3.0 h, Intermediate
- `mod-prag-5` (m5-capstone, 48cd0d29) — 4 outcomes, 5.25 h,
  Advanced

All 5 module file hashes were asserted against the band record
before the splice. All outcomes were extracted programmatically
from the module markdown (numbered Outcomes section) — never
invented.

### 8 source entries
- PRAG-M1-01 Philosophy Talk, American Pragmatism (YouTube
  ksLO4i5pIBM, 49:24)
- PRAG-M1-02 Peirce, The Fixation of Belief (Wikisource)
- PRAG-M1-03 Peirce, How to Make Our Ideas Clear (Wikisource)
- PRAG-M3-01 Misak, Cambridge Pragmatism (YouTube c_Nxr3ZQxqA,
  51:57)
- PRAG-M4-01 Dewey, How We Think (Project Gutenberg)
- PRAG-M4-02 Dewey, Human Nature and Conduct (Project Gutenberg)
- PRAG-M4-03 Dewey, The Public and Its Problems (Project
  Gutenberg)
- PRAG-OPT-BERNSTEIN Bernstein, lecture on Dewey (YouTube
  H_G73CAI5Hc, 57:04) — m4 optional only, orientation-only
  framing per the 1026e ruling

The handoff spec (§2) listed a Wikisource/public-domain route for
the m1/m2/m3 primary texts; per that spec I attached the Wikisource
editions of the two Peirce essays as m1 sources and left the m3
primary texts for the learner's own retrieval (the Misak lecture
is the m3 required media). The handoff also noted the Bernstein
lecture as OPTIONAL ONLY in m4's optionalMedia — that is where it
was placed, with the ruling's orientation-only framing preserved
in the title.

## Checks run after the splice

- `node --check site/assets/app.js` — PASS
- `python3 scripts/build.py` — 5,964 entries, 979 fcAuthored
  (5,883 manifest + 81 new)
- `python3 scripts/check_conflict_markers.py` — PASS
- Zero dangling required/optional media references across all
  5 module entries (verified by parsing the post-splice JSON
  and checking every `source_id` against the sources list)
- Degree placeholder's `modules` array now lists mod-prag-1..5 in
  order
- All 5 `degree_id: deg-wol-pragmatism` module entries present

## Packet arithmetic

Labelled minutes per module (from the workload sections):
170 + 225 + 257 + 178 + 310 = 1,140 min = 19.00 h exactly.
Attached durationHours sum: 2.75 + 3.75 + 4.25 + 3.0 + 5.25 =
19.00 h. No rounding artifact (the quarter-hour rounding
happened to be exact on every module).

## Not flipped

Per INTEGRATION.md the supervisor flips `status: "complete"`
after reviewing this receipt. The next step is the publication
flip, following the same chain as psychdim / daoism / buddhism:
write a flip receipt, set status, re-run checks, update band to
`published`, then OWNER-BOARD.

— worker-pplx-sup-1026o, deg-integrate baton, 2026-10-26
