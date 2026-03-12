import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "React"   // এখানে অবশ্যই আপনার রিপোজিটরির নাম দিন
})
