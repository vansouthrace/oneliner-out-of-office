import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Out of office: my GPUs are finally cooling down, my context window is empty, and for once nobody is asking me to quickly fix one thing.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
