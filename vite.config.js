// vite.config.js
import { defineConfig } from 'vite'

// used to test via ngrok for mobile browsers
export default defineConfig({
  server: {
    allowedHosts: [".ngrok-free.app"]
  }
})