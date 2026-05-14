# 暖色大地（Warm Earth）

沉稳木色与亚麻灰底，偏「大地 / 古着仓库」气质，克制、耐看。

## Overview

暖色大地面向古着电商移动端原型：深棕主色、铜色强调、浅米全局底。卡片与导航允许轻阴影与细描边并存，按压有轻微缩放反馈。全站中文主字体 Noto Sans SC，与 `themes/warm-earth/styles.css` 中 `.vintage-*`、`.card-shadow`、`.bottom-nav` 保持一致。

## Colors

- **Primary** (#351D14): 主按钮、强标题锚点、选中态文字
- **Accent** (#876635): 强调按钮、徽章、Tab 下划线、链接与焦点环倾向色
- **Accent Press** (#A17148): 强调按钮按下
- **Primary Press** (#532D1C): 主按钮按下
- **Text** (#2D1C13): 正文与标题主色
- **Muted** (#857C72): 次要说明、未选中 Tab
- **Border / Hairline** (#E8E5E0): 分隔线、卡片描边、底栏顶边
- **Border Input** (#D1D1CC): 输入框默认描边
- **Border Secondary Btn** (#857C72): 线框按钮描边
- **Background** (#F5F3F0): 页面底色（`.vintage-bg`）
- **Surface** (#FFFFFF): 卡片、底栏、输入底色
- **Price** (#E53935): 价格强调（全站统一醒目色）
- **Success** (#22C55E)
- **Warning** (#F59E0B)
- **Error** (#DC2626)
- **Info** (#3B82F6)

## Typography

- **Headline / Body Font**: Noto Sans SC，回退 `-apple-system`, `PingFang SC`, `Microsoft YaHei`, `sans-serif`
- **Line height（全局）**: 1.5
- **Display / 大标题**: Noto Sans SC 20–24px semibold（页面级，按 HTML 工具类叠加）
- **Title（`.vintage-title`）**: semibold，`letter-spacing: 0.3px`
- **Card title（`.vintage-card-title`）**: 14px / medium，`letter-spacing: 0.2px`
- **Body**: 16px regular
- **Caption / Badge**: 10px medium，大写标签（`.vintage-badge`）
- **Tab**: 14px；inactive 400，active 600

## Spacing

- **Base unit**: 8px
- **Scale**: 4, 8, 12, 16, 24, 32, 48
- **按钮内边距**: 12px 24px（`.vintage-btn` 系）
- **输入框**: 10px 16px 垂直内边距
- **分隔线块**: 上下 margin 16px（`.vintage-divider`）

## Border Radius

- **Small**: 4px — 徽章
- **Medium**: 6px — 按钮、输入框
- **Large**: 8px — 卡片（`.card-shadow`）

## Elevation

- **Card**: `box-shadow: 0 2px 8px rgba(45, 28, 19, 0.08)`，`border: 1px #E8E5E0`
- **Card active**: `0 1px 4px rgba(45, 28, 19, 0.12)` + `transform: scale(0.98)`
- **Bottom nav**: `box-shadow: 0 -2px 8px rgba(45, 28, 19, 0.05)`，顶边 `#E8E5E0`
- **Input focus**: `box-shadow: 0 0 0 2px rgba(135, 102, 53, 0.1)`，描边 `#876635`

## Components

### Buttons

**Primary（`.vintage-btn`）** — `bg #351D14`，`text #FFFFFF`，`border 1px #351D14`，`radius 6px`，`font-weight 500`，`letter-spacing 0.5px`；active：`bg/border #532D1C`，`scale(0.98)`

**Secondary（`.vintage-btn-secondary`）** — `bg #FFFFFF`，`text #351D14`，`border 1px #857C72`；active：`bg #F5F3F0`，`border #58493A`

**Accent（`.vintage-btn-accent`）** — `bg #876635`，`text #FFFFFF`；active：`bg/border #A17148`，`scale(0.98)`

### Cards

**Default（`.card-shadow`）** — `bg #FFFFFF`，`border 1px #E8E5E0`，`radius 8px`，阴影见 Elevation

### Inputs

**Text（`.vintage-input`）** — `bg #FFFFFF`，`border 1px #D1D1CC`，`radius 6px`，`text #2D1C13`，`placeholder #857C72`；focus 见 Elevation

### Tabs

**（`.vintage-tab`）** — 默认 `color #857C72`，底边透明；**active**：`border-bottom-color #876635`，`color #351D14`，`font-weight 600`

### Badge

**（`.vintage-badge`）** — `bg #876635`，`text #FFFFFF`，`radius 4px`，`padding 3px 8px`，uppercase

### Price

**（`.vintage-price`）** — `color #E53935`，`font-weight 700`

## Do's and Don'ts

- **Do** 主交互与导航选中用 Primary / Accent，与 `styles.css` 同步。
- **Do** 价格一律用 **Price** 色，避免与主色混用。
- **Do** 占位图骨架条用 `#E8E5E0` / `#D1D1CC` 渐变（见 `.img-placeholder`）。
- **Don't** 把 `#E53935` 用于非价格的主要块面填充。
- **Don't** 去掉卡片/底栏既定阴影与描边导致与 MarketNest 等主题视觉体系混淆（各主题独立文档，实现以本主题 CSS 为准）。
