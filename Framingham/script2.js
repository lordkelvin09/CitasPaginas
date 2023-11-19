function Listar() {
    fetch("listar.php", {
        method: "POST"
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
            //   formulario.reset();
            }
            Listar();

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
  }).then(response => response.text()).then(response => {
    console.log(response)
  })
}