/*
 * @Author: ycb
 * @Date: 2024-06-26 11:18:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-26 12:00:22
 * @Description: 
 */

import process from 'node:process';
import path from 'node:path';
import unocss from 'unocss/vite';
import presetIcons from '@unocss/preset-icons';
import { presetUno, presetAttributify } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';

export function setupUnocss() {
  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon');

  return unocss({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          display: 'inline-block'
        },
        collections: {
          icon: FileSystemIconLoader(
            localIconPath,
            svg => svg.replace(/#fff/, 'currentColor')
          )
        },
        scale: 1,
        warn: true
      }),
    ]
  });
}