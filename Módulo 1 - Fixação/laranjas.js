//Exercício para praticar operações com  divisões, arredondamentos e restos

function divlaranjas (numlaranjas, numvizinhos) {
    var resto = numlaranjas%numvizinhos
    var vizinhos = Math.round(numlaranjas/numvizinhos);

    return ("Eu fiquei com " + resto + " laranjas e meus vizinhos ficaram com " + vizinhos)

}

 console.log(divlaranjas (80,38));

