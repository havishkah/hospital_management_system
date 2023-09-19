import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({fastRefresh: false})],
  server:{port:3006,host:"0.0.0.0"}
})
