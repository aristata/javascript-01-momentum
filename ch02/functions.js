function sayHello(name, age) {
  console.log("Hello " + name + "(" + age + ")");
}
sayHello("aris", 12);
sayHello("ban", 54);
sayHello("catt", 91);
sayHello("dam", 38);
sayHello("film", 22);

function plus(a, b) {
  return a + b;
}
console.log(plus(3, 25));

function multi(a, b) {
  console.log(a * b);
}
multi(4, 102);

const player = {
  name: "aris",
  sayHi: function (otherPlayerName) {
    console.log(`Hi ${otherPlayerName}, nice to meet you`);
  }
};
player.sayHi("miho");
player.sayHi("minho");
