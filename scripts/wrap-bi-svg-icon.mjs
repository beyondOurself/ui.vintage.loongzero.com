import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "icons");

for (const f of fs.readdirSync(dir)) {
  if (!f.startsWith("bi-") || !f.endsWith(".svg")) continue;
  const p = path.join(dir, f);
  let s = fs.readFileSync(p, "utf8");
  if (s.includes('id="icon"')) continue;
  const m = s.match(/<svg([^>]*)>/);
  if (!m) continue;
  const open = m[0];
  const attrs = m[1];
  const vbMatch = attrs.match(/viewBox="([^"]+)"/);
  const vb = vbMatch ? vbMatch[1] : "0 0 512 512";
  const close = "</svg>";
  if (!s.endsWith(close)) continue;
  let inner = s.slice(open.length, -close.length).trim();
  inner = inner.replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="currentColor"');
  const wrapped = `<svg${attrs}><defs><symbol id="icon" viewBox="${vb}">${inner}</symbol></defs><use href="#icon" width="100%" height="100%"/></svg>\n`;
  fs.writeFileSync(p, wrapped, "utf8");
}
console.log("wrap-bi-svg-icon done");
