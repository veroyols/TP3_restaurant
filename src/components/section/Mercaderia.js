const Mercaderia = (data, selectedProduct) => {
    let buttonText = selectedProduct.includes(data.id) ? 'Quitar' : 'Agregar';

    return `
    <article class="mercaderia" id="${data.id}">
        <div class="open_detail" id="${data.id}">
            <div class="mercaderia__view" id="${data.id}">
                <h4>${data.nombre}</h4>
            </div>
            <img class="mercaderia__image" src="${data.imagen}" alt="Imagen del plato">
        </div>
        <div class="mercaderia__foot">
            <p>${data.tipo.descripcion}</p>
            <button class="mercaderia__add" id="${data.id}"><i class="material-icons">add_circle_outline</i></button>
        </div>
    </article>
    `
}
export default Mercaderia; 