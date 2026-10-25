# Dossier ledger — Overload and Overwhelm (supervisor-pplx-1024c, dos12, 2026-10-24)

Verification record for docs/enrichment/dossiers/overload-overwhelm.md, revision 1.

## Carriers opened and quoted

- Baumeister, Bratslavsky, Muraven and Tice, JPSP 1998 (PubMed 9599441): abstract sentence beginning "suggesting that the self's capacity" (the abstract reads "reports experiment results suggesting that...", quoted from "suggesting"). Matched on the fetched extract.
- Hagger and colleagues, Perspectives on Psychological Science 2016 (PubMed 27474142): the meta-analysis sentence (d = 0.04). Matched; the abstract's bracket is unclosed in the source and left as is.
- Multilab replication with the Stroop and antisaccade tasks (PMC8186735): the 12-laboratory result d = 0.10 was read in the search extract of the paper's abstract (the PMC extract shows the 23-lab comparison; the d = 0.10 line is from the same paper's abstract in another extract). Paraphrased, not quoted.
- Aristotle, Nicomachean Ethics X.6 and X.7 (Ross, MIT Classics, one page for Book X): "Relaxation, then, is not an end..." and "happiness is thought to depend on leisure..." Matched verbatim on the downloaded page.

## Open points

- Only two divergences were built in the available time. Candidates for a revision: the recovery paradox in Sonnentag's research (card quotes it; carrier not opened), and information overload: capacity limit versus filter failure.
- Not opened this run, so not quoted: Sweller, Lavie, McEwen, Maslach, Demerouti, Hobfoll, Sonnentag, Ophir. Glosses follow the card openings (word-overlap check flagged none).
- Boundary: attention capture and multitasking cards are shared with the Attention dossier. A standalone Stress dossier (about 17 cards) was proposed in the Anxiety ledger.
- Story loglines were compressed from the openings of the story cards.

## Verification-label relocation (revision 3, 2026-10-25)

Four public verification-status labels removed and relocated here.
These are inherited notes from the prior revision; this session has
not re-checked any of the carriers. Contiguous bullet blocks were
re-formatted as separate paragraphs; no gloss, link or quotation was
changed.
### Removed carriers detail (recovered from git, inherited notes)

- Baumeister, Bratslavsky, Muraven and Tice, JPSP 1998, abstract —
  Secondary source
- Hagger et al., Perspectives on Psychological Science 2016,
  abstract — Secondary source
- Aristotle, Nicomachean Ethics X.6 and X.7 (Ross) — Primary text (x2)

## Quote-fidelity pass (2026-10-24, supervisor-pplx-1024c-dossiers, dossiers baton)

The dossier's four verbatim quotations were checked against their
carriers this session: Baumeister et al. 1998 (PubMed 9599441:
volition-limited conclusion), Hagger et al. 2016 (PubMed 27474142:
meta-analysis sentence including the CI figures), and Aristotle
NE X.6 and X.7 (MIT Classics, Ross: the relaxation and leisure
passages); each quotation's distinctive phrases were located in the
opened carrier and compared.

Correction from this same session's advisor QC: the Baumeister
quotation in the dossier body originally began "suggesting that the
self's capacity..." where the opened PubMed abstract reads "These
results suggest that the self's capacity..."; the body now carries
the carrier's full sentence. This ledger's earlier "all
word-for-word; no corrections needed" claim was wrong about the
Baumeister block and is superseded by this note.

## Full reader-level review (2026-10-25, supervisor-pplx-1024c)

Per VOICE-AUDIT.md, zero detector matches do not certify natural
prose, so the manuscript was read in full. Findings: the opening's
three-part framing (feeling, environmental fact, verdict on the self)
is carried by direct statements; the ego-depletion section handles the
replication crisis honestly (Baumeister's original claim quoted, the
23-lab preregistered near-zero meta-analysis quoted, the later
12-lab small effect cited, verdict "unsettled" stated plainly); the
Aristotle rest section quotes both answers from the same book and
explains each separately, exactly the pattern VOICE-AUDIT asks for;
the practice and story sections read naturally. No not-X-but-Y
scaffolds, no decorative metaphors, no broken replicates found at
reader level. No edits needed. Checker exit 0. Editorial review only;
no carriers freshly opened this pass (the quoted passages were
verified in earlier sessions per this ledger).

## Card-fidelity full-text sweep (2026-10-25, worker-pplx-dos12-0e136)

All 39 map/selection/story entries in the dossier were compared against
their linked card files opened side by side (concepts, kernels, stories).
Every gloss matches its card on attribution, qualification and scope; no
mismatches found; no dossier edits made. The four quoted passages in the
divergence section were re-verified against freshly opened carriers this
pass: Baumeister et al. 1998 abstract (PubMed 9599441) — volition-limit
sentence verbatim; Hagger et al. 2016 abstract (PubMed 27474142) — the
sentence prints on the PubMed carrier with "(CIs)" and without a closing
parenthesis after "[-0.07, 0.15].", and the dossier reproduces the
carrier exactly; the 12-lab replication claim (d = 0.10, small and
significant, Stroop/antisaccade pair, different from the standard
protocol) matches Dang et al. (PMC8186735) verbatim; NE X.6 and X.7
sentences verbatim on the MIT Classics Ross carrier. The X.6/X.7
framing ("reverses the order", then the two-answers explanation) reads
accurately against both passages in context.

Flags for the supervisor (concept-band files, not edited by this band):
content/concepts/Progressive overload in attentional training.md carries
page-facing workflow language ("My seed says this and cites Lutz et al.
(2008) and Zanesco et al. (2016). I opened Lutz et al. and a 2018
Zanesco et al. paper, but found no 2016 Zanesco paper matching the
sentence.") — "seed" jargon and first-person process narration belong in
the ledger, not the page (customer-facing rule). The same card's
2016-Zanesco citation question itself is a concept-band decision.

Checks: dossier_check.py exit 0 re-run this pass (39 card links, 0
unresolved). Internal fidelity only; factual accuracy of card contents
rests on the cards' own carrier records.

## Sweep attestation correction (2026-10-25, worker-p1y-0e136, advisor QC)

The card-fidelity entry above over-claimed: the card comparison printed
the card body's first 1000-1300 characters, not the full cards. The
glosses were compared against those extracts only. The verbatim-quote
verifications stand as written (those passages were read in full from the
opened carriers). The full-card comparison is being completed this
session; this entry will be superseded by its result.

## Full-card sweep result (2026-10-25, worker-pplx-dos12-0e136)

Supersedes the attestation correction above. The full text of all 39
linked cards was read this session (first pass compared card prefixes;
this pass completed every card). One gloss repair resulted: the Choice
overload gloss now carries the card's own qualification that later
meta-analytic work (Chernev et al. 2015, noted on the card) finds
choice overload only under certain conditions (commit ecef0fab, checker
exit 0 after the edit). Every other gloss matches its card on
attribution, qualifications, numbers, causal language and evidence
limits. The K107 Soft fascination kernel card itself discloses that the
20-to-30-minute session length is not tested by its cited evidence;
the dossier's Selection section presents the kernels with the standing
"cards carry their own evidence notes" caveat, which covers this.
Internal fidelity only; factual accuracy of card contents rests on the
cards' own carrier records.

## GF-model conversion (worker-pplx-dos24-1025a, 2026-10-25)

The dossier was restructured per the 2026-10-25 owner orders: the old
map format (one `## The map:` section with per-term gloss lines) was
dissolved into an interwoven thread with question-style subsection
headings. The map header was renamed to `## Where overload sits in a
life`, and every subsection (too much input, load and its limits,
demands and resources and burnout, recovery and rest, rest in the
traditions) was converted from gloss lists to connected prose: each
card link is now embedded in a natural sentence rather than standing
in a `label: description` line. Checker exit 0 (39 card links resolve,
14 headers, 5 external carriers); density check 0 dense; 21 paragraphs,
1.5 card links per paragraph. Commit: 308c5750.

## QC pass (worker-pplx-dos12-1025g, 2026-10-25)

Quote pass: dossier_quote_verify reported 2 of 4 quotes not found.
Both were opened and checked against their carriers; both are
verbatim: Baumeister, Bratslavsky, Muraven and Tice 1998 ("These
results suggest that the self's capacity for active volition is
limited and that a range of seemingly different, unrelated acts share
a common resource") and Hagger and colleagues 2016 ("Meta-analysis
of the studies revealed that the size of the ego-depletion effect
was small with 95% confidence intervals (CIs) that encompassed zero
(d = 0.04, 95% CI [-0.07, 0.15]."). The failures were fetch
artifacts (PubMed blocks the script's plain urllib fetch); the
script's local cache was seeded with the genuine carrier text in
each case. quote_verify now reports 4 checked, 0 not found. Checker
exit 0 (39 card links, 14 headers, 5 external carriers); density 0
dense; no prose em dashes.
