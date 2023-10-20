<?php
class HomeModel extends Query{
    public function __construct(){
        parent::__construct();
    }
    public function registrar($edad, $sexo, $colesterolHdl, $colesterolTotal, $presionArterial, $fumador, $tratamientoHta)
    {
        $sql = "INSERT INTO clientes (edad, sexo, colesterolHdl, colesterolTotal, presionArterial, fumador, tratamientoHta) VALUES (?,?,?,?,?,?,?)";
        $array = array($edad, $sexo, $colesterolHdl, $colesterolTotal, $presionArterial, $fumador, $tratamientoHta);
        $data = $this->save($sql, $array);
        if($data == 1) {
            $msg = 1;
        } else {
            $msg = 0;
        } 
        return $msg;
    }
    public function listarEventos()
    {
        $sql = "SELECT * FROM clientes";
        return $this->selectAll($sql);
    }
}

?>