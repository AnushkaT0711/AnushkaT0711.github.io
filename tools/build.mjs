// Static site generator for the portfolio. Zero dependencies.
// Usage (from the repo root):  node tools/build.mjs
// Writes plain HTML into the repo root so GitHub Pages can serve it as-is.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, INTRO, SKILLS, PROJECTS, NOTES } from "./content.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const write = (name, html) => writeFileSync(join(ROOT, name), html, "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = (s) => s.replace(/<[^>]+>/g, "");

/* ---------- icons ---------- */
const ICONS = {
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
  external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5M22 10v6"/>',
};
const icon = (n, cls = "") => `<svg class="icon icon-${n} ${cls}" aria-hidden="true" focusable="false"><use href="#i-${n}"/></svg>`;
const sprite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">${Object.entries(ICONS)
  .map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join("")}</svg>`;

/* ---------- shared layout ---------- */
const NAV = [
  ["index.html", "Home", "home"],
  ["work.html", "Work", "work"],
  ["about.html", "About Me", "about"],
  ["journal.html", "Journal", "journal"],
  ["contact.html", "Contact", "contact"],
];
const year = new Date().getFullYear();

function layout({ file, title, desc, active, body, bodyClass = "" }) {
  const full = title === SITE.name ? `${SITE.name} | Product Portfolio` : `${title} | ${SITE.name}`;
  const canonical = SITE.url ? `\n  <link rel="canonical" href="${SITE.url}/${file === "index.html" ? "" : file}">` : "";
  const og = SITE.url ? `\n  <meta property="og:url" content="${SITE.url}/${file === "index.html" ? "" : file}">` : "";
  const navItems = NAV.map(([href, label, key]) =>
    `<li><a href="${href}"${key === active ? ' aria-current="page"' : ""}>${label}</a></li>`).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(full)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="theme-color" content="#fdf7f4">${canonical}
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(full)}">
  <meta property="og:description" content="${esc(desc)}">${og}
  <link rel="icon" type="image/png" sizes="48x48" href="assets/img/favicon-48.png">
  <link rel="icon" type="image/png" sizes="192x192" href="assets/img/favicon-192.png">
  <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
  <link rel="stylesheet" href="assets/css/styles.css">
  <script>document.documentElement.classList.add("js")</script>
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ""}>
${sprite}
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container nav">
    <a class="logo-slot" href="index.html" aria-label="${SITE.name} — home">
      <img src="assets/img/logo.png" alt="" width="520" height="334">
      <span class="logo-name">${SITE.name}</span>
    </a>
    <nav aria-label="Primary" class="nav-wrap" style="display:contents">
      <ul class="nav-links" id="nav-links">${navItems}<li class="nav-panel-cta"><a class="btn btn-primary" href="contact.html">Let’s Connect ${icon("arrow")}</a></li></ul>
    </nav>
    <a class="btn btn-soft nav-cta" href="contact.html">Let’s Connect ${icon("arrow")}</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">${icon("menu", "icon-open")}${icon("close", "icon-close")}</button>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="container footer-inner">
    <p style="margin:0">© <span id="year">${year}</span> ${SITE.name}. Product · Data · AI.</p>
    <ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
  </div>
</footer>
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}

/* ---------- product screenshots (assets/img/<slug>.jpg = cropped, <slug>-full.jpg = uncropped) ---------- */
const SHOTS = {
  cocreate: { alt: "CoCreate prototype landing screen: the wordmark “CoCreate.” with the tagline “Where creators and brands collab, not just transact.”", cap: "CoCreate prototype: landing screen" },
  asapintel: { alt: "ASAPIntel analysis screen titled “Analyzing Your Investment Scenario”, showing a checklist of regulatory checks across FDI policy, sectoral caps, RBI directions, Press Note 3 and SEBI criteria.", cap: "ASAPIntel: the analysis screen working through six regulatory frameworks" },
  "trip-guardian": { alt: "Trip Guardian prototype home screen asking “Where do you want to go?”, with a trip-planning input and quick idea chips.", cap: "Trip Guardian prototype: planning entry screen" },
  "money-desk": { alt: "Money Desk prototype showing the weekly cash outlook split into Certain, Likely and At Risk amounts, a Friday target, and a held-settlement alert.", cap: "Money Desk prototype: cash outlook and held-settlement alert" },
};

/* ---------- fragments ---------- */
const projectCard = (p, i = 0) => `
        <article class="project-card ${p.tone} reveal" style="--d:${(i * 0.08).toFixed(2)}s" data-tags="${p.tags.join(" ")}">
          <div class="thumb"><img src="assets/img/${p.slug}.jpg" alt="${esc(SHOTS[p.slug].alt)}" width="${p.slug === "asapintel" ? 818 : p.slug === "money-desk" ? 460 : p.slug === "cocreate" ? 811 : 861}" height="${p.slug === "asapintel" ? 511 : p.slug === "money-desk" ? 288 : p.slug === "cocreate" ? 507 : 538}" loading="lazy"></div>
          <div class="card-body">
            <h3>${esc(p.title)}</h3>
            <p class="card-meta">${esc(p.org)}</p>
            <p class="card-desc">${esc(p.cardDesc)}</p>
            <div class="chips">${p.chips.slice(0, 2).map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
            <a class="card-link" href="${p.slug}.html">View project ${icon("arrow")}<span class="sr-only">: ${esc(p.title)}</span></a>
          </div>
        </article>`;

const contactLinks = () => {
  const items = [];
  items.push(["mail", "Email", SITE.email, `mailto:${SITE.email}`, ""]);
  items.push(["linkedin", "LinkedIn", SITE.linkedin.replace(/^https?:\/\/(www\.)?/, ""), SITE.linkedin, ' target="_blank" rel="noopener noreferrer"']);
  if (SITE.resume) items.push(["file", "Resume", "Download (PDF)", SITE.resume, " download"]);
  return items;
};

/* ---------- pages ---------- */
function home() {
  const social = contactLinks().filter((c) => c[0] !== "file")
    .map(([ic, label, , href, attrs]) => `<li><a href="${href}"${attrs} aria-label="${label}">${icon(ic)}</a></li>`).join("");
  const body = `
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <p class="hero-hello reveal">Hello, I’m</p>
        <h1 class="reveal" style="--d:.06s">Anushka <span class="surname">Tadphale</span></h1>
        <p class="hero-role reveal" style="--d:.12s">${SITE.tagline.join("<span>|</span>")}</p>
        <p class="hero-positioning reveal" style="--d:.18s">${esc(SITE.positioning)}.</p>
        <p class="hero-intro reveal" style="--d:.24s">${esc(INTRO[0])}</p>
        <div class="hero-actions reveal" style="--d:.3s">
          <a class="btn btn-primary" href="work.html">Explore My Work ${icon("arrow")}</a>
          <a class="btn btn-ghost" href="about.html">About Me</a>
        </div>
        <ul class="social reveal" style="--d:.36s">${social}</ul>
      </div>
      <div class="portrait reveal" style="--d:.15s">
        <div class="portrait-frame">
          <img src="assets/img/profile.jpg" alt="Portrait of ${SITE.name}, smiling, seated at a cafe table" width="800" height="960">
        </div>
        <span class="float-badge b1"><i></i>AI &amp; Data products</span>
        <span class="float-badge b2"><i></i>Product management</span>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="featured">
    <div class="container">
      <div class="section-head reveal">
        <div><span class="eyebrow">Selected work</span><h2 id="featured">Products I’ve shaped</h2>
          <p>Product concepts and case studies covering discovery, strategy, trade-offs and outcomes.</p></div>
        <a class="link-arrow" href="work.html">All projects ${icon("arrow")}</a>
      </div>
      <div class="card-grid two">${PROJECTS.map(projectCard).join("")}</div>
    </div>
  </section>

  <section class="section" aria-labelledby="bring">
    <div class="container">
      <div class="section-head reveal"><div><span class="eyebrow">Where I sit</span><h2 id="bring">Product, technology and business</h2></div></div>
      <div class="pillars">
        <div class="pillar reveal"><div class="badge">${icon("code")}</div><h3>Product &amp; Technology</h3><p>${esc(INTRO[0])}</p></div>
        <div class="pillar reveal" style="--d:.08s"><div class="badge">${icon("database")}</div><h3>Data engineering &amp; AI</h3><p>Scalable frameworks, ETL pipelines and AI-driven applications, built alongside senior stakeholders to improve workflows.</p></div>
        <div class="pillar reveal" style="--d:.16s"><div class="badge">${icon("briefcase")}</div><h3>Business strategy</h3><p>Now expanding from building technology to understanding what to build, why it matters and for whom, and how a product earns a defensible position.</p></div>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="numbers">
    <div class="container">
      <div class="section-head reveal"><div><span class="eyebrow">In numbers</span><h2 id="numbers">Evidence behind the work</h2></div></div>
      <div class="numbers">
        <div class="number reveal"><strong>4</strong><span>product case studies across marketplace, AI, travel and fintech</span></div>
        <div class="number reveal" style="--d:.06s"><strong>26</strong><span>participants interviewed for CoCreate</span></div>
        <div class="number reveal" style="--d:.12s"><strong>&lt; 5 min</strong><span>to an ASAPIntel verdict, versus 4–8 weeks of advisory</span></div>
        <div class="number reveal" style="--d:.18s"><strong>~12–15%</strong><span>actual trust in autonomous AI booking, which shaped Trip Guardian</span></div>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="journey">
    <div class="container">
      <div class="section-head reveal"><div><span class="eyebrow">My journey</span><h2 id="journey">From building to deciding what to build</h2></div></div>
      <ol class="journey">
        <li class="reveal"><div class="dot">1</div><h3>Bank of New York</h3><p>Data engineering, regulatory reporting and AI: scalable frameworks, ETL pipelines and AI-driven applications.</p></li>
        <li class="reveal" style="--d:.1s"><div class="dot">2</div><h3>Management studies</h3><p>Expanding from building technology to understanding what to build, why it matters and for whom.</p></li>
        <li class="reveal" style="--d:.2s"><div class="dot">3</div><h3>Product management</h3><p>AI-powered products and data-driven decision making.</p></li>
      </ol>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-band reveal">
        <h2>Let’s build something that matters</h2>
        <p>I’m open to conversations about product management in AI, data and enterprise products.</p>
        <a class="btn btn-primary" href="contact.html">Let’s Connect ${icon("arrow")}</a>
      </div>
    </div>
  </section>`;
  return layout({ file: "index.html", title: SITE.name, desc: `${SITE.name}: ${SITE.positioning}.`, active: "home", body });
}

function work() {
  const filters = [["all", "All"], ["ai", "AI"], ["fintech", "Fintech"], ["marketplace", "Marketplace"], ["travel", "Travel"]];
  const body = `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">Work</span>
      <h1 class="reveal">My Work</h1>
      <p class="lead reveal" style="--d:.08s">Product concepts I’ve shaped, from customer discovery and trade-offs to prototypes and measurement.</p>
    </div>
  </section>
  <section class="section" style="padding-top:1rem">
    <div class="container">
      <div class="filters" role="group" aria-label="Filter projects">
        ${filters.map(([k, l], i) => `<button class="filter" type="button" data-filter="${k}" aria-pressed="${i === 0}">${l}</button>`).join("\n        ")}
      </div>
      <p class="sr-only" id="filter-status" role="status" aria-live="polite"></p>
      <div class="card-grid two">${PROJECTS.map(projectCard).join("")}</div>
    </div>
  </section>`;
  return layout({ file: "work.html", title: "Work", desc: "Selected product case studies by Anushka Tadphale: CoCreate, ASAPIntel, Trip Guardian by MMT and Money Desk.", active: "work", body });
}

const sectionFacts = (p) => `<dl class="facts">${p.facts.map(([k, v]) => `<div class="fact"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`;

function project(p, idx) {
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const decisionsHtml = p.decisions.map(([t, d]) => `<li><h3>${icon("check")}${esc(t)}</h3><p>${esc(d)}</p></li>`).join("");
  const rejectedHtml = p.rejected.map(([t, d]) => `<li>${icon("x")}<span>${t ? `<strong>${esc(t)}:</strong> ` : ""}${esc(d)}</span></li>`).join("");
  const outcomeList = (p.outcomes || []).map(([t, d]) => `<li><strong>${esc(t)}:</strong> ${esc(d)}</li>`).join("");
  const outcomeParas = (p.outcomeParas || []).map((t) => `<p>${esc(t)}</p>`).join("");
  const body = `
  <section class="page-head" style="padding-bottom:0">
    <div class="container">
      <a class="back-link" href="work.html">${icon("arrow")} Back to Work</a>
      <div class="detail-hero">
        <div>
          <h1 class="reveal">${esc(p.title)}</h1>
          <p class="detail-org reveal" style="--d:.06s">${esc(p.subtitle)} · ${esc(p.org)}</p>
          <div class="chips reveal" style="--d:.1s">${p.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
          <p class="detail-summary reveal" style="--d:.14s">${p.summary}</p>
          ${p.live ? `<a class="btn btn-primary reveal" style="--d:.18s" href="${p.live}" target="_blank" rel="noopener noreferrer">Visit live demo ${icon("external")}</a>` : ""}
        </div>
        <div class="detail-art ${p.tone} reveal" style="--d:.1s"><img src="assets/img/${p.slug}.jpg" alt="${esc(SHOTS[p.slug].alt)}"></div>
      </div>
      ${sectionFacts(p)}
    </div>
  </section>

  <section class="section">
    <div class="container detail-layout">
      <nav class="toc" aria-label="On this page"><h2>On this page</h2><ul>
        <li><a href="#preview">Preview</a></li><li><a href="#context">Context</a></li><li><a href="#problem">Problem</a></li><li><a href="#process">Process</a></li><li><a href="#decisions">Decisions</a></li><li><a href="#outcome">Outcome</a></li>
      </ul></nav>
      <div class="detail-content">
        <section id="preview" class="reveal"><h2>Product preview</h2>
          <figure class="shot shot-${p.slug}"><img src="assets/img/${p.slug}-full.jpg" alt="${esc(SHOTS[p.slug].alt)}" loading="lazy"><figcaption>${esc(SHOTS[p.slug].cap)}</figcaption></figure>
        </section>
        <section id="context" class="prose reveal"><h2>Context</h2>${p.context.map((t) => `<p>${t}</p>`).join("")}</section>
        <section id="problem" class="prose reveal"><h2>Problem</h2>${p.problem.map((t) => `<p>${t}</p>`).join("")}</section>
        <section id="process" class="reveal"><h2>${p.processTitle}</h2><ol class="steps">${p.process.map(([t, d]) => `<li><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join("")}</ol></section>
        <section id="decisions" class="reveal"><h2>Decisions</h2>
          ${p.decisionsTitle ? `<h3 class="sub-label">${esc(p.decisionsTitle)}</h3>` : ""}
          <ul class="decisions">${decisionsHtml}</ul>
          <div class="rejected"><h3>${esc(p.rejectedTitle)}</h3><ul>${rejectedHtml}</ul></div>
        </section>
        <section id="outcome" class="reveal"><h2>Outcome</h2>
          <div class="stat-row">${p.stats.map(([n, l]) => `<div class="stat"><strong>${esc(n)}</strong><span>${esc(l)}</span></div>`).join("")}</div>
          ${outcomeParas}${outcomeList ? `<ul class="outcomes">${outcomeList}</ul>` : ""}
          ${p.lesson ? `<div class="lesson"><h3>${p.lessonTitle || "Key lesson"}</h3><p>${p.lesson}</p></div>` : ""}
        </section>
        <a class="next-project reveal" href="${next.slug}.html"><span><small>Next project</small><span class="t">${esc(next.title)}</span></span>${icon("arrow")}</a>
      </div>
    </div>
  </section>`;
  return layout({ file: `${p.slug}.html`, title: p.title, desc: strip(p.summary), active: "work", body });
}

function about() {
  const skills = SKILLS.map(([g, items]) => `<div class="skill-group"><h3>${esc(g)}</h3><div class="chips">${items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`).join("");
  const body = `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">About</span>
      <h1 class="reveal">About Me</h1>
      <p class="lead reveal" style="--d:.08s">${esc(SITE.positioning)}.</p>
    </div>
  </section>
  <section class="section" style="padding-top:1rem">
    <div class="container about-grid">
      <div class="about-text">
        <p class="hero-hello reveal" style="margin-bottom:1rem">${SITE.tagline.join(" &nbsp;|&nbsp; ")}</p>
        ${INTRO.map((t, i) => `<p class="reveal" style="--d:${(i * 0.06).toFixed(2)}s">${esc(t)}</p>`).join("")}
        <div class="hero-actions reveal"><a class="btn btn-primary" href="work.html">See my work ${icon("arrow")}</a><a class="btn btn-ghost" href="contact.html">Get in touch</a></div>
      </div>
      <aside>
        <div class="side-card reveal"><h2>Skills</h2>${skills}</div>
        <div class="side-card reveal" style="--d:.08s"><div class="edu"><div class="badge">${icon("cap")}</div><div><h3>Currently</h3><p>Pursuing management studies, moving into product and strategy roles after data engineering, regulatory reporting and AI work at Bank of New York.</p></div></div></div>
      </aside>
    </div>
  </section>`;
  return layout({ file: "about.html", title: "About Me", desc: `About ${SITE.name}: data engineer turned aspiring product manager, with experience at Bank of New York in data engineering, regulatory reporting and AI.`, active: "about", body });
}

const stripTags = (h) => h.replace(/<[^>]+>/g, " ");
const words = (n) => n.body.map((x) => typeof x === "string" ? x : x.h2 || x.quote || x.pull || x.epigraph || (x.ul || []).join(" ")).map(stripTags).join(" ").split(/\s+/).filter(Boolean).length;
const readTime = (n) => Math.max(1, Math.round(words(n) / 200)) + " min read";

function journal() {
  const cards = NOTES.map((n, i) => `
        <article class="note-card reveal" style="--d:${(i * 0.08).toFixed(2)}s">
          <div class="note-top"><span class="chip">${esc(n.tag)}</span><span class="card-meta">${readTime(n)}</span></div>
          <h3>${esc(n.title)}</h3>
          <p class="card-desc">${esc(n.excerpt)}</p>
          <a class="card-link" href="journal-${n.slug}.html">Read entry ${icon("arrow")}<span class="sr-only">: ${esc(n.title)}</span></a>
        </article>`).join("");
  const body = `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">Journal</span>
      <h1 class="reveal">Journal</h1>
      <p class="lead reveal" style="--d:.08s">Reflections on product, AI and strategy: how I think through problems, what I’m learning along the way, and the questions I’m still working through.</p>
    </div>
  </section>
  <section class="section" style="padding-top:1rem">
    <div class="container">
      <div class="card-grid two">${cards}</div>
    </div>
  </section>`;
  return layout({ file: "journal.html", title: "Journal", desc: "Reflections on product, AI and strategy by Anushka Tadphale.", active: "journal", body });
}

function journalEntry(n, idx) {
  const next = NOTES[(idx + 1) % NOTES.length];
  const parts = n.body.map((x) => {
    if (typeof x === "string") return `<p>${x}</p>`;
    if (x.h2) return `<h2>${x.h2}</h2>`;
    if (x.ul) return `<ul>${x.ul.map((li) => `<li>${li}</li>`).join("")}</ul>`;
    if (x.quote) return `<blockquote>${x.quote}</blockquote>`;
    if (x.pull) return `<p class="pull">${x.pull}</p>`;
    if (x.epigraph) return `<p class="epigraph" lang="hi">${x.epigraph}</p>`;
    return "";
  }).join("\n        ");
  const body = `
  <section class="page-head" style="padding-bottom:0">
    <div class="narrow">
      <a class="back-link" href="journal.html">${icon("arrow")} Back to Journal</a>
      <div class="chips reveal"><span class="chip">${esc(n.tag)}</span><span class="chip chip-pink">${readTime(n)}</span></div>
      <h1 class="reveal article-title" style="--d:.06s">${esc(n.title)}</h1>
    </div>
  </section>
  <section class="section" style="padding-top:2rem">
    <div class="narrow">
      <article class="article reveal">
        ${parts}
      </article>
      <a class="next-project reveal" href="journal-${next.slug}.html"><span><small>Next entry</small><span class="t">${esc(next.title)}</span></span>${icon("arrow")}</a>
    </div>
  </section>`;
  return layout({ file: `journal-${n.slug}.html`, title: n.title, desc: n.excerpt, active: "journal", body });
}

function contact() {
  const items = contactLinks().map(([ic, label, text, href, attrs], i) => `
        <li class="reveal" style="--d:${(i * 0.07).toFixed(2)}s"><a class="contact-item" href="${href}"${attrs}><span class="badge">${icon(ic)}</span><span><small>${label}</small><span class="v">${esc(text)}</span></span>${icon("arrow")}</a></li>`).join("");
  const body = `
  <section class="page-head">
    <div class="container">
      <span class="eyebrow">Contact</span>
      <h1 class="reveal">Let’s Connect</h1>
      <p class="lead reveal" style="--d:.08s">I’m open to conversations about product management roles in AI, data and enterprise products, and to collaborations and a good chat.</p>
      <ul class="contact-list">${items}</ul>
    </div>
  </section>`;
  return layout({ file: "contact.html", title: "Contact", desc: `Get in touch with ${SITE.name}.`, active: "contact", body });
}

function notFound() {
  const body = `
  <section class="center-page"><div class="container">
    <span class="eyebrow">404</span>
    <h1>This page wandered off</h1>
    <p>The page you’re looking for doesn’t exist or has moved.</p>
    <a class="btn btn-primary" href="index.html">Back to home ${icon("arrow")}</a>
  </div></section>`;
  // 404 may be served from any path, so use absolute-from-root links via <base> is avoided; relative links work from root.
  return layout({ file: "404.html", title: "Page not found", desc: "Page not found.", active: "", body });
}

/* ---------- write everything ---------- */
write("index.html", home());
write("work.html", work());
write("about.html", about());
write("journal.html", journal());
write("contact.html", contact());
write("404.html", notFound());
PROJECTS.forEach((p, i) => write(`${p.slug}.html`, project(p, i)));
NOTES.forEach((n, i) => write(`journal-${n.slug}.html`, journalEntry(n, i)));

const pages = ["", "work.html", "about.html", "journal.html", "contact.html", ...PROJECTS.map((p) => `${p.slug}.html`), ...NOTES.map((n) => `journal-${n.slug}.html`)];
if (SITE.url) {
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((u) => `  <url><loc>${SITE.url}/${u}</loc></url>`).join("\n")}\n</urlset>\n`);
  write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
} else {
  write("robots.txt", `User-agent: *\nAllow: /\n`);
}
console.log(`Built ${pages.length + 1} pages.`);
