# 🎭 APPLICATION CORE INSTRUCTION: NAKOK ENGLISH EXPRESS

> **Purpose**: This file enforces the architectural integrity, branding parameters, and structural rules of this micro-app. Provide this directly to your AI copilot before modifying files.

## 👁️ 1. Core Development Philosophy
- **Serverless First**: Zero server databases. All persistent states (completed lesson arrays, card indexes) must reside in client-side `localStorage`.
- **Platform Integrity**: Features must never conflict with or bypass the monetization barrier.
- **Granite Package Native**: Code structures must remain strictly compatible with the `@apps-in-toss/web-framework` compiler stack.

## 🎨 2. Toss Design System (TDS) Constraints
- **Color Codes**: Accent/Interactive Color: Toss Blue (`#3182F6`), Alert/Ad Unlock: Crimson (`#FF4B4B`), Deep Typography: `#191F28`, Canvas Base: `#F2F4F6`.
- **Component Geometry**: Elements require smooth curves. Card wrappers enforce `rounded-3xl` and click actions use `rounded-xl`. Strict block configurations are prohibited.

## 🛠️ 3. Non-Negotiable Coding Conventions
1. **Zero Inline Handlers**: Writing `<button onclick="...">` inside your elements is completely forbidden. The Granite/Vite compiler pipeline will drop or randomize references during optimization.
2. **Explicit Data-Attribute Binding**: Pass unique values through semantic layouts (e.g., `data-lesson="lesson1"`), then capture and map listeners inside the decoupled `DOMContentLoaded` listener ecosystem via `addEventListener()`.
3. **Module Viewport Linking**: The entry channel inside `index.html` must state `<script src="app.js" type="module"></script>` to satisfy the ES Module bundle requirements.
4. **Ad Barrier Priority**: The `if (currentIdx === 3) { renderAdModal(); return; }` business guard must sit uncompromised directly ahead of the card layout rendering pipeline.
