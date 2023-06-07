// Criação do Array com Números Romanos e os valores dos Números Arábicos.
let numerosRomanos = [
    { valor: 1000, romano: 'M'},
    { valor: 900, romano: 'CM'},
    { valor: 500, romano: 'D'},
    { valor: 400, romano: 'CD'},
    { valor: 100, romano: 'C'},
    { valor: 90, romano: 'XC'},
    { valor: 50, romano: 'L'},
    { valor: 40, romano: 'XL'},
    { valor: 10, romano: 'X'},
    { valor: 9, romano: 'IX'},
    { valor: 5, romano: 'V'},
    { valor: 4, romano: 'IV'},
    { valor: 1, romano: 'I'},
];

// Criação da função para converter os Números Arábicos para Números Romanos.
function converter(numeros){
    let romanos = '';
    let valor = numeros;
    for(let i=0; i < numerosRomanos.length; i++ ){
        if(numerosRomanos[i].valor <= valor) {
            valor = valor - numerosRomanos[i].valor;

            romanos = romanos + numerosRomanos[i].romano;

            i--;
        }
    }

    document.getElementById('romanoNovo').value = romanos; //adiciona valor ao input Número Romano
    console.log(`Meu numero ${numeros} é ${romanos} em Romano`);
}

//converter(27)
    // Fazendo a ligação com a página index.html, ao clicar no botão converter, entra na função criada "converter" e temos o resultado.
    document.getElementById('converter').addEventListener('click', function(){
        let valor = document.getElementById('numeroNovo').value;

        converter(valor);
    });