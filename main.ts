// The Snowglobe Galaxy — ai-excited-01.
// Writes the entry image to the output directory, deterministically.
// Image: 1024x1024 JPEG, 379216 bytes, sha256 917746ca…
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const expected = statSync(source).size;
const written = statSync(target).size;
if (written !== expected) {
  throw new Error(`size mismatch: wrote ${written}, expected ${expected}`);
}
console.log(`wrote ${target} (${written} bytes)`);
