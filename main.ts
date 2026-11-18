// news-image-20261118 — "The World in One Day".
//
// The entry is one image: a newspaper front page drawn for Wednesday
// 18 November 2026 (entry.png beside this file). Drawing it is done
// offline, ahead of time, so this program only has to copy the finished
// image to the output directory. Copying is byte-for-byte deterministic:
// run it twice and both runs write the same file.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
