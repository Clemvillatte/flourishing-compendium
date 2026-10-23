# Person-node cleanup session (2026-10-22, worker-sup-flourish-1022)

Executed WORK-ORDER-2026-10-22 Task 1 under supervisor baton (owner-directed).

- Baseline commit: e6a4f502d82670c122e5d831e98114b414f2d5d7 (pre-change).
- 33 backlink lines on 32 SO-principle pages reworked per the deletion map's rule:
  preserve author names/dates as plain text; retarget to an existing concept page
  where the context clearly points at one; else strip [[ ]] markup only.
- Retargets (12 lines): Asch->[[Conformity]] (SO032); Allport->[[Intergroup contact]] (SO047);
  Berry->[[Acculturation theory Berry]] (SO063, SO073); Benet-Martínez et al->[[Bicultural identity
  integration]] (SO074); Ericsson et al->[[Deliberate practice]] (SO041); Sampson et al->[[Collective
  efficacy]] (SO052); Meyer->[[Minority stress theory]] (SO050); Putnam->[[Social capital theory
  Putnam]] (SO038, SO062); Ridgeway->[[Social construction of gender]] (SO055); Whitbeck et
  al->[[Historical trauma]] (SO067).
- Plain-text strips (21 lines): Bronfenbrenner (SO002), Biglan et al (SO006/SO056/SO075), OECD
  (SO009/SO065), Uchida et al (SO013), Phinney (SO014), Chida et al (SO019), Holt-Lunstad et al
  (SO023/SO071), Axelrod (SO039), Tajfel et al (SO046), Crenshaw (SO049), Marmot (SO053), Bourdieu
  (SO054 x2 incl. bare link), Castro et al (SO064), Eisenbruch (SO069), Verduyn et al (SO060/SO076).
- Validation: every edited page validated with `enrich_validate.py --base e6a4f502d`; the ONLY
  reported ERRs are the two owner-authorized removal classes ("original wikilink markup changed or
  removed" and "LOST 1 original links" naming the deleted person node) — this is the expected,
  documented outcome of the owner-directed deletion (WORK-ORDER step 3). No unresolved links, no
  banned-phrase/staging/prose errors introduced. Pre-existing warnings (Sources URL, Related
  concepts) unchanged.
- 25 concept files git rm'd; 25 entries removed from docs/enrichment/queue-concepts.json
  (1399 -> 1374) and from content/_order.json (5833 -> 5808).
- Biglan et al retired from bands/w1q-manifest.json (70 -> 69 concepts) and recorded via
  `enrich_state.py w1q missing` with reason (never started in the batch state; page deleted).
- Post-deletion sweeps: zero wikilinks to any of the 25 ids remain in content/ (principles,
  concepts, stories), site/, sources/; data-src/randData.json mentions are plain-text author
  citations, not links. build.py clean: 5820 entries, fcAuthored 975.
- Note: queue-concepts.json was regenerated/edited by earlier sessions (map says "present there");
  rank shifts cannot disturb frozen manifests (bands/*-manifest.json own their concept lists; the
  queue is only read at mint time).

## Manifest retirement follow-up (same session)

The deletion map's "RETIRE assignment: none" was inaccurate: 10 band manifests referenced
deleted nodes. Removed them (never-worked bands keep frozen remaining lists intact):
w1ab 70->68 (Marmot, Meyer), w1ac 70->67 (Phinney, Ridgeway, Sampson et al),
w1ad 70->69 (Tajfel et al), w1af 59->57 (Uchida et al, Whitbeck et al), w1t 70->69 (Berry),
w1u 70->69 (Holt-Lunstad et al), w1v 70->68 (OECD, Putnam), w1x 70->68 (Verduyn et al, Allport),
w1y 70->63 (Asch, Axelrod, Benet-Martínez et al, Bourdieu, Bronfenbrenner, Castro et al, Chida et al),
w1z 70->67 (Crenshaw, Eisenbruch, Ericsson et al). The w1ab state's two moot identity/namespace
HOLDs (Marmot, Meyer — pages now deleted) were retired; their original consolidation text is in
git history at bad583638^..HEAD (this commit's parent).

Task 2 note: the w1x baton was claimed by a live worker (worker-w1x-pplc-9c41f2e0) during this
cleanup — the manifest edit removes only deleted nodes and does not touch their in-flight items.

## 2026-10-23 ~11:50Z — worker-pplx-maint-2233 — routed sweep: workflow-rationale backlink glosses (the 'parallels list' / 'cited-in list' class)

Executed the systemic sweep routed 2026-10-23 by worker-pplx-aae235f1 (the originally routed pages — Ziran, Being-toward-death, Awe, Rumination, Anatta, Cultural psychology, I and Thou, Decentering — were already clean except I and Thou; the live grep set was worked instead). One-line rewords to plain relationship clauses on 11 pages (Gelassenheit 6 glosses, Eternal recurrence 2, I and Thou 1, Interoception 1, Yin and yang 1, Yangsheng 1, Compassion 1, Sympathy 1, The meek 2, PEN Model 2 sentences, ERG Theory 2 sentences, Nonviolent communication 1): the 'X's psychology/philosophy parallels list ...' / 'the page's cited-in list runs through ...' / 'batch log flags the ... cited-in list' phrasings replaced with plain clauses or dropped where the existing gloss already stated the relationship. The class is now grep-clean across content/concepts/ ('parallels list|cited-in list': zero hits). Validation: the 10 pages without pre-existing failures all pass; Yin and yang and Yangsheng carry PRE-EXISTING failures at HEAD (stash-test documented): Yin and yang 7 dashes in prose (max 3), Yangsheng 20 dashes + no http(s) URL in Sources — routed to the next maintenance pass; the one-line rewords on those two pages are additive-safe (no links lost, validator ERRs identical to HEAD).
