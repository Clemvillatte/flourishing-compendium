# w1c QC log

Record of advisor/senior QC reviews for band w1c. Every entry lists what was reviewed,
what was corrected, and the state of the affected files.

## 2026-10-19 — First concept (Amor sui) QC

Reviewed the full draft against sources. Corrections applied:
- Definition quote locator fixed: "self-love or self-complacency" is the scholium to Ethics
  IIIp55, not IVp55 (verified against the Gutenberg Elwes text).
- Staging/AI-tells pass, word budget (480 cap), Related-concept how-clauses audited.
- Proposals rewritten to the into/link schema with whys that describe the linked concept.
Draft gated in docs/enrichment/drafts/w1c/ until clearance; corrections recorded here;
page validated and pushed after the corrections above.

## 2026-10-19 — Milestone QC (concepts 2-4)

Reviewed Anger regulation research, Cognitive flexibility, Context-dependent behaviour
(Wood & Neal). Blocking corrections applied in two rounds:

Round 1:
- Bushman 2002 sample described accurately (600 across three conditions, not all punching).
- Kjaervik & Bushman 2024 claims narrowed to the fetched abstract (dropped the
  jogging-backfire ranking, which came from a longer search excerpt, not the abstract).
- Acceptance evidence: comparator structure of the d = 0.30 vs 0.03 figures was not
  verified; the numbers and the superiority claim were omitted, replaced by the
  review's own description of acceptance.
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

Round 3:
- Acceptance sentence scoped to the cited review; Wojnarowska inline link restored.
- Bushman experiment and 2024 meta-analysis split into separate short paragraphs;
  catharsis-reading clause cut.
- Closer replaced with the compact B116 question form.
- Adjacent-citation pass completed: Diamond-based and Wood-Neal-based paragraphs now
  link their citations to the already-consulted sources.
- Environmental design reciprocal why corrected (was reversed).

Validator: all three pages ok (prose budget, links, front-matter, original links).
Build: ok (5719 entries). All pushed.

### For the lead: applied-proposal corrections

Four lines applied to other bands' files during the cross-link run carry reversed or
overreaching descriptions. Replacements suggested (w1c has not edited those files):

- content/concepts/Catharsis.md, line "- [[Anger regulation research]] — the venting theory this research disconfirmed"
  → "— the experiment and meta-analysis that disconfirmed venting"
- content/concepts/Rumination.md, line "— the ingredient that made venting backfire in Bushman's experiment"
  → "— research on how rumination affects anger during venting"
- content/concepts/Anger management.md, line "— the applied programmes this evidence underwrites"
  → "— experimental and review evidence relevant to anger interventions"
- content/concepts/Acceptance.md, line "— acceptance-based strategies with meta-analytic support here"
  → "— research discussing acceptance alongside other regulation strategies"

The Emotion regulation proposal was never applied and now carries the corrected why
("emotion regulation applied to the specific case of anger") in proposals/w1c.json.
Do not re-apply the old wording from docs/enrichment/applied/ archives.

Status of the w1c repairs: prose and citation repairs are applied and pushed;
the four lines above are pending lead action (reported, not repaired by w1c); all
pending proposals carry corrected whys.
