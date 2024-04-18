/*  Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.  */
var numero1, numero2;
 
alert("Ordem crescente de dois números");
 
var numero1=Number(prompt("Digite o primeiro número: "));
var numero2=Number(prompt("Digite o segundo número: "));
 
if (numero1 > numero2) {
    alert(numero1 + ", " + numero2);
}

else {
    alert(numero2+ ", " + numero1);
}