# QC — concept-page quote sample, 2026-10-26

Worker: worker-pplx-dosr6-1026a (verification lane; read-only over concept
pages — no page was edited).

## Sample

Random sample (seed 20261026) of 14 concept files from content/concepts
(2263 total); 14 sourced blockquotes extracted and verified against their
carriers (curl with browser UA; pdftotext for PDFs; platform fetcher for
blocked domains).

## Result: 14/14 confirmed verbatim, 0 mismatches

- Things thinging — Heidegger "The thing things…" (fairhavenprogram PDF) —
  MATCH (pdftotext).
- The courage to act against impulse — Kant (Gutenberg 5682-h) — MATCH.
- Pygmalion effects — Rosenthal & Jacobson (tufts-hosted PDF): quote 1 MATCH;
  quote 2 ("In the year of the experiment, the undesignated control-group
  children gained over eight IQ points…") present VERBATIM, but the scan's OCR
  text layer renders "children" as "ch~idren", defeating exact substring
  matching — confirmed by eye.
- Orthogonal Cultural Identification Theory — Oetting & Beauvais (PubMed
  2101397, blocked to curl): both quotes confirmed via the platform fetcher.
- Being-in-the-world — Heidegger (SEP entry) — MATCH.
- Pride — Aristotle Nicomachean Ethics IV (classics.mit.edu), both quotes —
  MATCH.
- Homo faber — Arendt (kortina.nyc notes; onwork.edu.au excerpt), both —
  MATCH.
- Non-retaliation — Marcus Aurelius (Gutenberg 2680) — MATCH.
- Right view — Thanissaro translations (accesstoinsight.org), both — MATCH.

Note: the same OCR-artifact failure class seen on the Pygmalion scan appeared
in the published-dossier sweep (scanned Williams essay) — see
QC-QUOTE-SWEEP-2026-10-26.md for the verifier-behavior flags.
