/* Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */

var idade, ano, atual;
 
alert("Pode votar?");
 
var ano=Number(prompt("Digite o ano que você nasceu: "));
var atual=Number(prompt("Digite o ano atual: "));
 
idade = atual - ano

if (idade >= 18){
    alert("Você pode votar!");
}

else {
    alert("Você não pode votar.");
}