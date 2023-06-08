import { getComandas } from "../services/comandas.js";
import ComandaTable from "../components/ComandaTable.js";
import onListItemClick from "../listener/onListItemClick.js";

const searchCommands = async () => {    
    const filterByDate = document.getElementById('searcher__date');
    console.log(filterByDate);
    const date = filterByDate.value;
    let comandas = await getComandas(date);
    let allCommands = document.getElementById('allCommands');
    allCommands.innerHTML='';
    allCommands.innerHTML += ComandaTable(comandas, date);

    onListItemClick(document.querySelectorAll('#button__searchCommands'))
}

export default searchCommands;
