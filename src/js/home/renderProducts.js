import { getMercaderias } from '../services/mercaderias.js';
import Mercaderia from '../components/Mercaderia.js';
import onListItemClick from "../listener/onListItemClick.js"
import newCart from '../storage/newCart.js';

const renderProducts = async () => {
    newCart()

    let section = document.getElementById('allProducts');
    let mercaderias = await getMercaderias();
    console.log(mercaderias);
    for (let i = 0; i < mercaderias.length; i++) {
        section.innerHTML += Mercaderia(mercaderias[i]);
    }
    //functions
    onListItemClick(document.querySelectorAll('.open_detail'))
    onListItemClick(document.querySelectorAll('.mercaderia__view'))
    onListItemClick(document.querySelectorAll('.mercaderia__add'))
}

export default renderProducts;
