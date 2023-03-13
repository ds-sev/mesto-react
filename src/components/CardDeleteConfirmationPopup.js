import PopupWithForm from './PopupWithForm'

function CardDeleteConfirmationPopup({ isOpen, onClose, onCardDelete, cardToDelete, buttonText }) {
  function handleSubmit(evt) {
    evt.preventDefault()
    onCardDelete(cardToDelete)
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      cardToDelete={cardToDelete}
    />
  )
}

export default CardDeleteConfirmationPopup
