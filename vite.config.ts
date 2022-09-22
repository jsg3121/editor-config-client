import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from '@honkhonk/vite-plugin-svgr'

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [svgr(), react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
})
