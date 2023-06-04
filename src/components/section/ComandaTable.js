
const ComandaTable = (response) => {
    console.log(response);
    let ventas = 0;
    
    return  `
        <table class="comandaTable">
            <tr><td colspan='7'>Resumen de ventas</td></tr>

            <tr>
                    <th rowspan="2">ID</th>
                    <th rowspan="2">Fecha</th>
                    <th colspan="3">Mercaderias</th>
                    <th rowspan="2">Entrega</th>
                    <th rowspan="2">Total</th>
                </tr>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>
            ${response.map((comanda, index) => {
                ventas += comanda.total;
                let mercaderias = response[index].mercaderias;
                let count = mercaderias.length;
                let otrasMercaderias = '';
                if (count > 1) {
                    for (let i = 1; i < mercaderias.length; i++) {
                        otrasMercaderias +=`<tr><td>${mercaderias[i].id}</td><td>${mercaderias[i].nombre}</td><td>$ ${mercaderias[i].precio}</td></tr>`;
                    }
                }
                let fecha = comanda.fecha.split('T')

                return `
                    <tr>
                        <td rowspan=${count}>${comanda.id}</td>
                        <td rowspan=${count}>${fecha[0]}</td>
                        <td>${mercaderias[0].id}</td>
                        <td>${mercaderias[0].nombre}</td>
                        <td>$ ${mercaderias[0].precio}</td>
                        <td rowspan=${count}>${comanda.formaEntrega.descripcion}</td>
                        <td rowspan=${count}>$ ${comanda.total}</td>
                    </tr>
                    ${otrasMercaderias}
                    `
                }).join('')
            }
            <tr><td colspan='7'>Total ventas: $${ventas} </td></tr>
        </table> 
    `
}
    
export default ComandaTable; 

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
    "formaEntrega": 
    {
        "id": 0,
        "descripcion": "string"
    },
    "total": 0,
    "fecha": "2023-05-21T18:11:13.137Z"
}
*/