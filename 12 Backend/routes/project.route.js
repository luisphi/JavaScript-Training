'use strict'

// Usando express para crear servidor con http
var express = require('express');

var ProjectController = require('../controllers/project.controller')

// Llamar a módulo de multiparty para el trabajo con archivos
var multipar = require('connect-multiparty');
var multiparMiddleware = multipar({uploadDir: './uploads'}); // Se lo debe ubicar en la ruta para que se ejecute antes

var router = express.Router();

router.get('/home', ProjectController.home);
router.get('/test/:id', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/get-project/:id', ProjectController.getProject);
router.get('/get-projects', ProjectController.getProjects);
router.put('/update-project/:id', ProjectController.updateProject);
router.delete('/delete-project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multiparMiddleware, ProjectController.uploadImage);

module.exports = router;