/* Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso 
contrário escrever NÃO É MAIOR QUE 10! */

var numero1;
 
alert("É maior que 10?");
 
var numero1=Number(prompt("Digite um número: "));
 
if (numero1 > 10) {
    alert("O número " + numero1 + " é maior que 10.");
}

else {
    alert("O número " + numero1 + " é menor que 10.");
}
