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
const age = parseInt(prompt("니 몇살이고?"));
console.log(isNaN(age));

// if (조건) {
//   조건이 참일때
// } else {
//   조건이 거짓일때
// }
// 조건에는 true or false 값을 주는 변수나 함수가 들어와야 한다
if (isNaN(age)) {
  alert("숫자를 입력해라");
} else {
  console.log("참 잘했어요");
}
