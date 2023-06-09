import getStorage from '../storage/getStorage.js';
import setCounter from '../nav/setCounter.js';
import setStorage from '../storage/setStorage.js';

//AGREGAR PRODUCTO AL CARRITO
const addMercaderiaToCart = (id) => {
    
    let selectedProduct = getStorage()
    const button = document.querySelector(`.mercaderia__add[id='${id}']`);
    const icon = button.querySelector('i');

    if (selectedProduct.includes(id)) {
        console.log(`Delete element with id ${id}`)
        selectedProduct = selectedProduct.filter(e => e != id)
        icon.textContent = 'add_circle_outline'
        button.classList.remove('buttonSelected');
        button.classList.add('buttonNonSelected');
    } else {
        console.log(`Add element with id ${id}`)
        selectedProduct.push(id);
        icon.textContent = 'playlist_add_check'
        button.classList.remove('buttonNonSelected');
        button.classList.add('buttonSelected');
    }
    console.log(selectedProduct)

    //contador en nav
    setCounter(selectedProduct.length)
    setStorage(selectedProduct)
}

export default addMercaderiaToCart;
