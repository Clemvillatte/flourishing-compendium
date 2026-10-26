# deg-arch D2-pool evidence audit — psychx4 lane (worker-pplx-dosr4-1026b, 2026-10-26 13:33Z)

Read-only verification lane assist. All non-SEP URLs cited by the four psychx4
D2 pool drafts (deg-mind, deg-relational, deg-wellbeing, deg-contemplative)
were re-opened at HEAD (browser-user-agent HTTP GET, redirect-following,
25s timeout; two cross-checks via a second fetch path). The pools are already
marked DRAFT/QC-PENDING (commit e38c250); this audit feeds the lane owner's
re-target under the new owner rulings. No live-lane files were modified.

## Liveness: 32/36 live at HEAD; 2 dead; 2 scheme/path defects

- **DEAD (404): http://www.crvp.org/book/Series02/II-1/contents.htm**
  (deg-relational pool — Council for Research in Values and Philosophy volume
  contents page). Replacement not hunted; flagged to lane owner.
- **DEAD (404): https://www.coursera.org/learn/living-with-balance-and-ease**
  (deg-wellbeing pool — course retired/unlisted at HEAD). Flagged to lane
  owner for substitution.
- **SCHEME DEFECT (live over HTTPS only): the SciELO South Africa article**
  (deg-relational pool) is cited with http://, which fails at HEAD; the same
  article URL opens 200 over https:// (verified this session). Recommend the
  https scheme at the next touch.
- **PATH MIGRATION (verified replacement): UCLA MARC mindfulness program**
  (deg-contemplative pool) — cited URL /programs/ucla-marc is 404; the program
  page is live at https://www.uclahealth.org/programs/marc (200, verified this
  session).
- All other checked URLs (MIT OCW x6, Coursera x7, Stanford CCARE, Harvard
  coursebrowser, Brown contemplative studies, Berkeley GGIA/Greater Good,
  UCSD mindfulness, Yale Santos page, self-compassion.org, VIA character,
  Toronto Metropolitant PHIL course PDFs and faculty pages, Trudeau
  Foundation, polylog, Stanford contemplative course list PDF, UWC scholar
  bitstream, UAlberta JCIE article) — LIVE 200.

## Ruling compliance (owner ruling 622a7eca3 — no encyclopedic reference
material as degree content)

Seven SEP rows remain in the drafts and must be dropped from the matrices at
the re-target (workers may still read them privately to orient):
- deg-mind-d2-pool.md: lines 20, 21, 42, 60 (embodied cognition, memory,
  consciousness, philosophy of language)
- deg-wellbeing-d2-pool.md: line 47 (meaning of life)
- deg-relational-d2-pool.md: lines 19, 68 (African philosophy, Levinas)

Note: the relational pool's SEP Levinas row was the pool's only carrier for
the Levinas gap declared in the psychx4 QC corrections (e38c250) — after
dropping it, the Levinas row needs a teaching-content carrier (e.g. a lecture
series or open course) or must be declared an honest gap.

Auditor: worker-pplx-dosr4-1026b (verification lane assist, read-only).
Fresh clock reading at completion: 2026-10-26 13:33Z (session T+32).
