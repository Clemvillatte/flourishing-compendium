# w1o ledger (worker-w1o-9e4b7c2f)

## QC record (band milestones)

### First-item QC round 1 (advisor, items 1-2)
FAIL on both items. Causes: founder attributions and four-threat definitions beyond opened evidence (ITT); "not a by-product of computation but identical to" staging plus unsupported contrast, unopened grids/feed-forward clause, unsupported "appeal for the compendium" closer (IIT). Repairs applied per advisor's bounded replacements; citations placed beside factual prose; "abstract" added to locators. Items 1-2 then revalidated ok.

### Item-5 milestone QC (advisor, items 1-5)
- Items 1-2: CONFIRMED PASS (repairs accepted).
- Item 3 (Interactive activation model): FAIL, two defects — IAC/PDP Wikipedia paragraph beyond the opened source (removed with its Sources row); no locator for the quote and no citations beside factual prose (fixed: p. 376 located via per-page pdftotext; primary PDF cited in prose; "word superiority" framed as the model's explanation).
- Item 4 (Interpersonal Deception Theory): FAIL, two defects — Wiley article not cited beside the opening-paragraph claims (fixed); moves-and-countermoves gloss overstated, cognitive-exertion claim dropped, paragraph re-anchored to the theory's own interactive framing (fixed).
- Item 5 (Interpersonal psychoanalysis): FAIL, four defects — unsupported "set against Freudian drive theory" claim (removed); unattributed "participant observer" and undated 18-propositions phrasing (removed); longer Hopwood blockquote replaced with the short Sullivan fragment and an accurate secondary-carrier disclosure; selective-inattention sentence re-anchored to the opened overview.
- Repairs applied to all four items; revalidated against the pre-repair commit (see below).

## Validation baselines
- Items 1-2 repairs: validated ok at commit 65d0d493 (repairs) vs first-pass commit 3351e596 line.
- Items 3-5 first passes: 3351e596 (IA model), 3f3fa6b1 (IDT), 0506f0a8 (Interpersonal psychoanalysis).
- Items 1, 3, 4, 5 milestone repairs: validated ok at the QC-repairs commit (see git log, message "QC milestone repairs: items 1, 3, 4, 5 (w1o)").

## Per-item notes
- Integrated Threat Theory: SAGE abstract + PubMed 17201592 opened. Degree 4. Saturation hunt skipped per §1a (no obviously missing reciprocal jumped out).
- Integrated information theory: PubMed efetch 15522121 + IEP (Fallon) opened. Degree 4. Saturation skipped.
- Interactive activation model: author-hosted 1981 PDF downloaded and pdftotext-verified (quote on printed p. 376); Wikipedia IAC extract via API (used only as disclosed secondary carrier, then removed per QC). Degree 4. Saturation skipped.
- Interpersonal Deception Theory: Wiley abstract page + Wikipedia extract via API. Degree 4. Saturation skipped.
- Interpersonal psychoanalysis: PMC3675800 + Wikipedia extract via API. Degree 4. Saturation skipped.

## Session tooling notes
- git push over HTTPS fails in this sandbox (sideband disconnect); use `python3 scripts/api_push.py 3` after every commit (established repo convention). The owner-provided token authenticates via Bearer on api.github.com only; the token as first received was truncated (92 chars); the complete value (93 chars, ending "m") authenticates as Clemvillatte. git-receive-pack rejects it in all tested forms.
- Monotonic anchors: start epoch 1792572054 (08:40:54 UTC); anchor2 ~08:50:30 UTC; monotonic reading 851.16 s at 08:54:16 UTC.
