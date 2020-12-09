const carro = {
    modelo: 'sedan',
    cor: 'preto',
    ano: 2000
}


console.log(Object.keys(carro))
console.log(Object.values(carro))
console.log(Object.entries(carro))


Object.entries(carro).forEach(element => {
    console.log(`${element[0]} : ${element[1]}`)
});

////destroyed.

Object.entries(carro).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
});

// Inserção de propriedade do objetos
Object.defineProperty(carro, 'data', {
    emumerable: true, // é numerado na lista de chaves
    writable: false,
    value: '01/01/2020'
})

console.log(carro.data)

//Object.assing ( ECMAScript 2015)
const dest = {a:1 }
const o1 = { b:2 }
const o2 = { c:3, a:4 }
const obj = Object.assign(dest, o1, o2)


Object.freeze(obj)
obj.c = 1234
console.log(obj)