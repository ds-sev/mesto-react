import PopupWithForm from './PopupWithForm'
import useValidation from '../hooks/useValidation'

function CardDeleteConfirmationPopup({ isOpen, onClose, onCardDelete, cardToDelete, buttonText }) {
  function handleSubmit(evt) {
    evt.preventDefault()
    onCardDelete(cardToDelete)
  }

  const { isFormValid } = useValidation()

  return (
    <PopupWithForm
      title="Вы уверены?"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      cardToDelete={cardToDelete}
      isValid={isFormValid}
    />
  )
}

export default CardDeleteConfirmationPopup
