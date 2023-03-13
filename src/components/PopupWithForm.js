import { useEffect } from 'react'

function PopupWithForm({ title, name, isOpen, children, onClose, onSubmit, buttonText }) {
  function onOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

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

  return (
    <div
      className={`popup popup-${name} ${isOpen
        ? 'popup_opened'
        : ''}`}
      onClick={onOverlayClick}
    >
      <div className="popup__container">
        <form onSubmit={onSubmit} className="edit-form" method="post" name={`${name}`}>
          <button
            className="button_type_close button"
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
          />
          <h3 className="edit-form__title">{title}</h3>
          <fieldset className="edit-form__fields">
            {children}
            <button className="edit-form__button-save button_submit button" type="submit">
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
