var nome = "Nome"

function cifra (deslocamento, nomes){
    
    let numeros = [];
    let lista_nomes = []; 

    for (let i = 0; i < nomes.length ; i++){
        numeros.push (nomes.charCodeAt (i) + deslocamento)
    }
    
    for (let i = 0; i< numeros.length; i++){
        lista_nomes.push (String.fromCharCode(numeros[i]))
    }
    
    return lista_nomes.join("")

}


function decifra (deslocamento, nomes){

    let nome = [];
    let array_nomes = [];

    for (let i = 0; i< nomes.length; i++){
        nome.push (nomes.charCodeAt(i) - deslocamento)

    }
    for (let i = 0; names.length; i++){
        arraynomes.push (String.fromCharCode(names[i]));
    }
    return arraynomes.join("")
}

console.log (cifra(1, "Ana"))
console.log (decifra(1, "Bmb"))