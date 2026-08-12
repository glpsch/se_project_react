import { useContext } from "react";
import TemperatureUnitContext from "../../contexts/TemperatureUnitContext";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    TemperatureUnitContext
  );

  return (
    <button
      type="button"
      className="header__toggle-temperature-unit"
      onClick={handleToggleSwitchChange}
    >
      {currentTemperatureUnit === "F" ? "F / C" : "C / F"}
    </button>
  );
}
