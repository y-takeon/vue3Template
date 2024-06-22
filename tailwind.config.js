/*
 * @Author: ycb
 * @Date: 2024-04-26 17:51:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-20 17:14:40
 * @Description: 
 */
/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff'
      }
    }
  }
}