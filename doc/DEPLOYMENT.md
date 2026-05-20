# Deployment & Platform Launch Blueprint

## 1. Local Build & Distribution Bundle Generation
Compile the human-readable staging scripts into compressed, production-ready static assets:
```bash
npm run build
```
*This places an optimized production payload inside the local `dist/` directory.*

## 2. Cloud Server Sync (Vercel CLI 50+)
Deploy the asset bundle directly into an enterprise-grade cloud pipeline. To prevent path mismatch errors, execute the relative path routing sequence from your project root:
```bash
vercel ./dist --prod
```
*Target Account Project Alias: `nagok-english`*

## 3. Toss Portal Handshake Sequence
1. Access the **Apps in Toss Developer Center**.
2. Mount the live Vercel endpoint (`https://vercel.app`) straight into the **Service URL** and **Test URL** parameters.
3. Replace the placeholder `"TEST_REWARD_AD_UNIT_ID"` inside `app.js` with your live, validated Toss Monetization Unit string.

## 4. Platform Asset Compliance Matrix
Ensure these exact filenames and dimensions are prepared inside your workspace storage for portal upload:
- **`app_logo_600.png`**: 600 × 600 px (Clean application icon)
- **`app_thumbnail_1932.png`**: 1932 × 828 px (Store detail promotional top grid banner)
- **`screenshot_portrait_01_main.png`**: 636 × 1048 px (Lesson selection UI layout)
- **`screenshot_portrait_02_study.png`**: 636 × 1048 px (Audio card viewport canvas)
- **`screenshot_portrait_03_lock.png`**: 636 × 1048 px (Ad monetization gate interface)
- **`screenshot_landscape_01.png`**: 1504 × 741 px (Comprehensive 가로형 layout profile)
