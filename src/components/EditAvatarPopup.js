import PopupWithForm from './PopupWithForm'

function EditAvatarPopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label>
        <input
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
