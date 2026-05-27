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
const cardGlossary = Object.fromEntries(
  deck.map((card) => [
    card.id,
    {
      label: card.name,
      tip:
        card.arcana === 'major'
          ? `这张牌讲的是：${card.keywordUpright}。逆位时，它常提醒你留意：${card.keywordReversed}。`
          : `${card.suitName}牌组里的${card.name}，重点是：${card.keywordUpright}。逆位时，它会提醒：${card.keywordReversed}。`,
    },
  ]),
);
const glossary = { ...GLOSSARY, ...cardGlossary };
const data = { glossary, ...interpretations };
const stats = countEntries(interpretations);

const outDir = join(root, 'public', 'data');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'interpretations.json');
writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`已生成 ${outPath}`);
console.log(
  `牌数: ${stats.cards} 张 · 正/逆位解说: ${stats.total} 条 (${stats.perCardOrientations}/牌) · 术语: ${Object.keys(glossary).length} 个`,
);
