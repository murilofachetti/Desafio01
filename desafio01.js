// Descrição:Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os 
// valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

let num = prompt('Digite um número inteiro positivo: ');
let inteiro = parseInt(num);


if (isNaN(inteiro) || inteiro <= 0 || !Number.isInteger(inteiro)) {
    alert('Por favor, digite um número inteiro positivo válido.');
} else {
    let resultado = somatorioTotal(inteiro);
    alert(`O somatório dos múltiplos de 3 ou 5 até ${num} é: ${resultado}`);
}

function somatorioTotal(num) {
    let somatorio = 0;

    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    return somatorio;
}

