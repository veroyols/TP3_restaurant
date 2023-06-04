const SearcherCommands = () => {

    return  `
    <article class="modalDetail">
        <div class="searcher">
            <h2>Buscar comandas</h2>
            <p class="mercaderiaDetailRight">Filtre comandas por fecha</p>
            <form method="get">
                <input id="searcher__date" type="date">
           </form>
        <button id="button__searchCommands" title="Buscar">Buscar</button>
        <button title="Cerrar" id="modal__close">Cerrar</button>
        <i class="material-icons" title="Cerrar" id="modal__close">close</i>
    </div>
</article>
`
}

export default SearcherCommands; 