import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base works for username.github.io/<repo>/ without hard-coding the repo name.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor'
          }
        },
      },
    },
  },
})
