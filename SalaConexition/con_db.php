<?php 

class con_db extends historial
{
    public function __constuct() {
        parent::__constuct();
    }
    public function index() {
        $this->views->getView($this, 'index');
    }
    public function registrar() {
        if(empty($_POST['usuario']) || empty($_POST['nombre']) || empty($_POST['correo']) || empty($_POST['direction']) || empty($_POST['ciudad']) || empty($_POST['estado']) || empty($_POST['telefono']) || empty($_POST['nacimiento']) || empty($_POST['consulta']) || empty($_POST['diagnostico']) || empty($_POST['examenes'])) {
            $mensaje = array('msg' => 'todos los campos son requeridos', 'estado' => false, 'tipo' => 'warning');
        }else{
            $usuario = $_POST['usuario'];
            $nombre = $_POST['nombre'];
            $correo = $_POST['correo'];
            $direction = $_POST['direction'];
            $ciudad = $_POST['ciudad'];
            $estado = $_POST['estado'];
            $telefono = $_POST['telefeno'];
            $nacimiento = $_POST['nacimiento'];
            $consulta = $_POST['consulta'];
            $diagnostico = $_POST['diagnostico'];
            $examenes = $_POST['examenes'];
            $respuesta = $this->model->registrar($usuario, $nombre, $correo, $direction, $ciudad, $estado, $telefono, $nacimiento, $consulta, $diagnostico, $examenes);
            echo $respuesta;
        }
    }
}
