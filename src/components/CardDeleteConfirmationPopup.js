import PopupWithForm from './PopupWithForm'
import useValidation from '../hooks/useValidation'

function CardDeleteConfirmationPopup({ isOpen, onClose, onCardDelete, cardToDelete, buttonText }) {
  function handleSubmit(evt) {
    evt.preventDefault()
    onCardDelete(cardToDelete)
  }

  const { isFormValid } = useValidation()

  function handleEscKeyClose(evt) {
    if (evt.code === 'Escape') {
      document.addEventListener('keydown', handleEscKeyClose)
      onClose()
    }
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      cardToDelete={cardToDelete}
      onKeyDown={handleEscKeyClose}
      isValid={isFormValid}
    />
  )
}

export default CardDeleteConfirmationPopup
