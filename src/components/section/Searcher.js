const Searcher = () => {

    const mercaderiaTipo = [
        {name: "Seleccione", value: 0},
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

    return  `
    <article class="modalDetail">
        <div class="searcher">
            <form>
                <label for="search">Buscar por nombre:</label>
                <input type="text" id="search" name="search">

                <label for="sort">Cambio:</label>
                <select id="sort" name="sort">
                    ${mercaderiaTipo.map(type =>  { 
                        return `
                            <option value=${type.value}>${type.name}</option>
                        `}).join("")}
                </select>

                <label>Ordenar por precio: </label>
                    <label for="asc">
                        <input type="radio" value="ASC">
                        Ascendente
                    </label>
                    <label for="desc">
                        <input type="radio" value="DESC">
                        Descendente
                    </label>
                </form>
        <button title="Buscar">Buscar</button>
        <button title="Cerrar" id="modal__close">Cerrar</button>
        <i class="material-icons" title="Cerrar" id="modal__close">close</i>
    </div>
</article>
`
}

export default Searcher; 