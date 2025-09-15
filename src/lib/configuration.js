import Home from '../assets/home.jpg';
import Q1 from '../assets/Q1.jpg';
import Q2 from '../assets/Q2.jpg';
import Q3 from '../assets/Q3.jpg';
import Q4 from '../assets/Q4.jpg';
import AA from '../assets/AA.jpg';
import AB from '../assets/AB.jpg';
import AC from '../assets/AC.jpg';
import AD from '../assets/AD.jpg';
import AE from '../assets/AE.jpg';
import AF from '../assets/AF.jpg';
import AG from '../assets/AG.jpg';

export const Configuration = [
  {
    title: '找到你的专属 Muo 色彩',
    background: Home
  },
  {
    title: '你理想的放松方式是什么？',
    background: Q1,
    options: [
      {
        title: 'A) 读一本好书或听播客',
        value: 'A'
      },
      {
        title: 'B) 一边工作一边听音乐',
        value: 'B'
      },
      {
        title: 'C) 沉浸在你最爱的旋律中',
        value: 'C'
      },
      {
        title: 'D) 规划下一次探险旅行',
        value: 'D'
      },
      {
        title: 'E) 以瑜伽或冥想开始新的一天',
        value: 'E'
      },
      {
        title: 'F) 招待朋友并营造氛围',
        value: 'F'
      },
      {
        title: 'G) 用音乐捕捉美好瞬间',
        value: 'G'
      }
    ]
  },
  {
    title: '你通常喜欢在什么地方欣赏音乐？',
    background: Q2,
    options: [
      {
        title: 'A) 安静舒适的小角落',
        value: 'A'
      },
      {
        title: 'B) 高效的工作空间',
        value: 'B'
      },
      {
        title: 'C) 昏暗私密的房间',
        value: 'C'
      },
      {
        title: 'D) 户外或移动途中',
        value: 'D'
      },
      {
        title: 'E) 宁静的自然场所',
        value: 'E'
      },
      {
        title: 'F) 温馨的社交聚会',
        value: 'F'
      },
      {
        title: 'G) 创意工作室或创意角落',
        value: 'G'
      }
    ]
  },
  {
    title: '你会如何描述自己的音乐品味？',
    background: Q3,
    options: [
      {
        title: 'A) 平静舒缓型',
        value: 'A'
      },
      {
        title: 'B) 稳健律动型',
        value: 'B'
      },
      {
        title: 'C) 深沉强烈型',
        value: 'C'
      },
      {
        title: 'D) 活力充沛型',
        value: 'D'
      },
      {
        title: 'E) 平衡专注型',
        value: 'E'
      },
      {
        title: 'F) 温暖亲和型',
        value: 'F'
      },
      {
        title: 'G) 艺术表达型',
        value: 'G'
      }
    ]
  },
  {
    title: '你最希望从每日聆听的声音中获得什么？',
    background: Q4,
    options: [
      {
        title: 'A) 逃离喧嚣与放松身心',
        value: 'A'
      },
      {
        title: 'B) 专注投入与心流状态',
        value: 'B'
      },
      {
        title: 'C) 全然沉浸与细节品味',
        value: 'C'
      },
      {
        title: 'D) 能量涌动与节奏律动',
        value: 'D'
      },
      {
        title: 'E) 当下宁静与内心平和',
        value: 'E'
      },
      {
        title: 'F) 氛围营造与情感联结',
        value: 'F'
      },
      {
        title: 'G) 灵感激发与叙事共鸣',
        value: 'G'
      }
    ]
  }
];

export const Answer = {
  A: {
    title: '幻影蓝',
    description: '此刻，沉浸内心自我。',
    background: AA
  },
  B: {
    title: '暮银',
    description: '此刻，随心自在律动。',
    background: AB
  },
  C: {
    title: '雾琥珀',
    description: '此刻，尽享时光流转。',
    background: AC
  },
  D: {
    title: '橙月',
    description: '此刻，共赴自然漫游。',
    background: AD
  },
  E: {
    title: '森绿',
    description: '此刻，疗愈静谧本心。',
    background: AE
  },
  F: {
    title: '可可棕',
    description: '此刻，自有悠然天地。',
    background: AF
  },
  G: {
    title: '午夜黑',
    description: '此刻，遁入深邃之境。',
    background: AG
  }
};
