# Anuvad tasks

What's done, what's being worked on, and what's next. The bigger plan is in [ROADMAP.md](ROADMAP.md).

Last updated: 4 November 2026

---

## 🚧 In progress

- [ ] Check v1.7 and v1.8 on the live site: real translations with a real access code, the Word download opened in Word, and **Take a photo** on a phone (tested so far with sample replies only)
- [ ] Check v1.9 on the live site with real services: a real recording through Gemini, a real Anthropic key, and Chrome's translator in real Chrome (tested so far with stand-ins)

## ⏭️ Next up

- [ ] Optional: finish Try a sample (see below)
- [ ] Add new screenshots to the README, taken from real translations (the old ones showed the first design and were removed)
- [ ] Decide on moving to Vite + TypeScript: `index.html` is now about 2,560 lines, close to the 3,000-line point set on 2 November 2026

## ✅ Done

### v1.12: small fixes after the first real tests
- [x] Word cards no longer start their second line with a stray dot
- [x] Hover over "translated in" to see when the AI sent its first words and when it finished; a note appears if a reply takes over 10 seconds
- [x] Real checks passed by hand: Text mode (English to Hindi) and Word mode ("bonjour") with a real access code

### Try a sample: built but switched off
To switch it on: add a real translation as samples/sample.md, commit samples/, and set SAMPLE_READY to true.
- [x] **Try a sample** button at the top shows a saved example with no access code and no AI request, clearly labelled as saved; downloads work on it
- [x] It stays hidden until then, so a made-up result can never be shown
- [x] samples/sample.png: a free-to-share Hindi notice written for this purpose (heading, paragraph, numbered list, table)

### v1.11: fixes from the full test
- [x] Security: links in translations can only be web or mail links, pictures from other sites never load, and HTML shows as plain text
- [x] Security: a Content Security Policy, and integrity checks on the libraries
- [x] Claude key check now reads Anthropic's reply properly, so a wrong key says so (a correct key still needs a real test)
- [x] Word limit in total now adds up to the limit
- [x] Symbols in code text show correctly, and the Word download keeps text that looks like an HTML tag
- [x] Mode buttons and messages work better with screen readers; clearer page title and link previews; wording fixes
- [x] Automated tests with `node --test`, run by GitHub Actions; README updated, with a security section

### v1.10: guide and required language
- [x] **First-visit guide**: a 9-step tour that dims the page and points at each part, with Back, Next and Skip; it opens once, and **How it works** at the top replays it. Works on phones and with the keyboard
- [x] Hints on the empty page: add a file, choose a language, click Translate
- [x] **Translate to is required**: it starts empty and is never filled in for you. If it's empty when you translate, look up a word or use Translate again, a pop-up asks for it, then the work carries on. The choice is remembered. **Translate from** stays on Detect automatically
- [x] **Subject** is marked optional, and explains that most translations will use the field's own keywords and terminology

### v1.9: the "Later ideas"
- [x] **AI engine** choice at the top of the left column: Google Gemini, Anthropic Claude or Chrome's translator; each keeps its own key
- [x] **Claude**: Opus 5.5, Sonnet 5.5 or Haiku 5.5 with the person's own Anthropic key, for pages, photos, text, words and Refine (no audio)
- [x] **Chrome's translator**: free plain-text translation on the computer in Text mode, in browsers that have it; language detection, line breaks kept, and a clear message if it doesn't respond
- [x] **Explain mode** (*What to do* in Options): a short summary, a plain explanation, key terms and points to remember, for every file type and Text mode
- [x] **Voice input**: **Record your voice** (up to 7 minutes) or upload audio; a player beside a transcript and its translation, or an explanation; kept after a refresh and in History

### v1.8: documents, refining and downloads (Phases 2–4)
**More inputs**
- [x] **Word (.docx), PowerPoint (.pptx) and .txt** files in the same upload box; Word keeps headings, lists and tables; PowerPoint gives one page per slide; long text is split into parts of about 3,500 characters at paragraph breaks
- [x] Their pages show the original text beside the translation, with **Edit original** (a changed original is translated again with the next Translate)
- [x] Empty PowerPoint slides are marked "No text" without asking Google; old .doc/.ppt files get a message to save them as .docx/.pptx
- [x] The first tab is now called **Files**

**Editing and refining**
- [x] **Refine…** on every translation: select part of it (or nothing, for all of it) and give an instruction; **Undo change** brings the previous version back
- [x] **Refine the translation** (Translate panel): the same for every translated page in the From–To range at once
- [x] **Tone**: Like the original, Formal, Simple, Academic, Literal
- [x] **Glossary** (original = translation, one per line) followed by every translation, the language check and the condensing step
- [x] **Fix a word everywhere**: replaces a word in all finished translations at once, and can add it to the glossary
- [x] Text mode shows your text and its translation side by side on wide screens
- [x] **History** (bottom of the left column): the last 30 translated file sets, texts and words, with Open and ✕; adding a file to a set updates its entry

**Downloads**
- [x] **Download Word** (.docx): headings, bold/italic, lists, tables and right-to-left text as real Word formatting
- [x] **PDF text can be selected, searched and copied** (invisible text in Noto fonts over the page pictures; all scripts except Chinese, Japanese and Korean)
- [x] **Include the originals (bilingual)**: each page's original picture or text before its translation, in PDF, Word, .html and .md (pictures only in PDF, Word and .html)

### v1.7: Images and photos (Phase 2, step 1)
- [x] Add JPG, PNG, WebP, GIF, BMP or AVIF images in the same upload box as PDFs (choose, drop, or several at once); they mix with PDFs into one combined translation
- [x] **Ctrl + V** pastes a screenshot or copied image from anywhere on the page (switches to PDF / Image if needed), named "Screenshot 1", "Screenshot 2"…
- [x] **📷 Take a photo** button on phones and tablets opens the camera
- [x] Each image shows as a bubble with ✕ and as one page, with the original beside the translation
- [x] Photos over 3000 px are scaled down before saving and sending; small screenshots are sent whole, large images in two overlapping halves
- [x] Instructions tuned for photos: ignore the background, read tilted text in order
- [x] Images are kept after a refresh, like PDFs
- [x] The first tab is now called **PDF / Image**

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
