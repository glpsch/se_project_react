import "./WeatherCard.css";

import clearDay from "../../images/weather/clear_day.svg";
import clearNight from "../../images/weather/clear_n.svg";
import cloudyDay from "../../images/weather/cloudy_day.svg";
import cloudyNight from "../../images/weather/cloudy_n.svg";
import rainDay from "../../images/weather/rain_day.svg";
import rainNight from "../../images/weather/rain_n.svg";
import snowDay from "../../images/weather/snow_day.svg";
import snowNight from "../../images/weather/snow_n.svg";
import stormDay from "../../images/weather/storm_day.svg";
import stormNight from "../../images/weather/storm_n.svg";
import fogDay from "../../images/weather/fog_day.svg";
import fogNight from "../../images/weather/fog_n.svg";

const weatherImages = {
  clear: { day: clearDay, night: clearNight },
  cloudy: { day: cloudyDay, night: cloudyNight },
  rain: { day: rainDay, night: rainNight },
  snow: { day: snowDay, night: snowNight },
  storm: { day: stormDay, night: stormNight },
  fog: { day: fogDay, night: fogNight },
};

function WeatherCard({ temperature, condition = "clear", isDay = true }) {
  const timeOfDay = isDay ? "day" : "night";
  const image =
    weatherImages[condition]?.[timeOfDay] ?? weatherImages.clear.day;
  const altText = `${condition} weather during the ${timeOfDay}`;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temperature !== null ? `${temperature}°F` : "Loading weather..."}
      </p>
      <img src={image} alt={altText} className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
