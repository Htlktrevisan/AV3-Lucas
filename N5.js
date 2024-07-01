/*Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos. */

//Variaveis 
let territorioPorIndividuo = 320
let territorioPorCasal = 400
let quantidadeFemeas = 9
let quantidadeMachos = 5
let quantidadeTotalCasais
let femeasPorCasal
let machosPorCasal
let areaDominadaPorFemeaDoCasal
let areaDominadaPorMachoDoCasal
let somaGeralDaAreaDominada

alert("Programa feito para mostrar área total dominada, incluindo  a dos individuos: ")

//Entrada de Dados 
quantidadeTotalCasais = Number(prompt("Qual é quantidade total de casais? (O total de femeas são de 9 e de machos são 5) "))

//Calculo 
somaGeralDaAreaDominada = quantidadeTotalCasais * territorioPorCasal
femeasPorCasal = quantidadeTotalCasais / 2
machosPorCasal = quantidadeTotalCasais / 2
areaDominadaPorFemeaDoCasal = femeasPorCasal * territorioPorIndividuo
areaDominadaPorMachoDoCasal = machosPorCasal* territorioPorCasal

//Saida de Dados 
alert("Então o total de terrítorio dominado pelo casal é de: "+somaGeralAreaDominada+"km² Sendo em média: Por fêmea do casal: "+areaDominadaPorFemeaDoCasal+"km² Por macho do casal: "+areaDominadaPorMachoDoCasal+"km²")
alert("E a quantidade de casais é de: "+quantidadeTotalCasais+"Sendo sendo em média:Machos por casal: "+machosPorCasal+"Fêmeas por casal: "+femeasPorCasal)