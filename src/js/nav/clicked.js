
const clicked = (id) => { //id= home, clicked('search'), selectedProduct, clicked('commands')
    //pintar nav icons
    let nav = document.getElementById('navList')
    console.log(nav.children)
    for (let i = 0; i < nav.children.length; i++) {
        const child =  nav.children[i];
        console.log(child)
        if(child.classList.contains('clicked')){
            child.classList.remove('clicked')
        }
    }
    let icon = document.getElementById(id)
    icon.classList.add('clicked')
}

export default clicked;