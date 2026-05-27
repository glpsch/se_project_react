import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, onClose, onSubmit }) {
  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label className="modal__label" htmlFor="garment-name">
        Name
        <input
          id="garment-name"
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label" htmlFor="garment-image">
        Image
        <input
          id="garment-image"
          type="url"
          className="modal__input"
          name="image"
          placeholder="Image URL"
          required
        />
      </label>
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__radio-group">
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              value="hot"
              className="modal__radio"
              defaultChecked
              required
            />
            Hot
          </label>
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              value="warm"
              className="modal__radio"
            />
            Warm
          </label>
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              value="cold"
              className="modal__radio"
            />
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
