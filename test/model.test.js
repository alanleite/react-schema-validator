import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { useStateWithValidator, schema } from '../src'

const Page = () => {
    const defaultData = { name: 'Jonhy' }
    const definitions = { name: schema.text().max(2) }
    const [state, setState] = useStateWithValidator(defaultData, definitions)
    
    const changeName = () => {
        setState({
            name: 'Teste'
        })
    }

    return (
        <div>
            {state.name}
            {JSON.stringify(state._errors)}
            <button onClick={changeName}>Change</button>
        </div>
    )
}

describe('Button component', () => {
    it('deve conseguir renderizar [snapshot]', () => {
      const { container, getByText } = render(<Page />)
      expect(container.firstChild).toMatchSnapshot()
      fireEvent.click(getByText('Change'))
      expect(container.firstChild).toMatchSnapshot()
    })
  })