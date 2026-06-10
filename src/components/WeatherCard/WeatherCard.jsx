import "./WeatherCard.css";
import sunny from "../../images/weather/clear_day.svg";

function WeatherCard({ temperature }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{temperature}°F</p>
      <img src={sunny} alt="Sunny day" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
