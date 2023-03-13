import { useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card(card) {
  const currentUser = useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id
  const isLiked = card.likes.some((user) => user._id === currentUser._id)
  const cardLikeButtonClassName = `likes-container__button ${
    isLiked && 'likes-container__button_active'
  }`

  function handleClick() {
    card.onCardClick(card)
  }

  function handleLikeClick() {
    card.onCardLike(card)
  }

  function handleDeleteClickConfirm() {
    card.onCardDeteteConfirm(card)
  }

  return (
    <div className="card">
      <div
        className="card__photo-container"
        onClick={handleClick}
        style={{
          backgroundPosition: 'center',
          backgroundImage: `url(${card.link})`,
          backgroundSize: 'cover',
        }}
      ></div>
      {isOwn && (
        <button
          className="card__button-delete"
          onClick={handleDeleteClickConfirm}
          type="button"
          aria-label="Удалить карточку"
        />
      )}
      <div className="card__info">
        <h2 className="card__title">{card.title}</h2>
        <div className="likes-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="Нравится"
          />
          <p className="likes-container__counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
