const newCart = () => {
    localStorage.clear()
    let selectedProduct = [];
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
}

export default newCart;
