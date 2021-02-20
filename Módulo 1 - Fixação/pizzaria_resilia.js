//Exercício para calcular lucro sobre a venda de um produto se baseando em seu preço de venda, de custo e impostos

function receita_pizza (custo, venda, saborpizza){

var imposto = Math.round(8.9*venda)/100;
var lucro = (venda-custo-imposto);

return ("Para a pizza " + saborpizza + " o lucro líquido é de R$" + lucro + " e o imposto é de R$" + imposto + ".")
 }


