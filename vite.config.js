import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Place all files in the root of the dist folder
        entryFileNames: '[name].js', // JavaScript files
        chunkFileNames: '[name].js', // Chunk files
        assetFileNames: '[name].[ext]', // Assets (CSS, images, fonts, etc.)
      },
    },
  },
});