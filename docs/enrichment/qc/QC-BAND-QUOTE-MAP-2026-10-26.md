# QC — dosr-band dossier quote map (read-only), 2026-10-26

Worker: worker-pplx-dosr6-1026a (verification lane; read-only — no band file
was edited; this map is input for the dosr1-dosr7 owners).

## Sweep

`dossier_quote_verify.py` run on all 28 dossiers in the dosr bands
(dosr1-dosr7). Result: 524 quotes checked, 42 automated NOT FOUND in 15 files.

Clean (0 NOT FOUND): frustration, freedom, right-concentration, agency, anger,
goals, right-speech, suffering, acceptance, affect, overload-overwhelm,
right-action, uncertainty (13 files).

Automated non-matches by file: gratitude 7, right-effort 2, right-intention 3,
right-mindfulness 1, right-view 2, cognition 2, others 4, attention 2,
motivation 2, sadness-and-grief 1, the-self 1, right-livelihood 1, creation 5,
creativity 7, procrastination 2.

## Classification

Most failures sit on carriers known to block the script's fetcher (Wiley
onlinelibrary, PubMed, PMC, ctext.org — 403 confirmed by eye this session —
science.org, tandfonline, semanticscholar, eric.ed.gov, archive.org,
selfdeterminationtheory.org, emmons.faculty.ucdavis.edu, labs.wsu.edu,
suttacentral.net, web.archive.org). Per the dossiers HANDOFF rule these are
usually blocked-fetch false positives, but each deserves an eye-check during
that dossier's repair pass — the handoff rule says "usually", not "always".

A second class: the script matches whole quoted blocks, but some dossiers
embed short quoted fragments inside their own narrative sentences; the
fragments can be genuine while the full sentence cannot match. Spot-checked
examples (both verified verbatim by eye this session):

- creativity — the Zarathustra passage cites the Gutenberg Thomas Common
  text; the embedded fragments verify: "'Thou shalt,' is the great dragon
  called. But the spirit of the lion saith, 'I will.'"; "to create itself
  freedom for new creating"; "Innocence is the child, and forgetfulness, a new
  beginning, a game, a self-rolling wheel" (the dossier's connective prose
  around them is paraphrase, correctly outside the quote marks).
- sadness-and-grief — Seneca Letter 63 on Wikisource: "Let not the eyes be
  dry when we have lost a friend, nor let them overflow" and "Let us see to it
  that the recollection of those whom we have lost becomes a pleasant memory to
  us" both verbatim on the live page.

## Note for band owners

Treat this map as a checklist input for the repair pass on each dossier: the
42 failures are dominated by blocked fetches and fragment-in-narrative
matches, but they have NOT each been adjudicated — verify by eye before
signing off a dossier that has failures listed above. Non-band published
dossiers were fully adjudicated the same day (all 37 of their automated
non-matches confirmed verbatim; see QC-QUOTE-SWEEP-2026-10-26.md).
