//Exercício 1

let array = [1,5,23,76,87,34,687,86,98,103,489,423,89]


//Exercício 2


    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then((response)=>{return (response.json())})
    .then((data)=>{console.log(data)})
.catch((error)=>{return ("Xabu")})





console.log(oi())

//Exercício 3
