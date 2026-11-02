# Anuvad tasks

What's done, what's being worked on, and what's next. The bigger plan is in [ROADMAP.md](ROADMAP.md).

Last updated: 2 November 2026

---

## 🚧 In progress

- Nothing right now.

## ⏭️ Next up

- [ ] Decide whether to move to a Vite + React + TypeScript project (on a `v2` branch) before Phase 2, or keep growing the single-file site

## ✅ Done

### v1.6: Word mode (Phase 1, step 3)
- [x] **Word** added to the PDF / Text switch
- [x] Type a word or short phrase (up to 60 characters) and press Enter or **Look up in …**
- [x] Dictionary card: the word, transliteration, IPA pronunciation, its language, meanings grouped by part of speech, 1–2 example sentences per meaning with translations, synonyms, opposites, forms and a usage note
- [x] Subject field puts the subject's meaning first; Detect automatically works; the same language on both sides gives a one-language dictionary entry
- [x] **🔊 Listen** reads the word aloud with the browser's own voice for its language
- [x] Edit, Copy, Look up again; download as PDF, `.html` or `.md`, or Copy all ("Dictionary - शांति - English.pdf")
- [x] Technical terms, Output and Word limit are hidden in Word mode (they don't apply)
- [x] A sentence typed in Word mode points to Text mode instead
- [x] The word and its card are kept after a refresh

### v1.5: Text mode (Phase 1, step 2)
- [x] **PDF / Text** switch at the top of the left column; the choice is remembered
- [x] Type or paste up to 20,000 characters in any language, with a character count and a Clear button
- [x] Translate with the same options: languages (auto-detect, swap), subject, technical terms, output and word limit (for the whole text)
- [x] **Ctrl + Enter** translates
- [x] Edit, Copy and Translate again on the result; the same leftover-language check as PDFs
- [x] Download the translated text as PDF, `.html` or `.md`, or Copy all ("Translated text - French.pdf")
- [x] The text and its translation are kept after a refresh
- [x] Right-to-left text in the input box and the result (Urdu, Arabic…)

### v1.4: any language → any language (Phase 1, step 1)
- [x] **Translate from / Translate to** pickers with 117 languages, grouped as Recent, Popular and All languages
- [x] **Detect automatically** as the default original language
- [x] **Swap** button to flip the two languages
- [x] The last languages used are pinned under **Recent** (up to 5), and the choice is remembered
- [x] Translation instructions, subject terminology, technical terms, names and digits all follow the chosen target language
- [x] **Right-to-left** output for Urdu, Arabic, Persian, Hebrew, Pashto, Sindhi and others: on screen, in `.html` and in the PDF
- [x] Word counts and the word limit count words in the target language's own script (characters for Chinese and Japanese)
- [x] Downloads are named and titled with the target language (e.g. "Sangeet - Urdu.pdf")
- [x] Fix: after changing any setting (language, subject, technical terms, output, word limit) or the page range, **Translate** re-translates the affected pages with the new settings, with no need to upload the PDF again. If nothing changed, it redoes the pages in the range. The button says which language it translates into, and each page shows its language
- [x] **Nothing is lost on refresh:** uploaded PDFs, translations (including edits), all options and the page range are kept in the browser and come back after a refresh or when the tab is reopened. ✕ also deletes a PDF from the browser's storage
- [x] Fix: dense pages (tables, handwriting) sometimes came back copied in the original language. The instructions now insist on the target language, and if under 80% of a page is in the target script, a quick text-only step translates the leftover parts

### v1.3: multiple PDFs
- [x] Upload several PDFs at once, or add more later
- [x] Each PDF shows as a bubble with a ✕ that removes only that PDF
- [x] Pages numbered across all PDFs, with a heading per PDF
- [x] Combined downloads, each PDF starting with its name as a heading
- [x] Fix: a long PDF name no longer makes the left column overlap the pages

### v1.2: downloads
- [x] Download bar at the top right, always shown; buttons grey until a PDF is chosen, then dark yellow
- [x] PDF made in the browser and saved through the computer's Save window (no print window)
- [x] `.html` and `.md` also open the Save window (Chrome and Edge)

### v1.1: word limit and PDF
- [x] Optional word limit, per page or in total, keeping the gist and subject matter
- [x] Extra condensing step when a page comes out more than 15% over the limit
- [x] Word counts per page and in total
- [x] Screenshots in the README

### v1: Hindi PDF → English
- [x] Page-by-page translation with the original page beside it
- [x] Reads pages as images (old Hindi fonts and scans work)
- [x] Keeps headings, lists, line breaks and tables; skips printed page numbers
- [x] Subject field with field-specific terminology
- [x] Technical terms, bilingual output, edit, copy, translate again
- [x] Fast: 3 pages at a time, Flash-Lite by default, live countdown
- [x] Free: each person uses their own Google access code
- [x] Charcoal and saffron dark theme; © notice; published on GitHub Pages
- [x] GitHub About box filled in and the repository pinned on the profile
