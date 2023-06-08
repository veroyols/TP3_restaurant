import { getMercaderias } from '../services/mercaderias.js';
import Mercaderia from '../components/Mercaderia.js';
import onListItemClick from "../listener/onListItemClick.js"

const renderProducts = async () => {
    localStorage.clear()
    let selectedProduct = [];
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

    let section = document.getElementById('allProducts');
    let mercaderias = await getMercaderias();
    for (let i = 0; i < mercaderias.length; i++) {
        section.innerHTML += Mercaderia(mercaderias[i]);
    }
    //functions
    onListItemClick(document.querySelectorAll('.open_detail'))
    onListItemClick(document.querySelectorAll('.mercaderia__view'))
    onListItemClick(document.querySelectorAll('.mercaderia__add'))
}

export default renderProducts;
