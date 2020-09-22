import { $ } from "../components";
import { removeDigits } from "./sidebar.js";

const temp = $('[data-weather-info="temp"]');
const location = $('[data-weather-info="location"]');
const date = $('[data-weather-info="date"]');
const weather = $('[data-weather-info="weather"]');
const weatherIcon = $("[data-weather-icon]");
const switchTempElement = $('[data-switch-temp="switch"]');
const fahrenheit = $('[data-switch-temp="f"]');
const celsius = $('[data-switch-temp="c"]');

// Switch temp
const changeTemp = () => {
  let tempStr = temp.textContent;
  let tempNum = +temp.textContent.slice(0, tempStr.length - 1);
  if (celsius.classList.contains("deactivate")) {
    temp.textContent = removeDigits(tempNum * 1.8 + 32) + "º";
  } else {
    temp.textContent = removeDigits((tempNum - 32) / 1.8) + "º";
  }
};

const switchTemp = () => {
  fahrenheit.classList.toggle("deactivate");
  celsius.classList.toggle("deactivate");
  changeTemp();
};

// Display weather info
const getWeekDay = () => {
  let day = "";
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return day;
};

const getDateInfo = () => ({
  date: new Date().toLocaleDateString(),
  week: getWeekDay(),
});

const setTemp = (tempNum) => {
  if (celsius.classList.contains("deactivate")) {
    temp.textContent = removeDigits(tempNum * 1.8 + 32) + "º";
  } else {
    temp.textContent = tempNum + "º";
  }
};

export const displayWeatherInfo = (obj) => {
  setTemp(obj.temp);
  location.textContent = obj.location;
  date.textContent = `${getDateInfo().week} ${getDateInfo().date}`;
  weather.textContent = obj.weather;
  weatherIcon.src = `http://openweathermap.org/img/wn/${obj.icon}@2x.png`;
};

const ContentUi = () => {
  const loadContentUi = () => {
    switchTempElement.addEventListener("click", switchTemp);
  };
  return { loadContentUi };
};

export const contentUi = ContentUi();
