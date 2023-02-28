function NewAvatarFormContent() {
  return (
    <label>
      <input
        type="url"
        id="avatar-link-input"
        className="edit-form__field edit-form__field_get_link"
        placeholder="Ссылка на изображение"
        name="link"
        required
      />
      <span className="edit-form__field-error avatar-link-input-error" />
    </label>
  )
}

export default NewAvatarFormContent
