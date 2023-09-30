<?php
class HomeModel extends Query{
    public function __construct()
    {
        parent::__construct();
    }
    public function registrar($evento, $fecha, $hour, $color)
    {
        $sql = "INSERT INTO eventos (title, start, hour, color) VALUES (?,?,?,?)";
        $array = array($evento, $fecha, $hour, $color);
        $data = $this->save($sql, $array);
        if($data == 1) {
            $msg = 1;
        } else {
            $msg = 0;
        }
        return $msg;
    }
    public function modificar($evento, $fecha, $hour, $color, $id)
    {
        $sql = "UPDATE eventos SET title=?, start=?, hour=?, color=? WHERE id=?";
        $array = array($evento, $fecha, $hour, $color, $id);
        $data = $this->save($sql, $array);
        if($data == 1) {
            $msg = 1;
        } else {
            $msg = 0;
        }
        return $msg;
    }
    public function eliminar($id)
    {
        $sql = "DELETE FROM eventos WHERE id=?";
        $array = array($id);
        $data = $this->save($sql, $array);
        if($data == 1) {
            $msg = 1;
        } else {
            $msg = 0;
        }
        return $msg;
    }
    public function drop($fecha, $id)
    {
        $sql = "UPDATE eventos SET start=? WHERE id=?";
        $array = array($fecha, $id);
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
        $sql = "SELECT * FROM eventos";
        return $this->selectAll($sql);
    }
}

?>