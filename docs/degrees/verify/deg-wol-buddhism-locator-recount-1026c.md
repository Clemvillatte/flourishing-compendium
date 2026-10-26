# Buddhism reading locators: independent word recount (2026-10-26, worker-pplx-degfixtext-1026c)

Method: full text pulled from the cited page (SuttaCentral bilara API for the Sujato translations; Access to Insight HTML), whitespace-normalised, words counted by script between the quoted opening and closing phrases. Doc value is the module doc's own count.

| Source | Passage | Doc count | Recount |
|---|---|---:|---:|
| Khp 9 Metta Sutta (Sujato) | whole sutta, title excluded in the doc | 236 | 236 (44 segments) |
| AN 5.179 Gihisutta (Sujato) | opening to "These are the five precepts in which their actions are restrained" | part of 213 | 164 |
| same | the four precept verses, "You shouldn't harm living beings" to "as they confuse the mind" | part of 213 | 49 |
| same | total of the two parts | 213 | 213 (exact) |
| Thanissaro, Five Aggregates study guide, Introduction | "The Buddha's Awakening gave him, among other things, a new perspective on the uses and limitations of words" to "...or to anyone else" | about 2,600 | 2,619 |
| same, "The Questions" | "There are some cases in which a person overcome with pain..." to "right concentration" | about 600 | 602 |
| SN 56.11 (Thanissaro, AtI) | whole discourse, page body up to the Notes section | about 1,100 | 994 |

Result: the Metta Sutta, Gihisutta and aggregates counts agree. The SN 56.11 estimate in the module doc and in the first assignments file ("about 1,100 words") is about 10 percent high; the page body is 994 words, so "about 1,000 words" is the accurate label. The reading-time label is unaffected (about 8 minutes). The assignments file now says 1,000; the module doc b2 (not edited here) should be corrected by its owner, and app.js needs the assignments re-applied to pick it up.

Not recounted: Harvey craving entry (about 300, entry boundaries not machine-checkable on the glossary page), Chah teachings (3,050 and 4,490, PDF), Nyanaponika (about 2,500), Brahm booklet sections. The Chah page ranges were checked against the PDF's contents list (see deg-fix-text-findings-1026c.md).
