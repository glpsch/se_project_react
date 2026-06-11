import {
  tempThresholds,
  weatherConditions,
  defaultWeatherCondition,
} from "./constants";

export function getWeatherType(temperature) {
  if (temperature >= tempThresholds.hot) {
    return "hot";
  }
  if (temperature >= tempThresholds.warm) {
    return "warm";
  }
  return "cold";
}

export function getWeatherCondition(weatherData) {
  const main = weatherData?.weather?.[0]?.main?.toLowerCase() ?? "";

  return weatherConditions[main] ?? defaultWeatherCondition;
}

export function isDaytime(weatherData) {
  const icon = weatherData?.weather?.[0]?.icon;
  if (icon) {
    return icon.endsWith("d");
  }
  // Fallback: current time between sunrise and sunset (seconds).
  const { dt, sys } = weatherData ?? {};
  if (dt && sys?.sunrise && sys?.sunset) {
    return dt >= sys.sunrise && dt < sys.sunset;
  }
  return true;
}

export const getWeather = ({ latitude, longitude }, apiKey) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
