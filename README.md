# Muo 问卷 - 个性化色彩测试

一个基于 Svelte + Vite 构建的交互式问卷应用，帮助用户找到他们的专属 Muo 色彩。

## 项目简介

Muo 问卷是一个有趣的色彩性格测试应用，通过四个精心设计的问题，帮助用户发现与他们个性最匹配的色彩。应用通过用户的回答分析，展示其专属的色彩类型和描述。

## 功能特性

- 🎨 精美的视觉设计，每个问题都有独特的背景图片
- 🔄 流畅的页面过渡动画
- 📱 响应式设计，适配各种设备
- ⚡ 快速加载，基于 Vite 构建
- 🧠 智能分析，根据用户选择计算匹配的色彩类型

## 技术栈

- [Svelte 5](https://svelte.dev/) - 前端框架
- [Vite](https://vitejs.dev/) - 构建工具
- JavaScript (ES6+)
- CSS3 动画

## 项目结构

```
.
├── public/                # 静态资源文件（背景图片）
│   ├── home.jpg           # 首页背景图
│   ├── Q1.jpg-Q4.jpg      # 问题页面背景图
│   └── AA.jpg-AG.jpg      # 结果页面背景图
├── src/
│   ├── lib/               # 核心组件和配置
│   │   ├── index.svelte   # 主问卷组件
│   │   ├── answer.svelte  # 答案展示组件
│   │   └── configuration.js # 问卷配置和答案数据
│   ├── App.svelte         # 应用根组件
│   ├── main.js            # 应用入口文件
│   └── app.css            # 全局样式
├── index.html             # HTML 模板
└── vite.config.js         # Vite 配置文件
```

## 问卷流程

1. 首页：欢迎页面，点击开始测试
2. 问题页：四个选择题，每个问题有7个选项
3. 结果页：根据用户选择显示匹配的色彩类型和描述

## 色彩类型

根据用户回答，系统会匹配以下7种色彩类型之一：

- **幻影蓝 (A)** - 沉浸内心自我
- **暮银 (B)** - 随心自在律动
- **雾琥珀 (C)** - 尽享时光流转
- **橙月 (D)** - 共赴自然漫游
- **森绿 (E)** - 疗愈静谧本心
- **可可棕 (F)** - 自有悠然天地
- **午夜黑 (G)** - 遁入深邃之境

## 开发指南

### 环境要求

- Node.js >= 16
- pnpm >= 7

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

默认访问地址：http://localhost:5173

### 构建生产版本

```bash
pnpm build
```

构建文件将输出到 `dist` 目录。

### 预览生产构建

```bash
pnpm preview
```

## 图片资源管理

所有背景图片都存放在 `public` 目录中，Vite 会自动将这些资源作为静态资源处理。在代码中通过绝对路径引用这些图片：

```javascript
import Home from '/home.jpg';
import Q1 from '/Q1.jpg';
// ... 其他图片导入
```

## 问卷配置

问卷问题和答案配置在 [src/lib/configuration.js](src/lib/configuration.js) 文件中：

- `Configuration` 数组包含所有问题及其选项
- `Answer` 对象定义了每种答案类型对应的色彩结果

## 动画效果

应用使用了多种动画效果提升用户体验：

- 页面切换的淡入淡出效果
- 标题和选项的飞入动画
- 答案页面的滑动过渡

## 浏览器支持

- Chrome >= 88
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 许可证

MIT