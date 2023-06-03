const URL = 'https://localhost:7137/api/v1/Comanda';

const getComandas = async (date = '') => { //5/14/23 o 5-14-23 req
    let result = []
    let response = await fetch(URL+'?fecha='+date)
    if(response.ok){
        result = await response.json()
    }
    return result
}

const postComanda = async (body) => {
    let result = []
    let init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        /*{
            "mercaderias": [. . .],
            "formaEntrega": 0
        }*/
    }
    let response = await fetch(URL, init)
    return await response.json()
}

const getComanda = async (id) => { //8a34d04a-6e3e-4418-84c5-39a8aa94e996
    let result = []
    let response = await fetch(URL+'/'+id)
    if(response.ok){
        result = await response.json()
    }
    return result
}

export { getComandas, postComanda, getComanda }

/*
getComandas(fecha): 
[
    {
      "id": "8a34d04a-6e3e-4418-84c5-39a8aa94e996",
      "mercaderias": [
        {
          "id": 1,
          "nombre": "Berenjenas en Escabeche",
          "precio": 500
        },
        {
          "id": 2,
          "nombre": "Porotos a la vinagreta",
          "precio": 500
        }
      ],
      "formaEntrega": {
        "id": 2,
        "descripcion": "Delivery"
      },
      "total": 1000,
      "fecha": "2023-05-13T00:00:00"
    }
]

GET id: 'https://localhost:7137/api/Comanda/8a34d04a-6e3e-4418-84c5-39a8aa94e996'
{
    "mercaderias": [
      {
        "id": 1,
        "nombre": "Berenjenas en Escabeche",
        "precio": 500,
        "tipo": {
          "id": 1,
          "descripcion": "Entrada"
        },
        "imagen": "http://drive.google.com/uc?export=view&id=19RZ1fcdX8FaYZapFayXSKkvSeh_eD8sx"
      },
      {
        "id": 2,
        "nombre": "Porotos a la vinagreta",
        "precio": 500,
        "tipo": {
          "id": 1,
          "descripcion": "Entrada"
        },
        "imagen": "http://drive.google.com/uc?export=view&id=1xdVsFI-bfmKKrxUOoRvLwNy_tpZi1tlL"
      }
    ],
    "formaEntrega": {
      "id": 2,
      "descripcion": "Delivery"
    },
    "total": 1000,
    "fecha": "2023-05-13T00:00:00"
  }*/
