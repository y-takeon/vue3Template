/*
 * @Author: ycb
 * @Date: 2024-06-25 22:20:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-27 14:57:52
 * @Description: 
 */
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist']
    }
  },
  // 将多个规则组合成一个简写
  shortcuts: [
    {
      "flex-center": 'flex justify-center items-center'
    }
  ],
  rules: [
    [
      'p-c',
      {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`
      }
    ],
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) / 4}rem` })]
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)'
    }
  },
  presets: [
    presetUno({ dark: 'class' }),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        SansCN: [
          {
            name: 'Source Han Sans CN',
            weights: ['400', '700'],
            italic: true
          }
        ]
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})