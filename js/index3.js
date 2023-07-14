//pageSpeed Insights

title = document.querySelector("#title");

let colors = ["red", "blue", "pink", "yellow"];
function generateRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function changeColor() {
  let index = generateRandomNumber();
  title.style.color = colors[index];
}

title.addEventListener("click", changeColor);
//document.querySelector("#box").style.color = "green";

let data = [
  { 회원번호: 0, 아이디: "red", 성별: "남자", 나이: 21 },
  { 회원번호: 1, 아이디: "yellow", 성별: "남자", 나이: 17 },
  { 회원번호: 2, 아이디: "orange", 성별: "여자", 나이: 16 },
  { 회원번호: 3, 아이디: "green", 성별: "여자", 나이: 55 },
];

for (let i = 0; i < data.length; i++) {
  if (data[i].나이 >= 20 && data[i].성별 == "여자") {
    console.log(data[i]);
  }
}

for (let element of data) {
  if (element.나이 == "여자" && element.나이 >= 20) {
    console.log(`나이는 ${나이}, 아이디는 ${아이디}`);
  }
}
