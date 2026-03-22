import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match the GitHub repo name for Pages: https://<user>.github.io/<repo>/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/paniq/' : '/',
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
}))
