#!/usr/bin/env bash
# Commit + push all enrichment work-in-progress. Safe to call from several agents (flock). Run after EVERY finished concept.
# usage: scripts/enrich_save.sh "short message"
cd "$(dirname "$0")/.." || exit 1
exec 9>/tmp/enrich_save.lock; flock 9
git config user.name >/dev/null || git config user.name "Computer"
git config user.email >/dev/null || git config user.email "genuineflourishing15@yopmail.com"
git add content docs scripts >/dev/null 2>&1
if git diff --cached --quiet; then echo "nothing to save"; exit 0; fi
git commit -qm "${1:-enrichment WIP}" 
git pull -q --rebase origin main 2>&1 | tail -1
git push -q origin HEAD:main 2>&1 | tail -1
echo "saved: $(git log -1 --format=%h)"
