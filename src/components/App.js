import { useState, useEffect } from 'react'
import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import AddPlacePopup from './AddPlacePopup'
import EditAvatarPopup from './EditAvatarPopup'
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import CardDeleteConfirmationPopup from './CardDeleteConfirmationPopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' })
  const [cards, setCards] = useState([])
  const [isCardDeleteConfirmationPopupOpen, setIsCardDeleteConfirmationPopupOpen] = useState(false)
  const [cardToDelete, setCardToDelete] = useState({})

  const [deleteCardConfirmationBtnText, setDeleteCardConfirmationBtnText] = useState('Да')

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData)
        setCards(cardsData)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true)
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true)
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true)
  const handleCardClick = (card) => {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }
  const handleCardDeleteConfirmationClick = (targetCard) => {
    setIsCardDeleteConfirmationPopupOpen(true)
    setCardToDelete(targetCard)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsCardDeleteConfirmationPopupOpen(false)
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
      .then(() =>setCards(cards.filter((card) => card._id !== targetCard.id)))
      .then(closeAllPopups)
      .then(() => setDeleteCardConfirmationBtnText('Удаляем...'))
      .catch((err) => console.log(err))
  }

  function handleUpdateUser(userData) {
    api
      .setUserInfo(userData)
      .then((res) => {
        setCurrentUser(res)
      })
      .then(closeAllPopups)
      .catch((err) => console.log(err))
  }

  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data.avatar.value)
      .then((res) => {
        setCurrentUser(res)
      })
      .then(closeAllPopups)
      .catch((err) => console.log(err))
  }

  function handleAddPlaceSubmit(newCardData) {
    api
      .postNewCard({ name: newCardData.place.value, link: newCardData.url.value })
      .then((res) => {
        setCards([res, ...cards])
      })
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
            onCardDeleteConfirm={handleCardDeleteConfirmationClick}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <CardDeleteConfirmationPopup
            isOpen={isCardDeleteConfirmationPopupOpen}
            onClose={closeAllPopups}
            onCardDelete={handleCardDelete}
            onCardDeleteComfirmSubmit={handleCardDeleteConfirmationClick}
            cardToDelete={cardToDelete}
            buttonText={deleteCardConfirmationBtnText}
          />
        </div>
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
