# p1g QC source ledger — BI054 / CO005 / CO007 / CO045 / CO050

Agent: agent-p1l-worker-27c22a8e (p1g worker). Date: 2026-10-20.
Status: ACCEPTED (2026-10-20, advisor QC). All five items marked done and QC-pending flags cleared. Unrelated p1g flags preserved (D086, BI009, P055, P143, P027, P157, P179, P190, P092, P093, P151). Outstanding p1l supervisor referral remains in handoff.md.

## Claim-to-opened-passage ledger

| Principle | Claim | Opened source (URL) | Access |
|---|---|---|---|
| BI054 | MN 10 "remains focused on the body in & of itself" sentence | https://www.accesstoinsight.org/tipitaka/mn/mn.010.than.html | full page |
| BI054 | Body-scan procedure: sequential attention through regions; named sensations; absent-sensation is OK | https://ggia.berkeley.edu/practice/body_scan_meditation | full page |
| BI054 | MBSR participant description "toes-to-head 'body scan,' focusing in sequence on individual regions" | https://www.mindful.org/the-8-week-journey-to-now/ | full page |
| CO005 | "The body is our general medium for having a world..." (dancing passage) | https://ia601603.us.archive.org/13/items/a077413/Phenomenology+of+Perception.pdf | full PDF; printed p. 169, running header "the spatiality of one's own body and motility 169" |
| CO005 | Organist passage + "the body is essentially an expressive space" | same PDF, printed pp. 168-169 | full PDF |
| CO007 | "For the things we have to learn before we can do them..." | http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html | full page |
| CO007 | "working memory training programs appear to produce short-term, specific training effects that do not generalize to measures of 'real-world' cognitive skills" | https://journals.sagepub.com/doi/full/10.1177/1745691616635612 | abstract page only |
| CO045 | "Cognitive flexibility: changing perspectives or approaches to a problem..." + inhibit/WM requirement | https://www.psychologie.uzh.ch/dam/jcr:b93485f4-7120-4fe4-9a5b-39a84f4e07e6/Diamond.AnnRevPsych.2013.pdf | full PDF |
| CO045 | DDJ 8 water passage (Legge) | https://www.gutenberg.org/cache/epub/216/pg216.txt | full text |
| CO050 | Beck Institute worksheet questions | https://beckinstitute.org/wp-content/uploads/2021/08/Testing-Your-Thoughts-Worksheet.pdf | full PDF |
| CO050 | MN 10 five-hindrances sentence | https://www.accesstoinsight.org/tipitaka/mn/mn.010.than.html | full page |

## Removed unsupported claims (not restored)

- BI054: inherited "Body scan improves interoception and reduces stress (Khalsa et al., 2018; Tang et al., 2015)" efficacy bullet; "Most of what your body is doing right now you are not aware of"; 15-30 minute duration; judging/changing instructions not in opened sources.
- CO005: inherited embodied-cognition, interoception, power-pose bullets; comparative teaching-effectiveness claim; hunger/posture diagnostic claims.
- CO007: Ericsson, Lövdén, Simons citations (unread); writing/planning/contracts/tax-return generalisation.
- CO045: inherited mental-health/resilience bullet.
- CO050: "reduces depression and anxiety" efficacy claim; Burns/Beck distortions list certification.

## Linked-concept readings and backlink inspection

Read without editing (full bodies, not just backlink searches): Body scan in MBSR (Kabat-Zinn), Embodied cognition, Mindfulness, Yangsheng (cultivating vitality), The lived body, Virtue, The examined life, Growth through practice, Cognitive flexibility, Wu wei, The water metaphor, Flexibility as virtue, Cognitive restructuring, Cognitive distortions, Right view, Doubt as method.

Backlink inspection (actual wikilinks, not prose mentions):

| Concept | Backlinks to my five principles |
|---|---|
| Body scan in MBSR (Kabat-Zinn) | [[BI054]] (verified in file) |
| Embodied cognition | [[CO005]] in "Cited in psychology parallels"; "In the compendium" mentions CO005 as plain text |
| Yangsheng (cultivating vitality) | [[BI054]], [[CO005]] |
| The lived body | [[BI054]], [[CO005]] |
| The examined life | [[CO007]], [[CO050]] |
| Growth through practice | [[CO007]] |
| Cognitive flexibility | [[CO045]] |
| Wu wei | [[CO045]] |
| The water metaphor | [[CO045]] |
| Flexibility as virtue | [[CO045]] |
| Cognitive restructuring | [[CO050]] |
| Cognitive distortions | [[CO050]] |
| Right view | [[CO050]] |
| Doubt as method | [[CO050]] |
| Mindfulness | no wikilink to BI054 found |
| Virtue | no wikilink to CO007 found |

Wu wei (full body read): CO045 wikilink verified at "Cited in philosophy parallels" (line 283). The lived body (full body read): BI054 and CO005 wikilinks verified at "Cited in philosophy parallels" (lines 49 and 53). Body scan in MBSR (full body read): BI054 wikilink verified at "Cited in psychology parallels" (line 51). Embodied cognition (full body read): CO005 wikilink verified at "Cited in psychology parallels" (line 58).

Mindfulness and Virtue backlink gaps: recorded as gaps, no proposals added. Mindfulness's page does not link BI054 directly (it links Body scan in MBSR as related concept); Virtue's page does not link CO007 directly (it links Habituation and Character as habits). Workers may propose cross-band links; they may not directly edit those targets. No proposal was added because the editorial case was not strong: Mindfulness already routes to the scan through Body scan in MBSR, and Virtue routes to the habituation claim through Habituation, so the existing two-step paths carry the relationship.

Candidate inspection (actual wikilinks, not prose mentions):

| Candidate | Backlink | Decision |
|---|---|---|
| Deliberate practice (concept) | no wikilink to CO007 | CO007 removed the Ericsson citation as unread; no proposal warranted without opening Ericsson |
| K128 — Thought record (kernel) | no wikilink to CO050 | K128 describes exactly the evidence-for/against procedure CO050 cites from the Beck Institute worksheet; proposal added to p1g.json |

## Verification

- Baseline: c2a3ee47 (markdown source-of-truth commit).
- All five files validate ok with --base c2a3ee47.
- Front-matter identical, principle statement identical, reflections block identical, no original wikilinks lost (verified against c2a3ee47).
- Build succeeds (5719 entries).
- Full narrative word counts (including Plain words and example, excluding blockquote lines and Markdown URL syntax), measured on the current revision: BI054 272, CO005 290, CO007 254, CO045 235, CO050 255. All within 40-300. (BI054 word count excludes the blockquote lines and Markdown URL syntax.)
