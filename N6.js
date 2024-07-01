/* Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade. */

//Variaveis 
let velocidadeMediaDasTrilhas
let distanciaPercorrida
let duraçãoDailha
let velocidade 

//Entrada de Dados
distanciaPercorrida = Number(prompt("Por favor digite os dados da distancia percorrida (em quilometros)."))
tempoDuracaoTrilha = Number(prompt("E qual foi o tempo de trilha (em horas) "))

//Calculos 
velocidadeMediaDasTrilhas = distanciaPercorrida / tempoDuracaoTrilha
velocidade = velocidadeMediaDasTrilhas / tempoDuracaoTrilha

//Saida de Dados 
alert(alert("Sua média de velocidade durante essa trilha foi de "+ velocidadeMediaDasTrilhas.toFixed(2) +"km/h, sendo "+ velocidade.toFixed(1) +" a aceleração."))



