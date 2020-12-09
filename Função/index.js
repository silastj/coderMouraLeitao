// FUNÇÃO EM JS É FIRST-CLASS OBJECT ( CITIZENS)
// HIGHER-ORDER FUNCTION

//CRIAR DE FORMA LITERAL
function func1(){

}
function func1(){

}
//CRIAR UMA FUNÇÃO ARMAZENANDO NUMA VARIAVEL
const func2 = function(){

}
const soma = function(){

}
//ARMAZENAR EM UM ARRAY
const funcAraay = [function (a,b) { return a+b}, func1, func2]
console.log('FuncArray: '+funcAraay[0](2,3))

//ARMAZENAR EM UM ATRIBUTO DE OBJETO
const obj = {}
obj.falar = function() {
     return 'olá'
}
console.log('Armazenar a função em um atributo: ' + obj.falar())

//PASSAR UMA FUNÇÃO COMO PARAMETRO
function run(func){
    func()
}
function corrida(correr){
    correr()
}
run(function() { console.log('Executando ...')})

//UMA FUNÇÃO PODE RETORNAR/ CONTER UMA FUNÇÃO
function somar(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
somar(2,3)(4)
//ou
const totalSoma = somar(2,3)
totalSoma(4)

//PARAMETROS E RETURN SÃO OPCIONAIS
function area(largura,altura){
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else {
        return area
    }
}

console.log(area(2,2)) // 4
console.log(area(2)) //NaN faltou um parametro, returna undefenid junto com um parametro igual NaN
console.log(area()) // NaN sem parametro retorna undefined um resultado de NaN
console.log(area(2,3,4,5,6)) // 6
console.log(area(2,2)) // 4

//PARAMETROS E VARIAVEIS, Passando ou não
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }    
    return soma
}
console.log('função soma sem parametro: '+soma())

//RECEBENDO O VALOR PADRÃO COMO PARAMETRO
//CASO NÃO PASSE O VALOR ELE RECEBE O NUMERO 1

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(2,2,2), soma1(0,0,0)) // esse ultimo dá bug retorna 3

//SEGUNDA FORMA
function soma2(a,b,c){
    a = a!== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(2,2,2), soma2(0,0,0))

//OUTRA FORMA DO ES2015
//UMA DAS MELHORES FORMAS PARA APLICAR OU A FORMA ACIMA
function soma3(a=1,b=1,c=1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(2,2,2), soma3(0,0,0))