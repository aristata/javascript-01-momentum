const h1 = document.querySelector("div.hello2 h1:first-child");

/* style 은 css 에 정의하고, javascript 에서는 className 만 변경해준다 */
function handleTitleClick() {
  const clickedClass = "active";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
