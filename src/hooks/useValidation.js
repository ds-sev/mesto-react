import { useState } from 'react'

function useValidation() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})

  const onChange = (evt) => {
    const { name, value } = evt.target
    const error = evt.target.validationMessage
    setValues((values) => ({ ...values, [name]: value }))
    setErrors((errors) => ({ ...errors, [name]: error }))
  }
  const  resetValidation = (values ={}, errors = {}) => {
    setValues(values)
    setErrors(errors)
  }

  return {
    values,
    errors,
    onChange,
    resetValidation
  }

}

export default useValidation