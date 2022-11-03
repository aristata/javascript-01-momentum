// html 요소들을 선택한다
const ddaysDiv = document.querySelector("#ddays");

// 크리스마스
const christmas = new Date("2022-12-25T00:00:00");

// 최소 두자리수가 표현되도록 만들어 주는 함수
function makeTwoDigit(input) {
  return String(input).padStart(2, "0");
}

// 카운트 다운 함수
function countDown() {
  // 오늘
  const now = new Date();

  // 크리스마스와 오늘 사이의 간격
  const gap = christmas.getTime() - now.getTime();

  // 1일 = 1000(밀리세컨드) * 60(초) * 60(분) * 24(시간)
  const remainDays = makeTwoDigit(Math.floor(gap / (1000 * 60 * 60 * 24)));

  // 1시간 = 1000(밀리세컨드) * 60(초) * 60(분)
  const remainHours = makeTwoDigit(Math.floor((gap / (1000 * 60 * 60)) % 24));

  // 1분 = 1000(밀리세컨드) * 60(초)
  const remainMinutes = makeTwoDigit(Math.floor((gap / (1000 * 60)) % 60));

  // 1초 = 1000(밀리세컨드)
  const remainSeconds = makeTwoDigit(Math.floor((gap / 1000) % 60));

  ddaysDiv.innerText = `${remainDays}일 ${remainHours}시간 ${remainMinutes}분 ${remainSeconds}초`;
}

// 1초에 한번씩 함수를 실행한다
setInterval(countDown, 1000);
