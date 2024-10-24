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
        });
        const temas = await response.json();
       
    }catch (error){
        console.error('Error al sumar el voto', error)
    }
}

async function editarAnime(id){
    try {
        const response = await fetch(`/temas/actualizar/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: document.getElementById('')
        });
        const temas = await response.json();
       
    }catch (error){
        console.error('Error al sumar el voto', error)
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
        <td><BUTTON onclick="sumarVotos(${tema.id})">+</BUTTON></td>
        <td><BUTTON onclick="editarAnime(${tema.id})">Editar</BUTTON></td>
        <td><BUTTON onclick="eliminarAnime(${tema.id})">Eliminar</BUTTON></td>
        `;
        tabla.appendChild(fila);
    });

}
document.addEventListener('DOMContentLoaded', () => {
    obtenerTemas();
});

