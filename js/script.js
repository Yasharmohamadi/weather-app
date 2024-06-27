const $ = document;
const searchBtn = $.querySelector(".btn");
const inputBox = $.querySelector(".input");
const resultWrapper = $.querySelector(".result");
const cityNameElement = $.querySelector(".city_name");
const cityWeatherElement = $.querySelector(".city_weather");
const cityDescriptionElement = $.querySelector(".city_description");
const tempElement = $.querySelector(".temp");

function getWeather() {
	if (inputBox.value) {
		let cityName = inputBox.value;
		let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c2563eee4e4d1610659772d154a593ad`;
		fetch(apiURL)
			.then((response) => response.json())
			.then((data) => {
				showCityWeather(data);
				console.log(data);
			});
	}
}

searchBtn.addEventListener("click", () => {
	getWeather();
});

inputBox.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		getWeather();
	}
});

function showCityWeather(data) {

	resultWrapper.style.visibility = "visible";
	cityNameElement.innerHTML = data.sys.country + ', ' + data.name;
	cityWeatherElement.innerHTML = data.weather[0].main;
	cityDescriptionElement.innerHTML = data.weather[0].description;
	tempElement.innerHTML = (Math.floor(data.main.temp - 273));
	inputBox.value = "";
}
