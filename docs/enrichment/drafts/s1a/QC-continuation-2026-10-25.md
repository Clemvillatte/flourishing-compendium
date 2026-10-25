# QC continuation 2026-10-25 (storyteller-pplx-s1a-1025z)

Finishing pass on the unpublished s1a drafts. No story pages, principle bodies, shared
progress or queues were touched.

## Opened-source checks (independent re-verification)

### s1a-031 (The All Is Aflame, B016)
[Sutta page](https://www.dhammatalks.org/suttas/SN/SN35_28.html) reopened 2026-10-25.
Quotes 1-3 of the ledger confirmed verbatim ("Monks, the All is aflame...", the three
fires, the disenchantment-dispassion-release sequence). The closing-release sentence in
the draft ("through lack of clinging/sustenance, were released from effluents") matches
the live page's wording exactly. Draft clean.

### s1a-043 (Yan Hui Forgets Everything, D047)
[Legge Zhuangzi PDF](https://metis.ethz.ch/wp-content/uploads/2023/03/Zhuangzi_EnglishLegge.pdf)
reopened 2026-10-25. "Yan Hui said, 'I am making progress.'" verbatim (appears twice);
"I have ceased to think of benevolence and righteousness" verbatim; "I have lost all
thought of ceremonies and music" verbatim; the closing exchange matches ("I sit and
forget everything... This I call sitting and forgetting all things", with the teacher's
reversal). Draft clean.

### Mechanical pass (corrected 2026-10-25)
All eight drafts checked (031, 032, 035, 036, 037, 039, 042, 043) pass
`story_check --context draft` with 0 errors. Of these, 035/037/039 were later
confirmed ALREADY PUBLISHED (ST488/ST490/ST491 — see ROUTE continuation); the
unpublished ones are 031, 032, 042, 043 (036 was later found published as ST489 — the "36." title prefix defeated title-based matching; see ROUTE). Front matter reconciled with lane state.
All 26 s1a-origin published pages pass `--context published` except ST432 (1 word over
cap) and ST184 — CORRECTED 2026-10-25: ST184 is an unmodified legacy-format page
(the 2026-10-18 import; the s1a-028 upgrade was never applied), failing by
construction plus the word floor; the prepared replacement body remains available to
the supervisor. ST432 routed in ROUTE for a one-word trim.

## Review s1a-032 (2026-10-25, same teller — scope: quotes + principle/overlap, not a full narrative read)

Quotes: the clinical-description span re-extracted character-for-character from the
live University of Michigan Press chapter PDF (Givan 2010) — it reads "the third and
fourth fingers of his left hand were bent backward at their base at an abnormal
angle, and the upper joints were partially flexed", matching the draft exactly; the
caravan-fire/recovery sentences and the source's "useless or paralyzed... misleading"
caveat confirmed on the same carrier. Principle P192 has no story backlinks
(zero-story); no existing page tells the Django story (entity sweep clean). The
draft's full narrative prose was written and QC'd by its original teller (advisor
rounds recorded in its QC notes); this session's check covers quotations, principle
mapping and overlap only. VERDICT: clean on the checked dimensions.

## Quote re-verification s1a-042 (2026-10-25, same teller)

All six ledger quotes verified against the live sacred-texts.com page (SBE 35,
Milindapañha Book II, Rhys Davids): the name disclaimer, "no chariot... mere empty
sound", the "I have spoken no untruth" reply, "Very good! Your Majesty has rightly
grasped", the "And just even so" application, and the Vajira-verse closing. The
page carries a [28] page-number marker inside the "just even so" sentence — page
furniture, correctly omitted from the draft's quoted span. Resolution accounting for
all six ledger quotes: the name disclaimer, the "no chariot" line and the Vajira-verse
close ("Just as it is by the condition precedent...") returned VERBATIM on the first
comparison pass; the three middle passages ("I have spoken no untruth", "Very good!
Your Majesty has rightly grasped", "And just even so") were returned NOT FOUND on
that pass due to quote-mark style in my probe, and were recovered verbatim on a
directed re-examination of the same page. No quote remains unresolved. s1a-042:
quotes clean.

## Cross-lane verification note (2026-10-25, logged from s1a)

- s1b-038 (Kwang-dze Refuses the Grand Burial, D192, Legge introduction via
  100jia.net): all three key spans verified verbatim against the live page (the
  crows-and-kites exchange with Legge's exact "to take from those and give to these
  would only show your partiality", and the heaven-and-earth coffin reply). D192 has
  no story backlinks; no overlap. Clean, ready for registration.

## Verification-pass addendum (2026-10-25, s1a holder, ~T+49)

- Cross-lane story_check batch: every draft in s1e and s1c reports 0 errors; every s1a draft processed this session reports 0 errors.
- URL liveness sweep over the 34 distinct external carriers cited by the s1a drafts marked ready this session: 31/34 return HTTP 200 directly. The three 403s are known bot-walls, each confirmed live via alternate route this session: brocku.ca (Cloudflare challenge; identical chapter text verified at Gutenberg #53910, brocku wording confirmed via search index), ctext.org (JS shell to curl; Legge quotations confirmed via ctext's own indexed text and two independent hosts of Legge's Texts of Taoism), web-japan.org (nipponia33 pagoda pages; quotes verified earlier this session via the alternate fetch route).
- Remaining qc_pending in s1a: s1a-028 and s1a-029 (prepared rung-4 upgrades, routed to the supervisor per the separation guard), s1a-038 (quotes verified; principle mapping flagged for supervisor: D022 rejected, D034 candidate), s1a-051 corrected to drafting then completed to ready this pass.
- Flag for supervisor: dipama.com restructured; the coverage-matrix string "whatever is happening is to be noticed" (s1a-024) could not be re-located anywhere on the restructured site.
- Flag for supervisor: the supervisor and assistant-supervisor batons read RELEASED at ~T+42 this session; no supervisor was live for the flagged dispositions (s1c-039 ST430 overlap, s1a-023 duplication/scope, s1a-024 string, s1a-038 retargeting, s1a-028/029 upgrades).
