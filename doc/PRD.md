# Product Requirements Document (PRD)

## 1. Project Overview
- **Project Name**: 나곡중 1학년 영어 교과서 표현 학습 미니앱 (Nakok English Express)
- **Toss System ID**: `nagok-m01-english`
- **Target Audience**: 1st-grade students at Nakok Middle School & parents preparing for local school exams.
- **Platform**: Apps in Toss (Native App Bundle Deployment via `.ait` execution layer).

## 2. Design & Branding System (TDS Adaptation)
- **Primary Brand Color**: Toss Blue (`#3182F6`) for interactive elements, focus selectors, and master navigation anchors.
- **Typography Matrix**: Primary Headlines (`#191F28`), Descriptive Labels (`#4E5968`), Viewport Canvas (`#F2F4F6`), Container Fill (`#FFFFFF`).
- **Component Geometry**: Elements require smooth curves. Card blocks apply `rounded-3xl` and click targets map to `rounded-xl`. Strict grid block patterns are forbidden.

## 3. Core Functionality & Revenue Mechanics
- **Curriculum Scope**: Processing of 1st-Term textbook data (Lessons 1 through 4) without a remote database server dependency.
- **Voice Synthesizer (🔊)**: Local Web Speech API injection triggering an American accent engine (`en-US`) calibrated to a student-friendly pace (`0.9 rate`).
- **Ad Reward Gate (🔒)**: Monetization boundary hard-coded at index counter state 3.
- **Platform Handshake**: Native execution loop hooked into `window.toss.showRewardAd`. If a user clears the 30-second video verification block successfully (`onSuccess`), unlock the remaining content payload.
