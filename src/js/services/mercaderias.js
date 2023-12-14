//const URL = 'https://localhost:7137/api/v1/Mercaderia'
const URL = 'https://api-restaurant-sctc.onrender.com/api/v1/Mercaderia'

const getMercaderias = async (tipo = '', nombre = '', orden = '') => { 
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
