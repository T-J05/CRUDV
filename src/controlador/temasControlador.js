import prisma from '../conexionDB.js';


class TemasControlador{
    constructor(){

    }

    async inicio(req,res) {
        try{
            const temas = await prisma.temas.findMany({
                orderBy:[{
                    votos: 'desc',
                }]
            })
            res.render('inicio',{temas})
        }catch(error){
            console.error({error: 'Error al consultar temas',details: error.message})
            res.status(500).send({error:'Error al consultar temas', details: error.message});
        }
        };

    async consultar(req,res) {
        try{
            const temas = await prisma.temas.findMany({
                orderBy:[{
                    votos: 'desc',
                }]
            })
            res.json(temas)
          
        }catch(error){
            console.error({error: 'Error al consultar temas',details: error.message})
            res.status(500).send({error:'Error al consultar temas', details: error.message});
        }
        };
    

    async consultaEspecifica(req,res){
        const {busqueda} = req.query;
        if (!busqueda || busqueda.trim() === ''){
            return res.status(400).json({error: 'El campo tema es obligatorio'})
        }
      
        try{
        const tema = await prisma.temas.findMany({
            where: {
                tema : {
                    contains: busqueda,
                    mode: 'insensitive',
                },
            },
            
        });
            res.json({msg: 'Temas que coinciden con la busqueda',tema })
        }catch(error){
            res.status(500).json({error: `Error al consultar el id:`,details: error.message })
        }
        }


    async crear(req,res){
        console.log(req.body)
        const { tema, enlace, votos} = req.body;
        if (!tema || tema.trim() === ''){
            return res.status(400).json({error: 'El campo tema es obligatorio'})
        }
        if (!enlace || enlace.trim() === ''){
            return res.status(400).json({error: 'El campo enlace es obligatorio'})
        }
        try{
            const temanew = await prisma.temas.create({
            data: {
                tema: tema.trim(),
                enlace: enlace.trim(),
                votos: votos || 0
            }
            });
            res.redirect('/temas/inicio');
            console.log({msg: 'Tema creado con éxito', tema: temanew})
        }catch(error){
            res.status(500).json({error:'Error al crear el tema', details: error.message})
        }
    
    }


    async actualizar(req,res){
        const { id } = req.params;
        const {tema,enlace,votos} = req.body;
        if (!tema || tema.trim() === ''){
            return res.status(400).json({error: 'El campo tema es obligatorio'})
        }
        if (!enlace || enlace.trim() === ''){
            return res.status(400).json({error: 'El campo enlace es obligatorio'})
        }
        try{
            const temanew = await prisma.temas.update({
            where : {id: parseInt(id)},
            data: {
                tema: tema.trim(),
                enlace: enlace.trim()
            }
            });
            res.status(201).json({msg: 'Tema actualizado con éxito', tema: temanew})
        }catch(error){
            res.status(500).json({error:'Error al actualizar el tema', details: error.message})
        }
    
    }


    async borrar(req,res){
        const { id } = req.params;
        try {
            await prisma.temas.delete({
                where: { id: parseInt(id) },
            });
            res.json({ msg: 'Tema borrado con éxito' });
        } catch (error) {
            res.status(500).json({ error: 'Error al borrar el tema', details: error.message });
        }
    }


    async actualizarVotos(req, res) {
        const { id } = req.params; 
        
        try {

            const tema = await prisma.temas.findUnique({
                where: { id: parseInt(id) }
            });
    
            if (!tema) {
                return res.status(404).json({ error: 'Tema no encontrado' });
            }
    
            const votosActualizados = tema.votos + 1;
    
            const temaActualizado = await prisma.temas.update({
                where: { id: parseInt(id) },
                data: { votos: votosActualizados }
            });
            
            
            
            res.json({ id: temaActualizado.id, votos: temaActualizado.votos });
            
            console.log({ msg: 'Voto agregado con éxito', tema: temaActualizado });
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar los votos', details: error.message });
        }
    }
    
}

export default new TemasControlador(); // Exportar una instancia de la clase