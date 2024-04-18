/* Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um
valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se
de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. */

let numero1, diferenca;

numero1=Number(prompt("Digite um valor: "));

if (numero1 < 0) {
    diferenca = numero1 * - 1
    alert(`Seu número era negativo e agora é positivo, ${diferenca}`);
}

else {  
    alert(`O número ${numero1} é positivo.`)
}