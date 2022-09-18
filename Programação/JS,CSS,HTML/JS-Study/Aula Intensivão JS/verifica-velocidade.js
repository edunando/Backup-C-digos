//Velocidade máxima de até 70
//A Cada 5km acima do limite você ganha 1 ponto
//Math.floor()
//caso pontos maior que 12 => 'Carteira Suspendida'

verificarVelocidade(200);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const KmporPonto = 5

    if (velocidade <= velocidadeMaxima)
        console.log('OK')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmporPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa')
        else
            console.log('Pontos:', pontos)
        
    }
}