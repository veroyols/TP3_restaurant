const validateName = (text) =>{
    return (/^[A-Za-zÁÉÍÓÚáéíóúñÑ'0-9 ]+$/g).test(text)
  }
/*const validateName = (value) => {

    console.log(value)
    const pattern = /^[a-zA-Z ]{2,254}$/ ;
    
    if (pattern.test(value)) 
        return true; 
     
    else 
        return false;
}*/

export default validateName;
