const form = document.querySelector(".js-form");
const input = form.querySelector(".js-form input"); //form안의 input태그
const greeting = document.querySelector(".js-greetings");

function hello() {
  let date = new Date();
  if (date.getHours >= 6 && date.getHours <= 12) {
    sayHello = "Good morning";
  } else if (date.getHours > 12 && date.getHours <= 18) {
    sayHello = "Good afternoon";
  } else {
    sayHello = "Good evening";
  }
}

function saveName(name) {
  localStorage.setItem("currentUser", name);
}
function showGreeting(name) {
  //form에 있는 class를 제거해서 안보이게 하고,
  //greeting 요소를 보이게하세요!
  hello();
  greeting.innerText = `${sayHello}! ${name}`;
}

function handleSubmit(event) {
  event.preventDefault(); //원래하던 행동 stop
  const value = input.value;
  console.log(value);
  showGreeting(value);
  saveName(value);
  //이름을 쳤을땐 input탭이 안보여야함 ->index.css
  form.className = "inactive";
}

function askForName() {
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  //localStorage에서 이름 가져오기
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
    //localStorage에 currentUser저장 함수
    askForName();
  } else {
    console.log(`${currentUser} 이미 존재`);
    form.className = "inactive";
    showGreeting(currentUser);
  }
}

function init() {
  //처음시작하는 함수-> 초기화
  loadName();
}

init();
