# Verification receipt: D1 evidence audit — cited university-syllabus URLs re-opened (v2, corrected)

- Worker: worker-pplx-archpsych-1027a (verification assist; read-only — this receipt edits no inventory, module, ledger, band or shared board)
- Status: **partial independent audit. Checkpoint approval NOT assessed** — this receipt does not check every topic-to-syllabus mapping or the filled D2 matrices, and does not substitute for the owner/degrees-strategist checkpoint required before Phase D3.
- v2 note (correction, same session): the first pushed version of this receipt overstated several rows (HTTP-status checks reported as content verification), carried a wrong URL count (29 across 9 files), and included a "fabricated URLs in earlier revisions" allegation that git history does not support (`git log -S` for each of those URL strings across docs/degrees/inventory/ returns no commits — they never appeared in any committed version; the allegation is withdrawn). This version separates HTTP-status checks from content reads and narrows every claim to what was actually done this session.

## Scope and method

Every syllabus/course URL cited as "opened" in the Phase-D1 inventory files at HEAD was re-fetched this session (web fetch tools and direct HTTP with redirects followed). Fetch results are separated from content reads: a content read means the document or page was actually read this session and its identity (institution, course code/title, instructor/term where stated) and topic coverage were compared against the inventory's claims. Where direct retrieval failed, the failure mode is recorded as observed (HTTP 404 or DNS resolution failure) with no claim about the cause; where the search index's copy of the same document was consulted, that is labelled "search-index corroborated" and is NOT independent primary-content verification under the project's opened-source rule.

## Fetch results (42 cited URLs across 12 inventory files, plus 1 replacement URL)

| Inventory | Cited URLs | Retrieval | Content-read this session |
|---|---|---|---|
| deg-wol-daoism | 3 | 3/3 OK | 3 (Wabash-hosted WKU RELS 318 Fischer Sp2013; DePauw REL 290B Goble Sp2012; UF CHT 3513 Wang F2016 — course, instructor, term, schedules match the inventory) |
| deg-wol-buddhism | 3 | 3/3 OK | 3 (UF REL2341 Poceski F2025 Harvey spine; UCF REL 3340 Sp2023 5-module structure; UVic PHIL312 Goto-Jones Sp2026 topic list — all match) |
| deg-wol-pragmatism | 3 | 3/3 OK | 1 (UCSD Phil 232 Sher Sp2025 — full 10-session schedule read and matches). Duke ReadingList.htm and Georgetown Blattner index: HTTP 200 only, content NOT re-read this session |
| deg-wol-greek | 3 | 3/3 OK | 3 (Yale Summer Session PHIL S125E; Utah PHIL 3100 F2025; Moravian PHI 241 — all read and match, with one term-metadata defect, see Defects) |
| deg-wol-existentialism | 5 | 5/5 OK | 1 (UCLA Phil 177A Molina-Alonso — read; Kierkegaard/Nietzsche/Heidegger/Sartre confirmed, Beauvoir/Fanon "if time permits", Camus NOT in this syllabus, consistent with the inventory sourcing Camus from Stanford/UVic). Stanford Sabol, UVic Belmonte, UCCS, UNO: HTTP 200 only |
| deg-wol-positive | 4 | 4/4 OK | 3 (Sydney PSYC4730 S1 2026 seminar table; Charter Oak PSY 340 8-week table; Aberystwyth XN16710 weeks 1–8 + outcomes — all match). Metro State PSYC 347: HTTP 200 only, not read |
| deg-mind | 3 | 3/3 OK | 0 — status check only |
| deg-wellbeing | 3 | 3/3 OK | 0 — status check only |
| deg-relational | 3 | 2/3 OK, 1 HTTP 404 (St Gallen, see Defects) | 0 — status check only |
| deg-contemplative | 3 | 3/3 OK | 0 — status check only |
| deg-psychdim | 5 | 4/5 OK, 1 HTTP 404 (Macalester, see Defects) | 0 — status check only |
| deg-philosophy | 4 | 3/4 OK, 1 DNS resolution failure (ND philife, see Defects) | 0 — status check only |

Totals: 39/42 cited URLs retrieved successfully; 2 HTTP 404; 1 DNS failure. 14/42 content-read (3 daoism + 3 buddhism + 1 pragmatism + 3 greek + 1 existentialism + 3 positive). The psychx4 and rem6 sweeps above are URL-status checks only, not topic-map audits.

## Defects and open items (for the owning lanes; this receipt edits no files)

1. **deg-psychdim, Macalester Health Psychology syllabus — cited URL returns HTTP 404.** The inventory cites `.../sites/46/2022/11/Health-Psych-syllabus-F2022.pdf`; direct fetch returns 404. An alternate URL `.../sites/585/2022/11/Health-Psych-syllabus-F2022.pdf` was retrieved successfully this session and read: it is a PSYCH 272 Fall 2022 Health Psychology syllabus whose course summary and topic list (health behavior models, stress, health inequities, chronic illness) match the search-indexed copy of the cited document, with "Jaine" (Strauss) as instructor. The two URLs are very likely the same document, but this receipt records the observed 404 and the alternate path as evidence; the cause of the path difference is not established. One-line fix for the rem6 owner.
2. **deg-wol-greek, Moravian PHI 241 — term mismatch (directly observed).** The inventory says "Spring 2015"; the PDF at the cited URL states "Spring 2016" (Moravian College, Dr. Leon Niemoczynski). Instructor, code and content otherwise match. One-word fix for the owning lane.
3. **deg-relational, St Gallen fact sheet — direct retrieval failed (HTTP 404).** `tools.unisg.ch/.../FS25/eventnumber/8,756,1.00.pdf` returned 404 on direct fetch (raw and comma-encoded variants both tried). The search index holds the exact URL with fact-sheet content matching the inventory's claims (8,756 Verantwortung/Responsibility: Ubuntu, Ethics and Human Rights, FS25, Ngosso Mathieu Thierry, Ubuntu/personhood/communalism, transitional justice, business/environmental ethics, intergenerational justice, migration). Classification: search-index corroborated, direct retrieval unsuccessful — NOT verified-open by this pass, and no claim is made about the cause. Earlier workers' documented openings are not invalidated by this failure; the D2 checkpoint should retest from another environment before the URL is cited to learners in module locators.
4. **deg-philosophy, Notre Dame philife PHIL 221 — direct retrieval failed (DNS resolution failure).** `philife.nd.edu` did not resolve from this environment via either route. The search index holds the document (PHIL 221 Philosophy as a Way of Life, Fall 2011, Prof. Stephen Angle; Hadot, Analects, Five Dialogues, Zhuangzi, Lucretius, Seneca, Zhu Xi, Walden, Shusterman) matching the inventory's claims. Classification: search-index corroborated, direct retrieval unsuccessful — NOT verified-open by this pass.

## What this audit does NOT establish

- Content identity for the 28 cited URLs that were fetched but not read this session (Duke and Georgetown pragmatism pages; Stanford, UVic, UCCS, UNO existentialism; Metro State; all psychx4 and rem6 URLs). Their HTTP 200s establish reachability only.
- Any topic-map-to-syllabus tracing inside the inventories (each topic row's claim that a given syllabus teaches it) — spot-checked only incidentally where full documents were read.
- The D2 checkpoint decision. D2 research may continue, but Phase D3 requires the owner/degrees-strategist checkpoint, which this receipt does not replace.

## Withdrawal

The first pushed version of this receipt alleged that earlier committed revisions of the inventories carried dead or fabricated URLs (lumeriana.org, abergt.org, catalog.yale.edu phil123_ps23, a U Chicago "PPE" PDF, UCSD WI24, an Augsburg REL-221 PDF). `git log -S <string> -- docs/degrees/inventory/` returns no commits for any of those strings: they never appeared in a committed inventory file. The allegation is withdrawn in full; the correction is pushed forward rather than rewriting history.
