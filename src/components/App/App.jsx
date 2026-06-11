import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";

import { getWeather, getWeatherType } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/defaultClothingItems";

function App() {
  const [clothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherError, setWeatherError] = useState("");

  useEffect(() => {
    getWeather(
      { latitude: coordinates.latitude, longitude: coordinates.longitude },
      apiKey
    )
      .then((data) => {
        setWeatherData(data);
        setWeatherError("");
      })
      .catch((err) => {
        console.error(err);
        setWeatherError("Couldn't load the weather. Please try again later.");
      });
  }, []);

  const weatherType = weatherData
    ? getWeatherType(weatherData.main.temp)
    : null;

  const filteredClothingItems = weatherType
    ? clothingItems.filter((item) => item.weather.toLowerCase() === weatherType)
    : [];

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleAddItemSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header onAddClick={handleAddClick} weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          clothingItems={filteredClothingItems}
          onCardClick={handleCardClick}
          weatherError={weatherError}
        />
        <Footer />
        <ItemModal
          card={selectedCard}
          isOpen={activeModal === "preview"}
          onClose={handleCloseModal}
        />
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={handleCloseModal}
          onSubmit={handleAddItemSubmit}
        />
      </div>
    </div>
  );
}

export default App;
