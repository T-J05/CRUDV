class TemasControlador{
    constructor(){

    }
    consultar(req,res) {
            res.json({msg: 'Consulta temas' });
        }
    

    consultaEspecifica(req,res){
        const {id} = req.params;
        res.json({msg: `Consulta del tema con id ${id}` });
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