#!/usr/bin/env python3
"""Regression tests for the Phase A data splice (2026-10-26, deg-integrate).

Locks in the specific repairs called out in the advisor QC round for
docs/degrees/AUDIT-2026-10-26.md Phase A: parsed windows must not leak
DATA-BLOCK ERROR examples, revisits carry the segments they return to,
the pragmatism m3 readings match the module doc (B1/B2 are Lecture II,
B3 is Lecture VI), and the m7 Bouton locator is the m7 doc's assignment.
Run from the repo root: python3 -m unittest scripts.tests.test_degrees_phaseA_splice
"""
import json
import os
import unittest

APP = 'site/assets/app.js'


def load():
    raw = open(APP, encoding='utf-8').read()
    i = raw.find('window.fcAcademyData = ')
    data, _ = json.JSONDecoder().raw_decode(raw[i + len('window.fcAcademyData = '):])
    return data


def refs(mid):
    data = load()
    m = data['modules'][mid]
    out = {}
    for r in (m.get('requiredMedia') or []) + (m.get('optionalMedia') or []):
        if isinstance(r, dict):
            out.setdefault(r['source_id'], r)
    return out


class PhaseASpliceTests(unittest.TestCase):

    def test_pd_m3_03_single_window(self):
        r = refs('mod-pd-3')['PD-M3-03']
        self.assertEqual(r.get('segments'), [{'start': '13:22', 'end': '18:27'}])
        # the lecture-7 window (18:06-39:15) the audit flagged as the
        # data-block error must never appear as an assigned segment
        for w in r.get('segments') or []:
            self.assertNotEqual((w.get('start'), w.get('end')), ('18:06', '39:15'))

    def test_daoism_m2_revisit_carries_m1_segments(self):
        m1 = refs('mod-dao-1')['DAO-M1-03']
        m2 = refs('mod-dao-2')['DAO-M1-03']
        self.assertEqual(m2.get('role'), 'revisit')
        self.assertEqual(m2.get('segments'), m1.get('segments'))

    def test_daoism_m3_has_its_own_window(self):
        r = refs('mod-dao-3')['DAO-M1-03']
        self.assertEqual(r.get('segments'), [{'start': '0:38:17', 'end': '0:43:39'}])

    def test_pragmatism_m3_readings_match_module_doc(self):
        data = load()
        srcs = {s['source_id']: s for s in data['sources']}
        r = refs('mod-prag-3')
        # Manifest ids (docs/degrees/integration/deg-wol-pragmatism-manifest.json) are the contract:
        # M3-02 Reading A, M3-03 Readings B1+B2 (two Lecture II passages, one source), M3-04 Reading B3.
        self.assertIn('PRAG-M3-02', r)   # Reading A: The Will to Believe
        self.assertIn('PRAG-M3-03', r)   # Readings B1 and B2: Lecture II (two passages, one row)
        self.assertIn('PRAG-M3-04', r)   # Reading B3: Lecture VI
        self.assertNotIn('PRAG-M3-05', r)
        lec2 = 'Pragmatism:_A_New_Name_for_Some_Old_Ways_of_Thinking/Lecture_II'
        lec6 = 'Pragmatism:_A_New_Name_for_Some_Old_Ways_of_Thinking/Lecture_VI'
        self.assertIn(lec2, srcs['PRAG-M3-03']['canonical_url'])
        self.assertIn(lec6, srcs['PRAG-M3-04']['canonical_url'])
        self.assertIn('952 words', r['PRAG-M3-03']['locator'])
        self.assertIn('264 words', r['PRAG-M3-03']['locator'])
        self.assertIn('157 words', r['PRAG-M3-04']['locator'])

    def test_m7_bouton_locator_is_m7_assignment(self):
        r = refs('mod-pd-7')['PD-M3-05']
        self.assertIn('Reinforcer', r['locator'])
        self.assertIn('Punisher', r['locator'])

    def test_capstones_carry_draws_on_prior(self):
        data = load()
        for mid in ('mod-bud-8', 'mod-prag-5'):
            self.assertTrue((data['modules'][mid].get('drawsOnPriorModules') or '').strip())

    def test_degrees_carry_opening_notes(self):
        data = load()
        for did in ('deg-psychdim', 'deg-wol-daoism', 'deg-wol-buddhism', 'deg-wol-pragmatism'):
            deg = next(d for d in data['degrees'] if d['id'] == did)
            self.assertTrue((deg.get('openingNote') or '').strip(), did)

    def test_reading_optional_remainder_is_distinct(self):
        data = load()
        opt = [x for x in data['modules']['mod-prag-1']['optionalMedia']
               if isinstance(x, dict) and x.get('source_id') == 'PRAG-M1-02']
        self.assertTrue(opt)
        # the optional further-reading remainder is a distinct assignment
        # from the m2 core reading of the same essay
        m2 = [x for x in data['modules']['mod-prag-2']['requiredMedia']
              if isinstance(x, dict) and x.get('source_id') == 'PRAG-M1-02']
        self.assertTrue(m2)
        self.assertNotEqual(opt[0].get('locator'), m2[0].get('locator'))


if __name__ == '__main__':
    unittest.main()
