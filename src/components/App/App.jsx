import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import { getWeather, getWeatherType } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/defaultClothingItems";

function App() {
  const [clothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather(
      { latitude: coordinates.latitude, longitude: coordinates.longitude },
      apiKey
    )
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const weatherType = weatherData
    ? getWeatherType(weatherData.main.temp)
    : null;

  const filteredClothingItems = weatherType
    ? clothingItems.filter(
        (item) => item.weather.toLowerCase() === weatherType
      )
    : [];

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} clothingItems={filteredClothingItems} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
