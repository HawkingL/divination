import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 vue
      imports: ['vue'],
      // 生成自动导入的类型文件
      dts: 'src/types/auto-imports.d.ts',
      // 禁用eslint
      eslintrc: {
        enabled: false,
      },
    })
  ],
})