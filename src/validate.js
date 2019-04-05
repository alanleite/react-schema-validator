export default (schema, data) => {
    const errors = []
    for (const key in schema) {
      schema[key].validators.forEach(val => {
        const isValid = val.action(data[key])
        if (!isValid) {
          errors.push({
            key: key,
            message: val.message
          })
        }
      })
    }
    return errors.reduce((obj, current) => {
      if(obj[current.key]) {
        obj[current.key].push(current.message)
        return obj
      } else {
        obj[current.key] = [current.message]
        return obj
      }
    }, {})
  }