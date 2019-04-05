import { useState } from 'react'
import validate from './validate'

export default (defaultState, schema) => {
    const [state, setState] = useState(defaultState)
    const setStateValidate = (data) => {
        data._errors = validate(schema, data)
        setState(data)
    }
    return [
        state,
        setStateValidate
    ]
}