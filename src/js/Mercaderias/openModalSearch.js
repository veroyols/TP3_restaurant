import Searcher from '../components/Searcher.js';
import onListItemClick from "../listener/onListItemClick.js";

//MODAL SEARCHER: opciones de busqueda
const openModalSearch = () => {
    //showCommandAsideOff();
    let section = document.getElementById('modalDetail')
    let background = document.getElementById('background')
    background.className = 'background'

    section.innerHTML = Searcher()

    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('#button__search'))
}

export default openModalSearch;
