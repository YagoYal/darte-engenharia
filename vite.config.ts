import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    sitemap({ hostname: 'https://darte.eng.br' }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
