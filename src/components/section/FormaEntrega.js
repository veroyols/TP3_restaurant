const FormaEntrega = () => {

    const delivery = [
        {
            name: 'Salon', 
            value: '1'
        }, 
        {
            name: 'Delivery', 
            value: '2'
        }, 
        {
            name: 'Pedidos Ya', 
            value: '3'
        }
    ]

    return  `
    <article class="mercaderia__view">
        <div class="comandaDetail">
            <h2>Forma de entrega</h2>
            <p class="mercaderiaDetailRight">Seleccione</p>
            <div class="options__delivery">
                ${delivery.map(element =>  { return `
                    <button value="${element.value}" class="delivery">${element.name}</button>
                `}).join('')}
            </div>
            <div class="comandaDetail__buttons">
                <button id="formaEntregaSelected" disabled class="modal__finish">Finalizar</button>
                <button id="modal__close">Volver</button>
            </div>
            <i class="material-icons" id="modal__close" title="Cerrar">close</i>
        </div>    
    </article>
`
}

export default FormaEntrega; 
