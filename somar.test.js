const somar = require("./somar")

test('somar 1 + 2 é igual a 3', () => {
    expect(somar(1, 2)).toBe(3)
})

test('Soma de dois números inteiros', () => {
    expect(somar(3, 5)).toBe(8)
})