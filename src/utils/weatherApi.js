export function getWeatherType(temperature) {
  if (temperature >= 81) {
    return "hot";
  }
  if (temperature >= 66) {
    return "warm";
  }
  return "cold";
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
