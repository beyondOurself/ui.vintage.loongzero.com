import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.join(__dirname, "..", "icons");

for (const f of fs.readdirSync(iconsDir)) {
  if (!f.startsWith("bi-") || !f.endsWith(".svg")) continue;
  const p = path.join(iconsDir, f);
  const s = fs.readFileSync(p, "utf8").trim();
  if (s.includes("<defs>") && s.includes('<use href="#icon"')) continue;
  const m = s.match(/^<svg([^>]*)>\s*<symbol id="icon" viewBox="([^"]+)">([\s\S]*?)<\/symbol>\s*<\/svg>\s*$/);
  if (!m) {
    console.warn("skip (unexpected shape):", f);
    continue;
  }
  const [, attrs, vb, inner] = m;
  const innerFixed = inner.replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="currentColor"');
  const out = `<svg${attrs}><defs><symbol id="icon" viewBox="${vb}">${innerFixed}</symbol></defs><use href="#icon" width="100%" height="100%"/></svg>\n`;
  fs.writeFileSync(p, out, "utf8");
}
console.log("fix-bi-svg-visible done");
