import { schema, validate } from '../src'

test('text: required', () => {
    const defs = {
        name: schema.text().required()
    }
    const result = validate(defs, {
        name: null
    })
    expect(!!result.name).toBe(true)
    expect(result.name.length).toBe(2)
})

test('text: required false', () => {
    const defs = {
        name: schema.text().required()
    }
    const result = validate(defs, {
        name: 'John'
    })
    expect(!result.name).toBe(true)
})


test('text: meial', () => {
    const defs = {
        email: schema.text().email()
    }
    const result = validate(defs, {
        email: 'John'
    })
    expect(!!result.email).toBe(true)
})


test('numeric: min', () => {
    const defs = {
        age: schema.number().min(2)
    }
    const result = validate(defs, {
        age: 1
    })
    expect(!!result.age).toBe(true)
})

test('numeric: max', () => {
    const defs = {
        age: schema.number().max(2)
    }
    const result = validate(defs, {
        age: 4
    })
    expect(!!result.age).toBe(true)
})