const Control = require('../controllers/Autores.controller');

module.exports = (app) => {
    app.get("/api/autores",Control.mostrarAutores);
    app.post("/api/autores",Control.crearAutor);
    app.get("/api/autores/:id",Control.mostrarAutor);
    app.put("/api/autores/:id",Control.editarAutor);
    app.delete("/api/autores/:id",Control.eliminarAutores);
}
