import { getMercaderia } from '../services/mercaderias.js';
import MercaderiaDetail from '../components/MercaderiaDetail.js'
import onListItemClick from "../listener/onListItemClick.js";

//DETALLE DEL PRODUCTO
const openMercaderiaDetail = async (id) => {
    let mercaderia = await getMercaderia(id);

    let section = document.getElementById('modalDetail');
    let background = document.getElementById('background');
    background.className = 'background';
    //main.innerHTML = '';
    section.innerHTML = MercaderiaDetail(mercaderia);
    //agrego close al listener
    onListItemClick(document.querySelectorAll('#modal__close'))
}

export default openMercaderiaDetail;
