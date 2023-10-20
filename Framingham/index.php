
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">
    <title>Framingham</title>
</head>
<body>

    <div class="container p-3 mt-3">
        <form class="formulario" id="formulario" method="post" action="registrar.php">

            <!-- grupo sexo -->
            <div class="form__control" id="control__sexo">
                <label class="form-label"><b>Sexo</b> (Hombre/Mujer)</label>
                <div class="form__grupo-input">
                    <select class="form-control form-select" id="sexo" name="sexo" required>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                    <i class="form__validacion fa fa-times-circle"></i>
                </div>
                <p class="form__input-error">
                    Debe elegirse un sexo
                </p>
            </div>

            <!-- grupo edad -->
            <div class="form__control" id="control__edad">
                    <label class="form-label"><b>Edad</b> (años)</label>
                    <div class="form__grupo-input">
                        <input class="form-control" id="edad" name="edad" type="number" step="1" required>
                        <i class="form__validacion fa fa-times-circle"></i>
                    </div>
                    <p class="form__input-error">
                            Edad incorrecta!!, Ingrese una Edad valida
                    </p>
            </div>
            
            <!-- grupo colesterol Total -->
            <div class="form__control" id="control__colesterolTotal">
                <label class="form-label"><b>Colesterol total</b> (mg/dL)</label>
                <div class="form__grupo-input">
                    <input class="form-control" id="colesterolTotal" name="colesterolTotal" type="number" required>
                    <i class="form__validacion fa fa-times-circle"></i>
                </div>
                <p class="form__input-error"> 
                    Debe ingresar resultados correctos!!
                </p>
            </div>

            <!-- grupo colesterolHDL -->
            <div class="form__control" id="control__colesterolHdl">
                <label class="form-label"><b>Colesterol HDL</b> (mg/dL)</label>
                <div class="form__grupo-input">
                    <input class="form-control" id="colesterolHdl" name="colesterolHdl" type="number" required>
                    <i class="form__validacion fa fa-times-circle"></i>
                </div>
                <p class="form__input-error">
                    Debe ingresar resultados correctos!!
                </p>
            </div>

            <!-- grupo fumador -->
            <div class="form__control" id="control__fumador">
                <label class="form-label"><b>Fumador</b> (SI/NO)</label>
                <div class="form__grupo-input">
                    <select class="form-control form-select" id="fumador" name="fumador" required>
                        <option value="No">NO</option>
                        <option value="Si">SI</option>
                    </select>
                    <i class="form__validacion fa fa-times-circle"></i>
                </div>
                <p class="form__input-error">
                    Debe seleccionar alguno!!
                </p>
            </div>

            <!-- grupo presion arterial -->
            <div class="form__control" id="control__presionArterial">
                <label class="form-label"><b>Presion Arterial Sistolica</b> (mmHg)</label>
                <div class="form__grupo-input">
                    <input class="form-control" id="presionArterial" name="presionArterial" type="number" required>
                    <i class="form__validacion fa fa-times-circle"></i>
                </div>
                <p class="form__input-error">
                    Debe ingresar resultados correctos!!
                </p>
            </div>

            <!-- grupo tratamientoHta -->
            <div class="form__control" id="control__tratamientoHta">
                <label class="form-label"><b>En tratamiento con medicamento para HTA</b> (SI/NO)</label>
                <div class="form__grupo-input">
                    <select class="form-control form-select" id="tratamientoHta" name="tratamientoHta" required>
                        <option value="No">NO</option>
                        <option value="Si">SI</option>
                    </select>
                    <i class="form__validacion fa fa-times-circle"></i>
                </div>
                <p class="form__input-error">
                    Debe seleccionar alguno!!
                </p>
            </div>
            
            <!-- Mensaje de campos requeridos -->
            <div class="form__mensaje" id="form__mensaje"> 
                <p><i class="fa fa-exclamation-circle"><b>Error:</b> Debes completar todos los campos.</i> 
                </p>
            </div>

            <div class="enviarFor form__control-btn-enviar" id="control__terminos">
                <span class="Acep__boton">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" id="terminos" name="terminos" type="checkbox" required>
                            <p id="AcepCond">Acepto los terminos y condiciones</p>
                        </label>
                        <input class="form__btn"type="submit" value="Enviar" name="registrer">
                        <p class="form__mensaje-exito" id="form__mensaje-exito">
                            El formulario se envio correctamente.
                        </p>
                    </div>
                </span>
            </div>
        
            <div class="estimador">
                <div class="puntuacion campos">
                    <label class="form-label" for="puntua"><b>Puntuacion</b></label>
                    <input type="number" id="puntua" name="puntua" class="estimadores">
                </div>

                <div class="riesgo campos">
                    <label class="form-label" for="porcentaje"><b>Riesgo</b></label>
                    <input type="number" id="porcentaje" name="porcentaje" class="estimadores" step="0.01">(%)
                </div>

            </div>
        </form>
        <?php
        include("./controllers/registrar.php");
        ?>
    </div>
    
    
    <script src="./script.js"></script>
</body>
</html>