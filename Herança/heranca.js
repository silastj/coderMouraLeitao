const ferrari = {
    modelo: 'f40',
    velocidade: 324
}

const volvo = {
    modelo: 'v40',
    velocidade: 300
}

//PROCURA ONDE TIVER ACIMA ( PAI ) OS PROTOTYPE
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

// QUANDO CHEGAR NO RESULTADO NULL ELE CHEGOU AO FIM
console.log(Object.prototype.__proto__)