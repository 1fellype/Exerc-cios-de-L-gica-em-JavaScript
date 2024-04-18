/* Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */

let contadora = 1, numero, tabuada 

numero=parseFloat(prompt("Digite um número: "))

while (contadora < 11) {
    tabuada = numero * contadora

    console.log(`${numero} X ${contadora} = ${tabuada}`)

    contadora++
}

