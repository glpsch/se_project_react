import { useEffect } from "react";
import "./ItemModal.css";

function ItemModal({ card, isOpen, onClose }) {
  const cardName = card?.name || "";
  const cardImage = card?.link || "";
  const cardWeather = card?.weather || "";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container modal__container_type_image">
        <button
          type="button"
          className="modal__close"
          
          onClick={onClose}
        />
        <img src={cardImage} alt={cardName} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{cardName}</h2>
          <p className="modal__weather">Weather: {cardWeather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;   