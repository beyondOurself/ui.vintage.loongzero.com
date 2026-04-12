/**
 * 与官方规范对齐：
 * - 微信小程序 app.json tabBar：建议尺寸 81px × 81px，单张 ≤ 40KB
 *   https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabbar
 * - uni-app x pages.json tabBar：同上；运行时图标宽度默认 24px（iconWidth）
 *   https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#tabbar-配置项列表
 *
 * 输出：严格 81×81 PNG，图形在框内居中；图形最大边约 60px（81 内常见模板比例，避免贴边或过碎）。
 */
import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resvg } from '@resvg/resvg-js'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const iconsDir = join(__dirname, '..')

/** 微信 / uni-app x 建议的 tab 图标位图尺寸 */
const CANVAS = 81
/** 81 画布内矢量栅格化后再 fit 进此边长（留出约 10px 边距，视觉接近常见模板） */
const ICON_MAX = 60
const MAX_BYTES = 40 * 1024

const THEMES = {
  'warm-earth': { on: '#876635', off: '#857C72' },
  maillard: { on: '#D2691E', off: '#C9A882' }
}

const ICONS = [
  { name: 'home', file: 'bi-home.svg' },
  { name: 'category', file: 'bi-th-large.svg' },
  { name: 'cart', file: 'bi-shopping-bag.svg' },
  { name: 'user', file: 'bi-user.svg' }
]

const APP_NAMES = {
  home: { on: 'home-active.png', off: 'home.png' },
  category: { on: 'category-active.png', off: 'category.png' },
  cart: { on: 'cart-active.png', off: 'cart.png' },
  user: { on: 'profile-active.png', off: 'profile.png' }
}

function tint(svg, hex) {
  return svg.replace(/currentColor/gi, hex)
}

async function buildIcon(svgStr) {
  const raster = Buffer.from(
    new Resvg(svgStr, {
      fitTo: { mode: 'width', value: 128 },
      background: 'transparent'
    })
      .render()
      .asPng()
  )

  const fitted = await sharp(raster)
    .resize(ICON_MAX, ICON_MAX, { fit: 'inside', withoutEnlargement: true })
    .ensureAlpha()
    .png()
    .toBuffer()

  return sharp({
    create: {
      width: CANVAS,
      height: CANVAS,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: fitted, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

const uiRoot = join(__dirname, '..', '..')
const appTabDir = join(uiRoot, '..', 'app.vintage.loongzero.com', 'static', 'tab')

function writeAndCheck(absPath, buf) {
  writeFileSync(absPath, buf)
  const n = statSync(absPath).size
  if (n > MAX_BYTES) {
    console.warn(`[tab:wx] 超过 40KB 限制: ${absPath} (${n} bytes)，请简化图形或换压缩策略`)
  }
}

async function main() {
  mkdirSync(appTabDir, { recursive: true })

  for (const { name, file } of ICONS) {
    const raw = readFileSync(join(iconsDir, file), 'utf8')
    for (const [tid, pal] of Object.entries(THEMES)) {
      for (const st of ['on', 'off']) {
        const buf = await buildIcon(tint(raw, pal[st]))
        const navName = `${name}-${st}.png`
        const navDir = join(__dirname, tid)
        mkdirSync(navDir, { recursive: true })
        const navPath = join(navDir, navName)
        writeAndCheck(navPath, buf)

        if (tid === 'warm-earth') {
          const appName = APP_NAMES[name][st]
          writeAndCheck(join(appTabDir, appName), buf)
        }
      }
    }
  }
  console.log(`[tab:wx] 已生成 ${CANVAS}×${CANVAS} PNG（图形 ≤${ICON_MAX}px），并同步到 app static/tab`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
