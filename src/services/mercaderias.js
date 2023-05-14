const URL = 'https://localhost:7137/api/Mercaderia'

const getMercaderias = async (tipo = 0, nombre = '', orden = 'ASC') => { //?tipo=5&nombre=rucula&orden=ASC
    let result = []
    let response = await fetch(`${URL}?tipo=${tipo}&nombre=${nombre}&orden=${orden}`)
    if(response.ok){
        result = await response.json()
    }
    return result
}


const postMercaderia = async (body) => {
    let result = []
    let init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        /*{
            "nombre": "string",
            "tipo": 0,
            "precio": 0,
            "ingredientes": "string",
            "preparacion": "string",
            "imagen": "string"
        }*/
    }
    let response = await fetch(URL, init)
    if(response.ok){
        result = await response.json()
    }
    return result
}

const getMercaderia = async (id) => { 
    let result = []
    let response = await fetch(URL+'/'+id)
    if(response.ok){
        result = await response.json()
    }
    return result
}

const putMercaderia = async (id, body) => {
    let result = []
    let init = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        /*{
            "nombre": "string",
            "tipo": 0,
            "precio": 0,
            "ingredientes": "string",
            "preparacion": "string",
            "imagen": "string"
        }*/
    }
    let response = await fetch(URL + id, init)
    if(response.ok){
        result = await response.json()
    }
    return result
}

const deleteMercaderia = async (id) => {
    let result = []
    let response = await fetch(URL + id, {method: 'DELETE'})
    if(response.ok){
        result = await response.json()
    }
    return result
}

export { getMercaderias, postMercaderia, getMercaderia, putMercaderia, deleteMercaderia }

/*
GET
[
    {
        "id": 21,
        "nombre": "Agua",
        "precio": 500,
        "tipo": {
            "id": 8,
            "descripcion": "Bebidas"
        },
        "imagen": "http://drive.google.com/uc?export=view&id=1AT0FKcyPQ_YGsRma5Ngu6GX8ftf8Ywwd"
    }
]
POST
{
    "id": 33,
    "nombre": "Mantecol",
    "tipo": {
        "id": 10,
        "descripcion": "Postres"
    },
    "precio": 220,
    "ingredientes": "Manteca de mani",
    "preparacion": "Georgalos",
    "imagen": "img"
}




*/