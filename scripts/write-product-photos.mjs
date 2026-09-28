import { mkdirSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "src/data/product-photos-b64");
const outDir = join(root, "public/products");
mkdirSync(outDir, { recursive: true });

const files = readdirSync(srcDir).filter((f) => f.endsWith(".b64")).sort();
if (files.length === 0) {
  console.warn("write-product-photos: no .b64 files found, skipping");
  process.exit(0);
}
for (const file of files) {
  const name = file.replace(/\.b64$/, ".jpg");
  const b64 = readFileSync(join(srcDir, file), "utf8").trim();
  writeFileSync(join(outDir, name), Buffer.from(b64, "base64"));
  console.log(`wrote public/products/${name}`);
}
