function convertTemperature(event){
  event.preventDefault();
  let celsiusTemperatureHigh = Math.round((farenheitTemperature - 32)* 5/9);
  let celsiusTemperatureLow = Math.round((farenheitLowTemperature - 32)* 5/9);
  let temperature = document.querySelector(".high-and-low");
   temperature.innerHTML = `${celsiusTemperatureHigh}/${celsiusTemperatureLow}°C`;
      convertLink.classList.add("farenheit");
   revertLink.classList.remove("farenheit");}
let convertLink = document.querySelector(".celsius");
convertLink.addEventListener("click", convertTemperature);


function revertTemperature(event){
  event.preventDefault();
  let farenheitTemperatureHigh = Math.round(farenheitTemperature);
  let farenheitTemperatureLow = Math.round(farenheitLowTemperature);
  let temperature = document.querySelector(".high-and-low");
  temperature.innerHTML = `${farenheitTemperatureHigh}/${farenheitTemperatureLow}°F`;
revertLink.classList.add("farenheit");
convertLink.classList.remove("farenheit");}

let revertLink = document.querySelector(".farenheit");
revertLink.addEventListener("click", revertTemperature)

function showWeather(response) {
  farenheitTemperature = response.data.main.temp;
  farenheitLowTemperature = response.data.main.temp_min;
  let temperature = Math.round(farenheitTemperature);
  let temperatureLow = Math.round(farenheitLowTemperature);
  let temperatureInput = document.querySelector(".high-and-low");
  temperatureInput.innerHTML = `${temperature}/${temperatureLow}°F`;
  let icon = document.querySelector("#sun");
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
farenheitTemperature = response.data.main.temp
}

function formatDate() {
  let now = new Date();
  let date = now.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];

  return `${day}, ${month} ${date} ${convertHours(now)}`;
}

function convertHours(timestamp) {
  let now = new Date(timestamp);
  let hours = now.getHours();
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours === 12;
  } else if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

function displayForcast(response){
  let forcast = response.data.list[0];
  let highTemp = Math.round(forcast.main.temp.max);
  let lowTemp = Math.round(forcast.main.temp.min);
  let tomorrowElement = document.getElementById("tomorrowForcast");
  let tomorrowDescription = document.querySelector(".fridayrain");
 let saturdayElement = document.getElementById("saturdayForcast");
 let saturdayDescription = document.querySelector(".saturdayrain");
 let sundayElement = document.getElementById("sundayForcast");
 let sundayDescription = document.querySelector(".sundayrain");
 let mondayElement = document.getElementById("mondayForcast");
 let mondayDescription = document.querySelector(".mondayrain");
 let tuesdayElement = document.getElementById("tuesdayForcast");
 let tuesdayDescription = document.querySelector(".tuesdayrain");
tomorrowElement.innerHTML = `
<div class="col-3">
<h4> ${convertHours(forcast.dt*1000)} <br />
    <img id="fridaySun" src="http://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png" alt={forcast.weather[0].description>
<br /> 
<span class="temperatureHigh">
${Math.round(forcast.main.temp_max)}</span>°/<span class="temperatureLow">${Math.round(forcast.main.temp_min)}</span>
</h4>
</div>`;
tomorrowDescription.innerHTML = `<em>${forcast.weather[0].description}</em>`;

forcast = response.data.list[1];
 saturdayElement.innerHTML =
  `<div class="col-3">
  <h4> ${convertHours(forcast.dt*1000)} <br />
  <img id="saturdaySun" src="http://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png" alt={forcast.weather[index].description}>
  <br />
  <span class="temperatureHigh">
  ${Math.round(forcast.main.temp_max)}</span>°/<span class="temperatureLow">${Math.round(forcast.main.temp_min)}</span>
  </h4>` 
  saturdayDescription.innerHTML = `<em>${forcast.weather[0].description}</em>`;

  forcast = response.data.list[2];
 sundayElement.innerHTML =
  `<div class="col-3">
  <h4> ${convertHours(forcast.dt*1000)} <br />
  <img id="sundaySun" src="http://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png" alt={forcast.weather[index].description}>
  <br />
  <span class="temperatureHigh">${Math.round(forcast.main.temp_max)}</span>°/<span class="temperatureLow">${Math.round(forcast.main.temp_min)}</span>
  </h4>` 
  sundayDescription.innerHTML = `<em>${forcast.weather[0].description}</em>`;

  forcast = response.data.list[3];
 mondayElement.innerHTML =
  `<div class="col-3">
  <h4> ${convertHours(forcast.dt*1000)} <br />
  <img id="mondaySun" src="http://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png" alt={forcast.weather[index].description}>
  <br />
  <span class="temperatureHigh">
  ${Math.round(forcast.main.temp_max)}</span>°/<span class="temperatureLow">${Math.round(forcast.main.temp_min)}</span>
  </h4>` 
  mondayDescription.innerHTML = `<em>${forcast.weather[0].description}</em>`;

  forcast = response.data.list[4];
 tuesdayElement.innerHTML =
  `<div class="col-3">
  <h4> ${convertHours(forcast.dt*1000)} <br />
  <img id="tuesdaySun" src="http://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png" alt={forcast.weather[index].description}>
  <br />
  <span class="temperatureHigh">
  ${Math.round(forcast.main.temp_max)}</span>°/<span class="temperatureLow">${Math.round(forcast.main.temp_min)}</span>
  </h4>` 
  tuesdayDescription.innerHTML = `<em>${forcast.weather[0].description}</em>`;
}


function searchCity(city) {
  let apiKey = "18f340f6d9fdf80c205f1ddbd39b428f";
let units = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showWeather);

extendedApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(extendedApiUrl).then(displayForcast);
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
  axios.get(apiUrl).then(showWeather);

  extendedApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(extendedApiUrl).then(displayForcast);
}
function showLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
 }

let currentButton = document.querySelector("#currentLocation");
currentButton.addEventListener("click", showLocation);

 
  let farenheitTemperature = null;
  let farenheitLowTemperature = null;
  
let dateStamp = document.querySelector(".dateStamp");
dateStamp.innerHTML = formatDate();
searchCity("New York");