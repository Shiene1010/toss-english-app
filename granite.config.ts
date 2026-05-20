import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  // 1. 토스 개발자 센터 콘솔에 등록한 영문 식별자와 완벽 일치
  appName: 'nagok-m01-english', 
  
  // 2. 토스 인앱 시스템 브랜딩 하드 고정
  brand: {
    displayName: '나곡중 영어단어장', // 토스 앱 상단 내비바에 뜰 한글 타이틀
    primaryColor: '#3182F6',         // 토스 블루 공식 HEX 컬러
    icon: ''                         // 빌드 에러를 방지하기 위해 빈 문자열 유지
  },
  
  // 3. [타입스크립트 에러 해결] 필수 'web' 설정 오브젝트 주입
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'vite',
      build: 'vite build',
    },
  },
  
  // 4. Vite 아웃풋 빌드 대상 폴더 지정
  outdir: 'dist',
  
  // 5. 요구 권한 매트릭스 (단어장 앱이므로 빈 배열 유지)
  permissions: [],
});
