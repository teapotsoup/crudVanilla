const API_KEY = '7c3be6041003ba72290cd32bfaca7bd6';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    
    fetch(url).then(response=>response.json()).then(data=>{
        const weather = document.querySelector("#weather");
        weather.innerText = `${data.name} |  ${data.main.temp} C° |  ${data.weather[0].main}`;
    });
}
function onGeoError(){
    alert("Can't access user's position.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

