
const showCommandAsideOff = () => {
    let aside = document.getElementById('aside_search')
    let product = document.getElementById('allProducts')
    aside.classList.remove('animate')
    product.style.paddingTop = '170px'
}

export default showCommandAsideOff;
