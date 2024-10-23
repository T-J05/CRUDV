import express from 'express';
import temasControlador from '../controlador/temasControlador.js';


//hola
const router = express.Router();

  // crear un tema
router.post('/crear',temasControlador.crear)

// obtener los temas
router.get('/',temasControlador.consultar)

// obtener un tema 
router.get('/buscar',temasControlador.consultaEspecifica)

router.put('/actualizar/:id',temasControlador.actualizar)

router.delete('/eliminar/:id',temasControlador.borrar)



// Exportacion de router
export default router;