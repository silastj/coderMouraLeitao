//ARROW FUNCTION 
// mais reduzido e o this associado ao contexto

//FORMA ANTIGA
let dobro = function(a){
    return 2 * a
}
//FORMA ARROW FUNCTION
dobro = (a) => {
    return 2 * a
}

//TIRANDO O CORPO DA FUNÇÃO É RETORNO IMPLICITO
dobro = a => 2 * a
console.log('dobro com o PI: '+dobro(Math.PI))

//OUTRO EXEMPLO
let ola = function() {
    return 'olá'
}

//NOVO EXEMPLO
ola = () => 'Olá' // passando nenhum paramentro
oi = _ => 'OI' // passando tb nenhum parametro, mens usado


console.log(ola())
console.log(oi())


//FUNÇÕES ANONIMAS
const somama = function(x,y){
    return x * y
}

const imprimirResutado = function(a,b, operacao = somama){
    console.log(operacao(a,b))
}
imprimirResutado(2,2)
imprimirResutado(4,2, somama)
imprimirResutado(2,1)
imprimirResutado(3,1, function (x,y) {
    return x - y
})
imprimirResutado(5,1, (x,y) => x/y)

const menino = {
    falar: function(){
        console.log('FALANDO ....')
    }
}
menino.falar()

const menina = {
    falar: ()=> {
        return console.log('olá')
    }
}

menina.falar()