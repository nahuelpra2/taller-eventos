document.addEventListener("DOMContentLoaded", function() {
    // Selecciono el div
    const miDiv = document.getElementById("midiv"); 

    // Agrego el manejador de eventos para el clic en el div:
    miDiv.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});