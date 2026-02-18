import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5175,
  },
  build: {
    // Code splitting otimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa vendor chunks
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Minificação
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log em produção
        drop_debugger: true,
      },
    },
    // Otimizações de assets
    assetsInlineLimit: 4096, // Inline assets < 4KB
    cssCodeSplit: true,
    // Source maps apenas em dev
    sourcemap: false,
  },
  // Otimizações de desenvolvimento
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
