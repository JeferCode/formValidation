const correo = document.getElementById("correo");
const pais = document.getElementById("pais");
const codigo = document.getElementById("codigo");
const contraseña = document.getElementById("contraseña");
const confirmContraseña = document.getElementById("confirmContraseña");

const postal = {
    Colombia: ["^\\d{6}$", "El código postal de Colombia debe contener exactamente 6 dígitos."],
    Alemania: ["^\\d{5}$", "El código postal de Alemania debe contener exactamente 5 dígitos."],
    Usa: ["^\\d{5}(-\\d{4})?$", "El código postal de Estados Unidos debe contener 5 dígitos o el formato ZIP+4 (12345-6789)."],
    Francia: ["^\\d{5}$", "El código postal de Francia debe contener exactamente 5 dígitos."],
    España: ["^\\d{5}$", "El código postal de España debe contener exactamente 5 dígitos."]
};


correo.addEventListener("input", () => {
    if (correo.validity.typeMismatch) {
        correo.setCustomValidity("El correo electrónico debe incluir una (@) y un dominio válido (ejemplo: usuario@dominio.com).");
    } else {
        correo.setCustomValidity("")
    }
    correo.reportValidity()
})

pais.addEventListener("change", () => {
    postalSelection();
})

codigo.addEventListener("input", () => {
    postalSelection();
})

function postalSelection() {
    const paisCode = pais.value;
    const patron = new RegExp(postal[paisCode][0])
    if (codigo.validity.valueMissing) {
        return;
    }
    if (patron.test(codigo.value)) {
        codigo.setCustomValidity("")
    } else {
        codigo.setCustomValidity(postal[paisCode][1])
    }
}