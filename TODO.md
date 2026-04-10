# TODO

## 进行中
- [ ] 按 PRD/TECH_DESIGN 落地 `index.html` iframe 平铺 + iPhone 15 外框基线

## 待开发
- [ ] 约定 Tailwind / 图标（Vant + `icons/*.svg`）引入方式并写 README 运行说明
- [ ] 补全各功能独立 HTML（home / 列表或分类 / me 等，见 PRD）与 `common.css`（如需）

## 已完成
- [x] 底部 Tab：`icons/nav/{warm-earth,maillard}/*-{on,off}.png` 由 `icons/bi-*.svg`（better-icons / fa6-solid）经 `icons/nav/render-nav-png.mjs`（`@resvg/resvg-js`）按主题色栅格化；页面用 `<img>` 引用
- [x] `orders.html`（maillard / warm-earth）：订单操作按钮文案 `whitespace-nowrap` + 按钮组 `shrink-0`
- [x] `cart.html`（maillard / warm-earth）：底部导航贴底，结算栏固定在导航上方并留出安全区
- [x] `detail.html`（maillard / warm-earth）：购物车、购买按钮前增加图标（`fa-cart-plus` / `fa-bag-shopping`）
- [x] `detail` / `cart` / `orders`：Font Awesome CDN 改为本地 `icons/*.svg`（Iconify `fa6-solid`，better-icons MCP）
- [x] 初始化新项目模版文件
- [x] 将初始提示词记录到 RESEARCH.md、PRD.md、TECH_DESIGN.md

### 已开发的页面（当前仓库）
- 根目录 `index.html` + `theme-switcher.js`：多 iframe 平铺、主题切换（Tailwind CDN；子页可用本地 `icons/` + `better-icons.css`）
- 主题 `themes/warm-earth/`、`themes/maillard/`：两套各 7 页静态原型——`home.html`、`category.html`、`detail.html`、`cart.html`、`search.html`、`profile.html`、`orders.html`

## 已知问题
- 暂无
