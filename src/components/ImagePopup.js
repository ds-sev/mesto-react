import Popup from './Popup'

function ImagePopup({ card, isOpen, onClose }) {

  return (
    <Popup name="image-view" isOpen={isOpen} onClose={onClose} theme="popup_theme_dark">
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
    </Popup>
  )
}

export default ImagePopup
