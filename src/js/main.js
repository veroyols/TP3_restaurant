import Section from "../components/section/Section.js";

const sectionsData = [
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    },
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    },
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    },
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    },
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    },
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    },
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    },
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    },
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    },
    {
        id:"entrada", 
        title:"Entrada", 
        text: "Puede comer esto mientras espera", 
        listItems:["Mercaderia 1", "Mercaderia 2", "Mercaderia 3"]
    }
]

const render = () => {
    let main = document.getElementById("main");

    sectionsData.forEach(sectionData => {

        main.innerHTML += Section(sectionData);
    })
}
window.onload = render;
