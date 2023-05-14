const Mercaderia = (data) => {
    return `
    <section class="mercaderia" id="${data.id}">
        <p >${data.nombre}</p>
        <img class="image" src="${data.imagen}" alt="Imagen del plato">
        <p >${data.tipo.descripcion}</p>
    </section>
    `
}
export default Mercaderia; 