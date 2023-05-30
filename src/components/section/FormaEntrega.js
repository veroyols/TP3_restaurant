const FormaEntrega = async () => {

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
        <i class="fa-light fa-xmark"></i>
            <h2>Forma de entrega</h2>
            <p class="mercaderiaDetailRight">Seleccione</p>
            <div class="content">
                    ${delivery.map(element =>  { return `
                        <label>
                            <input type="radio" class="delivery" value="${element.value}">
                            ${element.name}
                        </label>
                    `})}
                </div>
                <div class="comandaDetail__buttons">
                    <button class="modal__finish">Finalizar</button>
                    <button id="modal__close">Volver</button>
                </div>
        </div>    
    </article>
`
}

export default FormaEntrega; 
