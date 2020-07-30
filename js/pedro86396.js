//* * * * * Exercicio (4) * * * * *
//Lâmpada: Ao passar o mouse por cima irá acender ao retirar o mouse apagará. 
var lampada = document.querySelector(".lampadaOff");
lampada.addEventListener("mouseover", function() {
    lampada.src = "img/lampada-on.gif";
});
lampada.addEventListener("mouseout", function() {
   lampada.src = "img/lampada.gif" 
});

//* * * * * Exercicio (5) * * * * *
//Botão verde: Ao ser clicado mudará o background para cor verde
//aguardará 200ms e removerá a cor.
var botaoVerde = document.querySelector("#botaoVerde");

botaoVerde.addEventListener("click", function() {
    botaoVerde.classList.add("verde");
    setTimeout(function() {botaoVerde.classList.remove("verde")}, 200);
});

//Botão vermelho: Ao ser clicado mudará o background para cor vermelha
//aguardará 200ms e removerá a cor.
var botaoVermelho = document.querySelector("#botaoVermelho");

botaoVermelho.addEventListener("click", function() {
    botaoVermelho.classList.add("vermelho");
    setTimeout(function() {botaoVermelho.classList.remove("vermelho")}, 200);
});

//* * * * * Exercicio (8) * * * * *
var resultado = document.querySelector("#resultado");

resultado.innerHTML = "Esse texto foi inserido através de JavaScript...";

//* * * * * Exercicio (9) * * * * *
var botaoDeTexto = document.querySelector("#botaoDeTexto");

botaoDeTexto.addEventListener("click", function() {
    //Elemento pai
    var corpo = document.body;
    //Cria nova div
    var divNova = document.createElement("div");
    //Cria texto
    var texto = document.createTextNode("Esse texto também foi inserido através de JavaScript!");
    //Anexa texto a div
    divNova.appendChild(texto);
    //Anexa div a pagina
    corpo.appendChild(divNova);
});