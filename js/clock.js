const clockContainer = document.querySelector(".js-clock"); //
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  let date = new Date(); //이시점에 만들어진 date값을 가져옴! 그래서 정지된 값
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
  // console.log(clockTitle);
}
getTime();

//          실행할함수, 시간(밀리초)
setInterval(getTime, 1000);

//stateless-> 요청/응답
//local Storage -> 개발자도구->application-> key:value값이 각 개인의 local storage에 저장
