/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./src/components/selectors.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"$\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"$$\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/components/index.js?");

/***/ }),

/***/ "./src/components/selectors.js":
/*!*************************************!*\
  !*** ./src/components/selectors.js ***!
  \*************************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\nconst $ = document.querySelector.bind(document);\nconst $$ = document.querySelectorAll.bind(document);\n\n\n//# sourceURL=webpack:///./src/components/selectors.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_weather_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/weather-ui.js */ \"./src/ui/weather-ui.js\");\n\n\n_ui_weather_ui_js__WEBPACK_IMPORTED_MODULE_0__[\"weatherUi\"].loadWeatherUi();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layouts/content.js":
/*!********************************!*\
  !*** ./src/layouts/content.js ***!
  \********************************/
/*! exports provided: displayWeatherInfo, contentUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayWeatherInfo\", function() { return displayWeatherInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contentUi\", function() { return contentUi; });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ \"./src/components/index.js\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ \"./src/layouts/sidebar.js\");\n\n\n\nconst temp = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-weather-info=\"temp\"]');\nconst location = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-weather-info=\"location\"]');\nconst date = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-weather-info=\"date\"]');\nconst weather = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-weather-info=\"weather\"]');\nconst weatherIcon = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"[data-weather-icon]\");\nconst switchTempElement = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-switch-temp=\"switch\"]');\nconst fahrenheit = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-switch-temp=\"f\"]');\nconst celsius = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-switch-temp=\"c\"]');\n\n// Switch temp\nconst changeTemp = () => {\n  let tempStr = temp.textContent;\n  let tempNum = +temp.textContent.slice(0, tempStr.length - 1);\n  if (celsius.classList.contains(\"deactivate\")) {\n    temp.textContent = Object(_sidebar_js__WEBPACK_IMPORTED_MODULE_1__[\"removeDigits\"])(tempNum * 1.8 + 32) + \"º\";\n  } else {\n    temp.textContent = Object(_sidebar_js__WEBPACK_IMPORTED_MODULE_1__[\"removeDigits\"])((tempNum - 32) / 1.8) + \"º\";\n  }\n};\n\nconst switchTemp = () => {\n  fahrenheit.classList.toggle(\"deactivate\");\n  celsius.classList.toggle(\"deactivate\");\n  changeTemp();\n};\n\n// Display weather info\nconst getWeekDay = () => {\n  let day = \"\";\n  switch (new Date().getDay()) {\n    case 0:\n      day = \"Sunday\";\n      break;\n    case 1:\n      day = \"Monday\";\n      break;\n    case 2:\n      day = \"Tuesday\";\n      break;\n    case 3:\n      day = \"Wednesday\";\n      break;\n    case 4:\n      day = \"Thursday\";\n      break;\n    case 5:\n      day = \"Friday\";\n      break;\n    case 6:\n      day = \"Saturday\";\n  }\n  return day;\n};\n\nconst getDateInfo = () => ({\n  date: new Date().toLocaleDateString(),\n  week: getWeekDay(),\n});\n\nconst setTemp = (tempNum) => {\n  if (celsius.classList.contains(\"deactivate\")) {\n    temp.textContent = Object(_sidebar_js__WEBPACK_IMPORTED_MODULE_1__[\"removeDigits\"])(tempNum * 1.8 + 32) + \"º\";\n  } else {\n    temp.textContent = tempNum + \"º\";\n  }\n};\n\nconst displayWeatherInfo = (obj) => {\n  setTemp(obj.temp);\n  location.textContent = obj.location;\n  date.textContent = `${getDateInfo().week} ${getDateInfo().date}`;\n  weather.textContent = obj.weather;\n  weatherIcon.src = `http://openweathermap.org/img/wn/${obj.icon}@2x.png`;\n};\n\nconst ContentUi = () => {\n  const loadContentUi = () => {\n    switchTempElement.addEventListener(\"click\", switchTemp);\n  };\n  return { loadContentUi };\n};\n\nconst contentUi = ContentUi();\n\n\n//# sourceURL=webpack:///./src/layouts/content.js?");

/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/*! exports provided: contentUi, sidebarUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/layouts/content.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"contentUi\", function() { return _content_js__WEBPACK_IMPORTED_MODULE_0__[\"contentUi\"]; });\n\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ \"./src/layouts/sidebar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sidebarUi\", function() { return _sidebar_js__WEBPACK_IMPORTED_MODULE_1__[\"sidebarUi\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/layouts/index.js?");

/***/ }),

/***/ "./src/layouts/sidebar.js":
/*!********************************!*\
  !*** ./src/layouts/sidebar.js ***!
  \********************************/
/*! exports provided: removeDigits, sidebarUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeDigits\", function() { return removeDigits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sidebarUi\", function() { return sidebarUi; });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ \"./src/components/index.js\");\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.js */ \"./src/layouts/content.js\");\n\n\n\nconst locationElement = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-input=\"location\"]');\nconst searchWeatherBtn = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-btn=\"search-weather\"]');\nconst cloudy = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-weather-details=\"cloudy\"]');\nconst humidity = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-weather-details=\"humidity\"]');\nconst visibility = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-weather-details=\"visibility\"]');\nconst wind = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('[data-weather-details=\"wind\"]');\nconst commonLocations = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$$\"])(\"[data-common-locations]\");\nconst body = Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"body\");\n\n// * Get weathre data from API\nconst getWeatherData = async (location) => {\n  const API = \"176c23a5dc40cc61563c12852115b9d3\";\n  const response = await fetch(\n    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API}`,\n    { mode: \"cors\" }\n  );\n  const weatherData = await response.json();\n  return weatherData;\n};\n\nconst keepTwoDigits = (num) => (Math.round(num * 100) / 100).toFixed(2);\nconst removeDigits = (num) => Math.round(num).toFixed(0);\n\nconst extractWeatherInfo = (data) => ({\n  location: data.name,\n  temp: removeDigits(data.main.temp - 273.15),\n  weather: data.weather[0].description,\n  icon: data.weather[0].icon,\n  cloudy: data.clouds.all + \"%\",\n  visibility: keepTwoDigits(data.visibility / 1000) + \"km\",\n  humidity: data.main.humidity + \"%\",\n  wind: data.wind.speed + \"m/s\",\n});\n\n// * Get background image from API\nconst getBackgroundImg = async (weather) => {\n  const API = \"0uanXuWRT4_ErjRboI63V5TMK5Q1oDoTXYv8pYgYwzQ\";\n  const response = await fetch(\n    `https://api.unsplash.com/search/photos?page=1&per_page=5&query=${weather}&client_id=${API}`\n  );\n  const weatherImgData = await response.json();\n  return weatherImgData;\n};\n\nconst randomNum = () => Math.floor(Math.random() * 5);\n\nconst getImgUrl = (data) => ({ url: data.results[randomNum()].urls.regular });\n\nconst setBackgroundImg = (data) => {\n  body.style.background = `url(${getImgUrl(data).url})`;\n};\n\n// * Display weather details\nconst displayWeatherDetails = (obj) => {\n  cloudy.textContent = obj.cloudy;\n  visibility.textContent = obj.visibility;\n  humidity.textContent = obj.humidity;\n  wind.textContent = obj.wind;\n};\n\n// * Search and display weather info\nconst displayWeather = (location) => {\n  getWeatherData(location)\n    .then((res) => extractWeatherInfo(res))\n    .then((res) => {\n      Object(_content_js__WEBPACK_IMPORTED_MODULE_1__[\"displayWeatherInfo\"])(res);\n      displayWeatherDetails(res);\n      getBackgroundImg(res.weather).then((res) => setBackgroundImg(res));\n    });\n};\n\n// * Export sidebar UI\nconst SidebarUi = () => {\n  const loadSidebarUi = () => {\n    displayWeather(\"Hangzhou\"); // Default location\n    searchWeatherBtn.addEventListener(\"click\", () => {\n      displayWeather(locationElement.value);\n      locationElement.value = \"\";\n    });\n    commonLocations.forEach((element) => {\n      element.addEventListener(\"click\", () => {\n        displayWeather(element.textContent);\n      });\n    });\n  };\n  return { loadSidebarUi };\n};\n\nconst sidebarUi = SidebarUi();\n\n\n//# sourceURL=webpack:///./src/layouts/sidebar.js?");

/***/ }),

/***/ "./src/ui/weather-ui.js":
/*!******************************!*\
  !*** ./src/ui/weather-ui.js ***!
  \******************************/
/*! exports provided: weatherUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherUi\", function() { return weatherUi; });\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts */ \"./src/layouts/index.js\");\n\n\nfunction WeatherUi() {\n  const loadWeatherUi = () => {\n    _layouts__WEBPACK_IMPORTED_MODULE_0__[\"contentUi\"].loadContentUi();\n    _layouts__WEBPACK_IMPORTED_MODULE_0__[\"sidebarUi\"].loadSidebarUi();\n  };\n\n  return { loadWeatherUi };\n}\n\nconst weatherUi = WeatherUi();\n\n\n//# sourceURL=webpack:///./src/ui/weather-ui.js?");

/***/ })

/******/ });