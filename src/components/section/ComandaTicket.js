
const ComandaTicket = async (response) => {
    console.log(response);

    return  `
        <article class="modalDetail">
            <div class="comandaDetail">
                <h2>${response.ok ? 'Se ha generado el pedido con exito' : 'No se ha generado el pedido'}</h2>
                <p>${response.mensaje}</p>
                <button class="modal__close">Cerrar</button>
            </div>    
        </article>
    `
}

export default ComandaTicket; 
