#!/usr/bin/env python3
"""Apply enrichment cross-link proposals (docs/enrichment/proposals/*.json) to the corpus.

Two kinds (either in every proposals file):
- reciprocal: {"into": "entry id or file", "link": "concept id", "why": "short clause"}
  -> ensures a '## Related concepts' section lists [[link]] with the why-clause.
- inline:    {"into": "entry id or file", "concept": "concept id", "phrase": "exact text"}
  -> wraps the FIRST plain-text occurrence of phrase in [[concept|phrase]].

Band-aware (safe with parallel agents): if the target entry belongs to a band whose state file
(docs/enrichment/batches/<band>.json) currently has an in_progress concept, the proposal is
DEFERRED (kept in the proposals file for a later run) instead of touching that band's files.
Principles and other non-banded entries are always safe to edit.

Atomicity: content files are written FIRST; only after all writes succeed are proposal files
archived to docs/enrichment/applied/. Deferred proposals stay in the proposals file.
"""
import os, re, sys, glob, json, shutil
import enrich_stats

ROOT = enrich_stats.ROOT
PDIR = os.path.join(ROOT, 'docs', 'enrichment', 'proposals')
APPLIED = os.path.join(ROOT, 'docs', 'enrichment', 'applied')

# (line) partial-wikilink to a concept, plus section markers; mirrors enrich_stats
WIKI = re.compile(r"\[\[([^\]#|]+?)(?:#[^\] ]+)?(?:\|[^\]]+)?\]\]")
HEADING = re.compile(r'^#{2,4}\s')
CODE = re.compile(r'^```')
LINK = re.compile(r'\[\[[^\]]+\]\]')


def in_link(line, phrase):
    for m in WIKI.finditer(line):
        if phrase in m.group(1):
            return True
    return False


def in_cited_in(body, entry_id):
    m = re.search(r'^##\s*Cited in.*$', body, re.M)
    if not m:
        return False
    tail = body[m.start():]
    tail = re.split(r'^##\s*(?!Cited)', tail, flags=re.M)[0] if re.search(r'^##\s*(?!Cited)', tail, re.M) else tail
    return entry_id in tail


def band_of():
    id2band = {}
    for mf in glob.glob(os.path.join(ROOT, 'docs', 'enrichment', 'bands', '*-manifest.json')):
        m = json.load(open(mf, encoding='utf-8'))
        for cid in m.get('concepts', []):
            id2band[cid] = m['band']
    return id2band


def band_states():
    st = {}
    for sf in glob.glob(os.path.join(ROOT, 'docs', 'enrichment', 'batches', '*.json')):
        try:
            s = json.load(open(sf, encoding='utf-8'))
            st[s.get('batch')] = s
        except Exception:
            pass
    return st


def main():
    E = enrich_stats.load()
    byfile = {e['fm'].get('file'): k for k, e in E.items() if e['fm'].get('file')}
    byid = {k: k for k in E}
    def res(x):
        x = (x or '').strip()
        if x in byfile: return byfile[x]
        if x in byid: return x
        return x
    id2band = band_of()
    states = band_states()

    def band_busy(entry_id):
        band = id2band.get(entry_id)
        if not band:
            return False
        s = states.get(band)
        return bool(s and s.get('in_progress'))

    stats = dict(recip=0, inline=0, skipped=0, deferred=0, archived=0)
    written = []

    for pf in sorted(glob.glob(os.path.join(PDIR, '*.json'))):
        try:
            P = json.load(open(pf, encoding='utf-8'))
        except Exception as ex:
            print(f"SKIP (bad json) {pf}: {ex}")
            continue

        deferred_recip, deferred_inline = [], []

        for r in P.get('reciprocal', []):
            into, link = res(r.get('into')), res(r.get('link'))
            if into not in E or link not in E:
                stats['skipped'] += 1
                continue
            if band_busy(into):
                deferred_recip.append(r); stats['deferred'] += 1
                continue
            e = E[into]
            why = r.get('why', '')
            if in_cited_in(e['body'], link):
                stats['skipped'] += 1
                continue
            m = re.search(r'^##\s*Related concepts\s*$', e['body'], re.M)
            if m:
                sec = e['body'][m.end():]
                block = re.split(r'^##\s', sec, flags=re.M)
                target = block[0]
                newtarget = target.rstrip('\n')
                if not target.strip():
                    newtarget = "\n"
                if newtarget and not newtarget.startswith("\n"):
                    newtarget = "\n" + newtarget
                if f"[[{link}]]" not in target:
                    if newtarget.strip() and not newtarget.endswith("\n"):
                        newtarget += "\n"
                    if newtarget == "\n":
                        newtarget = f"\n- [[{link}]] — {why}\n"
                    else:
                        newtarget += f"- [[{link}]] — {why}\n"
                    e['body'] = e['body'][:m.end()] + newtarget + "".join(block[1:])
                    stats['recip'] += 1
            else:
                ms = re.search(r'^##\s*Sources\s*$', e['body'], re.M)
                if not ms:
                    e['body'] += f"\n\n## Related concepts\n\n- [[{link}]] — {why}\n"
                else:
                    e['body'] = (e['body'][:ms.start()]
                                  + f"## Related concepts\n\n- [[{link}]] — {why}\n\n"
                                  + e['body'][ms.start():])
                stats['recip'] += 1
            e['dirty'] = True

        for r in P.get('inline', []):
            into, concept = res(r.get('into')), res(r.get('concept'))
            phrase = r.get('phrase')
            if into not in E or concept not in E or not phrase:
                stats['skipped'] += 1
                continue
            if band_busy(into):
                deferred_inline.append(r); stats['deferred'] += 1
                continue
            e = E[into]
            body_lines = e['body'].splitlines(keepends=True)
            out = []
            replaced = False
            in_code = False
            for i, s in enumerate(body_lines):
                if CODE.match(s):
                    in_code = not in_code
                    out.append(s)
                    continue
                if in_code:
                    out.append(s)
                    continue
                if HEADING.match(s) or in_link(s, phrase):
                    out.append(s)
                    continue
                idx = s.find(phrase)
                if idx != -1 and not replaced:
                    out.append(s[:idx] + f"[[{concept}|{phrase}]]" + s[idx+len(phrase):])
                    replaced = True
                else:
                    out.append(s)
            if replaced:
                e['body'] = "".join(out)
                e['dirty'] = True
                stats['inline'] += 1

        # write content FIRST (all dirty entries of this proposal file)
        # the entry dict has no raw front-matter, so re-read each file and
        # keep its front-matter block byte-for-byte; only the body is replaced.
        for k, e in E.items():
            if e.get('dirty'):
                fp = os.path.join(ROOT, e['path'])
                cur = open(fp, encoding='utf-8').read()
                end = cur.find('\n---\n', 4)
                if end == -1:
                    print(f"SKIP (no front-matter) {e['path']}")
                    continue
                tmp = fp + '.applytmp'
                with open(tmp, 'w', encoding='utf-8') as f:
                    f.write(cur[:end+5] + e['body'])
                os.replace(tmp, fp)
                written.append(e['path'])
                e['dirty'] = False

        # then archive or keep-with-deferred
        if deferred_recip or deferred_inline:
            P2 = dict(P)
            P2['reciprocal'] = deferred_recip
            P2['inline'] = deferred_inline
            P2['notes'] = str(P.get('notes', '')) + f" | deferred at this run (target band busy): {len(deferred_recip)} recip, {len(deferred_inline)} inline"
            with open(pf, 'w', encoding='utf-8') as f:
                json.dump(P2, f, indent=1, ensure_ascii=False)
                f.write('\n')
        else:
            os.makedirs(APPLIED, exist_ok=True)
            shutil.move(pf, os.path.join(APPLIED, os.path.basename(pf)))
            stats['archived'] += 1

    print(f"applied: recip={stats['recip']} inline={stats['inline']} deferred={stats['deferred']} "
          f"skipped={stats['skipped']} archived={stats['archived']} files_written={len(written)}")
    if stats['deferred']:
        print("deferred proposals remain in docs/enrichment/proposals/ for the next run")


if __name__ == '__main__':
    sys.exit(main())
