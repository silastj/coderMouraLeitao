
const pessoa = { nome: 'Silas'}
pessoa.nome = 'Pereira'
console.log(pessoa)


Object.freeze(pessoa) //Paraliza as mudanças

pessoa.nome = "samara"
console.log(pessoa)


