# 对话记录 - 个人主页搭建

## 日期
2026-06-16

## 目标
搭建一个个人自我介绍网页

## 技术选型讨论

用户需求：
- 使用 Next.js 框架
- 包含四个模块：基本信息+头像、经历/简历、项目展示、联系方式
- 要求可交互、有动态效果

## 搭建过程

### 1. 项目初始化
- `npm init -y` 初始化 package.json
- 安装核心依赖：`next`, `react`, `react-dom`
- 安装开发依赖：`typescript`, `@types/react`, `@types/node`, `tailwindcss`, `postcss`, `autoprefixer`
- 安装 SWC 二进制：`@next/swc-win32-x64-msvc`（解决 Windows 平台 SWC 加载问题）
- 安装 PostCSS 插件：`@tailwindcss/postcss`

### 2. 配置文件
- `tsconfig.json` - TypeScript 配置，路径别名 `@/*`
- `next.config.ts` - Next.js 配置
- `postcss.config.mjs` - PostCSS 配置（Tailwind CSS 4 的 `@tailwindcss/postcss` 插件）
- `package.json` - 添加 dev/build/start/lint 脚本，移除 `type: "commonjs"`

### 3. 组件开发

| 组件 | 文件 | 功能 |
|------|------|------|
| Navbar | `src/components/Navbar.tsx` | 固定导航栏，滚动高亮，毛玻璃效果，移动端菜单 |
| Hero | `src/components/Hero.tsx` | 首屏，打字机效果，粒子背景，渐变光晕，呼吸光效头像 |
| About | `src/components/About.tsx` | 个人介绍，快速信息卡片，技能进度条动画 |
| Experience | `src/components/Experience.tsx` | 时间线布局工作经历，交替排列 |
| Projects | `src/components/Projects.tsx` | 项目卡片网格，悬浮交互效果 |
| Contact | `src/components/Contact.tsx` | 社交链接卡片，留言表单 |
| Footer | `src/components/Footer.tsx` | 页脚，版权信息，社交图标 |

### 4. 遇到的问题及解决

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| SWC 加载失败 | Windows 平台缺少对应的 SWC 二进制 | 安装 `@next/swc-win32-x64-msvc` |
| `@tailwindcss/postcss` 找不到 | Tailwind CSS 4 需要 `@tailwindcss/postcss` 插件 | 安装 `@tailwindcss/postcss` 并配置 postcss.config.mjs |
| CommonJS/ESM 冲突 | package.json 中 `type: "commonjs"` 与 TS/ESM 语法冲突 | 移除 `type: "commonjs"` |
| `.next` 缓存导致旧错误 | 修改依赖后缓存未更新 | 删除 `.next` 目录重启 |

### 5. 最终结果
- 开发服务器成功运行在 http://localhost:3000
- 页面正常渲染，无错误
- 所有交互和动画效果正常工作
