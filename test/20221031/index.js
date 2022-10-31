/* 
  1. 범위 입력 요소 찾기
  2. 정답 추측 입력 요소 찾기
  3. 플레이 버튼 요소 찾기
  4. 선택한 내용 보여줄 span 요소 찾기
  5. 게임 결과 보여줄 span 요소 찾기
  6. 플레이 버튼 이벤트 리스너 만들기
  7. 플레이 함수 만들기
    7-1. 범위 입력값 추출하기
    7-2. 0 부터 범위 입력값 까지의 숫자 중 하나 랜덤으로 고르기
    7-3. 정답 추측 입력값 추출하기
    7-4. choseSpan 에 선택 내용 보여주기
    7-5. resultSpan 에 결과 보여주기
    7-6. 감춰둔 영역 보이기
 */

// 1. 범위 입력 요소 찾기
const rangeInput = document.querySelector("#rangeInput");

// 2. 정답 추측 입력 요소 찾기
const guessInput = document.querySelector("#guessInput");

// 3. 플레이 버튼 요소 찾기
const playButton = document.querySelector("#playButton");

// 4. 선택한 내용 보여줄 span 요소 찾기
const choseSpan = document.querySelector("#choseSpan");

// 5. 게임 결과 보여줄 span 요소 찾기
const resultSpan = document.querySelector("#resultSpan");

const resultDiv = document.querySelector("#resultDiv");

// 7. 플레이 함수 만들기
function play() {
  // 7-1. 범위 입력값 추출하기
  if (!rangeInput.value) {
    alert("범위 입력값을 입력해 주세요");
    return;
  }
  const rangeNumber = parseInt(rangeInput.value);

  // 조건 2: 범위에는 음수가 포함될 수 없습니다
  if (rangeNumber <= 0) {
    alert("범위 입력값은 0보다 커야 합니다");
    return;
  }

  // 7-2. 0 부터 범위 입력값 까지의 숫자 중 하나 랜덤으로 고르기
  const answerNumber = Math.round(Math.random() * rangeNumber);

  // 7-3. 정답 추측 입력값 추출하기
  if (!guessInput.value) {
    alert("정답 추측 입력값을 입력해 주세요");
    return;
  }
  const guessNumber = parseInt(guessInput.value);
  // 추측값이 범위보다 큰 경우 에러
  if (guessNumber > rangeNumber || guessNumber < 0) {
    alert("정답 추측 입력값을 범위값 안에서 선택하여 입력해 주세요");
    return;
  }

  // 7-4. choseSpan 에 선택 내용 보여주기
  choseSpan.innerText = `You chose: ${guessNumber}, the machine chose: ${answerNumber}`;

  // 7-5. resultSpan 에 결과 보여주기
  const result = answerNumber === guessNumber;
  resultSpan.innerText = `You ${result ? "Won" : "lost"}!`;

  // 7-6. 감춰둔 영역 보이기
  resultDiv.classList.remove("noneDisplay");
}

// 6. 플레이 버튼 이벤트 리스너 만들기
playButton.addEventListener("click", play);
