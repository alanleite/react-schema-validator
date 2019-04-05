const exec = (func) => {
  return (val) => {
    try {
      return func(val)
    } catch (error) {
      return false
    }
  }
}

export default () => {
    const ctx = {
      validators: []
    }

    ctx.required = () => {
      ctx.validators.push({
        message: 'Este campo não é obrigatório',
        action: (val) => !!val
      })
      return ctx
    }

    // ctx.email = () => {
    //   ctx.validators.push({
    //     message: 'Este campo não é um e-mail válido',
    //     action: exec(validateEmail)
    //   })
    //   return ctx
    // }

    ctx.min = (min) => {
      ctx.validators.push({
        message: `Quantidade mínima de caracteres é ${min}`,
        action: exec(value => (value.length >= min))
      })
      return ctx
    }

    ctx.max = (max) => {
      ctx.validators.push({
        message: `Quantidade máxima de caracteres é ${max}`,
        action: exec(value => (value.length <= max))
      })
      return ctx
    }

    ctx.validators.push({
      message: 'Este campo não é do tipo texto',
      action: (value) => (typeof value === 'string')
    })
    
    return ctx
  }