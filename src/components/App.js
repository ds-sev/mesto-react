import { useState, useEffect } from 'react'
import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import PopupWithForm from './PopupWithForm'
import NewCardFormContent from './NewCardFormContent'
import EditAvatarPopup from './EditAvatarPopup'
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import card from './Card'
import EditProfilePopup from './EditProfilePopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData)
        setCards(cardsData)
      })
      .catch((err) => console.log(err))
  }, [])

  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' })
  const [cards, setCards] = useState([])

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
    setSelectedCard({ name: '', link: '' })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id)
    api
      .changeLikeCardStatus(card.id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) => (currentCard._id === card.id
            ? newCard
            : currentCard)),
        )
      })
      .catch((err) => console.log(err))
  }

  function handleCardDelete(targetCard) {
    api
      .deleteCard(targetCard.id)
      .then(setCards(cards.filter((card) => card._id !== targetCard.id)))
      .catch((err) => console.log(err))
  }

  function handleUpdateUser(userData) {
    api.setUserInfo(userData)
      .then(setCurrentUser(userData))
      .then(closeAllPopups)
      .catch((err) => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            title="Новое место"
            name="new-card"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText="Добавить"
          >
            <NewCardFormContent />

          </PopupWithForm>
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
            />
        </div>
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
