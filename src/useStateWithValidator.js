import { useState } from 'react'
import validate from './validate'

export default (defaultState, schema) => {
    const [state, setState] = useState({
        value: defaultState,
        errors: []
    })

    const setStateValidate = (value) => {
        const errors = validate(schema, value)
        setState({
            value,
            errors
        })
    }

    return [
        state.value,
        setStateValidate,
        state.errors,
    ]
}