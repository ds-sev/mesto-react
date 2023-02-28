import { useEffect, useState } from 'react'
import api from '../utils/api'
import Card from './Card'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setCards(cardsData)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className="content">
      <section className="profile wrapper">
        <div className="profile__photo-container" onClick={onEditAvatar}>
          <div className="profile__photo" style={{ backgroundImage: `url(${userAvatar})` }} />
          <div className="profile__photo-hover" />
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button-edit button"
              onClick={onEditProfile}
              type="button"
              aria-label="Редактирование профиля"
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="profile__button-add button"
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить фото"
        ></button>
      </section>
      <section className="cards wrapper" aria-label="Cards">
        {cards.map((card) => (
          <Card
            title={card.name}
            likes={card.likes.length}
            link={card.link}
            key={card._id}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  )
}

export default Main
