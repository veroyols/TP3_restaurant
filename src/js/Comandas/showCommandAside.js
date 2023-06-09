
const showCommandAside = () => {
    let aside = document.getElementById('aside_search')
    //aside.style.display = 'block'
    let product = document.getElementById('allProducts')
    aside.classList.add('animate')
    product.style.paddingTop = '88px'
    product.style.marginBottom = '0'
}

export default showCommandAside;
