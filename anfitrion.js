let datos = function () {
    let fisrtNombre = document.getElementById("firstName").value;
    let LastNombre = document.getElementById("LastName").value;
    let correo = document.getElementById("email").value;
    let numero = document.getElementById("numeroCelular").value;
    console.log(fisrtNombre + LastNombre + correo + numero);
    document.getElementById("persona").style.fontWeight = "500"
    document.getElementById("persona").innerHTML = "Hola" + " " + fisrtNombre;
    document.getElementById("containerInfo").style.width = "90%";
    document.getElementById("containerInfo").style.height = "85%";
    document.getElementById("containerInfo").style.borderRadius = "0px";
    document.getElementById("firstName").type = "hidden";
    document.getElementById("LastName").type = "hidden";
    document.getElementById("email").type = "hidden";
    document.getElementById("numeroCelular").type = "hidden";
    document.getElementById("validarInfo").style.visibility = "hidden";
    document.getElementById("container-input").style.visibility = "hidden";
    document.getElementById("container-input").style.display = "none";
    document.querySelector(".container-form").style.display = "flex"
    document.querySelector(".container-prueba").style.display = "block"
    document.querySelector(".container-prueba2").style.display = "block"
};

let datosSecundarios = function () {
    let pais = document.getElementById("pais").value;
    let departamento = document.getElementById("departamento").value;
    let municipio = document.getElementById("municipio").value;
    let direccion = document.getElementById("direccion").value;
    let establecimiento = document.getElementById("container-establecimiento").value;
    let nombreEstablecimiento = document.getElementById("nombreEstablecimiento").value;
    let logo = document.getElementById("logo").value;
    console.log(pais + departamento + municipio + direccion + establecimiento + nombreEstablecimiento );
    document.querySelector(".container-form").style.display = "none";
    document.getElementById("containerInfo").style.width = "70%";
    document.getElementById("containerInfo").style.height = "20%";
    document.getElementById("persona").innerHTML = "En breve confirmaremos tus datos";
}




