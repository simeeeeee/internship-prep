//console.log(document);

// let obj = {
//   key: "value",
// };

let title = document.getElementById("title");
console.log(title);
console.log(title.dir);

title.style.color = "green";
console.log(title.style.color);

title.innerHTML = "Hello, javascript";

function notifiyResize(event) {
  //parameter로 event없으면 사이즈변화 1번만 감지
  console.log("Resize 되었습니다.");
  console.log(event); //event도 object
  let width = window.innerWidth;
  let height = window.innerHeight;
  console.log(width, height);
}
window.addEventListener("resize", notifiyResize); //이벤트를 감지한다.
//resize(이벤트타입)를 감지하여 notifiyResize(함수이름)를 실행
const BASE_COLOR = "green";
const OTHER_COLOR = "yellow";

function handleClick() {
  let currentColor = title.style.color;
  if (title.style.color == BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
//title.addEventListener("click", handleClick);
//title.addEventListener("mouseenter", handleClick);

//컬러가 4개이상 들어가있는 배열을 만들고
//특정 이벤트를 통해 랜덤으로 컬러가 선택되도록 만들어보세요.

let arrayColor = ["red", "orange", "green", "pink"];
function colorChange() {
  title.style.color = arrayColor[Math.floor(Math.random() * arrayColor.length)];
}
//title.addEventListener("mouseenter", colorChange);

const colors = ["red", "blue", "green", "yellow", "pink", "purple"];

function createRandomInt() {
  return Math.floor(Math.random() * colors.length); //0~6
}

function handleClick2() {
  let randomInt = createRandomInt();
  title.style.color = colors[randomInt];
}
title.addEventListener("click", handleClick2);
