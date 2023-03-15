import PopupWithForm from './PopupWithForm'
import { useEffect, useRef } from 'react'
import useValidation from '../hooks/useValidation'

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
  const { isFormValid, setIsFormValid } = useValidation()

  useEffect(() => {
    setIsFormValid(true)
  }, [])

  const newAvatarRef = useRef()

  function handleSubmit(evt) {
    evt.preventDefault()
    onUpdateAvatar({
      avatar: newAvatarRef.current,
    })
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
          ref={newAvatarRef}
          type="url"
          className="edit-form__field edit-form__field_get_link"
          placeholder="Ссылка на изображение"
          name="link"
          required
        />
        <span className="edit-form__field-error avatar-link-input-error" />
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
