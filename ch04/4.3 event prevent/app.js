// id 가 github 인 요소를 찾는다
const githubLink = document.querySelector("#github");

function anchorHandler(event) {
  event.preventDefault();
  console.dir(event);
}

githubLink.addEventListener("click", anchorHandler);
