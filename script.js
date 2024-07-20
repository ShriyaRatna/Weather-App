const apiKey = "048eec1081c430130331d9cf18b742c5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1146/1146856.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src =
        "https://i.pinimg.com/originals/73/60/fc/7360fcf6fd40842cad410f8d147d1f8b.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src =
        "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/4837/4837678.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src =
        "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
