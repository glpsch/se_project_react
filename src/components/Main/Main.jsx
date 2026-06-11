import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";

function Main({
  weatherData,
  clothingItems,
  onCardClick,
  weatherError,
  weatherCondition,
  isDay,
}) {
  const temperature = weatherData ? Math.round(weatherData.main.temp) : null;

  return (
    <main>
      <WeatherCard
        temperature={temperature}
        condition={weatherCondition}
        isDay={isDay}
      />
      <section className="cards">
        {weatherError && (
          <p className="cards__error">
            {weatherError}
          </p>
        )}
        <p className="cards__text">
          {temperature !== null
            ? `Today is ${temperature}° F / You may want to wear: `
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
