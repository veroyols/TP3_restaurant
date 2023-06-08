import showCommandAsideOff from '../Comandas/showCommandAsideOff.js';
import clearSelectedProducts from '../Mercaderias/clearSelectedProducts.js';
import renderProducts from './renderProducts.js';
import clicked from '../nav/clicked.js';

//limpiar home
const refresh = async () => {
    
    showCommandAsideOff();
    
    let section = document.getElementById('allProducts');
    section.innerHTML = '';

    clearSelectedProducts()
    
    let allCommands = document.getElementById('allCommands');
    allCommands.innerHTML ='';
    
    if(section.classList.contains('selectedProducts')){
        section.classList.remove('selectedProducts')
        section.classList.add('allProducts')
    }

    await renderProducts();
    clicked('home')
}

export default refresh;
