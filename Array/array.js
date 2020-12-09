// O array no Javascript é um objeto
// Pq ele não tem chave e sim indice começando do zero
console.log(typeof Array)// function
console.log(typeof new Array) // Object
console.log(typeof []) // Array literal é um Object

const aprovados = ['ana', 'joao', 'pedro']
console.log(aprovados)
console.log(aprovados.length)
aprovados[4] = 'tito'
console.log(aprovados)
aprovados.push('abia')
console.log(aprovados)
console.log(aprovados[3] == undefined)
console.log(aprovados[4] == undefined)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

//SPLICE ELE VAI EXCLUI DO PRIMEIRO ELEMENTO DOIS 
// DEPOIS VAI ADD OS DEMAIS ELEMENTOS QUE ESTÁ DENTRO DO SPLICE
aprovados.splice(1,2,'Novo', 'Velho')
console.log(aprovados)


//METODOS NO ARRAY
const pilotos = [ 'Vettel', 'Schumacher', 'Massa', 'Barrichello']
console.log(`INICIO => ${pilotos}`)
//RETIRANDO do ultimo array
pilotos.pop();
console.log('POP => '+pilotos)
//INCLUINDO NO FINAL
pilotos.push('Kubica')
console.log('PUSH => '+ pilotos)
//REMOVENDO O PRIMEIRO DO ARRAY
pilotos.shift();
console.log('SHIFT => ' + pilotos)
//ADD NOVO ITEM NO INICIO DO ARRAY
pilotos.unshift('Hamilton');
console.log('UNSHIFT => ' + pilotos)
//SPLICE PODE ADICIONAR E REMOVER
//2 apartir do indice 2
//0 não vou remover ninguem
// após eles será inseridos esses valores( 'Bottas', 'Senna')
pilotos.splice(2,0, 'Bottas', 'Senna')
console.log('SPLICE => ' + pilotos)
//TIRANDO O 3 INDICE DO ARRAY
pilotos.splice(3,1)
console.log('SPLICE INDICE 3 => ' + pilotos)
// SLICE ELE CRIA UM NOVO ARRAY , E TRAZ APARTIR DO 2 INDICE
const algunspilotos = pilotos.slice(2)
console.log('SLICE INDICE 2 => ' + algunspilotos)
//PEGANDO DO 1 AO 3 ELEMENTO DO ARRAY
const mulheres = ['ela','menina', 'linda', 'princesa', 'velha']
console.log('MULHERES => '+ mulheres)
const alguns2pilotos = mulheres.slice(1,4)
console.log('SLICE 1 AO 4 => ' + alguns2pilotos)

