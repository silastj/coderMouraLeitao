//PASSANDO UMA EXPRESSÃO( CONDICÃO)
function boaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado: '+ nota)
    }
}
boaNoticia(8)
boaNoticia(4)

//PASSANDO UMA VALOR FALSE OU VERDADEIRO
function eVerdade(valor){
    if(valor){
        console.log(`É verdadeiro ${valor}`)
    }
}

eVerdade()
eVerdade(null)
eVerdade(undefined)
eVerdade(NaN)
eVerdade("")
eVerdade(0)
eVerdade(-1)
eVerdade(' ')
eVerdade('?')
eVerdade([])
eVerdade([1,2])
eVerdade({})

//FUNÇÃO SEM AS {}
function teste(valor){
    if(valor > 7)
    console.log('teste:' + valor)
}
teste(8)

//BLOCO DE CONTROLE IF E ELSE
//PODEMOS COLOCAR COM { } OU SEM 

const imprimiR = function(nota){
    if(nota > 7){
        console.log('acima de 7? Aprovado R: ' + nota)
    } else {
        console.log('abaixo do 7? Reprovado R:' + nota)
    }
}
imprimiR(10)
imprimiR('olá') // Atenção para linguagem com tipagem fraca


//ENTRE OS DOS VALORES RETORNA VERDADEIRO, CASO CONTRARIO FALSE
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}
const ImprimirNota = function(nota){
    if(nota.entre(9,10)){
        console.log('Excelente')
    } else if (nota.entre(7,8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log('Nota Invalida')
    }
    console.log('FIm')
}

ImprimirNota(10)
ImprimirNota(7.6)
ImprimirNota(6)
ImprimirNota(2)
ImprimirNota(-1)
ImprimirNota(11)

//INICIO SWITCH
// O famoso else no case é default
// Sempre precisamos colocar break para sair da condição, se não ele segue as outras condições


const imprimirRR = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Excelente')
        break
        case 8: case 7:
            console.log('Aprovado')
        break
        case 6: case 5: case 4:
            console.log('Recuperação')
        break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
        break
        default:
            console.log('Nota invalida')
    }
}
imprimirRR(10)
imprimirRR(7)
imprimirRR(4)
imprimirRR(2)
imprimirRR(11)

//BREAK E CONTINUE
const numeros = [ 1,2,3,4,5,6,7,8,9,10]
for(i in numeros){
    if(i == 5){
        break
    }
    console.log(`${i} =break= ${numeros[i]}`)
}

for(a in numeros){
    if(a == 5){
        continue
    }
    console.log(`${a} =continue= ${numeros[1]}`)
}

//WHILE Laço de repetição( estrutura de repetição )
// Ele executa como verdadeiro e quando estiver falso ele sai

function getInteiroALeatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
while( opcao != -1) {
    opcao = getInteiroALeatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima!')

//DO WHILE  Raramente usada!
//Ele passa primeiro o do e depois o bloco e a condição abaixo no while

function getInteiroAleatorioMeio(min,max){
    const recebido = Math.random() * (max - min) + min
    return Math.floor(recebido)
}
let money = 0

do{   
    money = getInteiroAleatorioMeio(-1, 10)
    console.log(`Opção ecolhida foi ${money}.`)
} while  (money != -1)

console.log('Até a próxima!')

//Estrutura FOR 
//( declaracao de uma variavel, expressão , incremento )

//Comparar o WHile com o For

//(1)
let contador = 1
while(contador <= 10){
    console.log(`Contagem: ${contador}`)
    contador++
}
//(2)
for(let i = 1; i <= 10; i++){
    console.log(`i é: ${i}`)
}
const notas = [1.2, 2, 6, 7.8, 10.1]
for(let resultado = 0; resultado < notas.length; resultado++){
    console.log(`notas: ${notas[resultado]}`)
}
console.log(notas.length)

//Estrutura FOR/IN , podemos usar o foreach, map, reduce , filter (versão mais nova)
//For in no objeto ou no array
// Podemos usar no Objeto , mas lembrando temos novas versões


//Exemplo com Array
const frutas = ['maça', 'banana', 'melão', 'abacate', 'uva']
for(i in frutas){
    console.log(i, frutas[i])
}

//Exemplo com um Objeto
const carro = {
    marca:'FIAT',
    porta: 4,
    cor: 'Amarelo',
    pneus: 5
}
for(i in carro){
    console.log(carro.marca)
    console.log(`${i} = ${carro[i]}`)
}





