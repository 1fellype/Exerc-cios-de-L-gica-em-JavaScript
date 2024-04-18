/* Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
aluno é aprovado). Escrever também a média calculada. */

var media, nota1, nota2;
 
alert("Cálculo de Médias");
 
var nota1=Number(prompt("Digite a primeira nota do aluno: "));
var nota2=Number(prompt("Digite a segunda nota do aluno: "));
 
media=((nota1 + nota2) / 2);
 
if (media >= 6){
    alert("A média final do aluno: " + media + " = Aprovado! :)");
}

else {
    alert("A média final do aluno: " + media + " = Reprovado :(");
}
