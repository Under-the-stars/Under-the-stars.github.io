import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the built site work on GitHub Pages whether it lives at
// username.github.io or username.github.io/repo-name.
export default defineConfig({
  plugins: [react()],
  base: './',
})
