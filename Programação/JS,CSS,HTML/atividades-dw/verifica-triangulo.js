let lado1 = 3
let lado2 = 4
let lado3 = 4

if (verificaTriangulo(lado1,lado2,lado3) === false)
    console.log ('Não é um triângulo')
else definetipotrangulo(lado1,lado2,lado3)

function verificaTriangulo(valor1,valor2,valor3){
    if (valor1 < (valor2 + valor3) && valor2 < (valor1 + valor3) && valor3 < (valor1+valor2))
        console.log('É um triângulo');
    else
        return false
}

function definetipotrangulo (valor1, valor2, valor3){
    if (valor1 === valor2 && valor2 === valor3 && valor3)
        console.log("triângulo equilatero")
    else if (valor1 != valor2 && valor2 != valor3 && valor3 != valor1)
            console.log("triângulo escaleno")
    else
            console.log("triângulo isoceles")
}

