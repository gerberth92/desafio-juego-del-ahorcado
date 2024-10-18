let pantalla = document.querySelector("#ahorcado");
let pincel = pantalla.getContext("2d");

function dibujar() {
  pincel.strokeStyle = "black";

  function dibujarLinea(x1, y1, x2, y2) {
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.moveTo(x1, y1);
    pincel.lineTo(x2, y2);
    pincel.stroke();
  }

  // Dibuja la base del ahorcado
  dibujarLinea(450, 350, 550, 350);
  dibujarLinea(525, 352, 500, 300);
  dibujarLinea(500, 300, 475, 352);
  dibujarLinea(500, 350, 500, 54);
  dibujarLinea(492, 60, 700, 55);
  dibujarLinea(700, 55, 700, 80);
  dibujarLinea(496, 105, 540, 58);

  // Dibuja la cabeza
  if (vidas <= 3) {
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.arc(700, 100, 20, 0, 2 * Math.PI);
    pincel.stroke();
  }

  // Dibuja el cuerpo
  if (vidas <= 2) {
    dibujarLinea(700, 120, 700, 200);
  }

  // Dibuja los brazos
  if (vidas <= 1) {
    dibujarLinea(700, 135, 670, 175);
    dibujarLinea(700, 135, 730, 175);
  }

  // Dibuja las piernas
  if (vidas == 0) {
    dibujarLinea(700, 200, 670, 250);
    dibujarLinea(700, 200, 730, 250);
  }
}
