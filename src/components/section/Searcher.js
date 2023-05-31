const Searcher = () => {

    const mercaderiaTipo = [
        {name: "Seleccione", value: ''},
        {name: "Entrada", value: 1},
        {name: "Minutas", value: 2},
        {name: "Pastas", value: 3},
        {name: "Parrilla", value: 4},
        {name: "Pizzas", value: 5},
        {name: "Sandwich", value: 6},
        {name: "Ensaladas", value: 7},
        {name: "Bebidas", value: 8},
        {name: "Cerveza Artesanal", value: 9},
        {name: "Postres", value: 10}
    ]
    const orden = [
        {name: "Seleccione", value: ''},
        {name: "Ascendente", value: "ASC"},
        {name: "Descendente", value: "DESC"}
    ]

    return  `
    <article class="modalDetail">
        <div class="searcher">
            <h2>Buscar mercaderia</h2>
            <p class="mercaderiaDetailRight">Filtre mercaderias por nombre, tipo o precio</p>
            <form method="get">
                <ul>
                    <li>
                        <label for="name">Nombre: </label>
                        <input id="searcher__name" type="text" placeholder="Ingrese . . .">
                    </li>
                    <li>
                        <label for="type">Tipo: </label>
                        <select id="searcher__type">
                        ${mercaderiaTipo.map(type =>  { 
                            return `
                                <option value=${type.value}>${type.name}</option>
                            `}).join("")}
                        </select>
                    </li>
                    <li>
                        <label for="order">Ordenar por precio: </label>
                        <select id="searcher__order">
                        ${orden.map(type =>  { 
                            return `
                                <option value=${type.value}>${type.name}</option>
                            `}).join("")}
                        </select>
                    </li>
                </ul>
           </form>
        <button id="button__search" title="Buscar">Buscar</button>
        <button title="Cerrar" id="modal__close">Cerrar</button>
        <i class="material-icons" title="Cerrar" id="modal__close">close</i>
    </div>
</article>
`
}

export default Searcher; 