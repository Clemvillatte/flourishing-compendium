#!/usr/bin/env bash
# Commit + push all enrichment work-in-progress. Safe to call from several agents (flock).
# Run after EVERY state change / finished concept / ~15 min of work. Fails loudly if the
# push does not land, and verifies HEAD is an ancestor of origin/main (survives the case
# where another agent advances main right after your push). Safe to re-run after failure:
# even with nothing new staged it re-syncs and re-verifies instead of exiting early.
# usage: scripts/enrich_save.sh "short message"
cd "$(dirname "$0")/.." || exit 1
exec 9>/tmp/enrich_save.lock; flock 9
git config user.name >/dev/null || git config user.name "Computer"
git config user.email >/dev/null || git config user.email "genuineflourishing15@yopmail.com"
git add -A content docs scripts sources handoff.md 2>/dev/null
if ! git diff --cached --quiet; then
  git commit -qm "${1:-enrichment WIP}" || { echo "ERROR: commit failed" >&2; exit 1; }
fi
git pull -q --rebase origin main || { echo "ERROR: pull --rebase failed; resolve in your own files and rerun" >&2; exit 1; }
git push -q origin HEAD:main || { echo "ERROR: push failed (commits are local only, NOT on GitHub)" >&2; exit 1; }
git fetch -q origin
if git merge-base --is-ancestor HEAD origin/main; then
  echo "saved and verified on origin/main: $(git log -1 --format='%h %s')"
else
  echo "ERROR: HEAD is not on origin/main after push" >&2; exit 1
fi
