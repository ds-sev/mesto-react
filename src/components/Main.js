import { useContext } from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDeleteConfirm, cards }) {

  const currentUser = useContext(CurrentUserContext)

  return (
    <main className="content">
      <section className="profile wrapper">
        <div className="profile__photo-container" onClick={onEditAvatar}>
          <div
            className="profile__photo"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          />
          <div className="profile__photo-hover" />
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__button-edit button"
              onClick={onEditProfile}
              type="button"
              aria-label="Редактирование профиля"
            ></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
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
            likes={card.likes}
            link={card.link}
            key={card._id}
            id={card._id}
            owner={card.owner}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDeteteConfirm={onCardDeleteConfirm}
          />
        ))}
      </section>
    </main>
  )
}

export default Main


