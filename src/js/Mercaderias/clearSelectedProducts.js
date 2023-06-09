import newCart from "../storage/newCart.js";
import setCounter from "../nav/setCounter.js";
import getStorage from "../storage/getStorage.js";

//LIMPIAR CARRITO
const clearSelectedProducts = () => {
    if(document.querySelector('.mercaderia__add')) {
        //limpiar productos seleccionados
        let selectedProduct = getStorage();
        for (let i = 0; i < selectedProduct.length; i++) { //codigo duplicado
            console.log('for')
            console.log(selectedProduct)
            const id = selectedProduct[i];
            console.log(id)
            if(document.querySelector(`.mercaderia__add[id='${id}']`)){
                const button = document.querySelector(`.mercaderia__add[id='${id}']`);
                const icon = button.querySelector('i');
                console.log(`Delete element with id ${id}`)
                icon.textContent = 'add_circle_outline'
                button.classList.remove('buttonSelected');
                button.classList.add('buttonNonSelected');
            }
        }
    }
    //contador en nav
    newCart()
    setCounter(0)     
}

export default clearSelectedProducts;
