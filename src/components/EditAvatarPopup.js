import PopupWithForm from './PopupWithForm'
import { useEffect } from 'react'
import useValidation from '../hooks/useValidation'

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
  const { values, errors, onChange, resetValidation, isFormValid, setIsFormValid } =
    useValidation()

  useEffect(() => {
    resetValidation()
    setIsFormValid(false)
  }, [isOpen])

  function handleSubmit(evt) {
    evt.preventDefault()
    onUpdateAvatar(values)
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isFormValid}
    >
      <label>
        <input
          value={values.link || ''}
          onChange={onChange}
          type="url"
          className="edit-form__field edit-form__field_get_link"
          placeholder="Ссылка на изображение"
          name="link"
          required
        />
        <span className="edit-form__field-error avatar-link-input-error">{errors.link}</span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
