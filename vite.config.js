import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/chrono-bloom/',
  resolve: {
    // React 중복 인식으로 인한 뻗음 현상을 강제로 하나로 합쳐서 해결합니다.
    dedupe: ['react', 'react-dom']
  }
})