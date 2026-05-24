/** 小阿卡纳：14 阶位原型 × 4 花色修饰 */

export const SUIT_FLAVOR = {
  wands: {
    realm: '行动、事业心、热情与冒险',
    uprightTone: '火焰向前：行动、竞争、创造',
    reversedTone: '火焰乱窜：急躁、耗竭、方向错误',
  },
  cups: {
    realm: '情感、关系、美感与心灵',
    uprightTone: '水向心流：感受、联结、疗愈',
    reversedTone: '水滞或泛滥：情绪淤积、依赖、幻梦',
  },
  swords: {
    realm: '思维、真相、冲突与决断',
    uprightTone: '风刃清晰：判断、沟通、切割迷雾',
    reversedTone: '风刃伤己：焦虑、言语伤人、思维反刍',
  },
  pentacles: {
    realm: '金钱、身体、工作与物质',
    uprightTone: '土壤务实：积累、技艺、身体与资源',
    reversedTone: '土壤板结：贪婪、停滞、身体透支',
  },
};

const RANK_ID_ORDER = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14',
];

export const RANK_PROFILES = {
  '01': {
    rankName: '首牌',
    upright: {
      core: '种子、潜能、新周期的第一口气',
      omen: '开端之兆、灵感敲门',
      possibility: '从零到一、新身份萌芽',
      opportunity: '播种、报名、表白、立项',
      warning: '别因新鲜忽略后续培育',
      shadow: '只有火花没有柴',
    },
    reversed: {
      core: '契机溜走、迟迟不开张',
      omen: '迟到、空欢喜、假开始',
      possibility: '补做功课后仍能发芽',
      opportunity: '清理旧项目再开新坑',
      warning: '反复开坑不深耕',
      shadow: '害怕开始所以假装没准备好',
    },
  },
  '02': {
    rankName: '二',
    upright: {
      core: '权衡、双线、远观与选择',
      omen: '两条路同时出现',
      possibility: '合伙、异地恋、双轨收入',
      opportunity: '把选项写在纸上比空想清楚',
      warning: '犹豫过久，两条都变淡',
      shadow: '想要全部，不愿取舍',
    },
    reversed: {
      core: '失衡、无法两全、信息不全',
      omen: '沟通错位、合约模糊',
      possibility: '先选一条主心骨',
      opportunity: '缩小战场',
      warning: '情绪性二选一',
      shadow: '用纠结逃避行动',
    },
  },
  '03': {
    rankName: '三',
    upright: {
      core: '扩张、协作、初步成果',
      omen: '小团队成形、聚会喜讯',
      possibility: '传播、旅行、第三阶段',
      opportunity: '找人共创，比单打快',
      warning: '人多嘴杂，定好分工',
      shadow: '热闹掩盖深度不足',
    },
    reversed: {
      core: '协作破裂、延迟、三角是非',
      omen: '聚会变尴尬、项目卡第三关',
      possibility: '精简团队反而顺',
      opportunity: '复盘分工',
      warning: '流言与站队会伤项目',
      shadow: '用社交逃避执行',
    },
  },
  '04': {
    rankName: '四',
    upright: {
      core: '稳固、休整、守成与根基',
      omen: '安家、存款、身体需要静养',
      possibility: '筑巢、考证、框架搭好',
      opportunity: '巩固已有，再图扩张',
      warning: '舒适区过久会变僵化',
      shadow: '用稳定逃避成长',
    },
    reversed: {
      core: '根基动摇、不安、坐不住',
      omen: '搬家折腾、失眠、储蓄流失',
      possibility: '主动小搬动化解大危机',
      opportunity: '修补房屋/关系/习惯',
      warning: '为安全感抓太紧',
      shadow: '外在乱源于内在未安顿',
    },
  },
  '05': {
    rankName: '五',
    upright: {
      core: '冲突、匮乏感、竞争或考验',
      omen: '输赢分明、资源紧张',
      possibility: '在逆境里辨认真盟友',
      opportunity: '把斗争目标说清楚',
      warning: '别为面子打无意义仗',
      shadow: '受害者剧本会招更多苦',
    },
    reversed: {
      core: '冲突缓和或内耗加剧两极',
      omen: '和解可能、或旧伤复发',
      possibility: '离开不对等的战场',
      opportunity: '止损离场',
      warning: '表面和平，内里仍怨',
      shadow: '不敢争，也不敢走',
    },
  },
  '06': {
    rankName: '六',
    upright: {
      core: '回馈、回忆、短暂和谐',
      omen: '故人、旧地、礼物',
      possibility: '修复、奖学金、疗愈童年',
      opportunity: '表达感谢，善缘回流',
      warning: '沉溺过去美好，忽略现在',
      shadow: '镀金回忆',
    },
    reversed: {
      core: '旧账、无法释怀、付出不对等',
      omen: '怀旧变伤、被旧情打扰',
      possibility: '告别童年脚本',
      opportunity: '写给过去的一封信并放下',
      warning: '别用旧标准衡量新关系',
      shadow: '觉得世界欠自己',
    },
  },
  '07': {
    rankName: '七',
    upright: {
      core: '评估、谋略、耐心观望',
      omen: '多选项、需要战术',
      possibility: '长线布局见效前夕',
      opportunity: '收集情报再出手',
      warning: '孤军深入',
      shadow: '把聪明用在算计而非创造',
    },
    reversed: {
      core: '计划泄露、信心不足、走偏',
      omen: '被人捷足先登',
      possibility: '换策略仍来得及',
      opportunity: '承认失误，调整队形',
      warning: '多疑到无法合作',
      shadow: '拖延以「完美计划」为名',
    },
  },
  '08': {
    rankName: '八',
    upright: {
      core: '加速、专注、技艺精进',
      omen: '消息飞来、行程密集',
      possibility: '技能变现、快速通关',
      opportunity: '专注一件，八周内见分晓',
      warning: '超速伤身体',
      shadow: '忙作为逃避情感',
    },
    reversed: {
      core: '延误、散乱、后劲不足',
      omen: '交通耽搁、项目延期',
      possibility: '慢即是快',
      opportunity: '砍掉支线',
      warning: '急躁出错',
      shadow: '能量泄漏在琐事',
    },
  },
  '09': {
    rankName: '九',
    upright: {
      core: '接近完成、独自坚守、夜巡',
      omen: '临门一脚、深夜灵感',
      possibility: '独当一面、成果在即',
      opportunity: '守住最后10%',
      warning: '焦虑失眠',
      shadow: '独自扛到崩溃',
    },
    reversed: {
      core: '担忧、夜不能寐、几乎放弃',
      omen: '噩梦、过度想象最坏',
      possibility: '求助后立刻轻一点',
      opportunity: '把恐惧具体化，会缩小',
      warning: '疑神疑鬼',
      shadow: '用担心假装在努力',
    },
  },
  '10': {
    rankName: '十',
    upright: {
      core: '圆满或负担到顶',
      omen: '大结局、家族议题',
      possibility: '继承、收官、公众责任',
      opportunity: '交接棒，别全扛',
      warning: '成功附带的重量',
      shadow: '被期待压扁',
    },
    reversed: {
      core: '负担过重、无法收尾',
      omen: '压垮、家族拖累',
      possibility: '放下部分责任即自由',
      opportunity: '把责任分出去，别独自扛满',
      warning: '硬撑到病',
      shadow: '用「为大家」忽略自己',
    },
  },
  '11': {
    rankName: '侍从',
    upright: {
      core: '消息、好奇、学徒心态',
      omen: '新人、通知、试探',
      possibility: '学习、实习、暗恋信号',
      opportunity: '以初学者谦虚',
      warning: '肤浅、三分钟热度',
      shadow: '话多行动少',
    },
    reversed: {
      core: '谣言、拖延、不成熟',
      omen: '爽约、恶作剧式伤害',
      possibility: '成熟从承认幼稚开始',
      opportunity: '核实消息再反应',
      warning: '冲动发言',
      shadow: '逃避成长的大孩子',
    },
  },
  '12': {
    rankName: '骑士',
    upright: {
      core: '冲锋、追求、快速推进',
      omen: '告白、跳槽、出发',
      possibility: '短期见分晓',
      opportunity: '骑马赶路，但看路',
      warning: '鲁莽',
      shadow: '为动而动',
    },
    reversed: {
      core: '横冲直撞或原地打转',
      omen: '车祸隐喻、放鸽子',
      possibility: '减速仍能到达',
      opportunity: '检查马鞍（准备）',
      warning: '脾气先行',
      shadow: '承诺如风',
    },
  },
  '13': {
    rankName: '王后',
    upright: {
      core: '滋养、内在丰盛、成熟包容',
      omen: '贵人女性、家居改善',
      possibility: '审美、照顾、直觉准',
      opportunity: '由内而外地给予',
      warning: '情绪绑架',
      shadow: '过度牺牲',
    },
    reversed: {
      core: '情绪不稳、依赖、封闭',
      omen: '冷战、自我怀疑',
      possibility: '先填满自己的杯',
      opportunity: '建立自我照顾仪式',
      warning: '操控以爱之名',
      shadow: '公主病或圣母病',
    },
  },
  '14': {
    rankName: '国王',
    upright: {
      core: '掌控、格局、成熟领导力',
      omen: '老板、父亲、权威认可',
      possibility: '创业、置产、定规则',
      opportunity: '做长期结构性决定',
      warning: '僵化',
      shadow: '成功下的孤独',
    },
    reversed: {
      core: '专制、贪婪、失序',
      omen: '领导失信、财务丑闻',
      possibility: '柔性领导挽回',
      opportunity: '放权、听谏',
      warning: '用权力掩盖不安',
      shadow: '外强中干',
    },
  },
};

export function getMinorRankId(cardId) {
  const parts = cardId.split('_');
  return parts[parts.length - 1];
}

export function buildMinorProfile(card) {
  const rankId = getMinorRankId(card.id);
  const rank = RANK_PROFILES[rankId];
  const suit = SUIT_FLAVOR[card.suit];
  const prefix = card.suitName;
  return {
    image: `${prefix}${rank.rankName}，主掌${suit.realm}`,
    upright: enrichSide(rank.upright, suit, false, prefix, rank.rankName),
    reversed: enrichSide(rank.reversed, suit, true, prefix, rank.rankName),
  };
}

function enrichSide(side, suit, rev, prefix, rankName) {
  const tone = rev ? suit.reversedTone : suit.uprightTone;
  return {
    core: `${prefix}${rankName}——${side.core}（${tone}）`,
    omen: `${side.omen}；在${suit.realm}领域尤为明显`,
    possibility: side.possibility,
    opportunity: side.opportunity,
    warning: side.warning,
    shadow: side.shadow,
  };
}
