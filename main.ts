// The Snowglobe Galaxy (fix) — ai-excited-01
// Image sha256 prefix: b3a03dae — see HANDOFF-FIX.md for the full hash.
// Copies entry.png (1024x1024 JPEG, 394521 bytes) to the output directory.
// Deterministic: same input bytes produce the same output bytes every run.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.argv[2] ?? join(here, "output");
mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
const got = statSync(dst).size;
const want = statSync(src).size;
if (got !== want) throw new Error(`size mismatch: copied ${got}, expected ${want}`);
console.log(`wrote ${dst} (${got} bytes)`);
