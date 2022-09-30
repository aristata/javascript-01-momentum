const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  times: function (a, b) {
    return a * b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  }
};

console.log(calculator.plus(2, 3));
console.log(calculator.times(2, 3));
console.log(calculator.minus(2, 3));
console.log(calculator.divide(2, 3));
console.log(calculator.power(2, 3));

const age = 36;
function calculateKoreanAge(ageOfForeigner) {
  return ageOfForeigner + 1;
}
const krAge = calculateKoreanAge(age);
console.log(krAge);
