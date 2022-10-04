// HTML element 찾기
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function submitHandler(event) {
  event.preventDefault();
  console.log(`입력된 값은 (${loginInput.value}) 입니다`);
}

loginForm.addEventListener("submit", submitHandler);
