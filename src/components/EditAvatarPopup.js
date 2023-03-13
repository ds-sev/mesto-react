import PopupWithForm from './PopupWithForm'
import { useRef } from 'react'

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
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
