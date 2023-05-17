
const ComandaCreate = async (list) => {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i].precio;
    }
    let delivery = ['Salon', 'Delivery', 'Pedidos Ya']

    return  `
    <article class="modalDetail">
        <div class="comandaDetail">
        <i class="fa-light fa-xmark"></i>
            <h2>Platos seleccionados</h2>
            <p class="mercaderiaDetailRight">Revise su pedido</p>
            <div class="content">
                <table>
                    <tbody> 
                    ${list.map(element =>  { return `
                        <tr>
                            <td><img src="${element.imagen}" alt="${element.nombre}" width="50"></td>
                            <td>${element.nombre}</td>
                            <td>$${element.precio}</td>
                        </tr>
                    `}).join("")}
                    </tbody>
                </table>
                </div>
                <div class="comandaDetail__buttons">
                    <h3>Total a pagar $${total}</h3>
                    <button class="modal__close">Siguiente</button>
                    <button class="modal__close">Volver</button>
                </div>
        </div>    
    </article>
`
}

export default ComandaCreate; 
/*        <h2 class="mercaderiaDetailRight">Forma de Pago</h2>
        
        <table>
            <tbody>
            ${delivery.map(element =>  { return `
                        <tr>
                            <td>${element}</td>
                        </tr>
                    `}).join("")}

            </tbody>
        </table>
        <button class="modal__close">Cerrar</button>
*/