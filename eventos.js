document.addEventListener("DOMContentLoaded", function() {
    // Selecciono el div
    const miDiv = document.getElementById("midiv"); 
    const btn = document.querySelector("button")

    // Agrego el manejador de eventos para el clic en el div:
    miDiv.addEventListener("click", function() {
        alert("Hola! Soy el div");
        
    });

    btn.addEventListener("click", function(e) {
        e.stopPropagation();
        
    });
});