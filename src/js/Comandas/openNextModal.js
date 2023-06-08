import FormaEntrega from "../components/FormaEntrega.js";
import selectFormaEntrega from "./selectFormaEntrega.js";
import onListItemClick from "../listener/onListItemClick.js";

//Se ven los productos seleccionados NEXT -> FormaEntrega
const openNextModal = () => {
    let section = document.getElementById('modalDetail');
    section.innerHTML = FormaEntrega()

    const delivery = document.querySelectorAll('.options__delivery button');
    
    for (let i = 0; i < delivery.length; i++) {
        delivery[i].addEventListener('click', selectFormaEntrega);
    }

    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('.modal__finish'))
}

export default openNextModal;
