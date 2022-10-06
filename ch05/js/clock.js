// id가 clock 인 요소를 찾아서 변수에 저장한다
const clockElement = document.querySelector("#clock");

// function somethingFunction() {
//   console.log("setInterval 에 의해 실행된 함수 입니다.");
// }

/*
 * setInterval 함수를 사용하면 일정한 간격으로 주어진 함수가 반복 실행된다.
 * 두가지 argument 를 받아서 사용하는데,
 * 첫번째는 반복 실행할 함수
 * 두번째는 반복될 간격으로 밀리세컨드 값을 받는다.
 */
// setInterval(somethingFunction, 3000);

function getDateTimes() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  clockElement.innerText = `${hour}:${minute}:${second}`;
}

// 화면이 로드될때 일단 한번 실행한다
getDateTimes();

// 이후 1초 간격으로 함수를 반복 실행한다
setInterval(getDateTimes, 1000);
