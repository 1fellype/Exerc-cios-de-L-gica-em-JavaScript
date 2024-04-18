/* Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius. */
 
var fahrenheit, celsius;
 
alert("Transformando Fahrenheit em Celsius");
 
var fahrenheit=Number(prompt("Digite a temperatura em Fahrenheit: "));
 
celsius=((fahrenheit - 32) * 5 / 9);
 
alert("Em celsius: " + celsius + "°C");