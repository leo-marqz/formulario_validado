const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,8}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    let pass;
    switch (e.target.name) {
        case "nombre":
            style(expresiones.nombre, e.target, 'nombre')
            break;
        case "email":
            style(expresiones.correo, e.target, 'email')
            break;
        case "createPass":
            style(expresiones.password, e.target, 'createPass')
            break;

        case "confirmpass":
            confirmPass();
            break;
    }
}

/* esta funcion evalua los campos menos el campo de confirmar contraseña*/
function style(expresion, input, idcampo) {
    if (expresion.test(input.value)) {
        document.getElementById(idcampo).style.cssText = 'color:#3B5999; ';
    } else {
        document.getElementById(idcampo).style.cssText = 'color:#fd4343;';
    }
}

/* validar campo confirmar contraseña */
function confirmPass() {
    const contraseña1 = document.getElementById('createPass');
    const contraseña2 = document.getElementById('confirmPass');

    if (contraseña1.value !== contraseña2.value) {
        document.getElementById('createPass').style.cssText = 'color:#fd4343;';
        document.getElementById('confirmPass').style.cssText = 'color:#fd4343;';

    } else {
        document.getElementById('createPass').style.cssText = 'color:#3B5999; ';
        document.getElementById('confirmPass').style.cssText = 'color:#3B5999; ';
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);

    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
    })
})