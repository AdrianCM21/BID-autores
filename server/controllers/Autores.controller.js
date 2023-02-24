const {Autores} = require('../models/Autor.models')

module.exports.crearAutor= async (req,res)=>{
    try {
        const {nombre} = req.body;
        const msg = await Autores.create({
            nombre
        })
        res.json(msg);
        console.log(msg);
    } catch (error) {
        res.status(400);
        res.json(error)
    }
}

module.exports.mostrarAutores = async (req,res)=>{
    try {
        const contenido = await Autores.find();
        res.json(contenido);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

module.exports.mostrarAutor = async (req,res)=>{
    try {
        const autor = await Autores.findOne({_id:red.params.id});
        res.json(autor);
    } catch (error) {
        res.json(error);
    }
}

module.exports.editarAutor = async (req,res)=>{
    try {
        const autor = await Autores.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(autor)
    } catch (error) {
        res.json(error);
    }
}

module.exports.eliminarAutores = async (req,res)=>{
    try {
        const autores = await Autores.deleteOne({_id: req.params.id})
        res.json(autores);
    } catch (error) {
        res.json(error);
    }
}