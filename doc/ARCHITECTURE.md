# System Configuration Blueprint

## 1. Local Stack Profile (M1 Mac Mini)
- **Runtime**: Node.js `v22.22.1` / NPM `11.12.1`
- **IDE**: Visual Studio Code (Native Apple Silicon Architecture Build)
- **Core Compiler**: Vite `v8.x.x` managed via the `@apps-in-toss/web-framework` wrapper framework.

## 2. The Artifact Package Controller (`granite.config.ts`)
To pass platform-level validation, your project descriptor config must explicitly declare the target portal registration parameters (`nagok-m01-english`) alongside a verified `web` execution mapping signature:

```typescript
import { defineConfig } from '@apps-in-toss/web-framework/config';
export default defineConfig({
  appName: 'nagok-m01-english',
  brand: { displayName: '나곡중 영어단어장', primaryColor: '#3182F6', icon: '' },
  web: { host: 'localhost', port: 5173, commands: { dev: 'vite', build: 'vite build' } },
  outdir: 'dist',
  permissions: [],
});
```

## 3. Decoupled Click Capture Event Architecture
Inline script invocation handlers (e.g., `<button onclick="...">`) are completely forbidden inside the DOM schema. The Vite bundle engine strips absolute method assignments during dead-code elimination (Tree-shaking). All viewport behaviors must be bound safely inside the client-side lifecycle hook:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', eventCallback);
  });
});
```
