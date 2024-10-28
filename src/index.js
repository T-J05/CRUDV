import express from 'express';
import temasRutas from './routes/temasRutas.js'; 
import path from 'path';
import os from 'os'
//inicializacion
const app = express();


//configuracion
app.set('view engine', 'ejs');


app.set('views', './vista'); 
app.set('port',process.env.PORT || 3000);
const HOST = '0.0.0.0'

app.use('/vista', express.static(path.join(process.cwd(), 'vista')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/temas",temasRutas);


app.listen(app.get('port'),HOST,() =>{
        console.log(`Servidor corriendo en http://${HOST}:3000`);
        
        const networkInterfaces = os.networkInterfaces();
        for (const interfacee in networkInterfaces) {
            networkInterfaces[interfacee].forEach(details => {
                if (details.family === 'IPv4' && !details.internal) {
                    console.log(`Accede a la aplicación en: http://${details.address}:3000`);
                }
            });
        }
    });