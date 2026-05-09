import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, "..");
const THEMES = {
  "warm-earth": { on: "#876635", off: "#857C72" },
  maillard: { on: "#D2691E", off: "#C9A882" },
};
const ICONS = [
  { name: "home", file: "bi-home.svg" },
  { name: "category", file: "bi-th-large.svg" },
  { name: "sell-idle", file: "bi-camera.svg" },
  { name: "cart", file: "bi-shopping-bag.svg" },
  { name: "user", file: "bi-user.svg" },
];

function tint(svg, hex) {
  return svg.replace(/currentColor/gi, hex);
}

function toPng(svg) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 128 },
  });
  return resvg.render().asPng();
}

for (const { name, file } of ICONS) {
  const raw = readFileSync(join(iconsDir, file), "utf8");
  for (const [tid, pal] of Object.entries(THEMES)) {
    for (const st of ["on", "off"]) {
      const png = toPng(tint(raw, pal[st]));
      const dir = join(__dirname, tid);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, `${name}-${st}.png`), png);
    }
  }
}
