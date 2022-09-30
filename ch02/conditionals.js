// prompt 는 사용자에게 무언갈 물어볼 수 있는 얼럿창을 띄운다
// 최근에는 잘 사용하지 않는 기술이다
const age = prompt("니 몇살이고?");
console.log("age = ", age, ", age's type = ", typeof age);

// 타입을 확인할 땐 typeof 를 사용한다

// 문자열을 숫자로 변경할 땐 parseInt 를 사용한다
console.log(typeof "15", typeof parseInt("15"));

// parseInt 에 숫자가 아닌 값을 넣으면 NaN(Not a Number) 이 반환된다
const notANumber = parseInt("lalala");
console.log(notANumber, typeof notANumber);
