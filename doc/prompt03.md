M1 Mac, VS Code 환경에서 'index.html'과 'app.js'를 기반으로 토스 미니앱 스타일의 영어 학습 앱을 고도화하고 싶어. 아래 요구사항에 맞게 코드를 수정해줘.

1. 데이터 추가 (app.js)
- 기존 lesson1, lesson2 외에 아래 lesson3, lesson4 데이터를 추가해줘.
* lesson3 표현들:
  - "What does your father do?"
  - "He looks young for his age."
  - "I usually get up at 7 a.m."
  - "Can you help me clean the living room?"
  - "I take a walk with my dog every evening."
* lesson4 표현들:
  - "How’s the weather today? - It’s sunny and warm."
  - "I feel full. I ate too much."
  - "Why don’t we go to the park?"
  - "Sounds great! / Sounds good!"
  - "What would you like to eat?"

2. UI/UX 및 기능 고도화 (index.html, app.js)
- 메인 화면에 Lesson 3, Lesson 4 버튼이 보이도록 확장해줘.
- 영어 카드를 클릭할 때 화면 전환 애니메이션(가볍게 스르륵 바뀌는 효과)을 Tailwind CSS로 넣어줘.
- 사용자가 영어 문장을 읽을 때 지루하지 않도록, 브라우저 자체 음성 합성 기능(Web Speech API)을 사용해 '스피커 아이콘 🔊' 버튼을 누르면 원어민 발음으로 영어 문장을 읽어주는 기능을 추가해줘.

3. 광고 로직 유지
- 현재 작동하고 있는 '3번째 문장 이후 보상형 광고 팝업 노출 및 해금 기능'은 그대로 유지하면서 전체 단원에 적용되도록 해줘.
