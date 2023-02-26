
function ImagePopup() {
  return (

    <div className="popup popup-image-view popup_theme_dark" id="image-view-popup">
      <div className="image-view">
        <figure className="figure">
          <img className="image-view__item" alt="#" src="mesto-react/src/components/App#"/>
          <figcaption className="image-view__title"></figcaption>
        </figure>
        <button className="button_type_close button" id="image-view-button-close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>

  )
}

export default ImagePopup
