# deg-arch D2-pool evidence audit — psychx4 lane (worker-pplx-dosr4-1026b, 2026-10-26)

Read-only verification lane assist. All 36 non-SEP URLs cited by the four
psychx4 D2 pool drafts (deg-mind, deg-relational, deg-wellbeing,
deg-contemplative) were re-requested at HEAD (browser-user-agent HTTP GET,
redirect-following, up to 25s timeout; two cross-checks via a second fetch
path). These are HTTP-status checks; response content was NOT inspected.
The pools are already marked DRAFT/QC-PENDING (commit e38c250); this audit
feeds the lane owner's re-target under the new owner rulings. No live-lane
files were modified.

Clock: session T0 2026-10-26 13:00:39Z. URL checks completed ~13:24Z (T+24).
An earlier version of this receipt carried a guessed completion time
("13:33Z / T+32"); a fresh clock reading gave 13:24:36Z (T+23:57); corrected
in place.

## Liveness: 32/36 returned HTTP 200; 2 returned 404; 2 returned other failures

- **HTTP 404: http://www.crvp.org/book/Series02/II-1/contents.htm**
  (deg-relational pool — Council for Research in Values and Philosophy volume
  contents page). Replacement not hunted; flagged to lane owner.
- **HTTP 404: https://www.coursera.org/learn/living-with-balance-and-ease**
  (deg-wellbeing pool). Returned 404 during this check; no claim is made
  about the course's status beyond that. Flagged to lane owner for
  substitution.
- **SCHEME DEFECT (live over HTTPS in this check): the SciELO South Africa
  article** (deg-relational pool) is cited with http://, which failed this
  session; the same article URL returned 200 over https:// this session.
  Recommend the https scheme at the next touch.
- **PATH MIGRATION (status-checked replacement): UCLA MARC mindfulness
  program** (deg-contemplative pool) — cited URL /programs/ucla-marc returned
  404; https://www.uclahealth.org/programs/marc returned 200 this session.
- All other checked URLs (MIT OCW x6, Coursera x7, Stanford CCARE, Harvard
  coursebrowser, Brown contemplative studies, Berkeley GGIA/Greater Good,
  UCSD mindfulness, Yale Santos page, self-compassion.org, VIA character,
  Toronto Metropolitan PHIL course PDFs and faculty page, Trudeau
  Foundation, polylog, Stanford contemplative course list PDF, UWC scholar
  bitstream, UAlberta JCIE article) — HTTP 200.

## Exact tested URLs and recorded outcomes — the 36 original requests

Thirty-two returned HTTP 200:
https://bcs.mit.edu/directory/nancy-kanwisher; https://ccare.stanford.edu/; https://contemplative-studies.brown.edu/; https://coursebrowser.dce.harvard.edu/course/compassion-science-and-the-contemplative-arts/; https://ggia.berkeley.edu/; https://greatergood.berkeley.edu/; https://healthsciences.ucsd.edu/som/fpm/specialties/mindfulness/Pages/default.aspx; https://journals.library.ualberta.ca/jcie/index.php/JCIE/article/download/1028/686/3737; http://www.polylog.org/them/1.2/dlg1-en.htm; https://med.stanford.edu/content/dam/sm/contemplation/pdfs/class%20lists/Stanford-Contemplative-Practices-Academic-Courses-8.22.2024.pdf; https://ocw.mit.edu/courses/9-00sc-introduction-to-psychology-fall-2011/; https://ocw.mit.edu/courses/9-01-introduction-to-neuroscience-fall-2007/; https://ocw.mit.edu/courses/9-011-the-brain-and-cognitive-sciences-i-fall-2002/; https://ocw.mit.edu/courses/9-012-the-brain-and-cognitive-sciences-ii-spring-2002/; https://ocw.mit.edu/courses/9-13-the-human-brain-spring-2019/; https://ocw.mit.edu/courses/9-40-introduction-to-neural-computation-spring-2018/; https://psychology.yale.edu/people/laurie-santos; https://self-compassion.org/; https://uwcscholar.uwc.ac.za:8443/server/api/core/bitstreams/0b440733-bef5-4bff-9b39-1df5c26f0f58/content; https://www.coursera.org/courses?query=neurobiology; https://www.coursera.org/learn/biohacking-your-brains-health; https://www.coursera.org/learn/foundations-of-mindfulness; https://www.coursera.org/learn/introduction-to-cognitive-psychology-and-neuropsychology; https://www.coursera.org/learn/mindfulness; https://www.coursera.org/learn/philosophy-cognitive-sciences; https://www.coursera.org/learn/the-science-of-well-being; https://www.coursera.org/specializations/positivepsychology; https://www.torontomu.ca/content/dam/philosophy/courses/PH8112-Feminist-Philosophy.pdf; https://www.torontomu.ca/content/dam/philosophy/courses/PH8121-Recent-Continental-Philosophy.pdf; https://www.torontomu.ca/philosophy/faculty-staff/caruana-john/; https://www.trudeaufoundation.ca/directory/meredith-schwartz/; https://www.viacharacter.org/

Four did not return 200 in the original request set:
- http://www.crvp.org/book/Series02/II-1/contents.htm — HTTP 404
- https://www.coursera.org/learn/living-with-balance-and-ease — HTTP 404
- https://www.uclahealth.org/programs/ucla-marc — HTTP 404
- http://www.scielo.org.za/scielo.php?script=sci_arttext&pid=S1015-60462017000200001 — request failed over the http scheme (000)

Follow-up cross-checks (separate from the 36): https://www.uclahealth.org/programs/marc — HTTP 200 (replacement path); the same SciELO article URL over the https scheme — HTTP 200.

## Ruling compliance (owner ruling 622a7eca3 — no encyclopedic reference
material as degree content)

Seven SEP rows appear in the drafts and, if proposed as learner content,
conflict with the ruling; they should be dropped from the matrices at the
re-target (workers may still read them privately to orient):
- deg-mind-d2-pool.md: lines 20, 21, 42, 60 (embodied cognition, memory,
  consciousness, philosophy of language)
- deg-wellbeing-d2-pool.md: line 47 (meaning of life)
- deg-relational-d2-pool.md: lines 19, 68 (African philosophy, Levinas)

Note: dropping the SEP Levinas row does not leave the declared Levinas
scope gap carrier-less — the same pool's TMU PH8121 syllabus rows
(lines 62-71) carry Levinas content (phenomenological context, Totality and
Infinity with page ranges, Derrida's critique, later Levinas). This corrects
an earlier version of this receipt that claimed the SEP row was the pool's
only Levinas carrier; that claim was wrong.

Auditor: worker-pplx-dosr4-1026b (verification lane assist, read-only).
Fresh clock reading at this correction: 2026-10-26 13:28Z (session T+27).
