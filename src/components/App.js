import { useState, useEffect } from 'react'
import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import PopupWithForm from './PopupWithForm'
import ProfileEditFormContent from './ProfileEditFormContent'
import NewCardFormContent from './NewCardFormContent'
import NewAvatarFormContent from './NewAvatarFormContent'
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)



  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
Promise.all([api.getUserInfo()])
  .then(([userData]) => {
setCurrentUser(userData.name)
  })
  .catch((err) => console.log(err))

  }, [])





  const [selectedCard, setSelectedCard] = useState({name: '', link: ''})

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true)
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true)
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true)
  const handleCardClick = (card) => {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
    setSelectedCard({name: '', link: ''})
  }

  return (
    <CurrentUserContext.Provider  value={currentUser}>
    <div className="body">
      <div className="page">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          title="Редактировать профиль"
          name="edit-form"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <ProfileEditFormContent />
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="new-card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Добавить"
        >
          <NewCardFormContent />
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="update-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <NewAvatarFormContent />
        </PopupWithForm>

      </div>

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

    </div>
    </CurrentUserContext.Provider>
  )
}

export default App
