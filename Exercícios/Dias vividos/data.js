let anos=Number(prompt("Digite sua idade em anos: "));
let meses=Number(prompt("Digite a quantidade de meses completos que passou do seu último aniversário: "));
let dias=Number(prompt("Digite a quantidade de dias que passou do seu mêsversário: "));

let idade=Number(anos * 365 + meses * 30 + dias);
alert("Você completou " + idade + " dias de vida!");