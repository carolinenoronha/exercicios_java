
    //A vidente: Guarde seu nome numa variável. Guarde o número de filhos que você quer ter em outra variável. Guarde a cidade em que você gostaria de morar em outra variável Guarde a sua profissão desejada em outra variável. Escreva na página (HTML) a seguinte frase: "A vidente prevê: {seu nome} terá {quantidade de filhos} e viverá em {cidade} trabalhando como {profissão}".

    var nome = "Caroline";
    var numero = 0;
    var cidade = "Paris";
    var profissão = "programadora"

        document.write ("A vidente prevê: " + nome + " terá " + numero + " filhxs" + " e viverá em " + cidade + " trabalhando como " + profissão)
        
     //Guarde em 3 variáveis diferentes 3 itens que você levaria para uma ilha deserta para sobreviver. Escreva na página (HTML) a seguinte frase: "Eu levaria para uma ilha deserta: {item 1}, {item 2}, {item 3}"

    var item1 = "faca";
    var item2 = "isqueiro";
    var item3 = "sinalizador";

        document.write ("Eu levaria para uma ilha deserta: " + item1 + ", " + item2 + ", " + item3)  


    //Declarando e atribuindo dentro da função: Crie uma função chamada escolhaAnimal onde você guarde o nome de um animal que você gostaria de ser em uma variável. Escreva na página (HTML) a seguinte frase: "Num primeiro momento, eu gostaria de ser um(a): {animal escolhido}". Trocar o valor do animal nesta mesma variável. Escreva na página (HTML) a seguinte frase na linha de baixo: "Pensando melhor, prefiro ser um(a) {animal escolhido}"

    var bicho = "gato";
    function escolhaAnimal (){
        document.write(bicho)
    } 
    
    document.write( "Num primeiro momento, eu gostaria de ser um(a):")
    escolhaAnimal ()


    bicho = "leão";
    document.write( "Pensando melhor, prefiro ser um(a):")
    escolhaAnimal()


//Crie um programa com as seguintes funções:
//dobro: essa função recebe um número como parâmetro e retorna o dobro dele como resultado
//metade: essa função recebe um número como parâmetro e rotorna a metade dele como resultado
//saudacao: essa função recebe uma string "nome" como parâmetro e retorna o texto "olá {nome}! Tudo bem?"

function dobro (n){
    document.write(2*n)
}

function metade (n){
    document.write(n/2)
}

function saudacao (fulano){
    document.write("Olá, " + fulano + "!")
}

dobro (2)

metade (2)

saudacao("fulano")



    

