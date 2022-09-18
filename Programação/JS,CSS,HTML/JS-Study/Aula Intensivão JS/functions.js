//testando funções

let corSite = 'Azul'

function resetacor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetacor('Vermelho','Escuro');
console.log(corSite);


function MultiplicapoDois(valor){
    return valor * 2;
};

let multiplicacao = MultiplicapoDois(5);
console.log(multiplicacao);
