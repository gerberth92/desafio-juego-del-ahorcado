var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");
var letraEquivocada = [];
var letraErrada = "";

function dibujar() {

    //esto dibuja la base del ahorcado
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(450,350);
    pincel.lineTo(550,350);
    pincel.lineTo(500,350);
    pincel.lineTo(500,60);
    pincel.lineTo(700,60);
    pincel.lineTo(700,80);
    pincel.stroke();
    
    //esto dibuja la cabeza
    if (vidas <= 3) {

        pincel.beginPath();
        pincel.arc(700,100,20,0,2*Math.PI);
        pincel.stroke();
    }

    //esto dibuja el cuerpo
    if (vidas <= 2) {

        pincel.beginPath();
        pincel.moveTo(700,120);
        pincel.lineTo(700,200);
        pincel.stroke();
    }

    //esto dibuja los brazos
    if (vidas <= 1) {

        pincel.beginPath();
        pincel.moveTo(700,135);
        pincel.lineTo(670,175);
        pincel.stroke();

        pincel.beginPath();
        pincel.moveTo(700,135);
        pincel.lineTo(730,175);
        pincel.stroke();
    }

    //esto dibuja las piernas
    if (vidas == 0) {

        pincel.beginPath();
        pincel.moveTo(700,200);
        pincel.lineTo(670,250);
        pincel.stroke();

        pincel.beginPath();
        pincel.moveTo(700,200);
        pincel.lineTo(730,250);
        pincel.stroke();
    }
}
