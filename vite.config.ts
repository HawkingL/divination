import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 vue
      imports: ['vue'],
      // 生成自动导入的类型文件
      dts: 'src/auto-imports.d.ts',
      // 禁用eslint
      eslintrc: {
        enabled: false,
      },
    }),
    Components({
      // 自动导入 src/components 下的组件
      // 比如你写了 HelloWorld.vue，在其他地方直接用 <HelloWorld /> 即可，无需 import
      dts: 'src/components.d.ts',
    }),
  ],
})