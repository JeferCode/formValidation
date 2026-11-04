const correo = document.getElementById("correo");
const pais = document.getElementById("pais");
const codigo = document.getElementById("codigo");
const contraseña = document.getElementById("contraseña");
const confirmContraseña = document.getElementById("confirmContraseña");

correo.addEventListener("input", ()=>{
    if (correo.validity.typeMismatch) {
        correo.setCustomValidity("El correo electrónico debe incluir una (@) y un dominio válido (ejemplo: usuario@dominio.com).");
    }else{
        correo.setCustomValidity("")
    }
    correo.reportValidity()
})

pais.addEventListener("input", ()=>{
    if (pais.validity.patternMismatch || pais.validity.tooShort) {
        pais.setCustomValidity("El nombre del pais es incorrecto, debe contener un minimo de cuatro letras, no se permiten numeros.");
    }else{
        pais.setCustomValidity("")
    }
    pais.reportValidity()
})