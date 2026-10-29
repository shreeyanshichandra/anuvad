# अनुवाद Anuvad

**Translate Hindi PDFs into clean, structured English — free, right in your browser.**

Upload a Hindi PDF (a book, syllabus, notice, letter or form), pick the pages, and Anuvad gives you an English version that keeps the headings, lists and tables of the original. Edit anything you want, then download it as a Word-ready `.html` file or as Markdown.

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

- **Page-by-page translation** with the original page shown beside the English
- **Fast**: several pages are translated at once, usually about 15 seconds per page
- **Live progress**: each page shows what is happening (preparing, reading, writing) with a countdown, plus an overall time-left estimate that learns from real page times
- **Keeps the structure**: headings, numbered lists, line breaks and tables; skips the book's printed page numbers and running headers
- **Subject-aware terms**: keep terms like *Panchayat* or *Raag* with an English meaning, keep them as they are, or fully translate them
- **Bilingual mode**: each Hindi line followed by its English translation, handy for checking
- **Edit, copy or redo** any page
- **Export** to `.html` (opens in Word, or save it as PDF) or `.md`
- **Private by design**: no server and no sign-up. Your PDF and access code stay in your browser and go only to Google for the translation.

## How to use it

1. **Open Anuvad.** Use the link above, or download `index.html` from this repository and double-click it.
2. **Add your free Google access code** (first time only, about 2 minutes):
   1. Click **Get my free code from Google** in the app. It opens [Google AI Studio](https://aistudio.google.com/apikey).
   2. Sign in with your Google (Gmail) account.
   3. Accept the terms if asked, then click **Create API key**.
   4. Copy the code (it starts with `AIza`), paste it into Anuvad and click **Save**.
3. **Upload your PDF**, optionally type the subject (for example *History* or *Law*), and click **Translate pages**.
4. **Review and download** the English version.

No card or payment is needed. The code is remembered on your device, so you only do step 2 once.

## Good to know

- **Free limits:** Google's free plan allows a limited number of requests per minute and per day. Anuvad uses one request per page. If it hits the per-minute limit, it waits and continues on its own. Very large PDFs may need to be finished the next day.
- **Privacy:** on the free plan, Google may use what you send to improve its services. Don't upload private or confidential documents.
- **Accuracy:** AI translation is very good but not perfect. Check important details such as marks, dates and names before you rely on them. Every page can be edited.

## How it works

```
PDF ──▶ PDF.js renders each page to an image (split into two overlapping halves so small Devanagari stays sharp)
     ──▶ Gemini reads the Hindi from the images and translates it, keeping the layout as Markdown
     ──▶ the answer streams back as Markdown and is shown with marked.js
     ──▶ export as .html or .md
```

The PDF's own text layer is sent along as a hint for numbers and spellings, but the images are treated as the source of truth.

- Everything is one file, `index.html`: plain HTML, CSS and JavaScript, with no build step and no backend.
- Libraries load from cdnjs: [PDF.js](https://mozilla.github.io/pdf.js/) and [marked](https://marked.js.org/).
- Translation uses the [Gemini API](https://ai.google.dev/) with each user's own key. By default it picks the newest stable **Gemini Flash-Lite** model with minimal thinking, which is the fastest; slower, more careful models can be chosen under **AI model**.
- Up to 3 pages are translated in parallel. If Google's free per-minute limit is hit, Anuvad lowers the number of parallel pages, waits as long as Google asks, and continues.
- PDF parsing runs in a background Web Worker, so the page stays responsive while translating.

## Run it locally

No install needed. Download `index.html` and open it in Chrome, Edge or Firefox.

## License

© 2026 Shreeyanshi Chandra. All rights reserved.
This code may not be copied, modified or redistributed without permission.
