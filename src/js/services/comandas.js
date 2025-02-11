//const URL = 'https://localhost:7137/api/v1/Comanda';
//const URL = 'https://api-restaurant-sctc.onrender.com/api/v1/Comanda'
const URL = '/src/json/comanda.json'; 


const getComandas = async (date = '') => { 
    let result = []
    //let response = await fetch(URL+'?fecha='+date)
    let response = await fetch(URL)
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
    if(response.ok){
        result = await response.json()
    }
    return result
}

const postComandaStorage = (body) => {
    //localStorage.setItem("productos", JSON.stringify(productos));
    console.log("Producto guardado:", body);
};


const getComanda = async (id) => { 
    let result = []
    let response = await fetch(URL+'/'+id)
    if(response.ok){
        result = await response.json()
    }
    return result
}

export { getComandas, postComanda, postComandaStorage, getComanda }
