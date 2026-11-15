// ai-excited-01 — "The Snowglobe Galaxy" (recorded rebuild)
// Writes the entry image to the output directory, byte for byte.
// Image: 1024x1024 JPEG, 334,575 bytes, sha256 e33a01d6b02d10b567ae0da3a6c6ab7533890a603d1da6ba3f996e01f3edb338.
// Deterministic: a plain copy, stdlib only, no network, no randomness.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
// Verify the copy landed whole: a partial write must fail loudly,
// never silently ship a truncated image.
const expected = statSync(src).size;
const written = statSync(dest).size;
if (written !== expected) {
  throw new Error(`entry.png copy incomplete: ${written} of ${expected} bytes`);
}
console.log(`wrote entry.png (${written} bytes) to ${outDir}`);
