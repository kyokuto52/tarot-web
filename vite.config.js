import { defineConfig } from 'vite';

// GitHub Pages 项目页请改为 '/你的仓库名/'
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
});
