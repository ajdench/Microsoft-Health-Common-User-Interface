import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

const configuredBase = process.env.VITE_BASE_PATH ?? '/'
const base = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`

export default defineConfig({
  base,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'EHR shadcn Prototype',
        short_name: 'EHR shadcn',
        description: 'Clean shadcn-native EHR consultation prototype.',
        theme_color: '#17324d',
        background_color: '#f6f8fb',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [
          {
            src: `${base}favicon.svg`,
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: `${base}index.html`,
        globPatterns: ['**/*.{js,css,html,svg,png}'],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react') || id.includes('scheduler')) {
            return 'react-vendor'
          }
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
    setupFiles: ['./src/test/setup.ts'],
  },
})
