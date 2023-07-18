const todo = document.querySelector(".js-todoForm");
const inputTodo = todo.querySelector("#inputTodo"); //form안의 input태그
const focus = document.querySelector(".js-focus");
function success(event) {
  localStorage.setItem("complete", true);
  focus.className = "strike-through";
}

function saveTodo(value) {
  localStorage.setItem("currentTodo", value);
}
function showTodo(value) {
  focus.innerText = `${value}✨`;
  const complete = localStorage.getItem("complete");
  if (complete === null) {
    focus.addEventListener("click", success);
  } else {
    focus.className = "strike-through";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const value = inputTodo.value;
  console.log(value);
  showTodo(value);
  saveTodo(value);
  //이름을 쳤을땐 input탭이 안보여야함 ->index.css
  todo.className = "inactive";
}

function askTodo() {
  todo.addEventListener("submit", handleSubmit);
}

function loadFocus() {
  const currentTodo = localStorage.getItem("currentTodo");

  if (currentTodo === null) {
    //localStorage에 currentUser저장 함수
    askTodo();
  } else {
    console.log(`이미 존재`);
    todo.className = "inactive";
    showTodo(currentTodo);
  }
}

function init() {
  //처음시작하는 함수-> 초기화
  loadFocus();
}

init();
