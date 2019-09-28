'use strict'

var contador = 0;
var numeros = new Array();

while (contador < 6) {
    var numero = parseInt(prompt("Ingrese un número: ", 0));
    numeros.push(numero);
    contador++;
}

//Para eliminar el último dato de un array usar .pop()

for (const num in numeros) {
    var html = `El dato ${num} es: ${numeros[num]} <br>
                `
    document.write(html);
}

// Ordenar por numeros de manera descendente
numeros.sort( (a,b) => a-b );
console.log(numeros);

// ARRAY CON FUNCIONES CALLBACK
var lenguajes = new Array("php", "java", "go", "python");
lenguajes.push("Html");

lenguajes.forEach( (elemento, indice, arr) => {
    console.log("El elemento en posicion " + indice + " es: " + elemento);
});

// ARRAY CON RECORRIDO FOR IN
for (const lenguaje in lenguajes) {
    console.log("El elemento FOR IN " + lenguajes[lenguaje]);
} 

// ORDENAR ARREGLO ALFABETICO y DESCENDENTE
lenguajes.sort();    lenguajes.reverse();
console.log(lenguajes);

// BUSCAR DENTRO DE UN ARRAY // Para devolver el indice se usa findIndex
var busqueda = lenguajes.find(lenguaje => lenguaje == "java");
console.log(busqueda);