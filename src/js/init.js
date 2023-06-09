import renderFooter from "./footer/renderFooter.js";
import renderProducts from "./home/renderProducts.js";
import onListItemClick from "./listener/onListItemClick.js"

const init = async () => {
    renderFooter();
    renderProducts();
    //nav icons
    onListItemClick(document.querySelectorAll('.home'))
    onListItemClick(document.querySelectorAll('.search'))
    onListItemClick(document.querySelectorAll('.selectedProduct'))
    onListItemClick(document.querySelectorAll('.commands'))
}

window.onload = init;
