import Mercaderia from "../components/section/Mercaderia.js";
import MercaderiaDetail from "../components/section/MercaderiaDetail.js";
import { getMercaderias, getMercaderia } from "../services/mercaderias.js";
import { postComanda } from "../services/comandas.js"
import ComandaCreate from "../components/section/ComandaCreate.js";
import FormaEntrega from "../components/section/FormaEntrega.js";
import ComandaTicket from "../components/section/ComandaTicket.js";
import Searcher from "../components/section/Searcher.js";

//CARRITO
var selectedProduct = []; //[''] /*sesion por pestana, local storage*/

//RENDER
const render = async () => {
    let main = document.getElementById("allProducts");
    let mercaderias = await getMercaderias();
    for (let i = 0; i < mercaderias.length; i++) {
        main.innerHTML += Mercaderia(mercaderias[i], selectedProduct);
    }
    onListItemClick(document.querySelectorAll('.open_detail'))
    onListItemClick(document.querySelectorAll('.selectorType'))
    onListItemClick(document.querySelectorAll('.mercaderia__view'))
    onListItemClick(document.querySelectorAll('.mercaderia__add'))
    onListItemClick(document.querySelectorAll('.selectedProduct'))
    onListItemClick(document.querySelectorAll('.search'))
}
window.onload = render;

//CLICK
const onListItemClick = (elements) => {
    elements.forEach(element => {
        if (element.classList.contains('open_detail')) {
            element.addEventListener('click', () => onClickViewButton(element.id))
        } else if (element.classList.contains('mercaderia__add')) {
            element.addEventListener('click', () => onClickAddButton(element.id))
        } 
        
        else if (element.matches('#modal__close')) { //button
            element.addEventListener('click', () => onClickCloseButton()) //html
        } 

        else if (element.classList.contains('selectedProduct')) {
            element.addEventListener('click', () => onClickPreviewCommand())
        } else if (element.classList.contains('modal__next')) { 
            element.addEventListener('click', () => onClickNextButton()) 
        } else if (element.classList.contains('modal__finish')) { 
          element.addEventListener('click', () => onClickCreateButton()) 
        } else if (element.classList.contains('selectorType')) { 
          element.addEventListener('click', () => onClickSelectorType(element.value)) 
        } else if (element.classList.contains('search')) { 
            element.addEventListener('click', () => onClickSearch(element)) 
        }
    });
}

//AGREGAR PRODUCTO
const onClickAddButton = (id) => {
    const button = document.querySelector(`.mercaderia__add[id='${id}']`);
    const icon = button.querySelector("i");

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
    let counter = document.getElementById("counter");
    counter.textContent = `(${selectedProduct.length})`;
}

//DETALLE DEL PRODUCTO
const onClickViewButton = async (id) => {
    let mercaderia = await getMercaderia(id);
    let section = document.getElementById("modalDetail");
    let background = document.getElementById("background");
    background.className = "background";
    //main.innerHTML = "";
    section.innerHTML = MercaderiaDetail(mercaderia);
    //agrego close al listener
    onListItemClick(document.querySelectorAll('#modal__close'))
}
//CERRAR MODAL
const onClickCloseButton = async () => {
    let section = document.getElementById("modalDetail");
    section.innerHTML ="";
    let background = document.getElementById("background");
    background.className = "";
}


//PREVIEW COMANDA
const onClickPreviewCommand = async () => {
    let section = document.getElementById("modalDetail");

    let background = document.getElementById("background");
    background.className = "background";
    
    let command = [];
    for (let i = 0; i < selectedProduct.length; i++) {
        let product = await getMercaderia(selectedProduct[i])
        command.push({id: product.id, nombre: product.nombre, precio: product.precio, imagen: product.imagen})
    }
    console.log(command)

    section.innerHTML = await ComandaCreate(command);
    //agrego close al listener
    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('.modal__next'))
}
//NEXT -> FormaEntrega
const onClickNextButton = async () => {
    let section = document.getElementById("modalDetail");
    section.innerHTML = await FormaEntrega()

    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('.modal__finish'))
}
//POST COMANDA
const onClickCreateButton = async () => {
    console.log('creando comanda')
    const delivery = document.querySelectorAll('.delivery');
    let formaEntrega;
    for (let i = 0; i < delivery.length; i++) {
        const op = delivery[i];
        if (op.checked) {
            formaEntrega = op.value;
        }  
    }

    const body = 
    {
        mercaderias: selectedProduct,
        formaEntrega: formaEntrega,
    }
    let response = await postComanda(body)

    let section = document.getElementById("modalDetail");
    section.innerHTML = await ComandaTicket(response)
    onListItemClick(document.querySelectorAll('#modal__close'))
}
//SELECTOR TYPE
const onClickSelectorType = async (id) => { //recibe el value y lo imprime
    let section = document.getElementById("modalDetail");
    let mercaderias = await getMercaderias(id);
  
    let background = document.getElementById("background");
    background.className = "background";

    title.classList.add('title');
    title.textContent = `Filter ${id}`;

    const div = document.createElement('div');
    div.classList.add("filterType")
    /*
    let main = document.querySelector("main");
    title.classList.add('title');
    title.textContent = "sectionData.title";
    */
    for (let i = 0; i < mercaderias.length; i++) {
        div.innerHTML += Mercaderia(mercaderias[i], selectedProduct);
    }
    section.appendChild(div)
    onListItemClick(document.querySelectorAll('.mercaderia__add'))
}
//SEARCH
const onClickSearch = async (element) => {
    console.log(element)
    let section = document.getElementById("modalDetail");

    let background = document.getElementById("background");
    background.className = "background";

    section.innerHTML = Searcher();

    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('.modal__search'))
}