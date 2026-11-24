import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Vacuum's Best Excuse — one line, at most 140 characters.
const ENTRY =
  "I scanned that corner, found a dust bunny union meeting in progress, and chose not to cross the picket line.";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length}-character entry to /output/entry.txt`);
