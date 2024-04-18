let idade, condicao

idade=Number(prompt("Digite sua idade: "));
condicao=(prompt("Você é habilitado ou não habilitado? "));

if (idade >= 18 || condicao == "Habilitado") {
    alert("Pode dirigir.");
}

else {
    alert("Não pode dirigir.");
}