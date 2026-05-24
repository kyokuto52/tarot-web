function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export function playCurtainOpen(curtainEl) {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      curtainEl.classList.add('open');
    });
    setTimeout(resolve, 1600);
  });
}

/** 在牌位内用 transform 飞入，避免动画结束后尺寸跳变 */
export async function animateCardDeal(cardEl, slotEl, stageEl, index) {
  slotEl.appendChild(cardEl);
  cardEl.classList.add('animating');

  const stageRect = stageEl.getBoundingClientRect();
  const slotRect = slotEl.getBoundingClientRect();
  const stageCx = stageRect.width / 2;
  const stageCy = stageRect.height / 2 - 40;
  const slotCx = slotRect.left - stageRect.left + slotRect.width / 2;
  const slotCy = slotRect.top - stageRect.top + slotRect.height / 2;

  const dx = stageCx - slotCx;
  const dy = stageCy - slotCy;

  cardEl.style.transition = 'none';
  cardEl.style.transform = `translate(${dx}px, ${dy}px) scale(0.28)`;
  cardEl.style.opacity = '0';

  await wait(100 + index * 150);

  cardEl.style.transition =
    'transform 0.95s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease';
  cardEl.style.opacity = '1';
  cardEl.style.transform = 'translate(0, 0) scale(1)';

  await wait(980);

  cardEl.style.transition = '';
  cardEl.style.transform = '';
  cardEl.style.opacity = '';
  cardEl.classList.remove('animating');
}

export async function flipCard(cardEl, delay = 0) {
  await wait(delay);
  cardEl.classList.add('flipped');
  await wait(750);
}

export function buildCardElement(card, reversed) {
  const wrap = document.createElement('div');
  wrap.className = `tarot-card${reversed ? ' reversed' : ''}`;

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  const back = document.createElement('div');
  back.className = 'card-face card-back';

  const front = document.createElement('div');
  front.className = 'card-face card-front';
  front.innerHTML = `
    <span class="card-num">${card.number}</span>
    <span class="card-symbol">${card.symbol}</span>
    <span class="card-name">${card.name}</span>
  `;

  inner.append(back, front);
  wrap.appendChild(inner);
  return wrap;
}
