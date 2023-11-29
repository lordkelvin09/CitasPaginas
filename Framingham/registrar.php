<?php
# print_r($_POST);
if (isset($_POST)) {
    $edad = $_POST['edad'];
    $sexo = $_POST['sexo'];
    $colesterolHdl = $_POST['colesterolHdl'];
    $colesterolTotal = $_POST['colesterolTotal'];
    $presionArterial= $_POST['presionArterial'];
    $fumador = $_POST['fumador'];
    $tratamientoHta = $_POST['tratamientoHta'];
    require('database.php');

    $puntuacion = filter_input(INPUT_POST, 'puntuacion', FILTER_VALIDATE_FLOAT);
    $porcentaje = filter_input(INPUT_POST, 'porcentaje', FILTER_VALIDATE_FLOAT);

    if($puntuacion === false || $porcentaje === false) {
        echo "Error: la puntuacion y el porcentaje deben ser numeros validos.";
    }else {
        if(empty($_POST['idp'])) {
            $query = $pdo->prepare("INSERT INTO clientes (edad, sexo, colesterolHdl, colesterolTotal, presionArterial, fumador, tratamientoHta, puntuacion, porcentaje) VALUES (:eda, :sex, :hdl, :tot, :pre, :fum, :tra, :pun, :por)");
        }else {
            $id = $_POST['idp'];
            $query = $pdo->prepare("UPDATE clientes SET edad = :eda, sexo = :sex, colesterolHdl = :hdl, colesterolTotal = :tot, presionArterial = :pre, fumador = :fum, tratamientoHta = :tra, puntuacion = :pun, porcentaje = :por WHERE id = :id");
            $query->bindParam(":id", $id);
        }
        $query->bindParam(":eda", $edad);
        $query->bindParam(":sex", $sexo);
        $query->bindParam(":hdl", $colesterolHdl);
        $query->bindParam(":tot", $colesterolTotal);
        $query->bindParam(":pre", $presionArterial);
        $query->bindParam(":fum", $fumador);
        $query->bindParam(":tra", $tratamientoHta);
        $query->bindParam(":pun", $puntuacion);
        $query->bindParam(":por", $porcentaje);

        // Ejecutar la consulta
        $query->execute();

        // Cerrar la conexión a la base de datos
        $pdo = null;

        if (empty($_POST['idp'])) {
            echo "ok";
        } else {
            echo "Modificado";
        }
    }
}
?>