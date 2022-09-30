// getElementById 는 ID 속성을 가지고 Element 를 찾는 함수이다
const title = document.getElementById("title");
console.log(title);

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);
