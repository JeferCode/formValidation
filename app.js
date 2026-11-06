const correo = document.getElementById("correo");
const pais = document.getElementById("pais");
const codigo = document.getElementById("codigo");
const contraseña = document.getElementById("contraseña");
const confirmContraseña = document.getElementById("confirmContraseña");


const postal = {
    Colombia: "^\\d{6}$",
    Alemania: "^\\d{5}$",
    Usa: "^\\d{5}(-\\d{4})?$",
    Francia: "^\\d{5}$",
    España: "^\\d{5}$"
};

const message = {
    Colombia: "El código postal de Colombia debe contener exactamente 6 dígitos.",
    Alemania: "El código postal de Alemania debe contener exactamente 5 dígitos.",
    Usa: "El código postal de Estados Unidos debe contener 5 dígitos o el formato ZIP+4 (12345-6789).",
    Francia: "El código postal de Francia debe contener exactamente 5 dígitos.",
    España: "El código postal de España debe contener exactamente 5 dígitos."
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
    codigo.pattern = postal[paisCode];
    if (codigo.validity.patternMismatch) {
        codigo.setCustomValidity(message[paisCode])
    } else {
        codigo.setCustomValidity("")
    }
    codigo.reportValidity();
}
