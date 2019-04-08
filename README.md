# react-schema-validator

A json schema validator made for react hooks.

WARNING: this library is in a very beginning and may have changes.

## Usage

```js
import { useStateWithValidator, schema } from 'react-schema-validator'

const Errors = (errors, key) => (
    if(!errors || errors[key]) { return [] }
    return (
        <div>
            {errors[key].map((error, i) => (
                <span key={i}>{error}</span>
            ))}
        </div>
    )
)

const MyForm = () => {
    const [state, setState] = useStateWithValidator({}, {
        name: schema.text().required().min(1).max(10),
        lastname: schema.text().min(1).max(20),
        age: schema.number().min(18).max(80)
    })

    const onChange = (e) => (
        setState({
            ...state,
            [e.name]: e.value
        })
    )

    return (
        <form>
            <input name='name' type='text' onChange={onChange} />
            <Errors errors={state._errors} key='name' />
            <input name='lastname' type='text' onChange={onChange} />
            <Errors errors={state._errors} key='lastname' />
            <input name='age' type='number' onChange={onChange} />
            <Errors errors={state._errors} key='age' />
        </form>
    )
}
```

## Roadmap

[ ] Add more validation models
[ ] Tree shaking compatibilities
[ ] List of supported browsers
[ ] Create tests and coverage

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.