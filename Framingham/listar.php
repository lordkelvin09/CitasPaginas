<?php
    $data = file_get_contents("php://input");
    require 'database.php';
    $consulta = $pdo->prepare("SELECT * FROM clientes ORDER BY id DESC");
    $consulta->execute();
    if($data != "") {
        $consulta = $pdo->prepare("SELECT * FROM clientes WHERE id LIKE '%".$data."%'");
        $consulta->execute();
    }
    $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
    foreach ($resultado as $data) {
        echo "<tr>
            <td>".$data['id']. "</td>
            <td>".$data['edad']. "</td>
            <td>".$data['sexo']. "</td>
            <td>".$data['colesterolHdl']. "</td>
            <td>".$data['colesterolTotal']. "</td>
            <td>".$data['presionArterial']. "</td>
            <td>".$data['fumador']. "</td>
            <td>".$data['tratamientoHta']. "</td>
            <td>";
            if (isset($data['puntuacion'])) {
                echo $data['puntuacion'];
            } else{
                echo 'No definido';
            }
             
            echo "</td>
                <td>";

            // Verificar si la clave 'porcentaje' está definida antes de acceder a ella
            if (isset($data['porcentaje'])) {
                echo $data['porcentaje'];
            } else {
                echo "No definido";
            }

            echo "</td>
                <td>
                    <button type='button' class='btn btn-success' onclick=Editar('".$data['id']. "')>Editar</button>
                    <button type='button' class='btn btn-danger' onclick=Eliminar('".$data['id']. "')>Eliminar</button>
                </td>
            </tr>";
    }
?>