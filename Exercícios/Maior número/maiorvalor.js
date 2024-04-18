/* Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. */
var numero1, numero2;
 
alert("Qual é o maior?");
 
var numero1=Number(prompt("Digite o primeiro número: "));
var numero2=Number(prompt("Digite o segundo número: "));
 
if (numero1 > numero2) {
    alert("O maior número é o primeiro: " + numero1);
}

else {
    alert("O maior número é o segundo: " + numero2);
}