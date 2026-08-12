import { useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import TemperatureUnitContext from "../../contexts/TemperatureUnitContext";

function Main({ weatherData, clothingItems, onCardClick, weatherError }) {
  const { currentTemperatureUnit } = useContext(TemperatureUnitContext);

  const temperature = weatherData
    ? Math.round(weatherData.temperature[currentTemperatureUnit])
    : null;

  return (
    <main>
      <WeatherCard
        temperature={temperature}
        condition={weatherData?.condition}
        isDay={weatherData?.isDay}
      />
      <section className="cards">
        {weatherError && <p className="cards__error">{weatherError}</p>}
        <p className="cards__text">
          {temperature !== null
            ? `Today is ${temperature}° ${currentTemperatureUnit} / You may want to wear: `
            : weatherError
            ? "Weather unavailable."
            : "Loading weather..."}
        </p>
        <ul className="cards__list">
          {clothingItems.map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
