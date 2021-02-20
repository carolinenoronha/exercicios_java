
//Crie uma função que recebe como parâmetro duas strings. Essa função deve retornar as duas strings concatenadas ("juntadas") separadas por um espaço.

    function concatenar (string1, string2) {
    return string1 + " " + string2}
    

//Crie uma função que recebe como parâmetro o nome de uma pessoa. Essa função deve retornar o texto em duas linhas distintas: "Olá {nome}." "Tudo bem {nome}?". 

    function saudar (nome){
        return ("Olá, "+nome+"! <br> Tudo bem, "+nome+"?")}
    

//Crie uma função que recebe como parâmetro um número. Essa função deve retornar o texto "O resto de {numero} divididos por 9 é: {resto da divisão}".
    
    function resto9 (n){
        var resto = n%9;
            return("O resto de "+n+" divididos por 9 é: "+resto+".")}
    

//Crie uma função que recebe 2 parâmetros: a idade do usuário e a idade em que é permitido dirigir em algum país. Essa função deve retornar o texto "você pode dirigir" caso a idade do usuário seja maior ou igual a estabelecida para direção no país e "você não pode dirigir" caso contrário.
    
    function motorista(id_usuario,id_permissao){
            if(id_usuario >= id_permissao) {
                return ("Você pode dirigir!")}
            else{
                return ("Você não pode dirigir!")}
    }


//Crie uma função que recebe 2 parâmetros: a idade do usuário e a idade em que é permitido beber em algum país. Essa função deve retornar o texto "você pode beber" caso a idade do usuário seja maior ou igual a estabelecida para consumo de bebidas alcoólicas no país e "você não pode beber" caso contrário.  

    function bebedeira(id_consumidor,id_permissao){
        if (id_consumidor >= id_permissao){
            return ("Você pode beber!")}
        else {
            return ("Você não pode beber. Tadinho!")}
    }


//Faça uma função que recebe como parâmetro as strings "verde", "amarelo" ou "vermelho".Caso o parâmetro passado seja "verde", a função deve retornar "pode passar!", caso seja "amarelo", retorna "melhor freiar", caso seja "vermelhor", "pare já!". Teste todas as saídas possíveis.

    function semaforo(cor){
        if (cor == "vermelho"){
            return ("Pare já!")}
        else if (cor == "amarelo"){
            return ("Melhor freiar!")}
        else if (cor == "verde"){
            return ("Pode passar!")}
    }


   
//Faça uma função que exibe o menu de bebidas de um restaurante (utilizando document.write), com um item em cada linha: 1-Refrigerante, 2-Suco, 3-Água

    function menu(){
        var refrigerante = "Refrigerante";
        var suco = "Suco";
        var agua = "Água";
        
        document.write("1."+refrigerante+"<br> 2."+suco+"<br> 3."+agua)}


//Faça uma função que exibe o menu de bebidas de um restaurante (utilizando document.write), com um item em cada linha: 1-Refrigerante, 2-Suco, 3-Água. Após isso, receba a escolha do cliente (utilizando prompt) e retorne o valor/item escolhido pelo cliente. Utilize document.write para escrever na tela o resultado desta função com os parâmetros a sua escolha

    function menu2(){

        var refrigerante = "Refrigerante";
        var suco = "Suco";
        var agua = "Água";
        
        document.write("1."+refrigerante+"<br> 2."+suco+"<br> 3."+agua+"<br> Você pediu: ")

        var escolha = prompt("Qual o seu pedido? Escolha entre \n 1. Refrigerante\n 2. Suco \n 3. Água")
    
        if  (escolha == 1){
            document.write ("Refrigerante")}

        else if(escolha == 2){
            document.write ("Suco")} 

        else if (escolha == 3){
            document.write ("Água")}       
    }