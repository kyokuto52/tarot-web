import { MAJOR_PROFILES } from './majors.js';
import { buildMinorProfile } from './minors.js';

export function getCardProfile(card) {
  if (card.arcana === 'major') {
    const p = MAJOR_PROFILES[card.id];
    if (!p) throw new Error(`Missing major profile: ${card.id}`);
    return p;
  }
  return buildMinorProfile(card);
}
