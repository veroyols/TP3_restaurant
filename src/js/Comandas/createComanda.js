import { postComandaStorage } from "../services/comandas.js";
import refresh from '../home/refresh.js';
import ComandaTicket from "../components/ComandaTicket.js";
import onListItemClick from "../listener/onListItemClick.js";
import getStorage from "../storage/getStorage.js";

//POST COMANDA
const createComanda = async () => {
    console.log('POST comanda')
    const delivery = document.querySelectorAll('.options__delivery button');
    let formaEntrega;
    for (let i = 0; i < delivery.length ; i++) {
        if (delivery[i].classList.contains('selected')) {
            formaEntrega = delivery[i].value;
        }  
    }
    let selectedProduct = getStorage()

    const body = 
    {
        mercaderias: selectedProduct,
        formaEntrega: formaEntrega,
    }
    //let response = await postComanda(body)
    postComandaStorage(body)
    
    //limpiar
    refresh();

    let section = document.getElementById('modalDetail');
    section.innerHTML = ComandaTicket(response)

    onListItemClick(document.querySelectorAll('#modal__close'))
}

export default createComanda;
