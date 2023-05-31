import Mercaderia from "../components/section/Mercaderia.js";
import MercaderiaDetail from "../components/section/MercaderiaDetail.js";
import { getMercaderias, getMercaderia } from "../services/mercaderias.js";
import { postComanda } from "../services/comandas.js"
import ComandaCreate from "../components/section/ComandaCreate.js";
import FormaEntrega from "../components/section/FormaEntrega.js";
import ComandaTicket from "../components/section/ComandaTicket.js";
import Searcher from "../components/section/Searcher.js";

//CARRITO
var selectedProduct = []; 
//[''] /*sesion por pestana, local storage*/

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
            element.addEventListener('click', () => openMercaderiaDetail(element.id))
        } else if (element.classList.contains('mercaderia__add')) {
            element.addEventListener('click', () => addMercaderiaToCart(element.id))
        } else if (element.matches('#modal__close')) { //button
            element.addEventListener('click', () => closeModal()) //html
        } else if (element.classList.contains('selectedProduct')) {
            element.addEventListener('click', () => openPreviewCommand())
        } else if (element.classList.contains('modal__next')) { 
            element.addEventListener('click', () => openNextModal()) 
        } else if (element.classList.contains('modal__finish')) { 
          element.addEventListener('click', () => createComanda()) 
        } else if (element.classList.contains('search')) { 
            element.addEventListener('click', () => openModalSearch(element)) 
        } else if (element.matches('#button__search')) { 
            element.addEventListener('click', () => searchItems(element)) 
        }
    });
}

//AGREGAR PRODUCTO
const addMercaderiaToCart = (id) => {
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
const openMercaderiaDetail = async (id) => {
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
const closeModal = async () => {
    let section = document.getElementById("modalDetail");
    section.innerHTML ="";
    let background = document.getElementById("background");
    background.className = "";
}


//PREVIEW COMANDA
const openPreviewCommand = async () => {
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
    if(selectedProduct.length > 0){
        const button = document.getElementById('comandaCreateNext');
        button.disabled = false;
    }

    //agrego close al listener
    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('.modal__next'))
}
//NEXT -> FormaEntrega
const selectFormaEntrega = (event) => {
    const selected = event.target;
    const delivery = document.querySelectorAll('.options__delivery button');
    delivery.forEach(button => {
        button.classList.remove('selected');
    });
    selected.classList.add('selected');
    const button = document.getElementById('formaEntregaSelected');
    button.disabled = false;
}

const openNextModal = () => {
    let section = document.getElementById("modalDetail");
    section.innerHTML = FormaEntrega()

    const delivery = document.querySelectorAll('.options__delivery button');
    
    for (let i = 0; i < delivery.length; i++) {
        delivery[i].addEventListener('click', selectFormaEntrega);
    }

    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('.modal__finish'))
}
//POST COMANDA
const createComanda = async () => {
    console.log('POST comanda')
    const delivery = document.querySelectorAll('.options__delivery button');
    let formaEntrega;
    for (let i = 0; i < delivery.length ; i++) {
        if (delivery[i].classList.contains('selected')) {
            formaEntrega = delivery[i].value;
        }  
    }

    const body = 
    {
        mercaderias: selectedProduct,
        formaEntrega: formaEntrega,
    }
    let response = await postComanda(body)

    for (let i = 0; i < selectedProduct.length; i++) {
        console.log("for")
        console.log(selectedProduct)
        const id = selectedProduct[i];
        console.log(id)
        const button = document.querySelector(`.mercaderia__add[id='${id}']`);
        const icon = button.querySelector("i");
        console.log(`Delete element with id ${id}`)
        icon.textContent = 'add_circle_outline'
        button.classList.remove('buttonSelected');
        button.classList.add('buttonNonSelected');
    }
    //contador en nav
    selectedProduct = [];
    let counter = document.getElementById("counter");
    counter.textContent = `(${selectedProduct.length})`;        

    let section = document.getElementById("modalDetail");
    section.innerHTML = await ComandaTicket(response)

    
    onListItemClick(document.querySelectorAll('#modal__close'))
    
}


//MODAL SEARCHER
const openModalSearch = (element) => {
    console.log(element)
    let section = document.getElementById("modalDetail");

    let background = document.getElementById("background");
    background.className = "background";

    section.innerHTML = Searcher();

    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('#button__search'))
}


//NOMBRE TIPO ORDEN
const searchItems = async (el) => { 
    console.log(el);
    console.log('GET mercaderias')

    const filterByName = document.getElementById('searcher__name');
    const name = filterByName.value;
    console.log(name)

    const filterByType = document.getElementById('searcher__type');
    const type = filterByType.value;
    console.log(type)

    const filterByPrice = document.getElementById('searcher__order');
    const order = filterByPrice.value;
    console.log(order)

    const filtered = await getMercaderias(type, name, order);
    console.log(filtered)

}