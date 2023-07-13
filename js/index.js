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

let input = Number(prompt("숫자입력", "숫자"));
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
