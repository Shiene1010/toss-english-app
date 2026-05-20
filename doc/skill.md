# 🛠️ TECHNICAL OPERATIONAL SKILL MATRIX

> **Purpose**: The absolute engineering command-sheet for compiling, hosting, and debugging the Apps in Toss infrastructure on Apple Silicon hardware.

## 🔍 1. Terminal Environment Health Check
```bash
# Verify localized javascript runtime version
node -v

# Audit dependency manager version
npm -v
```

## 🏗️ 2. The Artifact Compiler Pipeline (AIT Production Build)
*Technical Realization*: This process behaves exactly like **Android's Gradle compilation (.apk)** or **iOS's Xcode Release bundling (.ipa)**. It compiles human-readable code, maps configuration properties from `granite.config.ts`, and locks them into a secure, cryptographic `.ait` binary artifact ready for platform deployment.

```bash
# 1. Travel to workspace root
cd ~/Developer/workspaces/toss-english-app

# 2. Fire the engine to compile and build the .ait platform bundle
npm run build
```
- **Output Target**: `nagok-m01-english.ait`
- **Deployment Action**: Drag-and-drop the generated file straight into the Toss Developer Console version manager card.

## 🌐 3. Legacy Web Fallback Routing (Vercel Host Check)
If testing a static version over the web or maintaining fallback mirrors without full .ait framework encapsulation:
```bash
# Clear old distributions, recompile raw dist, and push live bypassing server caches
rm -rf dist && npm run build
vercel ./dist --prod --force
```

## 🐙 4. Repository Synchronization
```bash
git add .
git commit -m "build: locked down native granite artifact compiler matrix"
git push origin main
```

## 🚨 5. Emergency Recovery Playbook (Troubleshooting)
If the console prints a `플러그인 옵션이 올바르지 않습니다` message or compilation aborts with a parameter mismatch:
1. Ensure the `appName` string in `granite.config.ts` matches your registered console handle (`nagok-m01-english`) to the exact character.
2. Verify the required `web` descriptor object contains the `host`, `port`, and `commands` objects.
3. If deep configuration caches get stuck, execute a hard workspace reset:
```bash
rm -rf node_modules package-lock.json dist .vercel .vercel-build-cache nagok-m01-english.ait
npm install
npm run build
```
