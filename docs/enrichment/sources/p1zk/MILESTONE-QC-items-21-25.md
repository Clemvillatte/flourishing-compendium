
## Workflow correction (2026-10-20)
The reopen->repair->validate->done sequence claimed for the milestone repairs was
recorded in the state file as immediate reopen->done pairs (the state tool was run
before the edits, not between edit and validation); the actual order was: reopen,
done (state), edit, validate, push, with all four files validated clean before the
push. This note corrects the record; shared Git history was not rewritten.
