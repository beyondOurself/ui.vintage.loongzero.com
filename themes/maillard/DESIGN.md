# 美拉德（Maillard）

焦糖、咖啡、奶油底色，偏「烘焙 / 秋冬衣橱」温暖渐变，饱和度略高于大地主题。

## Overview

美拉德面向同一套古着移动端页面结构：咖啡主色、焦糖强调、奶油全局底。交互样式与暖色大地共用组件类名（`.vintage-*`、`.card-shadow`、`.bottom-nav`），色值以 `themes/maillard/styles.css` 为准。

## Colors

- **Primary** (#8B6F47): 主按钮、徽章、Tab 下划线、输入焦点描边倾向
- **Primary Press** (#A0826D): 主按钮按下
- **Accent** (#D2691E): 强调按钮、强调文字（`.vintage-accent`）
- **Accent Press** (#CD853F): 强调按钮按下
- **Text** (#5C4033): 正文与标题主色
- **Text Active Tab** (#6B4423): Tab 选中文字
- **Muted** (#C9A882): 次要说明、未选中 Tab、线框按钮描边
- **Border / Hairline** (#E8D5C4): 分隔线、卡片描边、底栏顶边、输入默认描边
- **Background** (#FAF0E6): 页面底色（`.vintage-bg`）
- **Surface** (#FFFFFF): 卡片、底栏、输入底色
- **Price** (#E64A19): 价格强调
- **Success** (#22C55E)
- **Warning** (#F59E0B)
- **Error** (#DC2626)
- **Info** (#3B82F6)

## Typography

- **Headline / Body Font**: Noto Sans SC，回退 `-apple-system`, `PingFang SC`, `Microsoft YaHei`, `sans-serif`
- **Line height（全局）**: 1.5
- **Title（`.vintage-title`）**: semibold，`letter-spacing: 0.3px`，`color #5C4033`
- **Card title（`.vintage-card-title`）**: 14px / medium
- **Body**: 16px regular
- **Caption / Badge**: 10px medium，uppercase
- **Tab**: 14px；inactive `color #C9A882`，active `color #6B4423` + semibold

## Spacing

- **Base unit**: 8px
- **Scale**: 4, 8, 12, 16, 24, 32, 48
- **按钮内边距**: 12px 24px
- **输入框**: 10px 16px
- **分隔线块**: 上下 margin 16px

## Border Radius

- **Small**: 4px — 徽章
- **Medium**: 6px — 按钮、输入框
- **Large**: 8px — 卡片

## Elevation

- **Card**: `box-shadow: 0 2px 8px rgba(92, 64, 51, 0.08)`，`border: 1px #E8D5C4`
- **Card active**: `0 1px 4px rgba(92, 64, 51, 0.12)` + `scale(0.98)`
- **Bottom nav**: `box-shadow: 0 -2px 8px rgba(92, 64, 51, 0.05)`，顶边 `#E8D5C4`
- **Input focus**: `box-shadow: 0 0 0 2px rgba(139, 111, 71, 0.1)`，描边 `#8B6F47`

## Components

### Buttons

**Primary（`.vintage-btn`）** — `bg #8B6F47`，`text #FFFFFF`，`border 1px #8B6F47`，`radius 6px`；active：`bg/border #A0826D`

**Secondary（`.vintage-btn-secondary`）** — `bg #FFFFFF`，`text #8B6F47`，`border 1px #C9A882`；active：`bg #FAF0E6`，`border #A0826D`

**Accent（`.vintage-btn-accent`）** — `bg #D2691E`，`text #FFFFFF`；active：`bg/border #CD853F`

### Cards

**Default（`.card-shadow`）** — `bg #FFFFFF`，`border 1px #E8D5C4`，`radius 8px`，阴影见 Elevation

### Inputs

**Text（`.vintage-input`）** — `bg #FFFFFF`，`border 1px #E8D5C4`，`text #5C4033`，`placeholder #C9A882`；focus 描边 `#8B6F47`，环见 Elevation

### Tabs

**（`.vintage-tab`）** — 默认 `color #C9A882`；**active**：`border-bottom-color #8B6F47`，`color #6B4423`，`font-weight 600`

### Badge

**（`.vintage-badge`）** — `bg #8B6F47`，`text #FFFFFF`，`radius 4px`

### Price

**（`.vintage-price`）** — `color #E64A19`，`font-weight 700`

## Do's and Don'ts

- **Do** 强调促销或「火热」用语优先用 **Accent** 系，主结构仍用 **Primary**。
- **Do** 价格专用 **Price**，与主色区块分离。
- **Do** 骨架屏用 `#F5E6D3` / `#E8D5C4` 渐变（`.img-placeholder`）。
- **Don't** 引入冷灰大面积背景破坏美拉德暖调连续谱。
- **Don't** 将焦糖色 **Accent** 铺满背景导致对比不足（背景保持 **Background** / **Surface**）。
