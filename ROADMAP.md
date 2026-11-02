# Anuvad roadmap

Where Anuvad is going (see [TASKS.md](TASKS.md) for what's done and what's next): translate **anything** (a word, text, an image, a PDF or a document) between **any languages**, with results you can edit, refine and download.

Anuvad stays a website that opens from a link. It is not an installable app.

---

## ✅ v1: done (live now)

- Hindi PDF → English, page by page, with the original page beside the translation
- Reads pages as images, so old Hindi fonts (Kruti Dev etc.) and scanned pages work
- Keeps headings, lists, line breaks and tables; skips printed page numbers and running headers
- **Subject field:** translates with that field's own terminology (music, history, law…), or detects the field when left empty
- Technical terms: keep with English meaning, keep only, or translate
- Bilingual output (Hindi line, then English)
- Fast: up to 3 pages at once, fastest Gemini model by default, adapts to Google's free limits
- Live progress per page with a countdown, plus an overall time-left estimate
- Edit, copy or translate again any page
- Download as `.html` (opens in Word) or `.md`; copy all
- Free: each user adds their own Google (Gemini) access code, with a step-by-step guide

## ✅ v1.1: done (live now)

- **Optional word limit:** condense the English to about N words, **per page** or **in total**, without losing the gist or the subject matter (main points, key facts, names, numbers and subject terms are kept; only repetition and minor detail are dropped). For "in total", the limit is shared across pages by how much text each has. Left empty, everything is translated in full. A page that comes out more than 15% over the limit gets a quick text-only condensing step.
- **Word counts** next to each page and in total
- **Download as PDF** (first version used the browser's print window; replaced in v1.2)

## ✅ v1.2: done (live now)

- **Download options at the top right:** Download PDF, `.html`, `.md` and Copy all moved from the bottom-left panel into a bar at the top right of the translation area, with the total word count beside them. The bar is always shown at the top; its buttons are grey until a PDF is chosen, then turn dark yellow.
- **Direct PDF download:** the PDF is made in the browser and saved through the computer's Save window (no print window). Pages break between lines, with page numbers at the bottom. All downloads open the Save window in Chrome and Edge.

## ✅ v1.3: multiple PDFs (done)

- **Upload several PDFs at once** (choose them together, drop them together, or add more later). They are translated as one combined document, in the order they were added. In the page list, each PDF gets a heading showing which page numbers it covers.
- **Each uploaded PDF shows as a bubble** with its name, page count and a **✕ button**:
  - Clicking ✕ removes only that PDF (its pages and any translation of them); the other PDFs stay as they are.
  - If it was the only PDF, the upload area is empty again, ready for a new one.
- **Combined downloads:** Download PDF, `.html`, `.md` and Copy all cover every uploaded PDF together, with each PDF's name as a heading before its pages.
- Page range and word limit ("in total") apply across the combined document.

---

## Phase 1: any language, text and word modes

Day-to-day progress is tracked in [TASKS.md](TASKS.md).

- ✅ **Any language → any language** (v1.4): 117 languages, auto-detect the source, swap button, recent languages pinned. Built into the current single-file site.
- ✅ Right-to-left support (Urdu, Arabic, Persian, Hebrew…) on screen and in downloads
- **New project structure** (Vite + TypeScript; React still to be decided) on a `v2` branch, merged into `main` through one pull request. Only if the single file gets too big to manage.
- ✅ **Text mode** (v1.5): type or paste text, translate, edit, copy, download
- ✅ **Word mode** (v1.6): a single word gives a dictionary card with meanings, part of speech, examples, transliteration and pronunciation
- Subject field and word limit available in every mode

## Phase 2: more inputs

- **Images and photos:** upload, paste a screenshot (Ctrl+V), or take a photo with the phone camera
- **Word (.docx), PowerPoint and .txt files**

## Phase 3: editing and refining

- Side-by-side view: original and translation, both editable
- **Refine with an instruction:** select a part (or the whole document) and say *"more formal"*, *"simpler English"*, *"keep terms in Hindi"* to retranslate just that part
- **Glossary:** fix a term once and every page follows it
- Tone presets: Formal, Simple, Academic, Literal
- ✅ Work is saved in the browser, so a refresh never loses it (done in v1.4)
- History of past documents to reopen

## Phase 4: downloads

- **Word (.docx)** download
- **PDF** with selectable, searchable text (embedded fonts for every script); today's PDF is made of page images
- Copy all
- Bilingual export (original and translation together)

## Later ideas

- Free on-device translation for plain text with no access code (Chrome's built-in translator)
- "Explain" mode alongside "Translate", for students
- Voice input: record or upload audio, get a transcript and translation
- Option to plug in other AI engines (e.g. Claude) besides Gemini

## Not planned

- Keeping the exact original PDF layout with translated text placed in the same positions (very hard, poor results)
- An installable app
