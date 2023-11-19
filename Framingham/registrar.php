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
    $puntuacion = $_POST['puntua'];
    $porcentaje = $_POST['porcentaje'];
    require('database.php');
    $query = $pdo->prepare("INSERT INTO clientes (edad, sexo, colesterolHdl, colesterolTotal, presionArterial, fumador, tratamientoHta, puntuacion, porcentaje) VALUES (:eda, :sex, :hdl, :tot, :pre, :fum, :tra, :pun, :por)");
    $query->bindParam(":eda", $edad);
    $query->bindParam(":sex", $sexo);
    $query->bindParam(":hdl", $colesterolHdl);
    $query->bindParam(":tot", $colesterolTotal);
    $query->bindParam(":pre", $presionArterial);
    $query->bindParam(":fum", $fumador);
    $query->bindParam(":tra", $tratamientoHta);
    $query->bindParam(":pun", $puntuacion);
    $query->bindParam(":por", $porcentaje);
    $query->execute();
    $pdo = null;
    echo "ok";
}
?>