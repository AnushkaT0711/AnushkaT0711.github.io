// Sanity checks: every local href/src resolves, anchors exist, no external asset requests.
// Usage: node tools/check.mjs
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const pages = readdirSync(ROOT).filter((f) => f.endsWith(".html"));
let problems = 0;
const fail = (m) => { problems++; console.log("✗", m); };

for (const page of pages) {
  const html = readFileSync(join(ROOT, page), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
    const url = m[1];
    if (/^(mailto:|https?:)/.test(url)) continue;
    if (url.startsWith("#")) { if (url.length > 1 && !ids.has(url.slice(1))) fail(`${page}: missing anchor ${url}`); continue; }
    const [path, hash] = url.split("#");
    if (!existsSync(join(ROOT, path))) { if (!/Resume.*\.pdf$/.test(path)) fail(`${page}: broken link ${url}`); else console.log(`! ${page}: ${path} not added yet (resume PDF)`); continue; }
    if (hash) {
      const target = readFileSync(join(ROOT, path), "utf8");
      if (!target.includes(`id="${hash}"`)) fail(`${page}: ${path} has no #${hash}`);
    }
  }
  // External requests that would load assets at runtime
  for (const m of html.matchAll(/<(?:link|script|img|iframe)[^>]+(?:href|src)="(https?:[^"]+)"/g)) fail(`${page}: external asset ${m[1]}`);
  if (!/<h1[\s>]/.test(html)) fail(`${page}: no h1`);
  for (const m of html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)) fail(`${page}: img without alt`);
}
const css = readFileSync(join(ROOT, "assets/css/styles.css"), "utf8");
for (const m of css.matchAll(/url\("([^"]+)"\)/g)) if (!existsSync(join(ROOT, "assets/css", m[1]))) fail(`css: missing ${m[1]}`);

console.log(problems ? `${problems} problem(s)` : `OK — ${pages.length} pages checked`);
process.exit(problems ? 1 : 0);
