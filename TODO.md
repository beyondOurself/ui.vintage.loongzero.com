# TODO

## 进行中
- [ ] 按 PRD/TECH_DESIGN 落地 `index.html` iframe 平铺 + iPhone 15 外框基线

## 待开发
- [ ] 约定 UnoCSS / 图标（Vant + `icons/*.svg`）引入方式并写 README 运行说明
- [ ] 补全各功能独立 HTML（home / 列表或分类 / me 等，见 PRD）与 `common.css`（如需）

## 已完成
- [x] `index.html`：「平台切换」与「切换风格」同款固定按钮 + 浮层面板；选项复用主题色块 + 标题 + 说明 + 选中描边；小程序模式顶栏与胶囊同上
- [x] `index.html`：去掉手机外框顶部「刘海」`.notch`；`theme-switcher.js` 同步移除对 `.notch` 的着色
- [x] `icons/bi-*.svg`：`symbol#icon` + 根级 `<use href="#icon">` + `fill="currentColor"`（否则 Resvg 导出的底部 Tab PNG 空白；外链 `<use>` 在 file:// 等环境常失效）
- [x] 主题 `detail` / `cart` / `orders`：`bi-svg` 用外链 `<svg><use href="…/bi-*.svg#icon">`（`symbol` 内 `fill="currentColor"`）继承 `text-[#…]`；不用 `<img src=".svg">`（无法着色）
- [x] `themes/maillard/home.html`、`detail.html`：从 `warm-earth` 同步中文与结构并按美拉德色值替换（修复误存为 `???` 的文案与 ¥）
- [x] 样式由 Tailwind Play CDN 迁到 **UnoCSS**：`uno.config.ts`（`presetWind3` + `@unocss/reset/tailwind.css`）、`uno.css`、HTML 链 `uno.css`；`npm run uno` / `uno:watch`
- [x] 底部 Tab：`icons/nav/{warm-earth,maillard}/*-{on,off}.png` 由 `icons/bi-*.svg`（better-icons / fa6-solid）经 `icons/nav/render-nav-png.mjs`（`@resvg/resvg-js`）按主题色栅格化；页面用 `<img>` 引用
- [x] 微信小程序端 tab 位图：`npm run tab:wx`（`icons/nav/render-tab-bar-wx.mjs`，严格 **81×81px、≤40KB**，图形 ≤60px 居中；`sharp` + `resvg`）同步写入 `../app.vintage.loongzero.com/static/tab/`
- [x] `orders.html`（maillard / warm-earth）：订单操作按钮文案 `whitespace-nowrap` + 按钮组 `shrink-0`
- [x] `cart.html`（maillard / warm-earth）：底部导航贴底，结算栏固定在导航上方并留出安全区
- [x] `detail.html`（maillard / warm-earth）：购物车、购买按钮前增加图标（`fa-cart-plus` / `fa-bag-shopping`）
- [x] `detail` / `cart` / `orders`：Font Awesome CDN 改为本地 `icons/*.svg`（Iconify `fa6-solid`，better-icons MCP）
- [x] 初始化新项目模版文件
- [x] 将初始提示词记录到 RESEARCH.md、PRD.md、TECH_DESIGN.md

### 已开发的页面（当前仓库）
- 根目录 `index.html` + `theme-switcher.js`：多 iframe 平铺、主题切换（`uno.css`；子页本地 `icons/` + `better-icons.css`）
- 主题 `themes/warm-earth/`、`themes/maillard/`：两套各 7 页静态原型——`home.html`、`category.html`、`detail.html`、`cart.html`、`search.html`、`profile.html`、`orders.html`

## 已知问题
- 暂无
