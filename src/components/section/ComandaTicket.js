
const ComandaTicket = async (response) => {
    console.log(response);
    
    if(response.id) {
        return  `
        <article class="modalDetail">
            <div class="comandaDetail">
                <i class="fa-light fa-xmark"/>
                <h2>Ticket de compra</h2>
                <p class="mercaderiaDetailRight">${response.id}</p>
                <p class="mercaderiaDetailRight">${response.fecha.split(0,10)}</p>
                <p class="mercaderiaDetailRight">${response.formaEntrega.descripcion}</p>
                <div class="content">
                    <table>
                        <tbody> 
                        ${response.mercaderias.map(element =>  { return `
                            <tr>
                                <td>Id</td>
                                <td>Nombre</td>
                                <td>Precio</td>
                            </tr>
                            <tr>
                                <td>${element.id}</td>
                                <td>${element.nombre}</td>
                                <td>$${element.precio}</td>
                            </tr>
                        `}).join("")}
                        </tbody>
                    </table>
                </div>
                <div class="comandaDetail__buttons">
                    <h3>Total $${response.total}</h3>
                    <button class="modal__close">Cerrar</button>
                </div>
            </div>    
        </article>
        `
    } else {
        return  `
            <article class="modalDetail">
                <div class="comandaDetail">
                    <h2>${response.id ? 'Se ha generado el pedido con exito' : 'No se ha generado el pedido'}</h2>
                    <p>${response.mensaje}</p>
                    <button id="modal__close">Cerrar</button>
                </div>    
            </article>
        `
    }
}
    
export default ComandaTicket; 

/*
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "mercaderias": [
    {
      "id": 0,
      "nombre": "string",
      "precio": 0
    }
  ],
  "formaEntrega": {
    "id": 0,
    "descripcion": "string"
  },
  "total": 0,
  "fecha": "2023-05-21T18:11:13.137Z"
}
*/