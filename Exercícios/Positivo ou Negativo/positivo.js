/* Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).*/

var numero1;
 
alert("Positivo ou Negativo?");
 
var numero1=Number(prompt("Digite um número: "));
 
if (numero1 > -1) {
    alert("O número " + numero1 + " é positivo!");
}

else {
    alert("O número " + numero1 + " é negativo.");
}