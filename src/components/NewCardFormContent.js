function NewCardFormContent() {
  return (
    <>
      <label>
        <input
          type="text"
          id="place-input"
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
          type="url"
          id="link-input"
          className="edit-form__field edit-form__field_get_link"
          placeholder="Ссылка на картинку"
          name="link"
          required
        />
        <span className="edit-form__field-error link-input-error"></span>
      </label>
    </>
  )
}

export default NewCardFormContent
