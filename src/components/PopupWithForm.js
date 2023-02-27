function PopupWithForm({ title, name, isOpen, children, onClose }) {
  return isOpen
    ?
    (<div className={`popup popup-${name} popup_opened`}>
      <div className="popup__container">
        <form className="edit-form"
              id="profile-edit-form"
              method="post"
              name={`${name}`}
              noValidate>
          <button className="button_type_close button"
                  id="profile-edit-form-button-close"
                  type="button"
                  aria-label="Закрыть"
                  onClick={onClose} />
          <h3 className="edit-form__title">{title}</h3>
          <fieldset className="edit-form__fields">
            {children}
            <button className="edit-form__button-save button_submit button"
                    type="submit">Сохранить
            </button>
          </fieldset>
        </form>
      </div>
    </div>)
    :
    (<></>)
}

export default PopupWithForm
