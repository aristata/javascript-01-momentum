function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`현재 당신의 위치는 ${latitude}, ${longitude} 입니다`);
}

function onGeoError() {
  alert(
    "당신의 위치를 찾을 수 없습니다. 그렇기 때문에 당신을 위한 날씨 정보도 찾을 수 없습니다."
  );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
