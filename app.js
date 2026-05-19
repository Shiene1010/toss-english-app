// 1. 나곡중 1학년 1학기 교과서 표현 데이터
const expressionData = {
  lesson1: [
    "Hi, I’m [Name]. I’m a freshman here.",
    "Nice to meet you. / Glad to meet you.",
    "What are you interested in?",
    "I'm good at sports.",
    "Where are you from? - I’m from [Place]."
  ],
  lesson2: [
    "What do you do in your free time?",
    "I like taking pictures.",
    "What is your favorite subject?",
    "I enjoy playing soccer with my friends.",
    "That sounds like fun!"
  ]
};

// 2. 앱 상태 관리 변수
let currentLesson = null;
let currentIdx = 0;

const contentArea = document.getElementById('appContent');
const homeBtn = document.getElementById('homeBtn');

// 3. 메인 단원 선택 화면 렌더링
function renderMainMenu() {
  currentLesson = null;
  currentIdx = 0;
  homeBtn.classList.add('hidden');
  
  contentArea.innerHTML = `
    <div class="w-full max-w-sm space-y-4">
      <h2 class="text-2xl font-bold mb-6 text-center">공부할 단원을 선택하세요</h2>
      <button onclick="startLesson('lesson1')" class="w-full bg-white p-5 rounded-2xl shadow-sm text-left font-semibold border border-gray-50 hover:border-blue-500 transition-all">🎒 Lesson 1. New Start, New Friends</button>
      <button onclick="startLesson('lesson2')" class="w-full bg-white p-5 rounded-2xl shadow-sm text-left font-semibold border border-gray-50 hover:border-blue-500 transition-all">🎨 Lesson 2. My Favorite Things</button>
    </div>
  `;
}

// 4. 학습 시작
function startLesson(lessonKey) {
  currentLesson = lessonKey;
  currentIdx = 0;
  homeBtn.classList.remove('hidden');
  renderCard();
}

// 5. 카드 화면 렌더링 및 광고 조건 체크
function renderCard() {
  const sentences = expressionData[currentLesson];
  
  // [광고 트리거] 3번째 문장을 보려고 할 때 (인덱스 2번에서 다음 클릭 시) 광고 팝업
  if (currentIdx === 3) {
    renderAdModal();
    return;
  }

  // 단원 종료 체크
  if (currentIdx >= sentences.length) {
    contentArea.innerHTML = `
      <div class="text-center space-y-4">
        <h3 class="text-xl font-bold">🎉 단원 학습 완료!</h3>
        <button onclick="renderMainMenu()" class="bg-[#3182F6] text-white px-6 py-3 rounded-xl font-semibold">다른 과 공부하기</button>
      </div>
    `;
    return;
  }

  // 일반 카드 화면
  contentArea.innerHTML = `
    <div class="w-full max-w-sm bg-white p-10 rounded-3xl shadow-md border border-gray-50 text-center flex flex-col justify-between min-h-[300px]">
      <span class="text-xs text-blue-500 font-bold uppercase tracking-wider">${currentLesson} (${currentIdx + 1}/${sentences.length})</span>
      <p class="text-2xl font-bold text-[#191F28] my-auto leading-relaxed break-keep">${sentences[currentIdx]}</p>
      <button onclick="nextCard()" class="w-full bg-[#3182F6] text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">다음 문장 보기</button>
    </div>
  `;
}

function nextCard() {
  currentIdx++;
  renderCard();
}

// 6. 보상형 전면 광고 레이어 (수익 모델의 핵심)
function renderAdModal() {
  contentArea.innerHTML = `
    <div class="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-red-100 text-center space-y-6">
      <div class="text-4xl">🔒</div>
      <h3 class="text-xl font-bold">다음 표현 2개가 잠겨있습니다</h3>
      <p class="text-sm text-gray-500">30초 광고를 시청하시면<br>나머지 나곡중 교과서 표현이 즉시 해금됩니다.</p>
      <button onclick="simulateAdWatch()" class="w-full bg-[#FF4B4B] text-white py-4 rounded-xl font-semibold shadow-lg shadow-red-100">광고 보고 해금하기</button>
    </div>
  `;
}

// 7. 가상 광고 시청 완료 로직
function simulateAdWatch() {
  alert("🎁 보상형 광고 시청이 완료되었습니다! (토스 SDK 연동 구간)");
  currentIdx = 3; // 잠금 해제 후 4번째 문장으로 이동
  renderCard();
}

// 홈 버튼 이벤트
homeBtn.addEventListener('click', renderMainMenu);

// 앱 시작 시 첫 실행
renderMainMenu();
