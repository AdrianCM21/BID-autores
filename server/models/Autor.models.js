const mongoose = require('mongoose');

const AutoresShema = new mongoose.Schema({
    nombre: { 
        type: String,
        required:true,
        minlength:[3,'El minimimo es de 3 caracteres']
    }
}, { timestamps: true })

module.exports.Autores=mongoose.model('Autores',AutoresShema); 