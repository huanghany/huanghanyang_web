# 黄瀚扬 - 个人主页

基于 Next.js + Tailwind CSS 构建的个人自我介绍网站，具备丰富的交互动画和响应式设计。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **运行时**: React 19

## 功能模块

| 模块 | 说明 |
|------|------|
| 首屏 Hero | 个人头像、打字机效果标语、粒子背景、渐变光晕、呼吸光效边框 |
| 关于我 | 个人介绍、快速信息卡片、技能进度条（滚动触发动画） |
| 经历与教育 | 时间线布局、交替排列、标签展示 |
| 项目展示 | 卡片网格、悬浮交互、渐变顶部条、查看详情跳转、视频模态框播放 |
| 联系方式 | GitHub/Gitee/邮箱/微信/电话卡片、留言表单 |
| 导航栏 | 滚动高亮、毛玻璃效果、移动端汉堡菜单 |

## 交互与动画

- 打字机效果：首屏标语循环切换
- 粒子背景：随机浮动粒子 + 渐变光晕
- 滚动动画：各模块进入视口时淡入（IntersectionObserver）
- 技能进度条：滚动到视口时动画填充
- 卡片悬浮：鼠标悬停上浮 + 阴影增强
- 导航高亮：滚动时自动高亮当前区域
- 呼吸光效：头像边框脉冲发光
- 渐变文字：标题渐变色循环动画
- 视频模态框：点击"查看视频"弹出模态框播放，支持本地视频和 B 站嵌入

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（支持局域网访问）
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

开发服务器绑定 `0.0.0.0`，支持局域网访问：
- 本机：http://localhost:3000
- 局域网：`http://<你的内网IP>:3000`

## 项目结构

```text
src/
├── app/
│   ├── globals.css       # 全局样式、CSS 变量、动画关键帧
│   ├── layout.tsx        # 根布局（元数据、语言设置）
│   └── page.tsx          # 主页面（组合所有模块）
├── components/
│   ├── Navbar.tsx         # 顶部导航栏（左上角 HHY 标识）
│   ├── Hero.tsx           # 首屏英雄区（头像 + 打字机标语）
│   ├── About.tsx          # 关于我（介绍 + 技能进度条）
│   ├── Experience.tsx     # 经历与教育（时间线）
│   ├── Projects.tsx       # 项目展示（卡片 + 视频模态框）
│   ├── Contact.tsx        # 联系方式（社交卡片 + 表单）
│   └── Footer.tsx         # 页脚
└── public/
    └── avatar.png         # 个人头像
```

## 自定义指南

### 个人信息

| 修改内容 | 文件 | 位置 |
|----------|------|------|
| 姓名/标语 | `src/components/Hero.tsx` | `<span className="gradient-text">` 和 `phrases` 数组 |
| 个人介绍 | `src/components/About.tsx` | `<p>` 标签中的文字 |
| 技能栈 | `src/components/About.tsx` | `skills` 数组 |
| 快速信息 | `src/components/About.tsx` | `info` 数组（位置/学历/专业/状态） |
| 经历与教育 | `src/components/Experience.tsx` | `experiences` 数组 |
| 项目展示 | `src/components/Projects.tsx` | `projects` 数组 |
| 联系方式 | `src/components/Contact.tsx` | `contactLinks` 数组 |
| 页脚邮箱 | `src/components/Footer.tsx` | `href="mailto:..."` |
| 导航标识 | `src/components/Navbar.tsx` | `HHY` 文字 |
| 头像 | `public/avatar.png` | 替换图片文件即可 |

### 添加项目视频

在 `Projects.tsx` 的 `projects` 数组中，将 `video: null` 改为：

**本地视频：**
```ts
video: { type: "local", src: "/videos/demo.mp4" }
```

将视频文件放到 `public/videos/` 目录下。

**B 站视频：**
```ts
video: { type: "bilibili", src: "https://player.bilibili.com/player.html?bvid=BVxxxxxx" }
```

设置 `video` 后，项目卡片悬浮时会显示"查看视频"按钮，点击弹出模态框播放。

### 添加项目外链

在 `projects` 数组中修改 `link` 字段：
```ts
link: "https://github.com/huanghany/your-repo"
```
点击"查看详情"按钮会在新标签页打开该链接。

## 部署

推荐使用 [Vercel](https://vercel.com) 一键部署：

```bash
npx vercel
```

也支持部署到任何支持 Node.js 的平台（Netlify、Railway 等）。

## 未来改进方向

- [ ] 使用 Next.js `<Image>` 组件优化头像加载（自动压缩、懒加载、WebP 格式适配）
- [ ] 添加深色/浅色主题切换
- [ ] 添加博客/文章模块
- [ ] 接入后端实现留言表单真实发送（如 Resend / EmailJS）
- [ ] 添加项目详情页（独立路由，非模态框）
- [ ] 添加 Google Analytics / 百度统计
- [ ] SEO 优化（Open Graph、结构化数据）
- [ ] 添加 i18n 国际化支持
- [ ] PWA 支持（离线访问、安装到桌面）
- [ ] 添加微信二维码图片展示

## 许可

MIT License
