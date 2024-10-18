import express from 'express';
import temasControlador from '../controlador/temasControlador.js';



const router = express.Router();


// obtener los temas
router.get('/',temasControlador.consultar)

router.route("/temacrud")
         // crear un tema
        .post(temasControlador.crear)
         // obtener un tema 
        .get(temasControlador.consultaEspecifica)
        // Cracion/Actualizacion de temas
        .put(temasControlador.actualizar)     
        // Eliminacion de temas
        .delete(temasControlador.borrar)



// Exportacion de router
export default router;