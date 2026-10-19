#!/usr/bin/env bash
# Commit + push all enrichment work-in-progress. Safe to call from several agents (flock).
# Run after EVERY finished concept. Fails loudly if the push does not land on origin/main.
# usage: scripts/enrich_save.sh "short message"
cd "$(dirname "$0")/.." || exit 1
exec 9>/tmp/enrich_save.lock; flock 9
git config user.name >/dev/null || git config user.name "Computer"
git config user.email >/dev/null || git config user.email "genuineflourishing15@yopmail.com"
git add content docs scripts >/dev/null 2>&1
if git diff --cached --quiet; then echo "nothing to save"; exit 0; fi
git commit -qm "${1:-enrichment WIP}" || { echo "ERROR: commit failed" >&2; exit 1; }
git pull -q --rebase origin main || { echo "ERROR: pull --rebase failed, resolve manually" >&2; exit 1; }
git push origin HEAD:main || { echo "ERROR: push failed (work is committed locally, NOT on GitHub)" >&2; exit 1; }
# verify the remote actually has our commit
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git ls-remote origin -h refs/heads/main | cut -f1)
if [ "$LOCAL" = "$REMOTE" ]; then
  echo "saved and verified on origin/main: $(git log -1 --format='%h %s')"
else
  echo "WARNING: local $LOCAL != remote $REMOTE; push not confirmed" >&2; exit 1
fi
