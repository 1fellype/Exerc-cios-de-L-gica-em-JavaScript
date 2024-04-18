/* As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra. */

var qtdMacas, preco2;
 
alert("Custo das Maçãs");
 
var qtdMacas=Number(prompt("Digite a quantidade de maçãs: "));

 
if (qtdMacas >= 12) {
    qtdMacas * 1.00
    alert("O preço das Maçãs é de R$" + qtdMacas);
}

else {
    preco2 = qtdMacas * 1.30
    alert("O preço das Maçãs é de R$" + preco2);
}