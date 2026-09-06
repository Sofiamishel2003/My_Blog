import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //server: {
  //  port: 4000 // dev del frontend en 4000 (el API local va en 3000)
  //}
})
