const MercaderiaDetail = (data) => {
    return `
    <section class="mercaderiaDetail" id="${data.id}">
        <img class="mercaderia__image" src="${data.imagen}" alt="Imagen del plato">
        <div>
            <h2 class="mercaderiaDetailRight">${data.nombre}</h2>
            <p class="mercaderiaDetailRight">Categoria: ${data.tipo.descripcion}</p>
            <br>
            <p class="mercaderiaDetailText">Ingredientes: ${data.ingredientes}</p>
            <br>
            <p class="mercaderiaDetailText">Preparacion: ${data.preparacion}</p>
            <br>
            <p class="mercaderiaDetailText">Precio $${data.precio}</p>
        </div>
        <button>Cerrar</button>
    </section>
    `
}
export default MercaderiaDetail; 
