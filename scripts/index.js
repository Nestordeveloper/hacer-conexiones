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
        // Mostrar el nombre y ocultar el campo de entrada de texto
        userNameElement.innerText = nameInputElement.value;
        userNameElement.style.display = "inline";
        nameInputElement.style.display = "none";
    } else {
        // Mostrar el campo de entrada de texto y ocultar el nombre
        nameInputElement.value = userNameElement.innerText;
        userNameElement.style.display = "none";
        nameInputElement.style.display = "inline";
        nameInputElement.focus(); // Enfocar el campo de entrada
    }
}