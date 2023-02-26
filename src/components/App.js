import { useEffect, useState } from 'react'
import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import PopupWithForm from './PopupWithForm'
import ProfileEditFormContent from './ProfileEditFormContent'
import NewCardFormContent from './NewCardFormContent'
import NewAvatarFormContent from './NewAvatarFormContent'

function App() {
  // const [isOpen, setIsOpen] = React.useState('')
  // setIsOpen('popup_opened')
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true)
  const handleEditProfileClick = () => setEditProfilePopupOpen(true)
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true)
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
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
        <Footer />
        <PopupWithForm
          title="Редактировать профиль"
          name="edit-form"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <ProfileEditFormContent />
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="new-card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <NewCardFormContent />
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="update-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <NewAvatarFormContent />
        </PopupWithForm>
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





