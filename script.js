document.addEventListener("DOMContentLoaded", function() {

    function comprobarRespuesta() { // Función para comprobar la respuesta cuando se hace clic en el botón
        const opcionSeleccionada = document.querySelector('input[name="comparacion"]:checked');
        const mensajeResultado = document.querySelector('.result-message');

        if (opcionSeleccionada) {  // Para verificar la opción correcta
            if (opcionSeleccionada.value === "menor") {
                mensajeResultado.textContent = "¡Respuesta correcta!";
                mensajeResultado.style.color = "green";
            } else {
                mensajeResultado.textContent = "Respuesta incorrecta. Intenta de nuevo.";
                mensajeResultado.style.color = "red";
            }
        } else {
            alert("Por favor, selecciona una opción.");   // Mostrar alerta si no se seleccionó ninguna opción
        }
    }

    const botonComprobar = document.getElementById('botonComprobar'); // Agregar evento al botón para llamar a comprobarRespuesta cuando se haga clic
    if (botonComprobar) {
        botonComprobar.addEventListener('click', comprobarRespuesta);
    }
});
