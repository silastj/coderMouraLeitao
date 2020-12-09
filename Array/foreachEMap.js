//FOREACH ele recebe 3 PARAMETROS
// nome - indice - array 

const carros = ['gol','fusca','golf', 'kombi', 'palio']
carros.forEach(( item, key)=> {
        console.log(`FOREACH => : ${key} : ${item}`)
})

// => CRIANDO UM FOREACH com os 3 parametros

Array.prototype.forEach2 =  function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i , this)
    }
}
carros.forEach2((item => {
    console.log('FOREACH2 => ' + item)
}))

// => MAP
// Ele Mapeia um array e gera outro array que pode ser modifações
//Ele é um for , mas ele faz modificações e ele gera um novo array modificado

const inteiro = [1,2,3,4,5,6,7,8,9,10]

let res = inteiro.map( (e)=> {
    return e * 2
})
console.log('VELHO ARRAY => ' + inteiro, 'NOVO ARRAY MODIFICADO=> ' + res)
//FUNÇÕES MODIFICADORAS
const dez = e => e + 10
const dois = e => e * 2
const real = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`
console.log(real)
const rr = inteiro.map(dez).map(dois).map(real)
console.log(rr)

const mercado =[
    '{"nome": "melão", "preço": 4.60}',
    '{"nome": "Banana", "preço": 3.50}',
    '{"nome": "Laranja", "preço": 5.50}',
    '{"nome": "Uva", "preço": 6.10}'
]
console.log(mercado)
// => RETORNAR UM ARRAY APENAS COM OS PREÇOS ?

//USAREMOS DOIS MAP
//1 PASSO: TRANSFORMAR AS STRINGS EM OBJETO 
//2 PASSO: RECEBE O OBJETO 
const paraObjeto  = json => JSON.parse(json)   // 1 PASSO
const apenasPreco = produto => produto.preço // RETORNA APENAS PRECO

const resultado = mercado.map(paraObjeto).map(apenasPreco)
console.log(resultado)


//  => CRIAREMOS O NOSSO PROPRIO MAP
Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i ++){
        newArray.push(callback(this[i], i ,this))
    }
    return newArray
}

const hortfruti =[
    '{"nome": "melão", "preço": 4.60}',
    '{"nome": "Banana", "preço": 3.50}',
    '{"nome": "Laranja", "preço": 5.50}',
    '{"nome": "Uva", "preço": 6.10}'
]
console.log(hortfruti)
//RETORNAR UM ARRAY APENAS COM OS PREÇOS ?

//USAREMOS DOIS MAP
//1 PASSO: TRANSFORMAR AS STRINGS EM OBJETO 
//2 PASSO: RECEBE O OBJETO 
const paraObjeto2  = json2 => JSON.parse(json2)   // 1 PASSO
const apenasPreco2 = produto2 => produto2.preço // RETORNA APENAS PRECO

const resultado2 = hortfruti.map2(paraObjeto2).map2(apenasPreco2)
console.log(resultado2)
