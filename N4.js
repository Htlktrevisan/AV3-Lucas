/*Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50. */

//variaveis 
let  azulejoPorMetrosQuadrados = 120 
let  quadradosPormeetroQuadrados 
let  piscinaDaLargura 
let  comprimentoDaPiscina
let  quantidadeAzulejosComprar
let  valorTotal
let  azulejosPorCaixa
//60 unidades por R$ 45,60

alert("vc gostaria de construir uma piscina, correto? Agora prencha as seguintes perguntas: ")

//Entrada de Dados 
larguraDaPiscina = Number(prompt("Qual é a largura da piscina(em metros) : "))
comprimentoDaPiscina = Number(prompt("Qual é o comprimento da piscina (em metros): "))

//calculos
calculoAreaMetroQuadrado = larguraPiscina + comprimentoDaPiscina
quantidadeAzulejosComprar = calculoAreaMetroQuadrado * azulejoPorMetrosQuadrados
azulejosPorCaixa = quantidadeAzulejosComprar /60 
valorTotal = azulejosPorCaixa * 45.60 

//Saida de Dados 
alert("Espere um pouco, estamos calculando")
alert("Essa é a quantidade de azulejos a serem comprados e o valor total a ser pago: "+quantidadeAzulejosComprar+"Caixas necessarias: "+azulejosPorCaixa+" Valor total a ser pago é: R$"+valorTotal)
