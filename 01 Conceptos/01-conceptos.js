'use strict'

// PARA USAR EL DEBUG EN CODIGO SE DEBE UBICAR   debugger;

// PONER VENTANAS DE CONFIRMACION O PEDIR DATOS
confirm("Esta seguro que quieres continuar?");
prompt("Qué edad tienes?", 18);

// USO de Parametros REST
function listadoFrutas(fruta1, fruta2, ...resto_frutas){
    console.log("Fruta 1 " + fruta1);
    console.log("Fruta 2 " + fruta2);
    console.log(resto_frutas); 
}

listadoFrutas("manzana", "naranja", "pera", "melon", "mango");

// USO de Parametros SPREAD
console.log('--USO DE SPREAD--');
var frutas = ["NARANJA", "MANZANA"];
listadoFrutas(...frutas, "pera", "melon", "mango");

// Funciones anónimas => no tienen nombre. Usar con funciones dentro de otras funciones
var pelicula = function(nombre) {
    return "La película es " + nombre
};

console.log(pelicula("mi pelicula"));

// Funciones callback => funcion que se pasa como parametro a otra funcion 
function sumame (num1, num2, sumaYmuestra, sumaPorDos) {
    var suma = num1 + num2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
}

sumame(4,5,
    function(result){console.log("La suma es: " + result)},
    function(result){console.log("La suma por dos es: " + result * 2)}
);

// Funciones Flecha => Para simplificar las funciones de callback
// Basicamente es reemplazar la palabra function por una flecha
sumame(20,5,
    (result) => {console.log("La suma ARROW: " + result)},
    (result) => {console.log("La suma por dos ARROW: " + result * 2)}
);

// Buscar la posición de una palabra => text.indexOf("palabra")
// Buscar en textos => text.search("palabra"), igual que indexOf
// match("palabra") => Da información de manera de array --- Buscar todos text.match(/palabra/g)
// includes(), regreso true o false, si encuentra la palabra

// Uso de plantillas en Javascript
var nombre = "Luis";
var apellido = "Paz y Miño"

var texto = `
    <h1>Mis datos son:</h1>
    <h3> Nombre: ${nombre} </h3>
    <h3> Apellido: ${apellido} </h3>
`;

document.write(texto);
