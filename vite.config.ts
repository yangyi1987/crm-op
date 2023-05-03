import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const srcUrl = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@/": srcUrl
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: '',
    cssCodeSplit: true,
    minify: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        compact: true,
        assetFileNames: '[ext]/[name][hash].[ext]',
        chunkFileNames: 'js/[name][hash].js',
        entryFileNames: 'js/[name][hash].js'
      }
    }
  }
})
