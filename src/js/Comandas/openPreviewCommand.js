import getStorage from "../storage/getStorage.js";
import { getMercaderia } from '../services/mercaderias.js';
import ComandaCreate from '../components/ComandaCreate.js';
import onListItemClick from "../listener/onListItemClick.js";

//PREVIEW COMANDA
const openPreviewCommand = async () => {
    //showCommandAsideOff();
    let selectedProduct = getStorage()

    let section = document.getElementById('modalDetail');

    let background = document.getElementById('background');
    background.className = 'background';

    let command = [];
    for (let i = 0; i < selectedProduct.length; i++) {
        let product = await getMercaderia(selectedProduct[i])
        command.push({id: product.id, nombre: product.nombre, precio: product.precio, imagen: product.imagen})
    }
    console.log(command)

    section.innerHTML = await ComandaCreate(command);
    if(selectedProduct.length > 0){
        const button = document.getElementById('comandaCreateNext');
        button.disabled = false;
    }

    //agrego close al listener
    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('.modal__next'))
}

export default openPreviewCommand;
