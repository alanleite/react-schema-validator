const validateField = (key, fieldSchema, value) => {
  const fieldErros = []
  fieldSchema.validators.forEach(val => {
    const isValid = val.action(value)
    if (!isValid) {
      fieldErros.push({
        key: key,
        message: val.message
      })
    }
  })
  return fieldErros
}

export default (schema, data) => {
  let errors = []

  // doesn't suport arrays
  if (Array.isArray(data)) return {}

  // for object validations
  if (data && typeof data === 'object') {
    for (const key in schema) {
      errors = [
        ...errors,
        ...validateField(
          key,
          schema[key],
          data[key]
        )
      ]
    }
    // make a better object
    return errors.reduce((obj, current) => {
      if (obj[current.key]) {
        obj[current.key].push(current.message)
        return obj
      } else {
        obj[current.key] = [current.message]
        return obj
      }
    }, {})
  }

  // if it is a raw value
  return validateField(
    '_',
    schema,
    data
  ).map(e => e.message)
}