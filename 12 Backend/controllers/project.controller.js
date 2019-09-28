'use strict'

var Project = require('../models/project');
var fs = require('fs'); // Para trabajar con archivos

var controller = {
    home: function(req, res){
        return res.status(200).send("<h1>Página de inicio del backend</h1>");
    },
    test: function(req, res){
        console.log(req.headers.authorization); // PARA CAPTURAR LA AUTORIZACION ENVIADA DESDE GET HEADER
        console.log(req.query.web); // PARA CAPTURAR PARAMETROS ENVIADOS DESDE URL: localhost:3700/test/8888?web=miweb.com
        console.log(req.params.id); // PARA CAPTURAR EL PARAMETRO ID OBLIGATORIO
        return res.status(200).send({
            message: "Hola mundo desde el API de nodeJS desde el controlador"
        })
    },
    saveProject: function(req, res) {
        var project = new Project();
        var bodyReq = req.body;

        project.name = bodyReq.name;
        project.description = bodyReq.description;
        project.category = bodyReq.category;
        project.year = bodyReq.year;
        project.langs = bodyReq.langs; 
        project.image = null;

        //Para guardar el objeto en la base de datos
        project.save((err, projectStored) => {
            if (err) return res.status(500).send({message: "Error al guardar el objeto en la base de datos"});
            // Si no existe projectStored
            if (!projectStored) return res.status(404).send({message: "No se ha podido guardar el proyecto"});
            // Si todo va bien y se guarda el documento
            return res.status(200).send({
                message: "Proyecto guardado correctamente", project: projectStored
            });
        });
    },
    getProject: function(req, res) {
        var id = req.params.id;
        Project.findById(id, (err, project) => {
            if (err) return res.status(500).send({status: 500,message: "Error al devolver los datos"});
            if (!project) return res.status(404).send({message: "El proyecto no existe"});
            
            return res.status(200).send(project)
        });
    },
    getProjects: function(req, res) {
        Project.find({}).sort('-year').exec((err, projects) => {
            if (err) return res.status(500).send({status: 500, message: "Error al devolver los datos"});
            if (!projects) return res.status(404).send({status: 404, message: "No hay proyectos"});

            return res.status(200).send(projects);
        });
    },
    updateProject: function(req, res) {
        var projectId = req.params.id;
        var update = req.body;

        // {new: true}  significa que se devuelve el objeto actualizado
        Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdated) => {
            console.log(err);
            if (err) return res.status(500).send({status: 500, message: "Error en la actualización del proyecto"});
            if (!projectUpdated) return res.status(404).send({status: 404, message: "Proyecto no encontrado"});

            return res.status(200).send(projectUpdated);
        });
    }, 
    deleteProject: function(req, res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectDelete) => {
            if (err) return res.status(500).send({status: 500, message: "Error al borrar el proyecto"});
            if (!projectDelete) return res.status(404).send({status: 400, message: "Proyecto no encontrado"});

            return res.status(200).send({message: "Proyecto borrado", projectDelete});
        });
    }, 
    uploadImage: function(req, res) {
        var projectId = req.params.id;

        if (req.files) {
            var filePath = req.files.image.path;
             var fileName = filePath.split('/')[1];
             var fileExt = fileName.split('\.')[1];

             if (fileExt == 'jpg' || fileExt == 'png' || fileExt == 'jpeg' || fileExt == 'gif'){
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
                    if (err) return res.status(500).send({message: "Error al actualizar la imagen"});
                    if (!projectUpdated) return res.status(404).send({message: "El proyecto no existe"});
    
                    return res.status(200).send({project: projectUpdated});
                 });            
             } else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({message: "Formato inválido de la imagen"});
                });
             }
            
        } else {
            return res.status(404).send({message: "Imagen no subida"});
        }
    }
};

module.exports = controller;