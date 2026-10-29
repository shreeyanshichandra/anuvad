# Anuvad roadmap

Where Anuvad is going: translate **anything** (a word, text, an image, a PDF or a document) between **any languages**, with results you can edit, refine and download.

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

---

## Next: v1.1 (small additions to the current version)

### Optional word limit
An optional field where the user can set how long the translation should be, for example *"about 300 words"*, per page or for the whole document.

- **Optional:** left empty, Anuvad translates everything in full, as now.
- When set, the translation is condensed to fit the limit, but **the gist and the subject matter must not be lost**:
  - keep every main point, argument and conclusion,
  - keep key facts, names, dates, numbers and technical terms,
  - keep the original order and structure (headings stay headings),
  - drop only repetition, examples and minor detail, never core content,
  - use the subject's terminology (works together with the Subject field).
- Shows the actual word count next to each page and for the whole document.
- Choice of **per page** or **whole document**. For the whole document, the limit is shared across pages in proportion to how much text each page has.

---

## Phase 1: any language, text and word modes

- **New project structure** (Vite + TypeScript; React still to be decided) on a `v2` branch, merged into `main` through one pull request
- **Any language → any language:** searchable list of 100+ languages, auto-detect the source, swap button, recent languages pinned
- **Text mode** (new home screen): type or paste text, translate, edit, copy
- **Word mode:** a single word gives a dictionary card with meanings, part of speech, examples, transliteration and pronunciation
- **PDF mode** carried over and working for any language
- Right-to-left support (Urdu, Arabic, Persian) and correct fonts for every script
- Subject field and word limit available in every mode

## Phase 2: more inputs

- **Images and photos:** upload, paste a screenshot (Ctrl+V), or take a photo with the phone camera
- **Word (.docx), PowerPoint and .txt files**
- PDFs in any language

## Phase 3: editing and refining

- Side-by-side view: original and translation, both editable
- **Refine with an instruction:** select a part (or the whole document) and say *"more formal"*, *"simpler English"*, *"keep terms in Hindi"* to retranslate just that part
- **Glossary:** fix a term once and every page follows it
- Tone presets: Formal, Simple, Academic, Literal
- Auto-saved history in the browser, so a refresh never loses work

## Phase 4: downloads

- **Word (.docx)** download
- **PDF** download (print-ready layout first, one-click PDF with embedded fonts later)
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
