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
  ],
  lesson3: [
    "What does your father do?",
    "He looks young for his age.",
    "I usually get up at 7 a.m.",
    "Can you help me clean the living room?",
    "I take a walk with my dog every evening."
  ],
  lesson4: [
    "How’s the weather today? - It’s sunny and warm.",
    "I feel full. I ate too much.",
    "Why don’t we go to the park?",
    "Sounds great! / Sounds good!",
    "What would you like to eat?"
  ]
};

// 2. 앱 상태 관리 변수
let currentLesson = null;
let currentIdx = 0;
// 단원별로 광고 해금 상태를 관리 (해금 시 해당 단원에서는 더 이상 광고 팝업을 안 띄움)
const adUnlocked = {};

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
      <button onclick="startLesson('lesson3')" class="w-full bg-white p-5 rounded-2xl shadow-sm text-left font-semibold border border-gray-50 hover:border-blue-500 transition-all">📘 Lesson 3. Daily Life</button>
      <button onclick="startLesson('lesson4')" class="w-full bg-white p-5 rounded-2xl shadow-sm text-left font-semibold border border-gray-50 hover:border-blue-500 transition-all">🌤️ Lesson 4. Let's Talk</button>
    </div>
  `;
}

// 4. 학습 시작
function startLesson(lessonKey) {
  currentLesson = lessonKey;
  currentIdx = 0;
  // 초기화되지 않은 단원은 false로 설정
  if (adUnlocked[currentLesson] === undefined) adUnlocked[currentLesson] = false;
  homeBtn.classList.remove('hidden');
  renderCard();
}

// 5. 카드 화면 렌더링 및 광고 조건 체크
function renderCard() {
  const sentences = expressionData[currentLesson];
  if (!sentences) return;

  // [광고 트리거] 각 단원에서 3번째 문장(인덱스 3)을 보려 할 때 광고 팝업
  if (!adUnlocked[currentLesson] && currentIdx === 3) {
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
    // 애니메이션 (완료창에도 살짝 fade-in)
    const doneCard = document.querySelector('#appContent > div');
    if (doneCard) {
      doneCard.classList.add('opacity-0', 'translate-y-2');
      requestAnimationFrame(() => doneCard.classList.remove('opacity-0', 'translate-y-2'));
    }
    return;
  }

  // 일반 카드 화면 (애니메이션을 위한 초기 opacity-0, translate-y-2 포함)
  contentArea.innerHTML = `
    <div id="cardContainer" class="w-full max-w-sm bg-white p-10 rounded-3xl shadow-md border border-gray-50 text-center flex flex-col justify-between min-h-[300px] opacity-0 translate-y-2 transform transition-all duration-300">
      <div class="flex justify-between items-start">
        <span class="text-xs text-blue-500 font-bold uppercase tracking-wider">${currentLesson} (${currentIdx + 1}/${sentences.length})</span>
        <button onclick="speakCurrentSentence()" aria-label="읽기" class="text-sm text-gray-500">🔊</button>
      </div>
      <p id="sentenceText" class="text-2xl font-bold text-[#191F28] my-auto leading-relaxed break-keep">${sentences[currentIdx]}</p>
      <div class="mt-6 flex gap-3">
        <button onclick="nextCard()" class="flex-1 bg-[#3182F6] text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">다음 문장 보기</button>
      </div>
    </div>
  `;

  // 애니메이션 시작: DOM이 삽입된 다음 프레임에서 클래스 제거
  const card = document.getElementById('cardContainer');
  if (card) {
    requestAnimationFrame(() => {
      card.classList.remove('opacity-0', 'translate-y-2');
    });
  }
}

function nextCard() {
  currentIdx++;
  renderCard();
}

// 6. 보상형 전면 광고 레이어 (수익 모델 유지)
function renderAdModal() {
  contentArea.innerHTML = `
    <div id="adModal" class="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-red-100 text-center space-y-6 opacity-0 translate-y-2 transform transition-all duration-300">
      <div class="text-4xl">🔒</div>
      <h3 class="text-xl font-bold">다음 표현 2개가 잠겨있습니다</h3>
      <p class="text-sm text-gray-500">30초 광고를 시청하시면<br>나머지 나곡중 교과서 표현이 즉시 해금됩니다.</p>
      <button onclick="simulateAdWatch()" class="w-full bg-[#FF4B4B] text-white py-4 rounded-xl font-semibold shadow-lg shadow-red-100">광고 보고 해금하기</button>
      <button onclick="renderMainMenu()" class="w-full bg-white border border-gray-200 py-3 rounded-xl">취소</button>
    </div>
  `;

  const modal = document.getElementById('adModal');
  if (modal) requestAnimationFrame(() => modal.classList.remove('opacity-0', 'translate-y-2'));
}

// 7. 가상 광고 시청 완료 로직 (단원별 해금 적용)
function simulateAdWatch() {
  // 실제 환경에서는 토스 SDK 또는 광고 SDK 연동 구간
  alert("🎁 보상형 광고 시청이 완료되었습니다! (토스 SDK 연동 구간)");
  // 현재 단원 해금 처리
  adUnlocked[currentLesson] = true;
  // 잠금 해제 후 4번째 문장으로 이동
  currentIdx = 3;
  renderCard();
}

// 8. Web Speech API를 이용한 문장 낭독 기능
function speakCurrentSentence() {
  const sentences = expressionData[currentLesson];
  if (!sentences) return;
  const text = sentences[currentIdx];
  if (!window.speechSynthesis) {
    alert('죄송합니다. 사용자의 브라우저는 음성 합성을 지원하지 않습니다.');
    return;
  }

  // 기존 재생 중이면 중지
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';

  // 가능한 경우 영어 계열의 목소리를 우선 지정
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length) {
    const enVoice = voices.find(v => /en(-|_)?/i.test(v.lang)) || voices.find(v => v.lang.startsWith('en')) || voices[0];
    if (enVoice) utter.voice = enVoice;
  }

  window.speechSynthesis.speak(utter);
}

// 홈 버튼 이벤트
homeBtn.addEventListener('click', renderMainMenu);

// 앱 시작 시 첫 실행
renderMainMenu();
