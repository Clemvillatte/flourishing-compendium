#!/usr/bin/env python3
"""Fixtures for scripts/tests/degrees_learner_audit.py (AUDIT-2026-10-26 guardrail 3).
Valid cases must pass; invalid cases must fail. Uses the real published data block
as the base (it must itself be clean) and mutates deep copies."""
import copy, io, os, sys, json, tempfile, unittest, contextlib
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
os.chdir(ROOT)
import degrees_learner_audit as A

BASE = A.load()

def run(data, degs=('deg-psychdim',), manifest_dir=None):
    old_load, old_dir, old_argv = A.load, A.MANIFEST_DIR, sys.argv
    A.load = lambda: copy.deepcopy(data)
    if manifest_dir: A.MANIFEST_DIR = manifest_dir
    sys.argv = ['audit'] + list(degs)
    buf = io.StringIO()
    code = 0
    try:
        with contextlib.redirect_stdout(buf):
            try: A.main()
            except SystemExit as e: code = e.code or 0
    finally:
        A.load, A.MANIFEST_DIR, sys.argv = old_load, old_dir, old_argv
    return code, buf.getvalue()

def mut(fn):
    d = copy.deepcopy(BASE); fn(d); return d

class Fixtures(unittest.TestCase):
    def test_base_is_clean(self):
        code, out = run(BASE, A.DEFAULT_DEGREES)
        self.assertEqual(code, 0, out)

    def test_valid_segmented_reuse_revisit_retrieval_capstone(self):
        # psychdim m4 retrieval reuse, m7 revisit, m8 capstone-return already exist in the base data
        mods = BASE['modules']
        roles = {r.get('role') for m in mods.values() for r in m.get('requiredMedia', []) if isinstance(r, dict)}
        self.assertTrue({'retrieval', 'revisit', 'capstone-return'} <= roles)
        code, out = run(BASE); self.assertEqual(code, 0, out)

    def test_valid_drawson_capstone_with_no_media(self):
        code, out = run(BASE, ('deg-wol-buddhism',)); self.assertEqual(code, 0, out)
        self.assertEqual(BASE['modules']['mod-bud-8']['requiredMedia'], [])
        self.assertTrue(BASE['modules']['mod-bud-8'].get('drawsOnPriorModules'))

    def test_invalid_leaked_band_code_in_title(self):
        d = mut(lambda d: d['modules']['mod-pd-1'].__setitem__('title', 'm1-orientation: The Mind Across Six Dimensions'))
        code, out = run(d); self.assertNotEqual(code, 0); self.assertIn('FAIL', out)

    def test_invalid_time_range_reversed(self):
        def f(d):
            r = d['modules']['mod-pd-1']['requiredMedia'][1]; r['segments'] = [{'start': '44:11', 'end': '25:46'}]
        code, out = run(mut(f)); self.assertNotEqual(code, 0, out)

    def test_invalid_window_beyond_full_duration(self):
        def f(d):
            r = d['modules']['mod-pd-1']['requiredMedia'][1]; r['segments'] = [{'start': '25:46', 'end': '9:44:11'}]
        code, out = run(mut(f)); self.assertNotEqual(code, 0, out); self.assertIn('after the printed full duration', out)

    def test_invalid_verbatim_duplicate_required_in_two_modules(self):
        def f(d):
            d['modules']['mod-pd-2']['requiredMedia'].append({'source_id': 'PD-M1-04', 'level': 'Foundations', 'locator': d['modules']['mod-pd-1']['requiredMedia'][3]['locator']})
        code, out = run(mut(f)); self.assertNotEqual(code, 0, out); self.assertIn('full-duplicate', out)

    def test_invalid_alias_same_recording_under_two_ids(self):
        def f(d):
            s = copy.deepcopy([x for x in d['sources'] if x['source_id'] == 'PD-M2-02'][0]); s['source_id'] = 'PD-ALIAS-X'
            d['sources'].append(s)
            segs = [r for r in d['modules']['mod-pd-2']['requiredMedia'] if r['source_id'] == 'PD-M2-02'][0]['segments']
            d['modules']['mod-pd-3']['requiredMedia'].append({'source_id': 'PD-ALIAS-X', 'level': 'Foundations', 'segments': segs})
        code, out = run(mut(f)); self.assertNotEqual(code, 0, out)

    def test_invalid_omitted_required_reading_via_manifest(self):
        with tempfile.TemporaryDirectory() as td:
            m = json.load(open(os.path.join(A.MANIFEST_DIR, 'deg-psychdim-manifest.json')))
            m['modules']['mod-pd-1'].append({'source_id': 'PD-NOT-INTEGRATED', 'role': 'teach', 'assignment': 'fixture'})
            json.dump(m, open(os.path.join(td, 'deg-psychdim-manifest.json'), 'w'))
            code, out = run(BASE, manifest_dir=td)
            self.assertNotEqual(code, 0, out); self.assertIn('manifest assignment not integrated', out)

    def test_invalid_text_source_without_any_locator(self):
        def f(d):
            r = d['modules']['mod-pd-1']['requiredMedia'][3]; r.pop('locator', None)
        code, out = run(mut(f)); self.assertNotEqual(code, 0, out)

if __name__ == '__main__':
    unittest.main(verbosity=1)
