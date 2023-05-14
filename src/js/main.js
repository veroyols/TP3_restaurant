import Mercaderia from "../components/section/Mercaderia.js";
import { getMercaderias } from "../services/mercaderias.js"

const onClickElement = (id) => {
  alert(`Clicked element with id ${id}`)
}

const onListItemClick = (elements) => {
  elements.forEach(element => {
    element.addEventListener('click',() => onClickElement(element.id))  
  });
}

const render = async () => {
  let main = document.getElementById("main");
  let mercaderias = await getMercaderias();

  for (let i = 0; i < mercaderias.length; i++) {
    main.innerHTML += Mercaderia(mercaderias[i]);    
  }
  onListItemClick(document.querySelectorAll('.mercaderia'))
}
window.onload = render;
