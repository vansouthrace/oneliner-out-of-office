import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, 115 chars, under the 159-char gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I am on vacation at last. My inbox will be answered by a smaller, cheaper model who has already filed for overtime.");
