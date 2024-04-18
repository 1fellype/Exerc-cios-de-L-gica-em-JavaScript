/* Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o
valor da média do aluno para qualquer condição.*/

let nota1, nota2, nota3, nota4, media;

nota1=Number(prompt("Digite a primeira nota do aluno: "));
nota2=Number(prompt("Digite a segunda nota do aluno: "));
nota3=Number(prompt("Digite a terceira nota do aluno: "));
nota4=Number(prompt("Digite a quarta nota do aluno: "));

media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 5) {
    alert(`Aluno aprovado! ${media}`)
}

else {
    alert(`Aluno reprovado! ${media}`)
}