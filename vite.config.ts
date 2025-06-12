import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '_vite/main.js',
        assetFileNames: '_vite/style.css',
        chunkFileNames: `assets/[name].[ext]`,
      }
    }
  }
})