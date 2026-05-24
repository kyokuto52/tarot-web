export function createDialogController(elements) {
  const { textEl, cursorEl, choicesEl } = elements;
  let typingTimer = null;
  let pauseTimer = null;

  function clearTyping() {
    if (typingTimer) {
      clearInterval(typingTimer);
      typingTimer = null;
    }
    if (pauseTimer) {
      clearTimeout(pauseTimer);
      pauseTimer = null;
    }
  }

  function setChoicesDisabled(disabled) {
    choicesEl.querySelectorAll('button').forEach((btn) => {
      btn.disabled = disabled;
    });
  }

  /** 句末停顿：按字数给足阅读时间，避免连句过快 */
  function calcPauseAfter(text) {
    const len = text.length;
    return Math.min(2200, Math.max(900, 500 + len * 28));
  }

  function typeText(fullText, speed = 52, pauseAfter) {
    clearTyping();
    textEl.textContent = '';
    cursorEl.classList.remove('hidden');
    setChoicesDisabled(true);

    return new Promise((resolve) => {
      let i = 0;
      typingTimer = setInterval(() => {
        textEl.textContent += fullText[i];
        i += 1;
        if (i >= fullText.length) {
          clearInterval(typingTimer);
          typingTimer = null;
          const wait = pauseAfter ?? calcPauseAfter(fullText);
          pauseTimer = setTimeout(() => {
            pauseTimer = null;
            cursorEl.classList.add('hidden');
            resolve();
          }, wait);
        }
      }, speed);
    });
  }

  function showChoices(options) {
    choicesEl.innerHTML = '';
    setChoicesDisabled(false);

    return new Promise((resolve) => {
      options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'choice-btn';
        btn.textContent = opt.label;
        btn.addEventListener('click', () => {
          setChoicesDisabled(true);
          resolve(opt.value);
        });
        choicesEl.appendChild(btn);
      });
    });
  }

  async function sayThenChoose(text, options, speed) {
    await typeText(text, speed);
    return showChoices(options);
  }

  function skip() {
    clearTyping();
    cursorEl.classList.add('hidden');
  }

  return { typeText, showChoices, sayThenChoose, skip, setChoicesDisabled };
}
