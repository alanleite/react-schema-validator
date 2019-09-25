import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'
import { useStateWithValidator, schema } from '../src'

const Page = () => {
    const defaultData = { name: 'Jonhy' }
    const definitions = { name: schema.text().max(2) }
    const [state, setState, errors] = useStateWithValidator(defaultData, definitions)

    const changeName = () => {
        setState({
            name: 'Teste'
        })
    }

    return (
        <div>
            {state.name}
            {JSON.stringify(errors)}
            <button onClick={changeName}>Change</button>
        </div>
    )
}

describe('Button component', () => {
    it('deve conseguir renderizar [snapshot]', () => {
        const { container, getByText } = render(<Page />)
        expect(container.firstChild).toMatchSnapshot()
        fireEvent.click(getByText('Change'))
        return wait(() =>
            expect(container.firstChild).toMatchSnapshot()
        )
    })
})