export const MODES = {
  single: { id: 'single', label: '抽一张牌', count: 1 },
  triple: { id: 'triple', label: '抽三张牌', count: 3 },
};

export const SINGLE_THEMES = {
  today: { id: 'today', label: '今日运势' },
  question: { id: 'question', label: '问题解答' },
  advice: { id: 'advice', label: '人生建议' },
};

export const TRIPLE_THEMES = {
  fortune: { id: 'fortune', label: '运势' },
  emotion: { id: 'emotion', label: '情感' },
  life: { id: 'life', label: '生活' },
  career: { id: 'career', label: '事业' },
};

export const SPREAD_SLOTS = [
  { id: 'past', label: '过去' },
  { id: 'present', label: '现在' },
  { id: 'future', label: '未来' },
];

export const STATE = {
  CURTAIN: 'curtain',
  HOME: 'home',
  MODE: 'mode',
  THEME: 'theme',
  CONFIRM: 'confirm',
  DRAWING: 'drawing',
  RESULT: 'result',
};
