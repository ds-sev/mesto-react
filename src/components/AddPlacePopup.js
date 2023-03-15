import PopupWithForm from './PopupWithForm'
import { useEffect } from 'react'
import useValidation from '../hooks/useValidation'

function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonText }) {
  const { values, errors, onChange, resetValidation, isFormValid, setIsFormValid } = useValidation()

  useEffect(() => {
    resetValidation()
    setIsFormValid(false)
  }, [isOpen])

  function handleSubmit(evt) {
    evt.preventDefault()
    onAddPlace(values)
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="new-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      isValid={isFormValid}
    >
      <label>
        <input
          value={values.name || ''}
          onChange={onChange}
          type="text"
          className="edit-form__field edit-form__field_get_place-name"
          placeholder="Название"
          name="name"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="edit-form__field-error place-input-error">{errors.name}</span>
      </label>
      <label>
        <input
          value={values.link || ''}
          onChange={onChange}
          type="url"
          className="edit-form__field edit-form__field_get_link"
          placeholder="Ссылка на картинку"
          name="link"
          required
        />
        <span className="edit-form__field-error link-input-error">{errors.link}</span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup
