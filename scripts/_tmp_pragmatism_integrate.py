#!/usr/bin/env python3
"""deg-wol-pragmatism integration: attach 5 modules + sources to fcAcademyData.

Follows docs/degrees/integration/deg-wol-pragmatism-handoff.md.
durationHours per the handoff spec: m1 2.75, m2 3.75, m3 4.25, m4 3.0, m5 5.25.
"""
import re, json, hashlib, sys, os

ROOT = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
MODDIR = os.path.join(ROOT, 'docs/degrees/modules/deg-wol-pragmatism')
APPJS = os.path.join(ROOT, 'site/assets/app.js')

HASHES = {
    'm1-orientation': '030c89f8',
    'm2-belief-and-doubt': 'a3b098b6',
    'm3-truth-and-the-will-to-believe': '463b679b',
    'm4-dewey-inquiry-ethics-democracy': '751a9813',
    'm5-capstone': '48cd0d29',
}
for name, want in HASHES.items():
    h = hashlib.sha256(open(os.path.join(MODDIR, name + '.md'), 'rb').read()).hexdigest()[:8]
    assert h == want, f'{name} hash mismatch: {h} != {want}'
print('hashes verified: all 5 match band record')

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

# ---- Sources (minted per the handoff spec) ----
SOURCES = [
    dict(source_id='PRAG-M1-01', youtube_id_or_url='ksLO4i5pIBM', canonical_url='https://www.youtube.com/watch?v=ksLO4i5pIBM',
        title='Philosophy Talk, American Pragmatism', presenter='Josh Landy and John Perry (hosts)', host='Philosophy Talk channel',
        duration='49:24', topic_ids='PRAG-M1', level='Foundations', mission='deg-wol-pragmatism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-pragmatism.md; verify/deg-pragmatism-media-playback-1026f.md'),
    dict(source_id='PRAG-M1-02', youtube_id_or_url='https://en.wikisource.org/wiki/The_Fixation_of_Belief', canonical_url='https://en.wikisource.org/wiki/The_Fixation_of_Belief',
        title='Peirce, The Fixation of Belief (Wikisource)', presenter='Charles Sanders Peirce', host='Wikisource',
        duration='', topic_ids='PRAG-M1', level='Foundations', mission='deg-wol-pragmatism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-pragmatism.md'),
    dict(source_id='PRAG-M1-03', youtube_id_or_url='https://en.wikisource.org/wiki/How_to_Make_Our_Ideas_Clear', canonical_url='https://en.wikisource.org/wiki/How_to_Make_Our_Ideas_Clear',
        title='Peirce, How to Make Our Ideas Clear (Wikisource)', presenter='Charles Sanders Peirce', host='Wikisource',
        duration='', topic_ids='PRAG-M1', level='Foundations', mission='deg-wol-pragmatism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-pragmatism.md'),
    dict(source_id='PRAG-M3-01', youtube_id_or_url='c_Nxr3ZQxqA', canonical_url='https://www.youtube.com/watch?v=c_Nxr3ZQxqA',
        title='Misak, Cambridge Pragmatism (Royal Institute of Philosophy lecture series)', presenter='Cheryl Misak', host='Royal Institute of Philosophy (YouTube)',
        duration='51:57', topic_ids='PRAG-M3', level='Intermediate', mission='deg-wol-pragmatism',
        verification_status='verified-video',
        gate_evidence='ledgers/deg-wol-pragmatism.md'),
    dict(source_id='PRAG-M4-01', youtube_id_or_url='https://www.gutenberg.org/ebooks/37754', canonical_url='https://www.gutenberg.org/ebooks/37754',
        title='Dewey, How We Think (Project Gutenberg)', presenter='John Dewey', host='Project Gutenberg',
        duration='', topic_ids='PRAG-M4', level='Intermediate', mission='deg-wol-pragmatism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-pragmatism.md; verify/deg-wol-pragmatism-m4-sources-1026f.md'),
    dict(source_id='PRAG-M4-02', youtube_id_or_url='https://www.gutenberg.org/ebooks/18063', canonical_url='https://www.gutenberg.org/ebooks/18063',
        title='Dewey, Human Nature and Conduct (Project Gutenberg)', presenter='John Dewey', host='Project Gutenberg',
        duration='', topic_ids='PRAG-M4', level='Intermediate', mission='deg-wol-pragmatism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-pragmatism.md; verify/deg-wol-pragmatism-m4-sources-1026f.md'),
    dict(source_id='PRAG-M4-03', youtube_id_or_url='https://www.gutenberg.org/ebooks/18094', canonical_url='https://www.gutenberg.org/ebooks/18094',
        title='Dewey, The Public and Its Problems (Project Gutenberg)', presenter='John Dewey', host='Project Gutenberg',
        duration='', topic_ids='PRAG-M4', level='Intermediate', mission='deg-wol-pragmatism',
        verification_status='verified',
        gate_evidence='ledgers/deg-wol-pragmatism.md; verify/deg-wol-pragmatism-m4-sources-1026f.md'),
    dict(source_id='PRAG-OPT-BERNSTEIN', youtube_id_or_url='H_G73CAI5Hc', canonical_url='https://www.youtube.com/watch?v=H_G73CAI5Hc',
        title='Bernstein, lecture on Dewey (optional further viewing, orientation only)', presenter='Richard J. Bernstein', host='',
        duration='57:04', topic_ids='PRAG-M4', level='Intermediate', mission='deg-wol-pragmatism',
        verification_status='verified-partial',
        gate_evidence='reviews/deg-wol-pragmatism-m4-bernstein-ruling-1026e.md; ledgers/deg-wol-pragmatism.md'),
]

# ---- Module entries ----
MODULES = []

def parse_module(n, fn, question, description, difficulty, duration, required, optional, activity, rubric):
    text = read(fn + '.md')
    outcomes = numbered_items(section(text, 'Outcomes'))
    assert outcomes, f'no outcomes for {fn}'
    MODULES.append(dict(
        id=f'mod-prag-{n}',
        degree_id='deg-wol-pragmatism',
        title=re.match(r'# (.+?) \(deg-wol-pragmatism\)', text).group(1).strip(),
        question=question,
        description=description,
        outcomes=outcomes,
        prerequisites=[f'mod-prag-{i}' for i in range(1, n)] if n > 1 else [],
        requiredMedia=[{'source_id': s, 'level': difficulty} for s in required],
        optionalMedia=[{'source_id': s, 'level': difficulty} for s in optional],
        activity=activity,
        rubric=rubric,
        durationHours=duration,
        difficulty=difficulty,
        wiki_readings=[],
        gaps=[],
    ))

parse_module(1, 'm1-orientation',
    question='What does it mean to treat your beliefs as instruments you test in experience, and what does that change about how you live when you feel uncertain or overwhelmed?',
    description='L1 Orientation. Entry module of the walk; no prerequisites.',
    difficulty='Foundations', duration=2.75,
    required=['PRAG-M1-01','PRAG-M1-02','PRAG-M1-03'],
    optional=['PRAG-M1-02','PRAG-M1-03'],
    activity='Graded: the maxim-application rebuild, the three-figure map grounded in the primary sources, and the scope statement naming the walk\'s coverage and exclusions.',
    rubric=['core pragmatist idea stated','maxim applied','three figures placed','scope stated'],
)
parse_module(2, 'm2-belief-and-doubt',
    question='When a belief of yours is settled, what settled it, and would it survive contact with something outside your wishing?',
    description='L2 Guided application. Prerequisites: the m1 exits.',
    difficulty='Intermediate', duration=3.75,
    required=['PRAG-M1-02'],
    optional=[],
    activity='Graded: Peirce\'s doubt/belief/inquiry account stated, the four methods named with their criticisms, one of your own beliefs diagnosed under all four methods, and the choice Peirce puts to the reader.',
    rubric=['doubt/belief/inquiry explained','four methods named','own belief diagnosed','Peirce\'s choice stated'],
)
parse_module(3, 'm3-truth-and-the-will-to-believe',
    question='What is James\'s instrumental view of theories and truth, and when may your passional nature lawfully decide a belief the intellect cannot settle?',
    description='L2 Guided application. Prerequisites: the m2 exits.',
    difficulty='Intermediate', duration=4.25,
    required=['PRAG-M3-01'],
    optional=[],
    activity='Graded: James\'s method and truth account stated with the pleasant-belief qualifier, the genuine-option test applied to one decision of your own, and the strongest objection stated and answered with the constraint pattern.',
    rubric=['James\'s truth account with qualifier','genuine-option test applied','strongest objection stated','constraint pattern applied'],
)
parse_module(4, 'm4-dewey-inquiry-ethics-democracy',
    question='What are Dewey\'s tools for a stuck situation, a hard choice, and a disagreement you keep having with someone you live with?',
    description='L3 Independent analysis. Prerequisites: the m3 exits. This module adapts L3 to a theory course: its independent analysis is applying the inquiry-deliberation pattern to a novel case without a template.',
    difficulty='Intermediate', duration=3.0,
    required=['PRAG-M4-01','PRAG-M4-02','PRAG-M4-03'],
    optional=['PRAG-OPT-BERNSTEIN'],
    activity='Graded: Dewey\'s reflective-inquiry account stated, the deliberation-rehearsal deliverable run on a case of your own, the case separated from what you observed vs assumed, the Peirce/Dewey comparison, and the teach-back.',
    rubric=['reflective inquiry explained','deliberation rehearsal run','case/observation separation','Peirce-Dewey comparison','teach-back delivered'],
)
parse_module(5, 'm5-capstone',
    question='Take one live belief or decision of your own, run the tools that fit it, and write a synthesis that defends where you land, against the strongest objection to it.',
    description='L4 Synthesis. Prerequisites: the m4 exits. This module\'s exit is the walk\'s exit: you can design, execute and self-assess an integrative capstone on your own material.',
    difficulty='Advanced', duration=5.25,
    required=[],
    optional=[],
    activity='Graded: the capstone synthesis on one live belief or decision (1,200-1,800 words) with the objection at full strength, the defended answer using the passages, the keeps/declines with reasons, the concrete situation, and the self-assessment driving one revision.',
    rubric=['objection at full strength','three passages cited from two modules','objection answered with passages','keeps and declines with reasons','self-assessment drives revision'],
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
    if deg['id'] == 'deg-wol-pragmatism':
        deg['modules'] = [f'mod-prag-{n}' for n in range(1, 6)]
        assert deg['status'] == 'in-development'
        break
else:
    sys.exit('deg-wol-pragmatism placeholder not found')

all_ids = {e['source_id'] for e in d['sources']}
for entry in MODULES:
    for rm in entry['requiredMedia'] + entry['optionalMedia']:
        assert rm['source_id'] in all_ids, f'dangling {rm["source_id"]}'

total_min = 170+225+257+178+310
print(f'packet arithmetic: {total_min} min = {total_min/60:.2f} h; attached sum: {sum(x["durationHours"] for x in MODULES):.2f} h')

new_json = json.dumps(d, separators=(',',':'), ensure_ascii=False)
with open(APPJS, 'w') as f:
    f.write(s[:m.start(1)] + new_json + s[m.end(1):])
print('app.js rewritten')
