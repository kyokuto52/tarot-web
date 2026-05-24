import { composeReading } from './voice/index.js';

const SINGLE_THEMES = ['today', 'question', 'advice'];
const TRIPLE_THEMES = ['fortune', 'emotion', 'life', 'career'];
const SLOTS = ['past', 'present', 'future'];

export function generateAllInterpretations(cards) {
  const data = {
    cards: cards.map(({ id, number, name, symbol }) => ({ id, number, name, symbol })),
    single: { today: {}, question: {}, advice: {} },
    spread3: {
      fortune: { past: {}, present: {}, future: {} },
      emotion: { past: {}, present: {}, future: {} },
      life: { past: {}, present: {}, future: {} },
      career: { past: {}, present: {}, future: {} },
    },
  };

  for (const card of cards) {
    for (const theme of SINGLE_THEMES) {
      data.single[theme][card.id] = {
        upright: composeReading(card, { mode: 'single', theme, reversed: false }),
        reversed: composeReading(card, { mode: 'single', theme, reversed: true }),
      };
    }
    for (const theme of TRIPLE_THEMES) {
      for (const slot of SLOTS) {
        data.spread3[theme][slot][card.id] = {
          upright: composeReading(card, { mode: 'triple', theme, slot, reversed: false }),
          reversed: composeReading(card, { mode: 'triple', theme, slot, reversed: true }),
        };
      }
    }
  }

  return data;
}

export function countEntries(data) {
  const perCard = 3 * 2 + 4 * 3 * 2;
  return {
    cards: data.cards.length,
    perCardOrientations: perCard,
    total: data.cards.length * perCard,
  };
}
