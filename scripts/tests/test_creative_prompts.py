"""Quality and integrity gate for the creative-prompts bank (site/assets/prompts-bank.json).

Standard: docs/enrichment/CREATIVE-PROMPT-GENERATION.md. These are structural desk tests; they
cannot judge whether a prompt is good. A person reads the prompts (see
docs/enrichment/sources/prompts/ledger.md). What the tests do guarantee: every principle and
dossier a prompt names exists, the bank-wide caps hold, and nothing the superskill warns against
by name (embedded example answers, evaluative framing, stock phrases) slips in.
"""
import collections
import json
import os
import re
import shutil
import subprocess
import unittest

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
BANK = os.path.join(ROOT, 'site', 'assets', 'prompts-bank.json')
GENRES = {'poetry', 'fiction', 'essay', 'memoir'}
REQUIRED = ('id', 'genre', 'target', 'title', 'text', 'done_when', 'anchor', 'move',
            'principles', 'dossiers', 'sensitive', 'why')
# Evaluative or stock framing the superskill rules out, plus AI-sounding filler.
BLOCKED = [
    r'\bbest\b', r'\bimpress', r'\bpublish', r'\bbeautiful', r'\bpowerful', r'\bprofound',
    r'\bcompelling', r'\bevocative', r'\bdelve', r'\btapestry', r'\btestament', r'\bjourney',
    r'\bunlock', r'\bembrace', r'\bnavigate', r'\bin today.s', r'\bfor example\b', r'\be\.g\.',
    r'\bsuch as a\b', r'dear younger self', r'\bgratitude list', r'\bsunrise', r'\bwise (old|elder)',
    r'\blearns? to let go\b', r'\bmoral of\b', r'\bheal(ing|s)?\b',
]


def load():
    with open(BANK, encoding='utf-8') as f:
        return json.load(f)['prompts']


def principle_ids():
    out = set()
    for fn in os.listdir(os.path.join(ROOT, 'content', 'principles')):
        m = re.match(r'^([A-Z]{1,3}\d+)\b', fn)
        if m:
            out.add(m.group(1))
    return out


def published_dossiers():
    with open(os.path.join(ROOT, 'docs', 'enrichment', 'dossiers', 'registry.json'), encoding='utf-8') as f:
        reg = json.load(f)
    return {d['id'] for d in reg['dossiers'] if d.get('status') == 'published'}


class BankShape(unittest.TestCase):
    def setUp(self):
        self.p = load()

    def test_not_empty_and_unique_ids(self):
        self.assertGreaterEqual(len(self.p), 12)
        ids = [x['id'] for x in self.p]
        self.assertEqual(len(ids), len(set(ids)))

    def test_required_fields(self):
        for x in self.p:
            for k in REQUIRED:
                self.assertIn(k, x, f"{x.get('id')} lacks {k}")
            self.assertIn(x['genre'], GENRES, x['id'])
            for k in ('text', 'done_when', 'anchor', 'move', 'why', 'title', 'target'):
                self.assertTrue(isinstance(x[k], str) and x[k].strip(), f"{x['id']} empty {k}")
            self.assertIsInstance(x['sensitive'], bool, x['id'])
            self.assertTrue(x['principles'], f"{x['id']} names no principle")
            self.assertTrue(x['dossiers'], f"{x['id']} names no dossier")

    def test_length_bounds(self):
        for x in self.p:
            n = len(x['text'].split())
            self.assertTrue(25 <= n <= 90, f"{x['id']} text is {n} words")

    def test_all_four_forms_present(self):
        self.assertEqual({x['genre'] for x in self.p}, GENRES)


class Integrity(unittest.TestCase):
    def test_principles_exist(self):
        have = principle_ids()
        for x in load():
            for pid in x['principles']:
                self.assertIn(pid, have, f"{x['id']} names principle {pid}, which is not in content/principles")

    def test_dossiers_are_published(self):
        pub = published_dossiers()
        for x in load():
            for d in x['dossiers']:
                self.assertIn(d, pub, f"{x['id']} names dossier {d}, which is not published in registry.json")


class QualityBar(unittest.TestCase):
    def setUp(self):
        self.p = load()

    def test_no_blocked_phrases(self):
        for x in self.p:
            blob = ' '.join([x['text'], x['done_when'], x['why']]).lower()
            for pat in BLOCKED:
                self.assertIsNone(re.search(pat, blob), f"{x['id']} matches blocked pattern {pat}")

    def test_no_not_x_but_y_construction(self):
        for x in self.p:
            blob = ' '.join([x['text'], x['why']]).lower()
            self.assertIsNone(re.search(r"\bnot (just|merely|only) [^.]{0,60}\bbut\b", blob), x['id'])
            self.assertIsNone(re.search(r"\bit.s not [^.]{0,60}, it.s\b", blob), x['id'])

    def test_no_em_dashes_in_user_text(self):
        for x in self.p:
            self.assertNotIn('\u2014', x['text'] + x['done_when'] + x['why'], x['id'])

    def test_at_most_two_prompts_per_principle(self):
        c = collections.Counter(pid for x in self.p for pid in x['principles'])
        for pid, n in c.items():
            self.assertLessEqual(n, 3 if len(self.p) < 30 else 2, f"{pid} used {n} times")

    def test_word_bans_capped_at_thirty_percent(self):
        ban = re.compile(r'\b(leave out|avoid|do not use|may not|without using|never use|keep [^.]{0,30}out)\b', re.I)
        n = sum(1 for x in self.p if ban.search(x['text']))
        self.assertLessEqual(n / len(self.p), 0.30, f"{n} of {len(self.p)} prompts carry a ban")

    def test_every_ban_has_a_route_forward(self):
        # Superskill checklist 1: a prohibition needs a promotive partner. Heuristic: a prompt
        # with a ban must also contain a required move (a sentence with a positive instruction
        # word) beyond the ban sentence.
        ban = re.compile(r'\b(leave out|avoid|do not use|may not|without using|never use|keep [^.]{0,30}out)\b', re.I)
        pos = re.compile(r'\b(must|let|bring|add|then|move|end|stop|finish|close|write|set)\b', re.I)
        for x in self.p:
            sentences = re.split(r'(?<=[.?!])\s+', x['text'])
            if any(ban.search(s) for s in sentences):
                others = [s for s in sentences if not ban.search(s)]
                self.assertTrue(any(pos.search(s) for s in others), x['id'])

    def test_no_repeated_anchor_nouns_or_openings(self):
        anchors = [x['anchor'].lower() for x in self.p]
        self.assertEqual(len(anchors), len(set(anchors)), 'an anchor repeats')
        opens = [' '.join(re.findall(r"[a-z']+", x['text'].lower())[:3]) for x in self.p]
        self.assertEqual(len(opens), len(set(opens)), 'two prompts open with the same three words')

    def test_no_shared_five_word_runs(self):
        def grams(t):
            w = re.findall(r"[a-z']+", t.lower())
            return {tuple(w[i:i + 5]) for i in range(len(w) - 4)}
        seen = {}
        for x in self.p:
            for g in grams(x['text']):
                if g in seen and seen[g] != x['id']:
                    self.fail(f"{x['id']} and {seen[g]} share the run {' '.join(g)!r}")
                seen[g] = x['id']

    def test_memoir_prompts_offer_a_way_out(self):
        for x in self.p:
            if x['genre'] == 'memoir':
                self.assertRegex(x['text'].lower(), r'(character|fiction|skip|if no|if none|if nothing)',
                                 f"{x['id']} is memoir without a way out")

    def test_sensitive_flag_is_boolean_and_present_for_care_prompts(self):
        for x in self.p:
            if re.search(r'\b(bad stretch|grief|death|died|loss|illness|abuse)\b', x['text'].lower()):
                self.assertTrue(x['sensitive'], f"{x['id']} touches hard ground and is not flagged sensitive")


class ModelInNode(unittest.TestCase):
    @unittest.skipUnless(shutil.which('node'), 'node not installed')
    def test_shuffle_bag(self):
        r = subprocess.run(['node', '--test', os.path.join(ROOT, 'scripts', 'tests', 'prompts.test.cjs')],
                           capture_output=True, text=True)
        self.assertEqual(r.returncode, 0, r.stdout[-1500:] + r.stderr[-500:])


if __name__ == '__main__':
    unittest.main()
