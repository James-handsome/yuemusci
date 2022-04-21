import path from 'path';
import { defineConfig } from '@ewas/cli';
export default defineConfig({
  esbuildOptions: {
    entryPoints: [path.join(__dirname, 'src/main.js')],
    loader: {
      '.js': 'jsx'
    },
  },
  html: {
    scriptLoading: 'module',
    template: './public/index.html'
  }
});
