import { contentUi, sidebarUi } from "../layouts";

function WeatherUi() {
  const loadWeatherUi = () => {
    contentUi.loadContentUi();
    sidebarUi.loadSidebarUi();
  };

  return { loadWeatherUi };
}

export const weatherUi = WeatherUi();
