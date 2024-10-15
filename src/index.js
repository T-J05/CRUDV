import express from 'express'


//inicializacion
const app = express();

//configuracion
app.set('port',process.env.PORT || 3000);
//routes
//public files
//run server
app.listen(app.get('port'),()=> 
        console.log('Servidor escuchando en el puerto',app.get('port')));