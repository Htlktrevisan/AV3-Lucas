/*Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela. */

//variaveis
let peso1
let peso2
let peso3
let nota1
let nota2
let nota3
let media 

alert("Programa feiro para calcular a média dos alunos de uma faculdade, considerando o peso da nota")

//Entrada de Dados 
peso1 = Number(prompt("Qual é o peso da nota da atividade indivudual?"))
peso2 = Number(prompt("Qual é o peso da nota em trabalho em equipe? "))
peso3 = Number(prompt("Qual é peso da nota do projeto final? "))
alert("Espere um pouco...")

nota1 = Number(prompt("Qual seria a nota do trabalho individual? "))
nota2 = Number(prompt("Qual seria a nota do trabalho em equipe? "))
nota3 = Number(prompt("Qual seria a nota do projeto final? "))

//Calculo 
media = (peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)

//Saída de Dados
alert("Um minuto...") 
alert("O resultado da média ponderada das 3 notas é de: \n\n" + media.toFixed(1))
