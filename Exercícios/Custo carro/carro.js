/* 10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
 distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
 seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
 calcular e escrever o custo final ao consumidor. */

var taxa, custoFinal, custo;
var custo=Number(prompt("Digite o custo de fábrica do veículo: "));
var taxa=(73 / 100); // Soma do custo de distribuição (28%) mais 43% de impostos
custoFinal=(custo * taxa + custo);

alert("O custo final do veículo: R$" + custoFinal);