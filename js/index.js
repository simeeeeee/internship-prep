var a = 5;
let b = 7;
a = 2;
b = 1;
console.log(a - b);
console.log(a !== b);

var date = new Date();
var hour = date.getHours();

if (hour < 12) {
  alert("오전");
} else {
  alert("오후");
}

let input = prompt("숫자입력", "숫자");
console.log(typeof input); //문자열
input = Number(input); //문자열을 숫자형태로 감싸줘야 switch문 에러안남
console.log(typeof input);

switch (input % 2) {
  case 0:
    console.log("짝수");
    break;
  case 1:
    console.log("홀수");
    break;
  default:
    console.log("숫자가 아닙니다.");
    break;
}

//배열
let dayOfWeek = ["Monday", 54, true, [1, 2, 4]];

console.log(dayOfWeek[3]);

//객체
let obj = {
  name: "JS",
  favoriteFoods: [
    {
      name: "banana",
      isHealthy: true,
    },
    {
      name: "pizza",
      isHealthy: false,
    }, //obj안에 배열 안에 obj
    [1, 2, 3],
    1212,
  ],
  sayMyName: function () {
    //obj안에있는 데이터값 사용 by this
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(obj.name);
console.log(obj.favoriteFoods[1].isHealthy);
console.log(obj.favoriteFoods[2][2]);

obj.sayMyName();

const person = {
  greet: function () {
    return "hello";
  },
};

console.log(person.greet());

//string formating
//`` -> 사이에 있는 것을 문자열로! ${parameter}
function sayHello(name, age) {
  console.log(`hello ${name}, you are ${age} years old`);
}

sayHello("David", 23);

let array = ["사과", "딸기", "수박", "참외", "배"];

for (let i in array) {
  //in -> 인덱스
  console.log(i);
  console.log(array[i]);
}
for (let i of array) {
  //of -> 값
  console.log(i);
}
let i = 0;
for (i; i < 5; i++) {
  console.log(i); //01234
}
console.log("-------");
console.log(i); //5
