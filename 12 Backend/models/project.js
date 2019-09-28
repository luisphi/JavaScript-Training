'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

// SE MANEJA EN SINGULAR, EN LA BASE DEBE ESTAR EN PLURAL
module.exports = mongoose.model('Project',ProjectSchema);