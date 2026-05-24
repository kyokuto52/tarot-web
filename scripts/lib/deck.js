/** 78 张塔罗牌元数据 */

import { MAJOR_REVERSED, MINOR_REVERSED_BY_SUIT } from './reversed-keywords.js';

export const SUITS = {
  wands: { key: 'wands', name: '权杖', symbol: '🪄', element: '火', realm: '行动、热情与创造' },
  cups: { key: 'cups', name: '圣杯', symbol: '🏆', element: '水', realm: '情感、关系与直觉' },
  swords: { key: 'swords', name: '宝剑', symbol: '⚔️', element: '风', realm: '思维、冲突与决断' },
  pentacles: { key: 'pentacles', name: '星币', symbol: '🪙', element: '土', realm: '物质、工作与稳固' },
};

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

export const MAJOR_ARCANA = [
  { id: 'major_00', number: '0', name: '愚者', symbol: '🃏', keyword: '新的开始、冒险精神、信任宇宙并迈出未知一步' },
  { id: 'major_01', number: 'I', name: '魔术师', symbol: '🎩', keyword: '意志聚焦、资源整合、将灵感转化为可见的行动' },
  { id: 'major_02', number: 'II', name: '女祭司', symbol: '🌙', keyword: '倾听内在声音、保留神秘、在静默中获得洞察' },
  { id: 'major_03', number: 'III', name: '皇后', symbol: '👑', keyword: '丰饶滋养、感性创造、以温柔力量孕育成果' },
  { id: 'major_04', number: 'IV', name: '皇帝', symbol: '🏛️', keyword: '建立秩序、承担责任、以理性与结构守护目标' },
  { id: 'major_05', number: 'V', name: '教皇', symbol: '📿', keyword: '传统智慧、精神指引、在信念体系中寻找意义' },
  { id: 'major_06', number: 'VI', name: '恋人', symbol: '💕', keyword: '价值对齐、深情选择、在关系中确认真实的自己' },
  { id: 'major_07', number: 'VII', name: '战车', symbol: '🏇', keyword: '意志驱动、克服分歧、以专注与勇气驶向胜利' },
  { id: 'major_08', number: 'VIII', name: '力量', symbol: '🦁', keyword: '以柔克刚、驯服本能、用耐心与自信赢得内心和平' },
  { id: 'major_09', number: 'IX', name: '隐者', symbol: '🕯️', keyword: '独处反省、慢下来照明、在孤独中提炼智慧' },
  { id: 'major_10', number: 'X', name: '命运之轮', symbol: '☸️', keyword: '周期转折、机缘起落、接受变化并顺势而为' },
  { id: 'major_11', number: 'XI', name: '正义', symbol: '⚖️', keyword: '公平衡量、因果显影、用诚实与逻辑做出抉择' },
  { id: 'major_12', number: 'XII', name: '倒吊人', symbol: '🔄', keyword: '换位思考、自愿暂停、在颠倒视角中获得顿悟' },
  { id: 'major_13', number: 'XIII', name: '死神', symbol: '🥀', keyword: '旧章落幕、深度蜕变、结束是为了更纯粹的重生' },
  { id: 'major_14', number: 'XIV', name: '节制', symbol: '🏺', keyword: '调和对立、耐心融合、在适度节奏中走向疗愈' },
  { id: 'major_15', number: 'XV', name: '恶魔', symbol: '⛓️', keyword: '欲望阴影、执念束缚、觉察什么在暗中操控你' },
  { id: 'major_16', number: 'XVI', name: '塔', symbol: '🗼', keyword: '突发震荡、假象崩塌、在震撼中被迫看见真相' },
  { id: 'major_17', number: 'XVII', name: '星星', symbol: '⭐', keyword: '希望回归、温柔疗愈、在黑夜后重新相信未来' },
  { id: 'major_18', number: 'XVIII', name: '月亮', symbol: '🌕', keyword: '潜意识涌动、迷雾幻象、面对恐惧并分辨真实' },
  { id: 'major_19', number: 'XIX', name: '太阳', symbol: '☀️', keyword: '喜悦明朗、成功显化、以坦诚与活力拥抱生命' },
  { id: 'major_20', number: 'XX', name: '审判', symbol: '📯', keyword: '觉醒召唤、回顾人生、回应内心深处的使命' },
  { id: 'major_21', number: 'XXI', name: '世界', symbol: '🌍', keyword: '周期完成、整合成就、在圆满中准备下一段旅程' },
];

/** 小阿卡纳：每花色 14 张，各 rank 的牌义关键词 */
const MINOR_BY_SUIT = {
  wands: [
    '灵感火花、新项目启动、以热情点燃可能性',
    '展望未来、权衡选项、在规划中保留弹性',
    '扩张行动、等待时机、团队或远方带来消息',
    '庆祝小成、稳固根基、在熟悉圈子里获得支持',
    '竞争角力、立场分歧、需要明确自己为何而战',
    '凯旋与认可、自信公开、胜利来自持续投入',
    '捍卫立场、不退缩、在挑战中坚守信念',
    '迅速推进、消息飞来、旅行或变动带来刺激',
    '坚韧面对阻碍、疲惫但未放弃、调整节奏而非放弃',
    '负担过重、独自承担太多、学会分配与求助',
    '探索热情、好奇学习、以新鲜眼光尝试新领域',
    '冲动行动、冒险追求、热情有余需留意方向',
    '自信领导、魅力吸引、以远见激励身边的人',
    '成熟掌控、创业精神、将愿景落实为可持续事业',
  ],
  cups: [
    '情感新芽、爱或灵感的开端、心门缓缓打开',
    '两情相悦、灵魂伴侣、在联结中确认心意',
    '聚会欢庆、友谊支持、情感交流带来疗愈',
    '怀旧沉思、留意未愈的旧伤、在安静中整理感受',
    '失落惆怅、暂时疏离、允许悲伤流过而不否定自己',
    '童年回忆、单纯快乐、重新连接内心的柔软',
    '憧憬浮现、众多选项、想象美好但需落地选择',
    '离开舒适、追寻更深意义、情感上勇敢转身',
    '愿望接近、内心满足、感恩已拥有的爱与美好',
    '家庭幸福、和谐圆满、情感归宿带来安稳感',
    '情感讯息、敏感直觉、以温柔好奇心探索感受',
    '浪漫追求、理想主义、跟随心在爱里冒险',
    '体贴滋养、共情照顾、以成熟温柔维系关系',
    '情感智慧、沉稳包容、成为他人可依靠的港湾',
  ],
  swords: [
    '清晰念头、真相破晓、新的洞见划破迷雾',
    '艰难抉择、进退两难、需诚实面对内心偏向',
    '心痛分离、悲伤释放、哭泣之后视野会更清楚',
    '静养恢复、独处疗愈、在沉默中让神经松弛',
    '冲突对峙、输赢心态、言语锋利时先深呼吸',
    '过渡漂泊、未定的旅程、在不确定中保持内在锚点',
    '策略谋划、灵活应对、以智慧绕开正面硬碰',
    '束缚受限、自我批评、辨认哪些限制其实来自恐惧',
    '焦虑失眠、思虑过度、请温柔对待正在预警的心',
    '暗夜将尽、最痛处已过、坚持到黎明就会松一口气',
    '好奇求知、灵活沟通、以开放心态收集讯息',
    '快刀斩乱麻、果敢推进、行动迅速但留意他人感受',
    '理性公正、清晰边界、以原则处理复杂局面',
    '权威判断、战略思维、用逻辑统筹全局并做决定',
  ],
  pentacles: [
    '物质契机、新财源、播种未来稳定的种子',
    '灵活权衡、双轨并行、在资源分配上保持平衡',
    '技艺精进、协作施工、团队合作让计划落地',
    '专注守成、节俭务实、巩固已有成果再求扩张',
    '财务波动、外在安全感动摇、重新评估金钱观',
    '慷慨施予、公平交换、在给予与接受间找到平衡',
    '耐心培育、长远投资、慢工出细活终将见回报',
    '勤奋钻研、学徒心态、以技艺换取认可与收入',
    '独立完成、品质坚持、享受亲手创造的具体成果',
    '家族传承、财富累积、传统与稳定带来安全感',
    '务实学习、新技能、以好奇心掌握可行本领',
    '勤勉奔波、为目标奔走、忙碌中别忘照顾身体',
    '滋养照料、舒适环境、让物质与感官服务生活',
    '成熟经营、稳健领导、以可靠与丰盛示范成功',
  ],
};

const RANK_LABELS = [
  { id: '01', number: 'A', name: '首牌' },
  { id: '02', number: 'II', name: '二' },
  { id: '03', number: 'III', name: '三' },
  { id: '04', number: 'IV', name: '四' },
  { id: '05', number: 'V', name: '五' },
  { id: '06', number: 'VI', name: '六' },
  { id: '07', number: 'VII', name: '七' },
  { id: '08', number: 'VIII', name: '八' },
  { id: '09', number: 'IX', name: '九' },
  { id: '10', number: 'X', name: '十' },
  { id: '11', number: '侍从', name: '侍从' },
  { id: '12', number: '骑士', name: '骑士' },
  { id: '13', number: '王后', name: '王后' },
  { id: '14', number: '国王', name: '国王' },
];

function buildMinorArcana() {
  const cards = [];
  for (const [suitKey, keywords] of Object.entries(MINOR_BY_SUIT)) {
    const suit = SUITS[suitKey];
    const revKeywords = MINOR_REVERSED_BY_SUIT[suitKey];
    RANK_LABELS.forEach((rank, idx) => {
      const id = `${suitKey}_${rank.id}`;
      const displayName = `${suit.name}${rank.name}`;
      cards.push({
        id,
        number: rank.number,
        name: displayName,
        symbol: suit.symbol,
        keywordUpright: keywords[idx],
        keywordReversed: revKeywords[idx],
        suit: suitKey,
        suitName: suit.name,
        element: suit.element,
        realm: suit.realm,
        arcana: 'minor',
      });
    });
  }
  return cards;
}

export function buildFullDeck() {
  const majors = MAJOR_ARCANA.map((c, i) => ({
    ...c,
    keywordUpright: c.keyword,
    keywordReversed: MAJOR_REVERSED[i],
    arcana: 'major',
    suit: null,
    suitName: null,
    element: '灵性',
    realm: '人生课题与灵魂旅程',
  }));
  return [...majors, ...buildMinorArcana()];
}
