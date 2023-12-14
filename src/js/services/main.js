/*
import { getMercaderias, getMercaderia } from '../services/mercaderias.js';
import { postComanda, getComandas } from '../services/comandas.js'
import Mercaderia from '../components/section/Mercaderia.js';
import MercaderiaDetail from '../components/section/MercaderiaDetail.js';
import ComandaCreate from '../components/section/ComandaCreate.js';
import FormaEntrega from '../components/section/FormaEntrega.js';
import ComandaTicket from '../components/section/ComandaTicket.js';
import Searcher from '../components/section/Searcher.js';
import ComandaTable from '../components/section/ComandaTable.js';
import SearcherCommands from '../components/section/SearcherCommands.js';
import AsideSearcherCommands from '../components/section/AsideSearcherCommands.js';

//CARRITO
//var selectedProduct = []; 

const init = async () => {
    renderProducts();
    //nav icons
    onListItemClick(document.querySelectorAll('.home'))
    onListItemClick(document.querySelectorAll('.search'))
    onListItemClick(document.querySelectorAll('.selectedProduct'))
    onListItemClick(document.querySelectorAll('.commands'))

}

//RENDERProducts
const renderProducts = async () => {
    localStorage.clear()
    let selectedProduct = [];
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

    let section = document.getElementById('allProducts');
    let mercaderias = await getMercaderias();
    for (let i = 0; i < mercaderias.length; i++) {
        section.innerHTML += Mercaderia(mercaderias[i]);
    }
    //functions
    onListItemClick(document.querySelectorAll('.open_detail'))
    //onListItemClick(document.querySelectorAll('.selectorType'))
    onListItemClick(document.querySelectorAll('.mercaderia__view'))
    onListItemClick(document.querySelectorAll('.mercaderia__add'))
}

window.onload = init;

//CLICK
const onListItemClick = (elements) => {
    elements.forEach(element => {
    //nav icons
        if (element.classList.contains('home')) { 
            element.addEventListener('click', () => refresh()) 
        } else if (element.classList.contains('search')) { 
            element.addEventListener('click', () => openModalSearch()) 
        }  else if (element.classList.contains('selectedProduct')) {
            element.addEventListener('click', () => openPreviewCommand())
        } else if (element.classList.contains('commands')) {
            element.addEventListener('click', () => renderTodayComands())
        }


    //functions
        else if (element.classList.contains('open_detail')) {
            element.addEventListener('click', () => openMercaderiaDetail(element.id))
        } else if (element.classList.contains('mercaderia__add')) {
            element.addEventListener('click', () => addMercaderiaToCart(element.id))
        } else if (element.matches('#modal__close')) { //button
            element.addEventListener('click', () => closeModal()) //html
        } else if (element.classList.contains('modal__next')) { 
            element.addEventListener('click', () => openNextModal()) 
        } else if (element.classList.contains('modal__finish')) { 
          element.addEventListener('click', () => createComanda()) 
        } else if (element.matches('#button__search')) { 
            element.addEventListener('click', () => searchItems()) 
        } else if (element.matches('#button__searchCommands')) { 
            element.addEventListener('click', () => SearchCommands()) 
        }
    });
}

//pintar nav icons
const clicked = (id) => { //id= home, clicked('search'), selectedProduct, clicked('commands')
    //pinto icon nav
    let nav = document.getElementById('navList')
    console.log(nav.children)
    for (let i = 0; i < nav.children.length; i++) {
        const child =  nav.children[i];
        console.log(child)
        if(child.classList.contains('clicked')){
            child.classList.remove('clicked')
        }
    }
    let icon = document.getElementById(id)
    icon.classList.add('clicked')
}

const showCommandAside = () => {
    //mostrar aside
    let aside = document.getElementById('aside_search')
    let main = document.getElementById('main')
    aside.style.display = 'block'
    main.classList.add('slideMain')
}
const showCommandAsideOff = () => {
    let aside = document.getElementById('aside_search')
    let main = document.getElementById('main')
    aside.style.display = 'none'
    main.classList.remove('slideMain')
}
//limpiar //home
const refresh = async () => {
    showCommandAsideOff();
    
    let section = document.getElementById('allProducts');
    section.innerHTML = '';
    clearSelectedProducts()
    let allCommands = document.getElementById('allCommands');
    allCommands.innerHTML ='';
    if(section.classList.contains('selectedProducts')){
        section.classList.remove('selectedProducts')
        section.classList.add('allProducts')
    }
    await renderProducts();
    clicked('home')
}

//LIMPIAR CARRITO
const clearSelectedProducts = () => {
    if(document.querySelector('.mercaderia__add')) {
        //limpiar productos seleccionados
        let storage = localStorage.getItem('selectedProduct');
        let selectedProduct = JSON.parse(storage);

        for (let i = 0; i < selectedProduct.length; i++) { //codigo duplicado
            console.log('for')
            console.log(selectedProduct)
            const id = selectedProduct[i];
            console.log(id)
            if(document.querySelector(`.mercaderia__add[id='${id}']`)){
                const button = document.querySelector(`.mercaderia__add[id='${id}']`);
                const icon = button.querySelector('i');
                console.log(`Delete element with id ${id}`)
                icon.textContent = 'add_circle_outline'
                button.classList.remove('buttonSelected');
                button.classList.add('buttonNonSelected');
            }
        }
    }
    //contador en nav
    localStorage.clear()
    let selectedProduct = [];
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    let counter = document.getElementById('counter');
    counter.textContent = `(${selectedProduct.length})`;        
}

//AGREGAR PRODUCTO AL CARRITO
const addMercaderiaToCart = (id) => {
    let storage = localStorage.getItem('selectedProduct');
    let selectedProduct = JSON.parse(storage);

    const button = document.querySelector(`.mercaderia__add[id='${id}']`);
    const icon = button.querySelector('i');

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
    let counter = document.getElementById('counter');
    counter.textContent = `(${selectedProduct.length})`;
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

}

//DETALLE DEL PRODUCTO
const openMercaderiaDetail = async (id) => {
    let mercaderia = await getMercaderia(id);
    let section = document.getElementById('modalDetail');
    let background = document.getElementById('background');
    background.className = 'background';
    //main.innerHTML = '';
    section.innerHTML = MercaderiaDetail(mercaderia);
    //agrego close al listener
    onListItemClick(document.querySelectorAll('#modal__close'))
}
//CERRAR MODAL
const closeModal = () => {
    let section = document.getElementById('modalDetail');
    section.innerHTML ='';
    let background = document.getElementById('background');
    background.className = '';
}

//PREVIEW COMANDA
const openPreviewCommand = async () => {
    //showCommandAsideOff();
    let storage = localStorage.getItem('selectedProduct');
    let selectedProduct = JSON.parse(storage)

    let section = document.getElementById('modalDetail');

    let background = document.getElementById('background');
    background.className = 'background';

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
//Se ven los productos seleccionados NEXT -> FormaEntrega
const openNextModal = () => {
    let section = document.getElementById('modalDetail');
    section.innerHTML = FormaEntrega()

    const delivery = document.querySelectorAll('.options__delivery button');
    
    for (let i = 0; i < delivery.length; i++) {
        delivery[i].addEventListener('click', selectFormaEntrega);
    }

    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('.modal__finish'))
}
//Se selecciona la forma de entrega
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
    let storage = localStorage.getItem('selectedProduct');
    let selectedProduct = JSON.parse(storage)

    const body = 
    {
        mercaderias: selectedProduct,
        formaEntrega: formaEntrega,
    }
    let response = await postComanda(body)
    
    //limpiar
    refresh();

    let section = document.getElementById('modalDetail');
    section.innerHTML = ComandaTicket(response)

    onListItemClick(document.querySelectorAll('#modal__close'))
    
}

//MODAL SEARCHER: opciones de busqueda
const openModalSearch = () => {
    //showCommandAsideOff();


    let section = document.getElementById('modalDetail')
    let background = document.getElementById('background')
    background.className = 'background'

    section.innerHTML = Searcher()

    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('#button__search'))
}


//NOMBRE TIPO ORDEN: enviar consulta
const searchItems = async () => { 
    console.log('GET mercaderias')
    let allCommands = document.getElementById('allCommands');
    allCommands.innerHTML='';
    
    const filterByName = document.getElementById('searcher__name');
    const name = filterByName.value;
    console.log(name)
    
    const filterByType = document.getElementById('searcher__type');
    const type = filterByType.value;
    console.log(type)

    const filterByPrice = document.getElementById('searcher__order');
    const order = filterByPrice.value;
    console.log(order)
    //let aside = document.getElementById('aside_search')
    //aside.style.display = 'block'
    showCommandAsideOff();
    let main = document.getElementById('allProducts');
    ///cambiar css por searched products****************************************************************************************
    if(main.classList.contains('allProducts')){
        main.classList.remove('allProducts')
        main.classList.add('selectedProducts')
    }
    //showProductAside();***********************************************************************************************
    
    const filtered = await getMercaderias(type, name, order);
    console.log(filtered)
    
    main.innerHTML = '';
    
    closeModal();
    
    for (let i = 0; i < filtered.length; i++) {
        main.innerHTML += Mercaderia(filtered[i], selectedProduct);
    }
    //functions
    onListItemClick(document.querySelectorAll('.open_detail'))
    onListItemClick(document.querySelectorAll('.mercaderia__view'))
    onListItemClick(document.querySelectorAll('.mercaderia__add'))
    onListItemClick(document.querySelectorAll('.modal__finish'))

    clicked('search')
}

//MODAL SEARCHER: buscar comandas
/*const openModalSearchCommands = () => {    
    let section = document.getElementById('modalDetail')
    let background = document.getElementById('background')
    background.className = 'background'
    
    section.innerHTML = SearcherCommands()
    //setear el default value******************************************************************************************
    const date = document.getElementById('searcher__date');
    console.log(date);
    date.valueAsDate = new Date()

    onListItemClick(document.querySelectorAll('#modal__close'))
    onListItemClick(document.querySelectorAll('#button__searchCommands'))
}*/

//RENDER COMANDAS
/*
const renderTodayComands = async () => { //+3h
    clicked('commands')
    //comandas de hoy 
    const dateTime = new Date()
    const date = dateTime.toISOString().split('T')
    let comandas = await getComandas(date[0]);

    
    let section = document.getElementById('allProducts')
    section.innerHTML = '';
    let allCommands = document.getElementById('allCommands');
    allCommands.innerHTML='';
    allCommands.innerHTML += ComandaTable(comandas, date[0]);
    
    //closeModal();
    
    let aside = document.getElementById('aside_search')
    aside.innerHTML = AsideSearcherCommands();
    showCommandAside();
    
    let inputDate = document.getElementById('searcher__date');
    inputDate.value = date[0]

    onListItemClick(document.querySelectorAll('#button__searchCommands'))
}

const SearchCommands = async () => {    
    const filterByDate = document.getElementById('searcher__date');
    console.log(filterByDate);
    const date = filterByDate.value;
    let comandas = await getComandas(date);
    let allCommands = document.getElementById('allCommands');
    allCommands.innerHTML='';
    allCommands.innerHTML += ComandaTable(comandas, date);

    onListItemClick(document.querySelectorAll('#button__searchCommands'))
}
*/