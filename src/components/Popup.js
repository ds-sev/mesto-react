import { useEffect } from 'react'

function Popup({ name, isOpen, onClose, children }) {
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
    <div className={`popup popup-${name} ${isOpen
      ? 'popup_opened'
      : ''}`} onClick={onOverlayClick}>
      {children}
    </div>
  )
}

export default Popup
