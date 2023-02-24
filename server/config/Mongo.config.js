const mongoose=require('mongoose')

mongoose.connect(`${process.env.MONGO_URL}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(rep=>console.log('Conectado mi Rey'))
.catch(err=>console.log('Y bueno no se pudo hay te dice por que, suerte: ',err))
