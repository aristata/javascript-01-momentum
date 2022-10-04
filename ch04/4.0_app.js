// HTML element 찾기
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// 아래와 같은 방법으로도 사용 가능하다
// const loginButton = document.querySelector("#login-form button");

// 버튼 이벤트
function loginButtonClickHandler() {
  console.log("Hello ", loginInput.value);
}

loginButton.addEventListener("click", loginButtonClickHandler);
