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
};

console.log(obj.name);
console.log(obj.favoriteFoods[1].isHealthy);
console.log(obj.favoriteFoods[2][2]);

const person = {
  greet: function () {
    return "hello";
  },
};

console.log(person.greet());
