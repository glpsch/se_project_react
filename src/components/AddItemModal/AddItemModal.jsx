import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const defaultValues = {
  name: "",
  imageUrl: "",
  weather: "hot",
};

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const { values, handleChange, setValues } = useForm(defaultValues);

  const resetForm = () => {
    setValues(defaultValues);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem(values, resetForm);
  };

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="garment-name">
        Name
        <input
          id="garment-name"
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label" htmlFor="garment-image">
        Image
        <input
          id="garment-image"
          type="url"
          className="modal__input"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
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
              checked={values.weather === "hot"}
              onChange={handleChange}
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
              checked={values.weather === "warm"}
              onChange={handleChange}
            />
            Warm
          </label>
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              value="cold"
              className="modal__radio"
              checked={values.weather === "cold"}
              onChange={handleChange}
            />
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
