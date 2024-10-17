import express from 'express';
import temasControlador from '../controlador/temasControlador.js';



const router = express.Router();
// enviar los temas
router.post('/',temasControlador.ingresar)


// obtener los temas
router.get('/',temasControlador.consultar)

router.route("/:id")
         // obtener un tema 
        .get(temasControlador.consultaEspecifica)
        // Cracion/Actualizacion de temas
        .put(temasControlador.actualizar)     
        // Eliminacion de temas
        .delete(temasControlador.borrar)



// Exportacion de router
export default router;