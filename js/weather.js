const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const apiKey = "555353a820d272227fe78964e9863e9e";

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  //fetch()
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
  alert("위치 정보를 알 수 없습니다.");
}
//위치정보
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//날씨 api
