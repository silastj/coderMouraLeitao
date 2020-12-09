//OBJECT CREATE pode ser extends do prototype acima como parametro

const pai = { nome:'Sebastian', corCabelo:'preto'}

const filho = Object.create(pai)

filho.nome = "Amós"//alterando o nome de filho
console.log(filho.corCabelo)

const filho2 = Object.create(pai, {
    //writable: false => valor que não pode ser mudado
    //enumerable: true => ele permite ser percorrido usando o key foreach ou for
    nome: {value: 'Silas',  writable: false, enumerable : true}
})


console.log(filho2.nome)
filho2.nome = 'Pereira'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

//OLHANDO PELOS KEYS TEM NOME
console.log(Object.keys(filho))
console.log(Object.keys(filho2))


for ( let key in filho2){
    // console.log(key)
    //hasOwnProperty => essa propriedade pertence a ela
    //Verificando se veio do proprio objeto ou veio por herança

    filho2.hasOwnProperty(key) ? 
    console.log(`Pelo proprio objeto: ${key}`) : console.log(`por herança:${key}`)
}
