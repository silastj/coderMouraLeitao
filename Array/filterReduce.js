//FILTER é filtrar o Array por item ou outra forma que vc pretende

const motos = [
    {marca: "Honda", preco: 100, cross: true},
    {marca: "Yahamaha", preco: 200, cross: true},
    {marca: "Suzuki", preco: 300, cross: true},
    {marca: "Banditi", preco: 500, cross: false},
]
//USANDO FUNCTION
console.log(motos.filter(function(p) {    
    return p.preco >= 300
}))
// USANDO ARROW FUNCTION
console.log(motos.filter((p) => {
    return p.marca == 'Honda'
}))

const caro = moto => moto.preco >= 200
const yesCross = moto => moto.cross === true

const res = motos.filter(caro).filter(yesCross)
console.log(res)

//CRIANDO O NOSSO PROPRIO FILTER
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i ++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
console.log(motos.filter2(caro))


//REDUCE 

const estudantes = [
    {nome:'Pedro', idade: 21, bolsista: true},
    {nome:'Maria', idade: 29, bolsista: true},
    {nome:'Rita', idade: 31, bolsista: false},
    {nome:'João', idade: 18, bolsista: true},
    {nome:'Italo', idade: 41, bolsista: true},
]
console.log(estudantes)
console.log(estudantes.map(e => e.idade)) // RETURNA A IDADE
const Rsass = estudantes.map(e => e.idade).reduce(function(acumulador, atual){
    console.log('acumulador: '+acumulador, 'atual: '+atual)
    return acumulador + atual // retorna a soma de todas as idade com o valor total no final
})
console.log('Sem valor inicial: '+ Rsass)

//PODEMOS INICIAR COM UM VALOR ( 10 ) PODEMOS TAMBEM ADD UM ARRAY NO LUGAR DO ( 10 )
const Raaa = estudantes.map(e => e.idade).reduce(function(acumulador, atual){
    console.log('acumulador: '+acumulador, 'atual: '+atual)
    return acumulador + atual // retorna a soma de todas as idade com o valor total no final
}, 10)

console.log('Com o valor inicial: '+ Raaa)

//TODOS OS ALUNOS SÃO BOLSISTAS ?
//parametro abaixo resultado é o acumulador
const totalBolsistas = (resultado, bolsista) => resultado && bolsista  // esse seria um reduce
console.log('Resultado: todos alunos são bolsistas ? '+estudantes.map(a => a.bolsista).reduce(totalBolsistas))

//ALGUM ALUNO É BOLSISTA ?
const alunoBolsista = (anterior, bolsista) => anterior || bolsista 
console.log('Resutlado: Tem algum aluno bolsista ?' + estudantes.map(a => a.bolsista).reduce(alunoBolsista))

//CRIANDO O SEU PROPRIO REDUCE
Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = this[0]
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
const ssoma = (total, valor) => valor + total
const nnumeros = [1,2,3,4]
console.log(nnumeros.reduce(ssoma,10))

