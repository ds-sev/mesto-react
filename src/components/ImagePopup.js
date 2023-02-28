function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup-image-view popup_theme_dark ${card.link ? "popup_opened" : ""}`}>
      <div className="image-view">
        <figure className="figure">
          <img className="image-view__item" alt={card.title} src={card.link} />
          <figcaption className="image-view__title">{card.title}</figcaption>
        </figure>
        <button
          className="button_type_close button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
      </div>
    </div>
  )
}

export default ImagePopup
