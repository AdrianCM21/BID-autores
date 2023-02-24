require('dotenv').config()
const express = require('express');
const cors = require('cors') 
const app = express();

require('./config/Mongo.config')
app.use(cors()) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
require('./routes/Autores.routes')(app);

app.listen(8000,()=>{
    console.log('Conectado exitosa mente')
})