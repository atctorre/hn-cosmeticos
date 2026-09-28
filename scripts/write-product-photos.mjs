import { mkdirSync, readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "src/data/product-photos-b64");
const outDir = join(root, "public/products");
mkdirSync(outDir, { recursive: true });

function loadB64(stem) {
  const whole = join(srcDir, `${stem}.b64`);
  if (existsSync(whole)) {
    return readFileSync(whole, "utf8").trim();
  }
  const parts = readdirSync(srcDir)
    .filter((f) => f.startsWith(`${stem}.part`))
    .sort((a, b) => {
      const na = Number(a.split("part")[1]);
      const nb = Number(b.split("part")[1]);
      return na - nb;
    });
  if (parts.length === 0) return null;
  return parts.map((f) => readFileSync(join(srcDir, f), "utf8").trim()).join("");
}

const stems = new Set();
for (const f of readdirSync(srcDir)) {
  if (f.endsWith(".b64")) stems.add(f.replace(/\.b64$/, ""));
  const m = f.match(/^(\d+)\.part\d+$/);
  if (m) stems.add(m[1]);
}

if (stems.size === 0) {
  console.warn("write-product-photos: no photo payloads found, skipping");
  process.exit(0);
}

for (const stem of [...stems].sort()) {
  const b64 = loadB64(stem);
  if (!b64) continue;
  const name = `${stem}.jpg`;
  writeFileSync(join(outDir, name), Buffer.from(b64, "base64"));
  console.log(`wrote public/products/${name} (${b64.length} b64 chars)`);
}
