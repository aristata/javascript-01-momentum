// 색깔 배열
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

// 그라데이션 방향 배열
const gradientDirection = [
  "to top",
  "to right top",
  "to right",
  "to right bottom",
  "to bottom",
  "to left bottom",
  "to left",
  "to left top"
];

// dom element 선택하기
const body = document.querySelector("body");
const button = document.querySelector("button");

// 이벤트 함수 구현
function onClickButton() {
  // 랜덤 색깔 선택
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];

  // 랜덤 방향 선택
  const randomDirection =
    gradientDirection[Math.floor(Math.random() * gradientDirection.length)];

  // body 에 그라데이션 스타일 추가
  body.style.background = `linear-gradient(${randomDirection}, ${randomColor1}, ${randomColor2})`;
}

// 버튼에 이벤트 추가
button.addEventListener("click", onClickButton);
