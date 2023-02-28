import { useState } from 'react'
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
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState('')

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true)
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true)
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true)
  const handleCardClick = (cardLink) => {
    setSelectedCard(cardLink)
    setIsImagePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
    setSelectedCard('')
  }

  return (
    <div className="App, body">
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

      <ImagePopup cardLink={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

    </div>
  )
}

export default App
