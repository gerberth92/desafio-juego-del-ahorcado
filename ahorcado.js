var iniciarJuego = document.querySelector("#iniciar-juego");
var comprobarPalabra = document.querySelector("#nueva-palabra");
var palabraIngresada = document.querySelector("#input-nueva-palabra");
var guiones = document.querySelector("#guiones");
var letraErrada = document.querySelector("#letra-errada");
var palabras = ["vaca","perro","gato","alacran","rata","gallina","condor",
               "iguana","cocodrilo","caiman","paloma","gaviota","ballena",
               "tiburon","delfin","canguro","colibri","mosca","camello",
               "caballo","cangrejo","conejo","hipopotamo","mariposa"];
var palabraOculta = "";
var palabraAdivinada = "";
var vidas = 4;
comprobarPalabra.addEventListener("click" , comprobar);
iniciarJuego.addEventListener("click" , iniciar);

function iniciar() {

    palabraOculta = palabras[Math.floor(Math.random()*palabras.length)];

    for (var i = 0 ; i < palabraOculta.length ; i++) {

        palabraAdivinada = palabraAdivinada + "_ ";
    }
        guiones.innerHTML = palabraAdivinada;
}

function comprobar () {

    var letra = palabraIngresada.value.toUpperCase();
    palabraOculta = palabraOculta.toUpperCase();
    var nuevo = "";
    var almacen = "";

    for (var i = 0 ; i < palabraOculta.length ; i++) {

        if (letra == palabraOculta[i]) {

            nuevo = nuevo + letra + " ";
        }
        else {

            nuevo = nuevo + palabraAdivinada [i*2] + " ";
        }
    }

    if (letra != palabraOculta[i]) {

        almacen = letra + " ";
        letraErrada.innerHTML = almacen;
    }


    if (nuevo == palabraAdivinada) {

        vidas--;
    }
    
    palabraAdivinada = nuevo;
    guiones.innerHTML = palabraAdivinada;

    if (vidas == 0) {

        alert("Perdiste");
    }

    if (palabraAdivinada.search("_") ==-1) {

        alert("Ganaste");
    }

    palabraIngresada.value = "";
    palabraIngresada.focus();

    dibujar();
}
