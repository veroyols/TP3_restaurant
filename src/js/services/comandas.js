const URL = 'https://localhost:7137/api/v1/Comanda';

const getComandas = async (date = '') => { 
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
    }
    let response = await fetch(URL, init)
    return await response.json()
}

const getComanda = async (id) => { 
    let result = []
    let response = await fetch(URL+'/'+id)
    if(response.ok){
        result = await response.json()
    }
    return result
}

export { getComandas, postComanda, getComanda }
