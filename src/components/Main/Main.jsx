import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";

function Main() {
  return (
    <div className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 75° F / You may want to wear: </p>
      </section>
    </div>
  );
}

export default Main;
