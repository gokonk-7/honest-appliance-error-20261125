// The Funniest Honest Appliance Error — entry program for make.fun.
// Writes one line, the funniest honest error message a household
// appliance could show, to /output/entry.txt.
//
// The line: a washing machine reports a real fault (E21, drain blocked)
// and, in its own flat, put-upon voice, admits what it did with the
// evidence. No pun bolted on — the laugh comes out of the truth of it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR E21: Drain blocked by one (1) sock. It was yours. It is mine now. Cycle cancelled.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
