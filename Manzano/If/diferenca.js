/* Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.*/

let numero1, numero2, diferenca;

numero1=Number(prompt("Digite um valor: "));
numero2=Number(prompt("Digite outro valor: "));


if (numero1 > numero2) {
    diferenca = numero1 - numero2
    alert(`A diferença dos valores é ${diferenca}`)
}

else {
    diferenca = numero2 - numero1    
    alert(`A diferença dos valores é ${diferenca}`)
}