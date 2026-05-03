import "./Header.css";
import avatar from "../../images/av.jpg";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="header__logo" />
        <p className="header__info">Date, location</p>
      </div>
      <div className="header__container">
        <button className="header__button">+ Add clothes</button>
        <p className="header__username">Jane Doe</p>
        <img src={avatar} alt="Jane Doe" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
