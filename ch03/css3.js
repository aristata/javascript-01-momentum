const h1 = document.querySelector("div.hello2 h1:first-child");

/* 이 코드에는 버그가 있다. className 을 초기화 시켜 버리고 있는데, 만약 기존에 className 을 가지고 있다면, 그것까지 삭제가 되어버린다
그래서 classList 라는 걸 사용하길 추천한다 */
function handleTitleClick() {
  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

// 같은 내용을 더 간단하게 구현할 수 있다
function handleToggle() {
  h1.classList.toggle("clicked");
}

// h1.addEventListener("click", handleTitleClick);
h1.addEventListener("click", handleToggle);
