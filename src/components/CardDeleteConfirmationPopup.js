import PopupWithForm from './PopupWithForm'

function CardDeleteConfirmationPopup({ isOpen, onClose, onCardDelete, cardToDelete, buttonText }) {
  function handleSubmit(evt) {
    evt.preventDefault()
    onCardDelete(cardToDelete)
  }

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
    />
  )
}

export default CardDeleteConfirmationPopup
