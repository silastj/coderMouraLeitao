// Função construtora

function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico

    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const gol = new Carro
gol.acelerar()
console.log(gol.getVelocidadeAtual())

const ferrari = new Carro(400, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


//TIPOS DE DECLARAÇÃO
//OBS O INTERPRETADOR DO JAVASCRIPT LE ANTES TODAS AS FUNÇÕES
// A FUNÇÃO DECLARATION, PODEMOS SETAR O VALOR ANTES

console.log(`Soma: ${Soma(10,10)}`) // podemos chamar antes a função conforme citado acima

//FUNÇÃO DECLARATION
function Soma(a,b){
    return a + b
}
//FUNÇÃO EXPRESS
const soma = function(a,b){
    return a - b
}
//NAMED FUNCTION EXPRESSION
const somando = function somando(a,b){
    return a * b
}

//CONTEXTO LÉXICO

//CLOSURES
//CLosure é o escopo criado quando uma função é declarada
//Esse escopo permite a fução acessar a manipular variáveis externas à função

//contexto Léxico abaixo em ação
const x = "Global"

function novo(){
    const x = "Local"
    function velho(){
        return x
    }
    return velho
}
const menino = novo()
console.log(menino())  // resultado que retorna é Local

//FUNÇÕES FABRICA ( FACTORY )
// FUNÇÃO QUE RETORNA UM OBJETO

//FACTORY SIMPLES
function carro() {
    return{
        roda: 4,
        cor: "Preto"
    }
}
console.log(carro())

//FACTORY COMPOSTO
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Maça', 1,29))
const produto = new criarProduto('punto', 20000)
console.log(produto)

//CLASSES VS FUNCTION FACTORY 

class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`O nome da pessoa é ${this.nome}`) // com tthis
    }
}
const pp = new Pessoa('Silas')
pp.falar()

const criar = palavra => {
    return{
        fale: () => console.log(`O meu nome é ${palavra}`) // sem this
    }
}
const cc = criar('Amós')
cc.fale()

// FUNCÇÃO CONTRUTORA
function Mercado(produtos){
    this.produtos = produtos

    this.gritar = function () {
        console.log(`Meu lucro é ${produtos}`)
    }
}

const item = new Mercado('Assai')
item.gritar()

