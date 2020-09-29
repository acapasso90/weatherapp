function convertTemperature(event){
  event.preventDefault();
  let temperatureHigh = 84;
  let temperatureLow = 72;
  let celsiusTemperatureHigh = Math.round((temperatureHigh - 32)* 5/9);
  let celsiusTemperatureLow = Math.round((temperatureLow - 32)* 5/9);
 
  let temperature = document.querySelector(".high-and-low");
  temperature.innerHTML = `${celsiusTemperatureHigh}/${celsiusTemperatureLow}°C`;
}
let convertLink = document.querySelector(".celsius");
convertLink.addEventListener("click", convertTemperature);


function revertTemperature(event){
  event.preventDefault();
  let temperatureHigh = 29;
  let temperatureLow = 22;
  let farenheitTemperatureHigh = Math.round((temperatureHigh * 9) / 5 + 32);
  let farenheitTemperatureLow = Math.round((temperatureLow * 9) / 5 + 32);
  let temperature = document.querySelector(".high-and-low");
  temperature.innerHTML = `${farenheitTemperatureHigh}/${farenheitTemperatureLow}°F`;
}

let revertLink = document.querySelector(".farenheit");
revertLink.addEventListener("click", revertTemperature)

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureLow = Math.round(response.data.main.temp_min);
  let temperatureInput = document.querySelector(".high-and-low");
  temperatureInput.innerHTML = `${temperature}°/${temperatureLow}°F`;
  let icon = document.querySelector("#sun")
  let status = (response.data.weather[0].description);
  let currentStatus = document.querySelector(".statusNow");
  currentStatus.innerHTML = `${status}`;
  icon.setAttribute("alt", response.data.weather[0].description);
  icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
let humidity = (response.data.main.humidity);
let currentHumidity = document.querySelector(".humidity");
currentHumidity.innerHTML = `Humidity: ${humidity}%`;
let windSpeed = (response.data.wind.speed);
let currentWind = document.querySelector(".windSpeed");
currentWind.innerHTML = `Wind: ${windSpeed} MPH`
document.querySelector(".hereNow").innerHTML=response.data.name;
}

function searchCity(city) {
  let apiKey = "18f340f6d9fdf80c205f1ddbd39b428f";
let units = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showWeather);
}

function enterCity(event){
  event.preventDefault();
  let city = document.querySelector("#searchInput").value;
  searchCity(city); 
} 
let citySearch = document.querySelector(".inputBars");
citySearch.addEventListener("submit", enterCity);

function searchLocation(position){
  let apiKey = "18f340f6d9fdf80c205f1ddbd39b428f";
  let units = "imperial";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather)
}
function showLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
 }

let currentButton = document.querySelector("#currentLocation");
currentButton.addEventListener("click", showLocation);

  let now = new Date();
  let date = now.getDate();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let day = days [now.getDay()];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months [now.getMonth()];
  let hours = now.getHours();
  if (hours > 12){hours -= 12;}
  else if (hours === 0){hours === 12;}
  else if (hours < 10){hours = `0${hours}`;}
  let minutes = now.getMinutes();
  if (minutes < 10){minutes = `0${minutes}`;}
  let dateStamp = document.querySelector(".dateStamp");
  dateStamp.innerHTML = `${day}, ${month} ${date} ${hours}:${minutes}`;

  
searchCity("New York");
