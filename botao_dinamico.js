
<script>

var botao = document.createElement("button");
document.body.appendChild(botao);
var normal = botao.textContent = "Oi"

botao.onmouseenter = muda1;
botao.onmousedown = muda2;
botao.onmouseout = muda3;
botao.onmouseup = muda4;

function muda1(){
    botao.textContent = "Olá"
}

function muda2 (){
    botao.textContent = "Hola"
}

function muda3(){
    botao.textContent = "Oi"
}

function muda4(){
    botao.textContent = "Olá"
}

</script>