import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/PASS/',
  plugins: [
    react(),
    visualizer({
      filename: 'bundleStats.html',
      open: true
    })
  ]
});
