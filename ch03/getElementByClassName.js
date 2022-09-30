// getElementsByClassName
// class name 이 같은 요소들을 가져오는 함수
// elements 라는 표현에서 이미 복수의 데이터를 가져온다는 것을 짐작할 수 있다
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// className 이 선언되어 있지 않는 요소는 이 방법으로 찾을 수 없다
const hello2 = document.getElementsByClassName("hello2");
console.log(hello2);

// tag 이름으로 요소를 찾을 수도 있다
// 다만 이 방법은 너무 많은 tag 들을 찾기 때문에 여기에서는 적절하지 못한것 같다
const hello3 = document.getElementsByTagName("h1");
console.log(hello3);

// querySelector 는 css 방식으로 element 를 찾는 함수이다
const hello4 = document.querySelector(".hello2 h1");
console.log(hello4);
