const alunos = [
    {nome:'Silas', nota: 9},
    {nome:'Santos', nota: 6}
]
//IMPERATIVO
let total1 = 0
for(let i = 0;i < alunos.length;i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//DECLARATIVO
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)


//CONCAT 
//varios array em um unico array, lembrando que é gerado um novo array

const filhas = ['Paula', 'Maria', true]
const filhos = ['Marcos', 'Rafael',10]

const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

//FLATMAP
//união do CONCAT com o MAP

const escola = [{
        nome: 'Turma 1',
        alunos: [{
            nome: 'Silas',
            nota: 10
        },
        {
            nome: 'Ana',
            nota: 9
        }]
    },{
        nome: 'Turma 2',
        alunos:[{
            nome: 'Samara',
            nota:11
        },
        {
          nome:'Pedro',
          nota:8  
        }]
    }]
    const getNotaDoALuno = aluno => aluno.nota
    const getNotasDaTurma = turma => turma.alunos.map(getNotaDoALuno)
    
    const nota1 = escola.map(getNotasDaTurma)
    console.log(nota1)

    //CRIANDO UM FLATMAP ( o concat mais o map juntos )
    Array.prototype.flatMap = function(callback){
        return Array.prototype.concat.apply([], this.map(callback))
    }
    const nota2 = escola.flatMap(getNotasDaTurma)
    console.log('flatMap: '+ nota2)