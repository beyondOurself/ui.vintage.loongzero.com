import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, presetWind3 } from 'unocss'

const tailwindResetPath = join(process.cwd(), 'node_modules/@unocss/reset/tailwind.css')

export default defineConfig({
  presets: [presetWind3()],
  preflights: [
    {
      layer: 'preflights',
      getCSS: () => readFileSync(tailwindResetPath, 'utf-8'),
    },
  ],
})
