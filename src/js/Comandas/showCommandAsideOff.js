
const showCommandAsideOff = () => {
    let aside = document.getElementById('aside_search')
    let product = document.getElementById('allProducts')
    aside.classList.remove('animate')
    //aside.style.display = 'none'
    product.style.paddingTop = '170px'
}

export default showCommandAsideOff;
