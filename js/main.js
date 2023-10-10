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

    // console.log(inputIdade.value)

if (idade < 25)
    pResultado.innerHTML = '<span style="color: #FF0000">Jovem</span>' //
else 
    pResultado.innerHTML = '<span style="color: #0000FF">Adulto</span>'
}

function adicionaProduto() {
    const nomeProduto = document.getElementById('nome-produto').value || 'Nome';
    const precoProduto = document.getElementById('preco-produto').value || 'XX,xx';
    const imagemProduto = document.getElementById('imagem-produto').value || 'https://static.vecteezy.com/ti/vetor-gratis/p1/5006046-enviar-presente-cartao-referencia-codigo-conceito-ilustracao-plano-design-eps10-moderno-elemento-grafico-para-pagina-de-destino-vazio-estado-ui-infografico-icone-vetor.jpg';
  
    const cardNovo = `
      <div class="card horizontal">
        <img src="${imagemProduto}" alt="produto" width="198px">
        <div>
          <h3>${nomeProduto}</h3>
          <p>R$${precoProduto}</p>
        </div>
      </div>
    `;
  
    const container = document.getElementById('container');
    container.innerHTML += cardNovo;
  
    document.getElementById('nome-produto').value = '';
    document.getElementById('preco-produto').value = '';
    document.getElementById('imagem-produto').value = '';
  }
  
// anonima

// const adicionaProduto = () => {
//   const nomeProduto = document.getElementById('nome-produto').value || 'Nome';
//   const precoProduto = document.getElementById('preco-produto').value || 'XX,xx';
//   const imagemProduto = document.getElementById('imagem-produto').value || 'https://static.vecteezy.com/ti/vetor-gratis/p1/5006046-enviar-presente-cartao-referencia-codigo-conceito-ilustracao-plano-design-eps10-moderno-elemento-grafico-para-pagina-de-destino-vazio-estado-ui-infografico-icone-vetor.jpg';

//   const cardNovo = `
//     <div class="card horizontal">
//       <img src="${imagemProduto}" alt="produto" width="198px">
//       <div>
//         <h3>${nomeProduto}</h3>
//         <p>R$${precoProduto}</p>
//       </div>
//     </div>
//   `;

//   const container = document.getElementById('container');
//   container.innerHTML += cardNovo;

//   document.getElementById('nome-produto').value = '';
//   document.getElementById('preco-produto').value = '';
//   document.getElementById('imagem-produto').value = '';
// }



const testeFuncAnonima = function() {
  console.log('função anonima')
}

testeFuncAnonima()

const funcArrow = () => {
  console.log('funcao arrow')
}

funcArrow()

const soma = (value1, value2) => {
  const resultado = value1 + value2
  return resultado
}

const soma10 = value1 => console.log(value1 + 10)

soma10(5)

let res = soma(20, 10)

const var1 = 10
const var2 = 8 

// res = soma(var1, var2)

// console.log(parseInt())

const calculadora = (operador) => {






}
