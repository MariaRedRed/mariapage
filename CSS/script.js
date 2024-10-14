function verificarPassword() {
    var contraseñaIngresada = document.getElementById("password").value;

    // Envía la contraseña al servidor para su verificación
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "verificar_password.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.responseText === "correcto") {
                var paginaDestino = obtenerPaginaDestino(proyectoActual);
                window.location.href = paginaDestino;
            } else {
                alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
            }
        }
    };
    xhr.send("password=" + encodeURIComponent(contraseñaIngresada));
}