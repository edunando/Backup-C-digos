/* Operadores Aritiméticos

let salario = 100

// + , - , * , / , **

console.log(salario + salario)
console.log(salario - salario)
console.log(salario / salario)
console.log(salario ** salario)

// ++ --

console.log(salario++)
console.log(salario)

*/

/* Operadores de atribuição

let valorPC = 5000

valorPC -= valorPC
console.log(valorPC)

*/

/* Operadores de Igualdade
//Igualdade Estrita
console.log( 1 === 1 );
console.log( '1' === 1);
//Igualdade Solta
console.log( 1 == 1);
console.log( '1' == 1);
// Sempre usar a estrita de preferência
*/

/* Operador Ternário
//Exemplo: Caso um cliente tenha mais de 100 pontos ele é do tipo premium
// Muito utilizado para substituir o if e else
let pontos = 101
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);
*/

/* Operadores Lógicos
//Operador Lógico e (&&) Retorna TRUE se os dois operandos forem true
//Operador Lógico ou (||) Retorna true se um dos operandos forem true
//Operador Lógico NOT (!) Retorna false caso seja recusado
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar)
*/

/* Comparações não Booleanas
//Falsy : undefined, null, 0, false, '', Nan - not a number
//Truthy
let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);
*/