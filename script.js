var boolean = true;
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

var boolean = true;
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

// usando var global 
var nome = "THIAGO";
var nome = "Thiago";

// usando var local
function nomeDaFuncao() {
    var idade = 19;
    console.log(idade);
}
;

const constante = 'constante';
console.log(constante);


// comparação 
var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// operadores aritméticos

var mult = 2 * 5;
console.log(mult);

// operadores relacionais
// maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// operadores lógicos 
// & - todos os valores devem ser true 
var e = true && true;
console.log(e);

// || - somente um valor deve ser true 
// ! - inverte os valores
var inverte = !true;
console.log(inverte);
