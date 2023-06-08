import showCommandAsideOff from '../Comandas/showCommandAsideOff.js';
import { getMercaderias } from '../services/mercaderias.js';
import closeModal from '../Modal/closeModal.js';
import Mercaderia from '../components/Mercaderia.js';
import onListItemClick from "../listener/onListItemClick.js";
import clicked from '../nav/clicked.js';

//NOMBRE TIPO ORDEN: enviar consulta
const searchItems = async () => { 
    console.log('GET mercaderias')
    let allCommands = document.getElementById('allCommands');
    allCommands.innerHTML='';
    
    const filterByName = document.getElementById('searcher__name');
    const name = filterByName.value;
    console.log(name)
    
    const filterByType = document.getElementById('searcher__type');
    const type = filterByType.value;
    console.log(type)

    const filterByPrice = document.getElementById('searcher__order');
    const order = filterByPrice.value;
    console.log(order)

    showCommandAsideOff();

    let main = document.getElementById('allProducts');

    if(main.classList.contains('allProducts')){
        main.classList.remove('allProducts')
        main.classList.add('selectedProducts')
    }
    
    const filtered = await getMercaderias(type, name, order);
    console.log(filtered)
    
    main.innerHTML = '';
    
    closeModal();
    
    for (let i = 0; i < filtered.length; i++) {
        main.innerHTML += Mercaderia(filtered[i]);
    }
    //functions
    onListItemClick(document.querySelectorAll('.open_detail'))
    onListItemClick(document.querySelectorAll('.mercaderia__view'))
    onListItemClick(document.querySelectorAll('.mercaderia__add'))
    onListItemClick(document.querySelectorAll('.modal__finish'))

    clicked('search')
}

export default searchItems;
