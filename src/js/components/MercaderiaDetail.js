const MercaderiaDetail = (data) => {
    return `
    <article class="modalDetail" id="${data.id}">
        <div class="mercaderiaDetail">
            <img class="mercaderia__image" src="${data.imagen}" alt="Imagen del plato" />
            <div class="mercaderia__content">
                <h2 class="mercaderiaDetailRight">${data.nombre}</h2>
                <p class="mercaderiaDetailRight">Categoria: ${data.tipo.descripcion}</p>
                <br>
                <p class="mercaderiaDetailText">Ingredientes: ${data.ingredientes}</p>
                <br>
                <p class="mercaderiaDetailText">Preparacion: ${data.preparacion}</p>
                <br>
                <p class="mercaderiaDetailText">Precio $${data.precio}</p>
            </div>
            <div class="mercaderia__close">
                <i class="material-icons" id="modal__close" title="Cerrar">close</i>
                <button title="Cerrar" id="modal__close">Cerrar</button>
            </div>
        </div>
    </article>
    ` 
}
export default MercaderiaDetail; 
