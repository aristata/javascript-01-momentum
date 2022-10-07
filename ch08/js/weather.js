const API_KEY = "1dd68e5b90437da0511e6beaeb9dbeaa";
const locationElement = document.querySelector("#location");
const weatherElement = document.querySelector("#weather");
const temperatureElement = document.querySelector("#temperature");

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`현재 당신의 위치는 ${latitude}, ${longitude} 입니다`);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.innerText = data.name;
      weatherElement.innerText = data.weather[0].main;
      temperatureElement.innerText = data.main.temp;
    });
}

function onGeoError() {
  alert(
    "당신의 위치를 찾을 수 없습니다. 그렇기 때문에 당신을 위한 날씨 정보도 찾을 수 없습니다."
  );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
