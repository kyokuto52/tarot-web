/** 运势 / 生活 / 事业 三线：同一口语文脉，不用术语标签 */

const THEME = {
  fortune: { name: '运势', you: '你最近的运气与节奏', single: '整体走势', couple: '你们共同的运势' },
  life: { name: '生活', you: '你最近的日子与状态', single: '生活节奏', couple: '你们的生活磨合' },
  career: { name: '事业', you: '你最近的工作与钱', single: '职业与收入', couple: '你们对现实的分工' },
};

const SLOT = {
  past: '过去',
  present: '现在',
  future: '未来',
};

function kw(card, rev) {
  return rev ? card.keywordReversed : card.keywordUpright;
}

export function composeThemeTriple(card, theme, slot, rev) {
  const t = THEME[theme];
  const s = SLOT[slot];
  const k = kw(card, rev);
  const n = card.name;
  const revLabel = rev ? '逆位' : '正位';

  if (slot === 'past') {
    return rev
      ? `这张牌说明，${t.you}里，${s}有一段「卡过」的经历。
过去你可能：
· 明明努力，却总觉得差一口气
· 在${t.name}上反复踩同一个坑
· 和这段经历有关的事还没真正放下：${k}
那不是失败，是你还没把旧剧本写完。`
      : `这张牌说明，${t.you}的底子，其实跟「${k}」有关。
过去你可能：
· 做过关键选择，影响到现在
· 有过一段还算亮的时期，给你底气
· 慢慢摸清什么适合自己
${n}${revLabel}在${s}提醒你：根还在，可以接着长。`;
  }

  if (slot === 'present') {
    return rev
      ? `你${t.name}的${s}，核心关键词是：
堵
反复
心累
嘴上说没事，心里不踏实
你最近更像是在：
「怎么又回到这种感觉？」
${n}逆位在说：${k}
先别硬冲，把最乱的一块理出来。`
      : `你${t.name}的${s}，核心关键词是：
顺一点
有方向
能推进
你最近更像是在：
「我知道下一步该干嘛了。」
${n}正位在说：${k}
把握眼前这一小步，比想一年后的宏图有用。`;
  }

  return rev
    ? `这张牌提示：${t.name}的${s}若不改习惯，容易走向「${k}」。
接下来一两月：
别赌一口气
先止损、先睡觉、先跟信任的人聊一句实话
如果你一个人扛：
先把生活秩序拉回正轨
如果你在和他人共事/同居：
需要重新分活、分钱、分责任`
    : `这是一张偏积极的${t.name}牌。
${n}在${s}代表：
${k}
接下来一两月：
不是惊天逆转，而是「慢慢往上抬」
如果你独自打拼：
适合投递、谈薪、考证、整理简历
如果你在关系里：
${t.couple}会更清晰——谁负责什么，要说清`;
}
