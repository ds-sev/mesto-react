import { useEffect } from 'react'

function ImagePopup({ card, isOpen, onClose }) {
  useEffect(() => {
    function handleEscKeyClose(evt) {
      if (evt.code === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyClose)
    }
    return () => document.removeEventListener('keydown', handleEscKeyClose)
  })

  function onOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`popup popup-image-view popup_theme_dark ${card.link
        ? 'popup_opened'
        : ''}`}
      onClick={onOverlayClick}
    >
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
