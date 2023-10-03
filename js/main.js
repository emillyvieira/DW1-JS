console.log('Externo!') 

const nome = 'Emilly' //nao muda
var profissao = 'encanador' //descontinuado pois pode dar problema de duas variaveis iguais ao longo do codigo

const ligado = false

let idade = 39 //nao pode criar outra com o mesmo nome, mas pode altera-la
idade = 10
profissao = 'encanaDor'

// if(idade < 25) {
//     console.log('Jovem')
// } else {
//     console.log('Adulto')
// }

if(idade < 25) console.log('Jovem')
else console.log('Adulto')

ligado ? console.log('ligado') : console.log('desligado') //ternário - ternary

// let idade = 50
var proofissao = 'Encanador'

console.log(nome, idade, profissao)

//concatenação de Strings
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos')

//Template String
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

//Funções
function verificaIdade () {
    const inputIdade = document.getElementById('txt-idade') //pega o elemento  
    const pResultado = document.getElementById('resultado')
    const idade = inputIdade.value

    console.log(inputIdade.value)

if (idade < 25)
    pResultado.innerHTML = '<span style="color: #FF0000">Jovem</span>' //
else 
    pResultado.innerHTML = '<span style="color: #0000FF">Adulto</span>'
}

function adicionaProduto () {
    const nomeProduto = 
}

