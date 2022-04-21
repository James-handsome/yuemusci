import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import requirePlugin from 'vite-plugin-require';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),requirePlugin()]
})

