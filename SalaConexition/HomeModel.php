<?php 
class HomeModel extends Query{
    public function __construct() {
        parent::__construct();
    }
    public function registrar($usuario, $nombre, $correo, $direction, $ciudad, $estado, $telefono, $nacimiento, $consulta, $diagnostico, $examenes) {
        $sql = "INSERT INTO historial (usuario, nombre, correo, direction, ciudad, estado, telefono, nacimiento, consulta, diagnostico, examenes) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        $array = array($usuario, $nombre, $correo, $direction, $ciudad, $estado, $telefono, $nacimiento, $consulta, $diagnostico, $examenes);
        $data = $this->save($sql, $array);
        if($data == 1) {
            $msg = 1;
        } else {
            $msg = 0;
        }
        return $msg;
    }
}

?>