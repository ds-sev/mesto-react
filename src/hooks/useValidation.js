import { useState } from 'react'

function useValidation() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(true)

  const onChange = (evt) => {
    const { name, value } = evt.target
    const error = evt.target.validationMessage
    setValues((values) => ({ ...values, [name]: value }))
    setErrors((errors) => ({ ...errors, [name]: error }))
    const isFormValid = evt.target.closest('form').checkValidity()
    setIsFormValid(isFormValid)
  }

  const resetValidation = (values = {}, errors = {}) => {
    setValues(values)
    setErrors(errors)
  }

  return {
    values,
    errors,
    onChange,
    resetValidation,
    isFormValid,
    setIsFormValid,
  }
}

export default useValidation
