# अनुवाद Anuvad

[![Tests](https://github.com/shreeyanshichandra/anuvad/actions/workflows/test.yml/badge.svg)](https://github.com/shreeyanshichandra/anuvad/actions/workflows/test.yml)

**Translate or explain PDFs, photos, documents, audio and text between 117 languages, free, right in your browser.**

Add a PDF, photo, Word or PowerPoint file, a recording or some typed text, choose your language, and Anuvad gives you a translation that keeps the headings, lists and tables of the original, or a simple explanation of it. It started as a Hindi → English tool and still shines there, but any pair works: Hindi → Urdu, Bengali → English, French → Hindi and so on. Edit anything you want, then download it as a PDF, Word file, `.html` or Markdown.

**▶ Try it:** https://shreeyanshichandra.github.io/anuvad/

---

## Why Anuvad

Copying text out of a Hindi PDF usually gives you gibberish. Many Hindi books and documents are typed in old fonts such as Kruti Dev, so the "text" inside the file looks like this:

```
lEekfur ikBdksa dks lwfpr djrs gq;s g"kZ gks jgk gS
```

Ordinary translators can't do anything with that. Anuvad **reads each page as an image**, the way a person would, so it works with:

- old Hindi fonts (Kruti Dev, Chanakya and similar)
- scanned or photographed pages
- normal Unicode Hindi PDFs

## Features

- **Any language → any language**: 117 languages, with the original language detected automatically, a swap button, and your recent languages pinned at the top
- **Photos, scans and screenshots**: add JPG, PNG or WebP images alongside PDFs, paste a screenshot with **Ctrl + V**, or tap **Take a photo** on a phone. Each image is translated like a page, with the original beside it; big phone photos are scaled down first so they send quickly
- **Word, PowerPoint and text files**: add `.docx`, `.pptx` or `.txt` files too. They're split into parts (one per slide for PowerPoint), shown side by side with their translation, and the original text can be corrected with **Edit original**
- **Text mode**: no PDF? Switch to **Text**, type or paste up to 20,000 characters and translate it with the same options and downloads
- **Voice and audio**: click **Record your voice** or add an audio file (MP3, WAV, M4A and others, up to about 14 MB) to get a transcript and its translation (Gemini only)
- **Explain mode**: choose **Explain in simple words** under *What to do* for a short summary, a plain explanation, the key terms and points to remember, instead of a line-by-line translation
- **Choice of AI engine**: Google Gemini (free, with your own code), Anthropic Claude (paid, with your own key) or, for plain text in Chrome, Chrome's built-in translator (free, no code, runs on your computer)
- **Word mode**: type a single word or short phrase and get a dictionary card: meanings by part of speech, example sentences with translations, transliteration, pronunciation (IPA, plus a **Listen** button), synonyms, opposites and usage notes. With a subject set, the subject's meaning comes first
- **Right-to-left output** for Urdu, Arabic, Persian, Hebrew and others, on screen and in downloads
- **Page-by-page translation** with the original page shown beside the translation
- **Several PDFs at once**: add as many as you like; each shows as a bubble with a ✕ to remove it, and they're translated and downloaded as one combined document with each PDF's name as a heading
- **Fast**: several pages are translated at once
- **Live progress**: each page shows what is happening (preparing, reading, writing) with a countdown, plus an overall time-left estimate that learns from real page times
- **Keeps the structure**: headings, numbered lists, line breaks and tables; skips the book's printed page numbers and running headers
- **Subject-aware terms**: keep terms like *Panchayat* or *Raag* with a meaning in brackets, keep them as they are, or fully translate them
- **Optional subject**: name the subject (music, history, law…) and most translations will use that field's own keywords and terminology; left empty, it works out the field from your content
- **Guided first visit**: a short tour points at each part of the page the first time you open Anuvad, and **How it works** replays it
- **You choose the language**: the language to translate into is required and never assumed; if it's empty, a pop-up asks for it, and your choice is remembered
- **Optional word limit**: condense the translation to about N words, per page or in total, while keeping every main point, key fact, name, number and subject term. If a page comes out over the limit, Anuvad condenses it in a quick second step. Word counts are shown per page and in total
- **Bilingual mode**: each original line followed by its translation, handy for checking
- **Tone**: like the original, formal, simple, academic or literal
- **Glossary**: list your own translations for particular words (e.g. `राग = Raga`) and every translation follows them; **Fix a word everywhere** replaces a word in all finished translations at once
- **Refine with an instruction**: select part of a translation (or none, for all of it), click **Refine…** and say *"more formal"* or *"simpler English"*; only that part is rewritten, with **Undo change** if you don't like it. **Refine the translation** does the same for every page at once
- **Edit, copy or redo** any page
- **History**: everything you translate is kept in your browser, so you can reopen past documents, texts and words later
- **Download** as **PDF**, **Word (.docx)**, `.html` or `.md`, or copy everything, from the download bar at the top right. The PDF's text can be selected, searched and copied. Tick **Include the originals** for a bilingual download with each original page (or its text) before its translation. In Chrome and Edge, a Save window lets you choose the folder
- **Nothing lost on refresh**: your PDFs, translations and settings are kept in your browser, so a refresh or reopening the tab picks up where you left off
- **Private by design**: no server and no sign-up. Your files, translations and keys stay in your browser and go only to the AI engine you choose.

## How to use it

1. **Open Anuvad** using the link above. A short guide shows you around on your first visit.
2. **Add your free Google access code** (first time only, about 2 minutes):
   1. Click **Get my free code from Google** in the app. It opens [Google AI Studio](https://aistudio.google.com/apikey).
   2. Sign in with your Google (Gmail) account.
   3. Accept the terms if asked, then click **Create API key**.
   4. Copy the code (it starts with `AIza`), paste it into Anuvad and click **Save**.
3. **Upload one or more PDFs, images, Word, PowerPoint or .txt files** (or paste a screenshot), optionally type the subject (for example *History* or *Law*), and choose the language under **Translate to**, and click **Translate**.
4. **Review and download** the translation.

No card or payment is needed. The code is remembered on your device, so you only do step 2 once.

## Good to know

- **Free limits:** Google's free plan allows a limited number of requests per minute and per day. Anuvad uses one request per page. If it hits the per-minute limit, it waits and continues on its own. Very large PDFs may need to be finished the next day.
- **Privacy:** on the free plan, Google may use what you send to improve its services. Don't upload private or confidential documents.
- **Accuracy:** AI translation is very good but not perfect. Check important details such as marks, dates and names before you rely on them. Every page can be edited.

## How it works

```
PDF ──▶ PDF.js renders each page to an image (split into two overlapping halves so small Devanagari stays sharp)
     ──▶ Gemini reads the text from the images and translates it into the chosen language, keeping the layout as Markdown
     ──▶ the answer streams back as Markdown and is shown with marked.js
     ──▶ export as PDF (built in the browser with html2canvas + jsPDF, plus an invisible text layer in Noto fonts so it can be searched),
         Word (.docx, built with JSZip), .html or .md
```

Word files are read with [mammoth](https://github.com/mwilson/mammoth.js) and PowerPoint files with [JSZip](https://stuk.github.io/jszip/); both load only when such a file is added.

The PDF's own text layer is sent along as a hint for numbers and spellings, but the images are treated as the source of truth.

- Everything is one file, `index.html`: plain HTML, CSS and JavaScript, with no build step and no backend.
- Libraries load from cdnjs, each with an integrity check: [PDF.js](https://mozilla.github.io/pdf.js/), [marked](https://marked.js.org/) and, only when needed, [mammoth](https://github.com/mwilson/mammoth.js), [JSZip](https://stuk.github.io/jszip/), [jsPDF](https://github.com/parallax/jsPDF) and [html2canvas](https://html2canvas.hertzen.com/).
- Claude (optional) is called directly from the browser with the user's own Anthropic key; Chrome's [Translator API](https://developer.chrome.com/docs/ai/translator-api) (optional) runs on the user's computer.
- Translation uses the [Gemini API](https://ai.google.dev/) by default, with each user's own key. By default it picks the newest stable **Gemini Flash-Lite** model with minimal thinking, which is the fastest; slower, more careful models can be chosen under **AI model**.
- Up to 3 pages are translated in parallel. If Google's free per-minute limit is hit, Anuvad lowers the number of parallel pages, waits as long as Google asks, and continues.
- PDF parsing runs in a background Web Worker, so the page stays responsive while translating.

## Run it locally

No install needed. Serve the folder with any local web server (for example `npx serve`) and open it in Chrome or Edge. Opening `index.html` directly also works, but browsers may not keep your work after a refresh that way.

## Tests

`node --test` runs the tests with no install. They also run on every push through GitHub Actions.

## Security and privacy

- There is no server: nothing is stored anywhere except your own browser, and files go only to the AI engine you choose.
- Access codes are stored unencrypted in your browser's local storage, which is normal for an app with no server. Don't save yours on a shared computer: untick **Remember on this device**.
- Translations are treated as untrusted, since they come from an AI reading outside documents: HTML shows as plain text, only web and mail links stay clickable, and pictures never load from other sites.
- A Content Security Policy limits what the page can load and contact, and libraries are checked against known checksums. The policy has to allow inline scripts, because the whole app is one file.

## License

© 2026 Shreeyanshi Chandra. All rights reserved.
This code may not be copied, modified or redistributed without permission.
