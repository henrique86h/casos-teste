const somar = require("./somar")

test('somar 1 + 2 é igual a 3', () => {
    expect(somar(1, 2)).toBe(3)
})

test('Soma de dois números inteiros', () => {
    expect(somar(3, 5)).toBe(8)
})

test('Soma de dois números negativos', () => {
    expect(somar(-3, -5)).toBe(-8)
})

test('Soma de um número positivo e um número negativo', () => {
    expect(somar(7, -2)).toBe(5)
})

test('Soma de zero com outro número', () => {
    expect(somar(0, 9)).toBe(9)
})

test('Soma de dois números decimais', () => {
    expect(somar(2.5, 3.1)).toBe(5.6)
})

test('Soma de um número inteiro e um número decimal', () => {
    expect(somar(4, 2.5)).toBe(6.5)
})

test('Verificação de entrada inválida', () => {
    expect(somar("a", 3)).toBe("Os parâmetros devem ser números")
})

test('Soma de grandes números', () => {
    expect(somar(999999999, 999999999)).toBe(1999999998)
})