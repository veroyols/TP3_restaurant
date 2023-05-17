const Mercaderia = (data, selectedProduct) => {
    let buttonText = selectedProduct.includes(data.id) ? 'Quitar' : 'Agregar';

    return `
    <section class="mercaderia" id="${data.id}">
        <div class="mercaderia__view" id="${data.id}">
            <h3>${data.nombre}</h3>
            <img class="mercaderia__image" src="${data.imagen}" alt="Imagen del plato">
        </div>
        <div class="mercaderia__foot">
            <p>${data.tipo.descripcion}</p>
            <button class="mercaderia__add" id="${data.id}"><p>Agregar<p></button>
        </div>
    </section>
    `
}
export default Mercaderia; 