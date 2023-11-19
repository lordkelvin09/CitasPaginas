<?php
    $data = file_get_contents("php://input");
    require "database.php";
    $query = $pdo->prepare("DELETE FROM clientes WHERE id = :id");
    $query->bindParam(":id", $data);
    $query->execute();
    echo "ok";
?>