function MeuObjeto() {

}

console.log(MeuObjeto.prototype)

const ob1 = new MeuObjeto
const ob2 = new MeuObjeto

console.log(ob1.__proto__ === ob2.__proto__)

// aula 05 abaixo

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// add reverse dentro do prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Code')
console.log('Escola Code'.reverse())

// add reverse dentro do prototype

Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c','d'].first())

//EVITANDO MODIFICAÇÕES

//Object.preventExtensions
//ELE NÃO DEIXA ADD NOVOS ATRIBUTOS

const product = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(product))

product.nome = 'Novo'
product.title = "Title"
delete product.nome

console.log(product)

//OBJECT.SEAL
//ELE NAO DEIXA ADD NOVO E DELETAR

const casa = { quarto: 'Cama', banheiro: 'chuveiro'}
Object.seal(casa)
console.log('Selado: ', Object.seal(casa))

delete casa.quarto
console.log(casa)
