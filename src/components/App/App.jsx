import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import TemperatureUnitContext from "../../contexts/TemperatureUnitContext";
import { getWeather } from "../../utils/weatherApi";
import { getItems, addItem, deleteItem } from "../../utils/api";
import { coordinates, apiKey } from "../../utils/constants";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherError, setWeatherError] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

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

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items.reverse());
      })
      .catch(console.error);
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const filteredClothingItems = weatherData
    ? clothingItems.filter(
        (item) => item.weather.toLowerCase() === weatherData.type
      )
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

  const openConfirmationModal = (card) => {
    setSelectedCard(card);
    setActiveModal("delete");
  };

  const handleCardDelete = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== selectedCard._id)
        );
        setSelectedCard({});
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleAddItemSubmit = ({ name, imageUrl, weather }, resetForm) => {
    addItem({ name, imageUrl, weather })
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        resetForm();
        handleCloseModal();
      })
      .catch(console.error);
  };

  return (
    <div className="page">
      <div className="page__content">
        <TemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header onAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={filteredClothingItems}
                  onCardClick={handleCardClick}
                  weatherError={weatherError}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  onAddClick={handleAddClick}
                />
              }
            />
          </Routes>
          <Footer />
          <ItemModal
            card={selectedCard}
            isOpen={activeModal === "preview"}
            onClose={handleCloseModal}
            onDeleteClick={openConfirmationModal}
          />
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={handleCloseModal}
            onAddItem={handleAddItemSubmit}
          />
          <DeleteConfirmationModal
            isOpen={activeModal === "delete"}
            onClose={handleCloseModal}
            onConfirm={handleCardDelete}
          />
        </TemperatureUnitContext.Provider>
      </div>
    </div>
  );
}

export default App;
