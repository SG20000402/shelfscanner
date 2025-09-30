import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      http: false,
      https: false,
      util: false,
      zlib: false,
      stream: false,
      url: false,
      crypto: false,
      assert: false,
    },
  },
});