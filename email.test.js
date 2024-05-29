const ValidarEmail = require("./email")

test('Validação de um email valido', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com")).toBe(true)
})

test('Validação de um email valido .br', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br")).toBe(true)
})

test('Entrada inválida de um email com 2 .br', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br.br")).toBe(false)
})

test('Entrada inválida de um email sem o com', ()=>{
    expect(ValidarEmail("foo.bar@gmail.")).toBe(false)
})

test('Entrada inválida de um email sem ponto', ()=>{
    expect(ValidarEmail("foo.bar@gmailcom")).toBe(false)
})

test('Entrada inválida de um email sem o @', ()=>{
    expect(ValidarEmail("foo.bargmail.com")).toBe(false)
})

test('Entrada inválida de um email sem um nome', ()=>{
    expect(ValidarEmail("@gmail.com")).toBe(false)
})