# Primary sources (owner's library)

Owner-provided Google Drive links to primary sources (2026-10-19). Use these when enriching
principles: the verbatim source quote is a real plus, and these files are the authoritative
texts. Fetch them when the web version is paywalled or ambiguous.

Note: these are share links; if a file will not open for an agent, fall back to a citable web
edition (Perseus, MIT Classics, accesstoinsight, etc.) and note it in the batch log.

## Folders

- https://drive.google.com/drive/folders/1_A728jXnjn38Hp5eeKsUP4LwbuUE1W7m?usp=drive_link
- https://drive.google.com/drive/folders/1swsw30jR7oxwGVzCInILPKduCIbqGmbA?usp=drive_link
- https://drive.google.com/drive/folders/1DfK4ikKLeFBD6ZvdsBM5YvTcx-X6670g?usp=drive_link
- Daoism (owner, 2026-10-19): https://drive.google.com/drive/folders/1YmCifTc27wbYfmgzZHuB5S1yxg4xYDGJ?usp=sharing
- Buddhism (owner, 2026-10-19): https://drive.google.com/drive/folders/1g3ZBYHF5aIjBdOPFy79UgKy32YpLnFn5?usp=sharing

## How to read Drive files (verified 2026-10-19)

- **List a folder**: fetch_url on the folder link (it renders the JavaScript page) and ask
  for the file list. For file IDs, fetch the same URL with `return_html: true` and extract
  `data-id="..."` attributes from the raw HTML.
- **Download any file**: `curl -sL "https://drive.google.com/uc?export=download&id=FILE_ID"
  -o file` in bash (works for public share links; tested up to 86 MB). Files over ~100 MB may
  show a virus-scan confirm page — fall back to `drive.usercontent.google.com/download?id=ID&confirm=t`.
- **PDFs**: fetch_url can extract text directly from the `uc?export=download&id=FILE_ID` URL.
- **EPUBs**: fetch_url cannot parse them. Read them in bash instead: download with curl, then
  use python `zipfile` to open, read the `.opf` for title/author, and strip HTML tags from the
  `.xhtml/.html` entries to get plain text. Verified working (Delphi Epictetus, below).
- So: no need to filter the library to PDFs — DRM-free epubs are readable.

## Files

- https://drive.google.com/file/d/1eU1GCTO4eubhW8PoC5U5ai88doTtTWSO/view?usp=drive_link
- https://drive.google.com/file/d/1cd4MJNIIPY6Wi2aJNMdgfy9Hc2a__sJN/view?usp=drive_link
- https://drive.google.com/file/d/12TtAUzBZ-0e-Gb-X7FzNBCJYf9z5pAxc/view?usp=drive_link
- https://drive.google.com/file/d/1QpU4aKY9iOPfEgizMjWZnJbS-EIpWzY8/view?usp=drive_link
- https://drive.google.com/file/d/10nWUjvXrxt_kLB8h8R062fB_TuoBPa2S/view?usp=drive_link
- https://drive.google.com/file/d/1fnmij9tmUzMsc3cS6krb2D4vvVPtSZbf/view?usp=drive_link
- https://drive.google.com/file/d/1l56PY8GjJDeT9UxFhsQekwU7VZcA95u7/view?usp=drive_link
- https://drive.google.com/file/d/1nWaXkpYBfpcAUt2I8LvrR_EyvOZTVwQT/view?usp=drive_link
- https://drive.google.com/file/d/1NeWIgF_gasWYAThk7RhnN50VTnW1fY7m/view?usp=drive_link
- https://drive.google.com/file/d/1yw7eBYt6rAIxdg5VZao7BdqAAGkUcueB/view?usp=drive_link
- Epictetus — Delphi Complete Works of Epictetus (epub; Greek text + English translations;
  use for E-band principles): https://drive.google.com/file/d/1EDkL63FuSpabjbB7amxNodYocj_q_vaH/view?usp=drive_link

## Folder contents map (verified 2026-10-19)

- Daoism folder: 4 PDFs — Livia Kohn, Chinese Healing Exercises (Daoyin); Livia Kohn (ed.),
  Daoism Handbook; Livia Kohn, Sitting in Oblivion (Daoist meditation); Livia Kohn, Daoism:
  A Contemporary Philosophical Investigation.
- Buddhism folder: 7 PDFs — Laumakis, An Introduction to Buddhist Philosophy (Cambridge);
  Segall, Buddhism and Human Flourishing; Conze, Buddhist Wisdom Books (Diamond + Heart
  Sutra); Sheng Yen, Hoofprint of the Ox; Franck (ed.), The Buddha Eye (Kyoto School);
  Thich Nhat Hanh, The Heart of the Buddha's Teaching; Davis, Zen Pathways.

## Owner's local library (from All-Books.pdf, 2026-10-19)

The owner's local library is larger than the Drive. Key holdings for the wiki (ask the owner to
upload to Drive when a quote is needed from one of these):

- Daoism: Ziporyn, Zhuangzi: The Complete Writings (epub); Roth, Original Tao (Nei-yeh);
  Slingerland, Trying Not to Try; the four Livia Kohn books (already in Drive).
- Buddhism: Batchelor (After Buddhism; Secular Buddhism; Buddhism without Beliefs; Buddha,
  Socrates, and Us); Dogen (How to Cook Your Life; Treasury of the True Dharma Eye;
  Genjokoan: The Way of Everyday Life); TNH, Conze, Sheng Yen x2, Davis (Zen Pathways +
  Oxford Handbook of Japanese Philosophy), Laumakis, Segall, Tim Desmond (already partly in Drive).
- Pragmatism: Dewey, Complete Works (2024) + Human Nature and Conduct + Art as Experience;
  William James, Delphi Complete Works + Varieties + Pragmatism + A Pluralistic Universe;
  Putnam, Pragmatism: An Open Question.
- Stoicism / Hellenistic: Delphi Epictetus (Drive); Gateway to the Stoics; Hadot, The Inner
  Citadel; Cambridge Companion to the Stoics; Annas (Hellenistic Philosophy of Mind;
  Intelligent Virtue); Seneca: The Basics; Beyond Stoicism.
- Aristotle / virtue: Complete Works (Revised Oxford Translation); Nicomachean Ethics;
  Cambridge Companion to Aristotle; Peterson & Seligman, Character Strengths and Virtues;
  Handbook of Virtue Ethics; Annas & Narvaez, Developing the Virtues.
- Other: Kant, Spinoza, Nietzsche, Hume, Hegel (complete works); Heraclitus, Fragments; Popper,
  Objective Knowledge; Bergson, Oeuvres complètes; the owner's own Principles of Genuine
  Flourishing I-IV and Stories of Genuine Flourishing III.

Known gap (order placed with owner, 2026-10-19): PEIRCE. 65 principles cite him and the library
has no Peirce volume; web editions are scattered. Recommended: The Essential Peirce vols 1-2
(Indiana UP). Until it arrives, workers cite Peirce via citable web editions (SEP entries,
Collected Papers on archive.org) with locators, or route Peirce-heavy items to James/Dewey
sources where the idea is shared.

Supervisors: when an agent identifies what a specific Drive file contains (which work, which
translation), record it here so the map builds up over time.
