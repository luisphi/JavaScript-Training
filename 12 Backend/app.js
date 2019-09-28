'use strict'

// Usando express para crear servidor con http
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//CARGAR ARCHIVOS DE RUTAS
var project_routes = require('./routes/project.route');

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS
app.use('/api', project_routes); //  /api .. Sirve para ubicar un prefijo a la url

// FURON CAMBIADAS AL ARCHIVO DE RUTAS USANDO FUNCIONES

/* app.get('/', (req, res) => {
    res.status(200).send("<h1>Página de inicio del backend</h1>")
});

app.get('/test/:id', (req, res) => {
    console.log(req.headers.authorization); // PARA CAPTURAR LA AUTORIZACION ENVIADA DESDE GET HEADER
    console.log(req.query.web); // PARA CAPTURAR PARAMETROS ENVIADOS DESDE URL: localhost:3700/test/8888?web=miweb.com
    console.log(req.params.id); // PARA CAPTURAR EL PARAMETRO ID OBLIGATORIO
    res.status(200).send({
        message: "Hola mundo desde el API de nodeJS"
    })
});
*/

// EXPORTAR
module.exports = app;

