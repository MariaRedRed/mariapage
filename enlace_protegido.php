<?php

if (isset($_POST["password"])) {
    $contraseñaIngresada = $_POST["password"];
    $contraseñaCorrecta = "Taw46557"; 
    

    if ($contraseñaIngresada === $contraseñaCorrecta) {
       
        header("Location: pagina_protegida.html"); 
        exit;
    } else {
    
        echo "Contraseña incorrecta. Por favor, inténtalo de nuevo.";
    }
} else {

    echo "No se recibió ninguna contraseña.";
}
?>
