<?php
require_once ('/Config/App/Controller.php');

class registrar extends Controller
{
    public function __construct() {
        parent::__construct();
    }
    public function index()
    {
        $this->views->getView($this,"index2");
    }
    public function registrar()
    {
        if(empty($_POST['sexo']) || empty($_POST['edad']) || empty($_POST['colesterolTotal']) || empty($_POST['colesterolHdl']) || empty($_POST['fumador']) || empty($_POST['presionArterial']) || empty($_POST['tratamientoHta'])){
        $mensaje = array('msg' => 'Todos los campos son requeridos', 'estado' => false, 'tipo' => 'warning');
    }else {
    $sexo = $_POST['sexo'];
    $edad = $_POST['edad'];
    $colesterolTotal = $_POST['colesterolTotal'];
    $colesterolHdl = $_POST['colesterolHdl'];
    $fumador = $_POST['fumador'];
    $presionArterial = $_POST['presionArterial'];
    $tratamientoHta = $_POST['tratamientoHta'];
    }
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['registrer'])){
        $respuesta = $this->model->registrar($edad, $sexo, $colesterolHdl, $colesterolTotal, $presionArterial, $fumador, $tratamientoHta);
        if($respuesta == 1) {
            $mensaje = array('msg' => 'Datos enviados', 'estado' => true, 'tipo' => 'success');
        }else{
            $mensaje = array('msg' => 'Error al registrar los datos', 'estado' => false, 'tipo' => 'error');
        }
    }
    echo json_encode($mensaje);
    die();

}}

?>