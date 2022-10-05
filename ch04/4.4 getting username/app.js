// HTML element 찾기
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function submitHandler(event) {
  event.preventDefault();
  const userName = loginInput.value;
  // console.log(`입력된 값은 (${loginInput.value}) 입니다`);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `${userName} 님, 환영합니다 :)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", submitHandler);
