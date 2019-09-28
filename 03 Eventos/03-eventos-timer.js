'use strict'

// Eventos del ratón

var boton = document.querySelector("#boton");

function cambiaColor() {
    boton.style.background = "red";
    return true;
}
   // Evento click
boton.addEventListener("click", () => {
    cambiaColor();
});
  // Evento mouse over == De esta forma se puede usar todos los eventos
boton.addEventListener("mouseover", () => {
    boton.style.background = "yellow";
});  

//Eventos de teclado
var input = document.querySelector("#nombre");

// Eventos, focus, blur, keydown, keyup
input.addEventListener("focus", () => {
    console.log("Ingresa al focus");
});
// Capturar la tecla que ha pulsado
input.addEventListener("keydown", (event) => {
    console.log("La tecla fue: " + String.fromCharCode(event.keyCode));
});

window.addEventListener("load", () => {
    // Ubicar el codigo que se va a ejecutar luego que la página se cargue
});

// TIMERS, ejecutar recursivo  || Si se quiere para el timer ||  clearInterval(tiempo);
var tiempo = setInterval(() => {
    console.log("Ejecutado");
}, 10000);
// Ejecutar solo una vez
setTimeout(() => {
    console.log("Ingresa solo una vez");
}, 2000);
