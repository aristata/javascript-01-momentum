// step1 element 에 접근하기
const h1 = document.querySelector("div.hello2 h1:first-child");

// step2 이벤트 함수 정의하기
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;

  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

// step3 이벤트 리스너 추가하기
h1.addEventListener("click", handleTitleClick);

/* 이런 방식으로도 style 을 적용할 수 있지만, 권장하는 방법은 아니다
왜냐하면 일을 할때 그 일에 적합한 도구를 사용하길 원하는데
스타일을 적용하는 도구는 javascript 가 아닌 css 이다*/
