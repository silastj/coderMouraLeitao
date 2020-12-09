const obj = {a: 1, b: 2, c: 3, soma()  {return a + b + c }}
console.log(JSON.stringify(obj))


class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }

}

class Pai  extends Avo{
    constructor(sobrenome, profissao ="Professor"){
        super(sobrenome)
        this.profissao = profissao
    }
}


class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

class ContaBancaria {
    constructor(cliente, numero){
        this.cliente = cliente
        this.numero = numero
        this.saldo = 0;

    }

    depositar(valor){
        this.saldo += valor
    }
}

class ContaCorrente  extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero);
        this.limite = 1000;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero);
        this.aniversario = new Date();
    }
}

let dd = new ContaPoupanca('Si', 321);
console.log(dd)

const cc = new ContaCorrente('Silas', 123);
cc.depositar(1000)
console.log(cc.saldo)

function ContaP( cliente, numero) {
    ContaBancaria.call(this, cliente, numero)
}
let cp = new ContaPoupanca('maria', 333);
console.log(cp)