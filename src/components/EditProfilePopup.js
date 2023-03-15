import PopupWithForm from './PopupWithForm'
import { useContext, useEffect } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import useValidation from '../hooks/useValidation'

function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonText }) {
  const currentUser = useContext(CurrentUserContext)
  const { values, errors, onChange, resetValidation, isFormValid, setIsFormValid } =
    useValidation()

  useEffect(() => {
    resetValidation(currentUser)
    setIsFormValid(true)
  }, [currentUser, isOpen])

  function handleSubmit(evt) {
    evt.preventDefault()
    onUpdateUser({
      name: values.name,
      about: values.about,
    })
    resetValidation()
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-form"
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
          className="edit-form__field"
          placeholder="Имя"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error edit-form__field-error">{errors.name || ''}</span>
      </label>
      <label>
        <input
          value={values.about || ''}
          onChange={onChange}
          type="text"
          className="edit-form__field"
          placeholder="Деятельность"
          name="about"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="job-input-error edit-form__field-error">{errors.about || ''}</span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup
