# 🎭 APPLICATION CORE INSTRUCTION: NAKOK ENGLISH EXPRESS

> **Purpose**: This document contains the absolute truths, design systems, and programming guardrails for this project. Provide this file to any LLM (Cursor, Claude) prior to modifying code to eliminate path breaking and logic deletion.

## 👁️ 1. Core Development Philosophy
- **Serverless/Zero-Signup First**: The application must remain 100% database-free on the backend. All user states (card index) stay local to the client browser memory (`localStorage`).
- **Revenue-Driven UI**: Feature development must never bypass or compromise the monetization gate. If a feature breaks the ad trigger, it is a fatal bug.
- **Micro-App Optimization**: Total uncompressed code footprint must stay under 50KB to maintain instant-on loading (<50ms) inside the Toss webview.

## 🎨 2. Toss Design System (TDS) UI Blueprint
Every dynamically generated element or layout block injected via `app.js` must respect the following styling guidelines:
- **Brand Colors**: 
  - Accent/Buttons: Toss Blue (`#3182F6`)
  - Warning/Gate Unlock: Crimson Red (`#FF4B4B`)
  - Typography Primary: Heavy Black (`#191F28`)
  - Typography Labels: Slate Grey (`#4E5968`)
  - Viewport Background: Soft Light Grey (`#F2F4F6`)
- **Shapes**: High-density curves. Containers use `rounded-3xl`, buttons use `rounded-xl` or `rounded-full`. Tight grids are forbidden.

## 🛠️ 3. Absolute Non-Negotiable Coding Rules
1. **Forbidden Syntax**: Inline HTML event triggers (e.g., `<button onclick="...">`) are completely FORBIDDEN. Vite tree-shaking will purge them during `npm run build`.
2. **Correct Syntax**: Inject standard semantic data attributes (e.g., `data-lesson="lesson1"`) and attach clean, decoupled listeners using `document.getElementById().addEventListener()` inside the `DOMContentLoaded` block.
3. **Module Scope**: The HTML entry script must remain `<script src="app.js" type="module"></script>`. Any omission will cause the Vite bundle matrix to fail.
4. **Ad Trigger Integrity**: The condition `if (currentIdx === 3) { renderAdModal(); return; }` is the primary business anchor. It must stay placed directly before the flashcard layout paint sequence.
