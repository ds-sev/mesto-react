import PopupWithForm from './PopupWithForm'
import { useContext, useEffect, useState } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setName(`${currentUser.name}`)
    setDescription(`${currentUser.about}`)
  }, [currentUser])

  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.currentTarget.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    onUpdateUser({
      name,
      about: description,
    })
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-form"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <label>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          className="edit-form__field"
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
          value={description}
          onChange={handleDescriptionChange}
          type="text"
          className="edit-form__field"
          placeholder="Деятельность"
          name="job"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="job-input-error edit-form__field-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup
