# Compilation & Release Blueprint

## 1. The Compilation Phase (NPM Script execution)
Rather than spitting out standard unencrypted web components, the compilation pipeline runs through a native compilation engine that functions exactly like iOS's Xcode or Android's Gradle [💬].
```bash
npm run build
```
- **Execution Mechanism**: Vite bundles static source items into `/dist` via relative anchor targets (`base: './'`), then the **Toss Granite Compiler** encapsulates the asset block into a unified target binary bundle: `nagok-m01-english.ait`.

## 2. Platform Portal Version Registration
1. Access the **Apps in Toss Developer Center Dashboard** under the specific profile **`nagok-m01-english`**.
2. Navigate to **버전 관리 (Version Management)** ➡️ **버전 등록 (Register Version)**.
3. Drag-and-drop the cryptographically compiled **`nagok-m01-english.ait`** artifact from your workspace root directly into the portal submission box.
4. Input release notes and commit the revision to the review pipeline queue.

## 3. Design Asset Verification Dimensions
Ensure the following branding assets match precise portal validation boundaries prior to submission:
- **`app_logo_600.png`**: 600 × 600 px (Application Icon)
- **`app_thumbnail_1932.png`**: 1932 × 828 px (Store detail top promotional hero banner)
- **`screenshot_portrait_01_main.png`**: 636 × 1048 px (Curriculum main menu interface)
- **`screenshot_portrait_02_study.png`**: 636 × 1048 px (Interactive card speaker module view)
- **`screenshot_portrait_03_lock.png`**: 636 × 1048 px (The 🔒 Ad Reward Wall intercept state)
- **`screenshot_landscape_01.png`**: 1504 × 741 px (Comprehensive 가로형 preview layout)
