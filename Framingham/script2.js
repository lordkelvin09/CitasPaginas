Listar();
function Listar(busqueda) {
    fetch("listar.php", {
        method: "POST",
        body: busqueda
    }).then(response => response.text()).then(response =>{
        result.innerHTML = response;
    })
}

let registrar = document.querySelector('#registrar');
registrar.addEventListener('click', () => {
    fetch("registrar.php", {
        method: "POST",
        body: new FormData(formulario)
    }).then(response => response.text()).then(response =>{
        if(response == "ok") {
            Swal.fire({
                icon: "success",
                title: "Registrado",
                showConfirmButton: false,
                timer: 2000
              })
            formulario.reset();
            Listar();
            }else{
              Swal.fire({
                icon: "success",
                title: "Modificado",
                showConfirmButton: false,
                timer: 2000
              })
            registrar.value = "Resgistrar";
            idp.value = "";
            Listar();
            // formulario.reset();
            }
    })
});

function Eliminar(id) {
    Swal.fire({
        title: "Esta seguro de Eliminar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI!",
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch("eliminar.php", {
            method: "POST",
            body: id
          }).then(response => response.text()).then(response => {
            if (response == "ok") {
                  formulario.reset();
                  console.log(response);
                  Swal.fire({
                    icon: "success",
                    title: "Eliminado",
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
          })
        }
      });
}

function Editar(id) {
  fetch("editar.php",{
    method: "POST",
    body: id
  }).then(response => response.json()).then(response => {
    idp.value = response.id;
    sexo.value = response.sexo;
    edad.value = response.edad;
    colesterolTotal.value = response.colesterolTotal;
    colesterolHdl.value = response.colesterolHdl;
    fumador.value = response.colesterolHdl;
    presionArterial.value = response.presionArterial;
    tratamientoHta.value = response.tratamientoHta;
    registrar.value = "Actualizar";
  })
}

let buscar = document.querySelector('#buscar');
buscar.addEventListener("keyup", () => {
  const valor = buscar.value;
  if (valor == "") {
    Listar()
  } else {
    Listar(valor)
  }
})