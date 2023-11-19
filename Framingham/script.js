document.addEventListener('DOMContentLoaded', function() {
    const $formulario = document.getElementById('formulario');
    const $inputs = document.querySelectorAll('#formulario input');

    const expresiones = {
        edad: /^[2-9]\d{1,2}|110$/,
        colesterolTotal: /^[0-9]+(\.[0-9]+)?$/,
        colesterolHdl: /^[0-9]+(\.[0-9]+)?$/,
        presionArterial: /^[0-9]+(\.[0-9]+)?$/,
    }

    const campos = {
        edad: false,
        colesterolTotal: false,
        colesterolHdl: false,
        presionArterial: false
    }

    const validar = (e) => {
        if(e.target.type === 'number') {
            switch (e.target.name) {
                case "edad":
                    validarCampo(expresiones.edad, e.target, "edad");
                break;
                case "colesterolTotal":
                    validarCampo(expresiones.colesterolTotal, e.target, "colesterolTotal");
                break;
                case "colesterolHdl":
                    validarCampo(expresiones.colesterolHdl, e.target, "colesterolHdl");
                break;
                case "presionArterial":
                    validarCampo(expresiones.presionArterial, e.target, "presionArterial");
                break;
            }
        }
    }

    const validarCampo = (expresiones, input, campo) => {
        if(expresiones.test(input.value)) {
            document.getElementById(`control__${campo}`).classList.remove("form__grupo-incorrecto");
            document.getElementById(`control__${campo}`).classList.add("form__grupo-correcto");
            document.querySelector(`#control__${campo} i`).classList.remove("fa-times-circle");
            document.querySelector(`#control__${campo} i`).classList.add("fa-check-circle");
            document.querySelector(`#control__${campo} .form__input-error`).classList.remove("form__input-error-activo");
            campos[campo] = true;
        } else{
            document.getElementById(`control__${campo}`).classList.add("form__grupo-incorrecto");
            document.getElementById(`control__${campo}`).classList.remove("form__grupo-correcto");
            document.querySelector(`#control__${campo} i`).classList.add("fa-times-circle");
            document.querySelector(`#control__${campo} i`).classList.remove("fa-check-circle");
            document.querySelector(`#control__${campo} .form__input-error`).classList.add("form__input-error-activo");
            campos[campo] = false;
        }
    }

    $inputs.forEach((input) => {
        input.addEventListener("keyup", validar);
        input.addEventListener("blur", validar);
    });
 

    function calcularRiesgoFramingham(sexo, edad, colesterolTotal, colesterolHdl, presionArterial, tratamientoHta, fumador) {
        const puntuacionEdad = parseInt(obtenerPuntuacionEdad(edad, sexo));
        const puntuacionSexo = parseInt(obtenerPuntuacionSexo(sexo));
        const puntuacionColesterolHDL = parseInt(obtenerPuntuacionColesterolHDL(colesterolHdl, sexo));
        const puntuacionColesterolTotal = parseInt(obtenerPuntuacionColesterolTotal(colesterolTotal, edad, sexo));
        const puntuacionPresionArterial = parseInt(obtenerPuntuacionPresionArterial(presionArterial,tratamientoHta, sexo));
        const puntuacionFumador = parseInt(obtenerPuntuacionFumador(fumador, edad, sexo));
        
        // Calculat el riesgo cardiovascular
        const riesgoCardiovascular = (puntuacionEdad + puntuacionSexo + puntuacionColesterolHDL + puntuacionColesterolTotal + puntuacionPresionArterial + puntuacionFumador);
        return parseInt(riesgoCardiovascular)
    }
        
    //Funciones para obtener las puntuaciones
    function obtenerPuntuacionSexo(sexo){
        if(sexo === "Masculino") {
            return 0;
            
        }else if(sexo === "Femenino"){
            return 0;
        }
    }
    
    function obtenerPuntuacionEdad(edad, sexo){
        if(edad >= 20 && edad <= 34 && sexo === "Masculino") {
            return -9;
        }else if(edad >= 35 && edad <=39 && sexo === "Masculino") {
            return -4;
        }else if(edad >= 40 && edad <=44 && sexo === "Masculino") {
            return 0;
        }else if(edad >= 45 && edad <=49 && sexo === "Masculino") {
            return 3;
        }else if(edad >= 50 && edad <=54 && sexo === "Masculino") {
            return 6;
        }else if(edad >= 55 && edad <=59 && sexo === "Masculino") {
            return 8;
        }else if(edad >= 60 && edad <=64 && sexo === "Masculino") {
            return 10;
        }else if(edad >= 65 && edad <=69 && sexo === "Masculino") {
            return 11;
        }else if(edad >= 70 && edad <=74 && sexo === "Masculino") {
            return 12;
        }else if(edad >= 75 && edad <=79 && sexo === "Masculino") {
            return 13;
        }if(edad >= 20 && edad <= 34 && sexo === "Femenino") {
            return -7;
        }else if(edad >= 35 && edad <=39 && sexo === "Femenino") {
            return -3;
        }else if(edad >= 40 && edad <=44 && sexo === "Femenino") {
            return 0;
        }else if(edad >= 45 && edad <=49 && sexo === "Femenino") {
            return 3;
        }else if(edad >= 50 && edad <=54 && sexo === "Femenino") {
            return 6;
        }else if(edad >= 55 && edad <=59 && sexo === "Femenino") {
            return 8;
        }else if(edad >= 60 && edad <=64 && sexo === "Femenino") {
            return 10;
        }else if(edad >= 65 && edad <=69 && sexo === "Femenino") {
            return 12;
        }else if(edad >= 70 && edad <=74 && sexo === "Femenino") {
            return 14;
        }else if(edad >= 75 && edad <=79 && sexo === "Femenino") {
            return 16;
        }
    }

    function obtenerPuntuacionColesterolHDL(colesterolHdl, sexo){
        if(colesterolHdl >= 60 && sexo !== '') {
            return 1;
        } else if(colesterolHdl >= 50 && colesterolHdl <=59 && sexo !== ''){
            return 0;
        }else if(colesterolHdl >=40 && colesterolHdl <=49 && sexo !== '') {
            return 1;
        }else if(colesterolHdl < 40 && sexo !== ''){
            return  2;
        }
    }

    function obtenerPuntuacionColesterolTotal(colesterolTotal, edad, sexo){
        if(colesterolTotal < 160 && edad >=20 && edad <=79 && sexo !== ''){
            return 0;
        }else if(colesterolTotal >= 160 && colesterolTotal <= 199 && edad >=20 && edad <=39 && sexo !== '') {
            return 4;
        }else if(colesterolTotal >= 160 && colesterolTotal <= 199 && edad >=40 && edad <=49 && sexo !== '') {
            return 3;
        }else if(colesterolTotal >= 160 && colesterolTotal <= 199 && edad >=50 && edad <=59 && sexo !== '') {
            return 2;
        }else if(colesterolTotal >= 160 && colesterolTotal <= 199 && edad >=60 && edad <=69 && sexo !== '') {
            return 1;
        }else if(colesterolTotal >= 160 && colesterolTotal <= 199 && edad >=70 && edad <=79 && sexo === "Masculino") {
            return 0;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=20 && edad <=39 && sexo === "Masculino") {
            return 7;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=40 && edad <=49 && sexo === "Masculino") {
            return 5;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=50 && edad <=59 && sexo === "Masculino") {
            return 3;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=60 && edad <=69 && sexo === "Masculino") {
            return 1;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=70 && edad <=79 && sexo === "Masculino") {
            return 0;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=20 && edad <=39 && sexo === "Masculino") {
            return 9;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=40 && edad <=49 && sexo === "Masculino") {
            return 6;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=50 && edad <=59 && sexo === "Masculino") {
            return 4;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=60 && edad <=69 && sexo === "Masculino") {
            return 2;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=70 && edad <=79 && sexo === "Masculino") {
            return 1;
        }else if(colesterolTotal >= 280 && edad >=20 && edad <=39 && sexo === "Masculino") {
            return 11;
        }else if(colesterolTotal >= 280 && edad >=40 && edad <=49 && sexo === "Masculino") {
            return 8;
        }else if(colesterolTotal >= 280 && edad >=50 && edad <=59 && sexo === "Masculino") {
            return 5;
        }else if(colesterolTotal >= 280 && edad >=60 && edad <=69 && sexo === "Masculino") {
            return 3;
        }else if(colesterolTotal >= 280 && edad >=70 && edad <=79 && sexo === "Masculino") {
            return 1;
        } // Mujeres
        else if(colesterolTotal >= 160 && colesterolTotal <= 199 && edad >=70 && edad <=79 && sexo === "Femenino") {
            return 1;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=20 && edad <=39 && sexo === "Femenino") {
            return 8;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=40 && edad <=49 && sexo === "Femenino") {
            return 6;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=50 && edad <=59 && sexo === "Femenino") {
            return 4;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=60 && edad <=69 && sexo === "Femenino") {
            return 2;
        }else if(colesterolTotal >= 200 && colesterolTotal <= 239 && edad >=70 && edad <=79 && sexo === "Femenino") {
            return 1;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=20 && edad <=39 && sexo === "Femenino") {
            return 11;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=40 && edad <=49 && sexo === "Femenino") {
            return 8;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=50 && edad <=59 && sexo === "Femenino") {
            return 5;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=60 && edad <=69 && sexo === "Femenino") {
            return 3;
        }else if(colesterolTotal >= 240 && colesterolTotal <= 279 && edad >=70 && edad <=79 && sexo === "Femenino") {
            return 2;
        }else if(colesterolTotal >= 280 && edad >=20 && edad <=39 && sexo === "Femenino") {
            return 13;
        }else if(colesterolTotal >= 280 && edad >=40 && edad <=49 && sexo === "Femenino") {
            return 10;
        }else if(colesterolTotal >= 280 && edad >=50 && edad <=59 && sexo === "Femenino") {
            return 7;
        }else if(colesterolTotal >= 280 && edad >=60 && edad <=69 && sexo === "Femenino") {
            return 4;
        }else if(colesterolTotal >= 280 && edad >=70 && edad <=79 && sexo === "Femenino") {
            return 2;
        }
    }

    function obtenerPuntuacionPresionArterial(presionArterial, tratamientoHta, sexo){
        if(presionArterial < 120 && tratamientoHta !== "" && sexo !== "") {
            return 0
        }else if(presionArterial >=120 && presionArterial <= 129 && tratamientoHta === "No" && sexo === "Masculino"){
            return 0
        }else if(presionArterial >=120 && presionArterial <= 129 && tratamientoHta === "Si" && sexo === "Masculino"){
            return 1
        }else if(presionArterial >=130 && presionArterial <= 139 && tratamientoHta === "No" && sexo === "Masculino"){
            return 1
        }else if(presionArterial >=130 && presionArterial <= 139 && tratamientoHta === "Si" && sexo === "Masculino"){
            return 2
        }else if(presionArterial >=140 && presionArterial <= 159 && tratamientoHta === "No" && sexo === "Masculino"){
            return 1
        }else if(presionArterial >=140 && presionArterial <= 159 && tratamientoHta === "Si" && sexo === "Masculino"){
            return 2
        }else if(presionArterial >=160 && tratamientoHta === "No" && sexo === "Masculino"){
            return 2
        }else if(presionArterial >=160 && tratamientoHta === "Si" && sexo === "Masculino"){
            return 3
        }else if(presionArterial >=120 && presionArterial <= 129 && tratamientoHta === "No" && sexo === "Femenino"){
            return 1
        }else if(presionArterial >=120 && presionArterial <= 129 && tratamientoHta === "Si" && sexo === "Femenino"){
            return 3
        }else if(presionArterial >=130 && presionArterial <= 139 && tratamientoHta === "NO" && sexo === "Femenino"){
            return 2
        }else if(presionArterial >=130 && presionArterial <= 139 && tratamientoHta === "Si" && sexo === "Femenino"){
            return 4
        }else if(presionArterial >=140 && presionArterial <= 159 && tratamientoHta === "No" && sexo === "Femenino"){
            return 3
        }else if(presionArterial >=140 && presionArterial <= 159 && tratamientoHta === "Si" && sexo === "Femenino"){
            return 5
        }else if(presionArterial >=160 && tratamientoHta === "No" && sexo === "Femenino"){
            return 4
        }else if(presionArterial >=160 && tratamientoHta === "Si" && sexo === "Femenino"){
            return 6
        }
    }

    function obtenerPuntuacionFumador(fumador, edad, sexo){
        if(fumador === "No" && edad >= 20 && edad <=79 && sexo !== ''){
            return 0;
        }else if(fumador === 'Si' && edad >= 20 && edad <= 39 && sexo === "Masculino"){
            return 8;
        }else if(fumador === 'Si' && edad >= 40 && edad <= 49 && sexo === "Masculino"){
            return 5;
        }else if(fumador === 'Si' && edad >= 50 && edad <= 59 && sexo === "Masculino"){
            return 3;
        }else if(fumador === 'Si' && edad >= 60 && edad <= 79 && sexo === "Masculino"){
            return 1;
        } //Mujeres
        else if(fumador === 'Si' && edad >= 20 && edad <= 39 && sexo === "Femenino"){
            return 9;
        }else if(fumador === 'Si' && edad >= 40 && edad <= 49 && sexo === "Femenino"){
            return 7;
        } else if(fumador === 'Si' && edad >= 50 && edad <= 59 && sexo === "Femenino"){
            return 4;
        }else if(fumador === 'Si' && edad >= 60 && edad <= 79 && sexo === "Femenino"){
            return 2;
        }else if(fumador === 'Si' && edad >= 70 && edad <= 79 && sexo === "Femenino"){
            return 1;
        }
    }
    

    $formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const $terminos = document.getElementById("terminos");
        
        if(campos.edad && campos.colesterolTotal && campos.colesterolHdl && campos.presionArterial && $terminos.checked){
            const sexo = $formulario.elements['sexo'].value;
            const edad = $formulario.elements['edad'].value;
            const colesterolTotal = $formulario.elements['colesterolTotal'].value;
            const colesterolHdl = $formulario.elements['colesterolHdl'].value;
            const presionArterial = $formulario.elements['presionArterial'].value;
            const fumador = $formulario.elements['fumador'].value;
            const tratamientoHta = $formulario.elements['tratamientoHta'].value;

            const riesgo = calcularRiesgoFramingham(sexo, edad, colesterolTotal, colesterolHdl, presionArterial, tratamientoHta, fumador);
            
            function totalPuntos(riesgo, sexo) {
                if(riesgo < 0 && sexo === 'Masculino'){
                    return '<1';
                }else if(riesgo >= 0 && riesgo <= 4 && sexo === "Masculino"){
                    return 1
                }else if(riesgo >= 5 && riesgo <= 6 && sexo === "Masculino"){
                    return 2
                }else if(riesgo === 7 && sexo === "Masculino"){
                    return 3
                }else if(riesgo === 8 && sexo === "Masculino"){
                    return 4
                }else if(riesgo === 9 && sexo === "Masculino"){
                    return 5
                }else if(riesgo === 10 && sexo === "Masculino"){
                    return 6
                }else if(riesgo === 11 && sexo === "Masculino"){
                    return 8
                }else if(riesgo === 12 && sexo === "Masculino"){
                    return 10
                }else if(riesgo === 13 && sexo === "Masculino"){
                    return 12
                }else if(riesgo === 14 && sexo === "Masculino"){
                    return 16
                }else if(riesgo === 15 && sexo === "Masculino"){
                    return 20
                }else if(riesgo === 16 && sexo === "Masculino"){
                    return 25
                }else if(riesgo >= 17 && sexo === "Masculino"){
                    return '≥30'
                }
            
                if(riesgo < 9 && sexo === "Femenino"){
                    return '<1'
                }else if(riesgo >= 9 && riesgo <= 12 && sexo === "Femenino"){
                    return 1
                }else if(riesgo === 13 || riesgo === 14 && sexo === "Femenino"){
                    return 2
                }else if(riesgo === 15 && sexo === "Femenino"){
                    return 3
                }else if(riesgo === 16 && sexo === "Femenino"){
                    return 4
                }else if(riesgo === 17 && sexo === "Femenino"){
                    return 5
                }else if(riesgo === 18 && sexo === "Femenino"){
                    return 6
                }else if(riesgo === 19 && sexo === "Femenino"){
                    return 8
                }else if(riesgo === 20 && sexo === "Femenino"){
                    return 11
                }else if(riesgo === 21 && sexo === "Femenino"){
                    return 14
                }else if(riesgo === 22 && sexo === "Femenino"){
                    return 17
                }else if(riesgo === 23 && sexo === "Femenino"){
                    return 22
                }else if(riesgo === 24 && sexo === "Femenino"){
                    return 27
                }else if(riesgo >= 25 && sexo === "Femenino"){
                    return 30
                }
            }
                const estimador = document.querySelector('.estimador');
                const puntuaInput = document.getElementById('puntua');
                const porcentajeInput = document.getElementById('porcentaje');
                estimador.style.display = "block";
                puntuaInput.value = riesgo;
                porcentajeInput.value = totalPuntos(riesgo, sexo);
            console.log('Riesgo de Framingham:', riesgo);
            console.log('Porcentaje:', porcentajeInput.value);
            // console.log(sexo)
    

            // Mostrar el resultado en clase estimador
            
            document.getElementById("form__mensaje-exito").classList.add("form__mensaje-exito-activo");

            setTimeout(() => {
                document.getElementById("form__mensaje-exito").classList.remove("form__mensaje-exito-activo");
                // document.getElementById("form__control-btn-enviar").style.display = "none";
            }, 3000);

            document.querySelectorAll(".form__grupo-correcto").forEach((icono) => {
                icono.classList.remove("form__grupo-correcto");
            });

            // Recarga la pagina despues de que se envie el formulario
            // setTimeout(() => {
            //     location.reload()
            // }, 3000);
        } else{
            document.getElementById("form__mensaje").classList.add("form__mensaje-activo");
        }
    })
    
})
