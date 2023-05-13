export default function Mercaderia (data) {
    return `
    <section id="${data.id}">
        <h2 class="title">${data.tipo.descripcion}</h2>
        <p class="text">${data.nombre}</p>
        <img class="image" src="${data.imagen}" alt="Imagen del plato">
    </section>
    `
}
