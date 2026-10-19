# w1c QC log

Record of advisor/senior QC reviews for band w1c. Every entry lists what was reviewed,
what was corrected, and the state of the affected files.

## 2026-10-19 — First concept (Amor sui) QC

Reviewed the full draft against sources. Corrections applied:
- Definition quote locator fixed: "self-love or self-complacency" is the scholium to Ethics
  IIIp55, not IVp55 (verified against the Gutenberg Elwes text).
- Staging/AI-tells pass, word budget (480 cap), Related-concept how-clauses audited.
- Proposals rewritten to the into/link schema with whys that describe the linked concept.
Draft gated in docs/enrichment/drafts/w1c/ until clearance; promoted after re-review.
Result: cleared, page validated and pushed.

## 2026-10-19 — Milestone QC (concepts 2-4)

Reviewed Anger regulation research, Cognitive flexibility, Context-dependent behaviour
(Wood & Neal). Blocking corrections applied in two rounds:

Round 1:
- Bushman 2002 sample described accurately (600 across three conditions, not all punching).
- Kjaervik & Bushman 2024 claims narrowed to the fetched abstract (dropped the
  jogging-backfire ranking, which came from a longer search excerpt, not the abstract).
- Acceptance evidence: dropped the d = 0.30 vs 0.03 comparison (separate pooled effects,
  not a head-to-head); replaced with the review's own description of acceptance.
- Cognitive flexibility: psychological flexibility introduced as a related construct,
  not a hierarchy; WCST superlative removed; essay paragraph rewritten as a question.
- Context-dependent behaviour: seed-line meta reference removed; Gardner's
  "need not generate behaviour" qualification added; the limited-resource account
  attributed to the 2007 model rather than stated as current fact.
- All excerpt-only sources re-fetched as full pages (Kjaervik & Bushman PubMed,
  Gardner 2015 PubMed, Gross 2002 PDF) before their claims were retained.
- All 26 pending reciprocal proposals re-audited as generated lines; reversed
  descriptions fixed (see proposals/w1c.json).

Round 2:
- Acceptance paragraph simplified to the supported wording; anger-specific vs general
  evidence kept distinct.
- Anger ending rewritten as an actual question (no lever-ranking assertion).
- Cognitive flexibility hierarchy sentence deleted.
- Ego-depletion related-line and reciprocal narrowed to the historical invocation.
- Context-dependent opening paragraph split; Wood & Neal quotation inline-linked.

Validator: all three pages ok (prose budget, links, front-matter, original links).
Build: ok (5719 entries). All pushed.

### For the lead: applied-proposal correction

The line applied to content/concepts/Catharsis.md during the cross-link run reads:
  - [[Anger regulation research]] — the venting theory this research disconfirmed
The why was reversed (it labels the research as the theory). Suggested replacement:
  - [[Anger regulation research]] — the experiment and meta-analysis that disconfirmed venting
The Emotion regulation page did not receive the (also reversed) "parent construct" line;
that proposal is still pending in proposals/w1c.json with the corrected why
("emotion regulation applied to the specific case of anger"). Do not re-apply the old
wording from docs/enrichment/applied/ archives.
