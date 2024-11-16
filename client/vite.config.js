import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: './',
  build: {
    outDir: resolve(__dirname, 'dist'),
    cssCodeSplit: true,
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
  server: {
    port: 3008 
  }
});