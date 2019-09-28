'use strict'

var formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", () => {
    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var edad = document.querySelector("#edad").value;

    //Validar
    if (isNaN(edad)) {
        alert("No es un número");
        return false;
    }

    var datos = document.querySelector(".datos");
    var parrafo = document.createElement("p");
    parrafo.append("Nombre: " + nombre);
    datos.append(parrafo);
    datos.append("Apellido: " + apellido);
    datos.append("Edad: " + edad);

    // SI QUIERO UBICAR ALGUNA PROPIEDAD PARA EL OBJETO DEL EVENTO, ejem. formulario SE LO HACE CON EL OPERADOR THIS
    // formulario.style     ===>>>  this.style
});