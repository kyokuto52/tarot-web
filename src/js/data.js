let cache = null;

export async function loadTarotData() {
  if (cache) return cache;
  const base = import.meta.env.BASE_URL;
  const res = await fetch(`${base}data/interpretations.json`);
  if (!res.ok) throw new Error('无法加载塔罗数据');
  cache = await res.json();
  return cache;
}

export function getGlossary(data) {
  return data.glossary ?? {};
}

function pickOrientation(raw, reversed) {
  if (!raw) return null;
  const key = reversed ? 'reversed' : 'upright';
  if (raw[key]) return raw[key];
  if (raw.intro !== undefined || raw.body !== undefined) return raw;
  return null;
}

export function getSingleEntry(data, themeId, cardId, reversed = false) {
  return pickOrientation(data.single?.[themeId]?.[cardId], reversed);
}

export function getTripleEntry(data, themeId, slotId, cardId, reversed = false) {
  return pickOrientation(data.spread3?.[themeId]?.[slotId]?.[cardId], reversed);
}

export function getCardById(data, cardId) {
  return data.cards.find((c) => c.id === cardId);
}
