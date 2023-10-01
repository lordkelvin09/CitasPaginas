document.addEventListener('DOMContentLoaded', function() {
    const $formulario = document.getElementById('form');
    const $inputs = document.querySelectorAll('#form input');
    const $textarea = document.querySelectorAll('.form__grupo-input textarea');

    const expresiones = {
        usuario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
        telefono: /^[0-9]{10}$/,
        direction: /^[a-zA-Z0-9\_\-]{4,16}$/,
        ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        estado: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        nacimiento: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/, 
        consulta: /^[a-zA-ZÀ-ÿ\s]{1,400}$/,
        diagnostico: /^[a-zA-ZÀ-ÿ\s]{1,400}$/,
        examenes: /^[a-zA-ZÀ-ÿ\s]{1,400}$/
    }

    const campos = {
        usuario: false,
        nombre: false,
        correo: false,
        direction: false,
        ciudad: false,
        estado: false,
        telefono: false, 
        nacimiento: false,
        consulta: false,
        diagnostico: false,
        examenes: false,
    }

    const validarFormulario = (e) => {
        if (e.target.type === 'text' || e.target.type === 'number' || e.target.type === 'email' || e.target.type === 'date') {
            switch (e.target.name) {
                case "usuario":
                    validarCampo(expresiones.usuario, e.target, "usuario");
                break;
                case "nombre":
                    validarCampo(expresiones.nombre, e.target, "nombre");
                break;
                case "correo":
                    validarCampo(expresiones.correo, e.target, "correo");
                break;
                case "telefono":
                    validarCampo(expresiones.telefono, e.target, "telefono");
                break;
                case "direction":
                    validarCampo(expresiones.direction, e.target, "direction");
                break;
                case "ciudad":
                    validarCampo(expresiones.ciudad, e.target, "ciudad");
                break;
                case "estado":
                    validarCampo(expresiones.estado, e.target, "estado");
                break;
                case "nacimiento":
                    validarCampo(expresiones.nacimiento, e.target, "nacimiento");
                break;
                case "consulta":
                    validarCampo(expresiones.consulta, e.target, "consulta");
                break;
                case "diagnostico":
                    validarCampo(expresiones.diagnostico, e.target, "diagnostico");
                break;
                case "examenes":
                    validarCampo(expresiones.examenes, e.target, "examenes");
                break
            }
        }
    }

    const validarCampo = (expresiones, input,campo) => {
        if (expresiones.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-incorrecto");
            document.getElementById(`grupo__${campo}`).classList.add("form__grupo-correcto");
            document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
            document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
            document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove("form__input-error-activo");
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add("form__grupo-incorrecto");
            document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-correcto");
            document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
            document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
            document.querySelector(`#grupo__${campo} .form__input-error`).classList.add("form__input-error-activo");
            campos[campo] = false;
        }
    }

    $inputs.forEach((input) => {
        input.addEventListener("keyup", validarFormulario);
        input.addEventListener("blur", validarFormulario);
    });
    $textarea.forEach((textarea) => {
        textarea.addEventListener("keyup", validarFormulario);
        textarea.addEventListener("blur", validarFormulario);
    });


    $formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const $terminos = document.getElementById("terminos");

        if(campos.usuario && campos.nombre && campos.correo && campos.telefono && campos.estado && campos.direction && campos.ciudad && campos.nacimiento && campos.consulta && campos.diagnostico && campos.examenes && $terminos.checked) {
            document.getElementById("form__mensaje-exito").classList.add("form__mensaje-exito-activo");

            setTimeout(() => {
                document.getElementById("form__mensaje-exito").classList.remove("form__mensaje-exito-activo");
                document.getElementById("form__grupo-terminos").style.display = "none";
            }, 3000);

            document.querySelectorAll(".form__grupo-correcto").forEach((icono) => {
                icono.classList.remove("form__grupo-correcto");
            });
            // Recarga la pagina despues de que se envie el formulario
            setTimeout(() => {
                location.reload();
            }, 3100)
        } else {
            document.getElementById("form__mensaje").classList.add("form__mensaje-activo");
        }
    })

});
