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
      <button data-lesson="lesson1" class="menu-btn w-full bg-white p-5 rounded-2xl shadow-sm text-left font-semibold border border-gray-50 hover:border-blue-500 transition-all">🎒 Lesson 1. New Start, New Friends</button>
      <button data-lesson="lesson2" class="menu-btn w-full bg-white p-5 rounded-2xl shadow-sm text-left font-semibold border border-gray-50 hover:border-blue-500 transition-all">🎨 Lesson 2. My Favorite Things</button>
      <button data-lesson="lesson3" class="menu-btn w-full bg-white p-5 rounded-2xl shadow-sm text-left font-semibold border border-gray-50 hover:border-blue-500 transition-all">🏠 Lesson 3. Family and Everyday Life</button>
      <button data-lesson="lesson4" class="menu-btn w-full bg-white p-5 rounded-2xl shadow-sm text-left font-semibold border border-gray-50 hover:border-blue-500 transition-all">🍔 Lesson 4. Small Things, Big Happiness</button>
    </div>
  `;

  // Vite 빌드 시 이벤트 소실을 막기 위한 리스너 바인딩
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLesson = e.currentTarget.getAttribute('data-lesson');
      startLesson(targetLesson);
    });
  });
}

// 4. 학습 시작
function startLesson(lessonKey) {
  currentLesson = lessonKey;
  currentIdx = 0;
  homeBtn.classList.remove('hidden');
  renderCard();
}

// 5. 카드 화면 렌더링 및 광고 조건 체크 (스피커 아이콘 및 소리 기능 추가 버전)
function renderCard() {
  const sentences = expressionData[currentLesson];
  
  // [광고 트리거] 3번째 문장을 보려고 할 때 광고 팝업
  if (currentIdx === 3) {
    renderAdModal();
    return;
  }

  // 단원 종료 체크
  if (currentIdx >= sentences.length) {
    contentArea.innerHTML = `
      <div class="text-center space-y-4">
        <h3 class="text-xl font-bold">🎉 단원 학습 완료!</h3>
        <button id="finishBtn" class="bg-[#3182F6] text-white px-6 py-3 rounded-xl font-semibold">다른 과 공부하기</button>
      </div>
    `;
    document.getElementById('finishBtn').addEventListener('click', renderMainMenu);
    return;
  }

  const currentSentence = sentences[currentIdx];

  // 일반 카드 화면 (텍스트 옆에 토스 스타일의 원어민 발음 스피커 🔊 단추 레이아웃 배치)
  contentArea.innerHTML = `
    <div class="w-full max-w-sm bg-white p-10 rounded-3xl shadow-md border border-gray-50 text-center flex flex-col justify-between min-h-[320px]">
      <div class="flex justify-between items-center w-full">
        <span class="text-xs text-blue-500 font-bold uppercase tracking-wider">${currentLesson.toUpperCase()} (${currentIdx + 1}/${sentences.length})</span>
        <!-- 🔊 원어민 스피커 아이콘 단추 추가 -->
        <button id="speakBtn" class="bg-gray-50 hover:bg-blue-50 p-2.5 rounded-full transition-colors" title="원어민 발음 듣기">
          <span class="text-lg">🔊</span>
        </button>
      </div>
      
      <p class="text-2xl font-bold text-[#191F28] my-auto leading-relaxed break-keep p-2">${currentSentence}</p>
      
      <button id="nextBtn" class="w-full bg-[#3182F6] text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">다음 문장 보기</button>
    </div>
  `;
  
  // 다음 버튼 및 스피커 버튼에 이벤트 실시간 바인딩
  document.getElementById('nextBtn').addEventListener('click', nextCard);
  document.getElementById('speakBtn').addEventListener('click', () => {
    speakEnglish(currentSentence);
  });
}

// 🔊 브라우저 내장 Web Speech API 기반 원어민 영어 발음 함수
function speakEnglish(text) {
  // [ 대괄호 ] 안의 이름이나 장소 표현 처리 (예: [Name] -> 이 앱에서는 영어 기본 문장으로 읽음)
  const cleanText = text.replace(/\[Name\]/g, 'John').replace(/\[Place\]/g, 'Seoul');
  
  if ('speechSynthesis' in window) {
    // 진행 중인 오디오가 있다면 멈춤
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US'; // 미국식 원어민 영어 발음 지정
    utterance.rate = 0.9;     // 중학교 1학년 수준에 맞춰 90% 속도로 살짝 느리게 조절
    
    window.speechSynthesis.speak(utterance);
  } else {
    alert("이 브라우저는 음성 합성 기능을 지원하지 않습니다.");
  }
}


function nextCard() {
  currentIdx++;
  renderCard();
}

// 6. 보상형 전면 광고 레이어
function renderAdModal() {
  contentArea.innerHTML = `
    <div class="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-red-100 text-center space-y-6">
      <div class="text-4xl">🔒</div>
      <h3 class="text-xl font-bold">다음 표현 2개가 잠겨있습니다</h3>
      <p class="text-sm text-gray-500">광고를 시청하시면<br>나곡중 교과서 표현이 즉시 해금됩니다.</p>
      <button id="adWatchBtn" class="w-full bg-[#FF4B4B] text-white py-4 rounded-xl font-semibold shadow-lg shadow-red-100">광고 보고 해금하기</button>
    </div>
  `;

  document.getElementById('adWatchBtn').addEventListener('click', playTossRewardAd);
}

// 7. 앱스인토스 광고 SDK 호출 및 연동 점검 로직
function playTossRewardAd() {
  if (window.toss && window.toss.showRewardAd) {
    window.toss.showRewardAd({
      adUnitId: "TEST_REWARD_AD_UNIT_ID", 
      onSuccess: function() {
        currentIdx = 3; 
        renderCard();
      },
      onFailure: function(error) {
        alert("광고 시청이 완료되지 않았습니다. 다시 시도해 주세요.");
        renderCard();
      }
    });
  } else {
    alert("[테스트 환경] 광고 시청 완료! 카드를 해금합니다.");
    currentIdx = 3; 
    renderCard();
  }
}

// Replace the very bottom event listener binding with this verified lifecycle hook:
document.addEventListener('DOMContentLoaded', () => {
  // Ensure the Home Button always points to the main menu root
  if (homeBtn) {
    homeBtn.addEventListener('click', renderMainMenu);
  }
  
  // Fire the initial layout paint cleanly after the window compiles
  renderMainMenu();
});