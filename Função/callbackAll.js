//CALLBACK É CHAMAR DE VOLTA
//PADRÃO DE PROJETO OBERSEV MAIS UTILIZADO
const fabricantes = ["Volks", "Fiat", "Audi"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

console.log(fabricantes.forEach(imprimir))
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

// =======================================

//SEM CALLBACK
const notas = [ 2,2.5,5,7,10,12,3.5,7.7]
const notaMenores = []

for(i = 0;i < notas.length; i++){// PODEMOS FAZER TB for(i in notas)
    if(notas[i] < 7){
        notaMenores.push(notas[i])
    }
}
console.log(notaMenores)

//COM  CALLBACK
const notaMenores2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notaMenores2)
//MAIS RESUMIDO
const notaMenores3 = notas.filter(nota => nota < 7)
console.log(notaMenores3)

//OU ISOLANDO A FUNÇÃO
const funcaoNova = (nota => nota < 7) // função pode ser alterada sem mexer no restante do codigo
const notaMenores4 = notas.filter(funcaoNova)
console.log(notaMenores4)

// =======================================

const input = document.querySelector('input')
input.addEventListener('keyup',function(){
    const valor = input.value.length
    console.log(valor)
})

document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('erro')
}

//===================================================