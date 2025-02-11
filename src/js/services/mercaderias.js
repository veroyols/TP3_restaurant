//const URL = 'https://localhost:7137/api/v1/Mercaderia'
//const URL = 'https://api-restaurant-sctc.onrender.com/api/v1/Mercaderia'
const URL = '/src/data.json'; // Ruta del JSON local

const fetchOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Permissions-Policy': 'interest-cohort=()' // Agregar el encabezado Permissions-Policy
    }
};

const getMercaderias = async (tipo = '', nombre = '', orden = '') => { 
    let result = []
    //let response = await fetch(`${URL}?tipo=${tipo}&nombre=${nombre}&orden=${orden}`, fetchOptions)
    let response = await fetch(URL, fetchOptions);
    
    if(response.ok){
        result = await response.json()
        
        //// JSON.DATA
        if (tipo) {
            result = result.filter(item => item.tipo === tipo);
        }
        if (nombre) {
            result = result.filter(item => 
                item.nombre.toLowerCase().includes(nombre.toLowerCase())
            );
        }
        if (orden === 'asc') {
            result.sort((a, b) => a.precio - b.precio);
        } else if (orden === 'desc') {
            result.sort((a, b) => b.precio - a.precio);
        }
        //// JSON.DATA
    }

    return result
}

const getMercaderia = async (id) => { 
    console.log("clic")
    console.log(id)
    let result = []
    let response = await fetch(URL, fetchOptions);
    
    if(response.ok){
        let result = await response.json(); 
        console.log("Datos recibidos:", result); 

        //// JSON.DATA
        if (id) {
            let item = result.find(item => item.id === Number(id));
            console.log(item);
            return item 
        }
        //// JSON.DATA
    }
    return result
}

const postMercaderia = async (body) => {
    let result = []
    let init = {
        method: 'POST',
        fetchOptions,
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
