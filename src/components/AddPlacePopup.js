import PopupWithForm from './PopupWithForm'
import { useRef } from 'react'

function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonText }) {
  const newPlaceRef = useRef()
  const newPlaceUrlRef = useRef()

  function handleSubmit(evt) {
    evt.preventDefault()
    console.log()
    onAddPlace({
      place: newPlaceRef.current,
      url: newPlaceUrlRef.current,
    })
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="new-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <label>
        <input
          ref={newPlaceRef}
          type="text"
          className="edit-form__field edit-form__field_get_place-name"
          placeholder="Название"
          name="name"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="edit-form__field-error place-input-error"></span>
      </label>
      <label>
        <input
          ref={newPlaceUrlRef}
          type="url"
          className="edit-form__field edit-form__field_get_link"
          placeholder="Ссылка на картинку"
          name="link"
          required
        />
        <span className="edit-form__field-error link-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup
