// 어떻게 플레이어를 정의할까?
// 첫번째 방법 변수를 사용한다
// 플레이어가 여러명이라면 변수가 너무 많이 생길 것이다
const playerName = "aris";
const playerAge = 36;
const playerGender = "male";
const playerPoint = 28000;

// 두번째 방법 배열을 사용한다
// 배열의 각 요소가 무엇을 뜻하는지 알기 어렵다
const secondPlayer = ["aristata", 36, "male", 32000];

// 세번째 방법 Object(객체)를 사용한다
const player = {
  name: "earnestgem",
  age: 20,
  gender: "female",
  point: 47000
};

console.log(player);
console.log(player.name);

player.name = "tata";

console.log(player.name);

// 객체안에 새로운 속성(property)을 추가하려면
player.lastName = "Jang";
console.log(player);
