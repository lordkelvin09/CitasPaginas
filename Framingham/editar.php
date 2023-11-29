<?php
    $data = file_get_contents("php://input");
    require "database.php";
    $query = $pdo->prepare("SELECT * FROM clientes WHERE id = :id");
    $query->bindParam(":id", $data);
    $query->execute();
    $resultado = $query->fetch(PDO::FETCH_ASSOC);
    echo json_encode($resultado);
?>