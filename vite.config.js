import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'watch-babel-components',
      handleHotUpdate({ file, server }) {
        if (file.includes('/components/') || file.includes('\\components\\') ||
            file.includes('/styles/')     || file.includes('\\styles\\')) {
          server.ws.send({ type: 'full-reload' })
          return []
        }
      },
    },
  ],
})
