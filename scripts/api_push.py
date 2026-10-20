#!/usr/bin/env python3
"""Push local commits to origin/main via the GitHub REST API.

Workaround for sandbox networks where git push (git-receive-pack POST) is
flaky. Mirrors `git push origin HEAD:main` for commits whose diff vs
origin/main touches files (no merges, no deletions of remote-only files).

Usage: python3 scripts/api_push.py [max_tries]
Reads the token from the origin remote URL. Exits 0 when origin/main == HEAD.
"""
import base64
import json
import re
import subprocess
import sys
import time
import urllib.request

REPO = "Clemvillatte/flourishing-compendium"
API = f"https://api.github.com/repos/{REPO}/git"


def token():
    url = subprocess.check_output(
        ["git", "remote", "get-url", "origin"], text=True).strip()
    m = re.match(r"https://([^@]+)@", url)
    return m.group(1) if m else None


def api_call(path, method="GET", body=None):
    tok = token()
    req = urllib.request.Request(
        API + path, method=method,
        headers={"Authorization": f"Bearer {tok}",
                 "Accept": "application/vnd.github+json",
                 "User-Agent": "api_push"})
    data = json.dumps(body).encode() if body is not None else None
    if data:
        req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, data=data, timeout=30) as r:
            return r.status, json.loads(r.read() or b"{}")
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read() or b"{}")


def main():
    max_tries = int(sys.argv[1]) if len(sys.argv) > 1 else 10
    for attempt in range(1, max_tries + 1):
        # local state: fetch + rebase our commits onto latest origin/main first
        subprocess.run(["git", "fetch", "-q", "origin"],
                       check=True, capture_output=True)
        subprocess.run(["git", "pull", "-q", "--rebase", "origin", "main"],
                       capture_output=True)
        head = subprocess.check_output(
            ["git", "rev-parse", "HEAD"], text=True).strip()
        origin = subprocess.check_output(
            ["git", "rev-parse", "origin/main"], text=True).strip()
        # SAFETY: never push a diff computed from a stale HEAD (it would
        # revert other workers' commits). HEAD must sit on origin/main.
        anc = subprocess.run(["git", "merge-base", "--is-ancestor", origin, head],
                             capture_output=True).returncode
        if anc != 0:
            print("ABORT: local HEAD is not a descendant of origin/main; "
                  "pull/rebase first")
            return 1
        if head == origin:
            print(f"already synced (HEAD == origin/main)")
            return 0
        files = subprocess.check_output(
            ["git", "-c", "core.quotepath=false", "diff", "--name-only", "-z",
             origin, head]).decode().split("\0")
        files = [f for f in files if f]
        if not files:
            print("no file changes; commit graph differs (rebase needed)")
            return 1
        # remote head (authoritative, CAS base)
        st, ref = api_call("/ref/heads/main")
        if st != 200:
            print(f"ref fetch failed {st}: {ref}"); time.sleep(3); continue
        remote_sha = ref["object"]["sha"]
        if remote_sha != origin:
            # remote moved beyond our fetch; refetch and rebase again
            time.sleep(1); continue
        st, rc = api_call(f"/commits/{remote_sha}")
        base_tree = rc["tree"]["sha"]
        # blobs for changed files
        tree_items = []
        ok = True
        for f in files:
            try:
                raw = subprocess.check_output(["git", "show", f"{head}:{f}"])
            except subprocess.CalledProcessError:
                print(f"file {f} missing in HEAD (deletion unsupported here)")
                ok = False; break
            st, blob = api_call("/blobs", "POST", {
                "content": base64.b64encode(raw).decode(),
                "encoding": "base64"})
            if st != 201:
                print(f"blob failed {st} for {f}: {blob}")
                ok = False; break
            tree_items.append({"path": f, "mode": "100644",
                               "type": "blob", "sha": blob["sha"]})
        if not ok:
            time.sleep(3); continue
        st, tree = api_call("/trees", "POST",
                            {"base_tree": base_tree, "tree": tree_items})
        if st != 201:
            print(f"tree failed {st}: {tree}"); time.sleep(3); continue
        msg = subprocess.check_output(
            ["git", "log", "-1", "--format=%B", head], text=True).strip()
        author = {
            "name": subprocess.check_output(
                ["git", "config", "user.name"], text=True).strip(),
            "email": subprocess.check_output(
                ["git", "config", "user.email"], text=True).strip(),
        }
        st, commit = api_call("/commits", "POST", {
            "message": msg, "tree": tree["sha"], "parents": [remote_sha],
            "author": author})
        if st != 201:
            print(f"commit failed {st}: {commit}"); time.sleep(3); continue
        st, upd = api_call("/refs/heads/main", "PATCH",
                           {"sha": commit["sha"], "force": False})
        if st in (200, 201):
            subprocess.run(["git", "fetch", "-q", "origin"], capture_output=True)
            print(f"pushed via API: {commit['sha'][:8]} {msg.splitlines()[0]}")
            # resync local branch to remote commit
            subprocess.run(["git", "reset", "-q", "--hard", "origin/main"],
                           capture_output=True)
            return 0
        print(f"ref update raced ({st}); retrying")
        time.sleep(2)
    print("TIMED OUT")
    return 1


if __name__ == "__main__":
    sys.exit(main())
