//1
const carro = {}
console.log(carro)


//2
const carro2 = new Object
console.log(carro2)

//3 Funções constututoras
function Produto(nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDescont = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 8.99, 0.15)
const p2 = new Produto('Lapis', 1.20, 3.10)

console.log('Caneta : '+p1.getPrecoComDescont(),'Lapis :' + p2.getPrecoComDescont())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/ 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 1200, 20)

console.log('João: '+ f1.getSalario(),'Maria: ' + f2.getSalario())


//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Um função famosa que retorna objeto
const fronJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fronJSON.info)