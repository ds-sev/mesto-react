import Popup from './Popup'

function PopupWithForm({ title, name, isOpen, children, onClose, onSubmit, buttonText, isValid }) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose} >
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
            <button
              className={`edit-form__button-save button_submit button ${
                !isValid && 'button_inactive'
              }`}
              type="submit"
            >
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </Popup>
  )
}

export default PopupWithForm
