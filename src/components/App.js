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
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState('')

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true)
  const handleEditProfileClick = () => setEditProfilePopupOpen(true)
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true)
  const handleCardClick = (cardLink) => {
    setSelectedCard(cardLink)
    setImagePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setImagePopupOpen(false)
    setSelectedCard('')
  }

  return (
    <div className="App, body">
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick}
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
      <ImagePopup
        cardLink={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  )
}

export default App





