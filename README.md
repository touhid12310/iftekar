# মোহাম্মদ হাবিবুর রহমান — Personal Website

A one-page personal website for **Mohammad Habibur Rahaman** (engineer, entrepreneur and social worker, Chattogram).
Plain HTML, CSS and JavaScript — no build step. Bangla is the default language, with an English switch.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

To publish, upload the whole folder (`index.html` + `assets/`) to any static host (GitHub Pages, Netlify, cPanel, etc.).

## Files

```
index.html              page markup (all Bangla text lives here)
assets/css/style.css    styles, responsive rules and the print layout
assets/js/main.js       language switch (English text), menu, search, photo lightbox, video pop-up
assets/images/          photos (WebP), logos (SVG) and favicon
```

## Language switch (বাং / EN)

- Bangla is written directly in `index.html`. English translations are in the `EN` object at the top of `assets/js/main.js`.
- Any element with `data-i18n="key"` is translated; attributes use `data-i18n-attr="placeholder:key"`.
  To change a sentence, edit the Bangla in `index.html` and the matching key in `EN`.
- The visitor's choice is remembered. You can also link straight to English with `index.html?lang=en`.

## Things to replace before going live

| What | Where | Notes |
| --- | --- | --- |
| Event photos (gallery 4–8) | `assets/images/gallery-4…8.webp` (+ `-lg` versions for the pop-up) | Currently free stock photos used as placeholders. Replace them with real event photos. |
| Videos | `data-youtube=""` on each `.video-card` in `index.html` | Put a YouTube video ID (e.g. `dQw4w9WgXcQ`) and it plays in the pop-up. Without an ID the pop-up says the video is coming soon. Thumbnails: `assets/images/video-1…5.webp`. |
| Social links | footer in `index.html` (links marked `#contact`) | Add the real LinkedIn, Facebook, YouTube and WhatsApp (`https://wa.me/880…`) URLs. |
| Email & website | footer + the green “যোগাযোগ করুন” button | Uses `info@habiburrahman.com` / `www.habiburrahman.bd` from the design. Change them if they differ. |
| Logos | `assets/images/logos/*.svg` | Recreated approximations of Uniway, Prime, Bamboo Village, Prime Multi Trading, CCCI, চাটগাঁ ভাষা পরিষদ, Eco Foundation and Lions Club. Swap in the official logo files (same file names, or update the `src`). |
| Blog posts & testimonials | `index.html` (`#blog`, `#testimonials`) + `EN` in `main.js` | Titles, dates and quotes are from the design mock-up. |
| “বিস্তারিত দেখুন” / “সব … দেখুন” links | `index.html` | Point them to company websites or detail pages when available. |

**Profile download:** the “প্রোফাইল ডাউনলোড” button opens the browser's print dialog with a clean print
layout, so it can be saved as a PDF (“Save as PDF”). If you have a designed PDF, put it in `assets/` and change the
button to `<a class="btn btn-outline-light" href="assets/profile.pdf" download>…</a>`.

**Menu note:** the design has no separate News section, so “সংবাদ” scrolls to the blog section.

## Credits

- Icons: [Font Awesome Free 6.7.2](https://fontawesome.com) — CC BY 4.0 (embedded as an SVG sprite in `index.html`).
- Fonts: Google Fonts — Hind Siliguri, Noto Sans Bengali, Poppins, Galada (SIL Open Font License).
- Portraits of Mohammad Habibur Rahaman: supplied by the site owner.
- Stock photos (CC0 / public domain, no attribution required — listed for reference):

| File(s) | Source | License |
| --- | --- | --- |
| hero-bg | [Wikimedia Commons](https://commons.wikimedia.org/w/index.php?curid=156361694) | CC0 |
| biz-uniway | [Flickr](https://www.flickr.com/photos/71401718@N00/7504483850) | CC0 |
| biz-prime-trading | [Flickr](https://www.flickr.com/photos/88123769@N02/12808767834) | CC0 |
| biz-bamboo-village, gallery-7 | [Flickr](https://www.flickr.com/photos/147881710@N02/32663187511) | CC0 |
| biz-prime-multi (globe) | [rawpixel](https://www.rawpixel.com/image/7558946/image-planet-gold-public-domain) | CC0 |
| gallery-4 | [Flickr](https://www.flickr.com/photos/41284017@N08/8503070768) | Public domain |
| gallery-5 | [Flickr](https://www.flickr.com/photos/43322816@N08/4754624921) | Public domain |
| gallery-6 | [Flickr](https://www.flickr.com/photos/38144472@N04/3942642293) | Public domain |
| gallery-8, cta-plant | [Flickr](https://www.flickr.com/photos/41284017@N08/54674568613) | Public domain |
| video-2 | [Flickr](https://www.flickr.com/photos/198109102@N06/54051860458) | CC0 |
| video-3 | [StockSnap](https://stocksnap.io/photo/office-work-42H3JH8QI5) | CC0 |
| video-4 | [Flickr](https://www.flickr.com/photos/43322816@N08/4754625651) | Public domain |
| video-5 | [StockSnap](https://stocksnap.io/photo/microphone-music-8KQC04JDT0) | CC0 |
| blog-1 | [Flickr](https://www.flickr.com/photos/132795455@N08/23052890932) | CC0 |
| blog-2 | [Flickr](https://www.flickr.com/photos/149077469@N03/31163482431) | Public domain |
| blog-3 | [rawpixel](https://www.rawpixel.com/image/6075646/community-garden-fest-mini-garden-bulb) | CC0 |
| blog-4 | [rawpixel](https://www.rawpixel.com/image/3304794/free-photo-image-trunk-cc0-countryside) | CC0 |
| blog-5 | [StockSnap](https://stocksnap.io/photo/silhouette-family-Q7UIKF58IR) | CC0 |
| band-forest | [rawpixel](https://www.rawpixel.com/image/5914530/photo-image-public-domain-tree-green) | CC0 |
| band-sprout | [rawpixel](https://www.rawpixel.com/image/5910935/image-public-domain-leaves-green) | CC0 |
