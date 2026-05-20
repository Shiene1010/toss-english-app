import { defineConfig } from 'vite';

export default defineConfig({
  // 배포 시 모든 자원(js, css)을 상대 경로로 링크하여 빌드 오류 방지
  base: './',
  build: {
    outDir: 'dist',
  }
});
