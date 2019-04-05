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
          message: 'Este campo é obrigatório.',
          action: (val) => !!val
        })
        return ctx
      }

      ctx.min = (min) => {
        ctx.validators.push({
          message: `Valor mínimo é de ${min}.`,
          action: exec(value => (value >= min))
        })
        return ctx
      }
  
      ctx.max = (max) => {
        ctx.validators.push({
          message: `Valor máximo é de ${max}.`,
          action: exec(value => (value <= max))
        })
        return ctx
      }
  
      ctx.validators.push({
        message: 'Este campo não é do tipo numérico.',
        action: (value) => (typeof value === 'number')
      })
      
      return ctx
    }