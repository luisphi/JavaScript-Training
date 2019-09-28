'use strict'

// Haciendo fetch de servicios web; Sirve para hacer peticiones ajax
// PROMESA: Para evitar varias funciones de callback en la misma petición, las promesas se lo usa con fetch 

var usuarios = [];
// data es la raiz del array que necesito
fetch('https://reqres.in/api/users').then(jsonData => jsonData.json())
    .then(jsonData => {
        usuarios = jsonData.data;
        console.log(jsonData);     
        console.log(usuarios);

        // Recorrer array con map
        usuarios.map( (user, i) => {
            console.log("El nombre es: " + user.first_name);
        });

    });


// Hacer un caso parecido al de arriba con funciones y varias llamadas a servicios web
getUsuarios().then(jsonData2 => jsonData2.json())
    .then(jsonData2 => {
        // Recorrer los resultados y revolver la llamada del siguiente fetch
        jsonData2.data.map((user2, i) => {
            console.log("El segundo es: " + user2.last_name);            
        });
        return getUser();
    })
    // Procesar los resultados de la segunda llamada para que se hagan en el mismo orden
    .then(jsonJanet => jsonJanet.json())
    .then(jsonJanet => {
        console.log("El apellido de Janet: " + jsonJanet.data.last_name);

        // LLAMADA AL MODULO CREADO CON LA PROMERA
        return getInfo();
    })
    // LLAMADA HACIA LA PROMESA PROPIA CREADA
    .then(data => {
        console.log(data);
    })
    // PARA CAPTURAR EN CASO DE ERROR
    .catch(error => {
        console.log(error + " Ha ocurrido un error en las llamadas")
    });




function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getUser() {
    return fetch('https://reqres.in/api/users/2');
}

// CREAR PROMESAS
function getInfo() {
    var profesor = {
        nombre: "Luis", apellidos: "Paz y Mino", edad: 32
    };

    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);
        if (typeof profesor_string != 'string') {
            return reject('Error en la ejecución');
        } else {
            return resolve(profesor_string);
        }    
    });    
}