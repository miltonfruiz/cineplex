const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  duracion: Number,
  genero: String
});

module.exports = mongoose.model('Pelicula', schema);