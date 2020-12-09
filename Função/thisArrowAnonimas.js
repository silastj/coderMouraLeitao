//THIS 
// È o referenciado que está no contexto da execução
// Uma observação forte, ele pode variar
// quando a função é criada com function() o click e o this não é window
// quando a função é arrawFunction => o click e o this é  window
// Na arrowFuncion => ele nunca vai variar
// Ele é o this no contexto da palavra no momento da execução


//THIS E A FUNÇÃO BIND
//A FUNÇÃO DELE FAZ AMARRAR O OBJETO NELE para pegar o this que 

const pessoa  = {
        manha: "Bom dia",
        falar(){
            return console.log(this.manha)
        }
    }   
pessoa.falar()
//ABAIXO ELE NAO TRAZ UNDEFINED E NAO CONSEGUE PEGAR O ATRIBUTO MANHA
//ELE DÁ CONFLITO EM MUNDO DA PROGRAMAÇÃO ORIENTAL OBJETOS AO MUNDO FUNCIONAL
const outraPessoa = pessoa.falar
outraPessoa() // undefined

//ELE AMARRA O OBJETO 
const novaPessoa = pessoa.falar.bind(pessoa)
novaPessoa() // bom dia

//NOVO JEITO USANDO O BIND
function Mulher() {
    this.idade = 0
    setInterval(() =>{
        if(this.idade < 10)
        this.idade++
        console.log(this.idade)
    }, 1000);
}
new Mulher // ele retorna NaN


// ABAIXO USANDO O ARROW FUNCTION ELE PEGA O THIS ACIMA DO IDADE
function Menina() {
    this.idade = 10
    setInterval(() => {
        if(this.idade <= 14)
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Menina // retorna 1 2 3 ...

// OU PODEMOS USAR O BIND
function Homem() {
    this.idade = 20

    setInterval(function() {
        if(this.idade < 21)
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000);
}

new Homem // return 20 21


// OUTRA FORMA, DECLARANDO UM THIS NA CONST
function casal() {
    this.idade =0

    const self = this
    setInterval( function() {
        self.idade++
        console.log(self.idade)
    }, 1000);
}

new casal

