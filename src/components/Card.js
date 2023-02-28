function Card(props) {
  function handleClick() {
    props.onCardClick(props)
  }

  return (
    <div className="card">
      <div
        className="card__photo-container"
        onClick={handleClick}
        style={{
          backgroundPosition: 'center',
          backgroundImage: `url(${props.link})`,
          backgroundSize: 'cover',
        }}
      ></div>
      <button
        className="card__button-delete"
        type="button"
        aria-label="Удалить карточку"
      ></button>
      <div className="card__info">
        <h2 className="card__title">{props.title}</h2>
        <div className="likes-container">
          <button
            className="likes-container__button"
            type="button"
            aria-label="Нравится"
          ></button>
          <p className="likes-container__counter">{props.likes}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
