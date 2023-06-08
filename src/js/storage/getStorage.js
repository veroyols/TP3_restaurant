const getStorage = () => {
    let storage = localStorage.getItem('selectedProduct');
    return JSON.parse(storage);
}
export default getStorage;
