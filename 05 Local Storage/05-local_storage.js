'use strict'

// Localstorage es una memorial de navegador
// Verificar si el localstatorage está disponible

if (typeof(Storage) != 'undefined') {
    // Guardar una variable en localstorage
    localStorage.setItem("titulo", "Es guardado en el navegador");

    // Recuperar una variable del localstorage
    console.log(localStorage.getItem("titulo"));

    // Configurar objetos => se los debe mandar como una string usando las propiedades de json
    var usuario = {nombre:"Luis", edad:32, web:"luisphi.me"};
    localStorage.setItem("usuario", JSON.stringify(usuario));

    console.log( "Esta es la edad del usuario: " + JSON.parse(localStorage.getItem("usuario")).web );

    // Borrar un elemento del localstorage
    localStorage.removeItem("usuario");

    // Para borrar todo
    localStorage.clear();

    // RECORRER TODAS LAS VARIABLES GUARDADAS EN EL LOCALSTORAGE
    for (const i in localStorage) {
        console.log( localStorage[i] );
    }

} else {
    console.log ('No disponible para este navegador');
}