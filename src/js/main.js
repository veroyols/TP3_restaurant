import Mercaderia from "../components/section/Mercaderia.js";
import MercaderiaDetail from "../components/section/MercaderiaDetail.js";
import { getMercaderias, getMercaderia } from "../services/mercaderias.js";
import { postComanda } from "../services/comandas.js"
import ComandaCreate from "../components/section/ComandaCreate.js";
import FormaEntrega from "../components/section/FormaEntrega.js";

//CARRITO
var selectedProduct = []; //['']

//RENDER
const render = async () => {
    let main = document.getElementById("allProducts");
    let mercaderias = await getMercaderias();
    for (let i = 0; i < mercaderias.length; i++) {
        main.innerHTML += Mercaderia(mercaderias[i], selectedProduct);
    }
    onListItemClick(document.querySelectorAll('.mercaderia'))
    onListItemClick(document.querySelectorAll('.mercaderia__view'))
    onListItemClick(document.querySelectorAll('.mercaderia__add'))
    onListItemClick(document.querySelectorAll('.selectedProduct'))
}
window.onload = render;

//CLICK
const onListItemClick = (elements) => {
    elements.forEach(element => {
        if (element.classList.contains('mercaderia')) {
            element.addEventListener('mouseover', () => onMouseOver())
        } else if (element.classList.contains('mercaderia__view')) {
            element.addEventListener('click', () => onClickViewButton(element.id))
        } else if (element.classList.contains('mercaderia__add')) {
            element.addEventListener('click', () => onClickAddButton(element.id))
        } else if (element.classList.contains('modal__close')) { //button
            element.addEventListener('click', () => onClickCloseButton(element.id)) //html
        } else if (element.classList.contains('selectedProduct')) {
            element.addEventListener('click', () => onClickPreviewCommand())
        } else if (element.classList.contains('modal__next')) { 
            element.addEventListener('click', () => onClickNextButton()) 
          } else if (element.classList.contains('modal__finish')) { 
            element.addEventListener('click', () => onClickCreateButton()) 
        }        
    });
}

//AGREGAR PRODUCTO
const onClickAddButton = (id) => {
    const button = document.querySelector(`.mercaderia__add[id='${id}']`);
    console.log(button.textContent)
    if (selectedProduct.includes(id)) {
        console.log(`Delete element with id ${id}`)
        selectedProduct = selectedProduct.filter(e => e != id)
        button.textContent = "Agregar"
        button.classList.toggle('buttonSelected')
        console.log(button.textContent)
    } else {
        console.log(`Add element with id ${id}`)
        selectedProduct.push(id);
        button.textContent = "Quitar"
        button.classList.toggle('buttonNonSelected')
    }
    console.log(selectedProduct)

    //contador en nav
    let counter = document.getElementById("counter");
    counter.textContent = `(${selectedProduct.length})`;
}
//MOUSE OVER
const onMouseOver = async (id) => {
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
    onListItemClick(document.querySelectorAll('.modal__close'))
}
//CERRAR MODAL
const onClickCloseButton = async (id) => {
    console.log("cerrar"+id)
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
    onListItemClick(document.querySelectorAll('.modal__close'))
    onListItemClick(document.querySelectorAll('.modal__next'))
}
//NEXT -> FormaEntrega
const onClickNextButton = async () => {
    alert("next")
    let section = document.getElementById("modalDetail");
    section.innerHTML = '';
    section.innerHTML = await FormaEntrega([{id: "product.id", nombre: "product.nombre", precio: "product.precio", imagen: "product.imagen"}])

    onListItemClick(document.querySelectorAll('.modal__close'))
    onListItemClick(document.querySelectorAll('.modal__finish'))
}
//POST COMANDA
const onClickCreateButton = async () => {
    console.log('creando comanda')
    const delivery = document.querySelectorAll('.delivery');
    console.log(delivery)
    let formaEntrega;
    for (let i = 0; i < delivery.length; i++) {
        const op = delivery[i];
        console.log(op)
        if (op.checked) {
            formaEntrega = op.value;
        }  
    }

    const body = 
    {
        mercaderias: selectedProduct,
        formaEntrega: formaEntrega,
    }
    console.log(body)

    let response = await postComanda(body)

    console.log(response)

    let section = document.getElementById("modalDetail");
    section.innerHTML ="";
    let background = document.getElementById("background");
    background.className = "";
}
