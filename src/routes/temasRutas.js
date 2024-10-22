import express from 'express';
import temasControlador from '../controlador/temasControlador.js';


//hola
const router = express.Router();

  // crear un tema
router.post('/',temasControlador.crear)

// obtener los temas
router.get('/',temasControlador.consultar)
         // obtener un tema 
router.get('/buscar',temasControlador.consultaEspecifica)

router.route("/:id")

        // Cracion/Actualizacion de temas
        .put(temasControlador.actualizar)     
        // Eliminacion de temas
        .delete(temasControlador.borrar)


// Exportacion de router
export default router;