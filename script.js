var boolean = true;
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

var numero = 10;
console.log(`A variável ${numero} tem o tipo ${typeof(numero)}`);

// usando var global 
var nome = "Thiago";

// usando var local
function nomeDaFuncao() {
    var nome = "Thiago";
    console.log(nome);
}

nomeDaFuncao();

const constante = 'constante';
console.log(constante);


// comparação 
var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// operadores aritméticos (+, -, *, **, /, **0.5 - resolver raiz quadrada)

var mult = 2 * 5;
console.log(mult);

var div = 10 / 2;
console.log(div);

// operadores relacionais
// maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

var menorOuIgual = 5 <= 7;
console.log(menorOuIgual)

// operadores lógicos 
// & - todos os valores devem ser true 
var e = true && true;
console.log(e);

// || - somente um valor deve ser true 
var ou = true || false;
console.log(ou); 

// ! - inverte os valores
var inverte = !true;
console.log(inverte);
