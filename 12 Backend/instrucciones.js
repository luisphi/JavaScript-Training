'use strict'

// PARA INICIAR MONGO: mongod --dbpath Development/BaseDatos/mongodb/data/db

// Para capturar los parámetros que se envian desde: node <ruta de archivo.js> 1 2 3
var params = process.argv.slice(2);

var num1 = parseFloat(params[0]);
var num2 = parseFloat(params[1]);

var resutado = `
    La suma es: ${num1 + num2}
    La resta es: ${num1 - num2}
    La multiplicación es: ${num1 * num2}
    La División es: ${num1 / num2}
`;

console.log(resutado);

console.log("Hola desde node js");

// PARA CREAR UN PROYECTO EN NODEJS SE DEBE REALIZAR LO SIGUIENTE:
// Ejecutar dentro de la carpeta donde iniciar el proyecto: npm init
// Sirve para crear el package.json, donde guarda toda la esctructura del proyecto

/**
 * INSTALANDO DEPENDENCIAS:
 * npm install express --save
 * Sirve para Framework para trabajar con http, manejar rutas
 */

 /**
  * npm install body-parser --save
  * Sirve para convertir las peticiones al backend a json
  */

  /**
   * npm install connect-multiparty --save
   * Subir archivos al servidor, manejo de archivos
   */

   /**
    * npm install mongoose --save
    * ORM: Para trabajar directamente con Mongodb
    */

    /**
     * npm install nodemon --save-dev
     * Sirve para: Cuando se ejecute el servidor en node, y cuando se realice un cambio lo ejecute directamente
     * Esto solo se debe ejecutar en modo de Desarrollo
     */