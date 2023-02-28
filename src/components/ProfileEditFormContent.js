function ProfileEditFormContent() {
  return (
    <>
      <label>
        <input
          type="text"
          className="edit-form__field edit-form__field_get_name"
          placeholder="Имя"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error edit-form__field-error"></span>
      </label>
      <label>
        <input
          type="text"
          className="edit-form__field edit-form__field_get_job"
          placeholder="Деятельность"
          name="job"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="job-input-error edit-form__field-error"></span>
      </label>
    </>
  )
}

export default ProfileEditFormContent
