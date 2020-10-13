const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonaSchema = new Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    cargo: {type: String, required: true},
    ciudad: {type: String, required: true},
    salario: {type: String, required: true}
});

module.exports = mongoose.model('Persona', PersonaSchema);