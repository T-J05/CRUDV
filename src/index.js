import express from 'express';
import temasRutas from './routes/temasRutas.js'; 
import path from 'path';
//inicializacion
const app = express();


//configuracion
app.set('view engine', 'ejs');


app.set('views', './vista'); 
app.set('port',process.env.PORT || 3000);


app.use('/vista', express.static(path.join(process.cwd(), 'vista')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/temas",temasRutas);


app.listen(app.get('port'),()=> 
        console.log('Servidor escuchando en el puerto',app.get('port')));