import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";

function Main({ weatherData, clothingItems }) {
  const temperature = weatherData ? Math.round(weatherData.main.temp) : null;

  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          {temperature !== null
            ? `Today is ${temperature}° F / You may want to wear: `
            : "Loading weather..."}
        </p>
        <ul className="cards__list">
          {clothingItems.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
