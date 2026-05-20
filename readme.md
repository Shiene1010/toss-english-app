# 🎒 나곡중 1학년 1학기 영어 교과서 표현 학습 미니앱

> **Apps in Toss(앱스인토스) 플랫폼 전용 미니앱**  
> 비전공 1인 개발자가 최소한의 공수로 최대의 광고 수익을 내기 위해 설계된 하이브리드 광고형 웹앱입니다.

## 🚀 프로젝트 개요
- **플랫폼**: 앱스인토스 (Apps in Toss) 인앱 웹뷰
- **타겟**: 용인 나곡중학교 1학년 학생 및 내신 대비 학부모
- **핵심 가치**: 복잡한 기능(회원가입, 서버)을 과감히 제거하고, 토스 스타일(TDS)의 UI와 Web Speech API를 활용한 원어민 발음(🔊) 중심의 라이트한 카드 학습 경험 제공.
- **비즈니스 모델**: 보상형 전면 광고 및 띠 배너 광고를 연동한 인앱 광고 수익 극대화.

---

## 🛠️ 개발 환경 및 사용 자원
- **Device**: M1 Mac Mini (Apple Silicon 최적화)
- **Editor**: Visual Studio Code (Extensions: Live Server, Prettier, Tailwind CSS IntelliSense)
- **Runtime**: Node.js v22.22.1 / NPM 11.12.1
- **Frontend Framework**: HTML5, Vanilla JavaScript, Tailwind CSS (CDN v3 라이브러리)
- **Deployment**: Vercel CLI (`vercel --prod`)

---

## 📂 폴더 구조 (Project Architecture)
```text
toss-english-app/
├── assets/
│   └── images/
│       ├── app_logo_600.png              # 토스 등록용 앱 로고 (600x600)
│       ├── app_thumbnail_1932.png        # 스토어 상세 배너 (1932x828)
│       ├── screenshot_portrait_01.png   # 메인 화면 스크린샷 (636x1048)
│       ├── screenshot_portrait_02.png   # 학습 화면 스크린샷 (636x1048)
│       └── screenshot_landscape_01.png  # 가로형 스크린샷 (1504x741)
├── index.html                            # 메인 UI 뼈대 및 토스 스타일 레이아웃
├── app.js                                # 교과서 데이터베이스 및 광고 트리거 로직
└── README.md                             # 프로젝트 개발 지침서 (현재 파일)
```

---

## 💰 수익 모델 및 광고 트리거 설계 (Monetization)

본 프로젝트는 유저의 자연스러운 학습 몰입과 콘텐츠 해금 욕구를 결합하여 **광고 완료율(Completion Rate)과 eCPM을 극대화**합니다.

1. **하단 고정 띠 배너 (Anchor Banner)**: 앱 로딩 및 카드 학습 화면 하단에 상시 노출되어 체류 시간 비례 안정적인 기본 매출 확보.
2. **보상형 전면 광고 (Reward Video Ad) [핵심]**: 
   - 각 단원별로 3번째 영어 문장 카드를 넘기는 시점에 화면 전체를 잠금(`showAdModal = true`).
   - "광고 시청 후 남은 교과서 표현 해금" 버튼 유도.
   - 토스 광고 SDK(`window.toss.showRewardAd`)와 연동하여 30초 시청 완료 성공 시(`onSuccess`) 다음 카드 인덱스로 안전하게 진입 및 정산.

---

## 💻 로컬 실행 및 배포 방법 (How to Run)

### 1. 로컬 테스트 (Local Development)
1. VS Code에서 `toss-english-app` 폴더를 오픈합니다.
2. `index.html` 파일을 열고 우하단의 **[Go Live]** 버튼을 클릭합니다.
3. 브라우저 주소창이 무한 로딩에 걸릴 경우, 보안 정책에 따라 `127.0.0.1` 대신 `http://localhost:5500`으로 주소를 수동 전환하여 확인합니다.

### 2. 인터넷 실시간 배포 (Production Deployment)
M1 맥 터미널에서 Vercel을 이용해 주소가 있는 실시간 서버 주소로 1초 만에 배포합니다.
```bash
# 최초 배포 시
vercel

# 코드 수정 후 실시간 상용 배포 업데이트 시
vercel --prod
```

---

## 🔒 개인정보처리방침 (Privacy Policy)
- 본 미니앱은 별도의 회원가입 절차가 없으며, 사용자의 이름, 이메일, 기기 정보 등 어떠한 개인정보도 서버에 수집하거나 저장하지 않는 100% Serverless 정적 앱입니다.
- 단원별 학습 상태 정보는 브라우저 내부의 `Local Storage`에만 저장되어 안전합니다.