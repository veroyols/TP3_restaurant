import clicked from '../nav/clicked.js';
import { getComandas } from '../services/comandas.js';
import ComandaTable from '../components/ComandaTable.js';
import AsideSearcherCommands from '../components/AsideSearcherCommands.js';
import showCommandAside from '../Comandas/showCommandAside.js'
import onListItemClick from "../listener/onListItemClick.js";

//RENDER COMANDAS
const renderTodayComands = async () => { //+3h
    clicked('commands')
    //comandas de hoy 
    const dateTime = new Date()
    const date = dateTime.toISOString().split('T')
    let comandas = await getComandas(date[0]);
    
    let section = document.getElementById('allProducts')
    section.innerHTML = '';

    section.style.top ='0'

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

export default renderTodayComands;
