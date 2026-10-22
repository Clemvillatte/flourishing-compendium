# Verification ledger — worker-verify-ppl-25cd5d0 (session 2026-10-22, T0 11:58:25Z)

Read-only quotation-fidelity verification of live bands' recent completions (worker-verify
pattern; no baton held, no band content or state files edited). Method: read the page,
extract every displayed quotation (blockquotes and inline quoted fragments), open the cited
carrier fresh (or an explicitly noted alternative reproduction of the same translation), and
compare word-for-word. Carriers that fail to open are recorded as accessibility notes, not
defects. Scope: quotation checks and selected factual claims only; not whole-page certification.

## Round 1 (started T0+~25 min; entries below verified against unprompted raw fetches of the carriers on 2026-10-22 ~12:32-12:36Z)

Carriers opened this round (fetched without extraction prompts and compared directly): MIT Classics NE Book I
(https://classics.mit.edu/Aristotle/nicomachaen.1.i.html) and wengu.tartarie.com Legge Zhongyong
(http://wengu.tartarie.com/wg/wengu.php?l=Zhongyong&no=0&s=1; same Legge translation as the page's cited
oaks.nvg.org carrier).

### Ending as completion (w1r, done; flagged "advisor QC pending" by its owner)

3 quoted passages checked, 3 PASS — all verified verbatim against a fresh fetch of the cited
MIT Classics NE Book I page (classics.mit.edu/Aristotle/nicomachaen.1.i.html, Ross
translation):
- "But we must add 'in a complete life.' For one swallow does not make a summer..." — exact,
  including the internal single quotes.
- "Must no one at all, then, be called happy while he lives; must we, as Solon says, see the
  end?" — exact (first sentence of the source passage).
- "...a paradox, that when he is happy the attribute that belongs to him is not to be truly
  predicated of him because we do not wish to call living men happy, on account of the changes
  that may befall them..." — exact substring of the source sentence.
No hallucinated quotes found. No repairs needed.

ROUTED (supervisor, via concept-namespace-audit.md): term-existence/identity flag — no opened source
defines "ending as completion" as a named term; the page states its editorial framing and the quotes are
clean, so the question is whether the coined title should be renamed/merged to a source-defined carrier.
Page commit checked: 492e3657b.

### Zhongyong (w1t, fast-track done)

3 quoted passages checked, 3 PASS — all verified verbatim against a fresh fetch of the Legge
Zhongyong chapter 1 text at wengu.tartarie.com (wengu.php?l=Zhongyong&no=0):
- "What Heaven has conferred is called THE NATURE; an accordance with this nature is called
  THE PATH of duty; the regulation of this path is called INSTRUCTION." — exact (wengu prints
  "of duty" in italics; same words).
- "While there are no stirrings of pleasure, anger, sorrow, or joy, the mind may be said to be
  in the state of EQUILIBRIUM. When those feelings have been stirred, and they act in their
  due degree, there ensues what may be called the state of HARMONY." — exact.
- "The path may not be left for an instant. If it could be left, it would not be the path." —
  exact. The inline fragment "when he is alone" also matches the Legge wording ("the superior man is
watchful over himself, when he is alone", ch. I.3). Page commit checked: ef8c20b3b.

ROUTED (w1t owner, via TASKBOARD worker note): two unsupported frequency rankings in the prose,
no quotation defect — "The chapter's most quoted passage then names the two states" (line 15) and
"the Western counterpart this entry is most often compared with" (line 26). Neither ranking is
source-backed; the advisor flagged them for tightening or source support.
ACCESSIBILITY NOTE for the supervisor: the page's cited carrier (oaks.nvg.org/the-mean.html)
returned a server error and then robots-disallow for the fetcher this session. wengu.tartarie.com
carries the same Legge translation (verified: I.1, I.2, I.3, I.4 wording identical) and is fetchable;
the supervisor may want to add it as an alternative carrier (SE074 Pressbooks precedent). No
quotation defect.

Advisor QC (first item, per protocol cadence): scoped pass on both pages; refinements applied —
verbatim comparisons redone against unprompted carrier fetches; the two routed findings above
were added; verdicts remain quotation-scoped and recorded as such.

## Round 2 (T0+~47 min, 2026-10-22 ~12:45Z)

### Early-warning-signal detection in prevention research (w1u, fast-track done, commit 8748c9e25)

5 quoted passages checked, 5 PASS — all verified verbatim against a fresh fetch of the cited
Cambridge Core page (Birchwood, Spencer & McGovern 2000, "Schizophrenia: early warning signs",
APT 6(2)):
- Blockquote "Investigations (e.g. Herz & Melville, 1980...)" — exact.
- "'Dysphoric' symptoms (depressed mood, withdrawal...)" — exact.
- "more accurately conceptualised as 'early warning signs' of psychotic relapse..." — exact
  substring of the source sentence.
- "actively use coping strategies to intervene in the onset of psychosis" — exact substring
  ("...people with psychosis actively use coping strategies to intervene in the onset of
  psychosis (Reference McCandless-Glimcher et al, 1986).").
- "The 'early warning signs' approach to relapse prevention seeks to identify the earliest
  signs..." — exact.
No hallucinated quotes; no repairs needed; no routed findings. The owner's own "raw-verified"
claim is independently confirmed.
