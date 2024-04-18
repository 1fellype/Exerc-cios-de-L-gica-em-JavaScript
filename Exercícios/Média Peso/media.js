/* Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5 */

var media, nota1, nota2, nota3;
 
alert("Cálculo de Médias");
 
var nota1=Number(prompt("Digite a primeira nota do aluno: "));
var nota2=Number(prompt("Digite a segunda nota do aluno: "));
var nota3=Number(prompt("Digite a terceira nota do aluno: "));
 
media=((nota1 * 2 + nota2 * 3 + nota3 * 5) / 10);
 
alert("A média final do aluno: " + media);