import { $, $$ } from "../components";
import { displayWeatherInfo } from "./content.js";

const locationElement = $('[data-input="location"]');
const searchWeatherBtn = $('[data-btn="search-weather"]');
const cloudy = $('[data-weather-details="cloudy"]');
const humidity = $('[data-weather-details="humidity"]');
const visibility = $('[data-weather-details="visibility"]');
const wind = $('[data-weather-details="wind"]');
const commonLocations = $$("[data-common-locations]");
const body = $("body");

// Get weathre data from API
const getWeatherData = async (location) => {
  const API = "176c23a5dc40cc61563c12852115b9d3";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
};

const keepTwoDigits = (num) => (Math.round(num * 100) / 100).toFixed(2);
export const removeDigits = (num) => Math.round(num).toFixed(0);

const extractWeatherInfo = (data) => ({
  location: data.name,
  temp: removeDigits(data.main.temp - 273.15),
  weather: data.weather[0].description,
  icon: data.weather[0].icon,
  cloudy: data.clouds.all + "%",
  visibility: keepTwoDigits(data.visibility / 1000) + "km",
  humidity: data.main.humidity + "%",
  wind: data.wind.speed + "m/s",
});

// * Get background image from API
const getBackgroundImg = async (weather) => {
  const API = "0uanXuWRT4_ErjRboI63V5TMK5Q1oDoTXYv8pYgYwzQ";
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=5&query=${weather}&client_id=${API}`
  );
  const weatherImgData = await response.json();
  return weatherImgData;
};

const randomNum = () => Math.floor(Math.random() * 5);

const getImgUrl = (data) => ({ url: data.results[randomNum()].urls.regular });

const setBackgroundImg = (data) => {
  body.style.background = `url(${getImgUrl(data).url})`;
};

// * Display weather details
const displayWeatherDetails = (obj) => {
  cloudy.textContent = obj.cloudy;
  visibility.textContent = obj.visibility;
  humidity.textContent = obj.humidity;
  wind.textContent = obj.wind;
};

// * Search and display weather info
const displayWeather = (location) => {
  getWeatherData(location)
    .then((res) => extractWeatherInfo(res))
    .then((res) => {
      displayWeatherInfo(res);
      displayWeatherDetails(res);
      getBackgroundImg(res.weather).then((res) => setBackgroundImg(res));
    });
};

// * Export sidebar UI
const SidebarUi = () => {
  const loadSidebarUi = () => {
    displayWeather("Hangzhou"); // Default location
    searchWeatherBtn.addEventListener("click", () => {
      displayWeather(locationElement.value);
      locationElement.value = "";
    });
    commonLocations.forEach((element) => {
      element.addEventListener("click", () => {
        displayWeather(element.textContent);
      });
    });
  };
  return { loadSidebarUi };
};

export const sidebarUi = SidebarUi();
