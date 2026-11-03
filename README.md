# Anushka Tadphale — Portfolio

A static portfolio site (HTML, CSS and a small amount of vanilla JavaScript). No build step is needed to host it, no external fonts, APIs or CDNs: everything is served from this folder, so it works as-is on GitHub Pages.

## What's in the folder

```
index.html            Home
work.html             Work (filterable project grid)
cocreate.html         Project detail pages
asapintel.html
trip-guardian.html
money-desk.html
about.html            About Me (intro, skills)
journal.html          Journal
contact.html          Contact
404.html              Custom "not found" page (GitHub Pages serves it automatically)
robots.txt            (+ sitemap.xml once you set your URL, see below)
_config.yml           GitHub Pages settings (keeps README, tools and _source out of the site)
assets/
  css/styles.css      All styling and design tokens (colours are CSS variables at the top)
  js/main.js          Menu, scroll animations, work filters, table-of-contents highlight
  img/                Profile photo, project screenshots, background SVGs and favicon
tools/                Optional page generator (see "Editing content")
_source/              Your original brief: portfolio.md, theme image, old wireframe (not published)
```

## 1. Personalise (do these before publishing)

| What | Where |
|---|---|
| **Logo** | Already added: `assets/img/logo.png` (transparent PNG), shown at the top-left of every page. Replace the file to change it, or edit the `logo-slot` block in `tools/build.mjs` (use an SVG for the sharpest result). |
| **Profile photo** | Already added: `assets/img/profile.jpg` (800×960). Replace the file to change it. |
| **Email, LinkedIn, résumé** | Edit the `SITE` block at the top of `tools/content.mjs`, then run `node tools/build.mjs`. To show a résumé link, put the PDF at `assets/Anushka-Tadphale-Resume.pdf` and set `resume` to that path (it is hidden by default). Add GitHub or other links in `contactLinks()` in `tools/build.mjs`. |
| **Site URL** | Set `SITE.url` in `tools/content.mjs` (for example `https://your-username.github.io/portfolio`). This enables canonical links, social tags and `sitemap.xml`. |
| **Project images** | Already added: `assets/img/<project>.jpg` (16:10 crop for cards/hero) and `<project>-full.jpg` (uncropped, shown in the "Product preview" section). To update, replace those files and keep the names; adjust alt text and captions in the `SHOTS` map in `tools/build.mjs`. |

### Content still marked "to confirm" in `portfolio.md`
These were deliberately **not** published, to avoid inventing facts. Add them in `tools/content.mjs` when known:
- ASAPIntel: your role and team size (shown as `facts` once added) and any user/pilot data.

## 2. Editing content

All copy lives in `tools/content.mjs` (projects, skills, intro, journal notes). After editing:

```bash
node tools/build.mjs     # regenerates every .html page (needs Node 18+)
node tools/check.mjs     # verifies links, anchors, alt text and that nothing loads from external hosts
```

You can also edit the generated `.html` files directly, but re-running the build will overwrite them.

**Add a journal entry:** add an object to `NOTES` in `content.mjs` (or copy a `note-card` block in `journal.html`).

**Preview locally:** open `index.html` in a browser, or run `npx serve .` / `python -m http.server` in this folder.

## 3. Deploy to GitHub Pages

1. Create a GitHub account and a new **public** repository (e.g. `portfolio`; or `your-username.github.io` for a root-level URL).
2. Put the contents of this folder at the repository root (`index.html` must be at the top level). From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, Branch: `main`, folder `/ (root)`, then **Save**.
4. Wait 1–2 minutes. Your site is at `https://<your-username>.github.io/<repo>/` (or `https://<your-username>.github.io/` for the special `<your-username>.github.io` repo).
5. Updates: commit and push to `main`; Pages redeploys automatically.

All internal links are relative (`work.html`, `assets/...`), so the site works both at the root and under a `/<repo>/` sub-path.

**Custom domain (optional):** Settings → Pages → Custom domain, then add a DNS `CNAME` record to `<your-username>.github.io`. GitHub creates a `CNAME` file for you. Tick "Enforce HTTPS". Update `SITE.url` afterwards.

## Notes

- **Fonts:** the design uses a refined serif stack (Iowan Old Style / Palatino / Georgia) and the system sans-serif, so no font files are downloaded. To use a specific typeface, download the `.woff2` files, put them in `assets/fonts/`, add `@font-face` rules at the top of `styles.css` and update `--serif` / `--sans`.
- **Accessibility:** skip link, semantic landmarks, keyboard-operable menu and filters, visible focus, `aria-current` on navigation, reduced-motion support, and AA text contrast on the pastel palette.
- **Performance:** one small CSS file, one small deferred script, SVG artwork, no tracking or third-party requests.
- **404 page:** on GitHub Pages a missing deep path like `/foo/bar` shows `404.html` but its relative assets won't load from that depth. A missing top-level page works fine.
