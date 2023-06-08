//CERRAR MODAL
const closeModal = () => {
    let section = document.getElementById('modalDetail');
    section.innerHTML ='';
    let background = document.getElementById('background');
    background.className = '';
}

export default closeModal;
