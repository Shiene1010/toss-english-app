# 광고 비즈니스 로직 규격

## 1. 광고 트리거 카운터 변수 (클라이언트 사이드 상태 관리)
- 유저가 문장을 넘길 때마다 `currentSentenceIndex` 값을 1씩 증가시킨다.
- `currentSentenceIndex === 3`이 되는 순간, 다음 문장 화면을 렌더링하지 않고 `showAdModal = true` 상태로 변경한다.

## 2. 앱스인토스 광고 SDK 연동 의사코드 (Pseudo-code)
- 앱스인토스 환경에서 제공하는 광고 호출 함수를 버튼에 바인딩한다.

```javascript
// 유저가 '광고 보고 잠금 해제' 버튼을 눌렀을 때 실행될 함수
function handleRewardAd() {
  // 토스 미니앱 SDK 광고 호출 (가상 API 예시)
  TossApp.Ads.showRewardVideo({
    adUnitId: "YOUR_TOSS_AD_UNIT_ID",
    onSuccess: function() {
      // 광고 시청 완료 시 실행
      showAdModal = false;         // 팝업 닫기
      currentSentenceIndex = 4;   // 4번째 문장으로 잠금 해제
      renderNextSentence();       // 화면 업데이트
    },
    onFailure: function(error) {
      alert("광고 시청에 실패했습니다. 다시 시도해 주세요.");
    }
  });
}
```

---
