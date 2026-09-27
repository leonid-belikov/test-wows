import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), svgr()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    proxy: {
      '/api-vortex': {
        target: 'https://vortex.worldofwarships.eu',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api-vortex/, ''),
      },
    },
  },
})
