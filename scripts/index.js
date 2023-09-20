var requestCount = 2;
var numConnections = 16;
function numberConnections(connection) {
    if ((connection === 1 || connection === 2) && requestCount > 0) {
        requestCount--;
        numConnections++;
        document.getElementById("requestCount").innerText = requestCount;
        document.getElementById("numConnections").innerText = numConnections;
    } else if (connection === 3 || connection === 4) {
        requestCount--;
        document.getElementById("requestCount").innerText = requestCount;
    }
}

function removeRequest(userId) {
    var userElement = document.getElementById("user" + userId);

    if (userElement) {
        userElement.remove();
    }
}

function editProfile() {
    var userNameElement = document.getElementById("user");
    var nameInputElement = document.getElementById("nameInput");

    if (userNameElement.style.display === "none") {
        userNameElement.innerText = nameInputElement.value;
        userNameElement.style.display = "inline";
        nameInputElement.style.display = "none";
    } else {
        nameInputElement.value = userNameElement.innerText;
        userNameElement.style.display = "none";
        nameInputElement.style.display = "inline";
        nameInputElement.focus();
    }
}


//* Funciones objetivo *//
function cambiarNombre(elemento){
    const elementoNombreUsuario = document.querySelector('userName');
    elementoNombreUsuario.innerText = "Martha Gómez";
}

function removerUsuario(elemento, opcion){
    const contenedor = elemento.closes('card-list-item');
    contenedor.remove();
    let numeroDeConexiones = document.querySelector('#connectionRequestNumber').innerText = numeroDeConexiones;
    numeroDeConexiones--;
    document.querySelector('#connectionRequestNumber').innerText = numeroDeConexiones;
    if(opcion === 'aceptar'){
        let numeroTotalDeConexiones = document.querySelector('#totalConnections').innerText;
        numeroTotalDeConexiones++;
        document.querySelector('#totalConnections').innerText = numeroTotalDeConexiones;
    }
}