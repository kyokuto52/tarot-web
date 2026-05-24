const TERM_RE = /\[\[([a-z_]+)\]\]/g;

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapTerm(id, glossary) {
  const item = glossary?.[id];
  const label = item?.label ?? id;
  const tip = escapeHtml(item?.tip ?? '');
  return `<span class="term" tabindex="0" role="button" data-tip="${tip}">${escapeHtml(label)}</span>`;
}

/** 解析 [[术语]] 并转义其余 HTML */
export function renderRichText(text, glossary) {
  if (!text) return '';
  let html = '';
  let last = 0;
  let m;
  const re = new RegExp(TERM_RE.source, 'g');
  while ((m = re.exec(text)) !== null) {
    html += escapeHtml(text.slice(last, m.index));
    html += wrapTerm(m[1], glossary);
    last = m.index + m[0].length;
  }
  html += escapeHtml(text.slice(last));
  return html.replace(/\n/g, '<br>');
}

export function buildReadingHtml(entry, glossary) {
  const intro = renderRichText(entry.intro, glossary);
  const body = renderRichText(entry.body ?? '', glossary);
  const note = escapeHtml(entry.note ?? '');

  let html = '';
  if (intro) {
    html += `<p class="reading-intro">${intro}</p>`;
  }
  if (body) {
    html += `<p class="reading-body">${body}</p>`;
  }
  if (note) {
    html += `<p class="reading-note">${note}</p>`;
  }
  return html;
}

export function normalizeEntry(raw, reversed = false) {
  if (!raw) return { intro: '', body: '暂无解说。', note: '' };
  const key = reversed ? 'reversed' : 'upright';
  if (raw[key]) return raw[key];
  if (raw.intro !== undefined || raw.body !== undefined) return raw;
  if (raw.text) return { intro: '', body: raw.text, note: '' };
  return { intro: '', body: '暂无解说。', note: '' };
}
