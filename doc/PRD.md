# Product Requirements Document (PRD)

## 1. Project Overview
<<<<<<< HEAD
- **Project Name**: 나곡중 1학년 영어 교과서 표현 학습 미니앱 (Nakok English Express)
- **Target Audience**: 1st-grade students at Nakok Middle School & parents preparing for school exams.
=======
- **Project Name**: 나곡중 1학년 영어 교과서 표현 학습 미니앱 (Nagok English Express)
- **Target Audience**: 1st-grade students at Nagok Middle School & parents preparing for school exams.
>>>>>>> 4e5954f (feat: .gitignore 및 문서 파일 추가 및 업데이트)
- **Platform**: Apps in Toss (In-app WebView architecture).
- **Core Value**: Overcome user friction by offering a 100% serverless, zero-signup interactive flashcard experience that loads instantly inside Toss.

## 2. Design & Branding System
- **Core Theme**: Native Toss UI Experience.
- **Primary Brand Color**: Toss Blue (`#3182F6`) for interactive elements and primary buttons.
- **Typography Layout**: Main Text (`#191F28`), Secondary Labels (`#4E5968`), Light Canvas Background (`#F2F4F6`).
- **Layout Rule**: Deeply rounded corners (`rounded-2xl` / `rounded-3xl`) to align seamlessly with the Toss Design System (TDS).

## 3. Functionality & Business Monetization Matrix
- **Curriculum Processing**: Dynamic parsing of 1st-Term textbook data (Lessons 1 through 4).
- **Voice Synthesizer (🔊)**: Web Speech API integration triggering a clear American accent engine (`en-US`) at an accessible pace (`0.9 rate`).
- **Ad Reward Gate (🔒)**: Monetization boundary hard-coded at index count 3. 
- **SDK Handshake**: Hook into the native `window.toss.showRewardAd` system. If a student finishes the 30-second video block successfully (`onSuccess`), unlock the final 2 sentences of the current lesson.
