function PopupWithForm({ title, name, isOpen, children, onClose, buttonText }) {
  return (
    <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <form className="edit-form" method="post" name={`${name}`}>
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
