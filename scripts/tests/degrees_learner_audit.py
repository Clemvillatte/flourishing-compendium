#!/usr/bin/env python3
"""Learner-view audit of the fcAcademyData degrees (owner-requested guardrail, 2026-10-26).

Audits the PUBLISHED learner experience, not the module design files.
Every check below corresponds to a defect class found in the 2026-10-26
owner audit of the four published degrees (docs/degrees/AUDIT-2026-10-26.md).

Exit code 0 = clean; any FAIL line means the data block must be repaired
before a degree may flip to (or remain at) status "complete".

Known limits (documented in the audit, Guardrails section):
- checks the data block, not the rendered pages;
- cannot detect an OMITTED source by itself — the per-degree manifest
  (docs/degrees/integration/<degree>-manifest.json, Phase 0) closes that
  hole: when present, its required assignments are diffed against the
  integrated media lists;
- alias detection keys on canonical_url + youtube id;
- segment values are format-checked; range validation against the
  source's full duration is owed in Phase A.

Usage: python3 scripts/tests/degrees_learner_audit.py
       python3 scripts/tests/degrees_learner_audit.py <degree-id> [<degree-id>...]
"""
import json
import os
import re
import sys

APP = 'site/assets/app.js'
MANIFEST_DIR = 'docs/degrees/integration'
DEFAULT_DEGREES = ['deg-psychdim', 'deg-wol-daoism', 'deg-wol-buddhism', 'deg-wol-pragmatism']

BAND_CODE = re.compile(r'^\s*(m\d+[-–:]|b\d+[-–:(]|\w+-\d+-[a-z0-9-]+:)\s*', re.I)
LEVEL_CODE_DESC = re.compile(r'^\s*L\d\b')
YT_URL = re.compile(r'^https?://(www\.)?(youtube\.com|youtu\.be|oyc\.yale\.edu)', re.I)
YT_ID = re.compile(r'^[A-Za-z0-9_-]{11}$')
TIME = re.compile(r'^\d{1,2}:\d{2}(:\d{2})?$')


def to_seconds(t):
    parts = [int(p) for p in t.split(':')]
    if len(parts) == 2:
        parts.insert(0, 0)
    return parts[0] * 3600 + parts[1] * 60 + parts[2]


def load():
    raw = open(APP, encoding='utf-8').read()
    i = raw.find('window.fcAcademyData = ')
    data, _ = json.JSONDecoder().raw_decode(raw[i + len('window.fcAcademyData = '):])
    return data


def is_video(s):
    yt = s.get('youtube_id_or_url') or ''
    return bool(YT_URL.match(yt) or YT_ID.match(yt))


def ref(r):
    return r if isinstance(r, dict) else {'source_id': r}


def seg_key(r):
    segs = r.get('segments')
    return json.dumps(segs, sort_keys=True) if segs else None


def alias_key(s):
    return s.get('canonical_url') or s.get('youtube_id_or_url') or s.get('source_id')


def valid_segments(r, s):
    segs = r.get('segments')
    if not segs:
        return True
    if not isinstance(segs, list):
        return False, 'segments is not a list'
    for w in segs:
        if not isinstance(w, dict) or not TIME.match(str(w.get('start', ''))) or not TIME.match(str(w.get('end', ''))):
            return False, f'malformed window {w}'
        if to_seconds(w['end']) <= to_seconds(w['start']):
            return False, f'non-increasing window {w}'
    return True


def main():
    degrees_arg = sys.argv[1:] or DEFAULT_DEGREES
    data = load()
    srcs = {s['source_id']: s for s in data['sources']}
    mods = data['modules']
    msgs = []

    for deg in data['degrees']:
        did = deg['id']
        mids = deg.get('modules') or []
        if not mids:
            continue
        in_scope = did in degrees_arg
        prefix = '' if in_scope else 'ADVISORY '

        def fail(mid, text):
            msgs.append(f'{prefix}FAIL [{did}/{mid}] {text}')

        is_practicum = deg.get('kind') == 'practicum'
        if not (deg.get('openingNote') or '').strip() and not is_practicum:
            msgs.append(f'{prefix}FAIL [{did}] degree has no openingNote (empty aside on the degree page)')

        # module references resolve
        for m in mids:
            if m not in mods:
                fail(m, 'referenced module id missing from modules tree')

        # a media assignment is (alias, segments); the same source may be
        # legitimately assigned several times ONLY with distinct segments/role
        seen = {}
        for mid in mids:
            mod = mods.get(mid)
            if not mod:
                continue
            title = mod.get('title') or ''
            if BAND_CODE.match(title):
                fail(mid, f'title leaks internal band code: {title!r}')
            desc = (mod.get('description') or '').strip()
            if LEVEL_CODE_DESC.match(desc):
                fail(mid, f'description is an internal level code, not prose: {desc[:60]!r}')

            req = [ref(r) for r in (mod.get('requiredMedia') or [])]
            opt = [ref(r) for r in (mod.get('optionalMedia') or [])]
            req_ids = {r['source_id'] for r in req}
            opt_ids = {r['source_id'] for r in opt}

            # optional duplicating required verbatim (no distinct assignment)
            for sid in sorted(req_ids & opt_ids):
                rq = [r for r in req if r['source_id'] == sid][0]
                oq = [r for r in opt if r['source_id'] == sid][0]
                if seg_key(rq) == seg_key(oq):
                    fail(mid, f'source {sid} listed as BOTH required and optional with no distinct assignment')

            # capstones may draw on prior modules, but only if declared
            if not req and not opt and not mod.get('drawsOnPriorModules'):
                fail(mid, 'module has no media and no drawsOnPriorModules note; a learner sees an empty syllabus')

            for r in req:
                sid = r['source_id']
                s = srcs.get(sid)
                if s is None:
                    fail(mid, f'requiredMedia references missing source id {sid}')
                    continue
                ok = valid_segments(r, s)
                if ok is not True:
                    fail(mid, f'source {sid}: {ok}')
                key = (alias_key(s), seg_key(r))
                role = r.get('role')
                if role in ('revisit', 'retrieval', 'capstone-return'):
                    continue  # deliberate reuse; the renderer must label it as such
                prev = seen.setdefault(key, mid)
                if prev != mid:
                    fail(mid, f'source {sid} ("{s.get("title","")[:50]}") full-duplicate required media also used in module {prev} — assign distinct segments/role or drop the reuse')

            for sid in req_ids | opt_ids:
                s = srcs.get(sid)
                if s and is_video(s) and not (s.get('duration') or '').strip():
                    fail(mid, f'video source {sid} has no printed duration')
                if s and not is_video(s) and not (s.get('locator') or '').strip() and not (s.get('duration') or '').strip():
                    fail(mid, f'text source {sid} has neither a locator (chapter/passage/word count) nor a reading-time label')

        # manifest diff (Phase 0 contract): every manifest assignment must be integrated
        mpath = os.path.join(MANIFEST_DIR, f'{did}-manifest.json')
        if os.path.exists(mpath):
            try:
                manifest = json.load(open(mpath, encoding='utf-8'))
                for mid, entries in (manifest.get('modules') or {}).items():
                    mod = mods.get(mid)
                    if mod is None:
                        fail(mid, 'manifest references module missing from data block')
                        continue
                    integrated = {r['source_id'] for r in (mod.get('requiredMedia') or [])} | \
                                 {r['source_id'] for r in (mod.get('optionalMedia') or [])}
                    for e in entries:
                        if not isinstance(e, dict) or e.get('note_only'):
                            continue
                        if e.get('source_id') not in integrated:
                            fail(mid, f"manifest assignment not integrated: {e.get('source_id')} ({e.get('assignment','')})")
            except (ValueError, OSError) as exc:
                msgs.append(f'{prefix}FAIL [{did}] manifest unreadable: {exc}')

        if not is_practicum and not any((mods[m].get('wiki_readings') or []) for m in mids if m in mods):
            msgs.append(f'{prefix}FAIL [{did}] no module links any wiki reading (wiki_readings empty across the degree)')

    for m in msgs:
        print(m)
    n_fail = len([m for m in msgs if m.startswith('FAIL')])
    print(f'--- degrees_learner_audit: {n_fail} defect(s) '
          f'(scope: {", ".join(degrees_arg)}; advisory lines not counted)')
    sys.exit(1 if n_fail else 0)


if __name__ == '__main__':
    main()
