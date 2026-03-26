import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // 🔥 ADD THIS BLOCK
  server: {
    host: '0.0.0.0',   // allows access from mobile
    port: 5173,
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})