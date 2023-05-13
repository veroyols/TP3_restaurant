import Mercaderia from "../components/section/Mercaderia.js";
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
const mercaderias = [
  {
    "id": 6,
    "nombre": "Empanada",
    "precio": 400,
    "tipo": {
      "id": 2,
      "descripcion": "Minutas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1f-ZxsKFvooSuCWt1KWnX3xn6DnAF4Z88"
  },
  {
    "id": 1,
    "nombre": "Berenjenas en Escabeche",
    "precio": 500,
    "tipo": {
      "id": 1,
      "descripcion": "Entrada"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=19RZ1fcdX8FaYZapFayXSKkvSeh_eD8sx"
  },
  {
    "id": 2,
    "nombre": "Porotos a la vinagreta",
    "precio": 500,
    "tipo": {
      "id": 1,
      "descripcion": "Entrada"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1xdVsFI-bfmKKrxUOoRvLwNy_tpZi1tlL"
  },
  {
    "id": 3,
    "nombre": "Humus de Garbanzo",
    "precio": 500,
    "tipo": {
      "id": 1,
      "descripcion": "Entrada"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=18PT8STxFOdbqcWPo2qbEeX-dmHqrKL4U"
  },
  {
    "id": 21,
    "nombre": "Agua",
    "precio": 500,
    "tipo": {
      "id": 8,
      "descripcion": "Bebidas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1AT0FKcyPQ_YGsRma5Ngu6GX8ftf8Ywwd"
  },
  {
    "id": 22,
    "nombre": "Agua con gas",
    "precio": 500,
    "tipo": {
      "id": 8,
      "descripcion": "Bebidas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1LgUFou-0XV4ZGXLvl0VdOudpB2xNowUQ"
  },
  {
    "id": 23,
    "nombre": "CocaCola",
    "precio": 700,
    "tipo": {
      "id": 8,
      "descripcion": "Bebidas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=19_2s9DOCYfjSeOM8oOMjfPLZQxrIbrax"
  },
  {
    "id": 24,
    "nombre": "Agua Tonica",
    "precio": 700,
    "tipo": {
      "id": 8,
      "descripcion": "Bebidas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1GPpCuTHDb_YfZ5WgfBpwnh6gCZ4UzYh9"
  },
  {
    "id": 26,
    "nombre": "Blonde Ale",
    "precio": 700,
    "tipo": {
      "id": 9,
      "descripcion": "Cerveza Artesanal"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1SdRfF1u3J6ejfsoYoMIiXLSaplHcNaDS"
  },
  {
    "id": 27,
    "nombre": "Honey",
    "precio": 700,
    "tipo": {
      "id": 9,
      "descripcion": "Cerveza Artesanal"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1uNGK3SZOYrbb4SkF9TZpEhw-qQ1i_6Su"
  },
  {
    "id": 28,
    "nombre": "Scottish",
    "precio": 700,
    "tipo": {
      "id": 9,
      "descripcion": "Cerveza Artesanal"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1dupPwq4BpsOAfeloQt0zncUPgS5b8TSL"
  },
  {
    "id": 20,
    "nombre": "Lechuga y Cebolla",
    "precio": 700,
    "tipo": {
      "id": 7,
      "descripcion": "Ensaladas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1RCO7t5V9v5nMA7mUIMeSzpqDyVDVLWcR"
  },
  {
    "id": 29,
    "nombre": "Budin de Pan",
    "precio": 800,
    "tipo": {
      "id": 10,
      "descripcion": "Postres"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1ElTRsSRJST0nTWKSsfQkR4XSeNhlI6Al"
  },
  {
    "id": 30,
    "nombre": "Copa Helada",
    "precio": 800,
    "tipo": {
      "id": 10,
      "descripcion": "Postres"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1wq625i2tDiHzQRVGrU_i3hYJpzuPwryc"
  },
  {
    "id": 31,
    "nombre": "Panqueques con dulce de leche",
    "precio": 800,
    "tipo": {
      "id": 10,
      "descripcion": "Postres"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1Jmqg2GaZ0Whmq-yzxgtNOOBCi8k2dIwL"
  },
  {
    "id": 32,
    "nombre": "Frutillas con Crema",
    "precio": 800,
    "tipo": {
      "id": 10,
      "descripcion": "Postres"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1NX-GToSUk1pqMHpU6K0r453GlJOt3HH4"
  },
  {
    "id": 7,
    "nombre": "Omelette",
    "precio": 900,
    "tipo": {
      "id": 2,
      "descripcion": "Minutas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1o9q6P2my5mlVrtxmPE-vLHNDv62psRAq"
  },
  {
    "id": 5,
    "nombre": "Papas Fritas",
    "precio": 1000,
    "tipo": {
      "id": 2,
      "descripcion": "Minutas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1I1Q6EtlwXY8hCll7GSrXut1aMtjBWCZe"
  },
  {
    "id": 19,
    "nombre": "Hamburguesa",
    "precio": 1000,
    "tipo": {
      "id": 6,
      "descripcion": "Sandwich"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1MvwhTPB-mIU2U7a_ZEjjgj3QhbMXOJ1B"
  },
  {
    "id": 12,
    "nombre": "Provoleta",
    "precio": 1200,
    "tipo": {
      "id": 4,
      "descripcion": "Parrilla"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1Zca5YZ3-d9-R9mpBcKJNPloodPNyO5mK"
  },
  {
    "id": 4,
    "nombre": "Milanesa Napolitana",
    "precio": 1500,
    "tipo": {
      "id": 2,
      "descripcion": "Minutas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=10KYo-Sx37qfrCCJb2NDwjfBwc0x7k6ya"
  },
  {
    "id": 13,
    "nombre": "Parrillada para 1",
    "precio": 2000,
    "tipo": {
      "id": 4,
      "descripcion": "Parrilla"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1KwW_hTxoX1OCaowkrUa4zlWiGwyJONkG"
  },
  {
    "id": 25,
    "nombre": "Vino",
    "precio": 2000,
    "tipo": {
      "id": 8,
      "descripcion": "Bebidas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=17DJ0vDYpvAlRvFtfor2hVXmB3nb6p5KK"
  },
  {
    "id": 9,
    "nombre": "Fideos con salsa cuatro quesos",
    "precio": 2100,
    "tipo": {
      "id": 3,
      "descripcion": "Pastas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=15lJhT2aRy3StYLz76Ikt33Z-ViZaN8nS"
  },
  {
    "id": 15,
    "nombre": "Muzzarella",
    "precio": 2300,
    "tipo": {
      "id": 5,
      "descripcion": "Pizzas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1D05vfv2K1VokG5KlXzsxLBLWrqRteAjc"
  },
  {
    "id": 16,
    "nombre": "Napolitana",
    "precio": 2500,
    "tipo": {
      "id": 5,
      "descripcion": "Pizzas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1_FdIEzrM-QS5H78syVAoRX9htrZUCQ7T"
  },
  {
    "id": 10,
    "nombre": "Ñoquis con Salsa Bolognesa",
    "precio": 2500,
    "tipo": {
      "id": 3,
      "descripcion": "Pastas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1kYYKJPH865M4a4uoF9FrC0kOkONntdPn"
  },
  {
    "id": 11,
    "nombre": "Sorrentinos con Salsa Filetto",
    "precio": 2500,
    "tipo": {
      "id": 3,
      "descripcion": "Pastas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1HujVQHj9rpi4NpW_Dteve04cGO760-Q6"
  },
  {
    "id": 8,
    "nombre": "Tarta",
    "precio": 2500,
    "tipo": {
      "id": 2,
      "descripcion": "Minutas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=11wwHdYe4Zi0eMRrhay3cRzpywlsBbr2a"
  },
  {
    "id": 17,
    "nombre": "Rucula y jamon crudo",
    "precio": 3000,
    "tipo": {
      "id": 5,
      "descripcion": "Pizzas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1ekxSyUVbsuGzl00I5bIRYUt0Ntv2bmRC"
  },
  {
    "id": 14,
    "nombre": "Parrillada para 2",
    "precio": 3000,
    "tipo": {
      "id": 4,
      "descripcion": "Parrilla"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1tjBKJ7w5JIhhw3C3Fi5ZxLu798SSdbIL"
  },
  {
    "id": 18,
    "nombre": "Fugazetta Rellena",
    "precio": 3200,
    "tipo": {
      "id": 5,
      "descripcion": "Pizzas"
    },
    "imagen": "http://drive.google.com/uc?export=view&id=1U_FDLjY-DvNft-6vYpDSwCM50VBdkWmR"
  }
];

const render = () => {
    let main = document.getElementById("main");

    mercaderias.forEach(mercaderia => {
        main.innerHTML += Mercaderia(mercaderia);
    })
}
window.onload = render;
