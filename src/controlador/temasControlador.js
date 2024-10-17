import prisma from '../conexionDB.js';


class TemasControlador{
    constructor(){

    }
    async consultar(req,res) {
        try{
            const temas = await prisma.temas.findMany()
            res.json({msg: 'Todos los',temas:temas });
        }catch(error){
            res.status(500).json({error: 'Error al consultar temas'});
        }
        }
    

    async consultaEspecifica(req,res){
        try{
        const {id} = req.params;
        const tema = prisma.temas.findUnique({
            where: {
                id : id,
            },
        })
        res.json({msg: `Consulta del tema con id ${id}` });
    }catch(error){
        res.status(500).json({error: `Error al consultar el id:${id}` })
    }
    }

    ingresar(req,res){
        res.json({msg: 'Ingresa temas' });
    }

    actualizar(req,res){
        res.json({msg: 'Crea tema' });
    }

    borrar(req,res){
        res.json({msg: 'Borra temas' });
    }


}

export default new TemasControlador(); // Exportar una instancia de la clase