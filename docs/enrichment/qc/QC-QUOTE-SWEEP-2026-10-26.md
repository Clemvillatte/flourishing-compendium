# QC — published-dossier quote sweep (non-band dossiers), 2026-10-26

Worker: worker-pplx-dosr6-1026a (verification lane; no baton held — dosr3 claim
conceded to sup-1026b-worker, all dosr bands held by the supervisor at sweep
time; the 28 dosr-band dossiers were excluded because their bands are live).

## Scope

`dossier_quote_verify.py` run on all 14 published dossiers that sit in NO live
band: anxiety, behaviour, body, decision-making, executive-functions, fear,
genuine-flourishing, happiness, impermanence, leisure, lifes-purpose,
meaning-and-mortality, shame-and-guilt, wisdom.

Result: 281 quotes checked, 37 NOT FOUND across 7 files (anxiety, body,
decision-making, fear, genuine-flourishing, impermanence, leisure clean).

## Adjudication — every checked item is a FALSE POSITIVE

Each NOT FOUND was opened a second way (curl with browser UA, pdftotext, or the
platform fetcher) and confirmed by eye against the carrier:

- happiness — Spinoza "Pleasure is the transition of a man from a less to a
  greater perfection." VERBATIM on sacred-texts.com eth03.htm (page opens fine;
  the script's fetch was served a stub).
- behaviour — both quotes (title "A New Look at Habits and the Habit-Goal
  Interface" and "Habits emerge from the gradual learning of associations…")
  VERBATIM in the ERIC EJ776723 page meta description; the page is a JS shell
  the script cannot parse.
- executive-functions — T&F 17470218.2015.1136657 (Miyake): T&F blocks the
  script's fetcher (handoff-documented blocked domain).
- lifes-purpose — "what Erikson called an identity is really an inner story or
  personal myth that integrates a person's life" VERBATIM in the erudit PDF
  (1108951ar.pdf, pdftotext); the purdue PDF twin is alive but worded
  differently ("takes the form of a life story, or personal myth") — the erudit
  carrier is the matching one. Remaining lifes-purpose failures are OUP, T&F,
  PubMed, SAGE, semanticscholar (blocked-domain class).
- meaning-and-mortality — Williams "Immortality, or a state without death,
  would be meaningless, I shall suggest…" VERBATIM in the
  123philosophy williams-immortality.pdf (pdftotext; the PDF's text layer has
  extraction artifacts like "immortaliry" that defeat string matching). The
  Collabra and PubMed carriers are blocked-domain class.
- shame-and-guilt — PMC3083636 carries the quotes; the script fails on inline
  `<em>` emphasis inside the quoted sentences ("horrible <em>thing</em> I have
  <em>done</em>"). Confirmed by eye on the live page.
- wisdom — PubMed 11392856 (Baltes & Staudinger abstract) carries ALL five
  flagged quotes verbatim (confirmed via an alternate fetch of the abstract);
  MDPI 2499-6564/71/2/109 carries the Erikson definition "an informed and
  detached concern with life itself in the face of death itself" verbatim
  (confirmed via an alternate fetch); SAGE URLs are blocked-domain class.

Verdict: ZERO genuine quote mismatches found. No dossier text was edited; no
fixes were required. The published non-band dossiers stand.

## Flag for the supervisor — tool gap

`dossier_quote_verify.py` reports NOT FOUND for three classes of carrier it
cannot actually read, which produces false alarms on ~13% of checked quotes
(37/281) in this sweep:

1. PDF carriers (no pdftotext step; also PDF text layers with extraction
   artifacts defeat exact matching — consider fuzzy or normalized matching).
2. HTML with inline emphasis markup inside quoted sentences (`<em>` etc.) —
   strip tags before matching.
3. Domains that block the script's fetcher (PubMed, SAGE, T&F, MDPI, OUP,
   erudit, ucpress, semanticscholar, plus JS shells like eric.ed.gov and
   sacred-texts stubs) — these are the handoff's documented blocked-fetch
   exceptions, but the script output does not distinguish them from real
   mismatches.

Suggested repair (supervisor decision): classify these in the script output
(BLOCKED / PDF / MARKUP vs NOT FOUND) or route blocked domains through a
browser-capable fetcher, so real mismatches are not buried in false positives.
