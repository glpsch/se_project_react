import "./Header.css";
import avatar from "../../images/av.jpg";
import logo from "../../images/logo.svg";

function Header({ onAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const location = weatherData?.name ?? "location";

  return (
    <header className="header">
      <div className="header__container">
        <img
          src={logo}
          alt="WTWR (What to Wear?) logo"
          className="header__logo"
        />
        <p className="header__info">
          {currentDate}, {location}
        </p>
      </div>
      <div className="header__container">
        <button type="button" className="header__button" onClick={onAddClick}>
          + Add clothes
        </button>
        <p className="header__username">Jane Doe</p>
        <img src={avatar} alt="Jane Doe" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
