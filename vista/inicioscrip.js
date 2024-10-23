async function obtenerTemas(){
    try {
        const response = await fetch('/temas');
        const temas = await response.json();
        mostrarTemas(temas)
    }catch  (error){
        console.error('Error obteniendo temas', error);
    }
};


function mostrarTemas(temas){
    const tabla = document.getElementById('tabla-temas');
    tabla.innerHTML = '';
    temas.forEach((tema,index ) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${tema.tema}</td>
        <td>${tema.votos}</td>
        `;
        tabla.appendChild(fila);
    });

}
