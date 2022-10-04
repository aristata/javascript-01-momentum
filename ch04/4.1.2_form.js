// HTML element 찾기
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// 밸리데이션 적용
// 공백인 경우 입력하라고 알림
// 15자 이상인 경우 너무 길다고 알림
function loginButtonClickHandler() {
  console.log(`입력된 텍스트는 (${loginInput.value}) 입니다`);
}

loginButton.addEventListener("click", loginButtonClickHandler);
