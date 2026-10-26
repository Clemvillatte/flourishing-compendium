#!/usr/bin/env python3
"""deg-wol-buddhism integration: attach 9 modules + sources to fcAcademyData.

Follows docs/degrees/integration/deg-wol-buddhism-handoff.md.
durationHours per the handoff spec: b1 4.5, b2 3.5, b3 2.5, b4 2.25,
b5 3.75, b6 5.0, b7 3.5, b8 12, b9 2.75. Packet 2,360 min = 39h20m.
"""
import re, json, hashlib, sys, os

ROOT = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
MODDIR = os.path.join(ROOT, 'docs/degrees/modules/deg-wol-buddhism')
APPJS = os.path.join(ROOT, 'site/assets/app.js')

HASHES = {
    'b1-ethics-first-orientation': '4ba970f5',
    'b2-four-noble-truths': 'c6594dd9',
    'b3-sila-in-practice': '1ac70a51',
    'b4-foundational-meditations': 'cc509e16',
    'b5-thai-forest-way': 'd9194a3e',
    'b6-zen': '9fc0c2c9',
    'b7-insight-and-secular': '00033c84',
    'b8-capstone': '45bac730',
    'b9-elective-mind-on-the-cushion': 'aa52b7d2',
}
for name, want in HASHES.items():
    h = hashlib.sha256(open(os.path.join(MODDIR, name + '.md'), 'rb').read()).hexdigest()[:8]
    assert h == want, f'{name} hash mismatch: {h} != {want}'
print('hashes verified: all 9 match band record')

def read(f):
    with open(os.path.join(MODDIR, f)) as fh:
        return fh.read()

def section(text, heading):
    m = re.search(rf'## {re.escape(heading)}\n(.*?)(?=\n## |\Z)', text, re.S)
    return m.group(1) if m else ''

def numbered_items(text):
    items = []
    for m in re.finditer(r'^\d+\.\s+(.*?)(?=^\d+\.\s+|^## |\Z)', text, re.S | re.M):
        items.append(' '.join(m.group(1).split()))
    return items

# ---- Sources (minted; verification labels reflect the receipts; see ledger + verify/) ----
SOURCES = [
    dict(source_id='BUD-B1-01', youtube_id_or_url='TpbWVaXBV4c', canonical_url='https://www.youtube.com/watch?v=TpbWVaXBV4c',
        title='Brahm, Buddhist Values (BSWA)', presenter='Ajahn Brahm', host='Buddhist Society of Western Australia channel',
        duration='54:16', topic_ids='BUD-B1', level='Foundations', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B1-02', youtube_id_or_url='Nq7YmbYFJkA', canonical_url='https://www.youtube.com/watch?v=Nq7YmbYFJkA',
        title='Thanissaro, The Five Precepts for the Mind', presenter='Thanissaro Bhikkhu', host='Dhamma Talks by Thanissaro Bhikkhu channel',
        duration='13:16', topic_ids='BUD-B1', level='Foundations', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipt B-V05'),
    dict(source_id='BUD-B1-03', youtube_id_or_url='svWaWFOpxXw', canonical_url='https://www.youtube.com/watch?v=svWaWFOpxXw',
        title='Dhammadipa, The Four Immeasurable Minds (Metta Centre)', presenter='Bhante Dhammadipa', host='Metta Centre channel',
        duration='2:09:06', topic_ids='BUD-B1', level='Foundations', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipt B-V04 (deg-verify-a)'),
    dict(source_id='BUD-B1-04', youtube_id_or_url='https://suttacentral.net/an5.179/en/sujato', canonical_url='https://suttacentral.net/an5.179/en/sujato',
        title='AN 5.179 Gihisutta (Sujato translation)', presenter='Bhikkhu Sujato (translator)', host='SuttaCentral',
        duration='', topic_ids='BUD-B1', level='Foundations', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B1-05', youtube_id_or_url='https://suttacentral.net/kp9/en/sujato', canonical_url='https://suttacentral.net/kp9/en/sujato',
        title='Metta Sutta Khp 9 (Sujato translation)', presenter='Bhikkhu Sujato (translator)', host='SuttaCentral',
        duration='', topic_ids='BUD-B1', level='Foundations', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B1-06', youtube_id_or_url='https://thebuddhistcentre.com/text/loving-kindness-meditation', canonical_url='https://thebuddhistcentre.com/text/loving-kindness-meditation',
        title='Five-stage loving-kindness method (the Buddhist Centre)', presenter='', host='the Buddhist Centre (Triratna)',
        duration='', topic_ids='BUD-B1', level='Foundations', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B2-01', youtube_id_or_url='DLPsIhDWZp4', canonical_url='https://www.youtube.com/watch?v=DLPsIhDWZp4',
        title='Dreyfus, Four Noble Truths session 1 (Shantideva Center)', presenter='Georges Dreyfus', host='Shantideva Center',
        duration='1:20:34', topic_ids='BUD-B2', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipt B-V01'),
    dict(source_id='BUD-B2-02', youtube_id_or_url='https://www.accesstoinsight.org/tipitaka/sn/sn56/sn56.011.than.html', canonical_url='https://www.accesstoinsight.org/tipitaka/sn/sn56/sn56.011.than.html',
        title='SN 56.11 Dhammacakkappavattana Sutta (Thanissaro translation, AtI)', presenter='Thanissaro Bhikkhu (translator)', host='Access to Insight',
        duration='', topic_ids='BUD-B2', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipt B-T01'),
    dict(source_id='BUD-B2-03', youtube_id_or_url='https://www.accesstoinsight.org/tipitaka/sn/sn56/sn56.011.harv.html', canonical_url='https://www.accesstoinsight.org/tipitaka/sn/sn56/sn56.011.harv.html',
        title='Harvey, Craving glossary (AtI)', presenter='Peter Harvey', host='Access to Insight',
        duration='', topic_ids='BUD-B2', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B3-01', youtube_id_or_url='W6pGAvtBmCw', canonical_url='https://www.youtube.com/watch?v=W6pGAvtBmCw',
        title='Brahm, What the Buddha Taught (Everyday Dhamma Network remaster, Dhammaloka 2003)', presenter='Ajahn Brahm', host='Everyday Dhamma Network',
        duration='49:44', topic_ids='BUD-B3', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B3-02', youtube_id_or_url='https://bswa.org/teaching/buddhism-ajahn-brahm/', canonical_url='https://bswa.org/teaching/buddhism-ajahn-brahm/',
        title='Brahm, What Is Buddhism? booklet (BSWA, 2016)', presenter='Ajahn Brahm', host='Buddhist Society of Western Australia',
        duration='', topic_ids='BUD-B3', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B3-03', youtube_id_or_url='https://plumvillage.org/mindfulness/the-5-mindfulness-trainings/', canonical_url='https://plumvillage.org/mindfulness/the-5-mindfulness-trainings/',
        title='The Five Mindfulness Trainings (Plum Village, revised 2022)', presenter='', host='Plum Village',
        duration='', topic_ids='BUD-B3', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B4-01', youtube_id_or_url='dyUCvFlDL8w', canonical_url='https://www.youtube.com/watch?v=dyUCvFlDL8w',
        title='Brahmali, Mindfulness of Breathing (BSWA)', presenter='Ajahn Brahmali', host='Buddhist Society of Western Australia channel',
        duration='2:09:41', topic_ids='BUD-B4', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md; reviews/deg-wol-buddhism-b4-delta-addendum-1026h.md; verify/deg-wol-buddhism-b4-caption-route-1026e.md'),
    dict(source_id='BUD-B5-01', youtube_id_or_url='https://www.amaravati.org/ajahn-chah-collection', canonical_url='https://www.amaravati.org/ajahn-chah-collection',
        title='Chah, Food for the Heart (Amaravati, free distribution, CC BY-NC-ND 2.0 UK)', presenter='Ajahn Chah', host='Amaravati Buddhist Monastery',
        duration='', topic_ids='BUD-B5', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipts B-V16, B-V29'),
    dict(source_id='BUD-B5-02', youtube_id_or_url='SElyOzgkxjo', canonical_url='https://www.youtube.com/watch?v=SElyOzgkxjo',
        title='Sumedho, talk (BSWA)', presenter='Ajahn Sumedho', host='Buddhist Society of Western Australia channel',
        duration='', topic_ids='BUD-B5', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipt B-V33 (full transcript read)'),
    dict(source_id='BUD-B6-01', youtube_id_or_url='UVXpdAavGgQ', canonical_url='https://www.youtube.com/watch?v=UVXpdAavGgQ',
        title='Kirchner, Buddhism, Zen, and the Question of Suffering (The Buddhist Society)', presenter='Thomas Kirchner', host='The Buddhist Society',
        duration='1:28:04', topic_ids='BUD-B6', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipt B-V31 (full transcript read)'),
    dict(source_id='BUD-B6-02', youtube_id_or_url='jPxuvitdsRI', canonical_url='https://www.youtube.com/watch?v=jPxuvitdsRI',
        title='Kirchner, Thoughts on Meditation (The Buddhist Society)', presenter='Thomas Kirchner', host='The Buddhist Society',
        duration='1:40:16', topic_ids='BUD-B6', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipt B-V31 (full transcript read)'),
    dict(source_id='BUD-B7-01', youtube_id_or_url='Hhlj_SU9SAE', canonical_url='https://www.youtube.com/watch?v=Hhlj_SU9SAE',
        title='Batchelor, A Secular Buddhism (Radboud Reflects)', presenter='Stephen Batchelor', host='Radboud Reflects channel',
        duration='1:26:35', topic_ids='BUD-B7', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipt B-V28 (Burma/Vipassana passage read)'),
    dict(source_id='BUD-B7-02', youtube_id_or_url='https://www.insightmeditationcenter.org/books-articles/introduction-to-meditation-transcripts/', canonical_url='https://www.insightmeditationcenter.org/books-articles/introduction-to-meditation-transcripts/',
        title='Fronsdal, Introduction to Mindfulness Meditation, Week 1 transcript (IMC)', presenter='Gil Fronsdal', host='Insight Meditation Center',
        duration='', topic_ids='BUD-B7', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B7-03', youtube_id_or_url='https://www.audiodharma.org/series/24654', canonical_url='https://www.audiodharma.org/series/24654',
        title='Fronsdal, Class 1 recording (AudioDharma series 24654)', presenter='Gil Fronsdal', host='AudioDharma',
        duration='1:26:55', topic_ids='BUD-B7', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B9-01', youtube_id_or_url='PcR_fI6p9k8', canonical_url='https://www.youtube.com/watch?v=PcR_fI6p9k8',
        title='Thanissaro, Hindrances (Dhamma Talks by Thanissaro Bhikkhu)', presenter='Thanissaro Bhikkhu', host='Dhamma Talks by Thanissaro Bhikkhu channel',
        duration='0:25:00', topic_ids='BUD-B9', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-buddhism.md; receipt B-V12 (deg-verify-a)'),
    dict(source_id='BUD-B9-02', youtube_id_or_url='https://accesstoinsight.org/lib/authors/nyanaponika/wheel026.html', canonical_url='https://accesstoinsight.org/lib/authors/nyanaponika/wheel026.html',
        title='Nyanaponika Thera, The Five Mental Hindrances and Their Conquest (The Wheel No. 26, BPS)', presenter='Nyanaponika Thera', host='Buddhist Publication Society (via Access to Insight)',
        duration='', topic_ids='BUD-B9', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
    dict(source_id='BUD-B9-03', youtube_id_or_url='https://www.accesstoinsight.org/lib/study/khandha.html', canonical_url='https://www.accesstoinsight.org/lib/study/khandha.html',
        title='Thanissaro, The Five Aggregates: A Study Guide (AtI)', presenter='Thanissaro Bhikkhu', host='Access to Insight',
        duration='', topic_ids='BUD-B9', level='Intermediate', mission='deg-wol-buddhism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-buddhism.md'),
]

# ---- Module entries ----
MODULES = []

def parse_module(n, fn, question, description, difficulty, duration, required, optional, activity, rubric=None):
    text = read(fn + '.md')
    outcomes = numbered_items(section(text, 'Outcomes'))
    assert outcomes, f'no outcomes for {fn}'
    MODULES.append(dict(
        id=f'mod-bud-{n}',
        degree_id='deg-wol-buddhism',
        title=re.match(r'# (.+)', text).group(1).strip(),
        question=question,
        description=description,
        outcomes=outcomes,
        prerequisites=[f'mod-bud-{i}' for i in range(1, n)] if n > 1 else [],
        requiredMedia=[{'source_id': s, 'level': difficulty} for s in required],
        optionalMedia=[{'source_id': s, 'level': difficulty} for s in optional],
        activity=activity,
        rubric=rubric or [],
        durationHours=duration,
        difficulty=difficulty,
        wiki_readings=[],
        gaps=[],
    ))

# b1
parse_module(1, 'b1-ethics-first-orientation',
    question='How do the five precepts, the four immeasurables and a first goodwill sitting serve as the ethical floor and bridge into sustained practice for a walking learner?',
    description='L1 Orientation. Entry module; no prerequisites; no Buddhist background assumed. The L2 element (guided metta sitting, precepts case) is fully guided.',
    difficulty='Foundations', duration=4.5,
    required=['BUD-B1-01','BUD-B1-02','BUD-B1-03','BUD-B1-04','BUD-B1-05','BUD-B1-06'],
    optional=[],
    activity='Graded: one written piece (~300 words) with the walk-map statement, the five precepts with everyday examples, two cases (one straightforward, one conflicted), two dated metta sitting records with the observation sentence, and the values line.',
    rubric=['precepts named and paraphrased','case reasoning','practice record','walk map statement','four immeasurables notes'],
)
# b2
parse_module(2, 'b2-four-noble-truths',
    question='What are the four noble truths as four tasks the discourse itself assigns, and how do they run on one real difficulty in your own life?',
    description='L2 Guided application. Prerequisites: b1 exit criteria (five precepts stated, two metta sittings logged, walk coverage/exclusions stated).',
    difficulty='Intermediate', duration=3.5,
    required=['BUD-B2-01','BUD-B2-02','BUD-B2-03'],
    optional=[],
    activity='Graded: the four-tasks worksheet on one difficulty you actually face (dukkha, tanha vs chanda, nirodha, three path factors with one action each), plus the rebirth-frame two-sentence statement and the Dreyfus-analogy sentence.',
    rubric=['four tasks stated correctly','case work is real and specific','ending described as cessation of craving','path factors chosen with reasons','rebirth frame placed'],
)
# b3
parse_module(3, 'b3-sila-in-practice',
    question='How does a working Buddhist ethics actually decide cases, and how do the classical five precepts translate into the Five Mindfulness Trainings?',
    description='L2 Guided application. Prerequisites: b1 and b2 exit criteria.',
    difficulty='Intermediate', duration=2.5,
    required=['BUD-B3-01','BUD-B3-02','BUD-B3-03'],
    optional=[],
    activity='Graded: restating the precepts as training rules, applying the ethical-decision teaching to two hard cases, comparing the precepts with the trainings on two named points, and the two-sentence rebirth-exclusion statement.',
    rubric=['precepts restated as training rules','hard-case reasoning','classical-vs-trainings comparison','rebirth exclusion stated'],
)
# b4
parse_module(4, 'b4-foundational-meditations',
    question='How does the sitting habit become real: what to set up, what mindfulness is, and a first guided meditation with the breath as an offered attention anchor?',
    description='L2 Guided application (practice module; practicum-style training plan). Prerequisites: b1 and b2 exit criteria.',
    difficulty='Intermediate', duration=2.25,
    required=['BUD-B4-01'],
    optional=[],
    activity='Graded: a two-week training plan with a sitting log (at least seven sittings), the setup statement naming time/place/posture choices, and the observation record with "no discernible difference" acceptable.',
    rubric=['setup named','mindfulness stated in the teacher\'s register','sitting log complete and dated','honest observation record'],
)
# b5
parse_module(5, 'b5-thai-forest-way',
    question='What is the Thai Forest tradition as a living school of the Theravada way, learned from inside its elders\' voices rather than compared from outside?',
    description='L2 Guided application. Prerequisites: b1-b4 exit criteria (precepts applied, four tasks run, a two-week sitting log exists).',
    difficulty='Intermediate', duration=3.75,
    required=['BUD-B5-01','BUD-B5-02'],
    optional=[],
    activity='Graded: the tradition\'s frame (lineage, practice-first ethos, Theravada continuity) from inside, the elders\' readings, and one school of the map placed in the walk\'s school map.',
    rubric=['tradition frame from inside','elders read aloud','school placed in map'],
)
# b6
parse_module(6, 'b6-zen',
    question='What is Zen\'s answer to the question of suffering, and what are the Rinzai and Soto approaches as the lectures frame them through koan practice and shikantaza?',
    description='L3 Independent analysis. Prerequisites: b1-b5 exit criteria.',
    difficulty='Intermediate', duration=5.0,
    required=['BUD-B6-01','BUD-B6-02'],
    optional=[],
    activity='Graded: the two lectures\' claims stated in the learner\'s own words with the place-of-meditation thesis, the Rinzai/Soto approaches framed through the lecturer\'s own material, and a separate personal reflection on how it lands against the walk so far.',
    rubric=['suffering thesis stated','place-of-meditation claim with evidence','koan and shikantaza framed as the lecture frames them','personal reflection separate from the lecture\'s claims'],
)
# b7
parse_module(7, 'b7-insight-and-secular',
    question='How did Insight Meditation and Secular Buddhism rewrite Buddhism for the modern West, and where do you stand after comparing them?',
    description='L3 Independent analysis (the exit criteria adapted for a practice walk; the practice adaptation uses the learner\'s own sitting log). Prerequisites: b1-b5 exit criteria.',
    difficulty='Intermediate', duration=3.5,
    required=['BUD-B7-01','BUD-B7-02','BUD-B7-03'],
    optional=[],
    activity='Graded: a defended comparison of the two schools\' positions (comparing only positions each opened source states), the mindfulness-of-breath practice adapted to the learner\'s own log, and a written position with reasons.',
    rubric=['comparison uses only opened-source positions','practice adaptation on the learner\'s log','defended position with reasons','no invented four-truths-tasks example (withdrawn)'],
)
# b8
parse_module(8, 'b8-capstone',
    question='What does this path amount to: a sustained practice with records, one ethical case through the walk\'s full toolkit, and a written position defended against a serious objection?',
    description='L4 Synthesis. Prerequisites: b1-b7 exit criteria (all prior outcomes, including the sitting log, the four-tasks worksheet, the school placements and the b7 defended comparison).',
    difficulty='Advanced', duration=12.0,
    required=[],
    optional=[],
    activity='Graded: an eight-week sustained practice with records, one ethical case worked through the walk\'s full toolkit (precepts, four tasks, sitting practice, at least two schools\' readings), and a written position defended against a serious objection.',
    rubric=['practice records','case integration','synthesis grounding','objection','self-assessment'],
)
# b9
parse_module(9, 'b9-elective-mind-on-the-cushion',
    question='What are the five hindrances and the five aggregates as met in the learner\'s own sitting log, and how does the tradition name and work with them?',
    description='L2 Guided application (ELECTIVE; serves the meditating learner\'s need to understand their own mind in practice). Prerequisites: b1 and b4 exit criteria (a sitting practice with a log exists; this elective reads that practice).',
    difficulty='Intermediate', duration=2.75,
    required=['BUD-B9-01','BUD-B9-02','BUD-B9-03'],
    optional=[],
    activity='Graded: the five hindrances named and recognized in the learner\'s own practice, their traditional countermeasures from the canon and a living teacher, the meditation-log read as data, and the five aggregates named as activities in one\'s own sitting.',
    rubric=['hindrances named from own practice','countermeasures from canon and teacher','log read as data','aggregates named as activities','honest absence recorded as a finding'],
)

# ---- Splice ----
with open(APPJS) as f:
    s = f.read()
m = re.search(r'window\.fcAcademyData = (\{.*?\});\n', s, re.S)
d = json.loads(m.group(1))

existing_source_ids = {e['source_id'] for e in d['sources']}
for entry in SOURCES:
    assert entry['source_id'] not in existing_source_ids, f'{entry["source_id"]} already exists'
    d['sources'].append(entry)

mods = d['modules']
assert isinstance(mods, dict)
for entry in MODULES:
    assert entry['id'] not in mods, f'{entry["id"]} already exists'
    mods[entry['id']] = entry

for deg in d['degrees']:
    if deg['id'] == 'deg-wol-buddhism':
        deg['modules'] = [f'mod-bud-{n}' for n in range(1, 10)]
        assert deg['status'] == 'in-development'
        break
else:
    sys.exit('deg-wol-buddhism placeholder not found')

all_ids = {e['source_id'] for e in d['sources']}
for entry in MODULES:
    for rm in entry['requiredMedia'] + entry['optionalMedia']:
        assert rm['source_id'] in all_ids, f'dangling {rm["source_id"]}'

total_min = 265+205+145+130+230+298+207+720+160
print(f'packet arithmetic: {total_min} min = {total_min/60:.2f} h; attached sum: {sum(x["durationHours"] for x in MODULES):.2f} h')

new_json = json.dumps(d, separators=(',',':'), ensure_ascii=False)
with open(APPJS, 'w') as f:
    f.write(s[:m.start(1)] + new_json + s[m.end(1):])
print('app.js rewritten')
