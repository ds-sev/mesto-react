function ImagePopup({ cardLink, onClose, isOpen }) {
  return isOpen ? (
    <div className="popup popup-image-view popup_theme_dark popup_opened" id="image-view-popup">
      <div className="image-view">
        <figure className="figure">
          <img className="image-view__item" alt="#" src={cardLink} />
          <figcaption className="image-view__title" />
        </figure>
        <button
          className="button_type_close button"
          id="image-view-button-close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default ImagePopup;
