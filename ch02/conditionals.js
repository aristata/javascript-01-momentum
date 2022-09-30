// prompt 는 사용자에게 무언갈 물어볼 수 있는 얼럿창을 띄운다
// 최근에는 잘 사용하지 않는 기술이다
// const age = prompt("니 몇살이고?");
// console.log("age = ", age, ", age's type = ", typeof age);

// 타입을 확인할 땐 typeof 를 사용한다

// 문자열을 숫자로 변경할 땐 parseInt 를 사용한다
console.log(typeof "15", typeof parseInt("15"));

// parseInt 에 숫자가 아닌 값을 넣으면 NaN(Not a Number) 이 반환된다
const notANumber = parseInt("lalala");
console.log(notANumber, typeof notANumber);

// isNaN 함수는 인수가 NaN인지 아닌지를 판단한다
const age = parseInt(
  prompt("미성년자는 음주 판매 금지입니다. 신분증 제시해 주세요")
);
console.log(isNaN(age));

// if (조건) {
//   조건이 참일때
// } else {
//   조건이 거짓일때
// }
// 조건에는 true or false 값을 주는 변수나 함수가 들어와야 한다
// 조건을 여러개 쓰고 싶다면 else if 를 사용한다
// 또는 &&(And) 와 ||(Or) 을 사용할 수도 있다
if (isNaN(age) || age < 0) {
  alert("양의 정수를 입력해라");
} else if (age < 18) {
  console.log("엄마젖 더 먹고 온나");
} else if (age >= 18 && age < 50) {
  console.log("마이 묵고 가이소~");
} else if (age >= 50 && age < 80) {
  console.log("건강 생각해서 좀만 드시지예");
} else if (age === 100) {
  console.log("우와");
} else if (age > 80) {
  console.log("먹고 싶으면 먹어야죠");
}
