import { useEffect, useState } from 'react'
import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import PopupWithForm from './PopupWithForm'
import ProfileEditFormContent from './ProfileEditFormContent'

function App() {
  // const [isOpen, setIsOpen] = React.useState('')
  // setIsOpen('popup_opened')
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true)
    document.querySelector('.popup-update-avatar').classList.add('popup_opened')
  }
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true)
  }
  const handleAddPlaceClick = () => {
    setEditProfilePopupOpen(true)

    document.querySelector('.popup-new-card').classList.add('popup_opened')
  }
  const closeAllPopups = () => {
  }
  return (
    <div className="App, body">
      {/*<body className="body">*/}
      <div className="page">
        <Header />

        <Main onEditAvatar={handleEditAvatarClick}
              onAddPlace={handleAddPlaceClick}
              onEditProfile={handleEditProfileClick}
        />

        {/*isOpen={isAddPlacePopupOpen}*/}
        {/*isOpen={isEditAvatarPopupOpen}*/}

        {/*<PopupWithForm name="edit-form"*/}
        {/*               title="Редактировать профиль"*/}
        {/*               isOpen={isEditProfilePopupOpen} />*/}

        <Footer />


        <PopupWithForm
          title="Редактировать профиль"
          name="edit-form"
          isOpen={isEditProfilePopupOpen}
        >
          <ProfileEditFormContent />
        </PopupWithForm>


      </div>


      {/*             <PopupWithForm {{children:*/}
      {/*                <label>*/}
      {/*                <input type="text" id="name-input" className="edit-form__field edit-form__field_get_name" placeholder="Имя" name="name" minLength="2" maxLength="40" required />*/}
      {/*                <span className="name-input-error edit-form__field-error"></span>*/}
      {/*                </label>*/}
      {/*                <label>*/}
      {/*                <input type="text" className="edit-form__field edit-form__field_get_job" id="job-input" placeholder="Деятельность" name="job" minLength="2" maxLength="200" required />*/}
      {/*                <span className="job-input-error edit-form__field-error"></span>*/}
      {/*                </label>*/}
      {/*              }}*/}
      {/*/>*/}

      <div className="popup popup-new-card" id="add-card-popup">
        <div className="popup__container">
          <form className="edit-form" id="add-card-form" method="post" name="new-card" noValidate>
            <button className="button_type_close button"
                    id="add-card-form-button-close"
                    type="button"
                    aria-label="Закрыть"></button>
            <h3 className="edit-form__title">Новое место</h3>
            <fieldset className="edit-form__fields">
              <label>
                <input type="text"
                       id="place-input"
                       className="edit-form__field edit-form__field_get_place-name"
                       placeholder="Название"
                       name="name"
                       minLength="2"
                       maxLength="30"
                       required />
                <span className="edit-form__field-error place-input-error"></span>
              </label>
              <label>
                <input type="url"
                       id="link-input"
                       className="edit-form__field edit-form__field_get_link"
                       placeholder="Ссылка на картинку"
                       name="link"
                       required />
                <span className="edit-form__field-error link-input-error"></span>
              </label>
              <button className="edit-form__button-save button_submit button"
                      id="create-button"
                      type="submit">Создать
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup-del-card" id="del-card-popup">
        <div className="popup__container popup__container_small">
          <form className="edit-form" id="confirm-form" method="post" name="new card" noValidate>
            <button className="button_type_close button"
                    id="confirm-form-button-close"
                    type="button"
                    aria-label="Закрыть"></button>
            <h3 className="edit-form__title edit-form__title_small-margin-bottom">Вы уверены?</h3>
            <button className="edit-form__button-save button_submit button"
                    id="confirm-button"
                    type="submit">Да
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup-update-avatar" id="update-avatar-popup">
        <div className="popup__container popup__container_small">
          <form className="edit-form"
                id="update-avatar-form"
                method="post"
                name="update avatar"
                noValidate>
            <button className="button_type_close button"
                    id="update-avatar-form-button-close"
                    type="button"
                    aria-label="Закрыть"></button>
            <h3 className="edit-form__title">Обновить аватар</h3>
            <fieldset className="edit-form__fields">
              <label>
                <input type="url"
                       id="avatar-link-input"
                       className="edit-form__field edit-form__field_get_link"
                       placeholder="Ссылка на изображение"
                       name="link"
                       required />
                <span className="edit-form__field-error avatar-link-input-error"></span>
              </label>
              <button className="edit-form__button-save button_submit button"
                      id="save-avatar-button"
                      type="submit">Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <ImagePopup />

      {/*<template id="card">*/}
      {/*  <div className="card">*/}
      {/*    <div className="card__photo-container" id="image-card" style="background-position: center;*/}
      {/*  background-size: cover"></div>*/}
      {/*    <button className="card__button-delete" id="card-button-delete" type="button" aria-label="Удалить карточку"></button>*/}
      {/*    <div className="card__info"><h2 className="card__title"></h2>*/}
      {/*      <div className="likes-container">*/}
      {/*        <button className="likes-container__button" id="card__button-like" type="button" aria-label="Нравится"></button>*/}
      {/*        <p className="likes-container__counter">-</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</template>*/}
      {/*</body>*/}
    </div>
  )
}

export default App





