import { useContext } from "react";
import TemperatureUnitContext from "../../contexts/TemperatureUnitContext";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(TemperatureUnitContext);

  return (
    <>
      <input
        className="header__toggle-checkbox"
        id="header__toggle-switch"
        type="checkbox"
        checked={currentTemperatureUnit === "C"}
        onChange={handleToggleSwitchChange}
      />
      <label className="header__toggle-label" htmlFor="header__toggle-switch">
        <span
          className={`header__toggle-letter ${currentTemperatureUnit === "F" ? "header__toggle-letter_active" : ""}`}
        >
          F
        </span>
        <span
          className={`header__toggle-letter ${currentTemperatureUnit === "C" ? "header__toggle-letter_active" : ""}`}
        >
          C
        </span>
        <span className="header__toggle-button" />
      </label>
    </>
  );
}
