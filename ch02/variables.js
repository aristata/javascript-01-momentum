console.log("안녕하세요");

const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

let nickName = "aris";

console.log("My nick name is ", nickName);

nickName = "earnestgem";

console.log("My nick name is ", nickName);

/*
  `boolean`
  - `true` or `false` 값을 가지는 타입

  `null`
  - 아무것도 없는 상태
  - 아무것도 없다는 값이 들어 있음
  - 변수 안에 어떤 것이 없다는 것을 확실히 하기 위해 사용함

  `undefined` 
  - 선언되었지만, 정의되지 않음
  - 컴퓨터 메모리 안에는 존재하지만 (=공간은 있지만), 값이 없는 상태
*/
const amIFat = true;
console.log("amIFat 의 타입은?", typeof amIFat);

const nothing = null;
console.log("nothing 의 값은?", nothing);

let something;
console.log("something 의 값은?", something);
