const correo = document.getElementById("correo");

correo.addEventListener("input", ()=>{
    if (correo.validity.typeMismatch) {
        correo.setCustomValidity("El correo electrónico debe incluir una (@) y un dominio válido (ejemplo: usuario@dominio.com).");
    }else{
        correo.setCustomValidity("")
    }
    correo.reportValidity()
})