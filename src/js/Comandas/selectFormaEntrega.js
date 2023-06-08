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

export default selectFormaEntrega;
