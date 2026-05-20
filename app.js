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

// 6. 보상형 전면 광고 레이어 (수익 모델의 핵심)
function renderAdModal() {
  contentArea.innerHTML = `
    <div class="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-red-100 text-center space-y-6">
      <div class="text-4xl">🔒</div>
      <h3 class="text-xl font-bold">다음 표현 2개가 잠겨있습니다</h3>
      <p class="text-sm text-gray-500">광고를 시청하시면<br>나곡중 교과서 표현이 즉시 해금됩니다.</p>
      <!-- 실제 토스 광고 호출 함수로 변경 -->
      <button onclick="playTossRewardAd()" class="w-full bg-[#FF4B4B] text-white py-4 rounded-xl font-semibold shadow-lg shadow-red-100">광고 보고 해금하기</button>
    </div>
  `;
}

// 7. 실제 앱스인토스 광고 SDK 호출 및 연동 점검 로직
function playTossRewardAd() {
  // 토스 앱 내부 환경인지 감지
  if (window.toss && window.toss.showRewardAd) {
    // 토스 공식 광고 가이드라인 규격 호출
    window.toss.showRewardAd({
      // 심사 전 테스트 단계에서는 토스 공용 테스트 ID를 사용합니다
      adUnitId: "TEST_REWARD_AD_UNIT_ID", 
      onSuccess: function() {
        // 유저가 광고를 끝까지 보았을 때 실행되는 수익 정산 트리거
        currentIdx = 3; // 4번째 문장 구간으로 인덱스 이동
        renderCard();
      },
      onFailure: function(error) {
        alert("광고 시청이 완료되지 않았습니다. 다시 시도해 주세요.");
        renderCard(); // 에러 시 안전하게 현재 카드로 롤백
      }
    });
  } else {
    // 브라우저나 VS Code 라이브 서버에서 테스트할 때를 위한 디버깅용 코드
    console.log("[점검] 토스 외부 환경입니다. 가상 해금을 실행합니다.");
    currentIdx = 3; 
    renderCard();
  }
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

// 개인정보처리방침 버튼 이벤트 연결 (index.html에 policyBtn이 추가됨)
const policyBtn = document.getElementById('policyBtn');
if (policyBtn) {
  policyBtn.addEventListener('click', () => {
    renderPolicyModal();
  });
}

// 앱 시작 시 첫 실행
renderMainMenu();

// 개인정보처리방침 모달 렌더링 함수
function renderPolicyModal() {
  const modalRoot = document.getElementById('modalRoot') || contentArea;
  modalRoot.innerHTML = `
    <div id="policyModal" class="fixed inset-0 flex items-end md:items-center justify-center p-4 z-50">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative w-full max-w-lg bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-200">
        <h3 class="text-lg font-bold mb-3">개인정보처리방침</h3>
        <div class="text-sm text-gray-700 max-h-64 overflow-auto leading-relaxed">
          <p>서비스명: 나곡중 영어표현</p>
          <p>본 앱은 이용자 개인 식별 정보를 수집하지 않습니다. 자세한 내용은 프로젝트 루트의 PRIVACY_POLICY.md 파일을 확인하세요.</p>
        </div>
        <div class="mt-4 flex justify-end">
          <button onclick="closePolicyModal()" class="px-4 py-2 rounded-lg bg-gray-100">닫기</button>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById('policyModal');
  if (modal) requestAnimationFrame(() => modal.classList.remove('opacity-0'));
}

function closePolicyModal() {
  const modalRoot = document.getElementById('modalRoot') || contentArea;
  const modal = document.getElementById('policyModal');
  if (modal) modalRoot.innerHTML = '';
}
