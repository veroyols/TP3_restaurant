import refresh from '../home/refresh.js'
import openModalSearch from '../Mercaderias/openModalSearch.js'
import openPreviewCommand from '../Comandas/openPreviewCommand.js'
import renderTodayComands from '../Ventas/renderTodayComands.js'

import openMercaderiaDetail from '../Mercaderias/openMercaderiaDetail.js'
import addMercaderiaToCart from '../home/addMercaderiaToCart.js'
import closeModal from '../Modal/closeModal.js'
import openNextModal from '../Comandas/openNextModal.js'
import createComanda from '../Comandas/createComanda.js'
import searchItems from '../Mercaderias/searchItems.js'
import searchCommands from '../Ventas/searchCommands.js'

//CLICK
const onListItemClick = (elements) => {
    elements.forEach(element => {
    //nav icons
        if (element.classList.contains('home')) { 
            element.addEventListener('click', () => refresh()) 
        } else if (element.classList.contains('search')) { 
            element.addEventListener('click', () => openModalSearch()) 
        }  else if (element.classList.contains('selectedProduct')) {
            element.addEventListener('click', () => openPreviewCommand())
        } else if (element.classList.contains('commands')) {
            element.addEventListener('click', () => renderTodayComands())
        }

    //functions
        else if (element.classList.contains('open_detail')) {
            element.addEventListener('click', () => openMercaderiaDetail(element.id))
        } else if (element.classList.contains('mercaderia__add')) {
            element.addEventListener('click', () => addMercaderiaToCart(element.id))
        } else if (element.matches('#modal__close')) { //button
            element.addEventListener('click', () => closeModal()) //html
        } else if (element.classList.contains('modal__next')) { 
            element.addEventListener('click', () => openNextModal()) 
        } else if (element.classList.contains('modal__finish')) { 
          element.addEventListener('click', () => createComanda()) 
        } else if (element.matches('#button__search')) { 
            element.addEventListener('click', () => searchItems()) 
        } else if (element.matches('#button__searchCommands')) { 
            element.addEventListener('click', () => searchCommands()) 
        }
    });
}

export default onListItemClick;
