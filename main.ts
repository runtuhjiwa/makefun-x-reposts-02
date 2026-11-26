// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry IS the X posts: 1 to 15 posts from one public X account
// (@oncomblack), each quoting or replying directly to a different pool post
// of @makefunai, each carrying make.fun (or @makefunai) and one of the
// entrant's play codes. This program only hands POSTS.json to the grader:
// it copies POSTS.json from the repository root to /output/POSTS.json,
// checking first that the file parses and names a "posts" list, so a broken
// list fails loudly here instead of silently at the gate.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "POSTS.json");
const parsed = JSON.parse(readFileSync(source, "utf8"));
if (!parsed || !Array.isArray(parsed.posts)) {
  console.error('POSTS.json must be JSON of the form {"posts": [...]}');
  process.exit(1);
}
if (parsed.posts.length < 1 || parsed.posts.length > 15) {
  console.error(`POSTS.json must list 1 to 15 posts, found ${parsed.posts.length}`);
  process.exit(1);
}
for (const url of parsed.posts) {
  if (typeof url !== "string" || !/^https:\/\/(x\.com|twitter\.com)\/\S+\/status\/\d+$/.test(url)) {
    console.error(`Not an X post address: ${url}`);
    process.exit(1);
  }
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, "POSTS.json"));
console.log(`POSTS.json copied: ${parsed.posts.length} post(s) listed.`);
