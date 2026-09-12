import { useEffect } from "react";
import "../ItemModal/ItemModal.css";
import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
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
      <div className="modal__container modal__container_type_confirmation">
        <button
          type="button"
          className="modal__close"          
          onClick={onClose}
        />
        <p className="modal__confirmation-text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <button
          type="button"
          className="modal__confirm-delete"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>
        <button
          type="button"
          className="modal__cancel-delete"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
