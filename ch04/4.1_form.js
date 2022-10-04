// HTML element 찾기
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// 밸리데이션 적용
// 공백인 경우 입력하라고 알림
// 15자 이상인 경우 너무 길다고 알림
function loginButtonClickHandler() {
  const inputText = loginInput.value;
  if (inputText === "") {
    alert("텍스트를 입력해 주세요");
  } else if (inputText.length > 15) {
    alert("입력한 텍스트가 너무 길어요. 15자 이하로 입력해 주세요");
  } else {
    console.log(`입력된 텍스트는 (${inputText}) 입니다`);
  }
}

loginButton.addEventListener("click", loginButtonClickHandler);
