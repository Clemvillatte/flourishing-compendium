# p1r source and QC ledger: worker-p1r-e3324a34

Role taken after releasing p1s; repairs cover P087, P081, P083, P071 and P079. Session UTC start remains 2026-10-23T12:15:27Z.

## P087: effective freedom and the correct Dewey locator

Opened with fetch on 2026-10-23:

- [John Dewey, Human Nature and Conduct, Project Gutenberg plain text](https://www.gutenberg.org/cache/epub/41386/pg41386.txt).
- [John Dewey, page-numbered HTML edition](https://www.gutenberg.org/files/41386/41386-h/41386-h.htm), fetched in full, relevant section read directly.

The chapter is Part Four, section III, “What is Freedom?”, printed pp. 303 to 313, not Part Three, section III. All existing block quotations are genuine and retained: “For we need freedom…” and physician/engineer, p. 303; “Intelligence is the key to freedom in act”, p. 304. Corrected all body and source-list locators.

New prose distinguishes three elements of freedom, efficient execution of another's wishes, knowledge of conditions, and the social/economic support needed for actual action. Relevant source pages 303 to 307 were read. The “you may” Plain words re-derives nominal permission versus an actual possibility rather than repeating the opening definition. The tenant-form example is illustrative; no claim that a completed challenge guarantees success.

Independent advisor QC:

- A read-only exact-source check confirmed all current quotations and the locator error.
- A separate editorial/source advisor reviewed the draft and returned PASS: three elements, slave/efficiency distinction, social/economic qualifications, Plain words and practical boundary supported.

Validation: 252 prose words; zero hard errors. Frontmatter, protected sections and inherited links retained. Existing self-efficacy/learned-helplessness parallels are unchanged and outside this narrow source certification.

## P081: immediate enjoyment and reflective criticism

Opened [Dewey, Experience and Nature, Internet Archive full OCR text](https://archive.org/stream/in.ernet.dli.2015.188224/2015.188224.Experience-And-Nature-John-Dewey_djvu.txt) with fetch. Read printed pp. 322 and 326 directly. Both existing quotations match after line-wrap normalization; the OCR splits “perpetuating” across lines and has errors in unrelated words, so no unmarked OCR emendation was used for a new quotation.

Retained the substantive body and quotations. Replaced the procedural Plain words question with an explanation of immediate enjoyment and asking about its place, conditions and consequences. Removed the odd suggestion to test whether enjoyment “survives the description”. The swimming comparison is explicitly the compendium's proposal, not empirical evidence.

## P083: acquired interest and persistence

Opened [Dewey, Democracy and Education](https://www.gutenberg.org/cache/epub/852/pg852.txt) and [James, Talks to Teachers](https://www.gutenberg.org/files/16287/16287-h/16287-h.htm) with fetch, full text. Read Dewey chapter 10, §1 around “Deliberation will be perfunctory…” and his explicit interest/discipline connection. Read James chapter X, native/acquired interest, railway timetable illustration and the two existing quoted teacher instructions. All retained quotations match after line-wrap normalization.

Repair: replace a procedural question with a shelf/measurements analogy that explains how a subject gains significance through an existing purpose. The football example now compares learning and transfer with datasets rather than betting odds. It is a proposed exercise, not a claimed efficacy finding.

## P071: plasticity without unlimited rebuilding

Opened [Human Nature and Conduct, part II, §2](https://standardebooks.org/ebooks/john-dewey/human-nature-and-conduct/text/chapter-2-2) and [§3](https://standardebooks.org/ebooks/john-dewey/human-nature-and-conduct/text/chapter-2-3) with fetch. Read both whole sections. Both retained block quotations match the text, allowing typographic apostrophe normalization in the new §3 sentence.

Repair: specify that the opening discussion of highly flexible impulses concerns the young; retain Dewey's account of adult possibilities and the inertia of custom without promising universal rebuilding. Replace “what feels like your nature is mostly your habits” and “what was built can be rebuilt” with a concrete fear/habits/surroundings explanation. The maths illustration tests current support rather than guessing which teacher or classroom caused a person's history. No neuroplasticity efficacy claim added; inherited Draganski parallel remains unchanged.

## P079: plural consequences, not the one favoured result

Read [Dewey, Human Nature and Conduct, part III, section VI, “The Nature of Aims”](https://www.gutenberg.org/files/41386/41386-h/41386-h.htm), printed pp. 225, 228 and 229, from the full fetch already opened. All three retained quotations verified with line wrapping and the inserted page marker removed. Added exact printed locators in a new source entry while retaining the original carrier.

Short taper repair: replace a procedure-only Plain words with an explanation of why the favoured outcome cannot exclude other effects from consideration. The friend/business example now compares drafts, not experimental deception; review concerns actual outcomes, not a promise of better results.

## Combined verification and scope

Seventeen repaired principles across the two successively held bands passed the validator against session baseline `70d22b3007cf39ea6a4734cec92b152058c9450d`: 17 checked, zero failures. The repository build succeeded with 5,888 entries. Protected frontmatter, principle statements, reflections, original wikilink markup and inherited external targets were retained. Remaining validator notices concern absent or short Related concepts sections, not hard errors.

Prose words: B012 252; B017 222; B030 220; B049 243; B078 237; B096 168; B113 246; B114 221; B126 248; B141 238; B150 222; B165 209; P071 221; P079 219; P081 193; P083 210; P087 252. Every repaired body is within the 40–300 range.

The 31 complete quoted body blocks match text in previously opened fetch carriers after explicit normalization of whitespace, Markdown presentation, typographic quotation marks and inserted Gutenberg page labels. The two initially unmatched carriers were rechecked directly: James's emphasis markup around the “Begin with” sentence, and nested blockquote markup plus internal quotation styling in the dishes excerpt. Shantideva's multiline verse was checked as one continuous quotation. This check supplements the locator and interpretive checks above; it does not certify untouched protected parallels or reflections.

Final humanizer cleanup removed unnecessary defensive study disclaimers from the clearly illustrative P081 and P083 exercises. Neither example is presented as an empirical finding.

Independent review limits remain as recorded in the p1s ledger. The ten-item milestone advisor attempt stopped with a credits-exhausted failure and is not counted as a pass. Later main-worker checks, including the complete-quotation comparison and baseline validator, are not being misrepresented as independent QC. Cross-band B022/B160/D148/D174 flags remain for the supervisor; P087's former locator flag has now been repaired under the p1r baton. B096's immutable title still uses “faculty” where the checked SN 46.51 passage concerns an awakening factor.
