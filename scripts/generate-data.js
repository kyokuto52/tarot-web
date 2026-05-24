import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { buildFullDeck } from './lib/deck.js';
import { generateAllInterpretations, countEntries } from './lib/text-gen.js';
import { GLOSSARY } from './lib/glossary.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const deck = buildFullDeck();
const interpretations = generateAllInterpretations(deck);
const data = { glossary: GLOSSARY, ...interpretations };
const stats = countEntries(interpretations);

const outDir = join(root, 'public', 'data');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'interpretations.json');
writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`已生成 ${outPath}`);
console.log(
  `牌数: ${stats.cards} 张 · 正/逆位解说: ${stats.total} 条 (${stats.perCardOrientations}/牌) · 术语: ${Object.keys(GLOSSARY).length} 个`,
);
