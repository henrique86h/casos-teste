const ValidarNome = require("./nome")

//criar o caso de teste
test('Validação de nome com letras', ()=>{
    expect(ValidarNome("João")).toBe(true)
})

test('Validação de nome com letras e números', ()=>{
    expect(ValidarNome("João21")).toBe(false)
})