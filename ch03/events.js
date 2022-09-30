const title = document.querySelector("div.hello2 h1:first-child");
console.log(title);

// title 이 클릭되었을 때 실행될 함수
function handleTitleClick() {
  console.log("title was clicked!");
  const ranColor = ["blue", "red", "green", "yellow", "white"];
  let num = Math.floor(Math.random() * ranColor.length);
  title.style.color = ranColor[num];
}

// 자바스크립트는 누군가가 title 을 click 하는 것을 listen(지켜보다) 할 것이다
// click 이벤트가 발생하면 두번째 인자로 받은 handleTitleClick 함수가 실행될 것이다
title.addEventListener("click", handleTitleClick);