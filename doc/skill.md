# 🛠️ TECHNICAL OPERATIONAL SKILL MATRIX

> **Purpose**: This file acts as your terminal cheat-sheet. It catalogs the precise commands required to verify your environment, execute clean compilations, resolve runtime path bugs, and push updates to the cloud.

## 🔍 1. Environmental Health Check (자연상태 확인)
Run these commands to confirm that your node environment and global package managers are responsive on your Apple Silicon hardware:
```bash
# Verify JavaScript engine & workspace node version
node -v

# Check package integrity manager
npm -v

# Audit system global homebrew manager
brew -v
```

## 🏗️ 2. The Golden Optimization Loop (로컬 빌드)
Whenever you modify `app.js` or `index.html` in VS Code, execute this cycle to pack your human-readable scripts into compressed binaries:
```bash
# Move to workspace root
cd ~/Developer/workspaces/toss-english-app

# Delete the old distribution folder to prevent stale cache contamination
rm -rf dist

# Trigger Vite compiler to output optimized code bundle
npm run build
```

## 🌐 3. Cloud Synchronization Playbook (Vercel 배포)
To push your compiled `dist/` workspace assets live to production without encountering path-mismatch errors or Vercel CLI 50+ directory parsing warnings, execute the path routing sequence directly from your project root folder:
```bash
# Force Vercel to overwrite global server network cache with the compiled folder
vercel ./dist --prod --force
```
*Live Application Target Handle: `nagok-english-final`*

## 🐙 4. Code Archive & Portfolio Versioning (Git & GitHub)
Sync your workspace cleanly to your remote GitHub account without uploading localized garbage binaries:
```bash
# Check current staging updates
git status

# Stage all tracking parameters (.gitignore automatically screens out dist/ and .vercel/)
git add .

# Record baseline snapshot
git commit -m "feat: updated core module sequence"

# Push straight up to the cloud repository branch
git push origin main
```

## 🚨 5. Emergency Recovery Protocol (버튼/화면 먹통 시 긴급 조치)
If your deployed URL shows a blank canvas or if the application choice buttons become unresponsive, run this script checklist instantly:
1. Open the live URL on your desktop. Press `Cmd + Option + I` and inspect the **Console** tab.
2. If you see an asset 404 pathing error, open `vite.config.js` and verify it contains `base: './'`.
3. If files are sound but buttons are dead, force a clean cache invalidate via your Mac terminal:
```bash
cd ~/Developer/workspaces/toss-english-app
rm -rf node_modules package-lock.json dist .vercel
npm install
npm run build
vercel ./dist --prod --force
```
