# Psychological Dimensions: reasoning lectures

Verifier `verifier-05ceabfb`, baton `deg-verify-b`; checked 2026-10-28,
receipt begun at 13:59 UTC. This pass revisits pool entry 43 at
`870f3a814` and supplies source evidence for its owner, without changing
the pool, live assignments or coverage verdict.

## Access and identity

The official [NPTEL course page](https://nptel.ac.in/courses/109103134)
identifies the course, instructor and institute; its returned HTML maps
Week 11 “Reasoning - 01” to `LXYw-SGeCLs` and “Reasoning - 02” to
`5qYUqYN8GJ4`.
Kashyap's [IIT Guwahati faculty page](https://www.iitg.ac.in/nkashyap/)
independently identifies him as Professor in Cognitive and Experimental
Psychology and lists his psychology PhD.

Both watch-page fetches now return English timestamped transcripts as well
as the recording identity and duration
([Reasoning 01](https://www.youtube.com/watch?v=LXYw-SGeCLs);
[Reasoning 02](https://www.youtube.com/watch?v=5qYUqYN8GJ4)).
This closes the previously recorded inability to retrieve their
instructional text in this environment. It does not establish audiovisual
playback or accuracy of every statement in either recording.

## Inspection scope

| Recording | Page-stated duration | Text actually inspected | Outcome |
|---|---|---|---|
| [Reasoning 01](https://www.youtube.com/watch?v=LXYw-SGeCLs) | 48:42 | Continuous returned transcript from 22:24 through 45:04, plus the closing recap; corresponding mirrored PDF section, slide markers 22:51 through 44:05. | Dedicated treatment of deduction, syllogisms, belief bias, conditional reasoning and the Wason task is content-confirmed. Terminology concerns below prevent an unqualified teaching recommendation. |
| [Reasoning 02](https://www.youtube.com/watch?v=5qYUqYN8GJ4) | 57:54 | Continuous returned transcript from 05:58 through approximately 25:00, plus the closing recap; corresponding mirrored PDF section through its 25:29 marker. | Dedicated induction teaching is content-confirmed, including the late-paper example and typicality/diversity comparisons. The later judgment/heuristics material was not continuously read and receives no content clearance here. |

The combined **page-stated available runtime is 1:46:36**:
2,922 + 3,474 = 6,396 seconds. It is neither assigned time nor credited
degree hours; no whole-video assignment is proposed by this receipt.

## Useful teaching passages and a quality flag

- **Belief bias:** the first transcript introduces the topic at 31:58 and
  illustrates how a familiar belief can interfere with evaluating an
  argument's form; conditional reasoning begins at 34:37
  ([Reasoning 01](https://www.youtube.com/watch?v=LXYw-SGeCLs)).
- **Testing a conditional:** the first transcript's Wason sequence is
  located at 42:23–45:04, including the vowel and odd-number checks and the
  discussion of confirmation-seeking
  ([Reasoning 01](https://www.youtube.com/watch?v=LXYw-SGeCLs)).
- **Overgeneralization:** the second transcript's late-paper example,
  10:56–15:10, makes the practical cost of an uncertain generalization
  explicit: a student may fail to ask for an extension that is available
  ([Reasoning 02](https://www.youtube.com/watch?v=5qYUqYN8GJ4)).
- **Quality flag:** at 40:28–41:18 the first transcript contains
  contradictory wording about denying the consequent, followed by a
  concluding rule; the earlier explanation also repeatedly applies
  “valid” to premises and statements
  ([Reasoning 01](https://www.youtube.com/watch?v=LXYw-SGeCLs)).
  These are reasons for a recording/slide check before using this as a
  learner's sole introduction to formal logic. Whether the contradictions
  originate in speech, transcription or both is unestablished.

My mission-fit recommendation is to review the belief-bias and
overgeneralization passages first. They offer concrete questions about
judgment and avoid importing the course's entire cognitive-science scope.
No assertion that these clips alone teach the whole reasoning row is made.

## Retrieval and reproducibility

The cleaned official course fetch omitted the lesson mapping, so the
same URL was fetched with `return_html=true`; the mapping above comes
from its embedded `courseOutline`. Watch pages were fetched without a
prompt, first at 50,000 characters and then at 100,000/110,000 to remove
the reported truncation. The resulting transcript text extends to closing
thanks in both cases, although only the inspection windows above were
continuously reviewed.

The [Lecture 26 PDF](http://digimat.in/nptel/courses/video/109103134/lec26.pdf)
and [Lecture 27 PDF](http://digimat.in/nptel/courses/video/109103134/lec27.pdf)
failed in the fetch tool. A subsequent HTTP curl download succeeded:
27 and 31 pages respectively, text extracted with `pdftotext -layout`.
HTTPS attempts on that mirror failed TLS negotiation. These PDFs are
corroborating mirror evidence, not newly recommended canonical assignments.

PDF SHA-256 values:

```text
Lecture 26 bf6976a2257a3cf04ed26a91fb41ad4eb214195bf528a15d5e755acb6aecacc3
Lecture 27 b2540a51e2f3c3ae59d2901f2d31136f0cba74da525f19579b467fb148672bf9
```

The PDF slide markers and watch-transcript cue times differ in places.
The proposed locators above use watch-transcript cue times; do not copy
the PDF markers into video assignments without checking them. Adviser
tooling is unavailable, and assignment acceptance remains with the
independent reviewer and degree owner.
