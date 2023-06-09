const setStorage = (indexArray) => {
    localStorage.setItem('selectedProduct', JSON.stringify(indexArray));
}
export default setStorage;
