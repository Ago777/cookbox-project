import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all network addresses so phones on the same Wi-Fi can open the dev site
    host: true,
  },
})
