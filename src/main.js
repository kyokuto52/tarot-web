import './styles/main.css';
import {
  MODES,
  SINGLE_THEMES,
  TRIPLE_THEMES,
  SPREAD_SLOTS,
  STATE,
} from './js/config.js';
import { drawCards } from './js/deck.js';
import {
  loadTarotData,
  getGlossary,
  getSingleEntry,
  getTripleEntry,
} from './js/data.js';
import {
  buildReadingHtml,
  normalizeEntry,
  renderRichText,
} from './js/render-reading.js';
import { createDialogController } from './js/dialog.js';
import {
  playCurtainOpen,
  animateCardDeal,
  flipCard,
  buildCardElement,
} from './js/animations.js';

const els = {
  curtain: document.getElementById('curtain'),
  main: document.getElementById('main'),
  dialogSection: document.getElementById('dialog-section'),
  confirmSection: document.getElementById('confirm-section'),
  readingSection: document.getElementById('reading-section'),
  dialogText: document.getElementById('dialog-text'),
  dialogCursor: document.getElementById('dialog-cursor'),
  choices: document.getElementById('choices'),
  confirmDetails: document.getElementById('confirm-details'),
  btnBack: document.getElementById('btn-back'),
  btnStart: document.getElementById('btn-start'),
  cardStage: document.getElementById('card-stage'),
  resultPanel: document.getElementById('result-panel'),
  resultCards: document.getElementById('result-cards'),
  btnRestart: document.getElementById('btn-restart'),
  readingHint: document.getElementById('reading-hint'),
};

const dialog = createDialogController({
  textEl: els.dialogText,
  cursorEl: els.dialogCursor,
  choicesEl: els.choices,
});

const appState = {
  phase: STATE.CURTAIN,
  mode: null,
  theme: null,
  drawn: [],
  tarotData: null,
};

function showSection(section) {
  els.dialogSection.classList.toggle('hidden', section !== 'dialog');
  els.confirmSection.classList.toggle('hidden', section !== 'confirm');
  els.readingSection.classList.toggle('hidden', section !== 'reading');
}

function resetReadingUI() {
  els.cardStage.innerHTML = '';
  els.resultPanel.classList.add('hidden');
  els.resultCards.innerHTML = '';
}

async function init() {
  try {
    appState.tarotData = await loadTarotData();
  } catch (e) {
    console.error(e);
    els.dialogText.textContent = '数据加载失败，请刷新页面重试。';
    return;
  }

  await playCurtainOpen(els.curtain);
  els.curtain.classList.add('hidden');
  els.main.classList.remove('hidden');
  appState.phase = STATE.HOME;
  await runHomeFlow();
}

async function runHomeFlow() {
  showSection('dialog');
  resetReadingUI();

  await dialog.typeText(
    '欢迎来到神秘占卜小屋……我是这里的守护者。今夜星象清晰，适合窥探命运的轨迹。',
  );
  await dialog.typeText('你想要怎样的占卜？');
  const mode = await dialog.sayThenChoose('请选择抽牌方式：', [
    { label: MODES.single.label, value: 'single' },
    { label: MODES.triple.label, value: 'triple' },
  ]);
  appState.mode = mode;

  const themes =
    mode === 'single'
      ? Object.values(SINGLE_THEMES)
      : Object.values(TRIPLE_THEMES);

  await dialog.typeText(
    mode === 'single'
      ? '一张牌能照亮一个核心答案。你想探问哪方面？'
      : '三张牌将串联过去、现在与未来。请选择你想洞察的领域。',
  );

  const themeOptions = themes.map((t) => ({ label: t.label, value: t.id }));
  const theme = await dialog.showChoices(themeOptions);
  appState.theme = theme;

  appState.phase = STATE.CONFIRM;
  showConfirm();
}

function showConfirm() {
  showSection('confirm');
  const modeLabel = MODES[appState.mode].label;
  const themeLabel =
    appState.mode === 'single'
      ? SINGLE_THEMES[appState.theme].label
      : TRIPLE_THEMES[appState.theme].label;

  const spreadNote =
    appState.mode === 'triple' ? '牌阵：过去 → 现在 → 未来' : '牌阵：单牌直示';

  els.confirmDetails.innerHTML = `
    <div><dt>抽牌方式</dt><dd>${modeLabel}</dd></div>
    <div><dt>占卜主题</dt><dd>${themeLabel}</dd></div>
    <div><dt>牌阵说明</dt><dd>${spreadNote}</dd></div>
  `;
}

els.btnBack.addEventListener('click', () => {
  appState.mode = null;
  appState.theme = null;
  runHomeFlow();
});

els.btnStart.addEventListener('click', () => startReading());

els.btnRestart.addEventListener('click', () => {
  appState.mode = null;
  appState.theme = null;
  appState.drawn = [];
  runHomeFlow();
});

async function startReading() {
  showSection('reading');
  resetReadingUI();
  els.resultPanel.classList.add('hidden');

  const count = MODES[appState.mode].count;
  appState.drawn = drawCards(appState.tarotData.cards, count);

  const slots = [];
  if (appState.mode === 'triple') {
    SPREAD_SLOTS.forEach((slot, i) => {
      const slotEl = document.createElement('div');
      slotEl.className = 'card-slot';
      slotEl.dataset.slot = slot.id;
      const label = document.createElement('span');
      label.className = 'slot-label';
      label.textContent = slot.label;
      slotEl.appendChild(label);
      els.cardStage.appendChild(slotEl);
      slots.push({ el: slotEl, slot, card: appState.drawn[i] });
    });
  } else {
    const slotEl = document.createElement('div');
    slotEl.className = 'card-slot';
    els.cardStage.appendChild(slotEl);
    slots.push({ el: slotEl, slot: null, card: appState.drawn[0] });
  }

  els.readingHint.textContent = '请静心凝视……牌正在从命运之网中显现';

  for (let i = 0; i < slots.length; i++) {
    const { el, card } = slots[i];
    const cardEl = buildCardElement(card, card.reversed);
    await animateCardDeal(cardEl, el, els.cardStage, i);
    await flipCard(cardEl, 200);
  }

  els.readingHint.textContent = '';
  renderResults(slots);
  els.resultPanel.classList.remove('hidden');
  els.resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderResults(slots) {
  const data = appState.tarotData;
  const glossary = getGlossary(data);
  els.resultCards.innerHTML = '';

  slots.forEach(({ slot, card }) => {
    let title;
    let raw;

    if (appState.mode === 'single') {
      title = SINGLE_THEMES[appState.theme].label;
      raw = getSingleEntry(data, appState.theme, card.id, card.reversed);
    } else {
      title = `${slot.label} · ${TRIPLE_THEMES[appState.theme].label}`;
      raw = getTripleEntry(data, appState.theme, slot.id, card.id, card.reversed);
    }

    const entry = normalizeEntry(raw, card.reversed);
    const cardNameHtml = `<span class="card-name-bracket">[</span>${renderRichText(`[[${card.id}]]`, glossary)}<span class="card-name-bracket">]</span>`;

    const item = document.createElement('article');
    item.className = 'result-item';
    item.innerHTML = `
      <h3>${title}</h3>
      <p class="card-meta">${cardNameHtml}</p>
      <div class="reading-content">${buildReadingHtml(entry, glossary)}</div>
    `;
    els.resultCards.appendChild(item);
  });
}

init();
