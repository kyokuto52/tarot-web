import { ELEMENT_KEY } from '../glossary.js';

const SINGLE = {
  today: {
    title: '今日运势',
    field: '今天',
    focus: '今天的重点不是预测一整个人生，而是看清这一日的能量会把你推向哪里。',
    question: '今天我该顺着什么走，又该在哪件事上慢一点？',
  },
  question: {
    title: '问题解答',
    field: '你问的这件事',
    focus: '这张牌不是替你做决定，而是把局面里最关键的那层关系照亮。',
    question: '这件事真正卡住的地方是什么？我下一步能做什么？',
  },
  advice: {
    title: '人生建议',
    field: '接下来一段时间',
    focus: '这张牌给的不是鸡血，而是一种更适合你当前阶段的活法。',
    question: '我应该靠近什么，又该从什么消耗里退出来？',
  },
};

const TRIPLE = {
  fortune: {
    title: '运势',
    field: '整体节奏',
  },
  emotion: {
    title: '情感',
    field: '亲密关系',
  },
  life: {
    title: '生活',
    field: '日常状态',
  },
  career: {
    title: '事业',
    field: '工作与现实资源',
  },
};

const SLOT = {
  past: {
    title: '过去',
  },
  present: {
    title: '现在',
  },
  future: {
    title: '未来',
  },
};

const SUIT_READING = {
  wands: {
    element: '火',
    gift: '行动力、热情、创造欲和向前冲的胆量',
    challenge: '急躁、逞强、三分钟热度，或把消耗误认成努力',
    action: '先做出一个小而具体的动作，让能量有出口。',
  },
  cups: {
    element: '水',
    gift: '感受力、共情、亲密连接和心里的柔软',
    challenge: '情绪过载、依赖、逃避现实，或把想象当成事实',
    action: '把感受说成一句真话，不要只让它在心里反复涨潮。',
  },
  swords: {
    element: '风',
    gift: '判断、沟通、边界感和看清真相的能力',
    challenge: '过度分析、嘴硬心软、焦虑内耗，或用理性切断感受',
    action: '把问题写下来，区分事实、猜测和你真正害怕的部分。',
  },
  pentacles: {
    element: '土',
    gift: '稳定、身体感、金钱意识和把事情做成的耐心',
    challenge: '固执、拖延、匮乏感，或被现实压力压到失去弹性',
    action: '回到可执行的安排：预算、时间表、睡眠、身体和一个明确交付。',
  },
};

const RANK_READING = {
  '01': { stage: '新开始', move: '播种', advice: '别急着证明结果，先保护这颗种子。' },
  '02': { stage: '选择与平衡', move: '取舍', advice: '把两个选项摆到纸面上，答案会比想象中诚实。' },
  '03': { stage: '协作与扩张', move: '连接', advice: '找对人一起推进，比独自用力更有效。' },
  '04': { stage: '稳定与根基', move: '巩固', advice: '先守住基本盘，别让安全感变成停滞。' },
  '05': { stage: '冲突与考验', move: '辨认代价', advice: '不是每一场仗都值得打，先看你真正要保住什么。' },
  '06': { stage: '回馈与修复', move: '交换', advice: '接受帮助，也把感谢说出来，善意需要流动。' },
  '07': { stage: '评估与策略', move: '观察', advice: '慢一点收集信息，别把聪明用成防备。' },
  '08': { stage: '加速与练习', move: '专注', advice: '砍掉支线，给最重要的事一段完整时间。' },
  '09': { stage: '临界与守成', move: '坚持', advice: '你已经走到后半程，别在最疲惫时否定全部。' },
  '10': { stage: '完成与负荷', move: '收束', advice: '该交接的交接，该结束的结束，别把圆满活成重担。' },
  '11': { stage: '讯息与学习', move: '尝试', advice: '保持好奇，但别用试探代替行动。' },
  '12': { stage: '推进与追求', move: '出发', advice: '可以快，但要看路；热情需要方向。' },
  '13': { stage: '成熟与照料', move: '滋养', advice: '照顾别人之前，先确认自己没有被掏空。' },
  '14': { stage: '掌控与长期结构', move: '定规则', advice: '真正的稳定来自清楚的边界和可持续的责任。' },
};

const MAJOR_PATH = [
  '从零开始相信一次',
  '把资源聚到手里并主动创造',
  '倾听直觉，守住还不能说破的答案',
  '让事物被滋养、孕育并慢慢成形',
  '建立秩序，承担该承担的位置',
  '回到信念、传统或更成熟的指导',
  '在选择中确认真实的爱与价值',
  '把分裂的力量拉向同一个目标',
  '用温柔的力量驯服冲动与恐惧',
  '退后一步，在独处中看清方向',
  '承认周期变化，学会顺势转向',
  '用事实、边界和公平恢复平衡',
  '暂停挣扎，从反方向获得领悟',
  '结束旧章，让能量进入下一轮生命',
  '调和极端，找回适度而稳定的节奏',
  '看见欲望、依附和真正的选择权',
  '让虚假的结构倒下，留下真实地基',
  '在低处重新点亮信念和希望',
  '穿过迷雾，辨认恐惧与直觉的差别',
  '把生命力、坦诚和喜悦带到明处',
  '回应召唤，完成一次深层复盘',
  '整合经验，走向一个阶段的完成',
];

function orientationLabel(reversed) {
  return reversed ? '逆位' : '正位';
}

function keyword(card, reversed) {
  return reversed ? card.keywordReversed : card.keywordUpright;
}

function rankId(card) {
  return card.id.split('_').at(-1);
}

function majorIndex(card) {
  return Number(card.id.split('_').at(-1));
}

function cardEssence(card, reversed) {
  const k = keyword(card, reversed);
  if (card.arcana === 'major') {
    const path = MAJOR_PATH[majorIndex(card)];
    return reversed
      ? `${card.name}逆位像是在说：你已经知道主题是「${path}」，但某个环节被恐惧、拖延或过度用力卡住了。它的关键词是：${k}。`
      : `${card.name}正位带来的是「${path}」的力量。它的关键词是：${k}。`;
  }

  const suit = SUIT_READING[card.suit];
  const rank = RANK_READING[rankId(card)];
  return reversed
    ? `${card.name}逆位把${suit.element}元素的课题转向内侧：${suit.challenge}。它落在「${rank.stage}」这一阶段，关键词是：${k}。`
    : `${card.name}正位结合了${suit.element}元素的${suit.gift}，正处在「${rank.stage}」这一阶段。它的关键词是：${k}。`;
}

function shortIntro(card, reversed) {
  const orient = reversed ? 'reversed' : 'upright';
  if (card.arcana === 'major') {
    return `[[major_arcana]] · [[${orient}]]`;
  }
  const el = ELEMENT_KEY[card.element];
  return `[[minor_arcana]] · [[suit_${card.suit}]] · [[${el}]] · [[${orient}]]`;
}

function singleBody(card, ctx) {
  const theme = SINGLE[ctx.theme];
  const reversed = ctx.reversed;
  const orient = orientationLabel(reversed);
  const essence = cardEssence(card, reversed);

  const first = `${theme.title}里抽到${card.name}${orient}，说明${theme.field}最值得留意的不是表面事件，而是你和这股能量的相处方式。${theme.focus}`;

  const reading = reversed
    ? `这张牌的逆位不是坏消息，它更像一盏偏冷的灯：照出你哪里太紧、哪里太累、哪里还在用旧办法处理新处境。你可能已经感觉到事情不太顺，但真正的问题未必在外界，而在你是否还把同一种反应重复了一遍。`
    : `这张牌的正位是一种可用的力量。它不保证事情自动变好，但表示你手里确实有一个可以推进局面的入口。只要你不把能量散掉，它会帮助你把模糊的感觉变成更清楚的选择。`;

  const action = card.arcana === 'major'
    ? majorSingleAction(card, reversed, ctx.theme)
    : minorSingleAction(card, reversed, ctx.theme);

  return `${first}

牌面核心：
${essence}

你真正要问自己的问题是：
${theme.question}

具体来看：
${reading}

给你的建议：
${action}`;
}

function majorSingleAction(card, reversed, theme) {
  const path = MAJOR_PATH[majorIndex(card)];
  if (theme === 'today') {
    return reversed
      ? `今天先不要硬推。把「${path}」缩小成一个能完成的动作：回一条该回的信息、收拾一个角落、承认一种真实情绪。你需要的是回到中心，不是证明自己没事。`
      : `今天适合顺着「${path}」去做一件明确的小事。别把灵感停在脑内，给它一个动作、一次沟通或一个决定。`;
  }
  if (theme === 'question') {
    return reversed
      ? `这件事暂时别急着定生死。先找出你最害怕承认的事实，再决定下一步。只要事实被看见，局面就会松动。`
      : `把问题从「会不会成功」改成「我能怎样更诚实地参与」。当你承担自己的那一半，答案会比现在清楚。`;
  }
  return reversed
    ? `接下来别再用消耗换安全感。你需要少做一件违心的事，多做一件能让自己恢复力量的事。`
    : `接下来可以把这张牌当成一条主线：围绕「${path}」安排你的选择。越靠近真实，路越容易打开。`;
}

function minorSingleAction(card, reversed, theme) {
  const suit = SUIT_READING[card.suit];
  const rank = RANK_READING[rankId(card)];
  if (theme === 'today') {
    return reversed
      ? `今天先处理${suit.element}元素的失衡：${suit.action} ${rank.advice}`
      : `今天适合${rank.move}。${suit.action} ${rank.advice}`;
  }
  if (theme === 'question') {
    return reversed
      ? `这件事的卡点在于：你可能已经知道该怎么做，却还被${suit.challenge}拖住。先做一个小的现实校正，再看局面反馈。`
      : `这件事可以从${rank.move}开始。你不需要一次解决全部，只要先让${suit.gift}有一个具体落点。`;
  }
  return reversed
    ? `未来几周请先修复${suit.element}元素的消耗。不要把自己逼到极限后才承认需要调整。${rank.advice}`
    : `未来几周适合围绕${suit.element}元素做积累：${suit.action} ${rank.advice}`;
}

function tripleBody(card, ctx) {
  const headline = tripleHeadline(card, ctx);
  const keywords = keywordLines(card, ctx.reversed);
  const reading = slotReading(card, ctx);

  return `这是一张“${headline}”的牌。
关键词是：
${keywords}

${reading}`;
}

function keywordLines(card, reversed) {
  return keyword(card, reversed)
    .split(/[、，,]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4)
    .map((item) => `· ${item}`)
    .join('\n');
}

function tripleHeadline(card, ctx) {
  if (ctx.theme === 'emotion' && ctx.slot === 'future' && card.id === 'major_17' && !ctx.reversed) {
    return '感情运回暖';
  }

  const tone = ctx.reversed ? '需要修正' : '正在打开';
  const byTheme = {
    fortune: {
      past: ctx.reversed ? '运势被旧循环拖住' : '过去的积累仍在生效',
      present: ctx.reversed ? '眼前节奏有点卡住' : '当下有机会转顺',
      future: ctx.reversed ? '未来需要先避开旧坑' : '未来运势慢慢抬头',
    },
    emotion: {
      past: ctx.reversed ? '旧感情模式还在影响你' : '过去的感情经验正在沉淀',
      present: ctx.reversed ? '关系里有话没说透' : '感情正在变得可回应',
      future: ctx.reversed ? '感情需要先清理旧伤' : '感情会慢慢变亮',
    },
    life: {
      past: ctx.reversed ? '过去的失衡还留着后劲' : '生活里已有可用根基',
      present: ctx.reversed ? '日常秩序需要修复' : '生活状态正在回稳',
      future: ctx.reversed ? '未来要减少消耗' : '未来生活会更顺手',
    },
    career: {
      past: ctx.reversed ? '旧的工作压力仍未结清' : '过去的能力开始派上用场',
      present: ctx.reversed ? '事业上需要重新校准' : '事业正在进入可推进阶段',
      future: ctx.reversed ? '未来要先稳住现实盘' : '未来事业有上升空间',
    },
  };

  return byTheme[ctx.theme]?.[ctx.slot] ?? tone;
}

function slotReading(card, ctx) {
  const reversed = ctx.reversed;
  if (ctx.theme === 'emotion') return emotionSlot(card, ctx.slot, reversed);
  if (ctx.theme === 'career') return careerSlot(card, ctx.slot, reversed);
  if (ctx.theme === 'life') return lifeSlot(card, ctx.slot, reversed);
  return fortuneSlot(card, ctx.slot, reversed);
}

function fortuneSlot(card, slot, reversed) {
  const k = keyword(card, reversed);
  if (slot === 'past') {
    return reversed
      ? `过去一段时间，你的运势不算完全没有机会，但总像差一口气。
尤其像：
· 计划临时变化
· 明明努力却收效慢
· 反复遇到类似的人或事
· 想推进，却总被现实打断

这张牌说明，${k}并不是单纯的倒霉。
它更像一个旧循环：只要你还用同一种方式处理问题，运气就很难真正换轨。`
      : `过去这段时间，其实已经给过你一些可用资源。
尤其像：
· 有人帮过你
· 某个选择留下了后劲
· 一段经验让你更清楚自己要什么
· 看似普通的小事，后来变成关键伏笔

这张牌说明，${k}曾经把你带到现在。
你不是从零开始，只是需要重新认出自己手里已经有的东西。`;
  }
  if (slot === 'present') {
    return reversed
      ? `现在最明显的是阻滞感。
事情不是完全没有转机，而是你不能再靠硬推。
尤其要注意：
· 别为了证明自己而接下太多
· 别在信息不清时做大决定
· 别把一时不顺解释成全盘失败

这张牌还说明——
你现在最需要的不是更多焦虑，而是把最混乱的一步先理出来。`
      : `现在的运势有一点开始顺起来。
它不一定是突然中大奖式的好运，更像：
· 消息变清楚
· 有人愿意回应
· 某件拖着的事终于能推进
· 你开始知道下一步该往哪走

这张牌还说明——
越具体的行动，越容易带来好运的反馈。`;
  }
  return reversed
    ? `未来一两个月，运势的重点不是突然翻盘，而是避开旧坑。
尤其要小心：
· 冲动答应
· 过度乐观
· 重复拖延
· 把希望全押在别人身上

这张牌还说明——
只要你先修正节奏，运气会慢慢回来；但如果继续照旧，问题也会照旧。`
    : `未来一两个月，你的整体运势会有向上抬的趋势。
尤其像：
· 新的机会出现
· 贵人或朋友提供帮助
· 某个消息带来转机
· 原本模糊的方向变得清楚

这张牌还说明——
好运不是凭空落下来的，它会先通过一个小信号出现。你要接得住。`;
}

function emotionSlot(card, slot, reversed) {
  const k = keyword(card, reversed);
  if (slot === 'past') {
    return reversed
      ? `过去的感情里，有些经验并没有完全过去。
尤其像：
· 明明在意，却装作不在意
· 被忽冷忽热影响过
· 因为失望而变得更谨慎
· 想靠近别人，却先开始防备

这张牌说明，${k}仍在影响你现在的恋爱反应。
你不是不想爱，只是比以前更怕重蹈覆辙。`
      : `过去的感情经历并不是白走一趟。
它让你更知道：
· 自己需要怎样的回应
· 哪些暧昧其实不值得等
· 什么样的人会让你安心
· 什么样的关系会消耗你

这张牌说明，${k}曾经塑造过你的择偶标准。
你现在变谨慎，不是变冷漠，而是更知道自己要什么。`;
  }
  if (slot === 'present') {
    return reversed
      ? `你现在的感情状态有点拧。
尤其像：
· 心里在意，嘴上说随便
· 想要确认，又怕显得太主动
· 对方一慢，你就开始多想
· 关系没有断，但也没有真正往前

这张牌还说明——
现在最重要的不是继续猜，而是把一句真话说出来。`
      : `你现在的感情能量是可以被回应的。
尤其像：
· 聊天慢慢变多
· 有人开始认真看见你
· 暧昧里出现更稳定的信号
· 关系有机会从试探走向确定

这张牌还说明——
真正合适的人，不会只让你心动，也会让你慢慢安心。`;
  }
  return reversed
    ? `未来这段时间，感情上不是没有机会，但需要先清掉旧伤。
尤其要注意：
· 不要在不清不楚里耗太久
· 不要把新的人当成旧人的替身
· 不要因为怕失去，就降低自己的标准
· 不要只看心动，也要看行动

这张牌还说明——
如果一段关系只能靠猜维持，它就需要被重新谈清楚。`
    : `未来这段时间，你的感情运势整体会比现在更柔和。
尤其像：
· 朋友介绍
· 日常接触变熟
· 网络聊天慢慢升温
· 不同生活圈的人出现
· 精神交流比较强的人靠近

这张牌还说明——
之后出现的人，未必一开始就轰轰烈烈。
更可能是让你慢慢安心、慢慢信任的人。`;
}

function lifeSlot(card, slot, reversed) {
  const k = keyword(card, reversed);
  if (slot === 'past') {
    return reversed
      ? `过去一段时间，你的生活节奏可能并不轻松。
尤其像：
· 作息被打乱
· 事情堆在一起
· 身体和情绪都在硬撑
· 想改变，却一直没有余力

这张牌说明，${k}让你累，也让你看清哪些安排不能再继续照旧。`
      : `过去你其实已经建立过一些支撑。
尤其像：
· 习惯慢慢养成
· 生活里有稳定的人或事
· 某个选择让你站稳了一点
· 你比自己以为的更能照顾现实

这张牌说明，${k}不是空话。
你的生活有根，只是现在需要重新整理优先级。`;
  }
  if (slot === 'present') {
    return reversed
      ? `现在先别急着追求大改变。
你更需要处理的是：
· 睡眠
· 饮食
· 房间
· 账单
· 待办
· 那些一直被你推到后面的基本面

这张牌还说明——
生活会先从小处恢复，不是从某个宏大的决定开始。`
      : `现在适合把生活调成更顺手的形状。
尤其适合：
· 建立一个固定仪式
· 清理居住空间
· 重新安排时间表
· 把拖着的小事逐个收尾

这张牌还说明——
你会因为重新掌控日常，而慢慢找回自己的状态。`;
  }
  return reversed
    ? `未来这段时间，生活上的重点是减少消耗。
尤其要避免：
· 为了别人打乱自己的节奏
· 把身体警讯当成小事
· 用购物、熬夜或拖延缓解焦虑
· 明知道不适合还继续硬撑

这张牌还说明——
稳定不是无聊，而是让你终于有余力做选择。`
    : `未来你的生活会慢慢回到更有秩序的状态。
尤其像：
· 作息变稳
· 房间变清爽
· 关系和事务变简单
· 你开始知道什么该留、什么该放

这张牌还说明——
日子不会一下子完美，但会越来越像你真正想过的样子。`;
}

function careerSlot(card, slot, reversed) {
  const k = keyword(card, reversed);
  if (slot === 'past') {
    return reversed
      ? `过去在工作或钱的问题上，你可能有过一段不太舒服的经验。
尤其像：
· 付出很多却不被看见
· 责任边界不清
· 钱或资源带来压力
· 明明很累，还要继续扛

这张牌说明，${k}需要被复盘。
但它不是你的失败标签，只是提醒你以后不能再这样分配自己。`
      : `过去的积累并没有白费。
尤其像：
· 某项技能开始成形
· 有人认可过你的能力
· 一个项目留下了经验
· 你对钱、工作或责任更现实了

这张牌说明，${k}已经变成你的底层资源。
现在可以重新拿出来使用。`;
  }
  if (slot === 'present') {
    return reversed
      ? `现在事业上不要只靠硬撑。
你需要看清：
· 哪些责任不该全由你背
· 哪些技能需要补
· 哪些合作其实不对等
· 哪些钱和时间正在被消耗

这张牌还说明——
职业上的清醒，往往从承认“这样不行”开始。`
      : `现在适合把能力变成可展示的成果。
尤其适合：
· 整理作品
· 更新简历
· 提出方案
· 谈清报价
· 用数据说明价值

这张牌还说明——
别人不是看不见你，而是你需要让自己的价值更具体。`;
  }
  return reversed
    ? `未来一两个月，事业上要先稳住现实盘。
尤其要避免：
· 冲动辞职
· 盲目投资
· 继续拖延关键沟通
· 为了面子接下不划算的任务

这张牌还说明——
先把现金流、时间和责任分清，再决定要不要换方向。`
    : `未来事业和资源有慢慢上升的空间。
尤其像：
· 项目推进
· 收入变稳
· 有人看见你的能力
· 新的合作或机会出现
· 你开始拿回主动权

这张牌还说明——
这不是一夜翻盘的牌，而是努力开始形成回报的牌。`;
}

function noteFor(card, ctx) {
  if (ctx.mode === 'single') {
    return card.arcana === 'major'
      ? '大阿卡纳出现时，请把它当成阶段主题，而不只是当天的小情绪。'
      : '小阿卡纳更贴近日常事件，建议从一个具体动作开始验证牌意。';
  }

  return '';
}

export function composeReading(card, ctx) {
  const intro = shortIntro(card, ctx.reversed);
  const body = ctx.mode === 'single' ? singleBody(card, ctx) : tripleBody(card, ctx);
  const note = noteFor(card, ctx);
  return { intro, body, note };
}
