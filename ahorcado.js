let ganaste = new Audio('ganaste.mp3');
let perdiste = new Audio('perdiste.mp3');
let correcto = new Audio('correcto.mp3');
let error = new Audio('error.mp3');

let iniciarJuego = document.getElementById("iniciar-juego");
let letraErrada = document.getElementById("letra-errada");
let guiones = document.getElementById("guiones");
let input = document.getElementById("input");
let comparar = document.getElementById("comparar");
let palabraOculta = "";
let gui = '';
let vidas = 4;

const palabras = ["vaca", "perro", "gato", "alacran", "rata", "gallina", "condor",
  "iguana", "cocodrilo", "caiman", "paloma", "gaviota", "ballena",
  "tiburon", "delfin", "canguro", "colibri", "mosca", "camello",
  "caballo", "cangrejo", "conejo", "hipopotamo", "mariposa"];

iniciarJuego.addEventListener("click", iniciar);
comparar.addEventListener("click", comprobar);

function iniciar() {
  if (palabraOculta !== gui.split(' ').join('') & vidas > 0) {
    alert('El juego ha iniciado');
  } else if (gui.split(' ').join('') === palabraOculta && palabraOculta != '' || vidas === 0) {
    reiniciar();
    iniciar();
  } else {
    palabraOculta = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
    gui = palabraOculta.split('').map(() => '_').join(' ');
    guiones.innerHTML = gui;
    comparar.style.display = 'inline';
    input.disabled = false;
    input.focus();
    dibujar();
  }
}

function comprobar() {
  let letra = input.value.toUpperCase();
  let almacen = gui.split(' ');

  if (input.value !== '' && /^[A-Za-z]$/.test(input.value)) {
    if (!palabraOculta.includes(letra)) {
      error.play();
      vidas --;
      if (vidas === 0) {
        setTimeout(() => {
          perdiste.play();
          guiones.innerHTML = palabraOculta;
        }, 0);
        setTimeout(() => {
          alert('Has perdido');
        }, 150);
        comparar.style.display = 'none';
      } else {
        letraErrada.innerHTML = letra;
      }
    } else {
      correcto.play();
      for (let i = 0; i < palabraOculta.length; i++) {
        if (letra === palabraOculta[i]) {
          almacen[i] = letra;
        }
      }
    }
  
    gui = almacen.join(' ');
    guiones.innerHTML = gui;
    input.value = '';
    input.focus();
  
    if (gui.split(' ').join('') === palabraOculta) {
      ganaste.play();
      setTimeout(() => {
        alert('Ganaste!!!');
      }, 100);
      comparar.style.display = 'none';
    }

    dibujar();
  } else {
    alert('Ingresa una letra');
    input.value = '';
    input.focus();
  }
}

function reiniciar() {
  vidas = 4;
  palabraOculta = '';
  gui = '';
  guiones.innerHTML = '';
  letraErrada.innerHTML = '';
  pincel.clearRect(0, 0, pantalla.width, pantalla.height);
}
