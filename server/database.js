const mongoose = require('mongoose');//modulo para conectar nodejs con mongodb

//configuramos los parámetros de la base de datos
url= 'mongodb://localhost/empleados';
dbparams = {
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
};

mongoose.connect(url)
        .then( db => console.log("BD está conectada"))
        .catch( err => console.log(err));

module.exports = mongoose;