async function obtenerTemas(){
    try {
        const response = await fetch('/temas');
        const temas = await response.json();
        mostrarTemas(temas)
    }catch  (error){
        console.error('Error obteniendo temas', error);
    }
};

async function sumarVotos(id){
    try {
        const response = await fetch(`/temas/sumarVoto/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            }
            
        }
        );
        const temas = await response.json();
    }catch (error){
        console.error('Error al sumar el voto', error)
    }
}

async function recargar(){
    window.location.reload()
}


async function eliminarAnime(id){
    try{
        const response = await fetch(`/temas/eliminar/${id}`,{
            method: 'DELETE',
            headers: {
                 'Content-Type': 'application/json'
            }
        })
        recargar()
        console.log(`Anime ${response}eliminado`)
    }catch(error){
        console.log('Error al eliminar el anime', error)
    }
}


function mostrarFormulario(id, tema, enlace,votos1) {
    document.getElementById('tema1').value = tema;
    document.getElementById('enlace1').value = enlace;
    document.getElementById('tema-id').value = id; 
    document.getElementById('votos-id').value = votos1;
    document.getElementById('actualizar-form').style.display = 'block';

}


async function guardarCambios() {
    const id = document.getElementById('tema-id').value;
    const tema = document.getElementById('tema1').value;
    const enlace = document.getElementById('enlace1').value;


    try {
        const response = await fetch(`/temas/actualizar/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tema:tema, enlace:enlace})
        });
        
        if (!response.ok) throw new Error('Error al actualizar el tema');
        
        const data = await response.json();
        console.log("Tema actualizado:", data);
        obtenerTemas(); 
        document.getElementById('actualizar-form').style.display = 'none'; 
    } catch (error) {
        console.error("Error al actualizar el tema:", error);
    }
}

  
  
function mostrarTemas(temas){
    const tabla = document.getElementById('tabla-temas');
    tabla.innerHTML = '';
    temas.forEach((tema,index ) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${tema.tema}</td>
        <td><a href="${tema.enlace}" target="_blank">${tema.enlace}</a></td>
        <td>${tema.votos}</td>
        <td><BUTTON onclick="sumarVotos(${tema.id});recargar();">+</BUTTON></td>
      <td><button onclick="mostrarFormulario(${tema.id}, '${tema.tema}', '${tema.enlace}','${tema.votos}')">Editar</button></td>
        <td><BUTTON onclick="eliminarAnime(${tema.id})">Eliminar</BUTTON></td>
        `;
        tabla.appendChild(fila);
    });

}
document.addEventListener('DOMContentLoaded', () => {
    obtenerTemas();
});

