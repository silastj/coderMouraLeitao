//Cadeia de prótipos ( prototype chain )

const avo = { attr1: "A"}

const pai = { __proto__: avo, attr2: "B" }

const filho = { __proto__: pai, attr3: "C" }

console.log(filho.attr1)// Ele sai procurando de baixo para cima
// resultado A

const carro = {
    veloA: 0,
    veloM: 100,
    aceleraMais(delta){
        if(this.veloA + delta <= this.veloM) {
            this.velA += delta
        } else{
            this.veloA = this.veloM
        }
    },
    status(){
        return `${this.veloA}KM/H DE ${this.veloM}KM/H`
    }
}

const ferrari = {
    modelo: 'f40',
    velM: 300
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${this.status()}`
    }
}

//UNINDO E DEFININDO A RELAÇÃO DE PROTOTIPOS

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo)


ferrari.aceleraMais(200)
console.log(ferrari)
