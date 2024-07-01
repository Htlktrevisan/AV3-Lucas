// Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.

//variaveis 
let salarioBruto
let salarioLiquido 
let descontoPorImposto 

alert("programa feito para calcular o salrio, prencha as informações seguintes:")

//entrada de dados 
salarioBruto = Number(prompt("Qual é o seu salario bruto: "))
alert("Pefeito, agoara iremos calcular o salario liquido com os 20% de imposto:")

//calculo 
descontoPorImposto = salarioBruto * 0.20
salarioLiquido = salarioBruto - descontoPorImposto

//Saida de Dados 
alert("Espere alguns segundos por favor:")
alert("O seu salario é de: Salario Bruto: R$"+salarioBruto+" Desconto por Imposto(20%): R$"+descontoPorImposto+" salario liquido: R$"+salarioLiquido+"")