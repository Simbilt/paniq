import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev: '/'. Production: CI passes `vite build --base /<repo>/` (see deploy workflow).
// Local production test: npm run build -- --base /YOUR_REPO_NAME/
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
