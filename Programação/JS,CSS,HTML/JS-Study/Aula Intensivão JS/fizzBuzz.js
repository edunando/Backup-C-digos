// Divísivel por 3 => Fizz
// Divísivel por 5 => Buzz
// Divísivel por 3 e 5 => FizzBuzz
// Não divisível pro 3 ou 5 => entrada
// Não é um número => 'Não é um número'

const resultado = FizzBuzz('Uva');
console.log(resultado);

function FizzBuzz(entrada){

    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 == 0)
        return 'Fizz';
    if (entrada % 5 == 0)
        return 'Buzz'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    return entrada;
    
}

