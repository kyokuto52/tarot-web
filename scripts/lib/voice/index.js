import { MAJOR_EMOTION } from './majors-emotion.js';
import { MAJOR_EMOTION_EXTRA } from './majors-extra.js';
import { minorEmotion } from './minors-emotion.js';
import { composeThemeTriple } from './compose-fortune-life-career.js';
import { composeToday, composeQuestion, composeAdvice } from './compose-single.js';
import { ELEMENT_KEY } from '../glossary.js';

const MAJOR_ALL = { ...MAJOR_EMOTION, ...MAJOR_EMOTION_EXTRA };

function t(id) {
  return `[[${id}]]`;
}

function shortIntro(card, reversed) {
  const orient = reversed ? t('reversed') : t('upright');
  if (card.arcana === 'major') {
    const en = MAJOR_ALL[card.id]?.en;
    const enPart = en ? ` · ${en}` : '';
    return `${t('major_arcana')} · ${card.name}${enPart} · ${orient}`;
  }
  const el = ELEMENT_KEY[card.element];
  return `${t('minor_arcana')} · ${t(`suit_${card.suit}`)} · ${t(el)} · ${orient}`;
}

function emotionTriple(card, rev, slot) {
  if (card.arcana === 'major' && MAJOR_ALL[card.id]) {
    const pack = rev ? MAJOR_ALL[card.id].rev : MAJOR_ALL[card.id].up;
    return pack[slot];
  }
  return minorEmotion(card, rev, slot);
}

const NOTE_SPREAD = '把这一张和另外两张连起来看，故事才完整。';
const NOTE_MAJOR = '大阿卡纳在这一阵里分量重，别单独当成小事。';

export function composeReading(card, ctx) {
  const rev = ctx.reversed;
  let body;

  if (ctx.mode === 'single') {
    body =
      ctx.theme === 'today'
        ? composeToday(card, rev)
        : ctx.theme === 'question'
          ? composeQuestion(card, rev)
          : composeAdvice(card, rev);
  } else if (ctx.theme === 'emotion') {
    body = emotionTriple(card, rev, ctx.slot);
  } else {
    body = composeThemeTriple(card, ctx.theme, ctx.slot, rev);
  }

  const note =
    ctx.mode === 'triple'
      ? [card.arcana === 'major' ? NOTE_MAJOR : '', NOTE_SPREAD].filter(Boolean).join(' ')
      : '';

  return { intro: shortIntro(card, rev), body, note };
}
