
const ComandaCreate = async (list) => {
    console.log(list)
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i].precio;
    }
    return  `
    <article class="modalDetail">
        <div class="comandaDetail">
            <h2>Platos seleccionados</h2>
            <p class="mercaderiaDetailRight">Revise su pedido</p>
            <div class="content">
                <table>
                    <tbody> 
                    ${list.map(element =>  { return `
                        <tr>
                            <td><img src="${element.imagen}" alt="${element.nombre}" width="80"></td>
                            <td>${element.nombre}</td>
                            <td>$${element.precio}</td>
                        </tr>
                    `}).join("")}
                    </tbody>
                </table>
                ${list.length > 0 ? `<h3>Total a pagar $${total}</h3>` : 'No se han seleccionado productos'}
            </div>
            <div class="comandaDetail__buttons">
                <button disabled id="comandaCreateNext" class="modal__next">Siguiente</button>
                <button id="modal__close">Volver</button>
            </div>
            <i class="material-icons" id="modal__close" title="Cerrar">close</i>
        </div>    
    </article>
    `
}

export default ComandaCreate; 
