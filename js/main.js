let imagen = document.getElementById("imgchange");
let btnStart = document.getElementById("btn-start");
let btnSelect = document.getElementById("btn-select");

btnStart.onclick = function() {
    imagen.src = "./img/mario-bros.gif";
}

btnSelect.onclick = function() {
    imagen.src = "./img/fondo-negrp.jpg";
}